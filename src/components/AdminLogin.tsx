import React, { useState } from 'react';
import {
  Lock,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  Utensils,
  LogIn,
} from 'lucide-react';
import { loginWithGoogle, ADMIN_EMAILS } from '../firebase';

export interface AdminUserSession {
  email: string;
  name?: string;
  avatar?: string;
  method: 'google';
  loginAt: string;
}

interface AdminLoginProps {
  onLoginSuccess: (session: AdminUserSession) => void;
  onBackToHome?: () => void;
}

export const ADMIN_SESSION_STORAGE_KEY = 'angigio_admin_session';

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToHome }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setErrorMsg('');
    setGoogleLoading(true);
    try {
      const user = await loginWithGoogle();
      const session: AdminUserSession = {
        email: user.email || ADMIN_EMAILS[0],
        name: user.displayName || 'Quản Trị Viên',
        avatar: user.photoURL || undefined,
        method: 'google',
        loginAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, JSON.stringify(session));
      } catch {}
      onLoginSuccess(session);
    } catch (err: any) {
      const code = String(err?.code || '');
      const msg = String(err?.message || '');
      if (code === 'auth/unauthorized-admin') {
        setErrorMsg(
          `${msg} Vui lòng chọn đúng Gmail quản trị đã được cấp quyền (${ADMIN_EMAILS.join(' hoặc ')}).`
        );
      } else if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setErrorMsg('Bạn đã đóng cửa sổ đăng nhập Google trước khi hoàn tất.');
      } else if (code === 'auth/popup-blocked') {
        setErrorMsg('Trình duyệt đang chặn cửa sổ bật lên (popup). Hãy cho phép popup rồi thử lại.');
      } else if (code === 'auth/unauthorized-domain') {
        const host = typeof window !== 'undefined' ? window.location.hostname : '';
        setErrorMsg(
          `Tên miền "${host}" chưa được cấp quyền đăng nhập Google trong Firebase Console (Authentication → Settings → Authorized domains). Hãy thêm "${host}" vào danh sách đó rồi thử lại.`
        );
      } else {
        setErrorMsg(msg || 'Không thể đăng nhập Google lúc này. Vui lòng thử lại.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-stone-900/90 border border-stone-800 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative z-10 animate-fade-in">
        {/* Top Header & Brand Icon */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/20 mb-3.5 ring-4 ring-orange-500/15">
            <Lock className="w-7 h-7" />
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
            <Utensils className="w-3.5 h-3.5" />
            <span>Hôm Nay Ăn Gì</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Đăng Nhập Quản Trị
          </h1>
          <p className="text-xs text-stone-400 mt-1.5 max-w-xs mx-auto leading-relaxed">
            Xác thực qua tài khoản Google Admin để đồng bộ, đăng bài và xóa bài an toàn trên Cloud Firestore.
          </p>
        </div>

        {/* Error notification if any */}
        {errorMsg && (
          <div className="mb-5 p-3.5 bg-rose-950/60 border border-rose-800/80 rounded-xl flex items-start gap-2.5 text-xs text-rose-300">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span className="leading-snug">{errorMsg}</span>
          </div>
        )}

        {/* Google Admin Sign In Button */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-stone-100 disabled:opacity-70 text-stone-900 font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          >
            {googleLoading ? (
              <div className="w-4 h-4 border-2 border-stone-700 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                />
              </svg>
            )}
            <span>{googleLoading ? 'Đang xác thực Google...' : 'Đăng Nhập Bằng Google Admin'}</span>
          </button>

          <div className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-xl text-[11px] text-stone-400 leading-relaxed flex items-start gap-2">
            <LogIn className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
            <span>
              Chỉ các tài khoản Google quản trị viên được xác minh mới có quyền ghi, sửa và xóa bài viết trên Cloud Firestore.
            </span>
          </div>
        </div>

        {/* Back to Website Link */}
        <div className="mt-6 pt-5 border-t border-stone-800 text-center">
          <button
            type="button"
            onClick={() => {
              if (onBackToHome) {
                onBackToHome();
              } else {
                window.location.href = '/';
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-stone-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại trang chủ Hôm Nay Ăn Gì</span>
          </button>
        </div>
      </div>

      {/* Security note footer */}
      <div className="mt-6 text-center text-[11px] text-stone-500 flex items-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Bảo vệ bởi Firebase Auth &amp; Firestore Security Rules</span>
      </div>
    </div>
  );
};
