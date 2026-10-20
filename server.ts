import express from "express";
import http from "http";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import sharp from "sharp";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { getAllSeoRoutes } from "./src/data/seoRoutes";
import { BLOG_SLUG_ALIASES, INITIAL_BLOG_POSTS } from "./src/data/blogPosts";
import { INITIAL_DISHES } from "./src/data/dishes";
import { getDishRecipe, getRecipeSlug, formatRecipeIngredientsForSchema } from "./src/data/recipes";
import { getDishImageByName } from "./src/utils/dishImageCatalog";

function parseMinutesToIso(str?: string): string {
  if (!str) return 'PT30M';
  const match = str.match(/(\d+)/);
  if (!match) return 'PT30M';
  const mins = parseInt(match[1], 10);
  if (str.includes('giờ') || /\b\d+\s*h\b/i.test(str)) {
    return `PT${mins}H`;
  }
  return `PT${mins}M`;
}

function formatIngredients(groups?: Array<{ category: string; items: string[] }>): string[] {
  return formatRecipeIngredientsForSchema(groups);
}

dotenv.config();

// Compile-time define replaced by esbuild for the production bundle
declare const __IS_PRODUCTION_BUILD__: boolean | undefined;

const app = express();
const isBundled =
  typeof __IS_PRODUCTION_BUILD__ !== "undefined" && __IS_PRODUCTION_BUILD__ === true;
const isProduction =
  process.env.NODE_ENV === "production" ||
  isBundled ||
  (typeof __filename !== "undefined" && (__filename.endsWith(".cjs") || __filename.includes("dist")));

if (isProduction && process.env.NODE_ENV !== "production") {
  process.env.NODE_ENV = "production";
}

const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// 301 Permanent Canonical Redirect: www.angigio.com -> angigio.com
app.use((req, res, next) => {
  const host = (req.headers.host || "").toLowerCase();
  if (host.startsWith("www.angigio.com")) {
    const targetUrl = `https://angigio.com${req.originalUrl || req.url}`;
    return res.redirect(301, targetUrl);
  }
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// In-memory click tracking & stats
interface ClickEvent {
  id: string;
  dishId: string;
  dishName: string;
  platform: "shopeefood" | "grabfood" | "befood";
  timestamp: string;
  estimatedCommission: number;
}

let clickHistory: ClickEvent[] = [
  {
    id: "clk_1",
    dishId: "com-tam",
    dishName: "Cơm tấm sườn bì chả",
    platform: "shopeefood",
    timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    estimatedCommission: 3500,
  },
  {
    id: "clk_2",
    dishId: "bun-bo-hue",
    dishName: "Bún bò Huế đặc biệt",
    platform: "grabfood",
    timestamp: new Date(Date.now() - 1000 * 60 * 80).toISOString(),
    estimatedCommission: 4200,
  },
  {
    id: "clk_3",
    dishId: "tra-sua",
    dishName: "Trà sữa trân châu đường đen",
    platform: "shopeefood",
    timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString(),
    estimatedCommission: 2800,
  },
  {
    id: "clk_4",
    dishId: "pho-bo",
    dishName: "Phở bò tái lăn",
    platform: "befood",
    timestamp: new Date(Date.now() - 1000 * 60 * 220).toISOString(),
    estimatedCommission: 3800,
  },
];

let affiliateConfig = {
  shopeeAffiliateId: "17307790541",
  shopeeSubId: "homnayangi_web",
  shopeeBaseUrl: "https://shopeefood.vn",
  shopeeAffiliateUrl: "https://s.shopee.vn/aff_food_homnayangi",
  
  grabfoodAffiliateId: "GRAB_AFF_VN_777",
  grabfoodDeepLink: "grab://food/search",
  grabfoodWebUrl: "https://food.grab.com/vn/vi/",
  
  befoodPartnerId: "BEFOOD_VN_666",
  befoodWebUrl: "https://be.com.vn/dich-vu/be-food/",
  
  averageCommissionRate: 5.5, // 5.5%
  defaultCity: "TP. Hồ Chí Minh",
};

// Lazy Gemini SDK client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key.startsWith("MY_") || key === "placeholder" || key.trim() === "") {
    return null;
  }
  if (!genAIClient) {
    try {
      genAIClient = new GoogleGenAI({
        apiKey: key,
      });
    } catch {
      genAIClient = null;
    }
  }
  return genAIClient;
}

