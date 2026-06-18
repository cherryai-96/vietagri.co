import React from 'react';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  RotateCcw, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  Maximize2, 
  Users2, 
  Sparkles 
} from 'lucide-react';

export const Sustainability: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans overflow-hidden bg-cream text-carbon">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: `url('/images/shero.webp')` }}
        />
        <div className="absolute inset-0 bg-carbon/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold-champagne bg-forest/40 border border-gold-warm/20 px-4 py-1.5 rounded-full self-center flex items-center gap-2">
              <Sparkles size={14} className="text-gold-warm" />
              ESG & Sustainability
            </span>
            <h1 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('sustainability.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('sustainability.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-cream px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('sustainability.introTitle') }} /></h2>
            <div className="h-1 w-20 bg-gold-warm rounded-full" />
            <p className="text-sm md:text-base text-carbon/80 leading-relaxed font-light mt-4">
              {t('sustainability.introDesc1')}
            </p>
            <p className="text-sm md:text-base text-carbon/80 leading-relaxed font-light">
              {t('sustainability.introDesc2')}
            </p>
          </div>
          <div className="h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gold-warm/20 relative group">
             <img src="/images/sss2.png" alt="Sustainable Agriculture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Certification Roadmap Section */}
      <section className="py-24 bg-ivory border-y border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-gold-warm" />
                Certification Consultancy
              </span>
              <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('sustainability.certTitle') }} /></h2>
              <p className="text-xs uppercase tracking-wider text-carbon/60 font-semibold"><span dangerouslySetInnerHTML={{ __html: t('sustainability.certSub') }} /></p>
              <p className="text-sm text-carbon/75 font-light leading-relaxed">
                {t('sustainability.certText')}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Organic Transition',
                  desc: t('sustainability.certBullet1'),
                },
                {
                  title: 'GlobalG.A.P. Compliance',
                  desc: t('sustainability.certBullet2'),
                },
                {
                  title: 'Clean-Label Standards',
                  desc: t('sustainability.certBullet3'),
                },
                {
                  title: 'Audit Support',
                  desc: t('sustainability.certBullet4'),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-cream border border-gold-warm/15 rounded-lg p-6 hover:shadow-md transition-all duration-300 bento-card"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-warm shrink-0 mt-1" size={18} />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif font-bold text-xl text-forest" dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p className="text-xs text-carbon/70 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Waste Circular Flow Section */}
      <section className="py-24 bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center justify-center gap-1.5">
              <RotateCcw size={16} className="text-gold-warm" />
              Circular Economy
            </span>
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest"><span dangerouslySetInnerHTML={{ __html: t('sustainability.circularTitle') }} /></h2>
            <p className="text-xs uppercase tracking-wider text-carbon/60 font-semibold"><span dangerouslySetInnerHTML={{ __html: t('sustainability.circularSub') }} /></p>
            <p className="text-sm text-carbon/75 font-light leading-relaxed mt-2">
              {t('sustainability.circularText')}
            </p>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-gold-warm via-forest-fresh to-gold-warm -translate-y-1/2 z-0" />
            
            {[
              {
                step: '01',
                title: 'Biomass Rescuing',
                desc: t('sustainability.circularBullet1'),
                color: 'bg-forest text-cream',
                icon: <RotateCcw size={20} className="text-gold-warm" />
              },
              {
                step: '02',
                title: 'High-Nutrient Upcycling',
                desc: 'Processing by-products through biological stabilization and controlled dehydration to retain maximum enzymes and vitamins.',
                color: 'bg-ivory border border-gold-warm/20 text-carbon',
                icon: <Sparkles size={20} className="text-forest" />
              },
              {
                step: '03',
                title: 'Secondary Value Chains',
                desc: t('sustainability.circularBullet2'),
                color: 'bg-brown-soil text-cream',
                icon: <ArrowRight size={20} className="text-gold-warm rotate-90 md:rotate-0" />
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className={`relative z-10 flex flex-col gap-4 p-8 rounded-xl shadow-sm ${step.color} min-h-[250px] hover:-translate-y-1 transition-transform`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-serif font-bold text-gold-warm opacity-80">{step.step}</span>
                  <div className="p-2 rounded-full bg-cream/10 border border-gold-warm/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold tracking-wide mt-2" dangerouslySetInnerHTML={{ __html: step.title }} />
                <p className="text-xs md:text-sm leading-relaxed font-light opacity-90">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full mt-16 rounded-2xl overflow-hidden shadow-lg border border-gold-warm/20 relative group">
              <img src="/images/sss3.png" alt="Circular Economy Agriculture" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-carbon/20 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Environmental Stewardship Dashboard Section */}
      <section className="py-24 bg-ivory border-t border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center gap-1.5">
                <BarChart3 size={16} className="text-gold-warm" />
                Impact Dashboard
              </span>
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('sustainability.esgTitle') }} /></h2>
              <p className="text-xs uppercase tracking-wider text-carbon/60 font-semibold"><span dangerouslySetInnerHTML={{ __html: t('sustainability.esgSub') }} /></p>
              <p className="text-sm text-carbon/75 font-light leading-relaxed">
                {t('sustainability.esgText')}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Droplets className="text-gold-warm w-8 h-8" />,
                  title: 'Precision Water',
                  desc: t('sustainability.esgBullet1'),
                  metric: '-45% Water Waste'
                },
                {
                  icon: <Maximize2 className="text-gold-warm w-8 h-8" />,
                  title: 'Land Optimization',
                  desc: t('sustainability.esgBullet2'),
                  metric: '5x Yield Intensity'
                },
                {
                  icon: <Users2 className="text-gold-warm w-8 h-8" />,
                  title: 'Social Empowerment',
                  desc: t('sustainability.esgBullet3'),
                  metric: '100% Fair Contracts'
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-cream border border-gold-warm/15 rounded-xl p-6 flex flex-col justify-between shadow-sm min-h-[300px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="bg-forest/5 p-3 rounded-lg w-fit">
                      {card.icon}
                    </div>
                    <h3 className="font-serif font-bold text-lg md:text-xl text-forest leading-tight" dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p className="text-xs text-carbon/75 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                  <div className="border-t border-gold-warm/20 pt-4 mt-4 text-center">
                    <span className="text-sm font-semibold tracking-wider text-gold-antique uppercase font-mono block">
                      {card.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest text-cream py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-leaf/20 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-gold-champagne tracking-wide leading-tight"><span dangerouslySetInnerHTML={{ __html: t('sustainability.ctaTitle') }} /></h2>
          <p className="text-sm md:text-base text-cream/80 max-w-2xl font-light leading-relaxed"><span dangerouslySetInnerHTML={{ __html: t('sustainability.ctaSub') }} /></p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/contact"
              className="bg-gold-warm hover:bg-gold-champagne text-carbon font-semibold py-3.5 px-8 rounded transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm uppercase tracking-wider shadow-sm"
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
