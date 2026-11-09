import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'vac_cookie_consent_choice';

export const CookieConsentBanner: React.FC = () => {
  const { language } = useTranslation();
  const [visible, setVisible] = useState(false);
  const isVi = language === 'vi';

  useEffect(() => {
    try {
      const savedChoice = localStorage.getItem(STORAGE_KEY);
      if (!savedChoice) {
        // Small delay so page loads smoothly before showing banner
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage not available, default hide
    }
  }, []);

  const handleChoice = (choice: 'all' | 'essential') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
      localStorage.setItem('vac_cookie_consent_timestamp', new Date().toISOString());
    } catch {
      // Ignore storage error
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-brown-soil/95 backdrop-blur-md text-cream border border-gold-warm/30 rounded-2xl p-5 shadow-2xl font-sans animate-fade-in text-xs leading-relaxed"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2 text-gold-warm font-serif font-bold text-sm">
          <Cookie size={16} className="text-gold-champagne shrink-0" />
          <span>{isVi ? 'Thông Báo Sử Dụng Cookie' : 'Cookie & Privacy Preference'}</span>
        </div>
        <button
          onClick={() => handleChoice('essential')}
          className="text-cream/60 hover:text-cream p-1 transition-colors rounded"
          aria-label="Close banner"
        >
          <X size={14} />
        </button>
      </div>

      <p className="text-cream/80 font-light mb-4 text-[11px] md:text-xs">
        {isVi ? (
          <>
            Website sử dụng cookie kỹ thuật cần thiết để vận hành và cookie thống kê ẩn danh theo{' '}
            <Link to="/privacy-policy" className="text-gold-champagne underline hover:text-gold-warm">
              Chính sách bảo vệ dữ liệu cá nhân
            </Link>{' '}
            (NĐ 356/2025/NĐ-CP). Quý khách có thể tùy chọn chấp nhận hoặc chỉ dùng cookie kỹ thuật.
          </>
        ) : (
          <>
            We use essential cookies to operate and anonymous analytics to improve your experience in accordance with our{' '}
            <Link to="/privacy-policy" className="text-gold-champagne underline hover:text-gold-warm">
              Data Protection Policy
            </Link>. You can choose to accept or allow essential only.
          </>
        )}
      </p>

      <div className="flex items-center justify-end gap-2.5">
        <button
          onClick={() => handleChoice('essential')}
          className="px-3.5 py-1.5 rounded-lg border border-gold-warm/25 text-cream/80 hover:text-cream hover:bg-white/5 font-medium transition-all text-[11px]"
        >
          {isVi ? 'Chỉ Cookie Cần Thiết' : 'Essential Only'}
        </button>
        <button
          onClick={() => handleChoice('all')}
          className="px-4 py-1.5 rounded-lg bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold transition-all text-[11px] shadow-sm"
        >
          {isVi ? 'Đồng Ý Tất Cả' : 'Accept All'}
        </button>
      </div>
    </div>
  );
};