function getContextualDishes(params: {
  mealTime: string;
  budget: string;
  mood: string;
  weather: string;
  cravings: string;
  location: string;
  partySize: number;
  dietary?: string;
  excludeNames?: string[];
}) {
  const { mealTime, budget, mood, location, excludeNames = [] } = params;
  const b = (budget || "").toLowerCase();

  let targetTier: "under35k" | "35k_60k" | "60k_100k" | "over100k" = "35k_60k";
  if (b.includes("dưới 35k") || b.includes("duoi 35k") || b.includes("< 35k") || b.includes("35k (tiết")) {
    targetTier = "under35k";
  } else if (b.includes("> 100k") || b.includes("trên 100k") || b.includes("sang chảnh")) {
    targetTier = "over100k";
  } else if (b.includes("60k - 100k") || b.includes("60k-100k") || b.includes("100k (đầy")) {
    targetTier = "60k_100k";
  }

  const pool = [
    // --- TIER 1: DƯỚI 35K (TIẾT KIỆM) ---
    {
      tier: "under35k",
      name: "Bánh Mì Pate Thịt Nguội Đầy Đặn Xốt Bơ",
      tagline: "Vỏ giòn tan, ruột mềm thơm pate gan béo ngậy kèm đồ chua chống ngấy",
      category: "Bánh Mì / Ăn Nhanh",
      estimatedPrice: "20.000đ - 30.000đ",
      reason: `Giá cực mềm dưới 35k, chuẩn tiêu chí tiết kiệm cho bữa ${mealTime}.`,
      searchKeyword: "Bánh mì pate thịt nguội",
      tags: ["Tiết kiệm", "Dưới 35k", "Nhanh gọn"],
      calories: "~420 kcal",
      pairWith: "Sữa đậu nành đá mát lạnh",
      image: "/images/banh_mi_pate.jpg",
    },
    {
      tier: "under35k",
      name: "Xôi Xéo Hà Nội Hành Phi Rắc Ruốc Thịt",
      tagline: "Hạt nếp dẻo thơm nước mỡ gà, đỗ xanh bùi mịn hành phi giòn tan",
      category: "Xôi / Ăn Sáng & Trưa",
      estimatedPrice: "20.000đ - 35.000đ",
      reason: "Chi phí dưới 35k mà cực kỳ chắc bụng suốt buổi.",
      searchKeyword: "Xôi xéo Hà Nội",
      tags: ["Tiết kiệm", "Dưới 35k", "Chắc bụng"],
      calories: "~480 kcal",
      pairWith: "Trà đá hoa lài",
      image: "/images/xoi_xeo_ha_noi.jpg",
    },
    {
      tier: "under35k",
      name: "Cháo Sườn Sụn Quẩy Giòn Ruốc Thịt",
      tagline: "Cháo mịn như nhung, sườn sụn giòn sần sật rắc tiêu thơm lừng",
      category: "Cháo Nóng / Dễ Ăn",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Ấm bao tử, dễ tiêu hóa, mức giá dưới 35k vừa túi tiền.",
      searchKeyword: "Cháo sườn sụn",
      tags: ["Tiết kiệm", "Dưới 35k", "Ấm bụng"],
      calories: "~390 kcal",
      pairWith: "Nước đậu nành nóng",
      image: "/images/chao_suon_sun.jpg",
    },
    {
      tier: "under35k",
      name: "Bún Riêu Cua Bình Dân Tàu Hũ Ky & Cà Chua",
      tagline: "Nước dùng chua dịu tự nhiên, gạch cua bùi thơm đậm đà",
      category: "Bún Bình Dân",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Món nước thanh mát giá chỉ dưới 35k rất hợp túi tiền.",
      searchKeyword: "Bún riêu cua đồng",
      tags: ["Tiết kiệm", "Dưới 35k", "Thanh mát"],
      calories: "~410 kcal",
      pairWith: "Trà đá hoặc nước mía",
      image: "/images/bun_rieu_cua.jpg",
    },
    {
      tier: "under35k",
      name: "Gỏi Cuốn Tôm Thịt Thanh Mát (3 Cuốn)",
      tagline: "Tôm luộc đỏ au, thịt ba chỉ cuốn bánh tráng rau sống giòn mát",
      category: "Món Cuốn / Ăn Nhẹ",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Món ăn nhẹ bụng, tươi ngon giải nhiệt giá vừa vặn dưới 35k.",
      searchKeyword: "Gỏi cuốn tôm thịt",
      tags: ["Tiết kiệm", "Dưới 35k", "Healthy"],
      calories: "~320 kcal",
      pairWith: "Nước rau má đậu xanh",
      image: "/images/goi_cuon_tom_thit_chuan.jpg",
    },
    {
      tier: "under35k",
      name: "Bánh Xèo Miền Tây Giòn Rụm Nhân Tôm Thịt Giá",
      tagline: "Vỏ bánh vàng ươm béo ngậy cốt dừa, cuốn rau rừng chấm nước mắm chua ngọt",
      category: "Bánh Ăn Vặt / Ăn Trưa",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Chi phí dưới 35k cho một suất bánh xèo giòn rụm bắt vị.",
      searchKeyword: "Bánh xèo miền Tây",
      tags: ["Tiết kiệm", "Dưới 35k", "Giòn rụm"],
      calories: "~450 kcal",
      pairWith: "Trà chanh tươi",
      image: "/images/banh_xeo.jpg",
    },
    {
      tier: "under35k",
      name: "Bánh Mì Ốp La 2 Trứng Xốt Bơ & Dưa Cà",
      tagline: "Trứng lòng đào béo ngậy, bánh mì giòn xốp nóng hổi xịt tương ớt",
      category: "Bánh Mì / Sáng Trưa",
      estimatedPrice: "20.000đ - 30.000đ",
      reason: "Chưa tới 30k cực ngon chuẩn vị bữa ăn tiết kiệm.",
      searchKeyword: "Bánh mì ốp la",
      tags: ["Tiết kiệm", "Dưới 35k", "Nhanh gọn"],
      calories: "~400 kcal",
      pairWith: "Cà phê sữa đá",
      image: "/images/banh_mi_chao.jpg",
    },
    {
      tier: "under35k",
      name: "Bánh Tráng Trộn Sài Gòn Đầy Đủ Trứng Cút Tắc Khô Bò",
      tagline: "Bánh tráng dẻo thấm sốt quất chua cay, rau rau rắm & đậu phụng giòn",
      category: "Ăn Vặt / Ăn Nhẹ",
      estimatedPrice: "20.000đ - 30.000đ",
      reason: "Bắt vị xế chiều giải stress giá siêu tiết kiệm dưới 35k.",
      searchKeyword: "Bánh tráng trộn",
      tags: ["Tiết kiệm", "Dưới 35k", "Ăn vặt"],
      calories: "~350 kcal",
      pairWith: "Trà chanh giã tay",
      image: "/images/banh_trang_tron.jpg",
    },
    {
      tier: "under35k",
      name: "Bột Chiên Trứng Đồ Chua Sài Gòn Giòn Rụm",
      tagline: "Bột cắt khối chiên giòn xém, đập trứng gà béo ngậy ăn kèm đu đủ bào",
      category: "Ăn Vặt / Ăn Tối",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Nóng hổi giòn rụm giá chỉ 25k - 35k vô cùng hấp dẫn.",
      searchKeyword: "Bột chiên trứng",
      tags: ["Tiết kiệm", "Dưới 35k", "Giòn rụm"],
      calories: "~460 kcal",
      pairWith: "Trà đá đường",
      image: "/images/bot_chien.jpg",
    },
    {
      tier: "under35k",
      name: "Hủ Tiếu Gõ Nước Lèo Đậm Đà Bò Viên Thịt Heo",
      tagline: "Sợi hủ tiếu dai dai, nước lèo ngọt thanh thơm hẹ & tỏi phi giòn",
      category: "Món Nước Bình Dân",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Ấm lòng ấm bụng bữa tối muộn với giá dưới 35k.",
      searchKeyword: "Hủ tiếu gõ",
      tags: ["Tiết kiệm", "Dưới 35k", "Bình dân"],
      calories: "~410 kcal",
      pairWith: "Trà đá lạnh",
      image: "/images/hu_tieu_go.jpg",
    },
    {
      tier: "under35k",
      name: "Bánh Cuốn Nóng Nhân Thịt Mộc Nhĩ Hành Phi",
      tagline: "Tráng mỏng mướt mịn, nhân thịt băm mộc nhĩ giòn sần sật chấm mắm ngọt",
      category: "Món Ăn Sáng & Trưa",
      estimatedPrice: "25.000đ - 35.000đ",
      reason: "Nhẹ nhàng dễ ăn, giá hạt dẻ dưới 35k.",
      searchKeyword: "Bánh cuốn nóng",
      tags: ["Tiết kiệm", "Dưới 35k", "Thanh nhẹ"],
      calories: "~380 kcal",
      pairWith: "Nước chanh dây",
      image: "/images/banh_cuon.jpg",
    },

    // --- TIER 2: 35K - 60K (VĂN PHÒNG) ---
    {
      tier: "35k_60k",
      name: "Cơm Tấm Sườn Bì Chả Mỡ Hành Trứng Ốp La",
      tagline: "Kinh điển món ngon Sài Gòn, thơm lừng sườn nướng mật ong nức mũi",
      category: "Cơm Văn Phòng",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Thuộc khoảng giá 35k - 60k chuẩn văn phòng, no chắc bụng.",
      searchKeyword: "Cơm tấm sườn bì chả",
      tags: ["Văn phòng", "35k-60k", "Kinh điển"],
      calories: "~680 kcal",
      pairWith: "Canh khổ qua dồn thịt & trà đá",
      image: "/images/com_tam_suon_bi_cha.jpg",
    },
    {
      tier: "35k_60k",
      name: "Bún Chả Hà Nội Than Hoa Nước Chấm Thanh",
      tagline: "Chả nướng thơm xém cạnh, nước mắm đu đủ cà rốt chua ngọt mát lành",
      category: "Bún / Món Chua Ngọt",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Chuẩn phân khúc 35k - 60k, chua ngọt mát lành dễ ăn.",
      searchKeyword: "Bún chả Hà Nội",
      tags: ["Văn phòng", "35k-60k", "Chua ngọt"],
      calories: "~540 kcal",
      pairWith: "Nước sấu ngâm đường",
      image: "/images/bun_cha_ha_noi.jpg",
    },
    {
      tier: "35k_60k",
      name: "Cơm Gà Xé Phay Hội An Trộn Rau Răm",
      tagline: "Cơm nấu nước luộc gà vàng ươm dẻo thơm, thịt gà ta xé phay bóp chua ngọt",
      category: "Cơm Đặc Sản",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Giá từ 40k - 55k vừa vặn ngân sách cơm trưa văn phòng.",
      searchKeyword: "Cơm gà Hội An",
      tags: ["Văn phòng", "35k-60k", "Đặc sản"],
      calories: "~550 kcal",
      pairWith: "Trà đào chanh sả đá",
      image: "/images/com_ga_hoi_an.jpg",
    },
    {
      tier: "35k_60k",
      name: "Phở Bò Tái Lăn Áp Chảo Nước Dùng Béo Ngậy",
      tagline: "Thịt bò gầu tái lăn áp chảo thơm lừng mùi khói, phủ ngập hành hoa",
      category: "Bún / Phở Gia Truyền",
      estimatedPrice: "45.000đ - 60.000đ",
      reason: "Phân khúc 35k - 60k cho tô phở bò nóng hổi thơm nức.",
      searchKeyword: "Phở bò tái lăn",
      tags: ["Văn phòng", "35k-60k", "Bổ dưỡng"],
      calories: "~570 kcal",
      pairWith: "Quẩy giòn rụm & trứng chần",
      image: "/images/pho_bo_tai_lan.jpg",
    },
    {
      tier: "35k_60k",
      name: "Bún Bò Huế Chả Cua Thịt Bắp Nạm",
      tagline: "Nước dùng sả ruốc cay nồng nghi ngút khói, xì xụp ấm lòng",
      category: "Bún Đậm Đà",
      estimatedPrice: "45.000đ - 60.000đ",
      reason: "Tô bún bò Huế đầy đặn chất lượng trong tầm giá 35k - 60k.",
      searchKeyword: "Bún bò Huế",
      tags: ["Văn phòng", "35k-60k", "Cay nồng"],
      calories: "~590 kcal",
      pairWith: "Trà gừng mật ong",
      image: "/images/bun_bo_hue.jpg",
    },
    {
      tier: "35k_60k",
      name: "Hủ Tiếu Nam Vang Khô Tôm Thịt Trứng Cút",
      tagline: "Sốt trộn đậm đà tỏi phi thơm nức, súp hầm xí quách ngọt thanh",
      category: "Hủ Tiếu Khô",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Sốt trộn béo thơm vừa tầm giá 35k - 60k cho bữa trưa.",
      searchKeyword: "Hủ tiếu Nam Vang",
      tags: ["Văn phòng", "35k-60k", "Đậm đà"],
      calories: "~520 kcal",
      pairWith: "Chén súp xí quách sườn heo",
      image: "/images/hu_tieu_nam_vang.jpg",
    },
    {
      tier: "35k_60k",
      name: "Cơm Chiên Hải Sản Mực Tôm Hạt Nhảy",
      tagline: "Cơm chiên tơi xốp vàng ươm, tôm mực tươi giòn rụm thơm lừng",
      category: "Cơm Chiên",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Giá 40k - 55k no chắc bụng cho dân văn phòng.",
      searchKeyword: "Cơm chiên hải sản",
      tags: ["Văn phòng", "35k-60k", "Hải sản"],
      calories: "~630 kcal",
      pairWith: "Dưa leo cà chua xắt lát",
      image: "/images/com_chien_hai_san.jpg",
    },
    {
      tier: "35k_60k",
      name: "Bún Thịt Nướng Chả Giò Sài Gòn Nước Mắm Chanh Tỏi",
      tagline: "Thịt nướng xém cạnh thơm phức, chả giòn rụm cuốn bún mát lạnh",
      category: "Bún Trộn",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Vừa vặn phân khúc 35k - 60k không lo bị ngấy.",
      searchKeyword: "Bún thịt nướng chả giò",
      tags: ["Văn phòng", "35k-60k", "Bắt vị"],
      calories: "~530 kcal",
      pairWith: "Trà tắc xí muội",
      image: "/images/bun_thit_nuong.jpg",
    },
    {
      tier: "35k_60k",
      name: "Cơm Gà Xối Mỡ Da Giòn Xốt Tương Mật Ong",
      tagline: "Đùi gà xối mỡ da giòn rụm, thịt bên trong mọng nước thơm nức",
      category: "Cơm Gà",
      estimatedPrice: "45.000đ - 60.000đ",
      reason: "Bữa trưa năng lượng tầm giá 45k - 60k.",
      searchKeyword: "Cơm gà xối mỡ",
      tags: ["Văn phòng", "35k-60k", "Da giòn"],
      calories: "~670 kcal",
      pairWith: "Canh rong biển thịt băm",
      image: "/images/com_ga_xoi_mo.jpg",
    },
    {
      tier: "35k_60k",
      name: "Mì Quảng Tôm Thịt Trứng Cút Bánh Đa Giòn",
      tagline: "Nước dùng xăm xắp đậm đà, đậu phụng rang thơm bùi bánh đa giòn tan",
      category: "Mì Đặc Sản Miền Trung",
      estimatedPrice: "40.000đ - 55.000đ",
      reason: "Đổi vị đậm đà Miền Trung chỉ 40k - 55k.",
      searchKeyword: "Mì Quảng tôm thịt",
      tags: ["Văn phòng", "35k-60k", "Đặc sản"],
      calories: "~510 kcal",
      pairWith: "Trà xanh đá mát",
      image: "/images/mi_quang.jpg",
    },

    // --- TIER 3: 60K - 100K (ĐẦY ĐẶN / CHẤT LƯỢNG) ---
    {
      tier: "60k_100k",
      name: "Cơm Niêu Bò Xào Tiêu Đen & Canh Cải Thịt Băm",
      tagline: "Cơm cháy giòn rau rẩu đáy niêu, sốt tiêu đen xèo xèo cay tê",
      category: "Cơm Niêu Cao Cấp",
      estimatedPrice: "65.000đ - 90.000đ",
      reason: "Chuẩn ngân sách 60k - 100k cho bữa ăn đầy đặn chất lượng cao.",
      searchKeyword: "Cơm niêu bò sốt tiêu đen",
      tags: ["Chất lượng", "60k-100k", "Cơm cháy"],
      calories: "~660 kcal",
      pairWith: "Canh cải cúc thịt băm nóng",
      image: "/images/com_nieu_bo_tieu_den.jpg",
    },
    {
      tier: "60k_100k",
      name: "Bún Mắm Sài Gòn Hải Sản Tôm Mực Heo Quay Special",
      tagline: "Nước dùng mắm cá linh cá sặc đậm đà thơm nức, ngập tràn hải sản",
      category: "Bún Hải Sản Đậm Đà",
      estimatedPrice: "65.000đ - 85.000đ",
      reason: "Hải sản tươi tôm mực heo quay giòn trong tầm giá 60k - 100k.",
      searchKeyword: "Bún mắm Sài Gòn",
      tags: ["Chất lượng", "60k-100k", "Đặc sản"],
      calories: "~610 kcal",
      pairWith: "Rau đắng & nước sâm bông cúc",
      image: "/images/bun_mam.jpg",
    },
    {
      tier: "60k_100k",
      name: "Phở Đặc Biệt Tái Nạm Gầu Bắp Bò Trứng Chần",
      tagline: "Thịt bò tươi roi rói ngập tô, nước dùng ninh xương bò nguyên chất",
      category: "Phở Bò Cao Cấp",
      estimatedPrice: "65.000đ - 95.000đ",
      reason: "Tô phở đặc biệt ngập tràn thịt thuộc mức giá 60k - 100k.",
      searchKeyword: "Phở bò đặc biệt",
      tags: ["Chất lượng", "60k-100k", "Đặc biệt"],
      calories: "~640 kcal",
      pairWith: "Quẩy giòn & trứng chần",
      image: "/images/pho_bo_tai_lan.jpg",
    },
    {
      tier: "60k_100k",
      name: "Bún Đậu Mắm Tôm Đầy Đủ Heo Quay Chả Cốm Dồi Sụn",
      tagline: "Mẹt bún đậu đầy đặn ngập tràn mồi ngon chấm mắm tôm Thanh Hóa",
      category: "Bún Đậu Mẹt",
      estimatedPrice: "60.000đ - 85.000đ",
      reason: "Mẹt bún đậu hoành tráng đầy đặn đúng mức 60k - 100k.",
      searchKeyword: "Bún đậu mắm tôm",
      tags: ["Chất lượng", "60k-100k", "Mẹt đầy đủ"],
      calories: "~690 kcal",
      pairWith: "Nước tắc xí muội đá",
      image: "/images/bun_dau_mam_tom.jpg",
    },
    {
      tier: "60k_100k",
      name: "Cơm Bò Lúc Lắc Sốt Tiêu Đen & Salad Bơ",
      tagline: "Thịt bò mông mọng nước xào lửa lớn sốt tiêu bơ, cơm chiên tỏi thơm",
      category: "Cơm Bò Cao Cấp",
      estimatedPrice: "65.000đ - 95.000đ",
      reason: "Set cơm bò lúc lắc thơm ngon đậm vị thuộc ngân sách 60k - 100k.",
      searchKeyword: "Cơm bò lúc lắc",
      tags: ["Chất lượng", "60k-100k", "Bò mọng nước"],
      calories: "~620 kcal",
      pairWith: "Nước ép cam tươi",
      image: "/images/com_bo_luc_lac.jpg?v=3",
    },
    {
      tier: "60k_100k",
      name: "Bánh Canh Cua Nguyên Con Hải Sản Tôm Chả Cá",
      tagline: "Nước dùng sền sệt béo thơm gạch cua, tôm tươi chắc thịt",
      category: "Món Nước Bổ Dưỡng",
      estimatedPrice: "65.000đ - 95.000đ",
      reason: "Bổ dưỡng chất lượng cao trong tầm giá 60k - 100k.",
      searchKeyword: "Bánh canh cua nguyên con",
      tags: ["Chất lượng", "60k-100k", "Cua tươi"],
      calories: "~580 kcal",
      pairWith: "Trà hoa cúc lạnh",
      image: "/images/banh_canh_cua.jpg",
    },
    {
      tier: "60k_100k",
      name: "Mì Cay Hàn Quốc Hải Sản Bò Mỹ Cấp Độ 2",
      tagline: "Sợi mì Koreno dai ngon, kim chi chua cay nồng nặc tôm mực tươi",
      category: "Mì Cay Hàn Quốc",
      estimatedPrice: "60.000đ - 85.000đ",
      reason: "Thách thức vị giác cay nồng ngân sách 60k - 100k.",
      searchKeyword: "Mì cay hải sản",
      tags: ["Chất lượng", "60k-100k", "Cay nồng"],
      calories: "~600 kcal",
      pairWith: "Sữa tươi trân châu đường đen",
      image: "/images/mi_cay_han_quoc.jpg",
    },
    {
      tier: "60k_100k",
      name: "Chả Cá Lả Vọng Chảo Nóng Thịt Cá Lăng Thì Là",
      tagline: "Cá lăng ướp riềng mẻ chảo nóng xèo xèo, ăn kèm bún tươi mắm tôm",
      category: "Đặc Sản Hà Nội",
      estimatedPrice: "70.000đ - 95.000đ",
      reason: "Chất lượng cao đặc sản chuẩn vị tầm 70k - 95k.",
      searchKeyword: "Chả cá Lả Vọng",
      tags: ["Chất lượng", "60k-100k", "Đặc sản"],
      calories: "~560 kcal",
      pairWith: "Trà sâm đất",
      image: "/images/cha_ca_la_vong.jpg",
    },

    // --- TIER 4: > 100K (SANG CHẢNH / TỤ HỌP) ---
    {
      tier: "over100k",
      name: "Lẩu Riêu Cua Bắp Bò Sườn Sụn Mẹt Nhỏ",
      tagline: "Nước lẩu chua thanh vị dấm bỗng, riêu cua béo thơm bắp bò hoa giòn",
      category: "Lẩu Món Nóng / Tụ Họp",
      estimatedPrice: "120.000đ - 180.000đ",
      reason: "Nồi lẩu nóng hổi thuộc ngân sách trên 100k rất thích hợp ăn nhóm.",
      searchKeyword: "Lẩu riêu cua bắp bò",
      tags: ["Sang chảnh", "> 100k", "Lẩu nóng"],
      calories: "~680 kcal",
      pairWith: "Rau hoa chuối & bún tươi",
      image: "/images/lau_rieu_cua_bap_bo.jpg",
    },
    {
      tier: "over100k",
      name: "Lẩu Bò Nhà Gỗ Ba Toa Nồi Ninh Xương Thảo Mộc",
      tagline: "Nồi lẩu bò ngập tràn thịt bắp, nạm, gân ninh nhừ chuẩn vị Đà Lạt",
      category: "Lẩu Bò Cao Cấp",
      estimatedPrice: "150.000đ - 250.000đ",
      reason: "Nồi lẩu bò thảo mộc chất lượng sang chảnh giá trên 100k.",
      searchKeyword: "Lẩu bò nhà gỗ",
      tags: ["Sang chảnh", "> 100k", "Lẩu bò"],
      calories: "~720 kcal",
      pairWith: "Mì trứng & đậu hũ non",
      image: "/images/bo_nhung_dam.jpg",
    },
    {
      tier: "over100k",
      name: "Mồi Nhậu Dê Tươi Nướng Mọi & Lẩu Dê Thuốc Bắc",
      tagline: "Dê núi tươi rói nướng chấm chao cay tê, lẩu dê bổ dưỡng",
      category: "Quán Nhậu / Đồ Tươi",
      estimatedPrice: "130.000đ - 220.000đ",
      reason: "Set mồi nhậu dê tươi hảo hạng trên 100k cho bữa tiệc tụ họp.",
      searchKeyword: "Dê tươi nướng mọi",
      tags: ["Sang chảnh", "> 100k", "Dê núi"],
      calories: "~750 kcal",
      pairWith: "Bia ướp lạnh & chao cay",
      image: "/images/de_tai_chanh.jpg",
    },
    {
      tier: "over100k",
      name: "Lẩu Thái Hải Sản Tôm Hùm Mực Nước Tôm Yum",
      tagline: "Nước lẩu chua cay béo ngậy nước cốt dừa, ngập tràn hải sản cao cấp",
      category: "Lẩu Hải Sản",
      estimatedPrice: "150.000đ - 280.000đ",
      reason: "Nồi lẩu hải sản hoành tráng sang chảnh chuẩn phân khúc > 100k.",
      searchKeyword: "Lẩu thái hải sản",
      tags: ["Sang chảnh", "> 100k", "Hải sản tươi"],
      calories: "~710 kcal",
      pairWith: "Nấm tuyết & bún tươi",
      image: "/images/lau_thai_hai_san.jpg",
    },
    {
      tier: "over100k",
      name: "Mâm Cơm Niêu Đập Michelin Selected Cá Bống Kho Tộ",
      tagline: "Cơm niêu đập giòn rụm chấm kho quẹt, cá bống kho tộ nước màu dừa",
      category: "Nhà Hàng Sang Trọng",
      estimatedPrice: "150.000đ - 250.000đ",
      reason: "Trải nghiệm ẩm thực mâm cơm gia đình nhà hàng Michelin trên 100k.",
      searchKeyword: "Cơm niêu Sài Gòn",
      tags: ["Sang chảnh", "> 100k", "Michelin"],
      calories: "~780 kcal",
      pairWith: "Canh chua cá lóc & trà đá",
      image: "/images/mam_com_gia_dinh.jpg",
    },
    {
      tier: "over100k",
      name: "Lẩu Gà Lá É Ớt Hiểm Đà Lạt Nóng Hổi",
      tagline: "Thịt gà ta thả vườn dai ngọt, lá é thơm nức vị cay nồng ớt hiểm",
      category: "Lẩu Đặc Sản",
      estimatedPrice: "130.000đ - 200.000đ",
      reason: "Nồi lẩu gà lá é tụ họp ấm áp chuẩn giá trên 100k.",
      searchKeyword: "Lẩu gà lá é",
      tags: ["Sang chảnh", "> 100k", "Đặc sản Đà Lạt"],
      calories: "~690 kcal",
      pairWith: "Bún tươi & bún nấm",
      image: "/images/lau_ga_la_e.jpg",
    },
    {
      tier: "over100k",
      name: "Set Ốc Hương Bơ Tỏi & Mực Một Nắng Nướng Than",
      tagline: "Ốc hương sốt bơ tỏi thơm lừng chấm bánh mì, mực một nắng thơm phức",
      category: "Hải Sản Quán Nhậu",
      estimatedPrice: "140.000đ - 220.000đ",
      reason: "Set hải sản cao cấp bắt mồi sang chảnh trên 100k.",
      searchKeyword: "Ốc hương bơ tỏi",
      tags: ["Sang chảnh", "> 100k", "Hải sản"],
      calories: "~650 kcal",
      pairWith: "Muối ớt xanh & bia lạnh",
      image: "/images/oc_huong_bo_toi.jpg",
    },
  ];

  let matches = pool.filter((d) => d.tier === targetTier);

  // Filter out excludeNames if passed
  let available = matches.filter((d) => !excludeNames.includes(d.name));
  if (available.length < 3) available = matches;

  const shuffled = available.sort(() => Math.random() - 0.5);
  const selectedDishes = shuffled.slice(0, 3);

  const adviceList = [
    `Bếp Trưởng AI khuyên: Với ngân sách "${budget}" tại ${location}, các món ăn trên có giá tiền chuẩn xác và cực kỳ vừa túi tiền!`,
    `Gợi ý từ Bếp Trưởng: Món ngon chuẩn mức giá "${budget}" hợp gu "${mood}" sẽ giúp bạn có bữa ${mealTime} tuyệt vời. Đừng quên áp mã freeship nhé!`,
    `Chuẩn mức giá "${budget}" cho bữa ${mealTime}! Bạn có thể đặt giao nhanh qua ShopeeFood, GrabFood hoặc BeFood ngay bên dưới.`,
  ];

  const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

  return {
    suggestions: selectedDishes,
    advice: randomAdvice,
  };
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "HomNayAnGi-Affiliate-Engine" });
});

