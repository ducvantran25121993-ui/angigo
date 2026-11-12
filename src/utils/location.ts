import { UserLocation } from '../types';

export const LOCATION_STORAGE_KEY = 'homnayangi_user_location_v1';

export interface CityPreset {
  id: string;
  name: string;
  shortName: string;
  citySlug: string; // for ShopeeFood
  latitude: number;
  longitude: number;
  districts: string[];
}

export const POPULAR_CITIES: CityPreset[] = [
  {
    id: 'hcm',
    name: 'TP. Hồ Chí Minh',
    shortName: 'TP. HCM',
    citySlug: 'ho-chi-minh',
    latitude: 10.7769,
    longitude: 106.7009,
    districts: [
      'Quận 1',
      'Quận 3',
      'Quận 4',
      'Quận 5',
      'Quận 6',
      'Quận 7',
      'Quận 8',
      'Quận 10',
      'Quận 11',
      'Quận 12',
      'Bình Thạnh',
      'Phú Nhuận',
      'Tân Bình',
      'Gò Vấp',
      'Tân Phú',
      'Bình Tân',
      'TP. Thủ Đức',
      'Hóc Môn',
      'Bình Chánh',
      'Nhà Bè',
      'Củ Chi',
      'Cần Giờ',
    ],
  },
  {
    id: 'hn',
    name: 'Hà Nội',
    shortName: 'Hà Nội',
    citySlug: 'ha-noi',
    latitude: 21.0285,
    longitude: 105.8542,
    districts: [
      'Hoàn Kiếm',
      'Cầu Giấy',
      'Đống Đa',
      'Ba Đình',
      'Hai Bà Trưng',
      'Tây Hồ',
      'Thanh Xuân',
      'Nam Từ Liêm',
      'Bắc Từ Liêm',
      'Hà Đông',
      'Hoàng Mai',
      'Long Biên',
      'Thanh Trì',
      'Gia Lâm',
      'Đông Anh',
      'Hoài Đức',
      'Sóc Sơn',
      'Thạch Thất',
      'Sơn Tây',
    ],
  },
  {
    id: 'dn',
    name: 'Đà Nẵng',
    shortName: 'Đà Nẵng',
    citySlug: 'da-nang',
    latitude: 16.0544,
    longitude: 108.2022,
    districts: [
      'Hải Châu',
      'Thanh Khê',
      'Sơn Trà',
      'Ngũ Hành Sơn',
      'Liên Chiểu',
      'Cẩm Lệ',
      'Hòa Vang',
    ],
  },
  {
    id: 'bd',
    name: 'Bình Dương',
    shortName: 'Bình Dương',
    citySlug: 'binh-duong',
    latitude: 10.9804,
    longitude: 106.6745,
    districts: ['Thủ Dầu Một', 'Thuận An', 'Dĩ An', 'Bến Cát', 'Tân Uyên', 'Bàu Bàng', 'Bắc Tân Uyên'],
  },
  {
    id: 'dnai',
    name: 'Đồng Nai (Biên Hòa)',
    shortName: 'Biên Hòa',
    citySlug: 'dong-nai',
    latitude: 10.9574,
    longitude: 106.8427,
    districts: ['Biên Hòa', 'Long Thành', 'Nhơn Trạch', 'Trảng Bom', 'Vĩnh Cửu', 'Long Khánh'],
  },
  {
    id: 'ct',
    name: 'Cần Thơ',
    shortName: 'Cần Thơ',
    citySlug: 'can-tho',
    latitude: 10.0452,
    longitude: 105.7469,
    districts: ['Ninh Kiều', 'Cái Răng', 'Bình Thủy', 'Ô Môn', 'Thốt Nốt', 'Phong Điền'],
  },
  {
    id: 'hp',
    name: 'Hải Phòng',
    shortName: 'Hải Phòng',
    citySlug: 'hai-phong',
    latitude: 20.8449,
    longitude: 106.6881,
    districts: ['Hồng Bàng', 'Ngô Quyền', 'Lê Chân', 'Hải An', 'Kiến An', 'Đồ Sơn', 'Thủy Nguyên'],
  },
  {
    id: 'vt',
    name: 'Bà Rịa - Vũng Tàu',
    shortName: 'Vũng Tàu',
    citySlug: 'vung-tau',
    latitude: 10.346,
    longitude: 107.0843,
    districts: ['Vũng Tàu', 'Bà Rịa', 'Phú Mỹ', 'Long Điền', 'Đất Đỏ'],
  },
  {
    id: 'nt',
    name: 'Khánh Hòa (Nha Trang)',
    shortName: 'Nha Trang',
    citySlug: 'khanh-hoa',
    latitude: 12.2388,
    longitude: 109.1967,
    districts: ['Nha Trang', 'Cam Ranh', 'Ninh Hòa', 'Diên Khánh'],
  },
  {
    id: 'ld',
    name: 'Lâm Đồng (Đà Lạt)',
    shortName: 'Đà Lạt',
    citySlug: 'lam-dong',
    latitude: 11.9404,
    longitude: 108.4583,
    districts: ['TP. Đà Lạt', 'TP. Bảo Lộc', 'Đức Trọng', 'Di Linh'],
  },
  {
    id: 'hue',
    name: 'Thừa Thiên Huế',
    shortName: 'Huế',
    citySlug: 'hue',
    latitude: 16.4637,
    longitude: 107.5909,
    districts: ['TP. Huế', 'Hương Thủy', 'Hương Trà', 'Phú Vang'],
  },
  {
    id: 'qn',
    name: 'Quảng Ninh (Hạ Long)',
    shortName: 'Hạ Long',
    citySlug: 'quang-ninh',
    latitude: 20.9505,
    longitude: 107.0734,
    districts: ['Hạ Long', 'Cẩm Phả', 'Uông Bí', 'Móng Cái'],
  },
];

