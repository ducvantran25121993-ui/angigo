import { AISuggestion } from '../types';

export interface SuggestionInput {
  mealTime?: string;
  budget?: string;
  mood?: string;
  weather?: string;
  location?: string;
  partySize?: number;
  cravings?: string;
  excludeNames?: string[];
}

export type BudgetTier = 'under35k' | '35k_60k' | '60k_100k' | 'over100k';

export function parseBudgetTier(budgetStr: string = ''): BudgetTier {
  const b = budgetStr.toLowerCase();
  if (b.includes('dưới 35k') || b.includes('duoi 35k') || b.includes('< 35k') || b.includes('35k (tiết')) {
    return 'under35k';
  }
  if (b.includes('> 100k') || b.includes('trên 100k') || b.includes('sang chảnh')) {
    return 'over100k';
  }
  if (b.includes('60k - 100k') || b.includes('60k-100k') || b.includes('100k (đầy')) {
    return '60k_100k';
  }
  return '35k_60k';
}

import {
  getDishImageByName as catalogGetDishImageByName,
  getAlternativeImagesForDish,
  searchDishImages,
  ALL_AUTHENTIC_DISH_IMAGES,
  DishImageItem,
} from './dishImageCatalog';

export {
  getAlternativeImagesForDish,
  searchDishImages,
  ALL_AUTHENTIC_DISH_IMAGES,
};
export type { DishImageItem };

export function getDishImageByName(name: string = '', category: string = ''): string {
  return catalogGetDishImageByName(name, category);
}

interface TieredDish extends AISuggestion {
  budgetTier: BudgetTier;
}

