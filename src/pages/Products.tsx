import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { ProductHero } from '../components/products/ProductHero';
import { ProductCategory } from '../components/products/ProductCategory';
import { ProductInputCard } from '../components/products/ProductInputCard';
import { ProductInquiryForm } from '../components/products/ProductInquiryForm';
import { ProductCTA } from '../components/products/ProductCTA';

import { motion } from 'framer-motion';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  const exportCategories = [
    {
      id: 'beverages',
      image: '/images/products/coffee_cacao.png',
      titleKey: 'products.cat1Title',
      descKeys: ['products.cat1Desc1', 'products.cat1Desc2'],
      tags: ['Coffee', 'Cacao'],
    },
    {
      id: 'fruits',
      images: [
        '/images/products/tropical_fruits.png',
        '/images/products/coconut.png',
        '/images/products/durian.png'
      ],
      titleKey: 'products.cat2Title',
      descKeys: ['products.cat2Desc1', 'products.cat2Desc2'],
      tags: ['Passion Fruit', 'Mango', 'Banana', 'Coconut', 'Durian', 'Pineapple'],
    },
    {
      id: 'spices',
      image: '/images/products/spices_nuts.png',
      titleKey: 'products.cat3Title',
      descKeys: ['products.cat3Desc1', 'products.cat3Desc2'],
      tags: ['Cashews', 'Black Pepper', 'Cinnamon'],
    },
    {
      id: 'grains',
      image: '/images/products/premium_rice.png',
      titleKey: 'products.cat4Title',
      descKeys: ['products.cat4Desc1'],
      tags: ['ST25 Rice'],
    },
    {
      id: 'superfoods',
      image: '/images/products/wolffia_superfood.png',
      titleKey: 'products.cat5Title',
      descKeys: ['products.cat5Desc1', 'products.cat5Desc2'],
      tags: ['Việt Wolffia', 'Bio-Balance'],
    },
  ];

  const inputProducts = [
    {
      id: 'soilz',
      image: '/images/products/soil_activator.png',
      titleKey: 'products.input1Title',
      descKey: 'products.input1Desc',
      benefitsKeys: ['products.input1Ben1', 'products.input1Ben2', 'products.input1Ben3', 'products.input1Ben4'],
    },
    {
      id: 'manure',
      image: '/images/products/organic_compost.png',
      titleKey: 'products.input2Title',
      descKey: 'products.input2Desc',
      benefitsKeys: ['products.input2Ben1', 'products.input2Ben2', 'products.input2Ben3'],
    },
    {
      id: 'cowdung',
      image: '/images/products/organic_compost.png',
      titleKey: 'products.input3Title',
      descKey: 'products.input3Desc',
      benefitsKeys: ['products.input3Ben1', 'products.input3Ben2', 'products.input3Ben3'],
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Helmet>
        <title>Products & Solutions | Vietnam Agriculture Center</title>
        <meta name="description" content="Explore Vietnam Agriculture Center's premium agricultural exports, contract farming products, superfoods, botanical biomass, and sustainable agricultural inputs for regenerative, high-yield farming." />
      </Helmet>

      {/* === HERO === */}
      <ProductHero />

      {/* === PART 1: EXPORT & CONTRACT FARMING === */}
      <section id="part1" className="py-20 md:py-28 bg-ivory px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 mb-16 md:mb-20"
          >
            <h2 className="font-serif font-bold text-[2rem] leading-[1.1] sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-wide text-forest w-full xl:whitespace-nowrap">
              {t('products.part1Title')}
            </h2>
            <p className="font-sans font-light text-carbon/70 text-sm md:text-base leading-relaxed max-w-3xl">
              {t('products.part1Intro')}
            </p>
          </motion.div>

          {/* Product Categories — alternating layout */}
          <div className="flex flex-col gap-10 md:gap-14">
            {exportCategories.map((cat, idx) => (
              <ProductCategory
                key={cat.id}
                id={cat.id}
                image={cat.image}
                images={cat.images}
                titleKey={cat.titleKey}
                descKeys={cat.descKeys}
                tags={cat.tags}
                reversed={idx % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === DIVIDER BANNER (Part 1 → Part 2 transition) === */}
      <section className="py-16 md:py-20 relative px-4 md:px-8 border-y border-gold-warm/20 text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/products/soil_activator.png" alt="Sustainable Farming" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-forest/80 mix-blend-overlay" />
          <div className="absolute inset-0 bg-carbon/70" />
        </div>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 items-center relative z-10">
          <h2 className="font-serif text-balance text-[1.75rem] leading-[1.15] sm:text-3xl md:text-4xl font-bold text-gold-champagne">
            {t('products.part2Title')}
          </h2>
          <p className="text-sm md:text-base text-cream/80 leading-relaxed font-light max-w-2xl">
            {t('products.part2Intro')}
          </p>
          <div className="h-[1px] w-20 bg-gold-warm/40 my-1" />
          <p className="text-xs uppercase tracking-widest text-gold-warm font-semibold">
            Bio-Fertilizers • Soil Conditioners • Organic Inputs
          </p>
        </div>
      </section>

      {/* === PART 2: SUSTAINABLE AGRICULTURAL INPUTS === */}
      <section id="inputs" className="py-20 md:py-28 bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 mb-16 md:mb-20"
          >
            <h2 className="font-serif font-bold text-[2rem] leading-[1.1] sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-wide text-forest w-full xl:whitespace-nowrap">
              {t('products.part2Title')}
            </h2>
            <p className="font-sans font-light text-carbon/70 text-sm md:text-base leading-relaxed max-w-3xl">
              {t('products.part2Intro')}
            </p>
          </motion.div>

          {/* Input Products — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inputProducts.map((input, idx) => (
              <ProductInputCard
                key={input.id}
                id={input.id}
                image={input.image}
                titleKey={input.titleKey}
                descKey={input.descKey}
                benefitsKeys={input.benefitsKeys}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === INQUIRY FORM === */}
      <section className="py-20 md:py-28 bg-ivory/80 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ProductInquiryForm />
        </div>
      </section>

      {/* === CTA === */}
      <ProductCTA />
    </div>
  );
};