export const ALL_VIETNAM_PROVINCES: { name: string; slug: string; region: string }[] = [
  { name: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh', region: 'Miền Nam' },
  { name: 'Hà Nội', slug: 'ha-noi', region: 'Miền Bắc' },
  { name: 'Đà Nẵng', slug: 'da-nang', region: 'Miền Trung' },
  { name: 'Hải Phòng', slug: 'hai-phong', region: 'Miền Bắc' },
  { name: 'Cần Thơ', slug: 'can-tho', region: 'Miền Nam' },
  { name: 'An Giang', slug: 'an-giang', region: 'Miền Nam' },
  { name: 'Bà Rịa - Vũng Tàu', slug: 'vung-tau', region: 'Miền Nam' },
  { name: 'Bắc Giang', slug: 'bac-giang', region: 'Miền Bắc' },
  { name: 'Bắc Kạn', slug: 'bac-kan', region: 'Miền Bắc' },
  { name: 'Bạc Liêu', slug: 'bac-lieu', region: 'Miền Nam' },
  { name: 'Bắc Ninh', slug: 'bac-ninh', region: 'Miền Bắc' },
  { name: 'Bến Tre', slug: 'ben-tre', region: 'Miền Nam' },
  { name: 'Bình Định', slug: 'binh-dinh', region: 'Miền Trung' },
  { name: 'Bình Dương', slug: 'binh-duong', region: 'Miền Nam' },
  { name: 'Bình Phước', slug: 'binh-phuoc', region: 'Miền Nam' },
  { name: 'Bình Thuận', slug: 'binh-thuan', region: 'Miền Trung' },
  { name: 'Cà Mau', slug: 'ca-mau', region: 'Miền Nam' },
  { name: 'Cao Bằng', slug: 'cao-bang', region: 'Miền Bắc' },
  { name: 'Đắk Lắk', slug: 'dak-lak', region: 'Tây Nguyên' },
  { name: 'Đắk Nông', slug: 'dak-nong', region: 'Tây Nguyên' },
  { name: 'Điện Biên', slug: 'dien-bien', region: 'Miền Bắc' },
  { name: 'Đồng Nai', slug: 'dong-nai', region: 'Miền Nam' },
  { name: 'Đồng Tháp', slug: 'dong-thap', region: 'Miền Nam' },
  { name: 'Gia Lai', slug: 'gia-lai', region: 'Tây Nguyên' },
  { name: 'Hà Giang', slug: 'ha-giang', region: 'Miền Bắc' },
  { name: 'Hà Nam', slug: 'ha-nam', region: 'Miền Bắc' },
  { name: 'Hà Tĩnh', slug: 'ha-tinh', region: 'Miền Trung' },
  { name: 'Hải Dương', slug: 'hai-duong', region: 'Miền Bắc' },
  { name: 'Hậu Giang', slug: 'hau-giang', region: 'Miền Nam' },
  { name: 'Hòa Bình', slug: 'hoa-binh', region: 'Miền Bắc' },
  { name: 'Hưng Yên', slug: 'hung-yen', region: 'Miền Bắc' },
  { name: 'Khánh Hòa', slug: 'khanh-hoa', region: 'Miền Trung' },
  { name: 'Kiên Giang', slug: 'kien-giang', region: 'Miền Nam' },
  { name: 'Kon Tum', slug: 'kon-tum', region: 'Tây Nguyên' },
  { name: 'Lai Châu', slug: 'lai-chau', region: 'Miền Bắc' },
  { name: 'Lâm Đồng', slug: 'lam-dong', region: 'Tây Nguyên' },
  { name: 'Lạng Sơn', slug: 'lang-son', region: 'Miền Bắc' },
  { name: 'Lào Cai', slug: 'lao-cai', region: 'Miền Bắc' },
  { name: 'Long An', slug: 'long-an', region: 'Miền Nam' },
  { name: 'Nam Định', slug: 'nam-dinh', region: 'Miền Bắc' },
  { name: 'Nghệ An', slug: 'nghe-an', region: 'Miền Trung' },
  { name: 'Ninh Bình', slug: 'ninh-binh', region: 'Miền Bắc' },
  { name: 'Ninh Thuận', slug: 'ninh-thuan', region: 'Miền Trung' },
  { name: 'Phú Thọ', slug: 'phu-tho', region: 'Miền Bắc' },
  { name: 'Phú Yên', slug: 'phu-yen', region: 'Miền Trung' },
  { name: 'Quảng Bình', slug: 'quang-binh', region: 'Miền Trung' },
  { name: 'Quảng Nam', slug: 'quang-nam', region: 'Miền Trung' },
  { name: 'Quảng Ngãi', slug: 'quang-ngai', region: 'Miền Trung' },
  { name: 'Quảng Ninh', slug: 'quang-ninh', region: 'Miền Bắc' },
  { name: 'Quảng Trị', slug: 'quang-tri', region: 'Miền Trung' },
  { name: 'Sóc Trăng', slug: 'soc-trang', region: 'Miền Nam' },
  { name: 'Sơn La', slug: 'son-la', region: 'Miền Bắc' },
  { name: 'Tây Ninh', slug: 'tay-ninh', region: 'Miền Nam' },
  { name: 'Thái Bình', slug: 'thai-binh', region: 'Miền Bắc' },
  { name: 'Thái Nguyên', slug: 'thai-nguyen', region: 'Miền Bắc' },
  { name: 'Thanh Hóa', slug: 'thanh-hoa', region: 'Miền Trung' },
  { name: 'Thừa Thiên Huế', slug: 'hue', region: 'Miền Trung' },
  { name: 'Tiền Giang', slug: 'tien-giang', region: 'Miền Nam' },
  { name: 'Trà Vinh', slug: 'tra-vinh', region: 'Miền Nam' },
  { name: 'Tuyên Quang', slug: 'tuyen-quang', region: 'Miền Bắc' },
  { name: 'Vĩnh Long', slug: 'vinh-long', region: 'Miền Nam' },
  { name: 'Vĩnh Phúc', slug: 'vinh-phuc', region: 'Miền Bắc' },
  { name: 'Yên Bái', slug: 'yen-bai', region: 'Miền Bắc' },
];

export const DEFAULT_USER_LOCATION: UserLocation = {
  city: 'TP. Hồ Chí Minh',
  citySlug: 'ho-chi-minh',
  district: 'Quận 1',
  address: 'Quận 1, TP. Hồ Chí Minh',
  latitude: 10.7769,
  longitude: 106.7009,
  source: 'default',
};

export const DISTRICT_COORDINATES: Record<string, Record<string, { latitude: number; longitude: number }>> = {
  hcm: {
    'Quận 1': { latitude: 10.7769, longitude: 106.7009 },
    'Quận 3': { latitude: 10.7843, longitude: 106.6843 },
    'Quận 4': { latitude: 10.7578, longitude: 106.7013 },
    'Quận 5': { latitude: 10.7554, longitude: 106.6644 },
    'Quận 6': { latitude: 10.7464, longitude: 106.6353 },
    'Quận 7': { latitude: 10.7340, longitude: 106.7218 },
    'Quận 8': { latitude: 10.7241, longitude: 106.6286 },
    'Quận 10': { latitude: 10.7684, longitude: 106.6669 },
    'Quận 11': { latitude: 10.7630, longitude: 106.6502 },
    'Quận 12': { latitude: 10.8672, longitude: 106.6413 },
    'Bình Thạnh': { latitude: 10.8010, longitude: 106.7110 },
    'Phú Nhuận': { latitude: 10.7992, longitude: 106.6803 },
    'Tân Bình': { latitude: 10.8015, longitude: 106.6526 },
    'Gò Vấp': { latitude: 10.8387, longitude: 106.6664 },
    'TP. Thủ Đức': { latitude: 10.8494, longitude: 106.7719 },
    'Tân Phú': { latitude: 10.7904, longitude: 106.6280 },
    'Bình Tân': { latitude: 10.7654, longitude: 106.6039 },
    'Hóc Môn': { latitude: 10.8847, longitude: 106.5919 },
    'Bình Chánh': { latitude: 10.6874, longitude: 106.5929 },
    'Nhà Bè': { latitude: 10.6953, longitude: 106.7323 },
    'Củ Chi': { latitude: 11.0067, longitude: 106.5132 },
  },
  hn: {
    'Hoàn Kiếm': { latitude: 21.0285, longitude: 105.8542 },
    'Ba Đình': { latitude: 21.0341, longitude: 105.8242 },
    'Đống Đa': { latitude: 21.0181, longitude: 105.8239 },
    'Hai Bà Trưng': { latitude: 21.0076, longitude: 105.8519 },
    'Cầu Giấy': { latitude: 21.0333, longitude: 105.7899 },
    'Tây Hồ': { latitude: 21.0713, longitude: 105.8234 },
    'Thanh Xuân': { latitude: 20.9937, longitude: 105.8078 },
    'Nam Từ Liêm': { latitude: 21.0135, longitude: 105.7645 },
    'Bắc Từ Liêm': { latitude: 21.0631, longitude: 105.7594 },
    'Hà Đông': { latitude: 20.9723, longitude: 105.7773 },
    'Hoàng Mai': { latitude: 20.9754, longitude: 105.8576 },
    'Long Biên': { latitude: 21.0362, longitude: 105.8927 },
  },
  dn: {
    'Hải Châu': { latitude: 16.0678, longitude: 108.2208 },
    'Thanh Khê': { latitude: 16.0601, longitude: 108.1884 },
    'Sơn Trà': { latitude: 16.0847, longitude: 108.2435 },
    'Ngũ Hành Sơn': { latitude: 16.0028, longitude: 108.2573 },
    'Liên Chiểu': { latitude: 16.0792, longitude: 108.1489 },
    'Cẩm Lệ': { latitude: 15.9988, longitude: 108.1963 },
  },
  ct: {
    'Ninh Kiều': { latitude: 10.0342, longitude: 105.7883 },
    'Cái Răng': { latitude: 9.9961, longitude: 105.7538 },
    'Bình Thủy': { latitude: 10.0707, longitude: 105.7369 },
    'Ô Môn': { latitude: 10.1171, longitude: 105.6264 },
  },
  hp: {
    'Hồng Bàng': { latitude: 20.8653, longitude: 106.6749 },
    'Ngô Quyền': { latitude: 20.8524, longitude: 106.6993 },
    'Lê Chân': { latitude: 20.8402, longitude: 106.6781 },
    'Hải An': { latitude: 20.8353, longitude: 106.7214 },
  },
  bd: {
    'Thủ Dầu Một': { latitude: 10.9804, longitude: 106.6745 },
    'Thuận An': { latitude: 10.9234, longitude: 106.6989 },
    'Dĩ An': { latitude: 10.9067, longitude: 106.7719 },
    'Bến Cát': { latitude: 11.1342, longitude: 106.6022 },
  },
  dnai: {
    'Biên Hòa': { latitude: 10.9574, longitude: 106.8427 },
    'Long Thành': { latitude: 10.7853, longitude: 106.9632 },
    'Nhơn Trạch': { latitude: 10.6728, longitude: 106.8794 },
  },
  vt: {
    'Vũng Tàu': { latitude: 10.346, longitude: 107.0843 },
    'Bà Rịa': { latitude: 10.4962, longitude: 107.1729 },
    'Phú Mỹ': { latitude: 10.5983, longitude: 107.0543 },
  },
  nt: {
    'Nha Trang': { latitude: 12.2388, longitude: 109.1967 },
    'Cam Ranh': { latitude: 11.9214, longitude: 109.1591 },
  },
  hue: {
    'TP. Huế': { latitude: 16.4637, longitude: 107.5909 },
    'Hương Thủy': { latitude: 16.3986, longitude: 107.6542 },
    'Hương Trà': { latitude: 16.4354, longitude: 107.5147 },
  },
};

export function getDistrictCoordinates(
  cityIdOrSlugOrName: string,
  districtName?: string
): { latitude: number; longitude: number } | null {
  if (!districtName) return null;

  let cityKey = 'hcm';
  const c = cityIdOrSlugOrName.toLowerCase();
  if (c === 'hcm' || c.includes('ho-chi-minh') || c.includes('hồ chí minh')) cityKey = 'hcm';
  else if (c === 'hn' || c.includes('ha-noi') || c.includes('hà nội')) cityKey = 'hn';
  else if (c === 'dn' || c.includes('da-nang') || c.includes('đà nẵng')) cityKey = 'dn';
  else if (c === 'ct' || c.includes('can-tho') || c.includes('cần thơ')) cityKey = 'ct';
  else if (c === 'hp' || c.includes('hai-phong') || c.includes('hải phòng')) cityKey = 'hp';
  else if (c === 'bd' || c.includes('binh-duong') || c.includes('bình dương')) cityKey = 'bd';
  else if (c === 'dnai' || c.includes('dong-nai') || c.includes('đồng nai') || c.includes('biên hòa')) cityKey = 'dnai';
  else if (c === 'vt' || c.includes('vung-tau') || c.includes('vũng tàu') || c.includes('bà rịa')) cityKey = 'vt';
  else if (c === 'nt' || c.includes('nha-trang') || c.includes('khánh hòa')) cityKey = 'nt';
  else if (c === 'hue' || c.includes('huế')) cityKey = 'hue';

  const cityDistricts = DISTRICT_COORDINATES[cityKey];
  if (!cityDistricts) return null;

  if (cityDistricts[districtName]) {
    return cityDistricts[districtName];
  }

  const normDist = districtName.toLowerCase().replace('quận ', 'q').replace(/\s+/g, '');
  for (const [dName, coords] of Object.entries(cityDistricts)) {
    const keyNorm = dName.toLowerCase().replace('quận ', 'q').replace(/\s+/g, '');
    if (
      keyNorm === normDist ||
      dName.toLowerCase().includes(districtName.toLowerCase()) ||
      districtName.toLowerCase().includes(dName.toLowerCase())
    ) {
      return coords;
    }
  }

  return null;
}

// Calculate distance in km between two lat/lng points
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find closest city preset given lat and lng
export function findClosestCity(latitude: number, longitude: number): CityPreset {
  let closest = POPULAR_CITIES[0];
  let minDistance = Infinity;

  for (const city of POPULAR_CITIES) {
    const dist = calculateDistance(latitude, longitude, city.latitude, city.longitude);
    if (dist < minDistance) {
      minDistance = dist;
      closest = city;
    }
  }
  return closest;
}

// Calculate closest district in city given lat and lng using spatial coordinates
export function findClosestDistrict(
  latitude: number,
  longitude: number,
  cityIdOrSlugOrName: string
): string | null {
  let cityKey = 'hcm';
  const c = cityIdOrSlugOrName.toLowerCase();
  if (c === 'hcm' || c.includes('ho-chi-minh') || c.includes('hồ chí minh')) cityKey = 'hcm';
  else if (c === 'hn' || c.includes('ha-noi') || c.includes('hà nội')) cityKey = 'hn';
  else if (c === 'dn' || c.includes('da-nang') || c.includes('đà nẵng')) cityKey = 'dn';
  else if (c === 'ct' || c.includes('can-tho') || c.includes('cần thơ')) cityKey = 'ct';
  else if (c === 'hp' || c.includes('hai-phong') || c.includes('hải phòng')) cityKey = 'hp';
  else if (c === 'bd' || c.includes('binh-duong') || c.includes('bình dương')) cityKey = 'bd';
  else if (c === 'dnai' || c.includes('dong-nai') || c.includes('đồng nai') || c.includes('biên hòa')) cityKey = 'dnai';
  else if (c === 'vt' || c.includes('vung-tau') || c.includes('vũng tàu') || c.includes('bà rịa')) cityKey = 'vt';
  else if (c === 'nt' || c.includes('nha-trang') || c.includes('khánh hòa')) cityKey = 'nt';
  else if (c === 'hue' || c.includes('huế')) cityKey = 'hue';

  const cityDistricts = DISTRICT_COORDINATES[cityKey];
  if (!cityDistricts) return null;

  let closestDistrict: string | null = null;
  let minDistance = Infinity;

  for (const [distName, coords] of Object.entries(cityDistricts)) {
    const dist = calculateDistance(latitude, longitude, coords.latitude, coords.longitude);
    if (dist < minDistance) {
      minDistance = dist;
      closestDistrict = distName;
    }
  }

  // Only return if within reasonable proximity (< 40km of district center)
  return minDistance < 40 ? closestDistrict : null;
}

export function getStoredUserLocation(): UserLocation {
  try {
    const raw = localStorage.getItem(LOCATION_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.city && parsed.citySlug) {
        // Automatically sanitize legacy "Phường Chợ Quán" to proper district
        if (parsed.district && (parsed.district.includes('Chợ Quán') || parsed.district.includes('Chợ Lớn'))) {
          parsed.district = 'Quận 5';
          parsed.address = 'Quận 5, TP. Hồ Chí Minh';
        }
        return parsed;
      }
    }
  } catch {
    // fallback
  }
  return DEFAULT_USER_LOCATION;
}

