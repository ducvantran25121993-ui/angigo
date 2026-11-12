import React, { useState } from 'react';
import {
  Heart,
  Info,
  Mail,
  Lock,
  ShieldCheck,
  FileText,
  BookOpen,
  Share2,
} from 'lucide-react';
import { TabType } from '../utils/navigation';
import { ShareModal } from './ShareModal';

export interface SocialMediaItem {
  id: string;
  name: string;
  url: string;
  title: string;
  badge?: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  icon: React.ReactNode;
}

export const SOCIAL_MEDIA_LINKS: SocialMediaItem[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/homnayanmongigio/',
    title: 'Theo dõi Fanpage Hôm Nay Ăn Gì trên Facebook',
    hoverBg: 'hover:bg-[#1877F2]',
    hoverBorder: 'hover:border-[#1877F2]',
    hoverShadow: 'hover:shadow-blue-200/80',
    icon: (
      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@gocnhacuaduc',
    title: 'Khám phá video ẩm thực & quán ngon trên TikTok @gocnhacuaduc',
    hoverBg: 'hover:bg-stone-900',
    hoverBorder: 'hover:border-stone-900',
    hoverShadow: 'hover:shadow-stone-300',
    icon: (
      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .17V9.44a6.37 6.37 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.28 8.28 0 0 0 4.76 1.51V6.69z" />
      </svg>
    ),
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    url: 'https://www.pinterest.com/homnayangigio/',
    title: 'Khám phá & lưu giữ công thức món ngon trên Pinterest Hôm Nay Ăn Gì',
    hoverBg: 'hover:bg-[#E60023]',
    hoverBorder: 'hover:border-[#E60023]',
    hoverShadow: 'hover:shadow-red-200/80',
    icon: (
      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.377 12.004-12.004C24.021 5.367 18.644 0 12.017 0z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/homnayangigio/',
    title: 'Góc ảnh ẩm thực 3 miền trên Instagram @homnayangigio',
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]',
    hoverBorder: 'hover:border-transparent',
    hoverShadow: 'hover:shadow-pink-200/80',
    icon: (
      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'zalo',
    name: 'Zalo',
    url: 'https://zalo.me/0385522474',
    title: 'Nhắn tin Zalo trực tiếp hỗ trợ & hợp tác ẩm thực: 038 5522 474',
    hoverBg: 'hover:bg-[#0068FF]',
    hoverBorder: 'hover:border-[#0068FF]',
    hoverShadow: 'hover:shadow-blue-200/80',
    icon: (
      <span className="font-black text-[11px] sm:text-xs tracking-tighter leading-none" aria-hidden="true">
        Zalo
      </span>
    ),
  },
];

export const Footer: React.FC<{
  onOpenAffiliateModal: () => void;
  onNavigate?: (tab: TabType) => void;
  onOpenAdminInbox?: () => void;
}> = ({ onNavigate, onOpenAdminInbox }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTermsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white border-t border-orange-500/40 shadow-inner mt-2 sm:mt-4 py-8 sm:py-10">
      {/* Soft ambient lighting overlays for depth & premium feel */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300/15 via-transparent to-black/10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content: 3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center justify-between pb-8 border-b border-white/15">
          
          {/* Section 1: Logo & Brand Description (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-2xl bg-white/95 shadow-md shrink-0">
                <img 
                  src="/logo.png?v=7" 
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/logo.svg')) {
                      target.src = '/logo.svg?v=7';
                    }
                  }}
                  alt="Logo Hôm Nay Ăn Gì" 
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain drop-shadow-xs" 
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-sm tracking-tight drop-shadow-xs">
                  Hôm Nay Ăn Gì? • Smart Food Decider
                </div>
                <div className="flex items-center gap-1.5 text-xs text-orange-100 mt-0.5">
                  <span>Gợi ý ẩm thực 3 miền & đặt món nhanh</span>
                  <a
                    href="/admin"
                    onClick={(e) => {
                      if (e.ctrlKey || e.metaKey || e.button === 1) return;
                      e.preventDefault();
                      if (onNavigate) {
                        onNavigate('admin');
                      } else {
                        window.history.pushState({ tab: 'admin' }, '', '/admin');
                        window.dispatchEvent(new Event('locationchange'));
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    title="Quản trị bài viết & nội dung (Admin)"
                    aria-label="Quản trị bài viết"
                    className="inline-flex items-center justify-center p-0.5 rounded opacity-30 hover:opacity-100 transition-opacity text-orange-200 hover:text-white"
                  >
                    <Lock className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-orange-100/90 leading-relaxed max-w-sm">
              Trợ lý ẩm thực cá nhân hóa giúp bạn giải quyết câu hỏi “Hôm nay ăn gì?” trong chớp mắt với Tarot ẩm thực, vòng quay may mắn & kho công thức chuẩn vị.
            </p>
          </div>

          {/* Section 2: Quick Links (Divided into 2 rows, 4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[11px] font-bold text-orange-200 uppercase tracking-wider mb-2.5">
              Liên kết hữu ích
            </span>
            <nav aria-label="Liên kết chân trang" className="flex flex-col items-center md:items-start gap-2 text-xs font-semibold">
              {/* Hàng 1: Khám phá nội dung & Liên hệ */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                <a
                  href="/blog"
                  onClick={handleBlogClick}
                  className="inline-flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors py-1 px-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 font-bold backdrop-blur-xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-200" />
                  <span>Blog Ẩm Thực</span>
                </a>

                <span className="text-orange-300/60 select-none" aria-hidden="true">•</span>

                <a
                  href="/gioi-thieu"
                  onClick={handleAboutClick}
                  className="inline-flex items-center gap-1.5 text-orange-100 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10"
                >
                  <Info className="w-3.5 h-3.5 text-orange-200" />
                  <span>Giới Thiệu</span>
                </a>

                <span className="text-orange-300/60 select-none" aria-hidden="true">•</span>

                <a
                  href="/lien-he"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-1.5 text-orange-100 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-200" />
                  <span>Liên Hệ</span>
                </a>
              </div>

              {/* Hàng 2: Chính sách & Pháp lý */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-orange-200">
                <a
                  href="/chinh-sach-bao-mat"
                  onClick={handlePrivacyClick}
                  className="inline-flex items-center gap-1.5 text-orange-100/90 hover:text-white transition-colors py-1 px-1.5 rounded-md hover:bg-white/10 text-[11px]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-200" />
                  <span>Chính Sách Bảo Mật</span>
                </a>

                <span className="text-orange-300/60 select-none" aria-hidden="true">•</span>

                <a
                  href="/dieu-khoan-su-dung"
                  onClick={handleTermsClick}
                  className="inline-flex items-center gap-1.5 text-orange-100/90 hover:text-white transition-colors py-1 px-1.5 rounded-md hover:bg-white/10 text-[11px]"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-200" />
                  <span>Điều Khoản Sử Dụng</span>
                </a>
              </div>
            </nav>
          </div>

          {/* Section 3: Social Media & Share Buttons (4 cols, exact 1 single row) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ring-2 ring-emerald-300/40" />
              <span className="text-[11px] font-bold text-orange-100 uppercase tracking-wider drop-shadow-2xs">
                Kết Nối Cùng Chúng Tôi
              </span>
            </div>
            
            {/* Social Buttons List: Exact 1 Single Row */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap justify-center md:justify-end">
              {SOCIAL_MEDIA_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                  title={item.title}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-stone-700 shadow-sm border border-white/80 flex items-center justify-center transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:scale-95 cursor-pointer shrink-0 ${item.hoverBg} ${item.hoverBorder} ${item.hoverShadow}`}
                >
                  {item.icon}
                </a>
              ))}

              {/* Nút Chia Sẻ Nhanh Web App */}
              <button
                type="button"
                onClick={() => setIsShareModalOpen(true)}
                aria-label="Chia sẻ Hôm Nay Ăn Gì cho bạn bè"
                title="Chia sẻ trang web Hôm Nay Ăn Gì cho bạn bè"
                className="h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl bg-white text-orange-600 border border-white/90 font-bold hover:bg-stone-900 hover:border-stone-900 hover:text-white flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 cursor-pointer text-xs shrink-0 shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5 shrink-0" />
                <span>Chia sẻ</span>
              </button>
            </div>

            <p className="text-[11px] text-orange-200 mt-2">
              Theo dõi để không bỏ lỡ thực đơn ngon & ưu đãi mới nhất!
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-orange-200/90">
          <p className="flex items-center gap-1.5">
            <span>Copyright by {new Date().getFullYear()} © Hôm Nay Ăn Gì (angigio.com). Nền tảng gợi ý món ngon</span>
            {onOpenAdminInbox && (
              <button
                type="button"
                onClick={onOpenAdminInbox}
                aria-label="Đăng nhập trang quản trị nội dung"
                title="Quản trị"
                className="opacity-30 hover:opacity-100 transition-opacity p-0.5 cursor-pointer text-orange-200 hover:text-white"
              >
                <Lock className="w-2.5 h-2.5" aria-hidden="true" />
              </button>
            )}
          </p>
          <div className="flex items-center gap-1">
            <span>Thiết kế vì người yêu ẩm thực Việt Nam</span>
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300/90 inline" />
          </div>
        </div>
      </div>

      {/* Share Modal Integration */}
      {isShareModalOpen && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          title="Hôm Nay Ăn Gì? • Trợ Lý Gợi Ý Ẩm Thực Thông Minh"
          text="Không biết ăn gì? Rút quẻ Tarot ẩm thực, quay vòng may mắn & tìm món ngon 3 miền cực đỉnh!"
          url={typeof window !== 'undefined' ? window.location.origin : 'https://angigio.com'}
        />
      )}
    </footer>
  );
};
