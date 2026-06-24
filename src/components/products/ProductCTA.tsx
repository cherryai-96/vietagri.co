import React from 'react';
import { useTranslation } from '../../i18n';

export const ProductCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)' }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-warm to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-warm to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-cream mb-6">
          {t('products.ctaHeading')}
        </h2>
        <p className="font-sans font-light text-lg md:text-xl text-cream/80 leading-relaxed mb-12 max-w-2xl">
          {t('products.ctaBody')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#inquiry"
            className="bg-gold-warm hover:bg-gold-champagne text-carbon font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold-warm/20 text-center"
          >
            {t('products.btnConsultation')}
          </a>
          <a 
            href="/contact"
            className="bg-transparent border border-cream/30 hover:border-cream/80 hover:bg-white/5 text-cream font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-center"
          >
            {t('products.btnSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
};
