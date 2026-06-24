import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { ProductHero } from '../components/products/ProductHero';
import { ProductCategoryNav } from '../components/products/ProductCategoryNav';
import { ProductCategoryCard } from '../components/products/ProductCategoryCard';
import { ProductInputCard } from '../components/products/ProductInputCard';
import { ProductCTA } from '../components/products/ProductCTA';
import { motion } from 'framer-motion';

// Import placeholders
import coffeeCacao from '../assets/products/coffee-cacao.jpg';
import tropicalFruits from '../assets/products/tropical-fruits.jpg';
import spicesNuts from '../assets/products/spices-nuts.jpg';
import st25Rice from '../assets/products/st25-rice.jpg';
import vietWolffia from '../assets/products/viet-wolffia.jpg';
import bioSoilz from '../assets/products/bio-soilz.jpg';
import chickenManure from '../assets/products/japanese-chicken-manure.jpg';
import cowDung from '../assets/products/composted-cow-dung.jpg';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Products & Solutions | Vietnam Agriculture Center</title>
        <meta name="description" content="Explore Vietnam Agriculture Center's premium agricultural exports, contract farming products, superfoods, botanical biomass, and sustainable agricultural inputs for regenerative, high-yield farming." />
        <meta property="og:title" content="Products & Solutions | Vietnam Agriculture Center" />
        <meta property="og:description" content="Premium agricultural exports, contract farming products, and sustainable inputs." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ProductHero />
      <ProductCategoryNav />

      {/* Intro Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest mb-6 leading-tight"
            >
              {t('products.introTitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-carbon/80 leading-relaxed"
            >
              {t('products.introDesc')}
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-forest text-cream rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-warm/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <ul className="space-y-6 relative z-10 font-medium text-lg tracking-wide">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-warm"></div>
                  {t('products.panel1')}
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-warm"></div>
                  {t('products.panel2')}
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-warm"></div>
                  {t('products.panel3')}
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-warm"></div>
                  {t('products.panel4')}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 1: Export & Contract Farming */}
      <section id="part1" className="py-20 bg-ivory/50 border-t border-carbon/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <span className="text-sm font-bold text-gold-warm uppercase tracking-widest block mb-3">
              {t('products.part1Label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-6">
              {t('products.part1Title')}
            </h2>
            <p className="text-lg text-carbon/80 leading-relaxed max-w-3xl">
              {t('products.part1Intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="beverages" className="lg:col-span-2">
              <ProductCategoryCard
                title={t('products.cat1Title')}
                image={coffeeCacao}
                descriptions={[t('products.cat1Desc1'), t('products.cat1Desc2')]}
                tags={['Coffee', 'Cacao', 'Single-Origin', 'Traceable Supply']}
              />
            </div>
            
            <div id="fruits" className="lg:col-span-1">
              <ProductCategoryCard
                title={t('products.cat2Title')}
                image={tropicalFruits}
                descriptions={[t('products.cat2Desc1'), t('products.cat2Desc2')]}
                tags={['Passion Fruit', 'Mango', 'Banana', 'Frozen Pulp']}
              />
            </div>

            <div id="spices">
              <ProductCategoryCard
                title={t('products.cat3Title')}
                image={spicesNuts}
                descriptions={[t('products.cat3Desc1'), t('products.cat3Desc2')]}
                tags={['Black Pepper', 'Cinnamon', 'Star Anise', 'Cashews']}
              />
            </div>

            <div id="grains">
              <ProductCategoryCard
                title={t('products.cat4Title')}
                image={st25Rice}
                descriptions={[t('products.cat4Desc1')]}
                tags={['ST25 Rice', 'Organic Protocols', 'Premium Food Manufacturing']}
              />
            </div>

            <div id="superfoods">
              <ProductCategoryCard
                title={t('products.cat5Title')}
                image={vietWolffia}
                descriptions={[t('products.cat5Desc1'), t('products.cat5Desc2')]}
                tags={['Viet Wolffia', 'Watermeal', 'Superfood Powder', 'Bio-Balance']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Sustainable Agricultural Inputs */}
      <section id="part2" className="py-20 md:py-28 bg-brown-soil/5 relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4a5d23 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-sm font-bold text-forest uppercase tracking-widest block mb-3">
              {t('products.part2Label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-soil mb-6">
              {t('products.part2Title')}
            </h2>
            <p className="text-lg text-carbon/80 leading-relaxed max-w-3xl">
              {t('products.part2Intro')}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <ProductInputCard
              title={t('products.input1Title')}
              image={bioSoilz}
              description={t('products.input1Desc')}
              benefits={[
                t('products.input1Ben1'),
                t('products.input1Ben2'),
                t('products.input1Ben3'),
                t('products.input1Ben4'),
              ]}
            />

            <ProductInputCard
              title={t('products.input2Title')}
              image={chickenManure}
              description={t('products.input2Desc')}
              benefits={[
                t('products.input2Ben1'),
                t('products.input2Ben2'),
                t('products.input2Ben3'),
              ]}
            />

            <ProductInputCard
              title={t('products.input3Title')}
              image={cowDung}
              description={t('products.input3Desc')}
              benefits={[
                t('products.input3Ben1'),
                t('products.input3Ben2'),
                t('products.input3Ben3'),
              ]}
            />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
};