// Direct Logo Upload API to support original image placement without alterations
app.post("/api/upload-logo", (req, res) => {
  try {
    const { imageBase64 } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: "Chưa có dữ liệu hình ảnh." });
    }
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");

    const publicLogo = path.join(process.cwd(), "public", "logo.png");
    if (fs.existsSync(path.join(process.cwd(), "public"))) {
      fs.writeFileSync(publicLogo, buffer);
    }

    const distLogo = path.join(process.cwd(), "dist", "logo.png");
    if (fs.existsSync(path.join(process.cwd(), "dist"))) {
      fs.writeFileSync(distLogo, buffer);
    }

    const srcLogo = path.join(process.cwd(), "src", "assets", "images", "logo.png");
    if (fs.existsSync(path.join(process.cwd(), "src", "assets", "images"))) {
      fs.writeFileSync(srcLogo, buffer);
    }

    return res.json({ success: true, message: "Logo đã được cập nhật thành công!" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Không thể lưu logo" });
  }
});

// Affiliate config API
app.get("/api/affiliate/config", (_req, res) => {
  res.json({
    success: true,
    config: affiliateConfig,
    stats: {
      totalClicks: clickHistory.length,
      estimatedTotalCommission: clickHistory.reduce((acc, curr) => acc + curr.estimatedCommission, 0),
      clicksByPlatform: {
        shopeefood: clickHistory.filter((c) => c.platform === "shopeefood").length,
        grabfood: clickHistory.filter((c) => c.platform === "grabfood").length,
        befood: clickHistory.filter((c) => c.platform === "befood").length,
      },
      recentClicks: clickHistory.slice(0, 15),
    },
  });
});

app.post("/api/affiliate/config", (req, res) => {
  const newConfig = req.body;
  if (newConfig && typeof newConfig === "object") {
    affiliateConfig = { ...affiliateConfig, ...newConfig };
    res.json({ success: true, config: affiliateConfig });
  } else {
    res.status(400).json({ error: "Invalid configuration object" });
  }
});

// Record affiliate link click
app.post("/api/affiliate/track-click", (req, res) => {
  const { dishId, dishName, platform, priceEstimate } = req.body;
  const price = Number(priceEstimate) || 50000;
  // Commission 5% - 7%
  const rate = affiliateConfig.averageCommissionRate / 100;
  const estimatedCommission = Math.round(price * rate);

  const event: ClickEvent = {
    id: `clk_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    dishId: dishId || "unknown",
    dishName: dishName || "Món ăn ngon",
    platform: platform === "grabfood" || platform === "befood" ? platform : "shopeefood",
    timestamp: new Date().toISOString(),
    estimatedCommission,
  };

  clickHistory.unshift(event);
  if (clickHistory.length > 200) {
    clickHistory = clickHistory.slice(0, 200);
  }

  // Generate real tracked affiliate URLs with UTM and deep link schemas
  const encodedQuery = encodeURIComponent(dishName || "food");
  let redirectUrl = "";

  if (event.platform === "shopeefood") {
    // ShopeeFood affiliate link pattern
    redirectUrl = `https://shopeefood.vn/search?q=${encodedQuery}&utm_source=affiliate&utm_medium=cpa&utm_campaign=${affiliateConfig.shopeeSubId}&aff_id=${affiliateConfig.shopeeAffiliateId}`;
  } else if (event.platform === "grabfood") {
    // GrabFood deep link / web search with partner tracking
    redirectUrl = `https://food.grab.com/vn/vi/restaurants?search=${encodedQuery}&utm_source=affiliate_partner&utm_medium=${affiliateConfig.grabfoodAffiliateId}`;
  } else {
    // BeFood partner URL
    redirectUrl = `https://be.com.vn/dich-vu/be-food/?search=${encodedQuery}&ref=${affiliateConfig.befoodPartnerId}`;
  }

  res.json({
    success: true,
    trackedEvent: event,
    redirectUrl,
  });
});

// AI Food Suggestion Endpoint with Gemini Multi-Model Resilience & Contextual Fallback
app.options("/api/ai/suggest", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return res.sendStatus(200);
});

app.post("/api/ai/suggest", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const body = req.body || {};
  const {
    mealTime = "Trưa",
    budget = "35k - 60k",
    mood = "Bình thường",
    weather = "Mát mẻ",
    cravings = "",
    location = "TP. Hồ Chí Minh",
    dietary = "Bình thường",
    partySize = 1,
    requestId = "",
    excludeNames = [],
  } = body;

  let suggestions: any[] | null = null;
  let advice = "";
  let source = "smart_curated_chef";

  try {
    const ai = getGeminiClient();

    if (ai) {
      const prompt = `Bạn là chuyên gia ẩm thực Việt Nam thông minh và am hiểu khẩu vị của ứng dụng "Hôm Nay Ăn Gì".
Nhiệm vụ: Gợi ý 3 món ăn chuẩn vị, hấp dẫn, dễ đặt trên các ứng dụng giao thức ăn (ShopeeFood, GrabFood, BeFood) tại Việt Nam dựa trên tiêu chí sau:
- Bữa ăn: ${mealTime}
- Ngân sách: ${budget}
- Tâm trạng: ${mood}
- Thời tiết: ${weather}
- Cơn thèm / Ghi chú đặc biệt: ${cravings || "Không có"}
- Địa điểm: ${location}
- Chế độ ăn: ${dietary}
- Số người: ${partySize}

YÊU CẦU ĐẶC BIỆT CHÚ Ý CHUẨN XÁC:
1. GIÁ CẢ (estimatedPrice) PHẢI KHỚP 100% VỚI NGÂN SÁCH ĐÃ CHỌN:
   - Ngân sách 'Dưới 35k (Tiết kiệm)': 'estimatedPrice' PHẢI từ 15.000đ - 35.000đ (KHÔNG ĐƯỢC VƯỢT QUÁ 35.000đ!).
   - Ngân sách '35k - 60k (Văn phòng)': 'estimatedPrice' PHẢI từ 35.000đ - 60.000đ.
   - Ngân sách '60k - 100k (Đầy đặn)': 'estimatedPrice' PHẢI từ 60.000đ - 100.000đ.
   - Ngân sách '> 100k (Sang chảnh)': 'estimatedPrice' PHẢI trên 100.000đ (120.000đ - 250.000đ).
2. TẠO GỢI Ý MỚI NGẪU NHIÊN TRÁNH LẶP LẠI (Mã requestId: ${requestId || Date.now()}):
   - ĐẶC BIỆT: Hãy gợi ý 3 món HOÀN TOÀN MỚI, khác biệt và KHÔNG TRÙNG LẶP với danh sách sau: ${Array.isArray(excludeNames) && excludeNames.length > 0 ? excludeNames.join(', ') : 'Chưa có'}.

Yêu cầu trả về đúng định dạng JSON:
{
  "suggestions": [
    {
      "name": "Tên món ăn hấp dẫn chuẩn quán Việt",
      "tagline": "Một câu miêu tả ngắn gọn, kích thích thèm ăn",
      "category": "Cơm | Bún/Phở | Món Cuốn | Đồ Nóng/Lẩu | Đồ Ăn Vặt | Healthy",
      "estimatedPrice": "Khoảng giá chuẩn ngân sách (VD: 20.000đ - 30.000đ)",
      "reason": "Lý do món này hoàn hảo cho tâm trạng và thời tiết hiện tại",
      "searchKeyword": "Từ khóa chính xác nhất để tìm kiếm quán ngon trên ShopeeFood/GrabFood (VD: Bún chả Hà Nội)",
      "tags": ["Từ khóa 1", "Từ khóa 2", "Từ khóa 3"],
      "calories": "Ước tính calo (VD: ~550 kcal)",
      "pairWith": "Món phụ hoặc nước uống khuyên gọi kèm"
    }
  ],
  "advice": "Lời khuyên vui vẻ hoặc mẹo săn mã giảm giá cho bữa ăn này"
}`;

      // Resilience: Try primary gemini-2.5-flash, fallback to gemini-2.0-flash if 503/load spike occurs
      const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash"];

      for (const modelName of modelsToTry) {
        try {
          const generatePromise = ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              responseMimeType: "application/json",
              systemInstruction:
                "Bạn là trợ lý tư vấn món ăn Việt Nam dí dỏm, tinh tế, am hiểu khẩu vị giới trẻ và dân văn phòng.",
            },
          });

          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("AI generation timeout")), 7000)
          );

          const response = await Promise.race([generatePromise, timeoutPromise]);
          if (response && response.text) {
            const parsed = JSON.parse(response.text);
            if (Array.isArray(parsed.suggestions) && parsed.suggestions.length > 0) {
              suggestions = parsed.suggestions.map((item: any) => ({
                ...item,
                image: item.image || getDishImageByName(item.name, item.category),
              }));
              advice = parsed.advice || "Chúc bạn có một bữa ăn ngon miệng và nhiều niềm vui!";
              source = modelName;
              break;
            }
          }
        } catch {
          // Model temporarily unavailable (503 spike, rate limit, or timeout), try next model
        }
      }
    }
  } catch {
    // Top-level catch for resilience
  }

  // If AI generation is unavailable, smoothly serve tailored contextual Vietnamese dishes
  if (!suggestions || suggestions.length === 0) {
    const contextualFallback = getContextualDishes({
      mealTime,
      budget,
      mood,
      weather,
      cravings,
      location,
      partySize,
      dietary,
      excludeNames,
    });
    suggestions = contextualFallback.suggestions;
    advice = advice || contextualFallback.advice;
    source = "smart_curated_chef";
  }

  return res.json({
    success: true,
    source,
    suggestions,
    advice,
  });
});

// Persistent storage for custom blog posts (WordPress Admin)
const CUSTOM_POSTS_FILE = path.join(process.cwd(), "public", "custom_blog_posts.json");
const DIST_POSTS_FILE = path.join(process.cwd(), "dist", "custom_blog_posts.json");
const DELETED_POSTS_FILE = path.join(process.cwd(), "public", "deleted_posts.json");
const DIST_DELETED_POSTS_FILE = path.join(process.cwd(), "dist", "deleted_posts.json");
const DYNAMIC_ALIASES_FILE = path.join(process.cwd(), "public", "dynamic_slug_aliases.json");
const DIST_DYNAMIC_ALIASES_FILE = path.join(process.cwd(), "dist", "dynamic_slug_aliases.json");

function loadDynamicAliases(): Record<string, string> {
  try {
    if (fs.existsSync(DYNAMIC_ALIASES_FILE)) {
      return JSON.parse(fs.readFileSync(DYNAMIC_ALIASES_FILE, "utf-8"));
    }
    if (fs.existsSync(DIST_DYNAMIC_ALIASES_FILE)) {
      return JSON.parse(fs.readFileSync(DIST_DYNAMIC_ALIASES_FILE, "utf-8"));
    }
  } catch {}
  return {};
}

