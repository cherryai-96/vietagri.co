import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation, type Language } from '../i18n';
import { Menu, X, Globe, ChevronDown, ChevronRight, Check } from 'lucide-react';
import vacLogo from '../assets/vac-logo-6.png';

interface LangOption {
  code: Language;
  label: string;
  shortLabel: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'en', label: 'English (EN)', shortLabel: 'EN' },
  { code: 'vi', label: 'Tiếng Việt (VI)', shortLabel: 'VI' },
  { code: 'zh', label: '中文 (ZH)', shortLabel: 'ZH' },
  { code: 'ko', label: '한국어 (KO)', shortLabel: 'KO' },
  { code: 'ja', label: '日本語 (JA)', shortLabel: 'JA' },
];

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [openMobileSubCategories, setOpenMobileSubCategories] = useState<Record<string, boolean>>({});
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
    setOpenMobileSubCategories({});
    setIsLangDropdownOpen(false);
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

  // Handle click outside for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        { 
          path: '/agricultural-inputs', 
          label: language === 'vi' ? 'Vật tư nông nghiệp' : language === 'zh' ? '农业物资' : language === 'ko' ? '농업 자재' : language === 'ja' ? '農業資材' : 'Agricultural Inputs' 
        },
        {
          path: '/products/crops-plant-based-products',
          label: language === 'vi' ? 'Nông sản & Sản phẩm từ cây trồng' : language === 'zh' ? '农作物及植物基产品' : language === 'ko' ? '농산물 및 식물성 제품' : language === 'ja' ? '農産物＆植物性製品' : 'Crop & Plant-Based Products',
          hasSub: true,
          subChildren: [
            { path: '/products/fresh-fruits-vegetables', label: language === 'vi' ? 'Trái cây & Nông sản tươi' : language === 'zh' ? '新鲜水果与蔬菜' : language === 'ko' ? '신선 과일 및 채소' : language === 'ja' ? '新鮮な果物＆野菜' : 'Fresh Fruits & Vegetables' },
            { path: '/products/fruit-vegetable-powders', label: language === 'vi' ? 'Bột nông sản & Rau củ' : language === 'zh' ? '果蔬粉' : language === 'ko' ? '과채 순수 분말' : language === 'ja' ? '果菜パウダー' : 'Fruit & Vegetable Powders' },
            { path: '/products/fruit-purees', label: language === 'vi' ? 'Puree & Nước ép trái cây (Fruit Purees, Juices & Concentrates)' : language === 'zh' ? '果浆、浓缩汁与果汁' : language === 'ko' ? '과일 퓨레, 원액 및 농축액' : language === 'ja' ? 'フルーツピューレ・濃縮液・果汁' : 'Fruit Purees, Juices & Concentrates' },
            { path: '/products/freeze-dried-fruits', label: language === 'vi' ? 'Trái cây sấy thăng hoa' : language === 'zh' ? '冻干水果' : language === 'ko' ? '동결건조 과일' : language === 'ja' ? 'フリーズドライフルーツ' : 'Freeze-Dried Fruits' },
            { path: '/products/iqf-fruits-vegetables', label: language === 'vi' ? 'Nông sản cấp đông rời (IQF)' : language === 'zh' ? 'IQF单体速冻农产品' : language === 'ko' ? 'IQF 급속 냉동 과채' : language === 'ja' ? 'IQF 急速冷凍果菜' : 'IQF Frozen Produce' },
          ],
        },
        {
          path: '/products/poultry-products',
          label: language === 'vi' ? 'Sản phẩm gia cầm' : language === 'zh' ? '家禽类产品' : language === 'ko' ? '가금류 제품' : language === 'ja' ? '家禽肉製品' : 'Poultry Products',
          hasSub: false,
        },
        {
          path: '/products/seafood-products',
          label: language === 'vi' ? 'Sản phẩm thủy hải sản' : language === 'zh' ? '水产及海鲜产品' : language === 'ko' ? '수산물 및 해산물' : language === 'ja' ? '水産物＆海鮮製品' : 'Aquaculture & Seafood Products',
          hasSub: true,
          subChildren: [
            { path: '/products/basa-fish-pangasius', label: language === 'vi' ? 'Cá Tra — Pangasius (Basa)' : language === 'zh' ? '巴沙鱼 / 龙利鱼 (Pangasius)' : language === 'ko' ? '바사 피쉬 (Pangasius)' : language === 'ja' ? 'バサ魚 (Pangasius)' : 'Basa Fish — Pangasius' },
            { path: '/products/vietnamese-shrimp', label: language === 'vi' ? 'Tôm Việt Nam' : language === 'zh' ? '越南对虾' : language === 'ko' ? '베트남 새우' : language === 'ja' ? 'ベトナム産エビ' : 'Vietnamese Shrimp' },
            { path: '/products/squid-products', label: language === 'vi' ? 'Mực xuất khẩu' : language === 'zh' ? '出口鱿鱼' : language === 'ko' ? '오징어 및 문어' : language === 'ja' ? '遠洋イカ＆タコ' : 'Squid' },
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
                {language === 'vi' ? 'Trung Tâm Nông Nghiệp Việt Nam' : language === 'zh' ? '越南农业中心' : 'Vietnam Agriculture Center'}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] text-gold-warm uppercase tracking-[0.16em] mt-1 font-semibold transition-colors duration-300 text-center">
                {language === 'vi' ? 'Hội Tụ Tinh Hoa • Kết Nối Thế Giới' : language === 'zh' ? '汇聚精粹 • 链接全球' : 'Embracing Richness • Connecting Worlds'}
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
                    <div className="p-3 flex flex-col gap-1">
                      {link.children?.map((child, cIdx) => (
                        child.hasSub ? (
                          <div key={cIdx} className="relative group/sub">
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `flex items-center justify-between p-2 rounded text-xs font-medium transition-colors ${
                                  isActive
                                    ? 'bg-forest text-cream font-bold'
                                    : 'text-cream/80 hover:text-cream hover:bg-forest/50'
                                }`
                              }
                            >
                              <span>{child.label}</span>
                              <ChevronRight size={14} className="text-gold-warm" />
                            </NavLink>

                            {/* Sub-dropdown menu */}
                            <div className="absolute top-0 left-full ml-1 w-72 bg-carbon/95 backdrop-blur-md border border-gold-warm/20 rounded-md shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 p-2 flex flex-col gap-1">
                              {child.subChildren?.map((subChild, sIdx) => (
                                <NavLink
                                  key={sIdx}
                                  to={subChild.path}
                                  className={({ isActive }) =>
                                    `p-2 rounded text-xs transition-colors ${
                                      isActive
                                        ? 'text-gold-champagne bg-gold-warm/10 font-bold'
                                        : 'text-cream/80 hover:text-cream hover:bg-white/5'
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
                              `block p-2 rounded text-xs font-medium transition-colors ${
                                isActive
                                  ? 'bg-forest text-cream font-bold'
                                  : 'text-cream/80 hover:text-cream hover:bg-forest/50'
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

            {/* Desktop Language Switcher Dropdown */}
            <div className="relative ml-1" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="bg-forest hover:bg-forest-leaf text-cream px-3 py-1.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 border border-forest/20 shadow-sm"
                aria-label="Select Language"
              >
                <Globe size={14} className="text-gold-warm" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-carbon/95 backdrop-blur-md border border-gold-warm/20 rounded-md shadow-2xl py-1 z-50 animate-fade-in">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-sans font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        language === lang.code
                          ? 'text-gold-champagne bg-forest/40 font-bold'
                          : 'text-cream/80 hover:text-cream hover:bg-white/5'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <Check size={14} className="text-gold-warm" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                      {/* Direct link to main Products Overview page */}
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
                          <span>{language === 'vi' ? 'Tổng quan sản phẩm' : language === 'zh' ? '产品总览' : 'Products Overview'}</span>
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

            {/* Mobile Language Switcher Selector Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-warm">
                <Globe size={14} />
                <span>{language === 'vi' ? 'Ngôn ngữ / Language' : language === 'zh' ? '语言 / Language' : 'Language'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`py-2.5 px-3 rounded text-xs font-sans font-bold uppercase tracking-wider transition-all text-center border cursor-pointer flex items-center justify-center gap-1 ${
                      language === lang.code
                        ? 'bg-forest text-gold-champagne border-gold-warm/50 shadow-md font-extrabold'
                        : 'bg-carbon/60 text-cream/70 border-white/10 hover:text-cream hover:bg-carbon'
                    }`}
                  >
                    <span>{lang.shortLabel}</span>
                    {language === lang.code && <Check size={12} className="text-gold-warm" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
