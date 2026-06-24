import React from 'react';
import { useTranslation } from '../../i18n';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/products/products-hero.jpg';

export const ProductHero: React.FC = () => {
  const { t } = useTranslation();

  const badges = [
    t('products.badge1'),
    t('products.badge2'),
    t('products.badge3'),
    t('products.badge4'),
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Harvests & Sustainable Inputs"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-carbon/60 bg-gradient-to-r from-carbon/90 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6"
          >
            {t('products.heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-lg text-cream/80 leading-relaxed mb-8"
          >
            {t('products.heroSub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('inquiry')}
              className="bg-gold-warm text-carbon px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
            >
              {t('products.btnConsultation')}
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="bg-transparent border border-cream text-cream px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-cream/10 transition-all duration-300 backdrop-blur-sm"
            >
              {t('products.btnCategories')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-cream/90">
                <CheckCircle size={16} className="text-gold-champagne shrink-0" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
