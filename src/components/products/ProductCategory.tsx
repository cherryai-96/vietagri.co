import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCategoryProps {
  id: string;
  image?: string;
  images?: string[];
  titleKey?: string;
  titleEn?: string;
  titleVi?: string;
  titleZh?: string;
  titleKo?: string;
  titleJa?: string;
  descKeys?: string[];
  descEn?: string;
  descVi?: string;
  descZh?: string;
  descKo?: string;
  descJa?: string;
  tags?: string[];
  tagsVi?: string[];
  tagsZh?: string[];
  tagsKo?: string[];
  tagsJa?: string[];
  tagsEn?: string[];
  linkPath?: string;
  linkTextEn?: string;
  linkTextVi?: string;
  linkTextZh?: string;
  linkTextKo?: string;
  linkTextJa?: string;
  reversed?: boolean;
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({
  id,
  image,
  images,
  titleKey,
  titleEn,
  titleVi,
  titleZh,
  titleKo,
  titleJa,
  descKeys,
  descEn,
  descVi,
  descZh,
  descKo,
  descJa,
  tags,
  tagsVi,
  tagsZh,
  tagsKo,
  tagsJa,
  tagsEn,
  linkPath,
  linkTextEn,
  linkTextVi,
  linkTextZh,
  linkTextKo,
  linkTextJa,
  reversed = false,
}) => {
  const { t, language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const displayImages = images || (image ? [image] : []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % displayImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + displayImages.length) % displayImages.length);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  const displayTitle = titleEn && titleVi
    ? (language === 'vi' ? titleVi : language === 'zh' ? (titleZh || titleEn) : language === 'ko' ? (titleKo || titleEn) : language === 'ja' ? (titleJa || titleEn) : titleEn)
    : (titleKey ? t(titleKey) : '');

  const displayDesc = descEn && descVi
    ? (language === 'vi' ? descVi : language === 'zh' ? (descZh || descEn) : language === 'ko' ? (descKo || descEn) : language === 'ja' ? (descJa || descEn) : descEn)
    : null;

  const defaultBtnText = language === 'vi' ? 'Xem Chi Tiết Danh Mục' : language === 'zh' ? '查看产品目录' : language === 'ko' ? '제품 카탈로그 보기' : language === 'ja' ? '製品カタログを見る' : 'Explore Category Products';
  const displayBtnText = linkTextEn && linkTextVi
    ? (language === 'vi' ? linkTextVi : language === 'zh' ? (linkTextZh || linkTextEn) : language === 'ko' ? (linkTextKo || linkTextEn) : language === 'ja' ? (linkTextJa || linkTextEn) : linkTextEn)
    : defaultBtnText;

  const displayTags = tagsEn && tagsVi
    ? (language === 'vi' ? tagsVi : language === 'zh' ? (tagsZh || tagsEn) : language === 'ko' ? (tagsKo || tagsEn) : language === 'ja' ? (tagsJa || tagsEn) : tagsEn)
    : (tags || []);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch overflow-hidden rounded-2xl border border-gold-warm/20 bg-white shadow-md hover:shadow-xl transition-all duration-500`}
    >
      {/* Image Gallery Column (6 cols) */}
      <div className={`lg:col-span-6 relative h-80 sm:h-96 lg:h-auto min-h-[360px] overflow-hidden group ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <AnimatePresence mode="wait">
          {displayImages.length > 0 && (
            <motion.img
              key={currentSlide}
              src={displayImages[currentSlide]}
              alt={displayTitle}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (id === 'poultry-products') {
                  target.src = '/images/products/poultry/poultry_halal_whole_chicken.jpeg';
                } else if (id === 'seafood-products') {
                  target.src = '/images/products/seafood/basa_well_trimmed_fillet.jpeg';
                }
              }}
            />
          )}
        </AnimatePresence>
        
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-carbon/40 hover:bg-carbon/70 backdrop-blur-md text-white p-2 rounded-full z-20 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-carbon/40 hover:bg-carbon/70 backdrop-blur-md text-white p-2 rounded-full z-20 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute top-4 right-4 flex gap-1.5 z-20 bg-carbon/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {displayImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? 'bg-gold-warm w-5' : 'bg-white/50 w-2 hover:bg-white'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent z-10" />
        
        {/* Tags overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap z-20">
          {displayTags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/95 backdrop-blur-md text-forest font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md border border-gold-warm/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Column (6 cols) */}
      <div className={`lg:col-span-6 p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-gold-warm rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-warm">
              {language === 'vi' ? 'Tổng Quan Danh Mục' : language === 'zh' ? '产品类目总览' : 'Category Overview'}
            </span>
          </div>

          <h3 className="font-serif font-bold text-2xl md:text-3xl text-forest leading-tight uppercase">
            {displayTitle}
          </h3>

          {displayDesc ? (
            <p className="font-sans font-light text-carbon/80 text-sm md:text-base leading-relaxed text-justify">
              {displayDesc}
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {descKeys?.map((descKey, idx) => (
                <p key={idx} className="font-sans font-light text-carbon/80 text-sm md:text-base leading-relaxed text-justify">
                  {t(descKey)}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-gold-warm/15 flex flex-wrap items-center justify-between gap-4">
          {linkPath ? (
            <Link
              to={linkPath}
              className="inline-flex items-center gap-2 bg-gold-warm hover:bg-gold-champagne text-brown-soil px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer group"
            >
              <span>{displayBtnText}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          ) : (
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-cream px-6 py-3.5 rounded font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer group"
            >
              <span>{t('products.inquireBtn')}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

