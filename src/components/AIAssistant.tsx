import React, { useState, useEffect } from 'react';
import { Sparkles, Send, ShoppingBag, ExternalLink, RefreshCw, AlertCircle, ChefHat, Check, Heart, MapPin, Disc, Camera, Shuffle, Search, X } from 'lucide-react';
import { AISuggestion, AffiliateConfig, UserLocation, Dish } from '../types';
import { trackAndOpenAffiliateLink } from '../utils/affiliate';
import { formatLocationDisplay } from '../utils/location';
import { DeliveryLocationBadge } from './DeliveryLocationBadge';

import {
  getClientSideContextualSuggestions,
  getDishImageByName,
  getAlternativeImagesForDish,
  searchDishImages,
  ALL_AUTHENTIC_DISH_IMAGES,
} from '../utils/aiFallback';

interface AIAssistantProps {
  affiliateConfig: AffiliateConfig;
  userLocation: UserLocation;
  onOpenLocationModal: (dishName?: string) => void;
  onSelectDish?: (dish: Dish) => void;
  selectedDish?: Dish | null;
  onNavigate?: (tab: 'wheel' | 'ai') => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  affiliateConfig,
  userLocation,
  onOpenLocationModal,
  onSelectDish,
  selectedDish,
  onNavigate,
}) => {
  const [mealTime, setMealTime] = useState('Trưa');
  const [budget, setBudget] = useState('35k - 60k (Văn phòng)');
  const [mood, setMood] = useState('Thèm đồ đậm đà cay nồng');
  const [weather, setWeather] = useState('Nắng nóng cần giải nhiệt');
  const [location, setLocation] = useState(userLocation.city || 'TP. Hồ Chí Minh');
  const [partySize, setPartySize] = useState(1);
  const [cravings, setCravings] = useState('');

  useEffect(() => {
    if (userLocation.city) {
      setLocation(userLocation.city);
    }
  }, [userLocation]);
  
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [shownDishNames, setShownDishNames] = useState<string[]>([]);
  const [selectingImageIndex, setSelectingImageIndex] = useState<number | null>(null);
  const [searchImageQuery, setSearchImageQuery] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleSelectNewImage = (targetIndex: number, newImageUrl: string) => {
    setSuggestions((prev) =>
      prev.map((item, idx) => (idx === targetIndex ? { ...item, image: newImageUrl } : item))
    );
    setSelectingImageIndex(null);
    setToastMsg(`Đã đổi ảnh minh hoạ thành công!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleShuffleImage = (targetIndex: number) => {
    const currentDish = suggestions[targetIndex];
    if (!currentDish) return;
    const currentImg = currentDish.image || getDishImageByName(currentDish.name, currentDish.category);
    const alternatives = getAlternativeImagesForDish(currentDish.name, currentDish.category, currentImg);
    if (alternatives.length > 0) {
      const randomPick = alternatives[Math.floor(Math.random() * alternatives.length)];
      handleSelectNewImage(targetIndex, randomPick.image);
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const requestId = `${Date.now()}_${Math.random().toString(36).substring(2)}`;
    const currentExclude = [...shownDishNames];

    try {
      const res = await fetch('/api/ai/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mealTime,
          budget,
          mood,
          weather,
          location,
          partySize,
          cravings,
          requestId,
          excludeNames: currentExclude,
        }),
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.success && Array.isArray(data.suggestions) && data.suggestions.length > 0) {
          const suggestionsWithImages = data.suggestions.map((s: AISuggestion) => ({
            ...s,
            image: s.image || getDishImageByName(s.name, s.category),
          }));
          setSuggestions(suggestionsWithImages);
          setAiAdvice(data.advice || '');
          const newNames = suggestionsWithImages.map((s: AISuggestion) => s.name);
          setShownDishNames((prev) => [...prev, ...newNames].slice(-20));
          setLoading(false);
          return;
        }
      }
    } catch (err: any) {
      console.warn('API suggestion fallback to smart client engine:', err);
    }

    // Seamless Smart Client-Side Fallback Engine (Shuffles candidates randomly on every click)
    const fallbackData = getClientSideContextualSuggestions({
      mealTime,
      budget,
      mood,
      weather,
      location,
      partySize,
      cravings,
      excludeNames: currentExclude,
    });
    setSuggestions(fallbackData.suggestions);
    setAiAdvice(fallbackData.advice);
    const newNames = fallbackData.suggestions.map((s) => s.name);
    setShownDishNames((prev) => [...prev, ...newNames].slice(-20));
    setLoading(false);
  };

  return (
    <div className="py-6 sm:py-8 max-w-6xl mx-auto px-4">
      {/* Group Navigation Switcher: Vòng Quay & Trợ Lý AI */}
      {onNavigate && (
        <div className="flex justify-center mb-6 px-4">
          <div className="inline-flex p-1 rounded-full bg-stone-100 border border-stone-200/80 shadow-2xs">
            <button
              onClick={() => onNavigate('wheel')}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-white/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Disc className="w-4 h-4 text-orange-500" />
              <span>Vòng Quay Ăn Gì</span>
            </button>
            <button
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-white text-purple-600 shadow-xs flex items-center gap-2 cursor-default"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Trợ Lý AI Gợi Ý Món</span>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-stone-900 tracking-tight mb-2 md:whitespace-nowrap">
          AI Gợi Ý Món Ăn - <span className="text-purple-600">Trợ Lý Ẩm Thực Thông Minh</span>
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Đừng để bụng đói phải đắn đo! Chọn nhanh tâm trạng và mức giá mong muốn, trợ lý sẽ &ldquo;bắt trúng&rdquo; ngay món ngon chuẩn vị, vừa miệng vừa ví.
        </p>
      </div>

      {/* Interactive Form */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xs p-5 sm:p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Meal time */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              1. Bữa Ăn Nào?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Sáng', 'Trưa', 'Xế Chiều', 'Tối', 'Ăn Đêm'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setMealTime(t)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all ${
                    mealTime === t
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              2. Ngân Sách Mỗi Người
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Dưới 35k (Tiết kiệm)',
                '35k - 60k (Văn phòng)',
                '60k - 100k (Đầy đặn)',
                '> 100k (Sang chảnh)',
              ].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setBudget(b);
                    setShownDishNames([]);
                  }}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold text-center transition-all ${
                    budget === b
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Mood / Feeling */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              3. Tâm Trạng Hôm Nay
            </label>
            <div className="space-y-1.5">
              {[
                'Thèm đồ đậm đà cay nồng',
                'Mệt mỏi cần ăn thanh đạm/healthy',
                'Đói cồn cào cần món chắc bụng',
                'Thèm đồ ngọt/trà sữa giải stress',
              ].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMood(m)}
                  className={`w-full text-left py-1.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                    mood === m
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Second row: Location, Party Size & Freeform input */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end pt-4 border-t border-stone-100">
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-stone-700">
                Khu Vực Giao Hàng
              </label>
              <button
                type="button"
                onClick={() => onOpenLocationModal()}
                className="text-[10px] text-purple-700 hover:text-purple-900 font-bold flex items-center gap-0.5 cursor-pointer underline"
              >
                <MapPin className="w-3 h-3" />
                Định vị GPS
              </button>
            </div>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium focus:outline-hidden focus:border-purple-500"
            >
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Hải Phòng">Hải Phòng</option>
              <option value="Cần Thơ">Cần Thơ</option>
              <option value="Bình Dương">Bình Dương</option>
              <option value="Đồng Nai">Đồng Nai</option>
              <option value="Vũng Tàu">Vũng Tàu</option>
              <option value="Nha Trang">Nha Trang</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Số Người Ăn
            </label>
            <select
              value={partySize}
              onChange={(e) => setPartySize(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium focus:outline-hidden focus:border-purple-500"
            >
              <option value={1}>1 người (Ăn mảnh)</option>
              <option value={2}>2 người (Hẹn hò)</option>
              <option value={4}>3 - 5 người (Nhóm nhỏ)</option>
              <option value={8}>6+ người (Liên hoan)</option>
            </select>
          </div>

          <div className="md:col-span-5">
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Ghi Chú Hoặc Cơn Thèm Riêng (Tùy chọn)
            </label>
            <input
              type="text"
              placeholder="VD: Không hành, thèm bún, thích sốt phô mai..."
              value={cravings}
              onChange={(e) => setCravings(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:outline-hidden focus:border-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              onClick={() => handleGenerate()}
              disabled={loading}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Đang nghĩ...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Gợi Ý AI
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Error state */}
      {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2 mb-6">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* AI Advice Pill */}
      {aiAdvice && (
        <div className="mb-6 p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 text-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <ChefHat className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-purple-950 text-xs uppercase tracking-wider mb-0.5">
              Lời khuyên từ Bếp Trưởng AI
            </div>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">{aiAdvice}</p>
          </div>
        </div>
      )}

      {/* Generated Suggestions Cards */}
      {suggestions.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Top Món Ngon AI Đề Xuất Dành Riêng Cho Bạn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestions.map((item, index) => {
            const dishImage = item.image || getDishImageByName(item.name, item.category);
            return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
            >
              {/* Dish Illustration Image */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={dishImage}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-900/80 backdrop-blur-xs text-white shadow-xs">
                  Lựa chọn #{index + 1} • {item.category}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearchImageQuery('');
                    setSelectingImageIndex(index);
                  }}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 hover:bg-white text-stone-700 hover:text-orange-600 shadow-md flex items-center gap-1 cursor-pointer z-10 transition-all border border-stone-200/80"
                  title="Đổi ảnh minh hoạ món ăn này"
                >
                  <Camera className="w-3.5 h-3.5 text-orange-500" />
                  <span>Đổi ảnh</span>
                </button>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-white/90 backdrop-blur-xs text-orange-600 shadow-xs">
                  {item.calories}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-stone-900 mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-orange-600 mb-3 italic">
                  "{item.tagline}"
                </p>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {item.reason}
                </p>

                <div className="space-y-1.5 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Khoảng giá:</span>
                    <span className="font-bold text-stone-900">{item.estimatedPrice}</span>
                  </div>
                  {item.pairWith && (
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Khuyên gọi cùng:</span>
                      <span className="font-medium text-stone-800">{item.pairWith}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.tags?.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Affiliate / Food App Action Bar */}
              <div className="p-4 bg-stone-50/80 border-t border-stone-100">
                <div className="flex items-center justify-between text-[11px] font-bold text-stone-600 mb-2">
                  <span className="flex items-center gap-1 text-orange-950 font-black">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span>Chuyển qua app tìm món:</span>
                  </span>
                  {onSelectDish && (
                    <button
                      onClick={() => {
                        const dishObj: Dish = {
                          id: `ai-${index}-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                          name: item.name,
                          vietnameseName: item.name,
                          category: 'mon_khac',
                          mealTime: ['trua', 'toi'],
                          priceRange: item.estimatedPrice || '40.000đ - 65.000đ',
                          estimatedPrice: 50000,
                          calories: item.calories || '500 kcal',
                          description: item.reason || item.tagline,
                          image: dishImage,
                          popularTags: item.tags || ['AI Gợi ý'],
                          searchKeyword: item.searchKeyword || item.name,
                          bestPairedWith: item.pairWith,
                        };
                        onSelectDish(dishObj);
                      }}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md cursor-pointer transition-colors bg-stone-200/80 hover:bg-orange-100 text-stone-700 hover:text-orange-700"
                    >
                      Xem chi tiết
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() =>
                      trackAndOpenAffiliateLink(
                        'shopeefood',
                        { name: item.searchKeyword || item.name },
                        affiliateConfig,
                        userLocation
                      )
                    }
                    title={`Chuyển qua ShopeeFood tìm ${item.name} (${userLocation.city})`}
                    className="flex flex-col items-center justify-center min-h-[46px] py-2 px-1.5 rounded-xl bg-[#EE4D2D] hover:bg-[#D73211] text-white transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    <span className="text-xs font-black tracking-tight leading-none">ShopeeFood</span>
                    <span className="text-[10px] opacity-90 font-medium mt-0.5">Tìm quán gần</span>
                  </button>

                  <button
                    onClick={() =>
                      trackAndOpenAffiliateLink(
                        'grabfood',
                        { name: item.searchKeyword || item.name },
                        affiliateConfig,
                        userLocation
                      )
                    }
                    title={`Chuyển qua GrabFood định vị quán ${item.name} gần bạn`}
                    className="flex flex-col items-center justify-center min-h-[46px] py-2 px-1.5 rounded-xl bg-[#00B14F] hover:bg-[#009643] text-white transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    <span className="text-xs font-black tracking-tight leading-none">GrabFood</span>
                    <span className="text-[10px] opacity-90 font-medium mt-0.5">Tìm quán gần</span>
                  </button>

                  <button
                    onClick={() =>
                      trackAndOpenAffiliateLink(
                        'befood',
                        { name: item.searchKeyword || item.name },
                        affiliateConfig,
                        userLocation
                      )
                    }
                    title={`Chuyển qua BeFood tìm ${item.name} (${userLocation.city})`}
                    className="flex flex-col items-center justify-center min-h-[46px] py-2 px-1.5 rounded-xl bg-[#FFD100] hover:bg-[#ECC200] text-stone-900 transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    <span className="text-xs font-black tracking-tight leading-none">BeFood</span>
                    <span className="text-[10px] font-bold mt-0.5">Tìm quán gần</span>
                  </button>
                </div>
              </div>
            </div>
          );
          })}
          </div>
        </div>
      )}

      {/* Initial state placeholder */}
      {suggestions.length === 0 && !loading && (
        <div className="text-center py-12 bg-stone-50/60 rounded-3xl border border-dashed border-stone-300">
          <ChefHat className="w-12 h-12 text-stone-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-stone-800 mb-1">
            Chưa có gợi ý nào được tạo
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mb-4">
            Hãy chọn bữa ăn và tiêu chí ở trên, sau đó bấm nút "Gợi Ý AI" để trí tuệ nhân tạo Gemini tìm món phù hợp nhất cho bạn.
          </p>
          <button
            onClick={() => handleGenerate()}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            Tạo gợi ý mẫu ngay
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-fade-in border border-stone-800">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Modal Đổi Ảnh Minh Hoạ */}
      {selectingImageIndex !== null && suggestions[selectingImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectingImageIndex(null)}
        >
          <div
            className="bg-white rounded-[24px] sm:rounded-[28px] max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                    Đổi Ảnh Minh Hoạ Món Ăn
                  </h3>
                </div>
                <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                  Món: <strong className="text-orange-600 font-bold">{suggestions[selectingImageIndex]?.name}</strong>
                </p>
              </div>
              <button
                onClick={() => setSelectingImageIndex(null)}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Toolbar: Search & Shuffle */}
            <div className="p-3 sm:p-4 border-b border-stone-100 flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between bg-white">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm món (VD: bún, phở, cơm tấm, lẩu, cháo, bánh mì...)"
                  value={searchImageQuery}
                  onChange={(e) => setSearchImageQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-hidden focus:border-orange-500 bg-stone-50 focus:bg-white"
                />
              </div>
              <button
                type="button"
                onClick={() => handleShuffleImage(selectingImageIndex)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                title="Chọn ngẫu nhiên một ảnh phù hợp khác"
              >
                <Shuffle className="w-3.5 h-3.5 text-orange-600" />
                <span>Xáo ảnh ngẫu nhiên</span>
              </button>
            </div>

            {/* Modal Body: Image Grid */}
            <div className="p-4 sm:p-5 overflow-y-auto max-h-[58vh]">
              {!searchImageQuery ? (
                <div>
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    <span>Ảnh Đề Xuất Phù Hợp Nhất Cho Món Này</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {getAlternativeImagesForDish(
                      suggestions[selectingImageIndex].name,
                      suggestions[selectingImageIndex].category,
                      suggestions[selectingImageIndex].image
                    ).map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectNewImage(selectingImageIndex, item.image)}
                        className="group relative rounded-2xl overflow-hidden border border-stone-200 hover:border-orange-500 transition-all text-left bg-stone-50 hover:shadow-md cursor-pointer flex flex-col"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2 bg-white flex-1 flex flex-col justify-between">
                          <div className="text-[11px] font-bold text-stone-900 line-clamp-1 group-hover:text-orange-600">
                            {item.name}
                          </div>
                          <span className="text-[10px] text-stone-400 font-medium">Bấm để chọn</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                    Toàn Bộ Thư Viện Món Ngon (Bấm để chọn)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {ALL_AUTHENTIC_DISH_IMAGES.slice(0, 24).map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectNewImage(selectingImageIndex, item.image)}
                        className="group rounded-xl overflow-hidden border border-stone-200 hover:border-orange-500 transition-all text-left bg-white hover:shadow-sm cursor-pointer"
                      >
                        <div className="aspect-square w-full overflow-hidden bg-stone-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-1.5">
                          <div className="text-[10px] font-bold text-stone-800 line-clamp-1 group-hover:text-orange-600">
                            {item.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                    Kết Quả Tìm Kiếm: "{searchImageQuery}"
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {searchDishImages(searchImageQuery).map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectNewImage(selectingImageIndex, item.image)}
                        className="group rounded-2xl overflow-hidden border border-stone-200 hover:border-orange-500 transition-all text-left bg-white hover:shadow-md cursor-pointer flex flex-col"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2 bg-white flex-1">
                          <div className="text-[11px] font-bold text-stone-900 line-clamp-1 group-hover:text-orange-600">
                            {item.name}
                          </div>
                          <span className="text-[10px] text-stone-400 font-medium">Bấm để chọn</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
              <span>Hơn 260+ hình ảnh minh hoạ món ăn chuẩn SEO</span>
              <button
                type="button"
                onClick={() => setSelectingImageIndex(null)}
                className="px-4 py-1.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
