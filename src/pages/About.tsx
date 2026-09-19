import React from 'react';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans overflow-hidden bg-cream text-carbon">
      <SEO 
        title="About Us & Sustainability | Vietnam Agriculture Center (VAC)"
        description="Learn about Vietnam Agriculture Center (VAC), our mission, vision, national footprint, and our commitment to sustainable agriculture, circular economy, and ESG standards."
        url="https://vietagri.co/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Vietnam Agriculture Center",
          "url": "https://vietagri.co/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Vietnam Agriculture Center",
            "description": "We specialize in premium agricultural sourcing, contract farming, exporting, and sustainable ESG initiatives.",
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
              {t('language') === 'vi' ? 'Về Chúng Tôi & Phát Triển Bền Vững' : t('language') === 'zh' ? '关于我们与可持续发展' : 'About Us & Sustainability'}
            </span>
            <h1 className="font-serif text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-wide text-gold-champagne w-full xl:whitespace-nowrap">
              <span dangerouslySetInnerHTML={{ __html: t('about.heroTitle') }} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          >
            <span dangerouslySetInnerHTML={{ __html: t('about.heroSub') }} />
          </motion.p>
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
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest border-b border-gold-warm/25 pb-4">
                <span dangerouslySetInnerHTML={{ __html: t('about.missionTitle') }} />
              </h2>
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
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest border-b border-gold-warm/25 pb-4">
                <span dangerouslySetInnerHTML={{ __html: t('about.visionTitle') }} />
              </h2>
              <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* National Footprint Section */}
      <section className="py-24 bg-ivory text-carbon px-4 md:px-8 border-y border-gold-warm/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              {t('language') === 'vi' ? 'Mạng Lưới Toàn Quốc' : t('language') === 'zh' ? '全国产业布局' : 'National Footprint'}
            </span>
            <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t('about.footprintTitle') }} />
            </h2>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('about.footprintDesc1')}
            </p>
            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {t('about.footprintDesc2')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-semibold text-forest">
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>{t('language') === 'vi' ? 'Khu Vực Tây Nguyên' : t('language') === 'zh' ? '越南西原农业产区' : 'Central Highlands Region'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>{t('language') === 'vi' ? 'Đồng Bằng Sông Cửu Long' : t('language') === 'zh' ? '湄公河三角洲农产基地' : 'Mekong Delta Region'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5 rounded-full border border-gold-warm/15 shadow-sm">
                <MapPin size={14} className="text-gold-warm" />
                <span>{t('language') === 'vi' ? 'Trung Tâm Logistics TP. HCM' : t('language') === 'zh' ? '胡志明市出口物流枢纽' : 'Ho Chi Minh City Logistics Hub'}</span>
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
              <h3 className="font-serif font-bold text-xl md:text-2xl text-gold-champagne">
                {t('language') === 'vi' ? 'Mạng Lưới Vùng Trồng Tích Hợp' : t('language') === 'zh' ? '一体化产地基地网络' : 'Integrated Field Network'}
              </h3>
              <p className="text-xs font-light text-cream/80 mt-1">
                {t('language') === 'vi' ? 'Giám sát trực tiếp trên khắp các vùng canh tác phì nhiêu tại Việt Nam.' : t('language') === 'zh' ? '深入越南肥沃农业产区，实行全流程直接监管。' : 'Direct oversight across fertile farming regions in Vietnam.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SUSTAINABILITY & ESG INTEGRATED SECTION === */}
      <div id="sustainability" className="scroll-mt-24 border-t border-gold-warm/20">
        {/* Intro Sustainability Section */}
        <section className="py-24 bg-ivory px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-champagne bg-forest px-3 py-1 rounded-full w-fit flex items-center gap-1.5">
                <Sparkles size={14} className="text-gold-warm" />
                {t('language') === 'vi' ? 'ESG & Phát Triển Bền Vững' : t('language') === 'zh' ? 'ESG 与可持续发展' : 'ESG & Sustainability'}
              </span>
              <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold text-forest leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t('sustainability.introTitle') }} />
              </h2>
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
        <section className="py-24 bg-cream border-y border-gold-warm/15 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-gold-warm" />
                  {t('language') === 'vi' ? 'Tư Vấn & Chứng Nhận' : t('language') === 'zh' ? '认证与合规咨询' : 'Certification Consultancy'}
                </span>
                <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl font-bold text-forest leading-tight">
                  <span dangerouslySetInnerHTML={{ __html: t('sustainability.certTitle') }} />
                </h2>
                <p className="text-xs uppercase tracking-wider text-carbon/60 font-semibold">
                  <span dangerouslySetInnerHTML={{ __html: t('sustainability.certSub') }} />
                </p>
                <p className="text-sm text-carbon/75 font-light leading-relaxed">
                  {t('sustainability.certText')}
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: t('language') === 'vi' ? 'Chuyển Đổi Hữu Cơ' : t('language') === 'zh' ? '有机转型管理' : 'Organic Transition',
                    desc: t('sustainability.certBullet1'),
                  },
                  {
                    title: t('language') === 'vi' ? 'Tuân Thủ GlobalG.A.P.' : t('language') === 'zh' ? 'GlobalG.A.P. 标准对接' : 'GlobalG.A.P. Compliance',
                    desc: t('sustainability.certBullet2'),
                  },
                  {
                    title: t('language') === 'vi' ? 'Tiêu Chuẩn Clean-Label' : t('language') === 'zh' ? '清洁标签规范' : 'Clean-Label Standards',
                    desc: t('sustainability.certBullet3'),
                  },
                  {
                    title: t('language') === 'vi' ? 'Hỗ Trợ Kiểm Toán' : t('language') === 'zh' ? '独立审计支持' : 'Audit Support',
                    desc: t('sustainability.certBullet4'),
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="bg-ivory border border-gold-warm/15 rounded-lg p-6 hover:shadow-md transition-all duration-300 bento-card"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-warm shrink-0 mt-1" size={18} />
                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif font-bold text-xl text-forest" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-carbon/70 leading-relaxed font-light">
                          <span dangerouslySetInnerHTML={{ __html: item.desc }} />
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
        <section className="py-24 bg-ivory px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center justify-center gap-1.5">
                <RotateCcw size={16} className="text-gold-warm" />
                {t('language') === 'vi' ? 'Kinh Tế Tuần Hoàn' : t('language') === 'zh' ? '循环经济生态' : 'Circular Economy'}
              </span>
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest">
                <span dangerouslySetInnerHTML={{ __html: t('sustainability.circularTitle') }} />
              </h2>
              <p className="text-xs uppercase tracking-wider text-carbon/60 font-semibold">
                <span dangerouslySetInnerHTML={{ __html: t('sustainability.circularSub') }} />
              </p>
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
                  title: t('language') === 'vi' ? 'Thu Hồi Sinh Khối' : t('language') === 'zh' ? '生物质回收利用' : 'Biomass Rescuing',
                  desc: t('sustainability.circularBullet1'),
                  color: 'bg-forest text-cream',
                  icon: <RotateCcw size={20} className="text-gold-warm" />
                },
                {
                  step: '02',
                  title: t('language') === 'vi' ? 'Nâng Cấp Dinh Dưỡng' : t('language') === 'zh' ? '高营养升级循环' : 'High-Nutrient Upcycling',
                  desc: t('language') === 'vi' ? 'Xử lý phụ phẩm bằng sinh học ổn định và sấy khô kiểm soát nhằm giữ lại tối đa enzyme và vitamin.' : t('language') === 'zh' ? '通过生物稳定化与受控脱水技术处理副产品，最大程度保留天然酶与维生素。' : 'Processing by-products through biological stabilization and controlled dehydration to retain maximum enzymes and vitamins.',
                  color: 'bg-cream border border-gold-warm/20 text-carbon',
                  icon: <Sparkles size={20} className="text-forest" />
                },
                {
                  step: '03',
                  title: t('language') === 'vi' ? 'Chuỗi Giá Trị Thứ Cấp' : t('language') === 'zh' ? '二次价值链构建' : 'Secondary Value Chains',
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
                    <span className="text-3xl font-serif font-bold text-gold-warm opacity-80">
                      <span dangerouslySetInnerHTML={{ __html: step.step }} />
                    </span>
                    <div className="p-2 rounded-full bg-cream/10 border border-gold-warm/20 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-wide mt-2" dangerouslySetInnerHTML={{ __html: step.title }} />
                  <p className="text-xs md:text-sm leading-relaxed font-light opacity-90">
                    <span dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