export function saveUserLocation(loc: UserLocation): void {
  try {
    localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(loc));
    // Dispatch custom event for cross-component update
    window.dispatchEvent(new CustomEvent('user-location-updated', { detail: loc }));
  } catch {
    // ignore
  }
}

export interface LocationSuggestion {
  id: string;
  label: string;
  district?: string;
  cityName: string;
  citySlug: string;
  source: 'preset' | 'province' | 'ward';
}

export function searchLocationSuggestions(query: string): LocationSuggestion[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.trim().toLowerCase();
  const results: LocationSuggestion[] = [];

  // 1. Known popular wards (Chợ Quán, Bến Nghé, Thảo Điền, v.v.)
  const knownWards = [
    { ward: 'Phường Chợ Quán', district: 'Quận 5', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Chợ Lớn', district: 'Quận 5', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Bến Nghé', district: 'Quận 1', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Bến Thành', district: 'Quận 1', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Thảo Điền', district: 'TP. Thủ Đức', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Phú Mỹ Hưng', district: 'Quận 7', city: 'TP. Hồ Chí Minh', slug: 'ho-chi-minh' },
    { ward: 'Phường Hàng Trống', district: 'Hoàn Kiếm', city: 'Hà Nội', slug: 'ha-noi' },
    { ward: 'Phường Tràng Tiền', district: 'Hoàn Kiếm', city: 'Hà Nội', slug: 'ha-noi' },
  ];

  for (const w of knownWards) {
    if (w.ward.toLowerCase().includes(q)) {
      results.push({
        id: `ward-${w.ward}`,
        label: `${w.ward}, ${w.district}, ${w.city}`,
        district: w.district,
        cityName: w.city,
        citySlug: w.slug,
        source: 'ward',
      });
    }
  }

  // 2. Search in popular cities & their districts
  for (const city of POPULAR_CITIES) {
    if (city.name.toLowerCase().includes(q) || city.shortName.toLowerCase().includes(q)) {
      results.push({
        id: `city-${city.id}`,
        label: `${city.name}`,
        district: city.districts[0],
        cityName: city.name,
        citySlug: city.citySlug,
        source: 'preset',
      });
    }

    for (const dist of city.districts) {
      if (dist.toLowerCase().includes(q) || dist.toLowerCase().replace('quận ', 'q').includes(q)) {
        results.push({
          id: `${city.id}-${dist}`,
          label: `${dist}, ${city.name}`,
          district: dist,
          cityName: city.name,
          citySlug: city.citySlug,
          source: 'preset',
        });
      }
    }
  }

  // 3. Search in all 63 provinces
  for (const prov of ALL_VIETNAM_PROVINCES) {
    if (prov.name.toLowerCase().includes(q)) {
      if (!results.some((r) => r.cityName.toLowerCase() === prov.name.toLowerCase() && !r.district)) {
        results.push({
          id: `prov-${prov.slug}`,
          label: `${prov.name} (${prov.region})`,
          cityName: prov.name,
          citySlug: prov.slug,
          source: 'province',
        });
      }
    }
  }

  return results.slice(0, 8);
}

/**
 * Reverse geocode coordinates using OpenStreetMap Nominatim with graceful fallback
 */
async function reverseGeocodeCoordinates(
  lat: number,
  lng: number
): Promise<{ address?: string; district?: string; city?: string; citySlug?: string }> {
  const matchedCity = findClosestCity(lat, lng);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    // Zoom 18 provides building & street level precision in OpenStreetMap
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      {
        signal: controller.signal,
        headers: { 'Accept-Language': 'vi,en;q=0.8' },
      }
    );
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      
      const ward = addr.suburb || addr.quarter || addr.neighbourhood;
      let district = addr.city_district || addr.district || addr.county;
      const detectedCity = addr.city || addr.state || addr.province || addr.town;
      const road = addr.road;
      const houseNumber = addr.house_number;

      // Handle common Vietnamese ward-to-district mappings (e.g. Chợ Quán -> Quận 5)
      if (!district && ward) {
        const lowerWard = ward.toLowerCase();
        if (lowerWard.includes('chợ quán') || lowerWard.includes('chợ lớn') || lowerWard.includes('an đông')) {
          district = 'Quận 5';
        } else if (lowerWard.includes('bến nghé') || lowerWard.includes('bến thành') || lowerWard.includes('đa kao') || lowerWard.includes('tân định')) {
          district = 'Quận 1';
        } else if (lowerWard.includes('thảo điền') || lowerWard.includes('an phú') || lowerWard.includes('thủ thiêm') || lowerWard.includes('linh trung')) {
          district = 'TP. Thủ Đức';
        } else if (lowerWard.includes('phú mỹ hưng') || lowerWard.includes('tân phong') || lowerWard.includes('tân quy')) {
          district = 'Quận 7';
        } else if (lowerWard.includes('hàng trống') || lowerWard.includes('hàng mã') || lowerWard.includes('tràng tiền')) {
          district = 'Hoàn Kiếm';
        }
      }

      // If still no district, check if ward matches any known district
      if (!district && ward) {
        const found = matchedCity.districts.find((d) => ward.toLowerCase().includes(d.toLowerCase()));
        if (found) {
          district = found;
        }
      }

      // If still no district, mathematically find closest district center using GPS coordinates
      if (!district) {
        const closestGeoDist = findClosestDistrict(lat, lng, matchedCity.id);
        if (closestGeoDist) {
          district = closestGeoDist;
        }
      }

      const finalDistrict = district || matchedCity.districts[0];
      const finalCity = detectedCity || matchedCity.name;
      
      const streetPart = [houseNumber, road].filter(Boolean).join(' ');
      let addressParts = [streetPart, ward, finalDistrict, finalCity].filter(Boolean);
      // Deduplicate parts
      addressParts = addressParts.filter((item, index, self) => self.indexOf(item) === index);
      const address = addressParts.length > 0 ? addressParts.join(', ') : data.display_name;

      return {
        address: address || `${matchedCity.name}`,
        district: finalDistrict,
        city: matchedCity.name,
        citySlug: matchedCity.citySlug,
      };
    }
  } catch {
    // Network or abort timeout
  }

  // Fallback to geometric closest city & district
  const closestDistrict = findClosestDistrict(lat, lng, matchedCity.id) || matchedCity.districts[0];
  return {
    address: `${closestDistrict}, ${matchedCity.name}`,
    district: closestDistrict,
    city: matchedCity.name,
    citySlug: matchedCity.citySlug,
  };
}

