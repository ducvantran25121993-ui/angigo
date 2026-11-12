import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Crosshair,
  X,
  Check,
  AlertCircle,
  Sparkles,
  Building2,
  Navigation,
  Search,
  Info,
} from 'lucide-react';
import { UserLocation } from '../types';
import {
  POPULAR_CITIES,
  ALL_VIETNAM_PROVINCES,
  detectGpsLocation,
  saveUserLocation,
  CityPreset,
  formatLocationDisplay,
  getDistrictCoordinates,
  searchLocationSuggestions,
  LocationSuggestion,
} from '../utils/location';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: UserLocation;
  onLocationChange?: (newLocation: UserLocation) => void;
  onSelectLocation?: (newLocation: UserLocation) => void;
  pendingDishName?: string;
  targetDishName?: string;
  onConfirmOrderWithLocation?: (loc: UserLocation) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  currentLocation,
  onLocationChange,
  onSelectLocation,
  pendingDishName,
  targetDishName,
  onConfirmOrderWithLocation,
}) => {
  const activeDishName = pendingDishName || targetDishName;

  const notifyLocationChange = (loc: UserLocation) => {
    if (typeof onLocationChange === 'function') {
      onLocationChange(loc);
    }
    if (typeof onSelectLocation === 'function') {
      onSelectLocation(loc);
    }
  };

  const [selectedCityId, setSelectedCityId] = useState<string>(() => {
    const found = POPULAR_CITIES.find(
      (c) =>
        c.citySlug === currentLocation.citySlug ||
        c.name.toLowerCase() === currentLocation.city.toLowerCase()
    );
    return found ? found.id : 'hcm';
  });

  const [selectedDistrict, setSelectedDistrict] = useState<string>(() => {
    const d = currentLocation.district || 'Quận 1';
    // If previous detected district was a ward like Phường Chợ Quán, map to Quận 5
    if (d.toLowerCase().includes('chợ quán') || d.toLowerCase().includes('chợ lớn')) {
      return 'Quận 5';
    }
    return d;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isDetectingGps, setIsDetectingGps] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [gpsSuccess, setGpsSuccess] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    return searchLocationSuggestions(searchQuery);
  }, [searchQuery]);

  if (!isOpen) return null;

  const currentCityObj =
    POPULAR_CITIES.find((c) => c.id === selectedCityId) || POPULAR_CITIES[0];

  const handleCitySelect = (city: CityPreset) => {
    setSelectedCityId(city.id);
    setSelectedDistrict(city.districts[0] || '');
    setGpsError(null);
    setGpsSuccess(null);
  };

  const handleProvinceSelect = (slug: string) => {
    const prov = ALL_VIETNAM_PROVINCES.find((p) => p.slug === slug);
    if (!prov) return;

    // Check if it's already one of the popular cities
    const popular = POPULAR_CITIES.find((c) => c.citySlug === slug);
    if (popular) {
      handleCitySelect(popular);
      return;
    }

    // Set custom province
    const newLoc: UserLocation = {
      city: prov.name,
      citySlug: prov.slug,
      district: '',
      address: prov.name,
      source: 'manual',
      updatedAt: new Date().toISOString(),
    };
    saveUserLocation(newLoc);
    notifyLocationChange(newLoc);
    if (onConfirmOrderWithLocation) {
      onConfirmOrderWithLocation(newLoc);
    }
    onClose();
  };

  const handleSelectSearchResult = (item: LocationSuggestion) => {
    const matchedCity = POPULAR_CITIES.find((c) => c.citySlug === item.citySlug);
    if (matchedCity) {
      setSelectedCityId(matchedCity.id);
      setSelectedDistrict(item.district || matchedCity.districts[0] || '');
    } else {
      // Province outside preset
      const newLoc: UserLocation = {
        city: item.cityName,
        citySlug: item.citySlug,
        district: item.district || '',
        address: item.label,
        source: 'manual',
        updatedAt: new Date().toISOString(),
      };
      saveUserLocation(newLoc);
      notifyLocationChange(newLoc);
      if (onConfirmOrderWithLocation) {
        onConfirmOrderWithLocation(newLoc);
      }
      onClose();
      return;
    }
    setSearchQuery('');
  };

  const handleApplySelection = () => {
    const districtCoords = getDistrictCoordinates(currentCityObj.id, selectedDistrict);
    const lat = districtCoords?.latitude ?? currentCityObj.latitude;
    const lng = districtCoords?.longitude ?? currentCityObj.longitude;

    const newLoc: UserLocation = {
      city: currentCityObj.name,
      citySlug: currentCityObj.citySlug,
      district: selectedDistrict,
      address: selectedDistrict ? `${selectedDistrict}, ${currentCityObj.name}` : currentCityObj.name,
      latitude: lat,
      longitude: lng,
      source: 'manual',
      updatedAt: new Date().toISOString(),
    };

    saveUserLocation(newLoc);
    notifyLocationChange(newLoc);

    if (onConfirmOrderWithLocation) {
      onConfirmOrderWithLocation(newLoc);
    }
    onClose();
  };

  const handleDetectGps = async () => {
    setIsDetectingGps(true);
    setGpsError(null);
    setGpsSuccess(null);

    try {
      const detected = await detectGpsLocation();
      setGpsSuccess(`Đã xác định vị trí: ${formatLocationDisplay(detected)}`);
      notifyLocationChange(detected);

      // Auto update active form state
      const matchingCity = POPULAR_CITIES.find(
        (c) =>
          c.citySlug === detected.citySlug ||
          detected.city.toLowerCase().includes(c.name.toLowerCase())
      );
      if (matchingCity) {
        setSelectedCityId(matchingCity.id);
        if (detected.district) {
          setSelectedDistrict(detected.district);
        }
      }

      setTimeout(() => {
        if (onConfirmOrderWithLocation) {
          onConfirmOrderWithLocation(detected);
        }
        onClose();
      }, 700);
    } catch (err: any) {
      setGpsError(err.message || 'Không thể xác định vị trí GPS.');
    } finally {
      setIsDetectingGps(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
              <MapPin className="w-5 h-5 text-white animate-bounce" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight">
                Vị Trí Giao Món Của Bạn
              </h2>
              <p className="text-xs text-orange-100 font-medium">
                {activeDishName ? (
                  <span>
                    Tìm quán bán <strong className="text-white">"{activeDishName}"</strong> gần bạn nhất
                  </span>
                ) : (
                  'Định vị để GrabFood & ShopeeFood gợi ý quán gần nhất'
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ chọn vị trí"
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Current Location Badge */}
          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-stone-500">
                  Vị trí đang áp dụng
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-stone-900">
                  {formatLocationDisplay(currentLocation)}
                </div>
              </div>
            </div>

            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-stone-200/80 text-stone-700 uppercase">
              {currentLocation.source === 'gps' ? 'GPS Trực tiếp' : 'Thủ công'}
            </span>
          </div>

          {/* Quick Search Input */}
          <div className="relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm quận/huyện, phường, tỉnh thành (VD: Quận 5, Gò Vấp, Cầu Giấy...)"
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-stone-100/90 hover:bg-stone-100 focus:bg-white text-xs font-medium text-stone-900 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Xóa tìm kiếm"
                  className="absolute right-3 p-1 rounded-full text-stone-400 hover:text-stone-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Search Suggestions Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-200 p-1.5 z-30 max-h-56 overflow-y-auto space-y-1 animate-fade-in">
                <div className="px-2.5 py-1 text-[10px] font-bold uppercase text-stone-400">
                  Kết quả gợi ý ({searchResults.length})
                </div>
                {searchResults.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectSearchResult(item)}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-orange-50 hover:text-orange-950 text-left text-xs font-semibold text-stone-700 transition-colors cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      <span className="group-hover:text-orange-900">{item.label}</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 group-hover:bg-orange-100 group-hover:text-orange-700 text-stone-500 font-bold">
                      Chọn
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick GPS Auto-Detect Button */}
          <div>
            <button
              onClick={handleDetectGps}
              disabled={isDetectingGps}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-emerald-600/30 cursor-pointer active:scale-98"
            >
              <Crosshair className={`w-4 h-4 ${isDetectingGps ? 'animate-spin' : ''}`} />
              {isDetectingGps
                ? 'Đang kết nối GPS & định vị...'
                : '📍 Tự động lấy vị trí hiện tại của tôi (GPS)'}
            </button>

            {gpsSuccess && (
              <div className="mt-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{gpsSuccess}</span>
              </div>
            )}

            {gpsError && (
              <div className="mt-2 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{gpsError}</span>
              </div>
            )}
          </div>

          {/* Explanatory Info Card on GPS and Location Accuracy */}
          <div className="p-3 bg-amber-50/90 rounded-2xl border border-amber-200/90 text-xs text-amber-950 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-[11px]">
              <strong>💡 Lưu ý nếu GPS bị sai vị trí:</strong> Khi duyệt web trên máy tính hoặc mạng WiFi/4G, trình duyệt thường định vị theo địa chỉ IP của nhà mạng nên có thể hiển thị trạm mạng (ví dụ: <em>Phường Chợ Quán</em>).
              <span className="block mt-1 text-stone-800 font-medium">
                👉 Bạn chỉ cần chọn nhanh <strong>Tỉnh / Thành</strong> và <strong>Quận / Huyện</strong> của mình ở bên dưới, rồi bấm <strong>"Áp dụng vị trí này"</strong>!
              </span>
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-stone-200" />
            <span className="shrink-0 mx-3 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
              Chọn nhanh Tỉnh / Thành &amp; Quận / Huyện
            </span>
            <div className="flex-grow border-t border-stone-200" />
          </div>

          {/* Popular Cities Grid */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              1. Chọn Tỉnh / Thành phố:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {POPULAR_CITIES.map((c) => {
                const isSelected = selectedCityId === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleCitySelect(c)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'bg-orange-50 border-orange-500 text-orange-800 shadow-xs'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="truncate">{c.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* All 63 Provinces Dropdown Selector */}
            <div className="mt-2.5">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    handleProvinceSelect(e.target.value);
                  }
                }}
                defaultValue=""
                className="w-full py-2 px-3 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-700 focus:border-orange-500 focus:outline-none cursor-pointer"
              >
                <option value="">🇻🇳 Hoặc chọn từ tất cả 63 Tỉnh / Thành phố trên toàn quốc...</option>
                {ALL_VIETNAM_PROVINCES.map((prov) => (
                  <option key={prov.slug} value={prov.slug}>
                    {prov.name} ({prov.region})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* District Selection */}
          {currentCityObj.districts && currentCityObj.districts.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                2. Chọn Quận / Huyện ({currentCityObj.name}):
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 bg-stone-50 rounded-2xl border border-stone-200">
                {currentCityObj.districts.map((district) => {
                  const isSelected = selectedDistrict === district;
                  return (
                    <button
                      key={district}
                      onClick={() => setSelectedDistrict(district)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-600 text-white shadow-xs font-bold ring-2 ring-orange-400/30'
                          : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                      }`}
                    >
                      {district}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Benefit Explanation */}
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-[11px] text-stone-600 leading-relaxed flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <strong>Đề xuất thông minh:</strong> Khi bạn nhấn đặt món trên GrabFood hoặc ShopeeFood, vị trí này sẽ được tự động đính kèm để ứng dụng ưu tiên tìm các quán gần bạn nhất, tính sẵn phí giao hàng và thời gian giao nhanh nhất!
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-2.5">
          <div className="text-xs text-stone-500 truncate hidden sm:block">
            Sẽ chọn: <strong className="text-stone-900">{selectedDistrict ? `${selectedDistrict}, ` : ''}{currentCityObj.name}</strong>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={handleApplySelection}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Áp dụng vị trí này</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
