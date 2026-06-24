import React from 'react';
import { useTranslation } from '../../i18n';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCategoryProps {
  id: string;
  image: string;
  titleKey: string;
  descKeys: string[];
  tags: string[];
  reversed?: boolean;
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({
  id,
  image,
  titleKey,
  descKeys,
  tags,
  reversed = false,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 ${reversed ? '' : ''}`}
    >
      {/* Image */}
      <div className={`relative h-72 lg:h-auto min-h-[320px] overflow-hidden group ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/20 to-transparent" />
        {/* Tags overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="w-12 h-1 bg-gold-warm" />

        <h3 className="font-serif font-bold text-2xl md:text-3xl text-forest leading-tight">
          {t(titleKey)}
        </h3>

        <div className="flex flex-col gap-4">
          {descKeys.map((descKey, idx) => (
            <p key={idx} className="font-sans font-light text-carbon/75 text-sm md:text-base leading-relaxed">
              {t(descKey)}
            </p>
          ))}
        </div>

        <a
          href="#inquiry"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-forest hover:text-gold-antique transition-colors mt-2 group self-start"
        >
          <span>{t('products.inquireBtn')}</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};
