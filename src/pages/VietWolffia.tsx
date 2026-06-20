import React, { useState, useRef } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FlaskConical, Droplet, Sparkles, Scale, ChevronRight, ChevronLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

const CATEGORIES = [
  { id: 'culinary', label: 'Culinaries' },
  { id: 'beverage', label: 'Beverages' },
  { id: 'pastry', label: 'Pastries' },
  { id: 'snack', label: 'Snacks' },
  { id: 'supplement', label: 'Supplements' },
  { id: 'others', label: 'Others' }
] as const;

type CategoryType = typeof CATEGORIES[number]['id'];

export const VietWolffia: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('culinary');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const galleryItems = [
    {
      src: '/images/v1.jpg',
      title: 'Vietnamese Wolffia Cuisine 1',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v2.jpg',
      title: 'Vietnamese Wolffia Cuisine 2',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v3.jpg',
      title: 'Vietnamese Wolffia Cuisine 3',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v4.jpg',
      title: 'Vietnamese Wolffia Cuisine 4',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v5.jpg',
      title: 'Vietnamese Wolffia Cuisine 5',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v6.jpg',
      title: 'Vietnamese Wolffia Cuisine 6',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v7.jpg',
      title: 'Vietnamese Wolffia Cuisine 7',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/v8.jpg',
      title: 'Vietnamese Wolffia Cuisine 8',
      category: 'culinary',
      desc: 'Traditional Vietnamese dish elevated with Wolffia.'
    },
    {
      src: '/images/culinaries/f1.avif',
      title: 'Wolffia Culinary 1',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f2.webp',
      title: 'Wolffia Culinary 2',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f3.jpg',
      title: 'Wolffia Culinary 3',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f4.webp',
      title: 'Wolffia Culinary 4',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f5.jpg',
      title: 'Wolffia Culinary 5',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f6.webp',
      title: 'Wolffia Culinary 6',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f7.webp',
      title: 'Wolffia Culinary 7',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f8.jpg',
      title: 'Wolffia Culinary 8',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/images/culinaries/f9.jpg',
      title: 'Wolffia Culinary 9',
      category: 'culinary',
      desc: 'Creative Wolffia dish.'
    },
    {
      src: '/Cuisine pictures/Green Shakshuka.webp',
      title: 'Green Shakshuka with Wolffia',
      category: 'culinary',
      desc: 'Infusing traditional breakfast with high-protein microgreens.'
    },
    {
      src: '/images/supplements/Su1.jpg',
      title: 'Premium Wolffia Supplement',
      category: 'supplement',
      desc: 'High-quality processed Wolffia for everyday nutrition.'
    },
    {
      src: '/images/supplements/Su2.jpg',
      title: 'Wolffia Supplement Pack',
      category: 'supplement',
      desc: 'Nutritious Wolffia supplement for daily health.'
    },
    {
      src: '/images/wm-6.webp',
      title: 'Wolffia Garden Salad',
      category: 'culinary',
      desc: 'Fresh greens mixed with nutrient-dense Wolffia dressing.'
    },
    {
      src: '/images/wm-7.avif',
      title: 'Wolffia Breakfast Bowl',
      category: 'culinary',
      desc: 'Nutritious breakfast packed with plant-based protein.'
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
      src: '/images/pastries/P12.jpg',
      title: 'Wolffia Pastry 12',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P1.jpg',
      title: 'Wolffia Pastry 1',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P2.jpg',
      title: 'Wolffia Pastry 2',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P3.jpg',
      title: 'Wolffia Pastry 3',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P4.jpg',
      title: 'Wolffia Pastry 4',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P5.jpg',
      title: 'Wolffia Pastry 5',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P6.jpg',
      title: 'Wolffia Pastry 6',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P7.jpg',
      title: 'Wolffia Pastry 7',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P8.jpg',
      title: 'Wolffia Pastry 8',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P9.jpg',
      title: 'Wolffia Pastry 9',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P10.jpg',
      title: 'Wolffia Pastry 10',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/pastries/P11.png',
      title: 'Wolffia Pastry 11',
      category: 'pastry',
      desc: 'Delicious Wolffia pastry.'
    },
    {
      src: '/images/snacks/S1.jpg',
      title: 'Wolffia Snack 1',
      category: 'snack',
      desc: 'A healthy and crispy Wolffia snack.'
    },
    {
      src: '/images/snacks/S2.jpg',
      title: 'Wolffia Snack 2',
      category: 'snack',
      desc: 'A healthy and crispy Wolffia snack.'
    },
    {
      src: '/images/snacks/S3.jpg',
      title: 'Wolffia Snack 3',
      category: 'snack',
      desc: 'A healthy and crispy Wolffia snack.'
    },
    {
      src: '/images/snacks/S4.jpg',
      title: 'Wolffia Snack 4',
      category: 'snack',
      desc: 'A healthy and crispy Wolffia snack.'
    },
    {
      src: '/images/snacks/S5.jpg',
      title: 'Wolffia Snack 5',
      category: 'snack',
      desc: 'A healthy and crispy Wolffia snack.'
    },
    {
      src: '/images/others/02.jpg',
      title: 'Wolffia Creation 1',
      category: 'others',
      desc: 'Innovative Wolffia-based product.'
    },
    {
      src: '/images/others/o1.jpg',
      title: 'Wolffia Creation 2',
      category: 'others',
      desc: 'Innovative Wolffia-based product.'
    },
    {
      src: '/images/others/o3.jpg',
      title: 'Wolffia Creation 3',
      category: 'others',
      desc: 'Innovative Wolffia-based product.'
    },
    {
      src: '/images/others/o4.jpg',
      title: 'Wolffia Creation 4',
      category: 'others',
      desc: 'Innovative Wolffia-based product.'
    },
    {
      src: '/images/beverages/B1.jpg',
      title: 'Wolffia Beverage 1',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B2.jpg',
      title: 'Wolffia Beverage 2',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B3.jpg',
      title: 'Wolffia Beverage 3',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B4.jpg',
      title: 'Wolffia Beverage 4',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },

    {
      src: '/images/beverages/B6.jpg',
      title: 'Wolffia Beverage 6',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B7.jpg',
      title: 'Wolffia Beverage 7',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B8.jpg',
      title: 'Wolffia Beverage 8',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B9.jpg',
      title: 'Wolffia Beverage 9',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B10.jpg',
      title: 'Wolffia Beverage 10',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B11.jpg',
      title: 'Wolffia Beverage 11',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B12.jpg',
      title: 'Wolffia Beverage 12',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B13.jpg',
      title: 'Wolffia Beverage 13',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B14.jpg',
      title: 'Wolffia Beverage 14',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B15.jpg',
      title: 'Wolffia Beverage 15',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B16.jpg',
      title: 'Wolffia Beverage 16',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B17.jpg',
      title: 'Wolffia Beverage 17',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B18.jpg',
      title: 'Wolffia Beverage 18',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    },
    {
      src: '/images/beverages/B19.jpg',
      title: 'Wolffia Beverage 19',
      category: 'beverage',
      desc: 'Refreshing and nutritious Wolffia drink.'
    }
  ];

  const productItems = [
    {
      src: '/images/products/VW1.png',
      category: 'INNOVATION',
      title: 'Fresh Wolffia',
      desc: 'Nutritious and sustainable aquatic plant protein.'
    },
    {
      src: '/images/products/VW2.png',
      category: 'SUSTAINABILITY',
      title: 'Dried Wolffia',
      desc: 'Cultivated with organic farming expertise.'
    },
    {
      src: '/images/products/VW3.png',
      category: 'NUTRITION',
      title: 'Wolffia Powder',
      desc: 'Rich in essential vitamins and minerals.'
    },
    {
      src: '/images/products/VW4.png',
      category: 'FUTURE FOOD',
      title: 'Frozen Wolffia',
      desc: 'The next generation of plant-based nutrition.'
    }
  ];

  const filteredGallery = galleryItems.filter(item => item.category === activeCategory);

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
    <div className="font-sans">
      <SEO 
        title="Viet Wolffia | Premium Watermeal Superfood | Vietnam Agriculture Center"
        description="Discover Viet Wolffia (Watermeal) - the world's smallest flowering plant packed with plant-based protein, vitamins, and minerals. Available in Fresh and Dried formats."
        url="https://vietagri.co/viet-wolffia"
        image="https://vietagri.co/images/products/VW1.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Viet Wolffia",
          "description": "Premium Watermeal Superfood",
          "brand": {
            "@type": "Brand",
            "name": "Vietnam Agriculture Center"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }}
      />
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
            <h1 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('wolffia.heroTitle') }} /></h1>
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
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.introTitle') }} /></h2>
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
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold tracking-wide text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.cultTitle') }} /></h2>
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
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-forest group-hover:text-cream transition-colors duration-500" dangerouslySetInnerHTML={{ __html: feature.title }} />
                  </div>
                  
                  <div className="w-full md:w-1/3 flex justify-center relative mb-6 md:mb-0">
                    <div className="w-48 h-32 md:w-56 md:h-36 rounded-xl overflow-hidden shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500 border-2 border-transparent group-hover:border-gold-warm/30">
                      <img src={featImages[idx]} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3 md:pl-8">
                    <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed group-hover:text-cream/90 transition-colors duration-500"><span dangerouslySetInnerHTML={{ __html: feature.desc }} /></p>
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
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold tracking-wide text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.appTitle') }} /></h2>
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

      {/* Products Portfolio Section */}
      <section className="py-16 md:py-20 bg-white border-t border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest">
                <Sparkles size={16} />
                Portfolio
              </span>
              <h2 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-carbon">
                Viet Wolffia Products
              </h2>
            </div>
            <a 
              href="https://vietwolffia.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="self-start flex items-center gap-2 bg-[#d7ea44] hover:bg-[#c6db31] text-forest px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex text-sm md:text-base"
            >
              <Sparkles size={18} />
              View All Products
            </a>
          </div>

          {/* Right Column (Scrolling Image Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-8 pb-20">
            {productItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`sticky top-32 lg:top-40 relative rounded-3xl overflow-hidden w-full group shadow-2xl ${
                  item.title === 'Dried Wolffia' ? 'bg-white aspect-[4/5] md:aspect-[16/10]' : 'aspect-[4/3] md:aspect-[16/10]'
                }`}
                style={{ zIndex: index + 10 }}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className={`absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105 ${
                    item.title === 'Dried Wolffia' ? 'object-contain mix-blend-multiply' : 'object-cover'
                  }`}
                  style={item.title === 'Dried Wolffia' ? { filter: 'contrast(1.08) brightness(1.08)' } : {}}
                />
                
                {/* Glassmorphism Card Overlay */}
                <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 backdrop-blur-md bg-carbon/70 border border-white/20 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-white shadow-xl transition-all duration-500 overflow-hidden text-center md:text-left inline-block w-auto max-w-[90%] md:max-w-max">
                  <h3 className="font-serif text-base md:text-xl font-bold m-0 leading-none">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Culinary & Operations Gallery */}
      <section className="py-24 bg-ivory border-t border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
                Visual Showcase
              </span>
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.galleryTitle') }} /></h2>
            </div>
            
            {/* Category Selectors */}
            <div className="flex flex-wrap gap-2 md:gap-3 text-xs sm:text-sm font-bold text-forest shrink-0 xl:justify-end">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-forest text-cream border-gold-warm shadow-sm'
                      : 'bg-cream text-forest border-gold-warm/15 hover:border-gold-warm/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Slider Wrapper */}
          <div className="relative group">
            {/* Left Scroll Button */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-cream/90 hover:bg-white text-forest p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center cursor-pointer border border-gold-warm/20"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Gallery Grid - Dynamic Rows Horizontal Slider */}
            <div 
              ref={scrollContainerRef}
              className={`grid ${activeCategory === 'snack' ? 'grid-rows-1' : (filteredGallery.length > 4 ? 'grid-rows-2' : 'grid-rows-1')} grid-flow-col auto-cols-[280px] md:auto-cols-[320px] gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gold-warm/40 scrollbar-track-transparent`}
            >
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="snap-start bg-cream border border-gold-warm/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            </div>

            {/* Right Scroll Button */}
            <button 
              onClick={scrollRight}
              className="absolute right-4 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-cream/90 hover:bg-white text-forest p-2 rounded-full shadow-md transition-opacity opacity-90 hover:opacity-100 flex items-center justify-center cursor-pointer border border-gold-warm/20"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section className="py-24 bg-brown-soil text-cream relative px-4 md:px-8 border-t border-gold-warm/25">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
          <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-gold-champagne leading-tight"><span dangerouslySetInnerHTML={{ __html: t('wolffia.ctaTitle') }} /></h2>
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
