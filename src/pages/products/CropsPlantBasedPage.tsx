import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';
import { getProductsByCategory, getCategoryInfo, type ProductItem } from '../../data/products';
import { ProductInquiryForm } from '../../components/products/ProductInquiryForm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle,
  FileText,
  Search,
  X,
  Info,
  Leaf,
  Layers,
  Droplets,
  Flame,
  Snowflake
} from 'lucide-react';

export const CropsPlantBasedPage: React.FC = () => {
  const { language } = useTranslation();

  // Fetch all 66 plant-based products across the 5 sub-categories
  const allProducts = getProductsByCategory('crops-plant-based');
  const catInfo = getCategoryInfo('crops-plant-based')!;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Sub-category tab mapping
  const subCategoryTabs = [
    { id: 'all', labelVi: 'Tất Cả Sản Phẩm', labelZh: '全部产品', labelEn: 'All Products', count: allProducts.length },
    { id: 'fresh', labelVi: 'Trái Cây & Rau Củ Tươi', labelZh: '新鲜水果与蔬菜', labelEn: 'Fresh Fruits & Vegetables', count: allProducts.filter(p => p.category === 'fresh').length },
    { id: 'powders', labelVi: 'Bột Trái Cây & Rau Củ', labelZh: '果蔬纯粉系列', labelEn: 'Fruit & Vegetable Powders', count: allProducts.filter(p => p.category === 'powders').length },
    { id: 'purees', labelVi: 'Puree, Nước Ép & Đậm Đặc', labelZh: '果浆、浓缩汁与原汁', labelEn: 'Fruit Purees, Juices & Concentrates', count: allProducts.filter(p => p.category === 'purees').length },
    { id: 'freeze-dried', labelVi: 'Trái Cây Sấy Thăng Hoa', labelZh: '冻干水果', labelEn: 'Freeze-Dried Fruits', count: allProducts.filter(p => p.category === 'freeze-dried').length },
    { id: 'iqf', labelVi: 'Nông Sản Cấp Đông IQF', labelZh: 'IQF 速冻果蔬', labelEn: 'IQF Fruits & Vegetables', count: allProducts.filter(p => p.category === 'iqf').length },
  ];

  // Filter products by search query and subcategory
  const filteredProducts = allProducts.filter(p => {
    const nameMatch =
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()));

    const subMatch = selectedSubCategory === 'all' || p.category === selectedSubCategory;
    return nameMatch && subMatch;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon">
      <Helmet>
        <title>
          {language === 'vi'
            ? 'Nông Sản & Sản Phẩm Từ Cây Trồng | Vietnam Agriculture Center'
            : language === 'zh'
            ? '农产品与植物基产品 | 越南农业中心'
            : 'Crops & Plant-Based Products | Vietnam Agriculture Center'}
        </title>
        <meta
          name="description"
          content={
            language === 'vi'
              ? 'Khám phá danh mục nông sản tươi, bột trái cây & rau củ, puree, trái cây sấy thăng hoa và sản phẩm cấp đông IQF của VAC phục vụ cung ứng B2B quốc tế.'
              : language === 'zh'
              ? '探索 VAC 鲜果蔬菜、水果及蔬菜粉、果泥、冻干水果及 IQF 速冻产品，满足国际 B2B 采购需求。'
              : 'Explore VAC’s fresh fruits and vegetables, fruit and vegetable powders, purees, freeze-dried fruits and IQF products for international B2B sourcing.'
          }
        />
      </Helmet>

      {/* === 1. HERO SECTION === */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-carbon text-cream overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
          <img
            src={catInfo.heroImage}
            alt="VAC Crops & Plant-Based Products Portfolio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/60 to-carbon z-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gold-warm/80 mb-6 uppercase tracking-wider font-semibold">
            <Link to="/" className="hover:text-gold-champagne transition-colors">
              {language === 'vi' ? 'Trang chủ' : language === 'zh' ? '首页' : 'Home'}
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gold-champagne transition-colors">
              {language === 'vi' ? 'Sản phẩm' : language === 'zh' ? '产品中心' : 'Products'}
            </Link>
            <ChevronRight size={14} />
            <span className="text-cream font-bold">
              {language === 'vi' ? catInfo.titleVi : language === 'zh' ? (catInfo.titleZh || catInfo.titleEn) : catInfo.titleEn}
            </span>
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
                  {language === 'vi'
                    ? 'HỆ SINH THÁI NÔNG SẢN & THỰC VẬT'
                    : language === 'zh'
                    ? '农产品与植物基生态系统'
                    : 'CROPS & PLANT-BASED ECOSYSTEM'}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  {language === 'vi' ? catInfo.titleVi : language === 'zh' ? (catInfo.titleZh || catInfo.titleEn) : catInfo.titleEn}
                </h1>
                <p className="text-lg md:text-xl text-gold-champagne font-medium mt-3">
                  {language === 'vi' ? catInfo.subtitleVi : language === 'zh' ? (catInfo.subtitleZh || catInfo.subtitleEn) : catInfo.subtitleEn}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm md:text-base text-cream/80 leading-relaxed font-light text-justify max-w-3xl"
              >
                {language === 'vi' ? catInfo.descriptionVi : language === 'zh' ? (catInfo.descriptionZh || catInfo.descriptionEn) : catInfo.descriptionEn}
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
                  <span>{language === 'vi' ? 'Tải Catalogue 2026 (PDF)' : language === 'zh' ? '下载 2026 产品目录 (PDF)' : 'Download Catalogue 2026'}</span>
                </a>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-white/10 hover:bg-white/20 border border-gold-warm/40 text-cream px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'vi' ? 'Xem Danh Mục 66 Sản Phẩm' : language === 'zh' ? '查看全系列 66 款产品' : 'Explore 66 Products'}</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-4 bg-carbon-light/90 border border-gold-warm/25 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <h3 className="font-serif text-lg font-bold text-cream mb-4 flex items-center gap-2 border-b border-gold-warm/20 pb-3">
                <FileText size={18} className="text-gold-warm" />
                <span>{language === 'vi' ? 'Thông Số Tiêu Chuẩn Nông Sản' : language === 'zh' ? '农产品标准技术规格' : 'Crops Portfolio Standard'}</span>
              </h3>
              <div className="flex flex-col gap-4 text-xs md:text-sm">
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? '5 Định dạng chế biến:' : language === 'zh' ? '5大加工形态：' : '5 Core Formats:'}</span>
                  <span className="text-cream/90 font-light">
                    {(language === 'vi' ? catInfo.availableCutsVi : language === 'zh' ? (catInfo.availableCutsZh || catInfo.availableCutsEn) : catInfo.availableCutsEn).join(' • ')}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Đóng gói chuẩn B2B xuất khẩu:' : language === 'zh' ? '出口 B2B 标准包装：' : 'Export B2B Packaging:'}</span>
                  <span className="text-cream/90 font-light">
                    {language === 'vi' ? catInfo.defaultPackagingVi : language === 'zh' ? (catInfo.defaultPackagingZh || catInfo.defaultPackagingEn) : catInfo.defaultPackagingEn}
                  </span>
                </div>
                <div>
                  <span className="text-gold-warm font-semibold uppercase text-[11px] block">{language === 'vi' ? 'Bảo quản & Kiểm soát chất lượng:' : language === 'zh' ? '储存与质量控制：' : 'Storage & Quality Control:'}</span>
                  <span className="text-cream/90 font-light">
                    {language === 'vi' ? catInfo.storageVi : language === 'zh' ? (catInfo.storageZh || catInfo.storageEn) : catInfo.storageEn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. FORMAT HIGHLIGHTS & ADVANTAGES === */}
      <section className="py-12 bg-ivory border-b border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(language === 'vi' ? catInfo.highlightsVi : language === 'zh' ? (catInfo.highlightsZh || catInfo.highlightsEn) : catInfo.highlightsEn).map((h, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gold-warm/15 shadow-sm flex items-start gap-3">
                <CheckCircle className="text-forest-fresh shrink-0 mt-0.5" size={20} />
                <span className="text-xs md:text-sm text-carbon/90 font-medium leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 3. 5 SUB-CATEGORY FOCUS CARDS === */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              {language === 'vi' ? 'HỆ SINH THÁI 5 ĐỊNH DẠNG SẢN PHẨM' : language === 'zh' ? '5大核心产品规格生态' : '5 CORE PRODUCT FORMATS'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-carbon">
              {language === 'vi'
                ? 'Đáp Ứng Mọi Nhu Cầu Cung Ứng Nông Sản B2B'
                : language === 'zh'
                ? '满足全球 B2B 农产品采购全方位需求'
                : 'Meeting Every International B2B Sourcing Need'}
            </h2>
            <p className="text-base text-carbon/75 font-light leading-relaxed">
              {language === 'vi'
                ? 'Từ nông sản tươi nguyên bản đến các định dạng chế biến sâu giá trị gia tăng, VAC cung cấp giải pháp toàn diện cho nhà nhập khẩu, chuỗi bán lẻ và nhà máy sản xuất công nghiệp.'
                : language === 'zh'
                ? '从原产地新鲜农产品到高附加值深加工规格，VAC 为进口商、零售连锁及食品工业化工厂提供全链条采购解决方案。'
                : 'From fresh produce to value-added processed formats, VAC provides end-to-end sourcing solutions for importers, retailers, and food manufacturers.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                id: 'fresh',
                num: '01',
                titleVi: 'Trái Cây & Rau Củ Tươi',
                titleZh: '新鲜水果与蔬菜',
                titleEn: 'Fresh Fruits & Vegetables',
                link: '/products/fresh-fruits-vegetables',
                img: '/images/products/categories/cat_fresh.png',
                icon: Leaf,
                count: 22,
                descVi: 'Nông sản tươi đạt chuẩn VietGAP/GlobalG.A.P, xử lý VHT & chuỗi lạnh liên tục',
                descZh: '符合 VietGAP/GlobalG.A.P 认证，VHT蒸汽热处理与全程冷链保障',
                descEn: 'VietGAP/GlobalG.A.P fresh produce, VHT hot water treatment & continuous cold chain'
              },
              {
                id: 'powders',
                num: '02',
                titleVi: 'Bột Trái Cây & Rau Củ',
                titleEn: 'Fruit & Veg Powders',
                titleZh: '果蔬纯粉系列',
                link: '/products/fruit-vegetable-powders',
                img: '/images/products/powders/powders_fruit.png',
                icon: Layers,
                count: 16,
                descVi: 'Bột sấy thăng hoa & chiết xuất hòa tan 100% độ mịn 80-100 mesh cho F&B',
                descZh: '冻干粉与100%速溶萃取粉，细度 80-100 mesh，专供食品饮料工业',
                descEn: 'Freeze-dried powders & 100% soluble extracts, 80-100 mesh fineness for F&B'
              },
              {
                id: 'purees',
                num: '03',
                titleVi: 'Puree, Nước Ép & Đậm Đặc',
                titleZh: '果浆、浓缩汁与原汁',
                titleEn: 'Fruit Purees, Juices & Concentrates',
                link: '/products/fruit-purees',
                img: '/images/products/categories/cat_purees.png',
                icon: Droplets,
                count: 16,
                descVi: 'Puree xay nhuyễn vô trùng Aseptic & nước ép đậm đặc Brix chuẩn hóa',
                descZh: '无菌袋装果浆 (Aseptic Puree) 与标准 Brix 糖度浓缩汁',
                descEn: 'Aseptic purees & standardized Brix concentrated juices'
              },
              {
                id: 'freeze-dried',
                num: '04',
                titleVi: 'Sấy Thăng Hoa',
                titleZh: '冻干水果产品',
                titleEn: 'Freeze-Dried Fruits',
                link: '/products/freeze-dried-fruits',
                img: '/images/products/categories/cat_freeze_dried.png',
                icon: Flame,
                count: 6,
                descVi: 'Bảo tồn 98% dinh dưỡng, giòn xốp tự nhiên, độ ẩm < 5% bảo quản nhiệt độ phòng',
                descZh: '保留98%营养与原味，天然酥脆，水分 < 5%，常温长期保存',
                descEn: 'Preserves 98% nutrients, natural crispy texture, moisture < 5%'
              },
              {
                id: 'iqf',
                num: '05',
                titleVi: 'Nông Sản Cấp Đông IQF',
                titleZh: 'IQF 速冻果蔬',
                titleEn: 'IQF Fruits & Vegetables',
                link: '/products/iqf-fruits-vegetables',
                img: '/images/products/iqf/iqf_mango_dice.png',
                icon: Snowflake,
                count: 6,
                descVi: 'Cấp đông rời siêu tốc -35°C, tơi rời 100% định lượng tự động dễ dàng',
                descZh: '-35°C 单体快速冻结，100% 颗粒独立，便于工业定量添加',
                descEn: 'Ultra-fast -35°C individual quick freezing, 100% free-flowing for auto dosing'
              }
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-2xl border border-gold-warm/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-carbon/5 border-b border-gold-warm/15">
                    <img
                      src={cat.img}
                      alt={cat.titleEn}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-carbon/80 backdrop-blur-sm text-gold-warm text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                      {cat.count} SKUs
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-forest mb-2">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-serif text-base font-bold text-carbon group-hover:text-forest transition-colors leading-snug">
                        {language === 'vi' ? cat.titleVi : language === 'zh' ? cat.titleZh : cat.titleEn}
                      </h3>
                      <p className="text-xs text-carbon/70 font-light mt-2 leading-relaxed">
                        {language === 'vi' ? cat.descVi : language === 'zh' ? cat.descZh : cat.descEn}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gold-warm/15">
                      <Link
                        to={cat.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-leaf transition-colors"
                      >
                        <span>{language === 'vi' ? 'Xem Danh Mục Chi Tiết' : language === 'zh' ? '查看子类目详情' : 'Explore Sub-Category'}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 4. MAIN PRODUCTS GRID & SUB-CATEGORY TABS (66 SKUs) === */}
      <section id="portfolio" className="py-20 px-4 md:px-8 bg-cream border-t border-black/5 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-forest">
                {language === 'vi' ? 'TOÀN BỘ SẢN PHẨM (66 SKUs)' : language === 'zh' ? '完整产品系列 (66 SKUs)' : 'COMPLETE PORTFOLIO (66 SKUs)'}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest uppercase mt-1">
                {language === 'vi' ? `Danh Mục Nông Sản & Thực Vật (${filteredProducts.length})` : language === 'zh' ? `农产品与植物原料目录 (${filteredProducts.length})` : `Plant-Based Product Catalogue (${filteredProducts.length})`}
              </h2>

            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-carbon/40" />
              <input
                type="text"
                placeholder={language === 'vi' ? 'Tìm sản phẩm...' : language === 'zh' ? '搜索产品...' : 'Search product...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-gold-warm/30 rounded text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm shadow-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-carbon/40 hover:text-carbon">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Subcategory Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {subCategoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSubCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubCategory === tab.id
                    ? 'bg-forest text-cream shadow-md'
                    : 'bg-white text-carbon/75 hover:bg-forest/10 border border-gold-warm/25 shadow-sm'
                }`}
              >
                {language === 'vi' ? tab.labelVi : language === 'zh' ? (tab.labelZh || tab.labelEn) : tab.labelEn} ({tab.count})
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gold-warm/15 p-8">
              <Info size={40} className="mx-auto text-gold-warm mb-4 opacity-50" />
              <p className="text-base text-carbon/70 font-medium">
                {language === 'vi' ? 'Không tìm thấy sản phẩm phù hợp.' : language === 'zh' ? '未找到符合条件的搜索产品。' : 'No products found matching your search.'}
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
                  className="bg-white rounded-xl border border-gold-warm/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                      {language === 'zh'
                        ? (p.subCategory === 'Fruit Purees' ? '果浆系列' :
                           p.subCategory === 'Natural Juices' ? '原汁系列' :
                           p.subCategory === 'Juice Concentrates' ? '浓缩汁系列' :
                           p.subCategory === 'Fruits' ? '新鲜水果' :
                           p.subCategory === 'Vegetables & Spices' ? '蔬菜与香料' :
                           p.subCategory === 'Halal Chicken' ? '清真鸡肉' :
                           p.subCategory === 'Chicken Cuts' ? '鸡肉分割部位' :
                           (p.subCategory ||
                            (p.category === 'fresh' ? '生鲜农产品' :
                             p.category === 'powders' ? '果蔬纯粉' :
                             p.category === 'purees' ? '果浆与浓缩汁' :
                             p.category === 'freeze-dried' ? '冻干系列' : 'IQF 速冻')))
                        : (p.subCategory || (
                          p.category === 'fresh' ? 'Fresh Produce' :
                          p.category === 'powders' ? 'Plant Powders' :
                          p.category === 'purees' ? 'Purees & Concentrates' :
                          p.category === 'freeze-dried' ? 'Freeze-Dried' : 'IQF Frozen'
                        ))}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base font-bold text-forest group-hover:text-gold-warm transition-colors leading-snug">
                        {language === 'vi' ? p.nameVi : language === 'zh' ? (p.nameZh || p.nameEn) : p.nameEn}
                      </h3>
                      {p.scientificName && (
                        <p className="text-[11px] text-carbon/50 italic font-sans mt-0.5">{p.scientificName}</p>
                      )}

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.formats.map((fmt, idx) => {
                          const displayFmt = language === 'zh'
                            ? (fmt === 'Frozen Seedless Puree' ? '冷冻无核果泥' :
                               fmt === 'Aseptic Puree' ? '无菌装果泥' :
                               fmt === 'Smooth Puree (Hass / 034 Variety)' ? '细腻果泥 (Hass/034)' :
                               fmt === 'Pulp Chunk' ? '果肉颗粒' :
                               fmt === 'Seed-in Puree' ? '带籽果泥' :
                               fmt === 'Filtered Seedless Puree' ? '过滤无核果泥' :
                               fmt === 'Raw Single-Strength Juice' ? '原榨单倍浓度汁' :
                               fmt === 'Aseptic Drum Juice' ? '无菌大桶汁' :
                               fmt === 'Single-Strength Juice' ? '原榨单倍汁' :
                               fmt === 'Clear Juice' ? '澄清汁' :
                               fmt === '60-65 Brix Concentrate' ? '60-65 Brix 浓缩汁' :
                               fmt === '50 Brix Concentrate' ? '50 Brix 浓缩汁' :
                               fmt === '28-30 Brix Aseptic Puree' ? '28-30 Brix 无菌果泥' :
                               fmt === 'Aseptic Drum' ? '无菌大桶装' :
                               fmt === 'Whole Fruit' ? '整果' :
                               fmt === 'Fine Powder (80-100 Mesh)' ? '80-100目细粉' :
                               fmt === 'Freeze-Dried Slices / Cubes' ? '冻干切片/切块' :
                               fmt === 'IQF Frozen Produce' ? 'IQF 速冻果蔬' : fmt)
                            : fmt;
                          return (
                            <span key={idx} className="bg-ivory border border-gold-warm/15 text-carbon/80 text-[10px] px-2 py-0.5 rounded font-medium">
                              {displayFmt}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gold-warm/15 flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="w-full mt-2 bg-gold-warm/15 hover:bg-gold-warm text-brown-soil font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-2 border border-gold-warm/30 cursor-pointer"
                      >
                        <span>{language === 'vi' ? 'Xem Thông Số & Mẫu Thử' : language === 'zh' ? '查看规格与样品' : 'View Spec & Quote'}</span>
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

      {/* === 5. BUYER INQUIRY FORM SECTION === */}
      <section id="inquiry" className="py-20 md:py-28 bg-carbon text-cream border-t border-gold-warm/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductInquiryForm />
        </div>
      </section>

      {/* === PRODUCT SPEC MODAL POPUP === */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white text-carbon rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gold-warm/30 p-6 md:p-8 relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-carbon/50 hover:text-carbon p-1 rounded-full hover:bg-carbon/5 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/2 h-48 rounded-xl overflow-hidden bg-carbon/5 shrink-0 border border-gold-warm/20">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-forest bg-forest/10 px-2.5 py-1 rounded w-fit">
                      {selectedProduct.subCategory || selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-forest">
                      {language === 'vi' ? selectedProduct.nameVi : language === 'zh' ? (selectedProduct.nameZh || selectedProduct.nameEn) : selectedProduct.nameEn}
                    </h3>
                    {selectedProduct.scientificName && (
                      <p className="text-xs italic text-carbon/60">{selectedProduct.scientificName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-ivory p-4 rounded-xl border border-gold-warm/15">
                  <div>
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Điều kiện lưu trữ:' : language === 'zh' ? '储存条件:' : 'Storage:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.storage}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-gold-warm font-bold uppercase block">{language === 'vi' ? 'Đóng gói tiêu chuẩn:' : language === 'zh' ? '标准包装:' : 'Packaging:'}</span>
                    <span className="font-medium text-carbon">{selectedProduct.specifications.packaging}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Dạng cắt & Quy cách sẵn có:' : language === 'zh' ? '切割规格与形态:' : 'Available Formats & Cuts:'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.formats.map((f, i) => (
                      <span key={i} className="bg-cream border border-gold-warm/30 text-carbon font-semibold text-xs px-3 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-forest mb-2 uppercase text-xs tracking-wider">{language === 'vi' ? 'Ứng dụng thương mại:' : language === 'zh' ? '商业应用领域:' : 'Commercial Applications:'}</h4>
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
                    className="px-4 py-2 border border-carbon/20 rounded text-xs font-bold text-carbon hover:bg-carbon/5 cursor-pointer"
                  >
                    {language === 'vi' ? 'Đóng' : language === 'zh' ? '关闭' : 'Close'}
                  </button>
                  <a
                    href="#inquiry"
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-2 bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs uppercase tracking-wider rounded shadow transition-all cursor-pointer"
                  >
                    {language === 'vi' ? 'Gửi Yêu Cầu Báo Giá' : language === 'zh' ? '提交询价单' : 'Request Quote'}
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