/**
 * Detect user's current GPS position via browser Geolocation API with high accuracy
 */
export async function detectGpsLocation(): Promise<UserLocation> {
  if (!navigator.geolocation) {
    throw new Error('Trình duyệt của bạn không hỗ trợ định vị GPS.');
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        const accuracy = Math.round(pos.coords.accuracy || 100);
        const accuracyLevel: 'high' | 'approximate' = accuracy <= 500 ? 'high' : 'approximate';

        try {
          const geoInfo = await reverseGeocodeCoordinates(latitude, longitude);
          const locationResult: UserLocation = {
            city: geoInfo.city || 'TP. Hồ Chí Minh',
            citySlug: geoInfo.citySlug || 'ho-chi-minh',
            district: geoInfo.district,
            address: geoInfo.address || `${geoInfo.city} (GPS)`,
            latitude,
            longitude,
            source: 'gps',
            accuracy,
            accuracyLevel,
            updatedAt: new Date().toISOString(),
          };

          saveUserLocation(locationResult);
          resolve(locationResult);
        } catch {
          const closest = findClosestCity(latitude, longitude);
          const closestDist = findClosestDistrict(latitude, longitude, closest.id) || closest.districts[0];
          const locationResult: UserLocation = {
            city: closest.name,
            citySlug: closest.citySlug,
            district: closestDist,
            address: `${closestDist}, ${closest.name} (GPS)`,
            latitude,
            longitude,
            source: 'gps',
            accuracy,
            accuracyLevel,
            updatedAt: new Date().toISOString(),
          };
          saveUserLocation(locationResult);
          resolve(locationResult);
        }
      },
      (error) => {
        let msg = 'Không thể lấy vị trí hiện tại.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Bạn chưa cấp quyền truy cập vị trí. Vui lòng bật quyền vị trí hoặc chọn thủ công.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'Tín hiệu vị trí hiện không khả dụng. Bạn có thể chọn nhanh Tỉnh & Quận/Huyện bên dưới.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Quá thời gian kết nối GPS. Vui lòng thử lại hoặc chọn thủ công.';
        }
        reject(new Error(msg));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0, // Force fresh real-time hardware GPS query, no stale cache
      }
    );
  });
}

