import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';
import { getCategoryInfo, getProductsByCategory, type ProductItem } from '../../data/products';
import { ProductInquiryForm } from '../../components/products/ProductInquiryForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ArrowRight,
  CheckCircle,
  FileText,
  Sparkles,
  Search,
  Filter,
  X,
  ChevronRight,
  Info
} from 'lucide-react';

interface CategoryPageProps {
  categoryKey?: 'fresh' | 'powders' | 'freeze-dried' | 'iqf';
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

  // Subcategories for filtering
  const subCategories = Array.from(new Set(products.map(p => p.subCategory).filter(Boolean)));

  const filteredProducts = products.filter(p => {
    const nameMatch =
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()));

    const subMatch = selectedSubCategory === 'all' || p.subCategory === selectedSubCategory;
    return nameMatch && subMatch;
  });

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon">
      <Helmet>
        <title>{`${language === 'vi' ? catInfo.titleVi : catInfo.titleEn} | Vietnam Agriculture Center`}</title>
        <meta
          name="description"
          content={language === 'vi' ? catInfo.descriptionVi : catInfo.descriptionEn}
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
            <Link to="/" className="hover:text-gold-champagne transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gold-champagne transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-cream font-bold">{language === 'vi' ? catInfo.titleVi : catInfo.titleEn}</span>
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
                  {language === 'vi' ? 'Định Dạng Chế Biến Chuyên Sâu' : 'Specialized Processing Format'}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  {language === 'vi' ? catInfo.titleVi : catInfo.titleEn}
                </h1>
                <p className="text-lg md:text-xl text-gold-champagne font-medium mt-3">
                  {language === 'vi' ? catInfo.subtitleVi : catInfo.subtitleEn}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm md:text-base text-cream/80 leading-relaxed font-light text-justify"
              >
                {language === 'vi' ? catInfo.descriptionVi : catInfo.descriptionEn}
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
                  <span>{language === 'vi' ? 'Tải Catalogue 2026 (PDF)' : 'Download Format Catalogue'}</span>
                </a>
                <a
                  href="#inquiry"
                  className="border border-gold-warm/40 hover:border-gold-champagne hover:bg-gold-warm/10 text-cream px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <span>{language === 'vi' ? 'Yêu Cầu Báo Giá & Mẫu Thử' : 'Request Quote & Samples'}</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-4 bg-carbon-light/90 border border-gold-warm/25 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <h3 className="font-serif text-lg font-bold text-cream mb-4 flex items-center gap-2 border-b border-gold-warm/20 pb-3">
                <FileText size={18} className="text-gold-warm" />
                <span>{language === 'vi' ? 'Thông Số Định Dạng Cốt Lõi' : 'Format Technical Standard'}</span>
              </h3>
              <div className="flex flex-col gap-4 text-xs md:text-sm">
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Quy cách dạng cắt:' : 'Available Formats & Cuts:'}</span>
                  <span className="text-cream/90 font-light">
                    {(language === 'vi' ? catInfo.availableCutsVi : catInfo.availableCutsEn).join(' • ')}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Đóng gói chuẩn xuất khẩu:' : 'Default Export Packaging:'}</span>
                  <span className="text-cream/90 font-light">
                    {language === 'vi' ? catInfo.defaultPackagingVi : catInfo.defaultPackagingEn}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Điều kiện bảo quản:' : 'Storage & Preservation:'}</span>
                  <span className="text-cream/90 font-light">
                    {language === 'vi' ? catInfo.storageVi : catInfo.storageEn}
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
            {(language === 'vi' ? catInfo.highlightsVi : catInfo.highlightsEn).map((h, i) => (
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
                {language === 'vi' ? `Danh Mục Sản Phẩm (${filteredProducts.length})` : `Product Portfolio (${filteredProducts.length})`}
              </h2>
              <p className="text-xs md:text-sm text-carbon/70 mt-1 font-light">
                {language === 'vi' ? 'Trích xuất chính xác theoCatalogue 2026 chính thức' : 'Extracted directly from Official 2026 Catalogue'}
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Search input */}
              <div className="relative flex-grow md:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-carbon/40" />
                <input
                  type="text"
                  placeholder={language === 'vi' ? 'Tìm nông sản...' : 'Search product...'}
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

              {/* Subcategory dropdown */}
              {subCategories.length > 0 && (
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-gold-warm" />
                  <select
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    className="bg-white border border-gold-warm/30 rounded px-3 py-2 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm cursor-pointer"
                  >
                    <option value="all">{language === 'vi' ? 'Tất cả phân loại' : 'All Sub-categories'}</option>
                    {subCategories.map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gold-warm/15 p-8">
              <Info size={40} className="mx-auto text-gold-warm mb-4 opacity-50" />
              <p className="text-base text-carbon/70 font-medium">
                {language === 'vi' ? 'Không tìm thấy sản phẩm phù hợp.' : 'No products found matching your search.'}
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
                  <div className="relative h-48 w-full bg-carbon/5 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.nameEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-carbon/80 backdrop-blur-sm text-gold-warm text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {p.subCategory || catInfo.titleEn}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base font-bold text-forest group-hover:text-gold-warm transition-colors leading-snug">
                        {language === 'vi' ? p.nameVi : p.nameEn}
                      </h3>
                      {p.scientificName && (
                        <p className="text-[11px] text-carbon/50 italic font-sans mt-0.5">{p.scientificName}</p>
                      )}

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.formats.map((fmt, idx) => (
                          <span key={idx} className="bg-ivory border border-gold-warm/15 text-carbon/80 text-[10px] px-2 py-0.5 rounded font-medium">
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gold-warm/15 flex flex-col gap-2">
                      <div className="flex justify-between text-[11px] text-carbon/70">
                        <span>{language === 'vi' ? 'Hạn bảo quản:' : 'Shelf Life:'}</span>
                        <span className="font-semibold text-forest">{p.specifications.shelfLife}</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="w-full mt-2 bg-cream hover:bg-gold-warm hover:text-brown-soil border border-gold-warm/30 text-forest text-xs font-bold uppercase tracking-wider py-2 rounded transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <span>{language === 'vi' ? 'Xem Thông Số & Báo Giá' : 'View Spec & Quote'}</span>
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
      <section id="inquiry" className="py-20 bg-ivory border-t border-gold-warm/20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold-warm text-xs font-bold uppercase tracking-widest">{language === 'vi' ? 'Tư Vấn B2B Trực Tiếp' : 'Direct B2B Sourcing Inquiry'}</span>
            <h2 className="font-serif text-3xl font-bold text-forest uppercase mt-2">
              {language === 'vi' ? `Yêu Cầu Báo Giá & Mẫu Thử — ${catInfo.titleVi}` : `Request Quotation & Samples — ${catInfo.titleEn}`}
            </h2>
            <p className="text-sm text-carbon/70 font-light mt-2 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Gửi yêu cầu quy cách sản phẩm, số lượng dự kiến và cảng đích. Đội ngũ thương mại VAC sẽ phản hồi bảng báo giá và tài liệu kỹ thuật trong 24h.'
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
                  <span className="text-[10px] text-gold-warm font-bold uppercase tracking-widest">{selectedProduct.subCategory}</span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {language === 'vi' ? selectedProduct.nameVi : selectedProduct.nameEn}
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
                      <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Độ ẩm:' : 'Moisture:'}</span>
                      <span className="font-medium text-carbon">{selectedProduct.specifications.moisture}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Hạn bảo quản:' : 'Shelf Life:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.shelfLife}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Điều kiện lưu trữ:' : 'Storage:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.storage}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Đóng gói tiêu chuẩn:' : 'Packaging:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.packaging}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Dạng cắt & Quy cách sẵn có:' : 'Available Formats & Cuts:'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.formats.map((f, i) => (
                      <span key={i} className="bg-cream border border-gold-warm/30 text-carbon font-semibold text-xs px-3 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Ứng dụng thương mại:' : 'Commercial Applications:'}</h4>
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
                    {language === 'vi' ? 'Đóng' : 'Close'}
                  </button>
                  <a
                    href="#inquiry"
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-2 bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs uppercase tracking-wider rounded shadow transition-all"
                  >
                    {language === 'vi' ? 'Gửi Yêu Cầu Báo Giá' : 'Request Quote'}
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
