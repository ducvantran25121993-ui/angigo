import React from 'react';
import {
  Sparkles,
  RotateCcw,
  Bot,
  CalendarDays,
  Utensils,
  MapPin,
  CupSoda,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { TabType } from '../utils/navigation';

interface CrossLinkToolItem {
  tab: TabType;
  href: string;
  title: string;
  kicker: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  cardClass: string;
  iconBoxClass: string;
  kickerClass: string;
  titleHoverClass: string;
  arrowClass: string;
}

const CROSS_LINK_TOOLS: CrossLinkToolItem[] = [
  {
    tab: 'tarot',
    href: '/',
    title: 'Tarot Ẩm Thực',
    kicker: 'Chiêm tinh · 12 cung hoàng đạo',
    desc: 'Rút quẻ bài định mệnh để mở khóa món ăn hợp năng lượng và lá bùa may mắn hôm nay.',
    icon: Sparkles,
    cardClass:
      'bg-gradient-to-br from-amber-50 via-yellow-50/90 to-orange-100/75 hover:from-amber-100/85 hover:via-yellow-50 hover:to-orange-100 border-amber-200/90 hover:border-amber-300 hover:shadow-[0_12px_28px_-14px_rgba(217,119,6,0.36)]',
    iconBoxClass:
      'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-sm shadow-amber-500/25 group-hover:from-amber-600 group-hover:to-orange-600',
    kickerClass: 'text-amber-700',
    titleHoverClass: 'group-hover:text-amber-800',
    arrowClass:
      'bg-white/95 border-amber-200/90 text-amber-600 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'wheel',
    href: '/vong-quay',
    title: 'Vòng Quay Ăn Gì',
    kicker: 'Quay ngẫu nhiên · 3 giây',
    desc: 'Xoay vòng quay công bằng giúp hội bạn thân và dân văn phòng chốt nhanh món ăn.',
    icon: RotateCcw,
    cardClass:
      'bg-gradient-to-br from-orange-50 via-amber-50/75 to-rose-100/70 hover:from-orange-100/85 hover:via-amber-50 hover:to-rose-100/90 border-orange-200/90 hover:border-orange-300 hover:shadow-[0_12px_28px_-14px_rgba(234,88,12,0.36)]',
    iconBoxClass:
      'bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-sm shadow-orange-500/25 group-hover:from-orange-600 group-hover:to-rose-600',
    kickerClass: 'text-orange-700',
    titleHoverClass: 'group-hover:text-orange-700',
    arrowClass:
      'bg-white/95 border-orange-200/90 text-orange-600 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-rose-600 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'ai',
    href: '/ai-goi-y-mon-an',
    title: 'Trợ Lý AI Chọn Món',
    kicker: 'Theo tâm trạng · Thời tiết',
    desc: 'Gợi ý món ngon cá nhân hóa theo thời tiết, khẩu vị và ngân sách trong tích tắc.',
    icon: Bot,
    cardClass:
      'bg-gradient-to-br from-violet-50 via-fuchsia-50/70 to-indigo-100/70 hover:from-violet-100/80 hover:via-fuchsia-50 hover:to-indigo-100/90 border-violet-200/90 hover:border-violet-300 hover:shadow-[0_12px_28px_-14px_rgba(124,58,237,0.32)]',
    iconBoxClass:
      'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-sm shadow-violet-600/25 group-hover:from-violet-700 group-hover:to-indigo-700',
    kickerClass: 'text-violet-700',
    titleHoverClass: 'group-hover:text-violet-800',
    arrowClass:
      'bg-white/95 border-violet-200/90 text-violet-600 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'planner',
    href: '/lich-an-theo-tuan',
    title: 'Lịch Ăn Theo Tuần',
    kicker: 'Thực đơn · 7 ngày',
    desc: 'Lên thực đơn sáng trưa tối cả tuần chống trùng món, cân đối dinh dưỡng và calo.',
    icon: CalendarDays,
    cardClass:
      'bg-gradient-to-br from-emerald-50 via-teal-50/80 to-cyan-100/65 hover:from-emerald-100/80 hover:via-teal-50 hover:to-cyan-100/85 border-emerald-200/90 hover:border-emerald-300 hover:shadow-[0_12px_28px_-14px_rgba(5,150,105,0.32)]',
    iconBoxClass:
      'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm shadow-emerald-600/25 group-hover:from-emerald-600 group-hover:to-teal-700',
    kickerClass: 'text-emerald-700',
    titleHoverClass: 'group-hover:text-emerald-800',
    arrowClass:
      'bg-white/95 border-emerald-200/90 text-emerald-600 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'catalog',
    href: '/mon-ngon',
    title: 'Thực Đơn 160+ Món',
    kicker: 'Đặc sản · 3 miền',
    desc: 'Tra cứu danh mục món ngon Bắc Trung Nam kèm mức calo, giá tham khảo và đặt ship.',
    icon: Utensils,
    cardClass:
      'bg-gradient-to-br from-rose-50 via-pink-50/75 to-orange-100/70 hover:from-rose-100/80 hover:via-pink-50 hover:to-orange-100/90 border-rose-200/90 hover:border-rose-300 hover:shadow-[0_12px_28px_-14px_rgba(225,29,72,0.32)]',
    iconBoxClass:
      'bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-sm shadow-rose-500/25 group-hover:from-rose-600 group-hover:to-orange-600',
    kickerClass: 'text-rose-700',
    titleHoverClass: 'group-hover:text-rose-800',
    arrowClass:
      'bg-white/95 border-rose-200/90 text-rose-600 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-orange-500 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'restaurants',
    href: '/quan-ngon',
    title: 'Quán Ngon Gần Bạn',
    kicker: 'Địa chỉ chuẩn vị · Chỉ đường',
    desc: 'Khám phá quán ăn ngon nổi tiếng quanh khu vực bạn đang ở kèm nút đặt giao tận nơi.',
    icon: MapPin,
    cardClass:
      'bg-gradient-to-br from-sky-50 via-blue-50/75 to-indigo-100/65 hover:from-sky-100/80 hover:via-blue-50 hover:to-indigo-100/85 border-sky-200/90 hover:border-sky-300 hover:shadow-[0_12px_28px_-14px_rgba(2,132,199,0.32)]',
    iconBoxClass:
      'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/25 group-hover:from-sky-600 group-hover:to-blue-700',
    kickerClass: 'text-sky-700',
    titleHoverClass: 'group-hover:text-sky-800',
    arrowClass:
      'bg-white/95 border-sky-200/90 text-sky-600 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:border-transparent group-hover:text-white',
  },
  {
    tab: 'snacks',
    href: '/do-uong-an-vat',
    title: 'Đồ Uống & Ăn Vặt',
    kicker: 'Xế chiều · Hot trend',
    desc: 'Thế giới trà sữa trân châu, cà phê muối và đồ ăn vặt giòn rụm cứu đói buổi chiều.',
    icon: CupSoda,
    cardClass:
      'bg-gradient-to-br from-pink-50 via-rose-50/75 to-fuchsia-100/70 hover:from-pink-100/80 hover:via-rose-50 hover:to-fuchsia-100/90 border-pink-200/90 hover:border-pink-300 hover:shadow-[0_12px_28px_-14px_rgba(219,39,119,0.32)]',
    iconBoxClass:
      'bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white shadow-sm shadow-pink-500/25 group-hover:from-pink-600 group-hover:to-fuchsia-700',
    kickerClass: 'text-pink-700',
    titleHoverClass: 'group-hover:text-pink-800',
    arrowClass:
      'bg-white/95 border-pink-200/90 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-fuchsia-600 group-hover:border-transparent group-hover:text-white',
  },
];

export const CrossLinkEcosystemSection: React.FC<{
  activeTab: TabType;
  onNavigate?: (tab: TabType) => void;
  heading?: string;
  standalone?: boolean;
}> = ({
  activeTab,
  onNavigate,
  heading = 'Khám Phá Thêm Các Công Cụ Chọn Món Chuẩn Vị Khác',
  standalone = false,
}) => {
  const items = CROSS_LINK_TOOLS.filter((item) => item.tab !== activeTab).slice(0, 6);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetTab: TabType) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(targetTab);
    }
  };

  const innerContent = (
    <section
      aria-label="Khám phá thêm công cụ chọn món"
      className={standalone ? '' : 'pt-7 mt-2 border-t border-stone-200/80'}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 sm:mb-5">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2.5 tracking-tight">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25">
              <Compass className="w-4 h-4" />
            </span>
            <span>{heading}</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 md:pl-[42px]">
            Vẫn chưa chốt được món ưng ý? Chọn nhanh một công cụ khác phù hợp với tâm trạng lúc này.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold md:pb-0.5 shrink-0">
          {activeTab !== 'discover' && (
            <a
              href="/am-thuc-vung-mien"
              onClick={(e) => handleLinkClick(e, 'discover')}
              className="text-stone-600 hover:text-orange-600 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Ẩm Thực 3 Miền
            </a>
          )}
          <a
            href="/blog"
            onClick={(e) => handleLinkClick(e, 'blog')}
            className="text-orange-600 hover:text-orange-700 hover:underline underline-offset-4 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Cẩm Nang Bếp Ngon</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.tab}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.tab)}
              className={`group flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl border hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${item.cardClass}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${item.iconBoxClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-semibold leading-none mb-1.5 ${item.kickerClass}`}>
                      {item.kicker}
                    </div>
                    <div
                      className={`font-bold text-stone-900 text-[15px] leading-snug transition-colors ${item.titleHoverClass}`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${item.arrowClass}`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </div>

              <p className="mt-2 sm:mt-3 text-xs sm:text-[13px] text-stone-600 leading-relaxed line-clamp-1 sm:line-clamp-2">
                {item.desc}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );

  if (standalone) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-5">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-4 sm:p-7">
          {innerContent}
        </div>
      </div>
    );
  }

  return innerContent;
};
