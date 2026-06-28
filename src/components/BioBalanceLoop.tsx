import React from 'react';
import { useTranslation } from '../i18n';
import { Sprout, TrendingUp, RefreshCcw, Factory, Fish } from 'lucide-react';

export const BioBalanceLoop: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      num: '01',
      icon: <Sprout size={32} className="text-gold-champagne" />,
      title: t('bioLoop.step1Title'),
      desc: t('bioLoop.step1Desc'),
    },
    {
      num: '02',
      icon: <TrendingUp size={32} className="text-gold-champagne" />,
      title: t('bioLoop.step2Title'),
      desc: t('bioLoop.step2Desc'),
    },
    {
      num: '03',
      icon: <RefreshCcw size={32} className="text-gold-champagne" />,
      title: t('bioLoop.step3Title'),
      desc: t('bioLoop.step3Desc'),
    },
    {
      num: '04',
      icon: <Factory size={32} className="text-gold-champagne" />,
      title: t('bioLoop.step4Title'),
      desc: t('bioLoop.step4Desc'),
    },
    {
      num: '05',
      icon: <Fish size={32} className="text-gold-champagne" />,
      title: t('bioLoop.step5Title'),
      desc: t('bioLoop.step5Desc'),
    },
  ];

  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">{t('bioLoop.title')}</h2>
          <div className="w-24 h-1 bg-gold-warm mx-auto rounded-full mb-6"></div>
          <p className="text-cream/80 font-sans text-lg leading-relaxed">{t('bioLoop.sub')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gold-warm/20 via-gold-warm/50 to-gold-warm/20 -translate-y-1/2 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-carbon border-2 border-gold-warm/30 flex items-center justify-center mb-6 shadow-xl relative group-hover:border-gold-champagne transition-colors duration-500">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-warm text-carbon font-bold text-sm flex items-center justify-center shadow-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-serif text-cream text-center mb-3 group-hover:text-gold-champagne transition-colors">{step.title}</h3>
              <p className="text-cream/70 text-sm text-center font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
