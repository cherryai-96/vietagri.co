import React from 'react';
import { useTranslation } from '../../i18n';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const ProductHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-carbon">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <img
          src="/images/products/hero_products.png"
          alt="Premium Harvests and Sustainable Inputs"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/40 to-carbon z-[1] pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-gold-warm) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 w-full text-center flex flex-col items-center gap-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-5"
        >
          <h1 className="font-serif text-balance text-[1.75rem] leading-[1.1] sm:text-[2.25rem] md:text-4xl lg:text-[3rem] font-black tracking-wide text-white max-w-4xl mx-auto drop-shadow-md py-1">
            {t('products.heroTitle')}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-lg max-w-3xl font-medium leading-relaxed drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique"
        >
          {t('products.heroSub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#inquiry"
            className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-4 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/20 flex items-center gap-2 group cursor-pointer hover:scale-[1.03]"
          >
            <span>{t('products.btnConsultation')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a
            href="#part1"
            className="border border-cream/40 hover:border-gold-champagne hover:bg-cream/10 text-cream px-8 py-4 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer hover:scale-[1.03] backdrop-blur-sm"
          >
            {t('products.btnCategories')}
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-8 border-t border-white/15 pt-8 w-full max-w-3xl"
        >
          {['badge1', 'badge2', 'badge3', 'badge4'].map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-warm shrink-0" />
              <span className="font-sans text-xs font-semibold tracking-wide text-cream/80">{t(`products.${badge}`)}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#part1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 flex flex-col items-center gap-2 text-cream/50 hover:text-gold-warm transition-colors cursor-pointer"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
