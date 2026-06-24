import React from 'react';
import { useTranslation } from '../../i18n';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCategoryCardProps {
  id: string;
  image: string;
  titleKey: string;
  descKeys: string[];
  tags: string[];
  isFeatured?: boolean;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  id,
  image,
  titleKey,
  descKeys,
  tags,
  isFeatured = false,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group bg-white/80 rounded-3xl border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col ${isFeatured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-64 md:h-72 overflow-hidden bg-carbon/5 p-2 pb-0">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-6 right-6 flex gap-2 flex-wrap justify-end max-w-[80%]">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 left-8 w-12 h-1 bg-gold-warm transition-all duration-500 group-hover:w-24" />
        
        <h3 className="font-serif font-bold text-2xl md:text-3xl text-carbon mb-6 pt-2 flex items-center gap-3">
          <Leaf className="text-forest shrink-0" size={24} />
          {t(titleKey)}
        </h3>
        
        <div className="flex flex-col gap-4 text-carbon/70 font-light text-sm md:text-base leading-relaxed mb-8 flex-grow">
          {descKeys.map((descKey, idx) => (
            <p key={idx}>{t(descKey)}</p>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-black/5">
          <a 
            href={`#inquiry`}
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-forest group-hover:text-gold-warm transition-colors"
          >
            {t('products.inquireBtn')}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
