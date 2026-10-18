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

export function getDishImageByName(name: string = '', category: string = ''): string {
  const n = name.toLowerCase();
  const c = category.toLowerCase();

  if (n.includes('bún chả') || n.includes('chả nướng')) {
    return 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('gỏi cuốn') || n.includes('cuốn') || c.includes('cuốn')) {
    return 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('cơm gà') || n.includes('gà xé') || n.includes('gà ta')) {
    return 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('cơm tấm') || n.includes('sườn') || n.includes('chả')) {
    return 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('phở') || n.includes('bún bò') || n.includes('bún riêu') || n.includes('hủ tiếu')) {
    return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('bánh mì')) {
    return 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('lẩu') || n.includes('cháo') || n.includes('nóng') || n.includes('tiêu')) {
    return 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('bún mắm') || n.includes('ốc') || n.includes('tôm') || n.includes('hải sản')) {
    return 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('trà sữa') || n.includes('chè') || n.includes('sữa chua') || n.includes('bánh flan') || c.includes('ngọt')) {
    return 'https://images.unsplash.com/photo-1558857563-b37cf5429e5a?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('salad') || n.includes('gạo lứt') || n.includes('chay') || c.includes('healthy')) {
    return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80';
  }
  if (n.includes('cơm niêu') || n.includes('cơm chiên') || n.includes('cơm đĩa')) {
    return 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80';
  }

  return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';
}

