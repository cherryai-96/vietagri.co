import React from 'react';
import { useTranslation } from '../i18n';
import { ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CallToAction } from '../components/CallToAction';

export const OrganicConsulting: React.FC = () => {
  const { t } = useTranslation();

  const risks = [
    t('organicRisk.risk1'),
    t('organicRisk.risk2'),
    t('organicRisk.risk3'),
    t('organicRisk.risk4'),
    t('organicRisk.risk5'),
  ];

  const solutions = [
    t('organicRisk.sol1'),
    t('organicRisk.sol2'),
    t('organicRisk.sol3'),
    t('organicRisk.sol4'),
    t('organicRisk.sol5'),
  ];

  return (
    <div className="bg-carbon min-h-screen">
      <PageHero
        title={t('organicRisk.title')}
        subtitle={t('organicRisk.sub')}
        image="/images/pr_large_farm.png"
      />

      <section className="py-24 bg-carbon relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* The Risk */}
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <ShieldAlert size={36} className="text-red-400" />
                <h2 className="text-3xl font-serif text-white">{t('organicRisk.riskTitle')}</h2>
              </div>
              <ul className="space-y-6">
                {risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span className="text-cream/80 font-sans text-lg">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The VAC Solution */}
            <div className="bg-forest/20 border border-gold-warm/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle size={120} className="text-gold-warm" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <CheckCircle size={36} className="text-gold-champagne" />
                  <h2 className="text-3xl font-serif text-gold-champagne">{t('organicRisk.solutionTitle')}</h2>
                </div>
                <ul className="space-y-6">
                  {solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <ArrowRight size={20} className="text-gold-warm shrink-0 mt-1" />
                      <span className="text-cream/90 font-sans text-lg">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="pb-24 bg-carbon">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-[400px]">
             <img 
               src="/images/tea_plantation.jpg" 
               alt="Sustainable Organic Consulting" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-12">
               <h3 className="text-3xl font-serif text-cream mb-4">Export Without Friction</h3>
               <p className="text-cream/80 font-sans text-lg max-w-2xl">Ensure your products cross borders seamlessly with our verifiable compliance roadmaps.</p>
             </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title={t('organicRisk.cta')}
        subtitle={t('common.connecting')}
        buttonText={t('common.contactBtn')}
      />
    </div>
  );
};