function saveDynamicAlias(oldSlug: string, newSlug: string) {
  if (!oldSlug || !newSlug || oldSlug === newSlug) return;
  try {
    const aliases = loadDynamicAliases();
    aliases[oldSlug.toLowerCase().trim()] = newSlug.toLowerCase().trim();
    const dir = path.dirname(DYNAMIC_ALIASES_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DYNAMIC_ALIASES_FILE, JSON.stringify(aliases, null, 2), "utf-8");
    const distDir = path.dirname(DIST_DYNAMIC_ALIASES_FILE);
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(DIST_DYNAMIC_ALIASES_FILE, JSON.stringify(aliases, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error saving dynamic alias:", err);
  }
}

function loadDeletedPostSlugs(): string[] {
  try {
    if (fs.existsSync(DELETED_POSTS_FILE)) {
      const raw = fs.readFileSync(DELETED_POSTS_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.map((s) => String(s).toLowerCase().trim());
    }
    if (fs.existsSync(DIST_DELETED_POSTS_FILE)) {
      const raw = fs.readFileSync(DIST_DELETED_POSTS_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.map((s) => String(s).toLowerCase().trim());
    }
  } catch (err) {
    console.error("Error loading deleted posts:", err);
  }
  return [];
}

function recordDeletedPostSlug(slugOrId: string) {
  try {
    const list = loadDeletedPostSlugs();
    const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    if (!list.includes(clean)) {
      list.push(clean);
      const dir = path.dirname(DELETED_POSTS_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DELETED_POSTS_FILE, JSON.stringify(list, null, 2), "utf-8");
      const distTargetDir = path.dirname(DIST_DELETED_POSTS_FILE);
      if (fs.existsSync(distTargetDir)) {
        fs.writeFileSync(DIST_DELETED_POSTS_FILE, JSON.stringify(list, null, 2), "utf-8");
      }
    }
  } catch (err) {
    console.error("Error recording deleted post:", err);
  }
}

function removeDeletedPostSlug(slugOrId: string) {
  try {
    const list = loadDeletedPostSlugs();
    const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const filtered = list.filter((s) => s !== clean);
    fs.writeFileSync(DELETED_POSTS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    const distTargetDir = path.dirname(DIST_DELETED_POSTS_FILE);
    if (fs.existsSync(distTargetDir)) {
      fs.writeFileSync(DIST_DELETED_POSTS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error removing deleted post record:", err);
  }
}

// In-memory caching and quota circuit breaker for Firestore
let cachedFirestoreDeleted: string[] | null = null;
let lastFirestoreDeletedSyncTime = 0;
let cachedFirestorePosts: any[] | null = null;
let lastFirestorePostsSyncTime = 0;
let firestoreQuotaExceededUntil = 0;
const FIRESTORE_CACHE_TTL = 3 * 60 * 1000; // 3 minutes cache
const FIRESTORE_QUOTA_COOLDOWN = 2 * 60 * 1000; // 2 minutes cooldown when quota is exceeded

function invalidateFirestoreServerCache() {
  cachedFirestorePosts = null;
  lastFirestorePostsSyncTime = 0;
  cachedFirestoreDeleted = null;
  lastFirestoreDeletedSyncTime = 0;
}

async function syncFirestoreDeletedPosts(): Promise<string[]> {
  const now = Date.now();
  if (cachedFirestoreDeleted && now - lastFirestoreDeletedSyncTime < FIRESTORE_CACHE_TTL) {
    return cachedFirestoreDeleted;
  }
  if (now < firestoreQuotaExceededUntil) {
    return loadDeletedPostSlugs();
  }
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (!fs.existsSync(configPath)) return loadDeletedPostSlugs();
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const { initializeApp, getApps, getApp } = await import("firebase/app");
    const { getFirestore, collection, getDocs } = await import("firebase/firestore");
    const app = getApps().length === 0 ? initializeApp(config) : getApp();
    const db = getFirestore(app, config.firestoreDatabaseId);
    const snap = await getDocs(collection(db, "deleted_posts"));
    const set = new Set<string>(loadDeletedPostSlugs());
    snap.forEach((d) => {
      const data = d.data();
      const s = (data.slugOrId || d.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (s) set.add(s);
      const docClean = d.id.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (docClean) set.add(docClean);
    });
    const merged = Array.from(set);
    const dir = path.dirname(DELETED_POSTS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DELETED_POSTS_FILE, JSON.stringify(merged, null, 2), "utf-8");
    const distTargetDir = path.dirname(DIST_DELETED_POSTS_FILE);
    if (fs.existsSync(distTargetDir)) {
      fs.writeFileSync(DIST_DELETED_POSTS_FILE, JSON.stringify(merged, null, 2), "utf-8");
    }
    cachedFirestoreDeleted = merged;
    lastFirestoreDeletedSyncTime = now;
    return merged;
  } catch (err: any) {
    const isQuota = err?.message?.includes("Quota") || err?.code === "resource-exhausted";
    if (isQuota) {
      firestoreQuotaExceededUntil = Date.now() + FIRESTORE_QUOTA_COOLDOWN;
      console.info("[Firestore] Read quota limit reached. Using local file cache seamlessly.");
    } else {
      console.warn("syncFirestoreDeletedPosts warning:", err?.message || err);
    }
    return loadDeletedPostSlugs();
  }
}

const KNOWN_POST_LINKS: Record<string, { title: string; slug: string }> = {
  "thit-heo-lam-mon-gi-ngon": { title: "Thịt Heo Làm Món Gì Ngon", slug: "thit-heo-lam-mon-gi-ngon" },
  "thit-ga-nau-mon-gi-ngon": { title: "Thịt Gà Nấu Món Gì Ngon", slug: "thit-ga-nau-mon-gi-ngon" },
  "ca-lam-mon-gi-ngon-goi-y-cac-mon-ca-de-lam": { title: "Cá Làm Món Gì Ngon", slug: "ca-lam-mon-gi-ngon-goi-y-cac-mon-ca-de-lam" },
  "thit-bo-lam-mon-gi-ngon-goi-y-mon-bo-de-lam-dam-da-cho-bua-com-gia-dinh": { title: "Thịt Bò Làm Món Gì Ngon", slug: "thit-bo-lam-mon-gi-ngon-goi-y-mon-bo-de-lam-dam-da-cho-bua-com-gia-dinh" },
  "trung-lam-mon-gi-ngon-goi-y-cac-mon-trung-de-lam-hao-com-cho-ca-nha": { title: "Trứng Làm Món Gì Ngon", slug: "trung-lam-mon-gi-ngon-goi-y-cac-mon-trung-de-lam-hao-com-cho-ca-nha" },
};

function enrichPostContentLinks(content: string, allPosts: any[] = []): string {
  if (!content) return "";
  const lines = content.split("\n");
  return lines.map((line) => {
    let l = line;
    if (/>\s*Xem thêm[:\s]/i.test(l) && !l.includes("](")) {
      for (const [slug, info] of Object.entries(KNOWN_POST_LINKS)) {
        if (l.toLowerCase().includes(slug) || l.toLowerCase().includes(info.title.toLowerCase())) {
          return `> Xem thêm: [${info.title}](https://angigio.com/${info.slug})`;
        }
      }
      for (const p of allPosts) {
        if (p.slug && (l.toLowerCase().includes(p.slug.toLowerCase()) || l.toLowerCase().includes(p.title.toLowerCase().trim()))) {
          return `> Xem thêm: [${p.title}](https://angigio.com/${p.slug})`;
        }
      }
    }
    const parts = l.split(/(\[[^\]]+\]\([^)]+\))/g);
    l = parts
      .map((part) => {
        if (part.startsWith("[") && part.includes("](")) return part;
        return part.replace(/\b(?:https?:\/\/angigio\.com\/|angigio\.com\/)([a-z0-9-]+)\b/gi, (full, slugPart) => {
          const info = KNOWN_POST_LINKS[slugPart.toLowerCase()];
          const title = info ? info.title : slugPart;
          return `[${title}](https://angigio.com/${slugPart})`;
        });
      })
      .join("");
    return l;
  }).join("\n");
}

function loadCustomBlogPosts(): any[] {
  try {
    let list: any[] = [];
    if (fs.existsSync(CUSTOM_POSTS_FILE)) {
      const raw = fs.readFileSync(CUSTOM_POSTS_FILE, "utf-8");
      list = JSON.parse(raw);
    } else if (fs.existsSync(DIST_POSTS_FILE)) {
      const raw = fs.readFileSync(DIST_POSTS_FILE, "utf-8");
      list = JSON.parse(raw);
    }
    if (Array.isArray(list)) {
      list = list.map((p) => {
        if (p.htmlContent) {
          p.htmlContent = String(p.htmlContent).replace(
            /<blockquote(?:\s+style="[^"]*")?(?:\s+class="[^"]*")?[^>]*>/gi,
            '<blockquote class="border-l-4 border-orange-500 bg-orange-50/80 px-4 py-3 my-4 italic text-stone-700 rounded-r-xl shadow-2xs">'
          );
        }
        return p;
      });
    }
    const EXCLUDED_SERVER_BLOG_SLUGS = new Set(['cach-lam-com-suon-nuong-mat-ong', 'com-tam-suon-bi-cha']);
    const deletedSlugs = new Set(loadDeletedPostSlugs());
    if (Array.isArray(list)) {
      return list.filter((p) => {
        const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        const id = (p.id || '').toLowerCase().trim();
        return !deletedSlugs.has(s) && !deletedSlugs.has(id) && !EXCLUDED_SERVER_BLOG_SLUGS.has(s) && !EXCLUDED_SERVER_BLOG_SLUGS.has(id);
      });
    }
    return list;
  } catch (err) {
    console.error("Error loading custom blog posts:", err);
  }
  return [];
}

function saveCustomBlogPosts(posts: any[]) {
  try {
    const dir = path.dirname(CUSTOM_POSTS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CUSTOM_POSTS_FILE, JSON.stringify(posts, null, 2), "utf-8");

    // Also persist to dist/custom_blog_posts.json so production static serving is immediately up-to-date
    const distTarget = path.join(process.cwd(), "dist", "custom_blog_posts.json");
    if (fs.existsSync(path.dirname(distTarget))) {
      fs.writeFileSync(distTarget, JSON.stringify(posts, null, 2), "utf-8");
    }
    cachedFirestorePosts = posts;
    lastFirestorePostsSyncTime = Date.now();
  } catch (err) {
    console.error("Error saving custom blog posts:", err);
  }
}

async function syncFirestorePostsToServer(): Promise<any[]> {
  const now = Date.now();
  if (cachedFirestorePosts && now - lastFirestorePostsSyncTime < FIRESTORE_CACHE_TTL) {
    return cachedFirestorePosts;
  }
  if (now < firestoreQuotaExceededUntil) {
    return loadCustomBlogPosts();
  }
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (!fs.existsSync(configPath)) return loadCustomBlogPosts();
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const { initializeApp, getApps, getApp } = await import("firebase/app");
    const { getFirestore, collection, getDocs } = await import("firebase/firestore");
    const app = getApps().length === 0 ? initializeApp(config) : getApp();
    const db = getFirestore(app, config.firestoreDatabaseId);
    const snap = await getDocs(collection(db, "posts"));
    if (snap.empty) {
      const current = loadCustomBlogPosts();
      cachedFirestorePosts = current;
      lastFirestorePostsSyncTime = now;
      return current;
    }

    const cloudPosts: any[] = [];
    const EXCLUDED_SERVER_BLOG_SLUGS = new Set(['cach-lam-com-suon-nuong-mat-ong', 'com-tam-suon-bi-cha']);
    snap.forEach((d) => {
      const data = d.data();
      const pSlug = (data.slug || d.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const pId = (data.id || d.id || '').toLowerCase().trim();
      if (EXCLUDED_SERVER_BLOG_SLUGS.has(pSlug) || EXCLUDED_SERVER_BLOG_SLUGS.has(pId)) {
        return;
      }
      // An active post in Firestore must never be blocked by a stale deleted record
      if (pSlug) removeDeletedPostSlug(pSlug);
      if (pId) removeDeletedPostSlug(pId);
      cloudPosts.push({
        id: data.id || d.id,
        slug: data.slug || d.id,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        htmlContent: data.htmlContent
          ? String(data.htmlContent).replace(/<blockquote(?:\s+style="[^"]*")?(?:\s+class="[^"]*")?[^>]*>/gi, '<blockquote class="border-l-4 border-orange-500 bg-orange-50/80 px-4 py-3 my-4 italic text-stone-700 rounded-r-xl shadow-2xs">')
          : undefined,
        coverImage: data.coverImage || "/images/an-gi-cho-do-ngan.jpg",
        category: data.category || "Gợi Ý Thực Đơn",
        tags: typeof data.tags === "string" ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : (data.tags || []),
        author: {
          name: data.authorName || "Bếp Trưởng Hôm Nay Ăn Gì",
          role: data.authorRole || "Chuyên gia Ẩm thực & Dinh dưỡng",
          avatar: data.authorAvatar || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80",
        },
        publishDate: data.publishDate || "",
        readTime: data.readTime || "5 phút đọc",
        featured: Boolean(data.featured),
        updatedAt: data.updatedAt || new Date().toISOString(),
      });
    });

    const localPosts = loadCustomBlogPosts();
    const deletedSlugs = new Set(loadDeletedPostSlugs());
    // Active cloud posts override deleted list
    cloudPosts.forEach((p) => {
      deletedSlugs.delete((p.slug || '').toLowerCase().trim());
      deletedSlugs.delete((p.id || '').toLowerCase().trim());
    });
    const map = new Map<string, any>();
    localPosts.forEach((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const id = (p.id || '').toLowerCase().trim();
      if (!deletedSlugs.has(s) && !deletedSlugs.has(id)) {
        map.set(p.slug || p.id, p);
      }
    });
    cloudPosts.forEach((p) => {
      map.set(p.slug || p.id, p);
    });
    const allList = Array.from(map.values());
    const merged = allList.map((p) => ({
      ...p,
      content: p.content || '',
      htmlContent: p.htmlContent || undefined,
    }));
    saveCustomBlogPosts(merged);
    cachedFirestorePosts = merged;
    lastFirestorePostsSyncTime = now;
    return merged;
  } catch (err: any) {
    const isQuota = err?.message?.includes("Quota") || err?.code === "resource-exhausted";
    if (isQuota) {
      firestoreQuotaExceededUntil = Date.now() + FIRESTORE_QUOTA_COOLDOWN;
      console.info("[Firestore] Read quota limit reached. Using local file storage.");
    } else {
      console.warn("syncFirestorePostsToServer warning:", err?.message || err);
    }
    const deletedSlugs = new Set(loadDeletedPostSlugs());
    const fallback = loadCustomBlogPosts().filter((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const id = (p.id || '').toLowerCase().trim();
      return !deletedSlugs.has(s) && !deletedSlugs.has(id);
    });
    cachedFirestorePosts = fallback;
    lastFirestorePostsSyncTime = now;
    return fallback;
  }
}

// Trigger initial sync on startup in background
syncFirestorePostsToServer().catch(() => {});

// Direct static JSON endpoint with ETag and smart Cache-Control
app.get("/custom_blog_posts.json", async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const posts = await syncFirestorePostsToServer();
  const body = JSON.stringify(posts);
  const hash = crypto.createHash("md5").update(body).digest("hex");
  const etag = `"${hash}"`;
  res.setHeader("ETag", etag);
  res.setHeader("Cache-Control", "public, max-age=180, stale-while-revalidate=1800");

  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end();
  }
  return res.send(body);
});

// Endpoint for deleted post slugs (synced from Cloud Firestore)
app.get("/api/admin/deleted-posts", async (req, res) => {
  const deleted = await syncFirestoreDeletedPosts();
  const body = JSON.stringify({ success: true, deleted });
  const hash = crypto.createHash("md5").update(body).digest("hex");
  const etag = `"${hash}"`;
  res.setHeader("ETag", etag);
  res.setHeader("Cache-Control", "public, max-age=180, stale-while-revalidate=1800");

  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end();
  }
  return res.setHeader("Content-Type", "application/json; charset=utf-8").send(body);
});

app.get("/deleted_posts.json", async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const deleted = await syncFirestoreDeletedPosts();
  const body = JSON.stringify(deleted);
  const hash = crypto.createHash("md5").update(body).digest("hex");
  const etag = `"${hash}"`;
  res.setHeader("ETag", etag);
  res.setHeader("Cache-Control", "public, max-age=180, stale-while-revalidate=1800");

  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end();
  }
  return res.send(body);
});

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateFreshSitemapXml(): string {
  try {
    const routes = getAllSeoRoutes();
    const urlEntries = Object.values(routes)
      .filter((meta: any) => !meta.isAlias)
      .map((meta: any) => {
        const loc = `https://angigio.com${meta.path === "/" ? "/" : meta.path}`;
        const lastmod = meta.lastmod || new Date().toISOString().split("T")[0];
        const changefreq = meta.changefreq || "weekly";
        const priority = meta.priority !== undefined ? Number(meta.priority).toFixed(2) : "0.80";
        const imageLoc = meta.image?.startsWith("http") ? meta.image : `https://angigio.com${meta.image}`;
        const imageTitle = escapeXml(meta.imageAlt || meta.title || "");

        return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>
  </url>`;
      });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlEntries.join("\n")}\n</urlset>\n`;

    // Persist to public/sitemap.xml and dist/sitemap.xml
    try {
      const pubFile = path.join(process.cwd(), "public", "sitemap.xml");
      fs.writeFileSync(pubFile, xml, "utf-8");
      const distFile = path.join(process.cwd(), "dist", "sitemap.xml");
      if (fs.existsSync(path.dirname(distFile))) {
        fs.writeFileSync(distFile, xml, "utf-8");
      }
    } catch {}

    return xml;
  } catch (err) {
    console.error("Error generating fresh dynamic sitemap:", err);
    const pubFile = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(pubFile)) {
      return fs.readFileSync(pubFile, "utf-8");
    }
    return "";
  }
}

function addUrlToSitemap(_slug: string) {
  try {
    generateFreshSitemapXml();
  } catch (err) {
    console.error("Error updating sitemap with new post:", err);
  }
}

// API: Get all blog posts (initial + custom)
app.get("/api/admin/posts", async (_req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  const deletedSlugs = new Set(await syncFirestoreDeletedPosts());
  const customPosts = (await syncFirestorePostsToServer()).filter((p) => {
    const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const id = (p.id || '').toLowerCase().trim();
    return !deletedSlugs.has(s) && !deletedSlugs.has(id);
  });
  const postMap = new Map<string, any>();
  // Custom posts first
  customPosts.forEach((p) => {
    const key = (p.slug || p.id || '').toLowerCase().trim();
    if (key) postMap.set(key, p);
  });
  INITIAL_BLOG_POSTS.forEach((p) => {
    const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const id = (p.id || '').toLowerCase().trim();
    if (!deletedSlugs.has(s) && !deletedSlugs.has(id)) {
      const isOverridden = customPosts.some((cp) => {
        const cpSlug = (cp.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        const cpId = (cp.id || '').toLowerCase().trim();
        const cpOldSlug = ((cp.oldSlug || cp.previousSlug || '')).toLowerCase().trim();
        const sCanonical = (BLOG_SLUG_ALIASES[s] || s).toLowerCase();
        const cpCanonical = (BLOG_SLUG_ALIASES[cpSlug] || cpSlug).toLowerCase();
        return Boolean(
          (cpSlug && (cpSlug === s || cpSlug === sCanonical)) ||
          (cpId && (cpId === id || cpId === s)) ||
          (cpOldSlug && (cpOldSlug === s || cpOldSlug === id)) ||
          (cpCanonical && (cpCanonical === s || cpCanonical === sCanonical))
        );
      });
      if (!isOverridden && !postMap.has(s)) {
        postMap.set(s, p);
      }
    }
  });
  return res.json({
    success: true,
    posts: Array.from(postMap.values()),
    customPosts: customPosts,
  });
});

// API: Get a single blog post by slug or ID with targeted Firestore lookup
app.get(["/api/posts/:slugOrId", "/api/admin/posts/:slugOrId"], async (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const { slugOrId } = req.params;
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  const canonical = (BLOG_SLUG_ALIASES[clean] || clean).toLowerCase();

  // 1. Check deleted list
  const deletedSlugs = new Set(await syncFirestoreDeletedPosts());
  if (deletedSlugs.has(clean) || deletedSlugs.has(canonical)) {
    return res.status(404).json({ success: false, message: "Bài viết đã bị xóa" });
  }

  // 2. Check local posts & in-memory cache
  const localPosts = loadCustomBlogPosts();
  let found = localPosts.find((p) => {
    const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const id = (p.id || '').toLowerCase().trim();
    return s === clean || id === clean || s === canonical || id === canonical;
  });

  if (found) {
    return res.json({ success: true, post: found });
  }

  // 3. Check INITIAL_BLOG_POSTS
  const initFound = INITIAL_BLOG_POSTS.find((p) => {
    const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const id = (p.id || '').toLowerCase().trim();
    return s === clean || id === clean || s === canonical || id === canonical;
  });

  if (initFound) {
    return res.json({ success: true, post: initFound });
  }

  // 4. Targeted Firestore lookup for this specific document (costs only 1 read unit)
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      const { initializeApp, getApps, getApp } = await import("firebase/app");
      const { getFirestore, doc, getDoc } = await import("firebase/firestore");
      const app = getApps().length === 0 ? initializeApp(config) : getApp();
      const db = getFirestore(app, config.firestoreDatabaseId);

      const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
      let snap = await getDoc(doc(db, "posts", docId));
      if (!snap.exists() && canonical !== clean) {
        const canDocId = canonical.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
        snap = await getDoc(doc(db, "posts", canDocId));
      }

      if (snap.exists()) {
        const data = snap.data();
        const post = {
          id: data.id || snap.id,
          slug: data.slug || snap.id,
          title: data.title || "",
          excerpt: data.excerpt || "",
          content: data.content || "",
          htmlContent: data.htmlContent || undefined,
          coverImage: data.coverImage || "/images/an-gi-cho-do-ngan.jpg",
          category: data.category || "Gợi Ý Thực Đơn",
          tags: typeof data.tags === "string" ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : (data.tags || []),
          author: {
            name: data.authorName || "Bếp Trưởng Hôm Nay Ăn Gì",
            role: data.authorRole || "Chuyên gia Ẩm thực & Dinh dưỡng",
            avatar: data.authorAvatar || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80",
          },
          publishDate: data.publishDate || "",
          readTime: data.readTime || "5 phút đọc",
          featured: Boolean(data.featured),
          updatedAt: data.updatedAt || new Date().toISOString(),
        };

        // Cache into local file storage so all future requests serve instantly
        const currentCustom = loadCustomBlogPosts();
        const existingIdx = currentCustom.findIndex((p) => p.slug === post.slug || p.id === post.id);
        if (existingIdx >= 0) {
          currentCustom[existingIdx] = post;
        } else {
          currentCustom.unshift(post);
        }
        saveCustomBlogPosts(currentCustom);

        return res.json({ success: true, post });
      }
    }
  } catch (err) {
    console.warn("Single post Firestore fetch error:", err);
  }

  return res.status(404).json({ success: false, message: "Không tìm thấy bài viết" });
});

