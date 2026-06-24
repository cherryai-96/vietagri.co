import React from 'react';
import { useTranslation } from '../../i18n';
import { motion } from 'framer-motion';

export const ProductHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595856403070-5bba22934a3e?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/90 via-carbon/80 to-carbon/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col justify-center h-full text-cream py-16 mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('products.heroTitle') }} />
          <p className="font-sans font-light text-lg md:text-xl text-cream/90 leading-relaxed mb-10">
            {t('products.heroSub')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#inquiry"
              className="bg-gold-warm hover:bg-gold-champagne text-carbon font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold-warm/20 text-center flex items-center justify-center"
            >
              {t('products.btnConsultation')}
            </a>
            <a 
              href="#categories"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-center flex items-center justify-center"
            >
              {t('products.btnCategories')}
            </a>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-auto border-t border-white/20 pt-8"
        >
          {['badge1', 'badge2', 'badge3', 'badge4'].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold-warm shrink-0" />
              <span className="font-sans text-sm md:text-sm font-semibold tracking-wide uppercase text-cream/90">{t(`products.${badge}`)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
