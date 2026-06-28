import React from 'react';
import { useTranslation } from '../i18n';
import { Leaf, Cpu, Sun, Sprout, Handshake, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CallToAction } from '../components/CallToAction';

export const ContractFarming: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Cpu size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov1'),
    },
    {
      icon: <Leaf size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov2'),
    },
    {
      icon: <Sprout size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov3'),
    },
    {
      icon: <CheckCircle2 size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov4'),
    },
    {
      icon: <Sun size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov5'),
    },
    {
      icon: <Handshake size={24} className="text-gold-warm" />,
      title: t('contractFarming.prov6'),
    },
  ];

  return (
    <div className="bg-carbon min-h-screen">
      <PageHero
        title={t('contractFarming.heroTitle')}
        subtitle={t('contractFarming.heroSub')}
        image="/images/ai_cf_hero.png"
      />

      {/* Who This Is For Section */}
      <section className="py-20 bg-carbon relative">
        <div className="absolute inset-0 bg-gold-warm/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">{t('contractFarming.forWhoTitle')}</h2>
            <div className="w-24 h-1 bg-gold-warm mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('contractFarming.for1Title'), desc: t('contractFarming.for1Desc'), img: '/images/v8.jpg' },
              { title: t('contractFarming.for2Title'), desc: t('contractFarming.for2Desc'), img: '/images/electroculture.png' },
              { title: t('contractFarming.for3Title'), desc: t('contractFarming.for3Desc'), img: '/images/advanced_agritech.png' },
            ].map((item, idx) => (
              <div key={idx} className="bg-carbon-light rounded-xl overflow-hidden shadow-2xl border border-white/5 group">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-gold-champagne mb-4">{item.title}</h3>
                  <p className="text-cream/80 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What VAC Provides Section */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-warm/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">{t('contractFarming.whatWeProvide')}</h2>
              <div className="w-20 h-1 bg-gold-warm mb-10"></div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 bg-carbon/30 rounded-lg shrink-0">
                      {feat.icon}
                    </div>
                    <p className="text-cream/90 font-sans font-medium mt-1">{feat.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gold-warm/20 blur-3xl rounded-full"></div>
              <img 
                src="/images/ai_cf_field.png" 
                alt="High-Tech Farm" 
                className="relative z-10 w-full h-auto object-cover rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title={t('contractFarming.ctaTitle')}
        subtitle={t('common.connecting')}
        buttonText={t('contractFarming.ctaBtn')}
      />
    </div>
  );
};