// Strictly Tiered Candidate Dishes Matching Exact Prices (All Prices Checked to strictly match budget)
const BUDGET_TIERED_DISHES: TieredDish[] = [
  // --- TIER 1: DƯỚI 35K (TIẾT KIỆM) ---
  {
    budgetTier: 'under35k',
    name: 'Bánh Mì Pate Thịt Nguội Đầy Đặn Xốt Bơ',
    tagline: 'Vỏ giòn tan, ruột mềm thơm pate gan béo ngậy kèm đồ chua chống ngấy',
    category: 'Bánh Mì / Ăn Nhanh',
    estimatedPrice: '20.000đ - 30.000đ',
    reason: 'Giá cực mềm dưới 35k, chuẩn tiêu chí tiết kiệm nhanh gọn.',
    searchKeyword: 'Bánh mì pate thịt nguội',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Nhanh gọn'],
    calories: '~420 kcal',
    pairWith: 'Sữa đậu nành đá mát lạnh',
    image: '/images/banh_mi_pate.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Xôi Xéo Hà Nội Hành Phi Rắc Ruốc Thịt',
    tagline: 'Hạt nếp dẻo thơm nước mỡ gà, đỗ xanh bùi mịn hành phi giòn tan',
    category: 'Xôi / Món Ăn Sáng & Trưa',
    estimatedPrice: '20.000đ - 35.000đ',
    reason: 'Chi phí tiết kiệm dưới 35k mà cực kỳ chắc bụng suốt buổi.',
    searchKeyword: 'Xôi xéo Hà Nội',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Chắc bụng'],
    calories: '~480 kcal',
    pairWith: 'Trà đá hoa lài',
    image: '/images/xoi_xeo_ha_noi.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Cháo Sườn Sụn Quẩy Giòn Ruốc Thịt',
    tagline: 'Cháo mịn như nhung, sườn sụn giòn sần sật rắc tiêu thơm lừng',
    category: 'Cháo Nóng / Dễ Ăn',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Ấm bao tử, dễ tiêu hóa, mức giá dưới 35k vô cùng vừa túi tiền.',
    searchKeyword: 'Cháo sườn sụn',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Ấm bụng'],
    calories: '~390 kcal',
    pairWith: 'Nước đậu nành nóng',
    image: '/images/chao_suon_sun.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bún Riêu Cua Bình Dân Tàu Hũ Ky & Cà Chua',
    tagline: 'Nước dùng chua dịu tự nhiên, gạch cua bùi thơm đậm đà',
    category: 'Bún Bình Dân',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Món nước thanh mát giá chỉ dưới 35k rất hợp túi tiền sinh viên & văn phòng.',
    searchKeyword: 'Bún riêu cua đồng',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Thanh mát'],
    calories: '~410 kcal',
    pairWith: 'Trà đá hoặc nước mía',
    image: '/images/bun_rieu_cua.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Gỏi Cuốn Tôm Thịt Thanh Mát (3 Cuốn)',
    tagline: 'Tôm luộc đỏ au, thịt ba chỉ cuốn bánh tráng rau sống giòn mát',
    category: 'Món Cuốn / Ăn Nhẹ',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Món ăn nhẹ bụng, tươi ngon giải nhiệt giá vừa vặn dưới 35k.',
    searchKeyword: 'Gỏi cuốn tôm thịt',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Healthy'],
    calories: '~320 kcal',
    pairWith: 'Nước rau má đậu xanh',
    image: '/images/goi_cuon_tom_thit_chuan.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bánh Xèo Miền Tây Giòn Rụm Nhân Tôm Thịt Giá',
    tagline: 'Vỏ bánh vàng ươm béo ngậy cốt dừa, cuốn rau rừng chấm nước mắm chua ngọt',
    category: 'Bánh Ăn Vặt / Ăn Trưa',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Chi phí dưới 35k cho một suất bánh xèo giòn rụm bắt vị.',
    searchKeyword: 'Bánh xèo miền Tây',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Giòn rụm'],
    calories: '~450 kcal',
    pairWith: 'Trà chanh tươi',
    image: '/images/banh_xeo.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bánh Mì Ốp La 2 Trứng Xốt Bơ & Dưa Cà',
    tagline: 'Trứng lòng đào béo ngậy, bánh mì giòn xốp nóng hổi xịt tương ớt',
    category: 'Bánh Mì / Sáng Trưa',
    estimatedPrice: '20.000đ - 30.000đ',
    reason: 'Chưa tới 30k cực ngon chuẩn vị bữa ăn tiết kiệm.',
    searchKeyword: 'Bánh mì ốp la',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Nhanh gọn'],
    calories: '~400 kcal',
    pairWith: 'Cà phê sữa đá',
    image: '/images/banh_mi_chao.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bánh Tráng Trộn Sài Gòn Đầy Đủ Trứng Cút Tắc Khô Bò',
    tagline: 'Bánh tráng dẻo thấm sốt quất chua cay, rau rau rắm & đậu phụng giòn',
    category: 'Ăn Vặt / Ăn Nhẹ',
    estimatedPrice: '20.000đ - 30.000đ',
    reason: 'Bắt vị xế chiều giải stress giá siêu tiết kiệm dưới 35k.',
    searchKeyword: 'Bánh tráng trộn',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Ăn vặt'],
    calories: '~350 kcal',
    pairWith: 'Trà chanh giã tay',
    image: '/images/banh_trang_tron.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bột Chiên Trứng Đồ Chua Sài Gòn Giòn Rụm',
    tagline: 'Bột cắt khối chiên giòn xém, đập trứng gà béo ngậy ăn kèm đu đủ bào',
    category: 'Ăn Vặt / Ăn Tối',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Nóng hổi giòn rụm giá chỉ 25k - 35k vô cùng hấp dẫn.',
    searchKeyword: 'Bột chiên trứng',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Giòn rụm'],
    calories: '~460 kcal',
    pairWith: 'Trà đá đường',
    image: '/images/bot_chien.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Hủ Tiếu Gõ Nước Lèo Đậm Đà Bò Viên Thịt Heo',
    tagline: 'Sợi hủ tiếu dai dai, nước lèo ngọt thanh thơm hẹ & tỏi phi giòn',
    category: 'Món Nước Bình Dân',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Ấm lòng ấm bụng bữa tối muộn với giá dưới 35k.',
    searchKeyword: 'Hủ tiếu gõ',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Bình dân'],
    calories: '~410 kcal',
    pairWith: 'Trà đá lạnh',
    image: '/images/hu_tieu_go.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Bánh Cuốn Nóng Nhân Thịt Mộc Nhĩ Hành Phi',
    tagline: 'Tráng mỏng mướt mịn, nhân thịt băm mộc nhĩ giòn sần sật chấm mắm ngọt',
    category: 'Món Ăn Sáng & Trưa',
    estimatedPrice: '25.000đ - 35.000đ',
    reason: 'Nhẹ nhàng dễ ăn, giá hạt dẻ dưới 35k.',
    searchKeyword: 'Bánh cuốn nóng',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Thanh nhẹ'],
    calories: '~380 kcal',
    pairWith: 'Nước chanh dây',
    image: '/images/banh_cuon.jpg',
  },
  {
    budgetTier: 'under35k',
    name: 'Chè Bưởi An Giang Cốt Dừa & Thạch Sương Sáo',
    tagline: 'Cốt dừa béo ngậy thơm lừng, cùi bưởi giòn sần sật mướt lạnh',
    category: 'Chè Tráng Miệng / Đồ Ngọt',
    estimatedPrice: '20.000đ - 30.000đ',
    reason: 'Món tráng miệng ngọt mát giải nhiệt giá mềm dưới 35k.',
    searchKeyword: 'Chè bưởi An Giang',
    tags: ['Tiết kiệm', 'Dưới 35k', 'Giải nhiệt'],
    calories: '~330 kcal',
    pairWith: 'Nước dừa tươi',
    image: '/images/che_buoi.jpg',
  },

  // --- TIER 2: 35K - 60K (VĂN PHÒNG) ---
  {
    budgetTier: '35k_60k',
    name: 'Cơm Tấm Sườn Bì Chả Mỡ Hành Trứng Ốp La',
    tagline: 'Kinh điển món ngon Sài Gòn, thơm lừng sườn nướng mật ong nức mũi',
    category: 'Cơm Văn Phòng',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Thuộc khoảng giá 35k - 60k chuẩn văn phòng, no chắc bụng.',
    searchKeyword: 'Cơm tấm sườn bì chả',
    tags: ['Văn phòng', '35k-60k', 'Kinh điển'],
    calories: '~680 kcal',
    pairWith: 'Canh khổ qua dồn thịt & trà đá',
    image: '/images/com_tam_suon_bi_cha.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Bún Chả Hà Nội Than Hoa Nước Chấm Thanh',
    tagline: 'Chả nướng thơm xém cạnh, nước mắm đu đủ cà rốt chua ngọt mát lành',
    category: 'Bún / Món Chua Ngọt',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Chuẩn phân khúc 35k - 60k, chua ngọt mát lành dễ ăn.',
    searchKeyword: 'Bún chả Hà Nội',
    tags: ['Văn phòng', '35k-60k', 'Chua ngọt'],
    calories: '~540 kcal',
    pairWith: 'Nước sấu ngâm đường',
    image: '/images/bun_cha_ha_noi.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Cơm Gà Xé Phay Hội An Trộn Rau Răm',
    tagline: 'Cơm nấu nước luộc gà vàng ươm dẻo thơm, thịt gà ta xé phay bóp chua ngọt',
    category: 'Cơm Đặc Sản',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Giá từ 40k - 55k vừa vặn ngân sách cơm trưa văn phòng.',
    searchKeyword: 'Cơm gà Hội An',
    tags: ['Văn phòng', '35k-60k', 'Đặc sản'],
    calories: '~550 kcal',
    pairWith: 'Trà đào chanh sả đá',
    image: '/images/com_ga_hoi_an.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Phở Bò Tái Lăn Áp Chảo Nước Dùng Béo Ngậy',
    tagline: 'Thịt bò gầu tái lăn áp chảo thơm lừng mùi khói, phủ ngập hành hoa',
    category: 'Bún / Phở Gia Truyền',
    estimatedPrice: '45.000đ - 60.000đ',
    reason: 'Phân khúc 35k - 60k cho tô phở bò nóng hổi thơm nức.',
    searchKeyword: 'Phở bò tái lăn',
    tags: ['Văn phòng', '35k-60k', 'Bổ dưỡng'],
    calories: '~570 kcal',
    pairWith: 'Quẩy giòn rụm & trứng chần',
    image: '/images/pho_bo_tai_lan.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Bún Bò Huế Chả Cua Thịt Bắp Nạm',
    tagline: 'Nước dùng sả ruốc cay nồng nghi ngút khói, xì xụp ấm lòng',
    category: 'Bún Đậm Đà',
    estimatedPrice: '45.000đ - 60.000đ',
    reason: 'Tô bún bò Huế đầy đặn chất lượng trong tầm giá 35k - 60k.',
    searchKeyword: 'Bún bò Huế',
    tags: ['Văn phòng', '35k-60k', 'Cay nồng'],
    calories: '~590 kcal',
    pairWith: 'Trà gừng mật ong',
    image: '/images/bun_bo_hue.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Hủ Tiếu Nam Vang Khô Tôm Thịt Trứng Cút',
    tagline: 'Sốt trộn đậm đà tỏi phi thơm nức, súp hầm xí quách ngọt thanh',
    category: 'Hủ Tiếu Khô',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Sốt trộn béo thơm vừa tầm giá 35k - 60k cho bữa trưa.',
    searchKeyword: 'Hủ tiếu Nam Vang',
    tags: ['Văn phòng', '35k-60k', 'Đậm đà'],
    calories: '~520 kcal',
    pairWith: 'Chén súp xí quách sườn heo',
    image: '/images/hu_tieu_nam_vang.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Cơm Chiên Hải Sản Mực Tôm Hạt Nhảy',
    tagline: 'Cơm chiên tơi xốp vàng ươm, tôm mực tươi giòn rụm thơm lừng',
    category: 'Cơm Chiên',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Giá 40k - 55k no chắc bụng cho dân văn phòng.',
    searchKeyword: 'Cơm chiên hải sản',
    tags: ['Văn phòng', '35k-60k', 'Hải sản'],
    calories: '~630 kcal',
    pairWith: 'Dưa leo cà chua xắt lát',
    image: '/images/com_chien_hai_san.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Bún Thịt Nướng Chả Giò Sài Gòn Nước Mắm Chanh Tỏi',
    tagline: 'Thịt nướng xém cạnh thơm phức, chả giòn rụm cuốn bún mát lạnh',
    category: 'Bún Trộn',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Vừa vặn phân khúc 35k - 60k không lo bị ngấy.',
    searchKeyword: 'Bún thịt nướng chả giò',
    tags: ['Văn phòng', '35k-60k', 'Bắt vị'],
    calories: '~530 kcal',
    pairWith: 'Trà tắc xí muội',
    image: '/images/bun_thit_nuong.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Cơm Gà Xối Mỡ Da Giòn Xốt Tương Mật Ong',
    tagline: 'Đùi gà xối mỡ da giòn rụm, thịt bên trong mọng nước thơm nức',
    category: 'Cơm Gà',
    estimatedPrice: '45.000đ - 60.000đ',
    reason: 'Bữa trưa năng lượng tầm giá 45k - 60k.',
    searchKeyword: 'Cơm gà xối mỡ',
    tags: ['Văn phòng', '35k-60k', 'Da giòn'],
    calories: '~670 kcal',
    pairWith: 'Canh rong biển thịt băm',
    image: '/images/com_ga_xoi_mo.jpg',
  },
  {
    budgetTier: '35k_60k',
    name: 'Mì Quảng Tôm Thịt Trứng Cút Bánh Đa Giòn',
    tagline: 'Nước dùng xăm xắp đậm đà, đậu phụng rang thơm bùi bánh đa giòn tan',
    category: 'Mì Đặc Sản Miền Trung',
    estimatedPrice: '40.000đ - 55.000đ',
    reason: 'Đổi vị đậm đà Miền Trung chỉ 40k - 55k.',
    searchKeyword: 'Mì Quảng tôm thịt',
    tags: ['Văn phòng', '35k-60k', 'Đặc sản'],
    calories: '~510 kcal',
    pairWith: 'Trà xanh đá mát',
    image: '/images/mi_quang.jpg',
  },

  // --- TIER 3: 60K - 100K (ĐẦY ĐẶN / CHẤT LƯỢNG) ---
  {
    budgetTier: '60k_100k',
    name: 'Cơm Niêu Bò Xào Tiêu Đen & Canh Cải Thịt Băm',
    tagline: 'Cơm cháy giòn rau rẩu đáy niêu, sốt tiêu đen xèo xèo cay tê',
    category: 'Cơm Niêu Cao Cấp',
    estimatedPrice: '65.000đ - 90.000đ',
    reason: 'Chuẩn ngân sách 60k - 100k cho bữa ăn đầy đặn chất lượng cao.',
    searchKeyword: 'Cơm niêu bò sốt tiêu đen',
    tags: ['Chất lượng', '60k-100k', 'Cơm cháy'],
    calories: '~660 kcal',
    pairWith: 'Canh cải cúc thịt băm nóng',
    image: '/images/com_nieu_bo_tieu_den.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Bún Mắm Sài Gòn Hải Sản Tôm Mực Heo Quay Special',
    tagline: 'Nước dùng mắm cá linh cá sặc đậm đà thơm nức, ngập tràn hải sản',
    category: 'Bún Hải Sản Đậm Đà',
    estimatedPrice: '65.000đ - 85.000đ',
    reason: 'Hải sản tươi tôm mực heo quay giòn trong tầm giá 60k - 100k.',
    searchKeyword: 'Bún mắm Sài Gòn',
    tags: ['Chất lượng', '60k-100k', 'Đặc sản'],
    calories: '~610 kcal',
    pairWith: 'Rau đắng & nước sâm bông cúc',
    image: '/images/bun_mam.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Phở Đặc Biệt Tái Nạm Gầu Bắp Bò Trứng Chần',
    tagline: 'Thịt bò tươi roi rói ngập tô, nước dùng ninh xương bò nguyên chất',
    category: 'Phở Bò Cao Cấp',
    estimatedPrice: '65.000đ - 95.000đ',
    reason: 'Tô phở đặc biệt ngập tràn thịt thuộc mức giá 60k - 100k.',
    searchKeyword: 'Phở bò đặc biệt',
    tags: ['Chất lượng', '60k-100k', 'Đặc biệt'],
    calories: '~640 kcal',
    pairWith: 'Quẩy giòn & trứng chần',
    image: '/images/pho_bo_tai_lan.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Bún Đậu Mắm Tôm Đầy Đủ Heo Quay Chả Cốm Dồi Sụn',
    tagline: 'Mẹt bún đậu đầy đặn ngập tràn mồi ngon chấm mắm tôm Thanh Hóa',
    category: 'Bún Đậu Mẹt',
    estimatedPrice: '60.000đ - 85.000đ',
    reason: 'Mẹt bún đậu hoành tráng đầy đặn đúng mức 60k - 100k.',
    searchKeyword: 'Bún đậu mắm tôm',
    tags: ['Chất lượng', '60k-100k', 'Mẹt đầy đủ'],
    calories: '~690 kcal',
    pairWith: 'Nước tắc xí muội đá',
    image: '/images/bun_dau_mam_tom.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Cơm Bò Lúc Lắc Sốt Tiêu Đen & Salad Bơ',
    tagline: 'Thịt bò mông mọng nước xào lửa lớn sốt tiêu bơ, cơm chiên tỏi thơm',
    category: 'Cơm Bò Cao Cấp',
    estimatedPrice: '65.000đ - 95.000đ',
    reason: 'Set cơm bò lúc lắc thơm ngon đậm vị thuộc ngân sách 60k - 100k.',
    searchKeyword: 'Cơm bò lúc lắc',
    tags: ['Chất lượng', '60k-100k', 'Bò mọng nước'],
    calories: '~620 kcal',
    pairWith: 'Nước ép cam tươi',
    image: '/images/com_bo_luc_lac.jpg?v=3',
  },
  {
    budgetTier: '60k_100k',
    name: 'Bánh Canh Cua Nguyên Con Hải Sản Tôm Chả Cá',
    tagline: 'Nước dùng sền sệt béo thơm gạch cua, tôm tươi chắc thịt',
    category: 'Món Nước Bổ Dưỡng',
    estimatedPrice: '65.000đ - 95.000đ',
    reason: 'Bổ dưỡng chất lượng cao trong tầm giá 60k - 100k.',
    searchKeyword: 'Bánh canh cua nguyên con',
    tags: ['Chất lượng', '60k-100k', 'Cua tươi'],
    calories: '~580 kcal',
    pairWith: 'Trà hoa cúc lạnh',
    image: '/images/banh_canh_cua.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Mì Cay Hàn Quốc Hải Sản Bò Mỹ Cấp Độ 2',
    tagline: 'Sợi mì Koreno dai ngon, kim chi chua cay nồng nặc tôm mực tươi',
    category: 'Mì Cay Hàn Quốc',
    estimatedPrice: '60.000đ - 85.000đ',
    reason: 'Thách thức vị giác cay nồng ngân sách 60k - 100k.',
    searchKeyword: 'Mì cay hải sản',
    tags: ['Chất lượng', '60k-100k', 'Cay nồng'],
    calories: '~600 kcal',
    pairWith: 'Sữa tươi trân châu đường đen',
    image: '/images/mi_cay_han_quoc.jpg',
  },
  {
    budgetTier: '60k_100k',
    name: 'Chả Cá Lả Vọng Chảo Nóng Thịt Cá Lăng Thì Là',
    tagline: 'Cá lăng ướp riềng mẻ chảo nóng xèo xèo, ăn kèm bún tươi mắm tôm',
    category: 'Đặc Sản Hà Nội',
    estimatedPrice: '70.000đ - 95.000đ',
    reason: 'Chất lượng cao đặc sản chuẩn vị tầm 70k - 95k.',
    searchKeyword: 'Chả cá Lả Vọng',
    tags: ['Chất lượng', '60k-100k', 'Đặc sản'],
    calories: '~560 kcal',
    pairWith: 'Trà sâm đất',
    image: '/images/cha_ca_la_vong.jpg',
  },

  // --- TIER 4: > 100K (SANG CHẢNH / TỤ HỌP) ---
  {
    budgetTier: 'over100k',
    name: 'Lẩu Riêu Cua Bắp Bò Sườn Sụn Mẹt Nhỏ',
    tagline: 'Nước lẩu chua thanh vị dấm bỗng, riêu cua béo thơm bắp bò hoa giòn',
    category: 'Lẩu Món Nóng / Tụ Họp',
    estimatedPrice: '120.000đ - 180.000đ',
    reason: 'Nồi lẩu nóng hổi thuộc ngân sách trên 100k rất thích hợp ăn nhóm.',
    searchKeyword: 'Lẩu riêu cua bắp bò',
    tags: ['Sang chảnh', '> 100k', 'Lẩu nóng'],
    calories: '~680 kcal',
    pairWith: 'Rau hoa chuối & bún tươi',
    image: '/images/lau_rieu_cua_bap_bo.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Lẩu Bò Nhà Gỗ Ba Toa Nồi Ninh Xương Thảo Mộc',
    tagline: 'Nồi lẩu bò ngập tràn thịt bắp, nạm, gân ninh nhừ chuẩn vị Đà Lạt',
    category: 'Lẩu Bò Cao Cấp',
    estimatedPrice: '150.000đ - 250.000đ',
    reason: 'Nồi lẩu bò thảo mộc chất lượng sang chảnh giá trên 100k.',
    searchKeyword: 'Lẩu bò nhà gỗ',
    tags: ['Sang chảnh', '> 100k', 'Lẩu bò'],
    calories: '~720 kcal',
    pairWith: 'Mì trứng & đậu hũ non',
    image: '/images/bo_nhung_dam.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Mồi Nhậu Dê Tươi Nướng Mọi & Lẩu Dê Thuốc Bắc',
    tagline: 'Dê núi tươi rói nướng chấm chao cay tê, lẩu dê bổ dưỡng',
    category: 'Quán Nhậu / Đồ Tươi',
    estimatedPrice: '130.000đ - 220.000đ',
    reason: 'Set mồi nhậu dê tươi hảo hạng trên 100k cho bữa tiệc tụ họp.',
    searchKeyword: 'Dê tươi nướng mọi',
    tags: ['Sang chảnh', '> 100k', 'Dê núi'],
    calories: '~750 kcal',
    pairWith: 'Bia ướp lạnh & chao cay',
    image: '/images/de_tai_chanh.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Lẩu Thái Hải Sản Tôm Hùm Mực Nước Tôm Yum',
    tagline: 'Nước lẩu chua cay béo ngậy nước cốt dừa, ngập tràn hải sản cao cấp',
    category: 'Lẩu Hải Sản',
    estimatedPrice: '150.000đ - 280.000đ',
    reason: 'Nồi lẩu hải sản hoành tráng sang chảnh chuẩn phân khúc > 100k.',
    searchKeyword: 'Lẩu thái hải sản',
    tags: ['Sang chảnh', '> 100k', 'Hải sản tươi'],
    calories: '~710 kcal',
    pairWith: 'Nấm tuyết & bún tươi',
    image: '/images/lau_thai_hai_san.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Mâm Cơm Niêu Đập Michelin Selected Cá Bống Kho Tộ',
    tagline: 'Cơm niêu đập giòn rụm chấm kho quẹt, cá bống kho tộ nước màu dừa',
    category: 'Nhà Hàng Sang Trọng',
    estimatedPrice: '150.000đ - 250.000đ',
    reason: 'Trải nghiệm ẩm thực mâm cơm gia đình nhà hàng Michelin trên 100k.',
    searchKeyword: 'Cơm niêu Sài Gòn',
    tags: ['Sang chảnh', '> 100k', 'Michelin'],
    calories: '~780 kcal',
    pairWith: 'Canh chua cá lóc & trà đá',
    image: '/images/mam_com_gia_dinh.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Lẩu Gà Lá É Ớt Hiểm Đà Lạt Nóng Hổi',
    tagline: 'Thịt gà ta thả vườn dai ngọt, lá é thơm nức vị cay nồng ớt hiểm',
    category: 'Lẩu Đặc Sản',
    estimatedPrice: '130.000đ - 200.000đ',
    reason: 'Nồi lẩu gà lá é tụ họp ấm áp chuẩn giá trên 100k.',
    searchKeyword: 'Lẩu gà lá é',
    tags: ['Sang chảnh', '> 100k', 'Đặc sản Đà Lạt'],
    calories: '~690 kcal',
    pairWith: 'Bún tươi & bún nấm',
    image: '/images/lau_ga_la_e.jpg',
  },
  {
    budgetTier: 'over100k',
    name: 'Set Ốc Hương Bơ Tỏi & Mực Một Nắng Nướng Than',
    tagline: 'Ốc hương sốt bơ tỏi thơm lừng chấm bánh mì, mực một nắng thơm phức',
    category: 'Hải Sản Quán Nhậu',
    estimatedPrice: '140.000đ - 220.000đ',
    reason: 'Set hải sản cao cấp bắt mồi sang chảnh trên 100k.',
    searchKeyword: 'Ốc hương bơ tỏi',
    tags: ['Sang chảnh', '> 100k', 'Hải sản'],
    calories: '~650 kcal',
    pairWith: 'Muối ớt xanh & bia lạnh',
    image: '/images/oc_huong_bo_toi.jpg',
  },
];

