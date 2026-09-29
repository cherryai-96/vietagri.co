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
import { SEO } from '../components/SEO';
import { BioBalanceLoop } from '../components/BioBalanceLoop';

export const Sustainability: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="font-sans overflow-hidden bg-cream text-carbon">
      <SEO 
        title="Sustainability & ESG | Vietnam Agriculture Center"
        description="Our commitment to sustainable agriculture, circular economy, and fair trade. Discover how we empower local farmers and optimize resources."
        url="https://vietagri.co/sustainability"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sustainability & ESG",
          "description": "Our commitment to sustainable agriculture, circular economy, and fair trade.",
          "publisher": {
            "@type": "Organization",
            "name": "Vietnam Agriculture Center"
          }
        }}
        preloadImage="/images/shero.webp"
      />
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
              {language === 'vi' ? 'ESG & Phát Triển Bền Vững' : language === 'zh' ? 'ESG 与可持续发展' : language === 'ko' ? 'ESG & 지속가능성' : language === 'ja' ? 'ESG & サステナビリティ' : 'ESG & Sustainability'}
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
                {language === 'vi' ? 'Tư Vấn & Chứng Nhận' : language === 'zh' ? '认证与合规咨询' : language === 'ko' ? '인증 및 컨설팅' : language === 'ja' ? '認証・コンサルティング' : 'Certification Consultancy'}
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
                  title: language === 'vi' ? 'Chuyển Đổi Hữu Cơ' : language === 'zh' ? '有机转型管理' : language === 'ko' ? '유기농 전환 관리' : language === 'ja' ? 'オーガニック移行管理' : 'Organic Transition',
                  desc: t('sustainability.certBullet1'),
                },
                {
                  title: language === 'vi' ? 'Tuân Thủ GlobalG.A.P.' : language === 'zh' ? 'GlobalG.A.P. 标准对接' : language === 'ko' ? 'GlobalG.A.P. 준수' : language === 'ja' ? 'GlobalG.A.P. 準拠' : 'GlobalG.A.P. Compliance',
                  desc: t('sustainability.certBullet2'),
                },
                {
                  title: language === 'vi' ? 'Tiêu Chuẩn Clean-Label' : language === 'zh' ? '清洁标签规范' : language === 'ko' ? '클린 라벨 표준' : language === 'ja' ? 'クリーンレーベル標準' : 'Clean-Label Standards',
                  desc: t('sustainability.certBullet3'),
                },
                {
                  title: language === 'vi' ? 'Hỗ Trợ Kiểm Toán' : language === 'zh' ? '独立审计支持' : language === 'ko' ? '감사 지원' : language === 'ja' ? '監査サポート' : 'Audit Support',
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
                      <p className="text-xs text-carbon/70 leading-relaxed font-light"><span dangerouslySetInnerHTML={{ __html: item.desc }} /></p>
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
              {language === 'vi' ? 'Kinh Tế Tuần Hoàn' : language === 'zh' ? '循环经济生态' : language === 'ko' ? '순환 경제' : language === 'ja' ? '循環型経済' : 'Circular Economy'}
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
                title: language === 'vi' ? 'Thu Hồi Sinh Khối' : language === 'zh' ? '生物质回收利用' : language === 'ko' ? '바이오매스 수거 및 업사이클링' : language === 'ja' ? 'バイオマス回収・アップサイクル' : 'Biomass Rescuing',
                desc: t('sustainability.circularBullet1'),
                color: 'bg-forest text-cream',
                icon: <RotateCcw size={20} className="text-gold-warm" />
              },
              {
                step: '02',
                title: language === 'vi' ? 'Nâng Cấp Dinh Dưỡng' : language === 'zh' ? '高营养升级循环' : language === 'ko' ? '고영양 업사이클링' : language === 'ja' ? '高栄養アップサイクリング' : 'High-Nutrient Upcycling',
                desc: language === 'vi' ? 'Xử lý phụ phẩm bằng sinh học ổn định và sấy khô kiểm soát nhằm giữ lại tối đa enzyme và vitamin.' : language === 'zh' ? '通过生物稳定化与受控脱水技术处理副产品，最大程度保留天然酶与维生素。' : language === 'ko' ? '생물학적 안정화 및 제어된 탈수 공정으로 농업 부산물을 처리하여 효소와 비타민을 최대한 보존합니다.' : language === 'ja' ? '生物学的安定化と制御された脱水処理により副産物を加工し、酵素とビタミンを最大限保持します。' : 'Processing by-products through biological stabilization and controlled dehydration to retain maximum enzymes and vitamins.',
                color: 'bg-ivory border border-gold-warm/20 text-carbon',
                icon: <Sparkles size={20} className="text-forest" />
              },
              {
                step: '03',
                title: language === 'vi' ? 'Chuỗi Giá Trị Thứ Cấp' : language === 'zh' ? '二次价值链构建' : language === 'ko' ? '2차 가치 사슬' : language === 'ja' ? '二次フードバリューチェーン' : 'Secondary Value Chains',
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
                  <span className="text-3xl font-serif font-bold text-gold-warm opacity-80"><span dangerouslySetInnerHTML={{ __html: step.step }} /></span>
                  <div className="p-2 rounded-full bg-cream/10 border border-gold-warm/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold tracking-wide mt-2" dangerouslySetInnerHTML={{ __html: step.title }} />
                <p className="text-xs md:text-sm leading-relaxed font-light opacity-90"><span dangerouslySetInnerHTML={{ __html: step.desc }} /></p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <BioBalanceLoop />

      {/* Environmental Stewardship Dashboard Section */}
      <section className="py-24 bg-ivory border-t border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="text-xs font-bold text-gold-antique uppercase tracking-widest flex items-center gap-1.5">
                <BarChart3 size={16} className="text-gold-warm" />
                {language === 'vi' ? 'Bảng Thống Kê Tác Động' : language === 'zh' ? '影响与绩效仪表盘' : language === 'ko' ? '임팩트 대시보드' : language === 'ja' ? 'インパクト・ダッシュボード' : 'Impact Dashboard'}
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
                  title: language === 'vi' ? 'Tiết Kiệm Nước' : language === 'zh' ? '精准节水' : language === 'ko' ? '정밀 용수 관리' : language === 'ja' ? '精密節水管理' : 'Precision Water',
                  desc: t('sustainability.esgBullet1')
                },
                {
                  icon: <Maximize2 className="text-gold-warm w-8 h-8" />,
                  title: language === 'vi' ? 'Tối Ưu Diện Tích' : language === 'zh' ? '土地高效利用' : language === 'ko' ? '토지 최적화' : language === 'ja' ? '土地利用の最適化' : 'Land Optimization',
                  desc: t('sustainability.esgBullet2'),
                  metric: '5x Yield Intensity'
                },
                {
                  icon: <Users2 className="text-gold-warm w-8 h-8" />,
                  title: language === 'vi' ? 'Tác Động Xã Hội' : language === 'zh' ? '赋能农户与社会' : language === 'ko' ? '사회적 임팩트' : language === 'ja' ? '社会的エンパワーメント' : 'Social Empowerment',
                  desc: t('sustainability.esgBullet3'),
                  metric: '100% Fair Contracts'
                }
              ].map((metric, idx) => (
                <div key={idx} className="bg-cream border border-gold-warm/15 rounded-xl p-6 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col gap-3">
                    {metric.icon}
                    <h3 className="font-serif font-bold text-lg text-forest">{metric.title}</h3>
                    <p className="text-xs text-carbon/70 leading-relaxed font-light">{metric.desc}</p>
                  </div>
                  {metric.metric && (
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-antique bg-gold-warm/10 px-2.5 py-1 rounded w-fit mt-2">
                      {metric.metric}
                    </span>
                  )}
                </div>
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
