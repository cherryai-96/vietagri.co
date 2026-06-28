import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import vacLogo from '../assets/vac-logo-6.png';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // Track scroll position to change background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    {
      label: t('nav.services'),
      isDropdown: true,
      children: [
        { path: '/services', label: language === 'vi' ? 'Tất cả dịch vụ' : 'All Services' },
        { path: '/contract-farming', label: language === 'vi' ? 'Canh tác hợp đồng' : 'Contract Farming' },
        { path: '/infrastructure-rd', label: language === 'vi' ? 'Cơ sở hạ tầng & R&D' : 'Infrastructure & R&D' },
        { path: '/organic-consulting-certification', label: language === 'vi' ? 'Tư vấn hữu cơ' : 'Organic Consulting' },
      ],
    },
    { path: '/products', label: t('nav.products') },
    { path: '/viet-wolffia', label: t('nav.wolffia') },
    { path: '/sustainability', label: t('nav.sustainability') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-carbon/90 backdrop-blur-md border-b border-gold-warm/15 shadow-md py-2'
            : 'bg-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="w-full px-2 lg:px-4 xl:px-6 mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={vacLogo}
              alt="Vietnam Agriculture Center Logo"
              className="h-12 md:h-16 lg:h-[4rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col items-center whitespace-nowrap">
              <span className="font-serif font-black text-sm sm:text-base md:text-lg lg:text-[0.95rem] xl:text-[1rem] text-cream tracking-wide leading-none transition-colors duration-300 uppercase">
                {language === 'vi' ? 'Trung Tâm Nông Nghiệp Việt Nam' : 'Vietnam Agriculture Center'}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] text-gold-warm uppercase tracking-[0.16em] mt-1 font-semibold transition-colors duration-300 text-center">
                {language === 'vi' ? 'Hội Tụ Tinh Hoa • Kết Nối Thế Giới' : 'Embracing Richness • Connecting Worlds'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link, idx) => (
              link.isDropdown ? (
                <div key={idx} className="relative group py-2">
                  <div className="flex items-center gap-1 font-sans text-[11px] xl:text-xs font-bold tracking-wider uppercase text-cream/80 hover:text-gold-champagne transition-colors duration-300 cursor-pointer">
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-full left-0 mt-0 w-56 bg-carbon/95 backdrop-blur-md border border-gold-warm/20 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="flex flex-col py-2">
                      {link.children?.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `px-4 py-2.5 font-sans text-xs tracking-wide uppercase transition-colors duration-200 ${
                              isActive ? 'bg-gold-warm/10 text-gold-champagne font-bold' : 'text-cream/80 hover:bg-white/5 hover:text-cream'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path!}
                  className={({ isActive }) =>
                    `font-sans text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-all duration-300 relative py-2 ${
                      isActive
                        ? 'text-gold-champagne'
                        : 'text-cream/80 hover:text-gold-champagne'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-warm rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            ))}
            <button
              onClick={toggleLanguage}
              className="bg-forest hover:bg-forest-leaf text-cream px-4 py-2 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-forest/10 cursor-pointer flex items-center gap-2 border border-forest/20 ml-2"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'VI' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream hover:text-gold-champagne p-2 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] md:top-[92px] h-[calc(100vh-76px)] overflow-y-auto bg-carbon/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in border-t border-gold-warm/15">
          <div className="flex flex-col gap-4 pb-12">
            {navLinks.map((link, idx) => (
              link.isDropdown ? (
                <div key={idx} className="flex flex-col border-b border-white/5 py-2">
                  <button 
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex justify-between items-center font-sans text-base font-bold uppercase tracking-wide text-cream/80 hover:text-cream text-left w-full"
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-gold-champagne' : ''}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="flex flex-col gap-2 mt-3 pl-4 border-l-2 border-gold-warm/30 ml-2">
                      {link.children?.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `font-sans text-sm font-semibold tracking-wide py-2 ${
                              isActive ? 'text-gold-champagne' : 'text-cream/70 hover:text-cream'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-sans text-base font-bold uppercase tracking-wide py-2 border-b border-white/5 ${
                      isActive ? 'text-gold-champagne pl-2 border-l-2 border-gold-warm' : 'text-cream/80 hover:text-cream'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
            <button
              onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
              className="bg-forest hover:bg-forest-leaf text-cream flex items-center justify-center gap-2 py-3 rounded font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 mt-6 border border-forest/20"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'Tiếng Việt' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