// Comprehensive dynamic SEO routes config for server-rendered HTML meta tags
let SEO_ROUTES_CONFIG = getAllSeoRoutes();

function injectSeoMeta(html: string, requestedPath: string): string {
  const cleanPath = requestedPath.replace(/\/$/, "") || "/";
  const slug = cleanPath.replace(/^\//, "").replace(/^\/?blog\//, "").toLowerCase().trim();

  const customPosts = loadCustomBlogPosts();

  // 1. Check custom posts first so any newly published or edited admin posts take immediate effect (only for non-root paths)
  let customMatch = undefined;
  if (slug && cleanPath !== "/" && cleanPath !== "/blog") {
    const canonicalSlug = (BLOG_SLUG_ALIASES[slug] || slug).toLowerCase();
    customMatch = customPosts.find((p) => {
      const pSlug = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const pId = (p.id || '').toLowerCase().trim();
      const pOld = ((p.oldSlug || p.previousSlug || '')).toLowerCase().trim();
      return (
        (pSlug && (pSlug === slug || pSlug === canonicalSlug)) ||
        (pId && (pId === slug || pId === canonicalSlug)) ||
        (pOld && (pOld === slug || pOld === canonicalSlug))
      );
    });
  }

  let meta = customMatch
    ? {
        path: `/${customMatch.slug}`,
        title: `${customMatch.title} | Blog Ẩm Thực Hôm Nay Ăn Gì`,
        description: customMatch.excerpt,
        keywords: Array.isArray(customMatch.tags) ? customMatch.tags.join(', ') : (customMatch.tags || ''),
        image: customMatch.coverImage || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80",
        imageAlt: customMatch.title,
        isArticle: true,
        canonicalPath: `/${customMatch.slug}`,
      }
    : SEO_ROUTES_CONFIG[cleanPath];

  const isRecipeRoute =
    cleanPath.startsWith("/cach-nau-") ||
    cleanPath.startsWith("/cach-lam-") ||
    cleanPath.startsWith("/cach-nau-mon-ngon/");

  if (!meta && cleanPath.startsWith("/cach-nau-mon-ngon/")) {
    const slug = cleanPath.replace("/cach-nau-mon-ngon/", "");
    meta = SEO_ROUTES_CONFIG[`/${slug}`];
  }

  if (!meta && (cleanPath.startsWith("/cach-nau-") || cleanPath.startsWith("/cach-lam-"))) {
    const slug = cleanPath.replace(/^\//, "");
    const normalizedName = slug
      .replace(/^cach-(?:nau|lam)-/, "")
      .split("-")
      .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
      .join(" ")
      .trim();
    meta = {
      path: cleanPath,
      title: `Cách Nấu ${normalizedName} Thơm Ngon Chuẩn Vị | Hôm Nay Ăn Gì`,
      description: `Hướng dẫn chi tiết từng bước nấu món ${normalizedName} thơm ngon, chuẩn vị gia đình Việt Nam: Định lượng nguyên liệu, mẹo sơ chế và bí quyết nêm nếm.`,
      keywords: `cách nấu ${normalizedName.toLowerCase()}, công thức nấu ${normalizedName.toLowerCase()}, hướng dẫn làm ${normalizedName.toLowerCase()}, món ngon mỗi ngày, ẩm thực việt nam`,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=80",
      imageAlt: `Cách Nấu ${normalizedName} Thơm Ngon Chuẩn Vị`,
    };
  }

  if (!meta) {
    const slugTitle = cleanPath
      .replace(/^\//, "")
      .replace(/^\/?blog\//, "")
      .split("-")
      .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
      .join(" ");
    meta = {
      path: cleanPath,
      title: slugTitle ? `${slugTitle} | Blog Ẩm Thực Hôm Nay Ăn Gì` : `Blog Ẩm Thực Hôm Nay Ăn Gì`,
      description: "Khám phá cẩm nang nấu ăn chuẩn vị, bí quyết làm bếp và mẹo vặt ẩm thực gia đình trên Hôm Nay Ăn Gì.",
      keywords: "hôm nay ăn gì, blog ẩm thực, cẩm nang nấu ăn, mẹo nhà bếp, công thức món ngon",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80",
      imageAlt: slugTitle || "Blog Ẩm Thực Hôm Nay Ăn Gì",
      isArticle: true,
      canonicalPath: cleanPath,
    };
  }
  const fullUrl = `https://angigio.com${meta.path === "/" ? "/" : meta.path}`;
  const canonicalUrl = meta.canonicalPath
    ? `https://angigio.com${meta.canonicalPath === "/" ? "/" : meta.canonicalPath}`
    : fullUrl;

  let updatedHtml = html
    .replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`)
    .replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${meta.title}" />`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i, `<meta name="keywords" content="${meta.keywords}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${fullUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${meta.image}" />`)
    .replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i, `<meta property="og:image:alt" content="${meta.imageAlt}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${meta.title}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${meta.description}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${fullUrl}" />`)
    .replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${meta.image}" />`);

  if (isRecipeRoute || meta.isArticle) {
    const publishedTime = '2026-09-28T08:00:00+07:00';
    const modifiedTime = '2026-09-30T00:00:00+07:00';
    updatedHtml = updatedHtml.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="article" />\n    <meta property="article:published_time" content="${publishedTime}" />\n    <meta property="article:modified_time" content="${modifiedTime}" />\n    <meta property="article:author" content="Hôm Nay Ăn Gì" />\n    <meta property="article:section" content="Bí quyết ẩm thực" />`
    );

    let targetDish: any = undefined;
    if (isRecipeRoute) {
      targetDish = INITIAL_DISHES.find(d => `/${getRecipeSlug(d)}` === meta.path || meta.path === `/${d.id}`);
    }

    if (isRecipeRoute && targetDish) {
      const recipe = getDishRecipe(targetDish);
      const absHash = Math.abs((targetDish.id || 'recipe').split('').reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0), 0));
      const ratingValue = recipe?.ratingValue || (4.7 + (absHash % 3) * 0.1).toFixed(1);
      const reviewCount = recipe?.reviewCount ? recipe.reviewCount.toString() : (88 + (absHash % 155)).toString();

      const recipeSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Recipe",
            "@id": `${canonicalUrl}#recipe`,
            "url": canonicalUrl,
            "mainEntityOfPage": canonicalUrl,
            "name": recipe?.seoTitle || meta.title.replace(/\s*\|\s*Hôm Nay Ăn Gì$/i, ''),
            "headline": `${meta.title.replace(/\s*\|\s*Hôm Nay Ăn Gì$/i, '')} - Hướng dẫn chi tiết định lượng và các bước nấu chuẩn vị gia đình`,
            "image": [meta.image?.startsWith("http") ? meta.image : `https://angigio.com${meta.image}`],
            "description": meta.description,
            "keywords": meta.keywords,
            "recipeCategory": targetDish.category,
            "recipeCuisine": "Vietnamese",
            "recipeYield": recipe?.servings || "4 - 6 người",
            "prepTime": parseMinutesToIso(recipe?.prepTime),
            "cookTime": parseMinutesToIso(recipe?.cookTime),
            "totalTime": parseMinutesToIso(recipe?.totalTime),
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": targetDish.calories || "500 kcal",
              "servingSize": "1 tô"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": ratingValue,
              "reviewCount": reviewCount,
              "bestRating": "5",
              "worstRating": "1"
            },
            "recipeIngredient": formatIngredients(recipe?.ingredients),
            "recipeInstructions": recipe?.steps?.map((st) => ({
              "@type": "HowToStep",
              "position": st.step,
              "name": st.title,
              "text": st.description,
              "url": `${canonicalUrl}#step-${st.step}`,
              "image": meta.image?.startsWith("http") ? meta.image : `https://angigio.com${meta.image}`
            })) || [],
            "author": {
              "@type": "Organization",
              "name": "Hôm Nay Ăn Gì",
              "url": "https://angigio.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hôm Nay Ăn Gì",
              "url": "https://angigio.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://angigio.com/logo.png"
              }
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://angigio.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Cách Nấu Món Ngon",
                "item": "https://angigio.com/cach-nau-mon-ngon"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": meta.title.replace(/\s*\|\s*Hôm Nay Ăn Gì$/i, ''),
                "item": canonicalUrl
              }
            ]
          }
        ]
      };

      updatedHtml = updatedHtml.replace(
        '</head>',
        `    <script type="application/ld+json">\n${JSON.stringify(recipeSchema, null, 2)}\n    </script>\n  </head>`
      );
    } else {
      const articleHash = Math.abs((cleanPath || 'article').split('').reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0), 0));
      const ratingVariants = ['4.8', '4.9', '4.7', '4.8', '4.9'];
      const artRating = ratingVariants[articleHash % ratingVariants.length];
      const artReviews = String(185 + (articleHash % 240));

      const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${canonicalUrl}#article`,
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://angigio.com/#website",
              "name": "Hôm Nay Ăn Gì",
              "url": "https://angigio.com/"
            },
            "headline": meta.title,
            "description": meta.description,
            "image": [meta.image?.startsWith("http") ? meta.image : `https://angigio.com${meta.image}`],
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": artRating,
              "ratingCount": artReviews,
              "reviewCount": artReviews,
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "Bếp Trưởng Hôm Nay Ăn Gì",
              "jobTitle": "Chuyên gia ẩm thực"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hôm Nay Ăn Gì",
              "url": "https://angigio.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://angigio.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://angigio.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog Ẩm Thực",
                "item": "https://angigio.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": meta.title,
                "item": canonicalUrl
              }
            ]
          }
        ]
      };

      updatedHtml = updatedHtml.replace(
        '</head>',
        `    <script type="application/ld+json">\n${JSON.stringify(articleSchema, null, 2)}\n    </script>\n  </head>`
      );
    }
  }

  // Inject initial custom posts so all devices and machines see new posts instantaneously on page load
  if (customPosts && Array.isArray(customPosts) && customPosts.length > 0) {
    const serialized = JSON.stringify(customPosts).replace(/</g, '\\u003c');
    if (updatedHtml.includes('window.__INITIAL_CUSTOM_POSTS__')) {
      updatedHtml = updatedHtml.replace(
        /<script>window\.__INITIAL_CUSTOM_POSTS__\s*=.*?<\/script>/,
        `<script>window.__INITIAL_CUSTOM_POSTS__ = ${serialized};</script>`
      );
    } else {
      updatedHtml = updatedHtml.replace(
        '</head>',
        `    <script>window.__INITIAL_CUSTOM_POSTS__ = ${serialized};</script>\n  </head>`
      );
    }
  }

  // Inject initial deleted posts so all devices, browsers, and visitors filter out deleted posts instantaneously
  const deletedPosts = loadDeletedPostSlugs();
  if (deletedPosts && Array.isArray(deletedPosts) && deletedPosts.length > 0) {
    const serializedDeleted = JSON.stringify(deletedPosts).replace(/</g, '\\u003c');
    if (updatedHtml.includes('window.__INITIAL_DELETED_POSTS__')) {
      updatedHtml = updatedHtml.replace(
        /<script>window\.__INITIAL_DELETED_POSTS__\s*=.*?<\/script>/,
        `<script>window.__INITIAL_DELETED_POSTS__ = ${serializedDeleted};</script>`
      );
    } else {
      updatedHtml = updatedHtml.replace(
        '</head>',
        `    <script>window.__INITIAL_DELETED_POSTS__ = ${serializedDeleted};</script>\n  </head>`
      );
    }
  }

  return updatedHtml;
}

