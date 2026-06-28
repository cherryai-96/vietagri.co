import React from 'react';
import { useTranslation } from '../i18n';
import { ShieldCheck, Beaker, Factory } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CallToAction } from '../components/CallToAction';

export const Infrastructure: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-carbon min-h-screen">
      <PageHero
        title={t('infra.heroTitle')}
        subtitle={t('infra.heroSub')}
        image="/images/intro_hightech_farm.png"
      />

      {/* Certifications Strip */}
      <section className="py-12 bg-carbon border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-cream/60 font-sans text-sm uppercase tracking-widest mb-8">{t('infra.certTitle')}</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
            <ShieldCheck size={48} className="text-gold-warm" />
            <span className="text-2xl font-serif text-cream">HACCP</span>
            <span className="text-2xl font-serif text-cream">FSSC 22000</span>
            <span className="text-2xl font-serif text-cream">Halal Certified</span>
          </div>
        </div>
      </section>

      {/* The Wolffia Mother Lab */}
      <section className="py-24 bg-carbon relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold-warm/20 blur-2xl rounded-2xl transition-all duration-500 group-hover:bg-gold-warm/30"></div>
                <img 
                  src="/images/pr_mother_lab.png" 
                  alt="Mother Lab" 
                  className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Beaker size={32} className="text-gold-warm" />
                <h2 className="text-3xl md:text-4xl font-serif text-cream">{t('infra.labTitle')}</h2>
              </div>
              <div className="w-24 h-1 bg-gold-warm mb-8"></div>
              <p className="text-cream/80 text-lg leading-relaxed font-sans mb-8">
                {t('infra.labDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Processing Facility */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-warm/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Factory size={32} className="text-gold-warm" />
                <h2 className="text-3xl md:text-4xl font-serif text-cream">{t('infra.procTitle')}</h2>
              </div>
              <div className="w-24 h-1 bg-gold-warm mb-8"></div>
              <p className="text-cream/80 text-lg leading-relaxed font-sans mb-8">
                {t('infra.procDesc')}
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold-warm/20 blur-2xl rounded-2xl transition-all duration-500 group-hover:bg-gold-warm/30"></div>
                <img 
                  src="/images/pr_processing.png" 
                  alt="Processing Facility" 
                  className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title={t('infra.cta')}
        subtitle={t('common.connecting')}
        buttonText={t('common.contactBtn')}
      />
    </div>
  );
};
