import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { CATALOGUES_LIST } from '../data/products';
import { ProductInquiryForm } from '../components/products/ProductInquiryForm';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const Catalogues: React.FC = () => {
  const { language } = useTranslation();

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon">
      <Helmet>
        <title>{language === 'vi' ? 'Trung Tâm Catalogue 2026 | VietAgri.co' : '2026 Product Catalogue Centre | VietAgri.co'}</title>
        <meta
          name="description"
          content={
            language === 'vi'
              ? 'Tải miễn phí 5 Catalogue Nông sản Việt Nam 2026 chính thức: Trái cây tươi, Bột nông sản, Trái cây sấy thăng hoa, Nông sản cấp đông IQF và Tổng tập Harvest Edition.'
              : 'Download official 2026 Vietnamese Agricultural Product Catalogues: Fresh Produce, Fruit Powders, Freeze-Dried Fruits, IQF Frozen Produce, and Complete Harvest Edition.'
          }
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-carbon text-cream overflow-hidden border-b border-gold-warm/20">
        <div className="absolute inset-0 w-full h-full z-0 opacity-35">
          <img
            src="/images/products/IMG_7966.PNG"
            alt="Catalogue Centre"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/90 via-carbon/70 to-carbon z-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-warm/15 border border-gold-warm/30 text-gold-warm text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={14} />
            {language === 'vi' ? 'Tài Liệu Xuất Khẩu Chính Thức 2026' : 'Official 2026 Export Catalogues'}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide max-w-4xl"
          >
            {language === 'vi' ? 'Trung Tâm Tải Catalogue Nông Sản VAC' : 'VAC Product Catalogue Centre'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gold-champagne font-medium max-w-3xl leading-relaxed"
          >
            {language === 'vi'
              ? 'Tải trực tiếp bộ tài liệu kỹ thuật và danh mục 5 bản Catalogue 2026 phục vụ nhà mua hàng, nhà máy chế biến F&B và nhà nhập khẩu quốc tế.'
              : 'Direct download access to all 5 official 2026 product format catalogues for international enterprise buyers, F&B manufacturers, and importers.'}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm text-cream/80 pt-2 font-light">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-gold-warm" /> {language === 'vi' ? 'Tải trực tiếp không cần đăng ký' : 'Instant barrier-free PDF download'}</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-gold-warm" /> {language === 'vi' ? 'Thông số quy cách B2B chuẩn' : 'Full B2B spec sheet coverage'}</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-gold-warm" /> {language === 'vi' ? 'Bản quyền VAC 2026' : 'Official 2026 VAC Edition'}</span>
          </div>
        </div>
      </section>

      {/* Catalogues Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATALOGUES_LIST.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gold-warm/25 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Cover Banner */}
                <div className="relative h-56 w-full bg-carbon overflow-hidden">
                  <img
                    src={cat.coverImage}
                    alt={cat.titleEn}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />

                  <span className="absolute top-4 left-4 bg-gold-warm text-brown-soil font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {cat.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-cream text-xs">
                    <span className="flex items-center gap-1 bg-carbon/80 px-2.5 py-1 rounded backdrop-blur-sm">
                      <FileText size={14} className="text-gold-warm" /> {cat.pageCount} {language === 'vi' ? 'Trang' : 'Pages'}
                    </span>
                    <span className="bg-carbon/80 px-2.5 py-1 rounded backdrop-blur-sm font-semibold text-gold-champagne">
                      {cat.fileSize}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest leading-snug group-hover:text-gold-warm transition-colors">
                      {language === 'vi' ? cat.titleVi : cat.titleEn}
                    </h3>
                    <p className="text-xs md:text-sm text-carbon/70 font-light mt-3 leading-relaxed">
                      {language === 'vi' ? cat.descVi : cat.descEn}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-4 border-t border-gold-warm/15">
                    <a
                      href={cat.downloadUrl}
                      download={cat.fileName}
                      className="w-full bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <Download size={16} />
                      <span>{language === 'vi' ? 'Tải PDF Trực Tiếp' : 'Download PDF Catalogue'}</span>
                    </a>

                    <a
                      href={`https://drive.google.com/file/d/${cat.driveId}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-cream hover:bg-carbon/5 border border-gold-warm/30 text-forest font-semibold text-xs py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <span>{language === 'vi' ? 'Xem Trực Tuyến trên Google Drive' : 'View Online on Google Drive'}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-ivory border-t border-gold-warm/20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold-warm text-xs font-bold uppercase tracking-widest">{language === 'vi' ? 'Liên Hệ Thương Mại' : 'Commercial Support'}</span>
            <h2 className="font-serif text-3xl font-bold text-forest uppercase mt-2">
              {language === 'vi' ? 'Yêu Cầu Tài Liệu Kỹ Thuật Độc Quyền hoặc Báo Giá' : 'Request Custom Technical Specs & Quotation'}
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gold-warm/20">
            <ProductInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
