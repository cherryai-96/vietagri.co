import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n';

interface ProductCategoryCardProps {
  title: string;
  image: string;
  descriptions: string[];
  tags: string[];
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  title,
  image,
  descriptions,
  tags,
}) => {
  const { t } = useTranslation();

  const scrollToInquiry = () => {
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // You could optionally pass a parameter via context/state to pre-select category
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-carbon/10 shadow-sm hover:shadow-xl group flex flex-col h-full"
    >
      <div className="relative w-full h-64 overflow-hidden rounded-t-3xl p-2">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-xl font-bold text-cream leading-tight">{title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        {/* Accent line */}
        <div className="absolute top-0 left-6 w-12 h-0.5 bg-gold-warm"></div>

        <div className="flex flex-col gap-4 flex-grow text-carbon/80 text-sm leading-relaxed mb-6">
          {descriptions.map((desc, idx) => {
            const [boldPart, restPart] = desc.includes(':') ? desc.split(':') : [null, desc];
            return (
              <p key={idx}>
                {boldPart && <span className="font-bold text-carbon">{boldPart}:</span>}
                {boldPart ? restPart : desc}
              </p>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest/5 text-forest text-xs font-semibold rounded-full border border-forest/10"
            >
              <Leaf size={12} className="shrink-0" />
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={scrollToInquiry}
          className="w-full bg-cream hover:bg-gold-warm/20 text-carbon border border-carbon/10 hover:border-gold-warm/50 rounded-full py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          {t('products.inquireBtn')}
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
