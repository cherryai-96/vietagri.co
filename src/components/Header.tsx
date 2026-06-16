import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Menu, X, Globe } from 'lucide-react';
import vacLogo from '../assets/vac-logo-6.png';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { path: '/services', label: t('nav.services') },
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
                // Fallback in case of absolute path issues during rendering
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          <div className="flex flex-col items-center whitespace-nowrap">
            <span className="font-serif font-black text-sm sm:text-base md:text-lg lg:text-[0.95rem] xl:text-[1rem] text-cream tracking-wide leading-none transition-colors duration-300 uppercase">
              Vietnam Agriculture Center
            </span>
            <span className="font-sans text-[6px] sm:text-[6.5px] md:text-[7px] lg:text-[6.5px] xl:text-[7px] text-gold-warm uppercase tracking-[0.16em] mt-0.5 font-semibold transition-colors duration-300 text-center">
              Embracing Richness • Connecting Worlds
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 relative py-2 ${
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
          ))}
          <button
            onClick={toggleLanguage}
            className="bg-forest hover:bg-forest-leaf text-cream px-5 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-forest/10 cursor-pointer flex items-center gap-2 border border-forest/20"
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
        <div className="lg:hidden fixed inset-0 top-[76px] md:top-[92px] bg-carbon/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in border-t border-gold-warm/15">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-base font-bold uppercase tracking-wide py-2 border-b border-white/5 ${
                    isActive ? 'text-gold-champagne pl-2 border-l-2 border-gold-warm' : 'text-cream/80 hover:text-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
              className="bg-forest hover:bg-forest-leaf text-cream flex items-center justify-center gap-2 py-3 rounded font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 mt-4 border border-forest/20"
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