// Master pool of candidate dishes to randomize on every click
const ALL_CANDIDATE_DISHES: (Omit<AISuggestion, 'image'> & { moodMatch?: string[]; weatherMatch?: string[]; mealMatch?: string[] })[] = [
  {
    name: 'Bún Chả Hà Nội Nước Chấm Chua Ngọt Đu Đủ',
    tagline: 'Chả nướng than hoa xém cạnh thơm lừng, nước chấm dịu mát rau sống rập rờn',
    category: 'Bún / Món Chua Ngọt',
    estimatedPrice: '45.000đ - 65.000đ',
    reason: 'Chua ngọt dịu mát, nhiều rau sống giòn sần sật, ăn không lo ngấy.',
    searchKeyword: 'Bún chả Hà Nội',
    tags: ['Chua ngọt', 'Mát lành', 'Dễ ăn'],
    calories: '~540 kcal',
    pairWith: 'Nước sấu ngâm đường hoặc trà tắc sả',
    weatherMatch: ['Nắng', 'Hot', 'Normal'],
  },
  {
    name: 'Gỏi Cuốn Tôm Thịt & Bánh Khọt Miền Tây',
    tagline: 'Gỏi cuốn tôm tươi mọng chấm tương bơ béo ngậy, bánh khọt giòn rụm',
    category: 'Món Cuốn & Ăn Vặt',
    estimatedPrice: '35.000đ - 55.000đ',
    reason: 'Rất nhẹ bụng, không dùng dầu mỡ chiên rán, giải nhiệt sảng khoái.',
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
    reason: 'Đồ chua bóp kèm gà ta giòn dai giúp kích thích vị giác ngon miệng hơn hẳn.',
    searchKeyword: 'Cơm gà Hội An',
    tags: ['Đặc sản', 'Bắt vị', 'Không ngậy'],
    calories: '~550 kcal',
    pairWith: 'Trà đào chanh sả đá mát lạnh',
  },
  {
    name: 'Cơm Tấm Sườn Bì Chả Mỡ Hành Trứng Ốp La',
    tagline: 'Kinh điển món ngon Sài Gòn, thơm lừng sườn nướng mật ong',
    category: 'Cơm Quốc Dân',
    estimatedPrice: '45.000đ - 65.000đ',
    reason: 'Lựa chọn no chắc bụng gia vị đậm đà vừa miệng ví.',
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
    tags: ['Gia truyền', 'Thơm nức', 'Bổ dưỡng'],
    calories: '~570 kcal',
    pairWith: 'Quẩy giòn rụm & trứng chần',
  },
  {
    name: 'Bún Mắm Sài Gòn Hải Sản Tôm Mực Heo Quay',
    tagline: 'Nước dùng mắm cá linh cá sặc đậm đà thơm nức, ngập tràn hải sản tươi',
    category: 'Bún / Món Đậm Đà',
    estimatedPrice: '55.000đ - 75.000đ',
    reason: 'Vị mắm đậm đà béo thơm chuẩn gu thèm đồ cay nồng.',
    searchKeyword: 'Bún mắm Sài Gòn',
    tags: ['Đậm đà', 'Đặc sản miền Tây', 'Đủ vị'],
    calories: '~610 kcal',
    pairWith: 'Rau đắng, bông súng & nước sâm bông cúc',
  },
  {
    name: 'Bún Bò Huế Chả Cua Thịt Bắp Nạm Húp Xì Xụp',
    tagline: 'Nước dùng sả ruốc cay nồng nghi ngút khói, ấm sực lòng mề',
    category: 'Bún / Phở Đậm Đà',
    estimatedPrice: '50.000đ - 75.000đ',
    reason: 'Húp một tô bún bò cay nóng thơm sả ớt là trải nghiệm sảng khoái tuyệt vời.',
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
    reason: 'Tiêu đen xào nóng giúp kích thích vị giác và giữ ấm cơ thể.',
    searchKeyword: 'Cơm niêu bò sốt tiêu đen',
    tags: ['Nóng hổi', 'Cơm cháy', 'Chắc bụng'],
    calories: '~660 kcal',
    pairWith: 'Canh cải cúc thịt băm nóng nghi ngút',
  },
  {
    name: 'Bánh Mì Pate Thịt Nguội Đầy Đặn Xốt Bơ',
    tagline: 'Vỏ giòn tan, ruột mềm thơm pate gan béo ngậy kèm đồ chua chống ngấy',
    category: 'Bánh Mì / Ăn Nhanh',
    estimatedPrice: '25.000đ - 45.000đ',
    reason: 'Tiện lợi, nhanh chóng, ăn tại văn phòng hay đi chuyển đều cực hợp.',
    searchKeyword: 'Bánh mì pate thịt nguội',
    tags: ['Nhanh gọn', 'Giòn rụm', 'Béo bùi'],
    calories: '~450 kcal',
    pairWith: 'Sữa đậu nành hoặc cà phê sữa đá',
  },
  {
    name: 'Trà Sữa Trân Châu Đường Đen & Bánh Flan',
    tagline: 'Vị béo thơm kem cheese, trân châu dẻo quánh giải stress cực đã',
    category: 'Đồ Ăn Vặt & Trà Sữa',
    estimatedPrice: '30.000đ - 50.000đ',
    reason: 'Phù hợp giải tỏa căng thẳng, vị ngọt thanh xua tan mệt mỏi.',
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
    reason: 'Tráng miệng mát lạnh siêu cuốn, nạp lại năng lượng tức thì.',
    searchKeyword: 'Chè dừa dầm Hải Phòng',
    tags: ['Thanh mát', 'Béo ngậy', 'Đồ ăn vặt'],
    calories: '~350 kcal',
    pairWith: 'Bánh mì que Pate Hải Phòng giòn rụm',
  },
  {
    name: 'Cơm Gạo Lứt Bò Nướng Sốt Teriyaki & Rau Củ Luộc',
    tagline: 'Gạo lứt dẻo thơm, thịt bò mềm mọng giàu protein chuẩn eat-clean',
    category: 'Healthy / Eat Clean',
    estimatedPrice: '45.000đ - 70.000đ',
    reason: 'Lựa chọn thanh đạm, dinh dưỡng cân bằng không sợ tích mỡ.',
    searchKeyword: 'Cơm gạo lứt bò nướng',
    tags: ['Eat Clean', 'Nhiều Protein', 'Nhiều Rau'],
    calories: '~480 kcal',
    pairWith: 'Nước ép cần tây dứa hoặc trà hoa cúc nóng',
  },
  {
    name: 'Salad Tôm Bơ Sốt Chanh Đậu Phộng',
    tagline: 'Tôm luộc đỏ au ngọt thịt, bơ chín ngậy bùi tươi mát giòn tan',
    category: 'Salad Tươi Sống',
    estimatedPrice: '50.000đ - 75.000đ',
    reason: 'Cung cấp nhiều vitamin và chất xơ, giúp làn da tươi trẻ và nhẹ bụng.',
    searchKeyword: 'Salad tôm bơ',
    tags: ['Tươi ngon', 'Giàu Vitamin', 'Ít Calo'],
    calories: '~330 kcal',
    pairWith: 'Nước dừa xiêm tươi ngắt',
  },
  {
    name: 'Bún Riêu Cua Thanh Mát Tàu Hũ Ky & Cà Chua',
    tagline: 'Nước dùng chua dịu tự nhiên, gạch cua bùi thơm ngọt đậm đà',
    category: 'Bún / Món Nước Thanh',
    estimatedPrice: '35.000đ - 55.000đ',
    reason: 'Cơ thể đang cần món nhẹ nhàng chua thanh thì đây là lựa chọn xuất sắc.',
    searchKeyword: 'Bún riêu cua đồng',
    tags: ['Dễ nuốt', 'Thanh mát', 'Truyền thống'],
    calories: '~410 kcal',
    pairWith: 'Đậu hũ chiên giòn & rau sống xà lách tươi',
  },
  {
    name: 'Lẩu Riêu Cua Bắp Bò Sườn Sụn Mẹt Nhỏ',
    tagline: 'Nước lẩu chua thanh vị dấm bỗng, riêu cua béo thơm bắp bò hoa giòn',
    category: 'Lẩu / Món Nóng',
    estimatedPrice: '70.000đ - 120.000đ',
    reason: 'Rất thích hợp ăn nhóm bạn bè trong tiết trời này.',
    searchKeyword: 'Lẩu riêu cua bắp bò',
    tags: ['Tụ họp', 'Nóng hổi', 'Đặc sản'],
    calories: '~620 kcal',
    pairWith: 'Rau hoa chuối & bún tươi',
  },
  {
    name: 'Hủ Tiếu Nam Vang Khô Tôm Thịt Trứng Cút',
    tagline: 'Sốt trộn đậm đà tỏi phi thơm nức, súp hầm xí quách ngọt thanh',
    category: 'Hủ Tiếu Khô',
    estimatedPrice: '40.000đ - 60.000đ',
    reason: 'Trộn hủ tiếu dai dai với sốt tỏi phi béo ngậy cực kỳ kích thích vị giác.',
    searchKeyword: 'Hủ tiếu Nam Vang',
    tags: ['Khô sốt trộn', 'Đập đà', 'Đặc sản'],
    calories: '~520 kcal',
    pairWith: 'Chén súp xí quách sườn heo ngập hành',
  },
  {
    name: 'Cơm Chiên Hải Sản Mực Tôm Hạt Nhảy',
    tagline: 'Cơm chiên tơi xốp vàng ươm, tôm mực tươi giòn rụm thơm lừng',
    category: 'Cơm Chiên',
    estimatedPrice: '45.000đ - 70.000đ',
    reason: 'Bữa ăn no nê chắc bụng, hạt cơm săn giòn không ngấm dầu mỡ.',
    searchKeyword: 'Cơm chiên hải sản',
    tags: ['Giòn rụm', 'Chắc bụng', 'Hải sản tươi'],
    calories: '~630 kcal',
    pairWith: 'Dưa leo cà chua xắt lát & canh cải cúc',
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
  const mood = input.mood || 'Thèm đồ đậm đà cay nồng';
  const weather = input.weather || 'Nắng nóng cần giải nhiệt';
  const location = input.location || 'TP. Hồ Chí Minh';
  const partySize = input.partySize || 1;
  const cravings = (input.cravings || '').toLowerCase();

  const isCraveSweet = mood.includes('ngọt') || mood.includes('trà sữa') || cravings.includes('ngọt') || cravings.includes('chè');
  const isHealthy = mood.includes('thanh đạm') || mood.includes('healthy') || cravings.includes('chay') || cravings.includes('rau');

  // Filter or prioritize based on user preference
  let candidates = [...ALL_CANDIDATE_DISHES];

  if (isCraveSweet) {
    candidates = candidates.filter((d) => d.category.includes('Trà Sữa') || d.category.includes('Chè') || d.category.includes('Healthy') || d.name.includes('Trà') || d.name.includes('Chè'));
    if (candidates.length < 3) candidates = [...ALL_CANDIDATE_DISHES];
  } else if (isHealthy) {
    candidates = candidates.filter((d) => d.category.includes('Healthy') || d.category.includes('Salad') || d.category.includes('Thanh') || d.tags.includes('Eat Clean'));
    if (candidates.length < 3) candidates = [...ALL_CANDIDATE_DISHES];
  }

  // Shuffle every time so repeated clicks generate DIFFERENT suggestions!
  const shuffled = shuffleArray(candidates);
  const picked = shuffled.slice(0, 3);

  const suggestions: AISuggestion[] = picked.map((item) => ({
    ...item,
    image: getDishImageByName(item.name, item.category),
    reason: `${item.reason} Rất phù hợp cho bữa ${mealTime} tại ${location}.`,
  }));

  const adviceList = [
    `Bếp Trưởng AI khuyên: Bữa ${mealTime} hôm nay tại ${location}, hãy tận hưởng những món ăn tươi ngon này kèm 1 ly nước mát nhé!`,
    `Gợi ý từ Bếp Trưởng: Món ngon hợp gu "${mood}" sẽ giúp bạn có bữa ${mealTime} đầy năng lượng. Đừng quên áp mã freeship trên app nhé!`,
    `Trời ${weather.toLowerCase()}, Bếp Trưởng gợi ý bạn chốt ngay mâm cơm này để tận hưởng không khí ẩm thực trọn vẹn nhất!`,
    `Lựa chọn tuyệt vời cho nhóm ${partySize} người! Bạn có thể đặt giao nhanh qua ShopeeFood, GrabFood hoặc BeFood ngay bên dưới.`,
  ];

  const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

  return {
    suggestions,
    advice: randomAdvice,
  };
}
