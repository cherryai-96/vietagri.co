import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { ProductHero } from '../components/products/ProductHero';
import { ProductCategoryNav } from '../components/products/ProductCategoryNav';
import { ProductCategoryCard } from '../components/products/ProductCategoryCard';
import { ProductInputCard } from '../components/products/ProductInputCard';
import { ProductInquiryForm } from '../components/products/ProductInquiryForm';
import { ProductCTA } from '../components/products/ProductCTA';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Helmet>
        <title>Products & Solutions | Vietnam Agriculture Center</title>
        <meta name="description" content="Explore Vietnam Agriculture Center’s premium agricultural exports, contract farming products, superfoods, botanical biomass, and sustainable agricultural inputs for regenerative, high-yield farming." />
      </Helmet>

      <ProductHero />
      <ProductCategoryNav />

      {/* Intro Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-carbon mb-6">
                {t('products.introTitle')}
              </h2>
              <p className="font-sans font-light text-carbon/80 text-lg md:text-xl leading-relaxed">
                {t('products.introDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {['panel1', 'panel2', 'panel3', 'panel4'].map((panel, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/5 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-sans font-bold text-sm md:text-base text-forest uppercase tracking-wider">{t(`products.${panel}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Export & Contract Farming */}
      <section id="part1" className="py-24 bg-carbon/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-forest mb-4 block">
              {t('products.part1Label')}
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-carbon mb-6 max-w-2xl">
              {t('products.part1Title')}
            </h2>
            <p className="font-sans font-light text-carbon/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              {t('products.part1Intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCategoryCard 
              id="beverages"
              image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
              titleKey="products.cat1Title"
              descKeys={['products.cat1Desc1', 'products.cat1Desc2']}
              tags={['Coffee', 'Cacao', 'Single-Origin', 'Traceable Supply']}
              isFeatured={true}
            />
            
            <ProductCategoryCard 
              id="fruits"
              image="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop"
              titleKey="products.cat2Title"
              descKeys={['products.cat2Desc1', 'products.cat2Desc2']}
              tags={['Passion Fruit', 'Mango', 'Banana', 'Frozen Pulp']}
            />

            <ProductCategoryCard 
              id="spices"
              image="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
              titleKey="products.cat3Title"
              descKeys={['products.cat3Desc1', 'products.cat3Desc2']}
              tags={['Black Pepper', 'Cinnamon', 'Cashews', 'Essential Oils']}
            />
            
            <ProductCategoryCard 
              id="grains"
              image="https://images.unsplash.com/photo-1536522501091-bb27448cc40e?q=80&w=1974&auto=format&fit=crop"
              titleKey="products.cat4Title"
              descKeys={['products.cat4Desc1']}
              tags={['ST25 Rice', 'Organic Protocols', 'Bulk Supply']}
            />
            
            <ProductCategoryCard 
              id="superfoods"
              image="https://images.unsplash.com/photo-1581451185461-80721245ee1c?q=80&w=2070&auto=format&fit=crop"
              titleKey="products.cat5Title"
              descKeys={['products.cat5Desc1', 'products.cat5Desc2']}
              tags={['Viet Wolffia', 'Watermeal', 'Superfood Powder', 'Bio-Balance']}
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* Part 2: Sustainable Inputs */}
      <section id="inputs" className="py-24 bg-cream relative border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-forest mb-4 block">
              {t('products.part2Label')}
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-carbon mb-6 max-w-2xl">
              {t('products.part2Title')}
            </h2>
            <p className="font-sans font-light text-carbon/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              {t('products.part2Intro')}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <ProductInputCard 
              id="soilz"
              image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
              titleKey="products.input1Title"
              descKey="products.input1Desc"
              benefitsKeys={['products.input1Ben1', 'products.input1Ben2', 'products.input1Ben3', 'products.input1Ben4']}
            />
            
            <ProductInputCard 
              id="manure"
              image="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2071&auto=format&fit=crop"
              titleKey="products.input2Title"
              descKey="products.input2Desc"
              benefitsKeys={['products.input2Ben1', 'products.input2Ben2', 'products.input2Ben3']}
            />
            
            <ProductInputCard 
              id="cowdung"
              image="https://images.unsplash.com/photo-1628189680387-9359c1c5e4fc?q=80&w=1964&auto=format&fit=crop"
              titleKey="products.input3Title"
              descKey="products.input3Desc"
              benefitsKeys={['products.input3Ben1', 'products.input3Ben2', 'products.input3Ben3']}
            />
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-carbon/5 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <ProductInquiryForm />
        </div>
      </section>

      {/* Product CTA */}
      <ProductCTA />
    </div>
  );
};
