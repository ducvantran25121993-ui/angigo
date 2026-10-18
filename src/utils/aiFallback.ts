import { AISuggestion } from '../types';

export interface SuggestionInput {
  mealTime?: string;
  budget?: string;
  mood?: string;
  weather?: string;
  location?: string;
  partySize?: number;
  cravings?: string;
}

export function getClientSideContextualSuggestions(input: SuggestionInput): {
  suggestions: AISuggestion[];
  advice: string;
} {
  const mealTime = input.mealTime || 'Trưa';
  const budget = input.budget || '35k - 60k (Văn phòng)';
  const mood = input.mood || 'Thèm đồ đậm đà cay nồng';
  const weather = input.weather || 'Nắng nóng cần giải nhiệt';
  const location = input.location || 'TP. Hồ Chí Minh';
  const partySize = input.partySize || 1;
  const cravings = (input.cravings || '').toLowerCase();

  const isColdOrRainy = weather.includes('Mưa') || weather.includes('Lạnh');
  const isHot = weather.includes('Nắng') || weather.includes('Nóng');
  const isCraveSweet = mood.includes('ngọt') || mood.includes('trà sữa') || cravings.includes('ngọt') || cravings.includes('chè');
  const isHealthy = mood.includes('thanh đạm') || mood.includes('healthy') || cravings.includes('chay') || cravings.includes('rau');
  const isFullMeal = mood.includes('chắc bụng') || mood.includes('đói') || cravings.includes('cơm');

  // 1. Sweet / Stress-relief / Dessert craving
  if (isCraveSweet) {
    return {
      suggestions: [
        {
          name: 'Trà Sữa Trân Châu Đường Đen & Bánh Flan',
          tagline: 'Vị béo thơm kem cheese, trân châu dẻo quánh giải stress cực đã',
          category: 'Đồ Ăn Vặt & Trà Sữa',
          estimatedPrice: '30.000đ - 50.000đ',
          reason: `Phù hợp giải tỏa căng thẳng cho bữa ${mealTime}, vị ngọt thanh xua tan mệt mỏi công việc.`,
          searchKeyword: 'Trà sữa trân châu đường đen',
          tags: ['Giải stress', 'Ngọt béo', 'Sảng khoái'],
          calories: '~420 kcal',
          pairWith: 'Bánh flan caramen xốp mịn & trân châu hoàng kim',
        },
        {
          name: 'Chè Dừa Dầm Hải Phòng & Thạch Sương Sáo',
          tagline: 'Cốt dừa béo ngậy thơm lừng, dừa non giòn sần sật mướt lạnh',
          category: 'Chè Tráng Miệng',
          estimatedPrice: '25.000đ - 40.000đ',
          reason: `Tráng miệng mát lạnh siêu cuốn tại khu vực ${location}, nạp lại năng lượng tức thì.`,
          searchKeyword: 'Chè dừa dầm Hải Phòng',
          tags: ['Thanh mát', 'Béo ngậy', 'Đồ ăn vặt'],
          calories: '~350 kcal',
          pairWith: 'Bánh mì que Pate Hải Phòng giòn rụm',
        },
        {
          name: 'Sữa Chua Nếp Cẩm Mộc Châu & Bingsu Hoa Quả',
          tagline: 'Sữa chua dẻo mịn vị chua thanh hòa quyện nếp cẩm dẻo bùi',
          category: 'Healthy Dessert',
          estimatedPrice: '30.000đ - 45.000đ',
          reason: 'Vừa ngon miệng giải thèm ngọt vừa hỗ trợ tiêu hóa tốt cho sức khỏe.',
          searchKeyword: 'Sữa chua nếp cẩm',
          tags: ['Ít béo', 'Đẹp da', 'Giải nhiệt'],
          calories: '~280 kcal',
          pairWith: 'Hạt granola & trái cây tươi xắt nhỏ',
        },
      ],
      advice: `Mẹo săn deal: Bữa ${mealTime} các thương hiệu trà sữa & chè thường có mã giảm 20k - 30k trên ShopeeFood và GrabFood đấy!`,
    };
  }

  // 2. Healthy / Clean eating / Light
  if (isHealthy) {
    return {
      suggestions: [
        {
          name: 'Cơm Gạo Lứt Bò Nướng Sốt Teriyaki & Rau Củ Luộc',
          tagline: 'Gạo lứt dẻo thơm, thịt bò mềm mọng giàu protein chuẩn eat-clean',
          category: 'Healthy / Eat Clean',
          estimatedPrice: '45.000đ - 70.000đ',
          reason: `Lựa chọn thanh đạm, dinh dưỡng cân bằng cho bữa ${mealTime} nhẹ bụng không sợ tích mỡ.`,
          searchKeyword: 'Cơm gạo lứt bò nướng',
          tags: ['Eat Clean', 'Nhiều Protein', 'Nhiều Rau'],
          calories: '~480 kcal',
          pairWith: 'Nước ép cần tây dứa hoặc trà hoa cúc nóng',
        },
        {
          name: 'Bún Riêu Cua Thanh Mát Tàu Hũ Ky & Cà Chua',
          tagline: 'Nước dùng chua dịu tự nhiên, gạch cua bùi thơm ngọt đậm đà',
          category: 'Bún / Món Nước Thanh',
          estimatedPrice: '35.000đ - 55.000đ',
          reason: `Rất hợp vị khi cơ thể đang cần món nhẹ nhàng, chua thanh tại ${location}.`,
          searchKeyword: 'Bún riêu cua đồng',
          tags: ['Dễ nuốt', 'Thanh mát', 'Truyền thống'],
          calories: '~410 kcal',
          pairWith: 'Đậu hũ chiên giòn & rau sống xà lách tươi',
        },
        {
          name: 'Salad Tôm Bơ Sốt Chanh Đậu Phộng',
          tagline: 'Tôm luộc đỏ au ngọt thịt, bơ chín ngậy bùi tươi mát giòn tan',
          category: 'Salad Tươi Sống',
          estimatedPrice: '50.000đ - 75.000đ',
          reason: 'Cung cấp nhiều vitamin và chất xơ, giúp làn da tươi trẻ và tinh thần minh mẫn.',
          searchKeyword: 'Salad tôm bơ',
          tags: ['Tươi ngon', 'Giàu Vitamin', 'Ít Calo'],
          calories: '~330 kcal',
          pairWith: 'Nước dừa xiêm tươi ngắt',
        },
      ],
      advice: `Bếp Trưởng khuyên: Ăn ${mealTime} thanh đạm kèm theo 1 ly nước ép trái cây tươi sẽ giúp cơ thể bạn tràn đầy sức sống cả ngày!`,
    };
  }

  // 3. Rainy / Cold weather / Hot comfort food
  if (isColdOrRainy) {
    return {
      suggestions: [
        {
          name: 'Bún Bò Huế Chả Cua Thịt Bắp Nạm Húp Xì Xụp',
          tagline: 'Nước dùng sả ruốc cay nồng nghi ngút khói, ấm sực lòng mề',
          category: 'Bún / Phở Đậm Đà',
          estimatedPrice: '50.000đ - 75.000đ',
          reason: `Trời ${weather.toLowerCase()}, húp một tô bún bò cay nóng là trải nghiệm tuyệt vời nhất!`,
          searchKeyword: 'Bún bò Huế',
          tags: ['Cay nồng', 'Ấm bụng', 'Đậm đà'],
          calories: '~590 kcal',
          pairWith: 'Quẩy giòn rụm & trà gừng mật ong',
        },
        {
          name: 'Cơm Niêu Bò Xào Tiêu Đen & Canh Cải Thịt Băm',
          tagline: 'Cơm cháy giòn rau rẩu đáy niêu, sốt tiêu đen xèo xèo cay tê',
          category: 'Cơm Niêu Nóng Hổi',
          estimatedPrice: '55.000đ - 85.000đ',
          reason: `Tiêu đen xào nóng giúp kích thích vị giác và giữ ấm cơ thể trong bữa ${mealTime}.`,
          searchKeyword: 'Cơm niêu bò sốt tiêu đen',
          tags: ['Nóng hổi', 'Cơm cháy', 'Chắc bụng'],
          calories: '~660 kcal',
          pairWith: 'Canh cải cúc thịt băm nóng nghi ngút',
        },
        {
          name: 'Lẩu Riêu Cua Bắp Bò Sườn Sụn Mẹt Nhỏ',
          tagline: 'Nước lẩu chua thanh vị dấm bỗng, riêu cua béo thơm bắp bò hoa giòn',
          category: 'Lẩu / Món Nóng',
          estimatedPrice: '70.000đ - 120.000đ',
          reason: `Rất thích hợp ăn nhóm ${partySize} người tại ${location} trong tiết trời này.`,
          searchKeyword: 'Lẩu riêu cua bắp bò',
          tags: ['Tụ họp', 'Nóng hổi', 'Đặc sản'],
          calories: '~620 kcal',
          pairWith: 'Rau hoa chuối & bún tươi',
        },
      ],
      advice: `Trời ${weather.toLowerCase()} đường xá có thể kẹt xe, bạn hãy tranh thủ chốt món sớm trên app để shipper giao tận tay nhé!`,
    };
  }

  // 4. Hot weather / Refreshing
  if (isHot) {
    return {
      suggestions: [
        {
          name: 'Bún Chả Hà Nội Nước Chấm Chua Ngọt Đu Đủ',
          tagline: 'Chả nướng than hoa xém cạnh thơm lừng, nước chấm dịu mát rau sống rập rờn',
          category: 'Bún / Món Chua Ngọt',
          estimatedPrice: '45.000đ - 65.000đ',
          reason: `Món ăn chua ngọt giải nhiệt cực tốt cho ngày ${weather.toLowerCase()} tại ${location}.`,
          searchKeyword: 'Bún chả Hà Nội',
          tags: ['Chua ngọt', 'Mát lành', 'Dễ ăn'],
          calories: '~540 kcal',
          pairWith: 'Nước sấu ngâm đường hoặc trà tắc sả',
        },
        {
          name: 'Gỏi Cuốn Tôm Thịt & Bánh Khọt Miền Tây',
          tagline: 'Gỏi cuốn tôm tươi mọng chấm tương bơ béo ngậy, bánh khọt giòn rụm',
          category: 'Món Cuốn & Ăn Vặt',
          estimatedPrice: '35.000đ - 55.000đ',
          reason: 'Nhẹ nhàng, không gây ngán hay ngợp mỡ, rất bắt vị cho bữa ăn chiều/trưa.',
          searchKeyword: 'Gỏi cuốn tôm thịt',
          tags: ['Thanh mát', 'Tươi ngon', 'Giải nhiệt'],
          calories: '~390 kcal',
          pairWith: 'Nước rau má đậu xanh dừa',
        },
        {
          name: 'Cơm Gà Xé Phay Hội An Trộn Rau Răm',
          tagline: 'Cơm nấu nước luộc gà vàng ươm dẻo thơm, gà ta xé phay bóp chua ngọt',
          category: 'Cơm Đặc Sản',
          estimatedPrice: '45.000đ - 65.000đ',
          reason: `Đồ chua bóp kèm gà ta giòn dai giúp kích thích vị giác ngon miệng hơn hẳn.`,
          searchKeyword: 'Cơm gà Hội An',
          tags: ['Đặc sản', 'Bắt vị', 'Không ngậy'],
          calories: '~550 kcal',
          pairWith: 'Trà đào chanh sả đá mát lạnh',
        },
      ],
      advice: `Ngày ${weather.toLowerCase()}, đừng quên gọi thêm 1 ly nước mát để giữ năng lượng cho cả ngày làm việc nhé!`,
    };
  }

  // 5. Default / Heavy meal / Standard Vietnamese Favorites
  return {
    suggestions: [
      {
        name: 'Cơm Tấm Sườn Bì Chả Mỡ Hành Trứng Ốp La',
        tagline: 'Kinh điển món ngon Sài Gòn, thơm lừng sườn nướng mật ong mật nhừ',
        category: 'Cơm Quốc Dân',
        estimatedPrice: '45.000đ - 65.000đ',
        reason: `Lựa chọn quốc dân no chắc bụng cho bữa ${mealTime} tại ${location}, gia vị đậm đà vừa miệng ví.`,
        searchKeyword: 'Cơm tấm sườn bì chả',
        tags: ['Chắc bụng', 'Giao nhanh', 'Kinh điển'],
        calories: '~680 kcal',
        pairWith: 'Canh khổ qua dồn thịt & trà đá mát lạnh',
      },
      {
        name: 'Phở Bò Tái Lăn Áp Chảo Nước Dùng Béo Ngậy',
        tagline: 'Thịt bò gầu tái lăn áp chảo thơm lừng mùi khói, phủ ngập hành hoa',
        category: 'Bún / Phở Gia Truyền',
        estimatedPrice: '55.000đ - 80.000đ',
        reason: 'Nước hầm xương bò nguyên chất ngọt thanh tinh túy, nạp năng lượng trọn vẹn.',
        searchKeyword: 'Phở bò tái lăn',
        tags: ['Hương vị gia truyền', 'Thơm nức', 'Bổ dưỡng'],
        calories: '~570 kcal',
        pairWith: 'Quẩy giòn rụm & trứng chần',
      },
      {
        name: 'Bún Mắm Sài Gòn Hải Sản Tôm Mực Heo Quay',
        tagline: 'Nước dùng mắm cá linh cá sặc đậm đà thơm nức, ngập tràn hải sản tươi',
        category: 'Bún / Món Đậm Đà',
        estimatedPrice: '55.000đ - 75.000đ',
        reason: `Rất chuẩn với gu "${mood}" của bạn, ăn một lần nhớ mãi.`,
        searchKeyword: 'Bún mắm Sài Gòn',
        tags: ['Đậm đà', 'Đặc sản miền Tây', 'Đủ vị'],
        calories: '~610 kcal',
        pairWith: 'Rau đắng, bông súng & nước sâm bông cúc',
      },
    ],
    advice: `Bếp Trưởng AI khuyên: Bạn có thể chọn ngay món mình ưng ý nhất và bấm sang ShopeeFood / GrabFood / BeFood để săn deal freeship!`,
  };
}
