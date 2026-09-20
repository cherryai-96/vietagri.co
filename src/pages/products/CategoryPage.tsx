import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';
import { getCategoryInfo, getProductsByCategory, type ProductItem } from '../../data/products';
import { translateSubCategory, translateFormat, translateShelfLife } from '../../utils/i18nHelpers';
import { ProductInquiryForm } from '../../components/products/ProductInquiryForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ArrowRight,
  CheckCircle,
  FileText,
  Sparkles,
  Search,
  X,
  ChevronRight,
  Info
} from 'lucide-react';

const getCatTitle = (c: any, lang: string) => {
  if (lang === 'vi') return c.titleVi;
  if (lang === 'zh') return c.titleZh || c.titleEn;
  if (lang === 'ko') return c.titleKo || c.titleEn;
  if (lang === 'ja') return c.titleJa || c.titleEn;
  return c.titleEn;
};

const getCatSubtitle = (c: any, lang: string) => {
  if (lang === 'vi') return c.subtitleVi;
  if (lang === 'zh') return c.subtitleZh || c.subtitleEn;
  if (lang === 'ko') return c.subtitleKo || c.subtitleEn;
  if (lang === 'ja') return c.subtitleJa || c.subtitleEn;
  return c.subtitleEn;
};

const getCatDesc = (c: any, lang: string) => {
  if (lang === 'vi') return c.descriptionVi;
  if (lang === 'zh') return c.descriptionZh || c.descriptionEn;
  if (lang === 'ko') return c.descriptionKo || c.descriptionEn;
  if (lang === 'ja') return c.descriptionJa || c.descriptionEn;
  return c.descriptionEn;
};

const getCatHighlights = (c: any, lang: string): string[] => {
  if (lang === 'vi') return c.highlightsVi;
  if (lang === 'zh') return c.highlightsZh || c.highlightsEn;
  if (lang === 'ko') return c.highlightsKo || c.highlightsEn;
  if (lang === 'ja') return c.highlightsJa || c.highlightsEn;
  return c.highlightsEn;
};

const getCatCuts = (c: any, lang: string): string[] => {
  if (lang === 'vi') return c.availableCutsVi;
  if (lang === 'zh') return c.availableCutsZh || c.availableCutsEn;
  if (lang === 'ko') return c.availableCutsKo || c.availableCutsEn;
  if (lang === 'ja') return c.availableCutsJa || c.availableCutsEn;
  return c.availableCutsEn;
};

const getCatPkg = (c: any, lang: string) => {
  if (lang === 'vi') return c.defaultPackagingVi;
  if (lang === 'zh') return c.defaultPackagingZh || c.defaultPackagingEn;
  if (lang === 'ko') return c.defaultPackagingKo || c.defaultPackagingEn;
  if (lang === 'ja') return c.defaultPackagingJa || c.defaultPackagingEn;
  return c.defaultPackagingEn;
};

const getCatStorage = (c: any, lang: string) => {
  if (lang === 'vi') return c.storageVi;
  if (lang === 'zh') return c.storageZh || c.storageEn;
  if (lang === 'ko') return c.storageKo || c.storageEn;
  if (lang === 'ja') return c.storageJa || c.storageEn;
  return c.storageEn;
};

const getProductName = (p: any, lang: string) => {
  if (lang === 'vi') return p.nameVi;
  if (lang === 'zh') return p.nameZh || p.nameEn;
  if (lang === 'ko') return p.nameKo || p.nameEn;
  if (lang === 'ja') return p.nameJa || p.nameEn;
  return p.nameEn;
};

