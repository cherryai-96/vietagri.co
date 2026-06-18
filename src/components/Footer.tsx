import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Mail, MapPin, Phone } from 'lucide-react';
import vacLogo from '../assets/vac-logo-7.png';

export const Footer: React.FC = () => {
  const { t } = useTranslation();


  return (
    <footer className="bg-brown-soil text-cream/80 pt-16 pb-8 border-t border-gold-warm/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-4 md:items-start items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src={vacLogo}
              alt="Vietnam Agriculture Center Logo"
              className="h-40 md:h-48 w-auto object-contain brightness-110 -mt-8"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <p className="text-sm text-cream/70 leading-relaxed font-light whitespace-pre-line">
              {t('common.connecting')}
            </p>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif font-bold text-lg text-gold-champagne tracking-wide border-b border-gold-warm/15 pb-2">
            Contact
          </h3>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold-warm shrink-0 mt-0.5" />
              <span>{t('common.address')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-warm shrink-0" />
              <a href="tel:+84858741968" className="hover:text-gold-champagne transition-colors">
                +84 858741968
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-warm shrink-0" />
              <a href="mailto:inquiries@vietagri.com" className="hover:text-gold-champagne transition-colors">
                inquiries@vietagri.com
              </a>
            </li>
          </ul>
          

        </div>

        {/* Column 3: Quick Navigation */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif font-bold text-lg text-gold-champagne tracking-wide border-b border-gold-warm/15 pb-2">
            Quick Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-3 text-sm font-light">
            <li>
              <Link to="/" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link to="/viet-wolffia" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.wolffia')}
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.sustainability')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-champagne hover:underline transition-all duration-200">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
          
        </div>

        {/* Column 4: Newsletter & Resources */}
        <div className="flex flex-col gap-5">


          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="w-[42px] h-[42px] bg-forest/40 border border-gold-warm/30 rounded hover:bg-gold-warm hover:text-brown-soil text-cream transition-all shadow-sm flex items-center justify-center" title="Zalo">
              <span className="font-bold text-[11px] leading-none tracking-widest">Zalo</span>
            </a>
            <a href="#" className="w-[42px] h-[42px] bg-forest/40 border border-gold-warm/30 rounded hover:bg-gold-warm hover:text-brown-soil text-cream transition-all shadow-sm flex items-center justify-center" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12.031 0C5.39 0 .003 5.388.003 12.031c0 2.124.553 4.195 1.603 6.01L.06 24l6.113-1.603c1.748.96 3.738 1.465 5.856 1.465 6.643 0 12.031-5.388 12.031-12.031C24.062 5.388 18.673 0 12.031 0zm3.894 17.202c-.394.394-1.127.394-1.69.394a11.907 11.907 0 01-5.068-1.69A16.037 16.037 0 013.82 9.567c-.225-.563-.225-1.126-.225-1.69 0-.563 0-1.126.394-1.69.563-.563 1.126-.563 1.69-.563s1.126 0 1.69.563l1.126 1.69c0 .563 0 1.126-.394 1.69l-.563.563c-.225.225-.225.563 0 1.126a8.887 8.887 0 003.94 3.94c.563.225.845.225 1.126 0l.563-.563c.225-.225.845-.225 1.408 0l1.69 1.126c.563.563.563 1.126.563 1.69 0 .563 0 1.126-.394 1.69z"/></svg>
            </a>
            <a href="#" className="w-[42px] h-[42px] bg-forest/40 border border-gold-warm/30 rounded hover:bg-gold-warm hover:text-brown-soil text-cream transition-all shadow-sm flex items-center justify-center" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-[42px] h-[42px] bg-forest/40 border border-gold-warm/30 rounded hover:bg-gold-warm hover:text-brown-soil text-cream transition-all shadow-sm flex items-center justify-center" title="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.198-.054-.31-.346-.116l-6.405 4.027-2.766-.862c-.6-.188-.61-.6.126-.89l10.814-4.17c.504-.188.948.116.805.908z"/></svg>
            </a>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-gold-warm/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
        <p>{t('common.copyright')}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-warm transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-warm transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold-warm transition-colors">ESG Disclosures</a>
        </div>
      </div>
    </footer>
  );
};