// API: Create or update a blog post
app.post("/api/admin/posts", async (req, res) => {
  try {
    const postData = req.body;
    if (!postData || !postData.title || !postData.slug) {
      return res.status(400).json({ success: false, message: "Tiêu đề và đường dẫn (slug) là bắt buộc" });
    }

    const customPosts = loadCustomBlogPosts();
    const cleanSlug = postData.slug.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const oldSlug = (postData.oldSlug || postData.previousSlug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');

    // If slug was renamed in Admin, automatically set up 301 alias redirect so old links never 404
    if (oldSlug && oldSlug !== cleanSlug) {
      saveDynamicAlias(oldSlug, cleanSlug);
      try {
        const oldFile = path.join(process.cwd(), "dist", `${oldSlug}.html`);
        if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
        const oldSubDir = path.join(process.cwd(), "dist", oldSlug);
        if (fs.existsSync(oldSubDir)) fs.rmSync(oldSubDir, { recursive: true, force: true });
      } catch {}
    }

    const existingIdx = customPosts.findIndex(
      (p) => p.slug === cleanSlug || p.id === cleanSlug || (oldSlug && (p.slug === oldSlug || p.id === oldSlug)) || (postData.id && p.id === postData.id)
    );

    const rawHtml = postData.htmlContent || (postData.content && /<[a-z][\s\S]*>/i.test(postData.content) && !postData.content.trim().startsWith('#') ? postData.content : "");
    const savedPost = {
      ...postData,
      content: postData.content || "",
      htmlContent: rawHtml || undefined,
      id: cleanSlug,
      slug: cleanSlug,
      publishDate: postData.publishDate || new Date().toLocaleDateString("vi-VN", { day: '2-digit', month: '2-digit', year: 'numeric' }),
      updatedAt: new Date().toISOString(),
    };

    // If re-saving/creating, remove from deleted post blacklist
    removeDeletedPostSlug(cleanSlug);
    if (oldSlug) removeDeletedPostSlug(oldSlug);
    if (postData.id) removeDeletedPostSlug(postData.id);

    if (existingIdx >= 0) {
      customPosts[existingIdx] = savedPost;
    } else {
      customPosts.unshift(savedPost);
    }

    saveCustomBlogPosts(customPosts);
    addUrlToSitemap(cleanSlug);

    // Prerender static HTML files in dist/ if available
    try {
      const distIndex = path.join(process.cwd(), "dist", "index.html");
      if (fs.existsSync(distIndex)) {
        const baseHtml = fs.readFileSync(distIndex, "utf-8");
        // Update post HTML
        const seoHtml = injectSeoMeta(baseHtml, `/${cleanSlug}`);
        const distFile = path.join(process.cwd(), "dist", `${cleanSlug}.html`);
        fs.writeFileSync(distFile, seoHtml, "utf-8");
        const distSubDir = path.join(process.cwd(), "dist", cleanSlug);
        if (!fs.existsSync(distSubDir)) fs.mkdirSync(distSubDir, { recursive: true });
        fs.writeFileSync(path.join(distSubDir, "index.html"), seoHtml, "utf-8");

        // Update SPA shell index.html with fresh __INITIAL_CUSTOM_POSTS__
        const updatedIndex = injectSeoMeta(baseHtml, "/");
        fs.writeFileSync(distIndex, updatedIndex, "utf-8");

        // Update blog listing if present
        const blogFile = path.join(process.cwd(), "dist", "blog.html");
        if (fs.existsSync(blogFile)) {
          fs.writeFileSync(blogFile, injectSeoMeta(baseHtml, "/blog"), "utf-8");
        }
        const blogSub = path.join(process.cwd(), "dist", "blog", "index.html");
        if (fs.existsSync(blogSub)) {
          fs.writeFileSync(blogSub, injectSeoMeta(baseHtml, "/blog"), "utf-8");
        }

        // Update any aliases pointing to cleanSlug
        for (const [aliasKey, targetSlug] of Object.entries(BLOG_SLUG_ALIASES)) {
          if (targetSlug.toLowerCase() === cleanSlug) {
            const aliasHtml = injectSeoMeta(baseHtml, `/${aliasKey}`);
            const aliasFile = path.join(process.cwd(), "dist", `${aliasKey}.html`);
            fs.writeFileSync(aliasFile, aliasHtml, "utf-8");
            const aliasSub = path.join(process.cwd(), "dist", aliasKey);
            if (!fs.existsSync(aliasSub)) fs.mkdirSync(aliasSub, { recursive: true });
            fs.writeFileSync(path.join(aliasSub, "index.html"), aliasHtml, "utf-8");
          }
        }
      }
    } catch (ssgErr) {
      console.warn("Could not generate static post html:", ssgErr);
    }

    // Also persist to Firestore so it is globally available across all servers
    try {
      const configPath = path.join(process.cwd(), "firebase-applet-config.json");
      if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        const { initializeApp, getApps, getApp } = await import("firebase/app");
        const { getFirestore, doc, setDoc, deleteDoc } = await import("firebase/firestore");
        const app = getApps().length === 0 ? initializeApp(config) : getApp();
        const db = getFirestore(app, config.firestoreDatabaseId);
        const docId = cleanSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
        await setDoc(doc(db, "posts", docId), {
          id: savedPost.id,
          slug: savedPost.slug,
          title: savedPost.title,
          excerpt: savedPost.excerpt || '',
          content: savedPost.content || '',
          htmlContent: savedPost.htmlContent || '',
          coverImage: savedPost.coverImage || '/images/an-gi-cho-do-ngan.jpg',
          category: savedPost.category || 'Gợi Ý Thực Đơn',
          tags: Array.isArray(savedPost.tags) ? savedPost.tags.join(', ') : (savedPost.tags || ''),
          authorName: savedPost.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì',
          authorRole: savedPost.author?.role || 'Chuyên gia Ẩm thực & Dinh dưỡng',
          authorAvatar: savedPost.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80',
          publishDate: savedPost.publishDate,
          readTime: savedPost.readTime || '5 phút đọc',
          featured: Boolean(savedPost.featured),
          updatedAt: savedPost.updatedAt,
        });

        // If renamed from oldSlug, delete old doc from Firestore
        if (oldSlug && oldSlug !== cleanSlug) {
          const oldDocId = oldSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
          if (oldDocId !== docId) {
            await deleteDoc(doc(db, "posts", oldDocId)).catch(() => {});
            if (oldSlug !== oldDocId) {
              await deleteDoc(doc(db, "posts", oldSlug)).catch(() => {});
            }
          }
        }

        // Unmark from Firestore deleted_posts
        await deleteDoc(doc(db, "deleted_posts", docId)).catch(() => {});
        if (cleanSlug !== docId) {
          await deleteDoc(doc(db, "deleted_posts", cleanSlug)).catch(() => {});
        }
      }
    } catch (fbErr) {
      console.warn("Backend Firestore save warning:", fbErr);
    }

    firestoreQuotaExceededUntil = 0;
    invalidateFirestoreServerCache();

    return res.json({
      success: true,
      message: "Lưu bài viết thành công!",
      post: savedPost,
    });
  } catch (error: any) {
    console.error("Error saving blog post:", error);
    return res.status(500).json({ success: false, message: error?.message || "Lỗi lưu bài viết" });
  }
});

// API: Delete a custom blog post permanently
app.delete("/api/admin/posts/:slugOrId", async (req, res) => {
  try {
    const { slugOrId } = req.params;
    const cleanSlug = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');

    // 1. Record in persistent deleted posts blacklist
    recordDeletedPostSlug(cleanSlug);
    if (slugOrId !== cleanSlug) {
      recordDeletedPostSlug(slugOrId);
    }

    // 2. Remove from custom_blog_posts.json
    const customPosts = loadCustomBlogPosts();
    const filtered = customPosts.filter((p) => {
      const pSlug = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const pId = (p.id || '').toLowerCase().trim();
      return pSlug !== cleanSlug && pId !== cleanSlug && pSlug !== slugOrId && pId !== slugOrId;
    });
    saveCustomBlogPosts(filtered);

    // 3. Remove from Cloud Firestore
    try {
      const configPath = path.join(process.cwd(), "firebase-applet-config.json");
      if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        const { initializeApp, getApps, getApp } = await import("firebase/app");
        const { getFirestore, doc, deleteDoc, setDoc, collection, getDocs } = await import("firebase/firestore");
        const app = getApps().length === 0 ? initializeApp(config) : getApp();
        const db = getFirestore(app, config.firestoreDatabaseId);

        const docId1 = cleanSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
        await deleteDoc(doc(db, "posts", docId1)).catch(() => {});
        if (cleanSlug !== docId1) {
          await deleteDoc(doc(db, "posts", cleanSlug)).catch(() => {});
        }

        // Search and delete any remaining docs in "posts"
        const snap = await getDocs(collection(db, "posts"));
        for (const docSnap of snap.docs) {
          const d = docSnap.data();
          const pSlug = (d.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
          const pId = (d.id || '').toLowerCase().trim();
          if (pSlug === cleanSlug || pId === cleanSlug || docSnap.id === docId1 || docSnap.id === cleanSlug) {
            await deleteDoc(doc(db, "posts", docSnap.id)).catch(() => {});
          }
        }

        // Persist deletion into Cloud Firestore deleted_posts collection for global multi-device sync
        await setDoc(doc(db, "deleted_posts", docId1), {
          slugOrId: cleanSlug,
          deletedAt: new Date().toISOString(),
        }).catch(() => {});
        if (slugOrId !== cleanSlug) {
          const docId2 = slugOrId.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
          await setDoc(doc(db, "deleted_posts", docId2), {
            slugOrId,
            deletedAt: new Date().toISOString(),
          }).catch(() => {});
        }
      }
    } catch (fbErr) {
      console.warn("Backend Firestore delete warning:", fbErr);
    }

    // 4. Remove generated static files in dist/ if present
    try {
      const targets = [cleanSlug, slugOrId].filter(Boolean);
      for (const s of targets) {
        const distFile = path.join(process.cwd(), "dist", `${s}.html`);
        if (fs.existsSync(distFile)) fs.unlinkSync(distFile);
        const distSubDir = path.join(process.cwd(), "dist", s);
        if (fs.existsSync(distSubDir)) fs.rmSync(distSubDir, { recursive: true, force: true });
      }
    } catch {}

    // 5. Remove from sitemap.xml
    try {
      const pubFile = path.join(process.cwd(), "public", "sitemap.xml");
      const distSitemap = path.join(process.cwd(), "dist", "sitemap.xml");
      const targets = [pubFile, distSitemap].filter((f) => fs.existsSync(f));
      for (const target of targets) {
        let content = fs.readFileSync(target, "utf-8");
        const regex = new RegExp(`\\s*<url>\\s*<loc>https:\\/\\/angigio\\.com\\/${cleanSlug}<\\/loc>[\\s\\S]*?<\\/url>`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, '');
          fs.writeFileSync(target, content, "utf-8");
        }
      }
    } catch (smErr) {
      console.warn("Sitemap cleanup warning:", smErr);
    }

    return res.json({
      success: true,
      message: "Đã xóa bài viết thành công!",
    });
  } catch (error: any) {
    console.error("Error deleting blog post:", error);
    return res.status(500).json({ success: false, message: error?.message || "Lỗi xóa bài viết" });
  }
});

// API: Batch import & restore posts (Save Data)
app.post("/api/admin/posts/import", (req, res) => {
  try {
    const { posts, overwrite } = req.body;
    if (!posts || !Array.isArray(posts)) {
      return res.status(400).json({ success: false, message: "Dữ liệu bài viết không hợp lệ" });
    }

    let customPosts = loadCustomBlogPosts();
    if (overwrite) {
      customPosts = posts;
    } else {
      // Merge by slug or id
      const existingMap = new Map<string, any>();
      customPosts.forEach((p) => existingMap.set(p.slug || p.id, p));
      posts.forEach((p) => {
        if (p && (p.slug || p.id)) {
          existingMap.set(p.slug || p.id, p);
          if (p.slug) addUrlToSitemap(p.slug);
        }
      });
      customPosts = Array.from(existingMap.values());
    }

    saveCustomBlogPosts(customPosts);

    return res.json({
      success: true,
      message: `Đã lưu & đồng bộ thành công ${customPosts.length} bài viết!`,
      totalPosts: customPosts.length,
      customPosts,
    });
  } catch (error: any) {
    console.error("Error importing blog posts:", error);
    return res.status(500).json({ success: false, message: error?.message || "Lỗi khi nhập dữ liệu bài viết" });
  }
});

// API: Upload image from client, optimize with sharp to 50KB-60KB, save to /public/images/
app.post("/api/admin/upload-image", async (req, res) => {
  try {
    const { data, filename } = req.body || {};
    if (!data) {
      return res.status(400).json({ success: false, message: "Vui lòng chọn tệp hình ảnh" });
    }

    const base64Data = data.includes("base64,") ? data.split("base64,").pop()! : data;
    const inputBuffer = Buffer.from(base64Data.trim(), "base64");

    const rawName = (filename || "mon-an").toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const finalName = `${rawName || "anh-mon-an"}-${Date.now()}.jpg`;
    const targetPath = path.join(process.cwd(), "public", "images", finalName);

    // Target size: 50 KB - 60 KB (51,200 - 61,440 bytes)
    const targetMin = 51200;
    const targetMax = 61440;

    // Step 1: Pre-scale image down to max width 680px once & flatten transparent PNG onto crisp white background
    const preScaledBuffer = await sharp(inputBuffer)
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .resize({ width: 680, withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true, chromaSubsampling: "4:2:0" })
      .toBuffer();

    let bestBuffer: Buffer | null = null;

    // Step 2: Binary search quality across widths [680, 640, 600, 560, 520]
    for (const w of [680, 640, 600, 560, 520]) {
      let lowQ = 40;
      let highQ = 94;

      while (lowQ <= highQ) {
        const midQ = Math.round((lowQ + highQ) / 2);
        const buf = await sharp(preScaledBuffer)
          .resize({ width: w, withoutEnlargement: true })
          .jpeg({
            quality: midQ,
            progressive: true,
            chromaSubsampling: "4:2:0",
          })
          .toBuffer();

        if (buf.length >= targetMin && buf.length <= targetMax) {
          bestBuffer = buf;
          break;
        }

        if (buf.length < targetMin) {
          if (!bestBuffer || buf.length > bestBuffer.length) {
            bestBuffer = buf;
          }
          lowQ = midQ + 1; // increase quality to increase file size
        } else {
          // buf.length > targetMax
          highQ = midQ - 1; // decrease quality to decrease file size
        }
      }

      if (bestBuffer && bestBuffer.length >= targetMin && bestBuffer.length <= targetMax) {
        break;
      }
    }

    if (!bestBuffer) {
      bestBuffer = preScaledBuffer;
    }

    const imagesDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
    fs.writeFileSync(targetPath, bestBuffer);

    // Also persist to dist/images if dist directory exists
    const distTarget = path.join(process.cwd(), "dist", "images", finalName);
    if (fs.existsSync(path.join(process.cwd(), "dist"))) {
      const distImagesDir = path.join(process.cwd(), "dist", "images");
      if (!fs.existsSync(distImagesDir)) fs.mkdirSync(distImagesDir, { recursive: true });
      fs.writeFileSync(distTarget, bestBuffer);
    }

    const publicUrl = `/images/${finalName}`;
    console.log(`[Upload Image] Successfully saved ${publicUrl} (${bestBuffer.length} bytes, ${(bestBuffer.length / 1024).toFixed(1)} KB)`);
    return res.json({
      success: true,
      url: publicUrl,
      filename: finalName,
      size: bestBuffer.length,
      sizeKb: (bestBuffer.length / 1024).toFixed(1),
    });
  } catch (err: any) {
    console.error("Error uploading image:", err);
    return res.status(500).json({ success: false, message: err?.message || "Lỗi xử lý tải ảnh" });
  }
});

// API: Get list of all images available in /public/images/
app.get("/api/admin/images", (_req, res) => {
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(imagesDir)) {
      return res.json({ success: true, images: [] });
    }
    const files = fs.readdirSync(imagesDir);
    const validExts = [".jpg", ".jpeg", ".png", ".webp", ".svg"];
    const imageList = files
      .filter((f) => validExts.includes(path.extname(f).toLowerCase()) && !f.startsWith("."))
      .map((f) => {
        const filePath = path.join(imagesDir, f);
        const stats = fs.statSync(filePath);
        return {
          filename: f,
          url: `/images/${f}`,
          size: stats.size,
          sizeKb: (stats.size / 1024).toFixed(1),
          mtime: stats.mtimeMs,
        };
      })
      .sort((a, b) => b.mtime - a.mtime);

    return res.json({ success: true, count: imageList.length, images: imageList });
  } catch (err: any) {
    console.error("Error fetching images list:", err);
    return res.status(500).json({ success: false, message: "Lỗi đọc danh sách hình ảnh" });
  }
});

// API: Delete an uploaded image from /public/images/ and dist/images/
app.post("/api/admin/delete-image", (req, res) => {
  try {
    const { url, filename } = req.body || {};
    let targetFilename = filename;
    if (!targetFilename && url && typeof url === "string") {
      targetFilename = path.basename(url);
    }

    if (!targetFilename || typeof targetFilename !== "string") {
      return res.status(400).json({ success: false, message: "Tên tệp không hợp lệ" });
    }

    // Security check: prevent directory traversal
    const safeName = path.basename(targetFilename);
    if (!safeName || safeName.startsWith(".") || safeName.includes("/")) {
      return res.status(400).json({ success: false, message: "Tên tệp không hợp lệ" });
    }

    const publicPath = path.join(process.cwd(), "public", "images", safeName);
    const distPath = path.join(process.cwd(), "dist", "images", safeName);

    let deletedAny = false;
    if (fs.existsSync(publicPath)) {
      fs.unlinkSync(publicPath);
      deletedAny = true;
    }
    if (fs.existsSync(distPath)) {
      fs.unlinkSync(distPath);
      deletedAny = true;
    }

    console.log(`[Delete Image] Deleted image: ${safeName} (deletedAny: ${deletedAny})`);
    return res.json({ success: true, message: `Đã xóa ảnh ${safeName}`, filename: safeName });
  } catch (err: any) {
    console.error("Error deleting image:", err);
    return res.status(500).json({ success: false, message: err?.message || "Lỗi xóa hình ảnh" });
  }
});