/**
 * Tự động phát hiện vị trí qua mạng IP công cộng khi GPS không khả dụng
 */
export async function detectIpLocation(): Promise<UserLocation | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch('https://ipwho.is/', { signal: controller.signal });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        const lat = data.latitude || 10.7769;
        const lng = data.longitude || 106.7009;
        const closestCity = findClosestCity(lat, lng);
        const closestDist = findClosestDistrict(lat, lng, closestCity.id) || closestCity.districts[0];

        const locationResult: UserLocation = {
          city: closestCity.name,
          citySlug: closestCity.citySlug,
          district: closestDist,
          address: `${closestDist}, ${closestCity.name}`,
          latitude: lat,
          longitude: lng,
          source: 'ip',
          accuracy: 5000,
          accuracyLevel: 'approximate',
          updatedAt: new Date().toISOString(),
        };
        saveUserLocation(locationResult);
        return locationResult;
      }
    }
  } catch {
    // fallback
  }
  return null;
}

/**
 * Tính năng tự động lấy vị trí thông minh đa tầng:
 * 1. Thử GPS phần cứng độ chính xác cao trước.
 * 2. Nếu không có GPS, tự động fallback sang định vị mạng IP.
 * 3. Trả về kết quả kèm cấp độ chính xác (high hoặc approximate).
 */
