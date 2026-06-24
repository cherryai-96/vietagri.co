import React from 'react';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coffee, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <SEO 
        title={t('products.heroTitle')}
        description={t('products.heroSub')}
        image="/images/products_hero.png"
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/products_hero.png" 
            alt="Products Hero" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t('products.heroTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            {t('products.heroSub')}
          </motion.p>
        </div>
      </section>

      {/* Coffee & Cacao Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-gold-warm/10 px-4 py-2 rounded-full text-gold-dark font-medium">
                <Coffee className="w-5 h-5" />
                <span>Specialty Beverages</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('products.coffeeCacaoTitle')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('products.coffeeCacaoDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/coffee_cacao.png" 
                  alt="Coffee and Cacao" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tropical Fruits Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/tropical_fruits.png" 
                  alt="Tropical Fruits" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full text-green-700 font-medium">
                <Leaf className="w-5 h-5" />
                <span>Fresh Produce</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                {t('products.fruitsTitle')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('products.fruitsDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/>%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"/>%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShoppingBag className="w-16 h-16 text-gold-warm mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-300 mb-10">
              Ready to secure a reliable source of premium produce or discuss contract farming?
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-warm text-brand-dark font-bold rounded-lg hover:bg-gold-champagne transition-colors group"
            >
              {t('common.contactBtn')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
