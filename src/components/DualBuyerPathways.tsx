import React from 'react';
import { useTranslation } from '../i18n';
import { ArrowRight, Leaf, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DualBuyerPathways: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-carbon border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-warm/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">{t('dualBuyer.title')}</h2>
          <div className="w-24 h-1 bg-gold-warm mx-auto rounded-full mb-6"></div>
          <p className="text-cream/80 font-sans text-lg">{t('dualBuyer.sub')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sourcing Pathway */}
          <div className="md:w-1/2 flex flex-col h-full group">
            <div className="h-64 rounded-t-2xl overflow-hidden relative">
              <img src="/images/products/premium_rice.png" alt="Premium Sourcing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <Box size={32} className="text-gold-champagne mb-2" />
              </div>
            </div>
            <div className="bg-carbon-light flex-1 p-8 rounded-b-2xl border border-t-0 border-white/5 shadow-2xl flex flex-col">
              <h3 className="text-2xl font-serif text-gold-champagne mb-4">{t('dualBuyer.sourcingTitle')}</h3>
              <p className="text-cream/80 font-sans leading-relaxed mb-8 flex-1">{t('dualBuyer.sourcingSub')}</p>
              <Link to="/products" className="inline-flex items-center gap-2 text-gold-warm hover:text-gold-champagne font-bold uppercase tracking-wider text-sm transition-colors mt-auto">
                {t('dualBuyer.sourcingBtn')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Farming Pathway */}
          <div className="md:w-1/2 flex flex-col h-full group">
            <div className="h-64 rounded-t-2xl overflow-hidden relative">
              <img src="/images/hightech_farming.png" alt="Contract Farming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <Leaf size={32} className="text-gold-champagne mb-2" />
              </div>
            </div>
            <div className="bg-carbon-light flex-1 p-8 rounded-b-2xl border border-t-0 border-white/5 shadow-2xl flex flex-col">
              <h3 className="text-2xl font-serif text-gold-champagne mb-4">{t('dualBuyer.farmingTitle')}</h3>
              <p className="text-cream/80 font-sans leading-relaxed mb-8 flex-1">{t('dualBuyer.farmingSub')}</p>
              <Link to="/contract-farming" className="inline-flex items-center gap-2 text-gold-warm hover:text-gold-champagne font-bold uppercase tracking-wider text-sm transition-colors mt-auto">
                {t('dualBuyer.farmingBtn')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