export async function smartAutoDetectLocation(force = true): Promise<{
  location: UserLocation;
  accuracyLevel: 'high' | 'approximate';
  message: string;
}> {
  // 1. First attempt hardware GPS
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    try {
      const gpsResult = await detectGpsLocation();
      const isHigh = gpsResult.accuracyLevel === 'high';
      return {
        location: gpsResult,
        accuracyLevel: isHigh ? 'high' : 'approximate',
        message: isHigh
          ? `Đã định vị chính xác vị trí GPS của bạn (${gpsResult.district ? `${gpsResult.district}, ` : ''}${gpsResult.city})`
          : `Đã tự động xác định khu vực ${gpsResult.district || gpsResult.city} (Bạn có thể đổi quận nếu muốn)`,
      };
    } catch {
      // GPS denied or failed
    }
  }

  // 2. Fallback to IP Geolocation
  const ipResult = await detectIpLocation();
  if (ipResult) {
    return {
      location: ipResult,
      accuracyLevel: 'approximate',
      message: `Đã tự động nhận diện khu vực ${ipResult.city} qua mạng`,
    };
  }

  // 3. Fallback to stored or default
  const stored = getStoredUserLocation();
  return {
    location: stored,
    accuracyLevel: stored.accuracyLevel || 'approximate',
    message: `Đang áp dụng vị trí: ${stored.district || stored.city}`,
  };
}

