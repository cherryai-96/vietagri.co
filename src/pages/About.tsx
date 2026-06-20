import React from 'react';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Compass, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <ShieldCheck className="text-gold-warm w-8 h-8" />,
      title: t('about.why1Title'),
      desc: t('about.why1Desc'),
    },
    {
      icon: <Eye className="text-gold-warm w-8 h-8" />,
      title: t('about.why2Title'),
      desc: t('about.why2Desc'),
    },
    {
      icon: <Compass className="text-gold-warm w-8 h-8" />,
      title: t('about.why3Title'),
      desc: t('about.why3Desc'),
    },
  ];

  return (
    <div className="font-sans overflow-hidden">
      <SEO 
        title="About Us | Vietnam Agriculture Center (VAC)"
        description="Learn about Vietnam Agriculture Center (VAC), our mission, vision, and core values in bridging the gap between local Vietnamese farmers and global agricultural markets."
        url="https://vietagri.co/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Vietnam Agriculture Center",
          "url": "https://vietagri.co/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Vietnam Agriculture Center",
            "description": "We specialize in premium agricultural sourcing, contract farming, and exporting.",
            "foundingDate": "2024"
          }
        }}
        preloadImage="/images/a-hero.jpg"
      />
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
              About Us
            </span>
            <h1 className="font-serif text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-wide text-gold-champagne w-full xl:whitespace-nowrap"><span dangerouslySetInnerHTML={{ __html: t('about.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('about.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gold-warm/20 relative group order-2 lg:order-1">
            <img src="/images/ai-about-ss1.png" alt="Vietnam Agricultural Export Vision" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-ivory border border-gold-warm/15 rounded-xl p-8 lg:p-12 flex flex-col gap-6 shadow-sm"
            >
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest border-b border-gold-warm/25 pb-4"><span dangerouslySetInnerHTML={{ __html: t('about.missionTitle') }} /></h2>
              <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-ivory border border-gold-warm/15 rounded-xl p-8 lg:p-12 flex flex-col gap-6 shadow-sm"
            >
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest border-b border-gold-warm/25 pb-4"><span dangerouslySetInnerHTML={{ __html: t('about.visionTitle') }} /></h2>
              <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footprint Section */}
      <section className="py-24 bg-ivory text-carbon px-4 md:px-8 border-y border-gold-warm/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              National Footprint
            </span>
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('about.footprintTitle') }} /></h2>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('about.footprintDesc1')}
            </p>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('about.footprintDesc2')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-semibold text-forest">
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>Central Highlands Region</span>
              </div>
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>Mekong Delta Region</span>
              </div>
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>Ho Chi Minh City Logistics Hub</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 h-[400px] rounded-xl overflow-hidden shadow-lg border border-gold-warm/20 relative group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/images/ai-about-ss2.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-gold-champagne">Integrated Field Network</h3>
              <p className="text-xs font-light text-cream/80 mt-1">Direct oversight across fertile farming regions in Vietnam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VAC Section */}
      <section className="py-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique"><span dangerouslySetInnerHTML={{ __html: t('about.whySub') }} /></span>
            <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold tracking-wide text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('about.whyTitle') }} /></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-ivory border border-gold-warm/15 rounded-xl p-8 flex flex-col gap-5 bento-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3.5 bg-forest/5 rounded-lg w-fit border border-gold-warm/10">
                  {val.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-forest" dangerouslySetInnerHTML={{ __html: val.title }} />
                <p className="text-xs md:text-sm text-carbon/70 font-light leading-relaxed flex-grow"><span dangerouslySetInnerHTML={{ __html: val.desc }} /></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