// Helper to shuffle array randomly
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getClientSideContextualSuggestions(input: SuggestionInput): {
  suggestions: AISuggestion[];
  advice: string;
} {
  const mealTime = input.mealTime || 'Trưa';
  const budgetStr = input.budget || '35k - 60k (Văn phòng)';
  const mood = input.mood || 'Thèm đồ đậm đà cay nồng';
  const location = input.location || 'TP. Hồ Chí Minh';
  const excludeNames = input.excludeNames || [];

  const targetTier = parseBudgetTier(budgetStr);

  // Filter candidates STRICTLY matching the requested budget tier!
  let candidates = BUDGET_TIERED_DISHES.filter((d) => d.budgetTier === targetTier);

  // Filter out previously shown dishes if possible to guarantee fresh recommendations on every click
  let availableCandidates = candidates.filter((d) => !excludeNames.includes(d.name));
  if (availableCandidates.length < 3) {
    availableCandidates = candidates; // Reset if all were excluded
  }

  // Shuffle every time so repeated clicks generate DIFFERENT suggestions!
  const shuffled = shuffleArray(availableCandidates);
  const picked = shuffled.slice(0, 3);

  const suggestions: AISuggestion[] = picked.map((item) => ({
    name: item.name,
    tagline: item.tagline,
    category: item.category,
    estimatedPrice: item.estimatedPrice,
    reason: `${item.reason} Rất chuẩn ngân sách "${budgetStr}" cho bữa ${mealTime} tại ${location}.`,
    searchKeyword: item.searchKeyword,
    tags: item.tags,
    calories: item.calories,
    pairWith: item.pairWith,
    image: item.image || getDishImageByName(item.name, item.category),
  }));

  const adviceList = [
    `Bếp Trưởng AI khuyên: Với ngân sách "${budgetStr}" tại ${location}, các món ăn trên có giá tiền chuẩn xác và cực kỳ vừa túi tiền!`,
    `Gợi ý từ Bếp Trưởng: Món ngon chuẩn mức giá "${budgetStr}" hợp gu "${mood}" sẽ giúp bạn có bữa ${mealTime} tuyệt vời. Đừng quên áp mã freeship nhé!`,
    `Chuẩn mức giá "${budgetStr}" cho bữa ${mealTime}! Bạn có thể đặt giao nhanh qua ShopeeFood, GrabFood hoặc BeFood ngay bên dưới.`,
  ];

  const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

  return {
    suggestions,
    advice: randomAdvice,
  };
}
