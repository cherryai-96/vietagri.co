import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { Menu, X, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import vacLogo from '../assets/vac-logo-6.png';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [openMobileSubCategories, setOpenMobileSubCategories] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
    setOpenMobileSubCategories({});
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

  const toggleMobileSub = (key: string) => {
    setOpenMobileSubCategories(prev => ({ ...prev, [key]: !prev[key] }));
  };

  interface NavChild {
    path: string;
    label: string;
    hasSub?: boolean;
    subChildren?: { path: string; label: string }[];
  }

  interface NavItem {
    path?: string;
    label: string;
    isDropdown?: boolean;
    dropdownKey?: string;
    children?: NavChild[];
  }

  const navLinks: NavItem[] = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    {
      label: t('nav.products'),
      path: '/products',
      isDropdown: true,
      dropdownKey: 'products',
      children: [
        { path: '/agricultural-inputs', label: language === 'vi' ? 'Vật tư nông nghiệp' : 'Agricultural Inputs' },
        {
          path: '/products/crops-plant-based-products',
          label: language === 'vi' ? 'Nông sản & Sản phẩm từ cây trồng' : 'Crop & Plant-Based Products',
          hasSub: true,
          subChildren: [
            { path: '/products/fresh-fruits-vegetables', label: language === 'vi' ? 'Trái cây & Nông sản tươi' : 'Fresh Fruits & Vegetables' },
            { path: '/products/fruit-vegetable-powders', label: language === 'vi' ? 'Bột nông sản & Rau củ' : 'Fruit & Vegetable Powders' },
            { path: '/products/fruit-purees', label: language === 'vi' ? 'Puree & Nước ép trái cây (Fruit Purees, Juices & Concentrates)' : 'Fruit Purees, Juices & Concentrates' },
            { path: '/products/freeze-dried-fruits', label: language === 'vi' ? 'Trái cây sấy thăng hoa' : 'Freeze-Dried Fruits' },
            { path: '/products/iqf-fruits-vegetables', label: language === 'vi' ? 'Nông sản cấp đông rời (IQF)' : 'IQF Frozen Produce' },
          ],
        },
        {
          path: '/products/poultry-products',
          label: language === 'vi' ? 'Sản phẩm gia cầm' : 'Poultry Products',
          hasSub: false,
        },
        {
          path: '/products/seafood-products',
          label: language === 'vi' ? 'Sản phẩm thủy hải sản' : 'Aquaculture & Seafood Products',
          hasSub: true,
          subChildren: [
            { path: '/products/basa-fish-pangasius', label: language === 'vi' ? 'Cá Tra — Pangasius (Basa)' : 'Basa Fish — Pangasius' },
            { path: '/products/vietnamese-shrimp', label: language === 'vi' ? 'Tôm Việt Nam' : 'Vietnamese Shrimp' },
            { path: '/products/squid-products', label: language === 'vi' ? 'Mực xuất khẩu' : 'Squid' },
          ],
        },
      ],
    },
    { path: '/viet-wolffia', label: t('nav.wolffia') },
    { path: '/training-program', label: t('nav.training') },
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
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link, idx) => (
              link.isDropdown ? (
                <div key={idx} className="relative group py-2">
                  <NavLink
                    to={link.path || (link.dropdownKey === 'products' ? '/products' : '/services')}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-sans text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-gold-champagne' : 'text-cream/80 hover:text-gold-champagne'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </NavLink>
                  <div className="absolute top-full left-0 mt-0 w-80 bg-carbon/95 backdrop-blur-md border border-gold-warm/20 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-col py-2">
                      {link.children?.map((child, cIdx) => (
                        child.hasSub ? (
                          <div key={cIdx} className="relative group/sub">
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `px-4 py-2.5 font-sans text-xs tracking-wide uppercase transition-colors duration-200 flex justify-between items-center ${
                                  isActive ? 'bg-gold-warm/10 text-gold-champagne font-bold' : 'text-cream/80 hover:bg-white/5 hover:text-cream'
                                }`
                              }
                            >
                              <span>{child.label}</span>
                              <ChevronRight size={14} className="text-gold-warm/70 group-hover/sub:translate-x-1 transition-transform" />
                            </NavLink>

                            {/* Flyout Sub-menu */}
                            <div className="absolute left-full top-0 ml-1 w-72 bg-carbon/95 backdrop-blur-md border border-gold-warm/20 rounded-md shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 py-2">
                              {child.subChildren?.map((subChild, sIdx) => (
                                <NavLink
                                  key={sIdx}
                                  to={subChild.path}
                                  className={({ isActive }) =>
                                    `px-4 py-2 font-sans text-xs tracking-wide transition-colors duration-200 block ${
                                      isActive ? 'bg-gold-warm/10 text-gold-champagne font-bold' : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                                    }`
                                  }
                                >
                                  {subChild.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <NavLink
                            key={cIdx}
                            to={child.path}
                            className={({ isActive }) =>
                              `px-4 py-2.5 font-sans text-xs tracking-wide uppercase transition-colors duration-200 block ${
                                isActive ? 'bg-gold-warm/10 text-gold-champagne font-bold' : 'text-cream/80 hover:bg-white/5 hover:text-cream'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        )
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
              className="bg-forest hover:bg-forest-leaf text-cream px-3.5 py-1.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-forest/10 cursor-pointer flex items-center gap-1.5 border border-forest/20 ml-1"
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
                    onClick={() => {
                      if (link.dropdownKey === 'products') setMobileProductsOpen(!mobileProductsOpen);
                      if (link.dropdownKey === 'services') setMobileServicesOpen(!mobileServicesOpen);
                    }}
                    className="flex justify-between items-center font-sans text-base font-bold uppercase tracking-wide text-cream/80 hover:text-cream text-left w-full"
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${(link.dropdownKey === 'products' ? mobileProductsOpen : mobileServicesOpen) ? 'rotate-180 text-gold-champagne' : ''}`} />
                  </button>
                  {((link.dropdownKey === 'products' ? mobileProductsOpen : mobileServicesOpen)) && (
                    <div className="flex flex-col gap-2 mt-3 pl-3 border-l-2 border-gold-warm/30 ml-2">
                      {/* Direct link to main Products / Services Overview page */}
                      {link.path && (
                        <NavLink
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `font-sans text-sm font-bold tracking-wide py-2 text-gold-champagne hover:underline flex items-center justify-between border-b border-white/10 pb-2 ${
                              isActive ? 'text-gold-champagne font-black' : ''
                            }`
                          }
                        >
                          <span>{language === 'vi' ? 'Tổng quan tất cả sản phẩm' : 'All Products Overview'}</span>
                          <ChevronRight size={14} className="text-gold-warm" />
                        </NavLink>
                      )}

                      {link.children?.map((child, cIdx) => (
                        child.hasSub ? (
                          <div key={cIdx} className="flex flex-col gap-1 py-1">
                            <div className="flex justify-between items-center w-full py-1">
                              <NavLink
                                to={child.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                  `font-sans text-sm font-semibold tracking-wide text-cream/90 hover:text-gold-champagne text-left flex-grow pr-2 ${
                                    isActive ? 'text-gold-champagne font-bold' : ''
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMobileSub(child.label);
                                }}
                                className="p-1 text-gold-warm/80 hover:text-gold-champagne cursor-pointer"
                                aria-label="Toggle sub-category"
                              >
                                <ChevronDown size={18} className={`transition-transform duration-200 ${openMobileSubCategories[child.label] ? 'rotate-180 text-gold-champagne' : ''}`} />
                              </button>
                            </div>
                            {openMobileSubCategories[child.label] && (
                              <div className="flex flex-col gap-2 mt-1 pl-3 border-l border-white/10 ml-2">
                                {child.subChildren?.map((subChild, sIdx) => (
                                  <NavLink
                                    key={sIdx}
                                    to={subChild.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                      `font-sans text-xs tracking-wide py-1.5 ${
                                        isActive ? 'text-gold-champagne font-bold' : 'text-cream/70 hover:text-cream'
                                      }`
                                    }
                                  >
                                    {subChild.label}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <NavLink
                            key={cIdx}
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
                        )
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

