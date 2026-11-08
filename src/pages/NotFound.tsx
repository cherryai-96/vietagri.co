import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Home as HomeIcon, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  const { language } = useTranslation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <SEO
        title={language === 'vi' ? '404 - Không tìm thấy trang | VietAgri' : '404 - Page Not Found | VietAgri'}
        description="The page you are looking for does not exist."
      />
      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        <span className="text-7xl font-serif font-black text-gold-warm">404</span>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-forest">
          {language === 'vi' ? 'Không Tìm Thấy Trang' : 'Page Not Found'}
        </h1>
        <p className="text-sm text-carbon/70 font-light">
          {language === 'vi'
            ? 'Đường dẫn bạn yêu cầu không tồn tại hoặc đã được chuyển sang địa chỉ mới.'
            : 'The requested page does not exist or has been moved to a new address.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-leaf text-cream px-5 py-2.5 rounded font-medium text-xs uppercase tracking-wider transition-colors shadow"
          >
            <HomeIcon size={16} />
            <span>{language === 'vi' ? 'Trang Chủ' : 'Home'}</span>
          </Link>
          <Link
            to="/catalogues"
            className="inline-flex items-center gap-2 border border-gold-warm/40 hover:bg-gold-warm/10 text-forest px-5 py-2.5 rounded font-medium text-xs uppercase tracking-wider transition-colors"
          >
            <BookOpen size={16} />
            <span>{language === 'vi' ? 'Catalogue' : 'Catalogues'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

