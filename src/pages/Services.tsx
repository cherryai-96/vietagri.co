import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Check, 
  ChevronRight, 
  ArrowRight,
  Info
} from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedTabs, setExpandedTabs] = useState<number[]>([0]);

  const isTabActive = (id: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return expandedTabs.includes(id);
    }
    return activeTab === id;
  };

  const handleTabClick = (id: number) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setExpandedTabs(prev => 
        prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
      );
    }
  };

  const pillars = [
    {
      id: 0,
      icon: <Globe className="w-6 h-6" />,
      title: t('services.sourcingTitle'),
      subtitle: t('services.sourcingSub'),
      desc: t('services.sourcingText'),
      bullets: [
        t('services.sourcingBullet1'),
        t('services.sourcingBullet2'),
        t('services.sourcingBullet3'),
      ],
      details: {
        specTitle: 'Sourcing Capabilities & Commodities',
        specs: [
          'Direct access to certified grower networks across 15 provinces.',
          'Bulk supply capabilities for high-value botanical powders (e.g., premium lotus seed powder).',
          'Strict pesticide residue testing (Eurofins certified) mapping to target market restrictions (MRLs).',
          'Local pricing audit report provided directly to buyers before commercial sign-off.'
        ]
      },
      image: '/images/agriculture_products.png'
    },
    {
      id: 1,
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('services.farmingTitle'),
      subtitle: t('services.farmingSub'),
      desc: t('services.farmingText'),
      bullets: [
        t('services.farmingBullet1'),
        t('services.farmingBullet2'),
        t('services.farmingBullet3'),
      ],
      details: {
        specTitle: 'Investment & Partnerships Structures',
        specs: [
          'Lucrative commission models (standard commission rates applied to certified trade agents).',
          'Turnkey farm operations covering land securing, IoT irrigation infrastructure, and harvest management.',
          'Structured crop-sharing agreements with transparent ROI projections based on historical yields.',
          'Guaranteed buy-back agreements at pre-negotiated floor pricing to hedge market volatility.'
        ]
      },
      image: '/images/ai-services-hightech.png'
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t('services.qaTitle'),
      subtitle: t('services.qaSub'),
      desc: t('services.qaText'),
      bullets: [
        t('services.qaBullet1'),
        t('services.qaBullet2'),
        t('services.qaBullet3'),
      ],
      details: {
        specTitle: 'Quality Assurance & Certifications Pathway',
        specs: [
          'Pre-audit readiness assessments for GlobalG.A.P., EU Organic, and USDA Organic.',
          'On-the-ground agronomists managing crop hygiene, water safety, and soil health compliance.',
          'End-to-end batch traceability codes integrated with QR tracking systems.',
          'Pre-shipment inspection reports (SGS/Bureau Veritas coordination) for every export container.'
        ]
      },
      image: '/images/export_quality.png'
    },
    {
      id: 3,
      icon: <Truck className="w-6 h-6" />,
      title: t('services.logisticsTitle'),
      subtitle: t('services.logisticsSub'),
      desc: t('services.logisticsText'),
      bullets: [
        t('services.logisticsBullet1'),
        t('services.logisticsBullet2'),
        t('services.logisticsBullet3'),
      ],
      details: {
        specTitle: 'Global Packaging & Cold-Chain Logistics',
        specs: [
          'Advanced multi-layer aluminum gusseted bags (10kg-25kg) designed for moisture barrier protection of bulk powders.',
          'Temperature-controlled cold-chain management for fresh produce exports (HCMC port to global ports).',
          'Export documentation execution: Phytosanitary certificates, Certificates of Origin (Form A/D/EUR.1), Customs Clearances.',
          'LCL/FCL ocean freight coordination with tier-1 shipping lines.'
        ]
      },
      image: '/images/global_logistics.png'
    }
  ];

  const renderTabContent = (tabId: number) => {
    const tabData = pillars.find(p => p.id === tabId) || pillars[0];
    return (
      <div className="flex flex-col gap-8 flex-grow justify-between w-full">
        {/* Content block */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-6 lg:w-3/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
                {tabData.subtitle}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest" dangerouslySetInnerHTML={{ __html: tabData.title }} />
            </div>

            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {tabData.desc}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {tabData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm font-light text-carbon/85">
                  <Check size={16} className="text-gold-warm shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/5 shrink-0">
            <div className="w-full h-48 lg:h-full min-h-[200px] rounded-xl overflow-hidden shadow-md border border-gold-warm/15 relative">
              <img src={tabData.image} alt={tabData.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Specification drawer info */}
        <div className="mt-8 pt-8 border-t border-gold-warm/20 bg-cream/30 p-6 rounded-lg border border-gold-warm/10 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-serif font-bold text-forest text-base">
            <Info size={16} className="text-gold-warm shrink-0" />
            <span>{tabData.details.specTitle}</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-light text-carbon/75">
            {tabData.details.specs.map((spec, sidx) => (
              <li key={sidx} className="flex items-start gap-1.5 leading-normal">
                <ChevronRight size={12} className="text-gold-antique shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('/images/a-hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/20" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold-champagne bg-forest/40 border border-gold-warm/20 px-4 py-1.5 rounded-full self-center">
              Core Services
            </span>
            <h1 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('services.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('services.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-16 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('services.introTitle') }} /></h2>
          <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
            {t('services.introDesc')}
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="pb-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left: Tab Selectors & Mobile Accordion Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {pillars.map((tab) => (
              <React.Fragment key={tab.id}>
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isTabActive(tab.id)
                      ? 'bg-forest text-cream border-gold-warm shadow-md'
                      : 'bg-ivory text-carbon border-gold-warm/15 hover:border-gold-warm/40 hover:bg-cream/80'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isTabActive(tab.id) ? 'bg-gold-warm text-brown-soil' : 'bg-forest/5 text-forest'
                  }`}>
                    {tab.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className={`font-serif text-lg font-bold ${isTabActive(tab.id) ? 'text-gold-champagne' : 'text-forest'}`} dangerouslySetInnerHTML={{ __html: tab.title }} />
                    <span className={`text-[10px] uppercase tracking-wider font-semibold ${isTabActive(tab.id) ? 'text-cream/70' : 'text-carbon/60'}`}><span dangerouslySetInnerHTML={{ __html: tab.subtitle }} /></span>
                  </div>
                </button>
                
                {/* Mobile Inline Content (Accordion) */}
                <AnimatePresence>
                  {isTabActive(tab.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden overflow-hidden"
                    >
                      <div className="bg-ivory border border-gold-warm/15 rounded-2xl p-6 shadow-sm mb-2 mt-1 flex flex-col justify-between">
                        {renderTabContent(tab.id)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>

          {/* Right: Tab Panel (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-2/3 bg-ivory border border-gold-warm/15 rounded-2xl p-8 lg:p-12 shadow-sm min-h-[500px] flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 flex-grow justify-between w-full"
              >
                {renderTabContent(activeTab)}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Services CTA Section */}
      <section className="py-24 text-cream relative px-4 md:px-8 border-t border-gold-warm/25 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/global_logistics.png" alt="Partner with VAC" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-brown-soil/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-carbon/40" />
        </div>
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center relative z-10">
          <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold text-gold-champagne leading-tight"><span dangerouslySetInnerHTML={{ __html: t('services.ctaTitle') }} /></h2>
          <p className="text-sm md:text-base text-cream/80 font-light leading-relaxed max-w-2xl"><span dangerouslySetInnerHTML={{ __html: t('services.ctaSub') }} /></p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/15 flex items-center gap-2 group cursor-pointer"
            >
              <span>{t('common.partnerBtn')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
