import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FlaskConical, Droplet, Sparkles, Scale } from 'lucide-react';

export const VietWolffia: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'culinary' | 'beverage' | 'product'>('culinary');

  const galleryItems = [
    {
      src: '/Cuisine pictures/Green Shakshuka.webp',
      title: 'Green Shakshuka with Wolffia',
      category: 'culinary',
      desc: 'Infusing traditional breakfast with high-protein microgreens.'
    },
    {
      src: '/images/w-product1.png',
      title: 'Premium Wolffia Product',
      category: 'product',
      desc: 'High-quality processed Wolffia for everyday nutrition.'
    },
    {
      src: '/Cuisine pictures/Wolffia Shake.webp',
      title: 'Classic Green Energy Shake',
      category: 'beverage',
      desc: 'Blending fresh banana, coconut water, and raw Wolffia.'
    },
    {
      src: '/images/wm-6.webp',
      title: 'Wolffia Garden Salad',
      category: 'culinary',
      desc: 'Fresh greens mixed with nutrient-dense Wolffia dressing.'
    },
    {
      src: '/images/w-product2.png',
      title: 'Wolffia Nutritional Supplement',
      category: 'product',
      desc: 'Pure, food-grade watermeal ready for daily consumption.'
    },
    {
      src: '/images/wm-7.avif',
      title: 'Wolffia Breakfast Bowl',
      category: 'culinary',
      desc: 'Nutritious breakfast packed with plant-based protein.'
    },
    {
      src: '/images/w-product3.png',
      title: 'Viet Wolffia Extract',
      category: 'product',
      desc: 'Concentrated plant-based protein and essential vitamins.'
    },
    {
      src: '/Cuisine pictures/Green Oat Tortilla.webp',
      title: 'Wolffia & Oat Green Tortilla',
      category: 'culinary',
      desc: 'Fiber-rich flatbreads powered by aquatic plant protein.'
    },
    {
      src: '/Cuisine pictures/Wolffia meal.webp',
      title: 'Nutritious Wolffia Meal',
      category: 'culinary',
      desc: 'A complete protein meal featuring fresh Wolffia greens.'
    },
    {
      src: '/images/w-product4.png',
      title: 'Viet Wolffia Fresh Pack',
      category: 'product',
      desc: 'Carefully cultivated and packaged to preserve nutrients.'
    },
    {
      src: '/images/wm-8.avif',
      title: 'Wolffia Avocado Toast',
      category: 'culinary',
      desc: 'A nutritious spread enriched with plant-based protein.'
    },
    {
      src: '/images/wm-9.jpg',
      title: 'Wolffia Cheesecake',
      category: 'culinary',
      desc: 'A delicious dessert with a healthy twist of Wolffia.'
    },
    {
      src: '/images/wm-10.avif',
      title: 'Signature Wolffia Dish',
      category: 'culinary',
      desc: 'Our special recipe highlighting the taste of fresh watermeal.'
    },
    {
      src: '/images/f1.avif',
      title: 'Wolffia Culinary Delight 1',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f2.webp',
      title: 'Wolffia Culinary Delight 2',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f3.jpg',
      title: 'Wolffia Culinary Delight 3',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f4.webp',
      title: 'Wolffia Culinary Delight 4',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f5.jpg',
      title: 'Wolffia Culinary Delight 5',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f6.webp',
      title: 'Wolffia Culinary Delight 6',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f7.webp',
      title: 'Wolffia Culinary Delight 7',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f8.jpg',
      title: 'Wolffia Culinary Delight 8',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f9.jpg',
      title: 'Wolffia Culinary Delight 9',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    },
    {
      src: '/images/f10.png',
      title: 'Wolffia Culinary Delight 10',
      category: 'culinary',
      desc: 'Exploring new flavors with aquatic microgreens.'
    }
  ];

  const filteredGallery = galleryItems.filter(item => item.category === activeCategory);
  if (activeCategory === 'culinary') {
    filteredGallery.reverse();
  }

  const features = [
    {
      icon: <Droplet className="w-8 h-8 text-gold-warm" />,
      title: t('wolffia.feature1Title'),
      desc: t('wolffia.feature1Desc')
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-warm" />,
      title: t('wolffia.feature2Title'),
      desc: t('wolffia.feature2Desc')
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-gold-warm" />,
      title: t('wolffia.feature3Title'),
      desc: t('wolffia.feature3Desc')
    }
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/w-hero-new.jpg')` }}
        />
        <div className="absolute inset-0 bg-carbon/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold-champagne bg-forest/40 border border-gold-warm/20 px-4 py-1.5 rounded-full self-center">
              Flagship Innovation
            </span>
            <h1 className="font-serif text-balance text-[2.75rem] leading-[1.1] sm:text-[3.5rem] md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('wolffia.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('wolffia.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-serif text-balance text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.introTitle') }} /></h2>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('wolffia.introText1')}
            </p>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('wolffia.introText2')}
            </p>
          </div>

          <div className="lg:col-span-5 bg-ivory border border-gold-warm/15 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 bg-gold-warm text-brown-soil font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Official Analysis
            </div>
            <h3 className="font-serif font-bold text-lg text-forest mb-4 self-start flex items-center gap-1.5">
              <Scale size={18} className="text-gold-warm" />
              Nutritional Comparison
            </h3>
            
            <div className="w-full rounded-lg overflow-hidden border border-gold-warm/10 bg-white">
              <img 
                src="/website photo/Nutritional-Profile-680.jpg" 
                alt="Nutritional Profile Chart" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                onClick={() => {
                  window.open('/website photo/Nutritional-Profile-680.jpg', '_blank');
                }}
              />
            </div>
            <p className="text-[10px] text-carbon/50 mt-3 text-center italic leading-relaxed">
              * Click chart to view detailed protein & essential amino acid spectrum (mg/g dry weight).
            </p>
          </div>
        </div>
      </section>

      {/* Precision Agriculture Section */}
      <section className="py-24 bg-cream text-carbon px-4 md:px-8 border-y border-gold-warm/15">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Production Standards
            </span>
            <h2 className="font-serif text-balance text-[2.75rem] leading-[1.1] sm:text-[3.5rem] md:text-6xl lg:text-7xl font-bold tracking-wide text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.cultTitle') }} /></h2>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('wolffia.cultDesc')}
            </p>
          </div>

          <div className="flex flex-col w-full rounded-2xl overflow-hidden shadow-md bg-ivory">
            {features.map((feature, idx) => {
              const featImages = [
                '/images/wss2-1.1.webp',
                '/images/wss2-1.2.png',
                '/images/wss2-1.3.webp'
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group flex flex-col md:flex-row items-center justify-between p-8 md:p-12 border-b border-gold-warm/15 last:border-b-0 hover:bg-forest transition-colors duration-500 cursor-pointer"
                >
                  <div className="w-full md:w-1/3 flex items-center gap-6 mb-6 md:mb-0">
                    <span className="text-2xl md:text-3xl font-serif font-bold text-forest/40 group-hover:text-gold-champagne transition-colors duration-500">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-forest group-hover:text-cream transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <div className="w-full md:w-1/3 flex justify-center relative mb-6 md:mb-0">
                    <div className="w-48 h-32 md:w-56 md:h-36 rounded-xl overflow-hidden shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500 border-2 border-transparent group-hover:border-gold-warm/30">
                      <img src={featImages[idx]} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3 md:pl-8">
                    <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed group-hover:text-cream/90 transition-colors duration-500">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Sectors */}
      <section className="py-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Versatile Outlets
            </span>
            <h2 className="font-serif text-balance text-[2.75rem] leading-[1.1] sm:text-[3.5rem] md:text-6xl lg:text-7xl font-bold tracking-wide text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.appTitle') }} /></h2>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed"><span dangerouslySetInnerHTML={{ __html: t('wolffia.appSub') }} /></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Human Consumption */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ivory border border-gold-warm/15 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all duration-300"
            >
              <div className="h-40 -mt-8 -mx-8 mb-6 overflow-hidden rounded-t-2xl border-b border-gold-warm/15 relative">
                <img src="/images/wss3-1.avif" alt="Human Consumption" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-serif font-bold text-xl text-forest pb-3 border-b border-gold-warm/20"><span dangerouslySetInnerHTML={{ __html: t('wolffia.humanTitle') }} /></h3>
                <p className="text-xs md:text-sm text-carbon/75 font-light leading-relaxed">
                  {t('wolffia.humanDesc')}
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs md:text-sm font-light text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{t('wolffia.humanBullet1')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs md:text-sm font-light text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{t('wolffia.humanBullet2')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animal Nutrition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-ivory border border-gold-warm/15 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all duration-300"
            >
              <div className="h-40 -mt-8 -mx-8 mb-6 overflow-hidden rounded-t-2xl border-b border-gold-warm/15 relative">
                <img src="/images/w-feature1.jpg" alt="Animal Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-serif font-bold text-xl text-forest pb-3 border-b border-gold-warm/20"><span dangerouslySetInnerHTML={{ __html: t('wolffia.feedTitle') }} /></h3>
                <p className="text-xs md:text-sm text-carbon/75 font-light leading-relaxed">
                  {t('wolffia.feedDesc')}
                </p>
                <p className="text-xs md:text-sm text-forest font-semibold italic bg-forest/5 p-3 rounded border border-gold-warm/10">
                  {t('wolffia.feedTarget')}
                </p>
              </div>
            </motion.div>

            {/* R&D Innovation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-ivory border border-gold-warm/15 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all duration-300"
            >
              <div className="h-40 -mt-8 -mx-8 mb-6 overflow-hidden rounded-t-2xl border-b border-gold-warm/15 relative">
                <img src="/images/wss3-3.png" alt="R&D Innovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-serif font-bold text-xl text-forest pb-3 border-b border-gold-warm/20"><span dangerouslySetInnerHTML={{ __html: t('wolffia.rdTitle') }} /></h3>
                <p className="text-xs md:text-sm text-carbon/75 font-light leading-relaxed">
                  {t('wolffia.rdDesc')}
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs md:text-sm font-light text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>Commercial-scale trials for high-value botanical greens.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs md:text-sm font-light text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>Optimized photosynthesis net calibration systems.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culinary & Operations Gallery */}
      <section className="py-24 bg-ivory border-t border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
                Visual Showcase
              </span>
              <h2 className="font-serif text-balance text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-bold text-forest"><span dangerouslySetInnerHTML={{ __html: t('wolffia.galleryTitle') }} /></h2>
            </div>
            
            {/* Category Selectors */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-forest shrink-0">
              {(['culinary', 'beverage', 'product'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer capitalize ${
                    activeCategory === cat
                      ? 'bg-forest text-cream border-gold-warm shadow-sm'
                      : 'bg-cream text-forest border-gold-warm/15 hover:border-gold-warm/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Dynamic Rows Horizontal Slider */}
          <div className={`grid ${filteredGallery.length > 4 ? 'grid-rows-2' : 'grid-rows-1'} grid-flow-col auto-cols-[280px] md:auto-cols-[320px] gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gold-warm/40 scrollbar-track-transparent`}>
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="snap-start bg-cream border border-gold-warm/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative border-b border-gold-warm/10">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-antique">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm md:text-base text-forest leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section className="py-24 bg-brown-soil text-cream relative px-4 md:px-8 border-t border-gold-warm/25">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
          <h2 className="font-serif text-balance text-[2.75rem] leading-[1.1] sm:text-[3.5rem] md:text-6xl lg:text-7xl font-bold text-gold-champagne leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.ctaTitle') }} /></h2>
          <p className="text-sm md:text-base text-cream/70 font-light leading-relaxed max-w-2xl"><span dangerouslySetInnerHTML={{ __html: t('wolffia.ctaSub') }} /></p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/15 flex items-center gap-2 group cursor-pointer"
            >
              <span>Request Samples & Specs</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