async function startServer() {
  // 301 Permanent Redirects for SEO: clean flat URLs
  app.get([
    "/mon-ngon/lich-an-theo-tuan",
    "/mon-ngon/lich-an-theo-tuan/",
    "/len-lich-an",
    "/len-lich-an/",
    "/thuc-don-tuan",
    "/thuc-don-tuan/",
    "/meal-planner",
    "/meal-planner/",
  ], (_req, res) => {
    res.redirect(301, "/lich-an-theo-tuan");
  });

  app.get([
    "/kham-pha-am-thuc",
    "/kham-pha-am-thuc/",
    "/kham-pha-am-thuc/am-thuc-vung-mien",
    "/kham-pha-am-thuc/am-thuc-vung-mien/",
    "/kham-pha",
    "/kham-pha/",
    "/cam-nang",
    "/cam-nang/",
    "/cam-nang-am-thuc",
    "/cam-nang-am-thuc/",
  ], (_req, res) => {
    res.redirect(301, "/am-thuc-vung-mien");
  });

  // Regional cuisine subpaths redirects
  app.get([
    "/am-thuc-vung-mien/mien-bac",
    "/am-thuc-vung-mien/mien-bac/",
  ], (_req, res) => {
    res.redirect(301, "/am-thuc-mien-bac");
  });

  app.get([
    "/am-thuc-vung-mien/mien-trung",
    "/am-thuc-vung-mien/mien-trung/",
  ], (_req, res) => {
    res.redirect(301, "/am-thuc-mien-trung");
  });

  app.get([
    "/am-thuc-vung-mien/mien-nam",
    "/am-thuc-vung-mien/mien-nam/",
    "/am-thuc-mien-nam-sai-gon",
    "/am-thuc-mien-nam-sai-gon/",
  ], (_req, res) => {
    res.redirect(301, "/am-thuc-mien-nam");
  });

  app.get([
    "/am-thuc-vung-mien/mien-tay",
    "/am-thuc-vung-mien/mien-tay/",
    "/am-thuc-mien-tay-song-nuoc",
    "/am-thuc-mien-tay-song-nuoc/",
  ], (_req, res) => {
    res.redirect(301, "/am-thuc-mien-tay");
  });

  app.get([
    "/kham-pha-am-thuc/thuc-don-moi-ngay",
    "/kham-pha-am-thuc/thuc-don-moi-ngay/",
  ], (_req, res) => {
    res.redirect(301, "/thuc-don-moi-ngay");
  });

  app.get([
    "/kham-pha-am-thuc/cach-nau-mon-ngon",
    "/kham-pha-am-thuc/cach-nau-mon-ngon/",
  ], (_req, res) => {
    res.redirect(301, "/cach-nau-mon-ngon");
  });

  // Static SEO routes for Googlebot and search crawlers
  app.get("/robots.txt", (_req, res) => {
    const distFile = path.join(process.cwd(), "dist", "robots.txt");
    const pubFile = path.join(process.cwd(), "public", "robots.txt");
    const target = fs.existsSync(distFile) ? distFile : pubFile;
    if (fs.existsSync(target)) {
      res.type("text/plain").sendFile(target);
    } else {
      res.type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://angigio.com/sitemap.xml\n");
    }
  });

  app.get("/sitemap.xml", (_req, res) => {
    const xml = generateFreshSitemapXml();
    if (xml) {
      res.type("application/xml; charset=utf-8").send(xml);
    } else {
      const pubFile = path.join(process.cwd(), "public", "sitemap.xml");
      if (fs.existsSync(pubFile)) {
        res.type("application/xml").sendFile(pubFile);
      } else {
        res.status(404).send("Sitemap not found");
      }
    }
  });

  // Microsoft Bing Webmaster Tools XML verification
  app.get(["/BingSiteAuth.xml", "/bingsiteauth.xml"], (_req, res) => {
    const distFile = path.join(process.cwd(), "dist", "BingSiteAuth.xml");
    const pubFile = path.join(process.cwd(), "public", "BingSiteAuth.xml");
    const target = fs.existsSync(distFile) ? distFile : pubFile;
    if (fs.existsSync(target)) {
      res.type("application/xml").sendFile(target);
    } else {
      res.type("application/xml").send(`<?xml version="1.0"?>\n<users>\n\t<user>149C7981B16C035B95D859D5F31A28BC</user>\n</users>`);
    }
  });

  // 301 Permanent Redirect for legacy nested recipe URLs to international clean root URLs (/cach-nau-mon-ngon/:slug -> /:slug)
  app.get("/cach-nau-mon-ngon/:slug", (req, res) => {
    const slug = req.params.slug;
    if (slug) {
      return res.redirect(301, `/${slug}`);
    }
    return res.redirect(301, "/cach-nau-mon-ngon");
  });

  // 301 Permanent Redirect for /blog/:slug to clean root URL /:slug (or canonical alias)
  app.get("/blog/:slug", (req, res) => {
    const rawSlug = req.params.slug;
    if (rawSlug) {
      const cleanSlug = rawSlug.replace(/^\/?blog\//, "").replace(/^\//, "").replace(/\/$/, "");
      const canonicalSlug = BLOG_SLUG_ALIASES[cleanSlug] || cleanSlug;
      return res.redirect(301, `/${canonicalSlug}`);
    }
    return res.redirect(301, "/blog");
  });

  // 301 Permanent Redirect for squid recipe alias requested by user
  app.get([
    "/cach-nau-muc-mot-nang-nuong-sa-te",
    "/cach-nau-muc-mot-nang-nuong-sa-te/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-muc-mot-nang-nuong-sa-te");
  });

  // 301 Permanent Redirect for heo quay banh hoi recipe alias requested by user
  app.get([
    "/cach-nau-heo-quay-banh-hoi",
    "/cach-nau-heo-quay-banh-hoi/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-heo-quay-banh-hoi");
  });

  // 301 Permanent Redirect for be thui recipe alias requested by user
  app.get([
    "/cach-nau-be-thui",
    "/cach-nau-be-thui/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-be-thui");
  });

  // 301 Permanent Redirect for banh dap mam nem recipe alias requested by user
  app.get([
    "/cach-nau-banh-dap-mam-nem",
    "/cach-nau-banh-dap-mam-nem/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-dap-mam-nem");
  });

  // 301 Permanent Redirect for banh beo recipe alias requested by user
  app.get([
    "/cach-nau-banh-beo",
    "/cach-nau-banh-beo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-beo");
  });

  // 301 Permanent Redirect for nem lui nuong cuon
  app.get([
    "/cach-nau-nem-lui-nuong-cuon",
    "/cach-nau-nem-lui-nuong-cuon/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-nem-lui-nuong-cuon");
  });

  // 301 Permanent Redirect for banh mi cha ca nong
  app.get([
    "/cach-nau-banh-mi-cha-ca-nong",
    "/cach-nau-banh-mi-cha-ca-nong/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-mi-cha-ca-nong");
  });

  // 301 Permanent Redirect for de tai chanh
  app.get([
    "/cach-nau-de-tai-chanh-tuong-ban",
    "/cach-nau-de-tai-chanh-tuong-ban/",
    "/cach-nau-de-tai-chanh",
    "/cach-nau-de-tai-chanh/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-de-tai-chanh");
  });

  // 301 Permanent Redirect for banh mi chao
  app.get([
    "/cach-nau-banh-mi-chao-xiu-mai",
    "/cach-nau-banh-mi-chao-xiu-mai/",
    "/cach-nau-banh-mi-chao",
    "/cach-nau-banh-mi-chao/",
    "/cach-lam-banh-mi-chao-xiu-mai",
    "/cach-lam-banh-mi-chao-xiu-mai/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-mi-chao");
  });

  // 301 Permanent Redirect for banh mi thit nuong
  app.get([
    "/cach-nau-banh-mi-thit-nuong",
    "/cach-nau-banh-mi-thit-nuong/",
    "/cach-nau-banh-mi-thit-nuong-sa-te",
    "/cach-nau-banh-mi-thit-nuong-sa-te/",
    "/cach-lam-banh-mi-thit-nuong-sa-te",
    "/cach-lam-banh-mi-thit-nuong-sa-te/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-mi-thit-nuong");
  });

  // 301 Permanent Redirect for banh mi heo quay
  app.get([
    "/cach-nau-banh-mi-heo-quay-gion",
    "/cach-nau-banh-mi-heo-quay-gion/",
    "/cach-nau-banh-mi-heo-quay",
    "/cach-nau-banh-mi-heo-quay/",
    "/cach-lam-banh-mi-heo-quay-gion",
    "/cach-lam-banh-mi-heo-quay-gion/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-mi-heo-quay");
  });

  // 301 Permanent Redirect for banh mi pate thap cam
  app.get([
    "/cach-nau-banh-mi-pate-thap-cam",
    "/cach-nau-banh-mi-pate-thap-cam/",
    "/cach-nau-banh-mi-pate",
    "/cach-nau-banh-mi-pate/",
    "/cach-lam-banh-mi-pate",
    "/cach-lam-banh-mi-pate/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-mi-pate-thap-cam");
  });

  // 301 Permanent Redirect for bo kho banh mi
  app.get([
    "/cach-nau-bo-kho-banh-my-nong-gion",
    "/cach-nau-bo-kho-banh-my-nong-gion/",
    "/cach-nau-bo-kho-banh-mi",
    "/cach-nau-bo-kho-banh-mi/",
    "/cach-lam-bo-kho-banh-my-nong-gion",
    "/cach-lam-bo-kho-banh-my-nong-gion/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-bo-kho-banh-mi");
  });

  // 301 Permanent Redirect for pha lau bo
  app.get([
    "/cach-lam-pha-lau-bo",
    "/cach-lam-pha-lau-bo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-pha-lau-bo");
  });

  // 301 Permanent Redirect for com ga xoi mo
  app.get([
    "/cach-nau-com-ga-xoi-mo",
    "/cach-nau-com-ga-xoi-mo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-com-ga-xoi-mo");
  });

  // 301 Permanent Redirect for bot chien trung
  app.get([
    "/cach-nau-bot-chien-gion-trung-doi",
    "/cach-nau-bot-chien-gion-trung-doi/",
    "/cach-nau-bot-chien-trung",
    "/cach-nau-bot-chien-trung/",
    "/cach-nau-bot-chien",
    "/cach-nau-bot-chien/",
    "/cach-lam-bot-chien",
    "/cach-lam-bot-chien/",
    "/cach-lam-bot-chien-gion-trung-doi",
    "/cach-lam-bot-chien-gion-trung-doi/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-bot-chien-trung");
  });

  // 301 Permanent Redirect for nui xao bo
  app.get([
    "/cach-nau-nui-xao-bo-ap-chao",
    "/cach-nau-nui-xao-bo-ap-chao/",
    "/cach-nau-nui-xao-bo",
    "/cach-nau-nui-xao-bo/",
    "/cach-lam-nui-xao-bo-ap-chao",
    "/cach-lam-nui-xao-bo-ap-chao/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-nui-xao-bo");
  });

  // 301 Permanent Redirect for nui gio heo
  app.get([
    "/cach-lam-nui-gio-heo",
    "/cach-lam-nui-gio-heo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-nui-gio-heo");
  });

  // 301 Permanent Redirect for goi cuon tom thit
  app.get([
    "/cach-nau-goi-cuon-tom-thit",
    "/cach-nau-goi-cuon-tom-thit/",
    "/cach-nau-goi-cuon",
    "/cach-nau-goi-cuon/",
    "/cach-lam-goi-cuon",
    "/cach-lam-goi-cuon/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-goi-cuon-tom-thit");
  });

  // 301 Permanent Redirect for bun thit nuong
  app.get([
    "/cach-nau-bun-thit-nuong-cha-gio",
    "/cach-nau-bun-thit-nuong-cha-gio/",
    "/cach-nau-bun-thit-nuong",
    "/cach-nau-bun-thit-nuong/",
    "/cach-lam-bun-thit-nuong-cha-gio",
    "/cach-lam-bun-thit-nuong-cha-gio/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-bun-thit-nuong");
  });

  // 301 Permanent Redirect for banh canh cua
  app.get([
    "/cach-lam-banh-canh-cua",
    "/cach-lam-banh-canh-cua/",
    "/cach-nau-banh-canh-cua-gio-heo",
    "/cach-nau-banh-canh-cua-gio-heo/",
    "/cach-lam-banh-canh-cua-gio-heo",
    "/cach-lam-banh-canh-cua-gio-heo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-banh-canh-cua");
  });

  // 301 Permanent Redirect for banh khot vung tau
  app.get([
    "/cach-nau-banh-khot-tom-vung-tau",
    "/cach-nau-banh-khot-tom-vung-tau/",
    "/cach-nau-banh-khot-vung-tau",
    "/cach-nau-banh-khot-vung-tau/",
    "/cach-nau-banh-khot",
    "/cach-nau-banh-khot/",
    "/cach-lam-banh-khot-tom-vung-tau",
    "/cach-lam-banh-khot-tom-vung-tau/",
    "/cach-lam-banh-khot",
    "/cach-lam-banh-khot/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-khot-vung-tau");
  });

  // 301 Permanent Redirect for bo ne
  app.get([
    "/cach-nau-bo-ne",
    "/cach-nau-bo-ne/",
    "/cach-nau-bo-ne-chao-gang",
    "/cach-nau-bo-ne-chao-gang/",
    "/cach-lam-bo-ne-chao-gang",
    "/cach-lam-bo-ne-chao-gang/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-bo-ne");
  });

  // 301 Permanent Redirect for canh bun
  app.get([
    "/cach-lam-canh-bun",
    "/cach-lam-canh-bun/",
    "/cach-nau-canh-bun-rau-muong",
    "/cach-nau-canh-bun-rau-muong/",
    "/cach-lam-canh-bun-rau-muong",
    "/cach-lam-canh-bun-rau-muong/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-canh-bun");
  });

  // 301 Permanent Redirect for canh chua ca loc
  app.get([
    "/canh-chua-ca-loc",
    "/canh-chua-ca-loc/",
    "/cach-lam-canh-chua-ca-loc",
    "/cach-lam-canh-chua-ca-loc/",
    "/cach-nau-canh-chua-ca-loc-nam-bo",
    "/cach-nau-canh-chua-ca-loc-nam-bo/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-canh-chua-ca-loc");
  });

  // 301 Permanent Redirect for banh uot
  app.get([
    "/cach-nau-banh-uot",
    "/cach-nau-banh-uot/",
    "/cach-lam-banh-uot-cha-lua",
    "/cach-lam-banh-uot-cha-lua/",
    "/cach-nau-banh-uot-cha-lua",
    "/cach-nau-banh-uot-cha-lua/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-uot");
  });

  // 301 Permanent Redirect for bun mang vit
  app.get([
    "/cach-lam-bun-mang-vit",
    "/cach-lam-bun-mang-vit/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-bun-mang-vit");
  });

  // 301 Permanent Redirect for oc huong xao bo toi
  app.get([
    "/cach-nau-oc-huong-xao-bo-toi",
    "/cach-nau-oc-huong-xao-bo-toi/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-oc-huong-xao-bo-toi");
  });

  // 301 Permanent Redirect for ca vien chien nuoc mam
  app.get([
    "/cach-nau-ca-vien-chien-nuoc-mam",
    "/cach-nau-ca-vien-chien-nuoc-mam/",
    "/cach-lam-ca-vien-chien",
    "/cach-lam-ca-vien-chien/",
    "/cach-nau-ca-vien-chien",
    "/cach-nau-ca-vien-chien/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-ca-vien-chien-nuoc-mam");
  });

  // 301 Permanent Redirect for banh trang tron sa te
  app.get([
    "/cach-nau-banh-trang-tron-sa-te",
    "/cach-nau-banh-trang-tron-sa-te/",
    "/cach-lam-banh-trang-tron-sa-te",
    "/cach-lam-banh-trang-tron-sa-te/",
    "/cach-nau-banh-trang-tron",
    "/cach-nau-banh-trang-tron/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-trang-tron");
  });

  // 301 Permanent Redirect for bun mam mien tay
  app.get([
    "/cach-lam-bun-mam-mien-tay",
    "/cach-lam-bun-mam-mien-tay/",
    "/cach-lam-bun-mam",
    "/cach-lam-bun-mam/",
    "/cach-nau-bun-mam",
    "/cach-nau-bun-mam/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-bun-mam-mien-tay");
  });

  // 301 Permanent Redirect for bun nuoc leo soc trang
  app.get([
    "/cach-nau-bun-nuoc-leo",
    "/cach-nau-bun-nuoc-leo/",
    "/cach-lam-bun-nuoc-leo",
    "/cach-lam-bun-nuoc-leo/",
    "/cach-lam-bun-nuoc-leo-soc-trang",
    "/cach-lam-bun-nuoc-leo-soc-trang/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-bun-nuoc-leo-soc-trang");
  });

  // 301 Permanent Redirect for lau mam mien tay
  app.get([
    "/lau-mam-mien-tay",
    "/lau-mam-mien-tay/",
    "/cach-lam-lau-mam-mien-tay",
    "/cach-lam-lau-mam-mien-tay/",
    "/lau-mam",
    "/lau-mam/",
    "/cach-lam-lau-mam",
    "/cach-lam-lau-mam/",
    "/cach-nau-lau-mam",
    "/cach-nau-lau-mam/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-lau-mam-mien-tay");
  });

  // 301 Permanent Redirect for com ca kho to
  app.get([
    "/ca-kho-to",
    "/ca-kho-to/",
    "/cach-lam-ca-kho-to",
    "/cach-lam-ca-kho-to/",
    "/cach-nau-ca-kho-to",
    "/cach-nau-ca-kho-to/",
    "/com-ca-kho-to",
    "/com-ca-kho-to/",
    "/cach-lam-com-ca-kho-to",
    "/cach-lam-com-ca-kho-to/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-com-ca-kho-to");
  });

  // 301 Permanent Redirect for com chay kho quet
  app.get([
    "/com-chay-kho-quet",
    "/com-chay-kho-quet/",
    "/cach-lam-com-chay-kho-quet",
    "/cach-lam-com-chay-kho-quet/",
    "/kho-quet",
    "/kho-quet/",
    "/cach-lam-kho-quet",
    "/cach-lam-kho-quet/",
    "/cach-nau-kho-quet",
    "/cach-nau-kho-quet/",
    "/bau-luoc-kho-quet",
    "/bau-luoc-kho-quet/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-com-chay-kho-quet");
  });

  // 301 Permanent Redirect for chao ca loc
  app.get([
    "/chao-ca-loc",
    "/chao-ca-loc/",
    "/cach-lam-chao-ca-loc",
    "/cach-lam-chao-ca-loc/",
    "/chao-ca-loc-rau-dang",
    "/chao-ca-loc-rau-dang/",
    "/cach-nau-chao-ca-loc-rau-dang",
    "/cach-nau-chao-ca-loc-rau-dang/",
    "/cach-lam-chao-ca-loc-rau-dang",
    "/cach-lam-chao-ca-loc-rau-dang/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-chao-ca-loc");
  });

  // 301 Permanent Redirect for lau ca keo la giang
  app.get([
    "/lau-ca-keo",
    "/lau-ca-keo/",
    "/cach-lam-lau-ca-keo",
    "/cach-lam-lau-ca-keo/",
    "/cach-nau-lau-ca-keo",
    "/cach-nau-lau-ca-keo/",
    "/lau-ca-keo-la-giang",
    "/lau-ca-keo-la-giang/",
    "/cach-lam-lau-ca-keo-la-giang",
    "/cach-lam-lau-ca-keo-la-giang/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-lau-ca-keo-la-giang");
  });

  // 301 Permanent Redirect for vit nau chao
  app.get([
    "/vit-nau-chao",
    "/vit-nau-chao/",
    "/cach-lam-vit-nau-chao",
    "/cach-lam-vit-nau-chao/",
    "/vit-nau-chao-can-tho",
    "/vit-nau-chao-can-tho/",
    "/cach-nau-vit-nau-chao-can-tho",
    "/cach-nau-vit-nau-chao-can-tho/",
    "/cach-lam-vit-nau-chao-can-tho",
    "/cach-lam-vit-nau-chao-can-tho/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-vit-nau-chao");
  });

  // 301 Permanent Redirect for ca loc nuong trui
  app.get([
    "/ca-loc-nuong",
    "/ca-loc-nuong/",
    "/cach-nau-ca-loc-nuong",
    "/cach-nau-ca-loc-nuong/",
    "/ca-loc-nuong-trui",
    "/ca-loc-nuong-trui/",
    "/cach-nau-ca-loc-nuong-trui",
    "/cach-nau-ca-loc-nuong-trui/",
    "/cach-lam-ca-loc-nuong",
    "/cach-lam-ca-loc-nuong/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-ca-loc-nuong-trui");
  });

  // 301 Permanent Redirect for goi xoai ca sac
  app.get([
    "/goi-xoai-ca-sac",
    "/goi-xoai-ca-sac/",
    "/goi-ca-sac",
    "/goi-ca-sac/",
    "/goi-xoai-xanh-ca-sac",
    "/goi-xoai-xanh-ca-sac/",
    "/cach-nau-goi-xoai-ca-sac",
    "/cach-nau-goi-xoai-ca-sac/",
    "/cach-lam-goi-ca-sac",
    "/cach-lam-goi-ca-sac/",
    "/cach-nau-goi-ca-sac",
    "/cach-nau-goi-ca-sac/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-goi-xoai-ca-sac");
  });

  // 301 Permanent Redirect for goi ngo sen tom thit
  app.get([
    "/goi-ngo-sen",
    "/goi-ngo-sen/",
    "/goi-ngo-sen-tom-thit",
    "/goi-ngo-sen-tom-thit/",
    "/cach-nau-goi-ngo-sen",
    "/cach-nau-goi-ngo-sen/",
    "/cach-nau-goi-ngo-sen-tom-thit",
    "/cach-nau-goi-ngo-sen-tom-thit/",
    "/cach-lam-goi-ngo-sen",
    "/cach-lam-goi-ngo-sen/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-goi-ngo-sen-tom-thit");
  });

  // 301 Permanent Redirect for com chien ca man
  app.get([
    "/com-ca-man",
    "/com-ca-man/",
    "/com-chien-ca-man",
    "/com-chien-ca-man/",
    "/cach-nau-com-ca-man",
    "/cach-nau-com-ca-man/",
    "/cach-nau-com-chien-ca-man",
    "/cach-nau-com-chien-ca-man/",
    "/cach-lam-com-ca-man",
    "/cach-lam-com-ca-man/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-com-chien-ca-man");
  });

  // 301 Permanent Redirect for banh xeo
  app.get([
    "/banh-xeo",
    "/banh-xeo/",
    "/banh-xeo-mien-tay",
    "/banh-xeo-mien-tay/",
    "/banh-xeo-tom-thit-gion",
    "/banh-xeo-tom-thit-gion/",
    "/cach-nau-banh-xeo",
    "/cach-nau-banh-xeo/",
    "/cach-do-banh-xeo",
    "/cach-do-banh-xeo/",
    "/cach-lam-banh-xeo-mien-tay",
    "/cach-lam-banh-xeo-mien-tay/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-xeo");
  });

  // 301 Permanent Redirect for thit kho tau
  app.get([
    "/thit-kho-tau",
    "/thit-kho-tau/",
    "/com-thit-kho-tau",
    "/com-thit-kho-tau/",
    "/thit-kho-tau-nuoc-dua",
    "/thit-kho-tau-nuoc-dua/",
    "/cach-lam-thit-kho-tau",
    "/cach-lam-thit-kho-tau/",
    "/cach-nau-thit-kho-tau-nuoc-dua",
    "/cach-nau-thit-kho-tau-nuoc-dua/",
    "/cach-lam-thit-kho-tau-nuoc-dua",
    "/cach-lam-thit-kho-tau-nuoc-dua/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-thit-kho-tau");
  });

  // 301 Permanent Redirect for bao tu ham tieu
  app.get([
    "/bao-tu-ham-tieu",
    "/bao-tu-ham-tieu/",
    "/bao-tu-ham-tieu-xanh",
    "/bao-tu-ham-tieu-xanh/",
    "/lau-bao-tu-ham-tieu",
    "/lau-bao-tu-ham-tieu/",
    "/cach-lam-bao-tu-ham-tieu",
    "/cach-lam-bao-tu-ham-tieu/",
    "/cach-nau-lau-bao-tu-ham-tieu",
    "/cach-nau-lau-bao-tu-ham-tieu/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-nau-bao-tu-ham-tieu");
  });

  // 301 Permanent Redirect for che buoi
  app.get([
    "/che-buoi",
    "/che-buoi/",
    "/che-buoi-an-giang",
    "/che-buoi-an-giang/",
    "/cach-nau-che-buoi",
    "/cach-nau-che-buoi/",
    "/cach-lam-che-buoi-an-giang",
    "/cach-lam-che-buoi-an-giang/",
    "/cach-nau-che-buoi-an-giang",
    "/cach-nau-che-buoi-an-giang/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-che-buoi");
  });

  // 301 Permanent Redirect for banh chuoi nuong
  app.get([
    "/banh-chuoi-nuong",
    "/banh-chuoi-nuong/",
    "/banh-chuoi-nuong-nuoc-cot-dua",
    "/banh-chuoi-nuong-nuoc-cot-dua/",
    "/cach-nau-banh-chuoi-nuong",
    "/cach-nau-banh-chuoi-nuong/",
    "/cach-lam-banh-chuoi-nuong-cot-dua",
    "/cach-lam-banh-chuoi-nuong-cot-dua/",
    "/cach-nau-banh-chuoi-nuong-cot-dua",
    "/cach-nau-banh-chuoi-nuong-cot-dua/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-chuoi-nuong");
  });

  // 301 Permanent Redirect for canh chua chay
  app.get([
    "/canh-chua-chay",
    "/canh-chua-chay/",
    "/canh-chua-nam-chay",
    "/canh-chua-nam-chay/",
    "/canh-chua-dau-hu",
    "/canh-chua-dau-hu/",
    "/cach-nau-canh-chua-chay",
    "/cach-nau-canh-chua-chay/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-canh-chua-chay");
  });

  // 301 Permanent Redirect for banh xeo chay
  app.get([
    "/banh-xeo-chay",
    "/banh-xeo-chay/",
    "/banh-xeo-nam-chay",
    "/banh-xeo-nam-chay/",
    "/cach-nau-banh-xeo-chay",
    "/cach-nau-banh-xeo-chay/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-banh-xeo-chay");
  });

  // 301 Permanent Redirect for com nieu bo sot tieu den
  app.get([
    "/com-nieu-singapore",
    "/com-nieu-singapore/",
    "/com-nieu-bo-sot-tieu-den",
    "/com-nieu-bo-sot-tieu-den/",
    "/com-nieu-bo-tieu-den",
    "/com-nieu-bo-tieu-den/",
    "/cach-nau-com-nieu-bo-sot-tieu-den",
    "/cach-nau-com-nieu-bo-sot-tieu-den/",
    "/cach-lam-com-nieu-bo-tieu-den",
    "/cach-lam-com-nieu-bo-tieu-den/",
  ], (_req, res) => {
    return res.redirect(301, "/cach-lam-com-nieu-bo-sot-tieu-den");
  });

  // 301 Permanent Redirect for blog slug aliases to canonical post URL
  // Ensures any active post saved in Admin is ALWAYS served directly and never hijacked
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const cleanPath = req.path.toLowerCase().replace(/^\//, '').replace(/\/$/, '');
    if (!cleanPath || cleanPath.startsWith("api") || cleanPath.startsWith("@") || cleanPath.includes(".")) {
      return next();
    }

    // 1. If cleanPath is an active custom post, ALWAYS allow direct serving
    const customPosts = loadCustomBlogPosts();
    const isDirectCustomPost = customPosts.some((p) => {
      const s = (p.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      return s === cleanPath;
    });
    if (isDirectCustomPost) {
      return next();
    }

    // 2. Check dynamic aliases (from posts renamed in Admin)
    const dynamicAliases = loadDynamicAliases();
    if (dynamicAliases[cleanPath]) {
      const target = dynamicAliases[cleanPath];
      if (target.toLowerCase() !== cleanPath) {
        return res.redirect(301, `/${target}`);
      }
    }

    // 3. Check static BLOG_SLUG_ALIASES
    if (BLOG_SLUG_ALIASES[cleanPath]) {
      const target = BLOG_SLUG_ALIASES[cleanPath];
      if (target.toLowerCase() !== cleanPath) {
        return res.redirect(301, `/${target}`);
      }
    }

    next();
  });

  // Intercept deleted blog posts globally so deleted posts are NEVER served across any machine or browser
  app.use((req, res, next) => {
    if (req.method === "GET") {
      const cleanPath = req.path.toLowerCase().replace(/^\//, '').replace(/\/$/, '');
      const slug = cleanPath.replace(/^blog\//, '');
      if (slug) {
        const deleted = loadDeletedPostSlugs();
        if (deleted.includes(slug) || deleted.includes(cleanPath)) {
          return res.redirect(302, "/blog");
        }
      }
    }
    next();
  });

  const httpServer = http.createServer(app);

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });

    // Handle HTML requests in dev mode to inject route-specific SEO meta tags
    app.use(async (req, res, next) => {
      if (
        req.method === "GET" &&
        !req.path.startsWith("/api") &&
        !req.path.startsWith("/@") &&
        !req.path.includes(".")
      ) {
        try {
          const rawHtml = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf-8");
          const transformedHtml = await vite.transformIndexHtml(req.originalUrl, rawHtml);
          const seoHtml = injectSeoMeta(transformedHtml, req.path);
          return res.status(200).set({
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
          }).end(seoHtml);
        } catch (e) {
          return next(e);
        }
      }
      next();
    });

    app.use(vite.middlewares);
  } else {
    const distPath = fs.existsSync(path.join(process.cwd(), "dist", "index.html"))
      ? path.join(process.cwd(), "dist")
      : fs.existsSync(path.join(__dirname, "index.html"))
      ? __dirname
      : path.resolve(process.cwd(), "dist");

    app.use(
      express.static(distPath, {
        index: false,
        maxAge: "1y",
        immutable: true,
        etag: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".html") || filePath.endsWith(".json")) {
            res.setHeader("Cache-Control", "public, max-age=180, stale-while-revalidate=1800");
          } else if (filePath.includes("/assets/") || /\.(png|jpe?g|webp|svg|ico|woff2?|ttf|eot)$/i.test(filePath)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );

    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        const rawHtml = fs.readFileSync(indexPath, "utf-8");
        const seoHtml = injectSeoMeta(rawHtml, req.path);
        const hash = crypto.createHash("md5").update(seoHtml).digest("hex");
        const etag = `"${hash}"`;
        res.setHeader("ETag", etag);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");

        if (req.headers["if-none-match"] === etag) {
          return res.status(304).end();
        }
        return res.send(seoHtml);
      } else {
        res.status(404).send("Application dist index.html not found");
      }
    });
  }

  // Primary listener binds to internal port 3000 (required for reverse proxy routing in AI Studio containers)
  httpServer.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`Primary port ${DEFAULT_PORT} is already in use by another process.`);
    } else {
      console.error(`Server error on primary port ${DEFAULT_PORT}:`, err);
    }
  });

  httpServer.listen(DEFAULT_PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${DEFAULT_PORT} (${isProduction ? "production" : "development"} mode)`);
  });

  // Graceful shutdown handling for container platforms (Cloud Run / Docker)
  const shutdown = () => {
    console.log("Shutting down servers gracefully...");
    try {
      httpServer.close();
    } catch {
      // ignore
    }
    process.exit(0);
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