interface CategoryPageProps {
  categoryKey?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categoryKey: propCategoryKey }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { language } = useTranslation();

  const activeCategoryKey = propCategoryKey || (categorySlug ? categorySlug.replace('/products/', '') : 'fresh');
  const catInfo = getCategoryInfo(activeCategoryKey) || getCategoryInfo('fresh')!;
  const products = getProductsByCategory(catInfo.id);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Subcategories for filtering (excluding any value-added tabs)
  const subCategories = Array.from(new Set(products.map(p => p.subCategory).filter((s): s is string => Boolean(s) && typeof s === 'string' && !s.toLowerCase().includes('value-added'))));

  const filteredProducts = products.filter(p => {
    const nameMatch =
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.nameZh && p.nameZh.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.nameKo && p.nameKo.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.nameJa && p.nameJa.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()));

    const subMatch = selectedSubCategory === 'all' || p.subCategory === selectedSubCategory;
    return nameMatch && subMatch;
  });

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon">
      <Helmet>
        <title>{`${getCatTitle(catInfo, language)} | Vietnam Agriculture Center`}</title>
        <meta
          name="description"
          content={getCatDesc(catInfo, language)}
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-carbon text-cream overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
          <img
            src={catInfo.heroImage}
            alt={catInfo.titleEn}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/60 to-carbon z-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gold-warm/80 mb-6 uppercase tracking-wider font-semibold">
            <Link to="/" className="hover:text-gold-champagne transition-colors">{language === 'vi' ? 'Trang chủ' : language === 'zh' ? '首页' : language === 'ko' ? '홈' : language === 'ja' ? 'ホーム' : 'Home'}</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gold-champagne transition-colors">{language === 'vi' ? 'Sản phẩm' : language === 'zh' ? '产品中心' : language === 'ko' ? '제품 안내' : language === 'ja' ? '取扱製品' : 'Products'}</Link>
            <ChevronRight size={14} />
            <span className="text-cream font-bold">{getCatTitle(catInfo, language)}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-warm/15 border border-gold-warm/30 text-gold-warm text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles size={14} />
                  {language === 'vi' ? 'Định Dạng Chế Biến Chuyên Sâu' : language === 'zh' ? '专业加工规格' : language === 'ko' ? '전문 가공 규격' : language === 'ja' ? '専門加工規格' : 'Specialized Processing Format'}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  {getCatTitle(catInfo, language)}
                </h1>
                <p className="text-lg md:text-xl text-gold-champagne font-medium mt-3">
                  {getCatSubtitle(catInfo, language)}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm md:text-base text-cream/80 leading-relaxed font-light text-justify"
              >
                {getCatDesc(catInfo, language)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href={`/catalogues/${catInfo.catalogueFileName}`}
                  download={catInfo.catalogueFileName}
                  className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2 group hover:scale-[1.02]"
                >
                  <Download size={16} />
                  <span>{language === 'vi' ? 'Tải Catalogue 2026 (PDF)' : language === 'zh' ? '下载 2026 产品目录 (PDF)' : language === 'ko' ? '카탈로그 2026 다운로드 (PDF)' : language === 'ja' ? 'カタログ 2026 ダウンロード (PDF)' : 'Download Format Catalogue'}</span>
                </a>
                <a
                  href="#inquiry"
                  className="border border-gold-warm/40 hover:border-gold-champagne hover:bg-gold-warm/10 text-cream px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <span>{language === 'vi' ? 'Yêu Cầu Báo Giá & Mẫu Thử' : language === 'zh' ? '索取报价与样品' : language === 'ko' ? '견적 및 샘플 요청' : language === 'ja' ? 'お見積り・サンプル請求' : 'Request Quote & Samples'}</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-4 bg-carbon-light/90 border border-gold-warm/25 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <h3 className="font-serif text-lg font-bold text-cream mb-4 flex items-center gap-2 border-b border-gold-warm/20 pb-3">
                <FileText size={18} className="text-gold-warm" />
                <span>{language === 'vi' ? 'Thông Số Định Dạng Cốt Lõi' : language === 'zh' ? '核心加工规格标准' : language === 'ko' ? '핵심 가공 규격 표준' : language === 'ja' ? '核心加工規格標準' : 'Format Technical Standard'}</span>
              </h3>
              <div className="flex flex-col gap-4 text-xs md:text-sm">
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Quy cách dạng cắt:' : language === 'zh' ? '可用加工形态与切割规格：' : language === 'ko' ? '절단 형태 및 규격:' : language === 'ja' ? '加工形態および規格:' : 'Available Formats & Cuts:'}</span>
                  <span className="text-cream/90 font-light">
                    {getCatCuts(catInfo, language).join(' • ')}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Đóng gói chuẩn xuất khẩu:' : language === 'zh' ? '默认出口标准包装：' : language === 'ko' ? '수출 표준 포장:' : language === 'ja' ? '標準輸出用包装:' : 'Default Export Packaging:'}</span>
                  <span className="text-cream/90 font-light">
                    {getCatPkg(catInfo, language)}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Điều kiện bảo quản:' : language === 'zh' ? '储存与保鲜条件：' : language === 'ko' ? '보관 및 보존 조건:' : language === 'ja' ? '保管・保全条件:' : 'Storage & Preservation:'}</span>
                  <span className="text-cream/90 font-light">
                    {getCatStorage(catInfo, language)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FORMAT HIGHLIGHTS & ADVANTAGES === */}
      <section className="py-12 bg-ivory border-b border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCatHighlights(catInfo, language).map((h: string, i: number) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gold-warm/15 shadow-sm flex items-start gap-3">
                <CheckCircle className="text-forest-fresh shrink-0 mt-0.5" size={20} />
                <span className="text-xs md:text-sm text-carbon/90 font-medium leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRODUCTS GRID & FILTER === */}
      <section className="py-20 px-4 md:px-8 bg-cream flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest uppercase">
                {language === 'vi' ? `Danh Mục Sản Phẩm (${filteredProducts.length})` : language === 'zh' ? `产品系列 (${filteredProducts.length})` : language === 'ko' ? `제품 포트폴리오 (${filteredProducts.length})` : language === 'ja' ? `製品ポートフォリオ (${filteredProducts.length})` : `Product Portfolio (${filteredProducts.length})`}
              </h2>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Search input */}
              <div className="relative flex-grow md:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-carbon/40" />
                <input
                  type="text"
                  placeholder={language === 'vi' ? 'Tìm nông sản...' : language === 'zh' ? '搜索农产品...' : language === 'ko' ? '농산물 검색...' : language === 'ja' ? '製品を検索...' : 'Search product...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-gold-warm/30 rounded text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-carbon/40 hover:text-carbon">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Subcategory Pill Tabs for quick switching */}
              {subCategories.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedSubCategory('all')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedSubCategory === 'all'
                        ? 'bg-forest text-cream shadow-sm'
                        : 'bg-white text-carbon/75 hover:bg-forest/10 border border-gold-warm/25'
                    }`}
                  >
                    {language === 'vi' ? `Tất cả (${products.length})` : language === 'zh' ? `全部 (${products.length})` : `All (${products.length})`}
                  </button>
                  {subCategories.map((sub) => {
                    const count = products.filter(p => p.subCategory === sub).length;
                    const displaySubName = translateSubCategory(sub, language);
                    return (
                      <button
                        key={sub}
                        onClick={() => setSelectedSubCategory(sub)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          selectedSubCategory === sub
                            ? 'bg-forest text-cream shadow-sm'
                            : 'bg-white text-carbon/75 hover:bg-forest/10 border border-gold-warm/25'
                        }`}
                      >
                        {displaySubName} ({count})
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gold-warm/15 p-8">
              <Info size={40} className="mx-auto text-gold-warm mb-4 opacity-50" />
              <p className="text-base text-carbon/70 font-medium">
                {language === 'vi' ? 'Không tìm thấy sản phẩm phù hợp.' : language === 'zh' ? '未找到符合搜索条件的产品。' : 'No products found matching your search.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl border border-gold-warm/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 w-full bg-ivory/40 border-b border-gold-warm/15 overflow-hidden flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.nameEn}
                      className="w-full h-full object-cover object-center scale-100 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-carbon/80 backdrop-blur-sm text-gold-warm text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {translateSubCategory(p.subCategory, language, getCatTitle(catInfo, language))}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base font-bold text-forest group-hover:text-gold-warm transition-colors leading-snug">
                        {getProductName(p, language)}
                      </h3>
                      {p.scientificName && (
                        <p className="text-[11px] text-carbon/50 italic font-sans mt-0.5">{p.scientificName}</p>
                      )}

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.formats.map((fmt, idx) => (
                          <span key={idx} className="bg-ivory border border-gold-warm/15 text-carbon/80 text-[10px] px-2 py-0.5 rounded font-medium">
                            {translateFormat(fmt, language)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gold-warm/15 flex flex-col gap-2">
                      <div className="flex justify-between text-[11px] text-carbon/70">
                        <span>{language === 'vi' ? 'Hạn bảo quản:' : language === 'zh' ? '保质期：' : language === 'ko' ? '유통기한:' : language === 'ja' ? '賞味・保存期間:' : 'Shelf Life:'}</span>
                        <span className="font-semibold text-forest">{translateShelfLife(p.specifications.shelfLife, language)}</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="w-full mt-2 bg-cream hover:bg-gold-warm hover:text-brown-soil border border-gold-warm/30 text-forest text-xs font-bold uppercase tracking-wider py-2 rounded transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <span>{language === 'vi' ? 'Xem Thông Số & Báo Giá' : language === 'zh' ? '查看规格与报价' : language === 'ko' ? '사양 및 견적 보기' : language === 'ja' ? '仕様・見積を見る' : 'View Spec & Quote'}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* === INQUIRY FORM SECTION === */}
      <section id="inquiry" className="py-20 px-4 md:px-8 bg-carbon-light/30 border-t border-gold-warm/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold-warm text-xs font-bold uppercase tracking-widest">{language === 'vi' ? 'Tư Vấn B2B Trực Tiếp' : language === 'zh' ? 'B2B 采购直接咨询' : language === 'ko' ? '직접 B2B 조달 문의' : language === 'ja' ? '直接 B2B 調達相談' : 'Direct B2B Sourcing Inquiry'}</span>
            <h2 className="font-serif text-3xl font-bold text-forest uppercase mt-2">
              {language === 'vi' ? `Yêu Cầu Báo Giá & Mẫu Thử — ${catInfo.titleVi}` : language === 'zh' ? `索取报价与样品 — ${catInfo.titleZh || catInfo.titleEn}` : language === 'ko' ? `견적 및 샘플 요청 — ${getCatTitle(catInfo, language)}` : language === 'ja' ? `お見積り・サンプル請求 — ${getCatTitle(catInfo, language)}` : `Request Quotation & Samples — ${catInfo.titleEn}`}
            </h2>
            <p className="text-sm text-carbon/70 font-light mt-2 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Gửi yêu cầu quy cách sản phẩm, số lượng dự kiến và cảng đích. Đội ngũ thương mại VAC sẽ phản hồi bảng báo giá và tài liệu kỹ thuật trong 24h.'
                : language === 'zh'
                ? '请说明您的产品规格需求、预计采购量及目的港。VAC 商务团队将在 24 小时内提供技术规格书与报价。'
                : language === 'ko'
                ? '제품 사양, 예상 물량 및 도착항을 적어주시면 VAC 영업팀이 24시간 이내에 견적 및 기술 사양서를 제공합니다.'
                : language === 'ja'
                ? 'ご希望の製品仕様、予定数量、目的港をご提示ください。VAC営業チームが24時間以内に仕様書とお見積りを提供いたします。'
                : 'Specify your product requirements, volume, and target destination. VAC commercial team will deliver technical specs and FOB/CIF quotes within 24 hours.'}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gold-warm/20">
            <ProductInquiryForm />
          </div>
        </div>
      </section>

      {/* === MODAL PRODUCT SPEC DETAIL === */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gold-warm/30 flex flex-col max-h-[90vh]"
            >
              <div className="bg-carbon text-cream p-5 flex justify-between items-center border-b border-gold-warm/20">
                <div>
                  <span className="text-[10px] text-gold-warm font-bold uppercase tracking-widest">{translateSubCategory(selectedProduct.subCategory, language)}</span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {getProductName(selectedProduct, language)}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 rounded bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex flex-col gap-6 text-sm text-carbon">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-ivory p-4 rounded-xl border border-gold-warm/15">
                  {selectedProduct.specifications.brix && (
                    <div>
                      <span className="text-xs text-gold-warm font-bold uppercase block">Brix:</span>
                      <span className="font-medium text-carbon">{selectedProduct.specifications.brix}</span>
                    </div>
                  )}
                  {selectedProduct.specifications.moisture && (
                    <div>
                      <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Độ ẩm:' : language === 'zh' ? '水分：' : 'Moisture:'}</span>
                      <span className="font-medium text-carbon">{selectedProduct.specifications.moisture}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Điều kiện lưu trữ:' : language === 'zh' ? '储存条件：' : 'Storage:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.storage}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Đóng gói tiêu chuẩn:' : language === 'zh' ? '标准包装：' : 'Packaging:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.packaging}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Dạng cắt & Quy cách sẵn có:' : language === 'zh' ? '可用形态与切割规格：' : 'Available Formats & Cuts:'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.formats.map((f, i) => (
                      <span key={i} className="bg-cream border border-gold-warm/30 text-carbon font-semibold text-xs px-3 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Ứng dụng thương mại:' : language === 'zh' ? '商业应用领域：' : 'Commercial Applications:'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.applications.map((app, i) => (
                      <span key={i} className="bg-forest/10 text-forest font-medium text-xs px-2.5 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-warm/20 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2 border border-carbon/20 rounded text-xs font-bold text-carbon hover:bg-carbon/5"
                  >
                    {language === 'vi' ? 'Đóng' : language === 'zh' ? '关闭' : 'Close'}
                  </button>
                  <a
                    href="#inquiry"
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-2 bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs uppercase tracking-wider rounded shadow transition-all"
                  >
                    {language === 'vi' ? 'Gửi Yêu Cầu Báo Giá' : language === 'zh' ? '发送报价申请' : 'Request Quote'}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