export function isAutoDetectLocationEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('homnayangi_auto_location_disabled') !== 'true';
}

export function setAutoDetectLocationEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  if (enabled) {
    localStorage.removeItem('homnayangi_auto_location_disabled');
  } else {
    localStorage.setItem('homnayangi_auto_location_disabled', 'true');
  }
}

/**
 * Tự động lấy vị trí người dùng:
 * - Nếu người dùng đã chọn thủ công (source: manual), tôn trọng lựa chọn của họ.
 * - Nếu chưa chọn thủ công và trình duyệt đã cấp quyền vị trí, tự động lấy tọa độ GPS mới nhất.
 */
export async function autoDetectUserLocation(force = false): Promise<UserLocation | null> {
  const stored = getStoredUserLocation();
  if (stored && stored.source === 'manual' && !force) {
    return stored;
  }

  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    try {
      if ('permissions' in navigator) {
        const status = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
        if (status.state === 'granted') {
          return await detectGpsLocation();
        }
      }
    } catch {
      // ignore
    }
  }
  return stored;
}

export function formatLocationDisplay(location?: UserLocation): string {
  if (!location) return 'Chưa xác định';
  if (location.district && location.city) {
    // If district already includes city name, prevent duplication
    if (location.district.toLowerCase().includes(location.city.toLowerCase())) {
      return location.district;
    }
    const shortCity = location.city.replace('Thành phố ', 'TP. ').replace('Tỉnh ', '');
    return `${location.district}, ${shortCity}`;
  }
  return location.address || location.city || 'Việt Nam';
}
