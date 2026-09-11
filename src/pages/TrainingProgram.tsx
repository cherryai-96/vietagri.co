import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, 
  Globe2, 
  Handshake, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Store, 
  UtensilsCrossed, 
  Factory, 
  Briefcase, 
  Users, 
  Award, 
  BookOpen, 
  Sparkles, 
  X, 
  Send 
} from 'lucide-react';

export const TrainingProgram: React.FC = () => {
  const { t, language } = useTranslation();
  const [modalMode, setModalMode] = useState<'apply' | 'info' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setModalMode(null);
      }, 3000);
    }, 1200);
  };

  const targetBuyerCategories = [
    { title: t('training.targetImporters'), icon: <Globe2 className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetDistributors'), icon: <Building2 className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetWholesalers'), icon: <Briefcase className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetFoodMfr'), icon: <Factory className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetIngredients'), icon: <Sparkles className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetSupermarkets'), icon: <Store className="w-6 h-6 text-gold-warm" /> },
    { title: t('training.targetHoreca'), icon: <UtensilsCrossed className="w-6 h-6 text-gold-warm" /> },
  ];

  const whoTargetGroups = [
    {
      badge: language === 'vi' ? ' Sinh Viên & Trẻ Tuổi' : 'Young Talent',
      title: t('training.who1Title'),
      desc: t('training.who1Desc'),
      icon: <GraduationCap className="w-7 h-7 text-gold-warm" />
    },
    {
      badge: language === 'vi' ? ' Quản Lý & Điều Hành' : 'Executives',
      title: t('training.who2Title'),
      desc: t('training.who2Desc'),
      icon: <Briefcase className="w-7 h-7 text-gold-warm" />
    },
    {
      badge: language === 'vi' ? ' Doanh Nhân Nông Nghiệp' : 'Entrepreneurs',
      title: t('training.who3Title'),
      desc: t('training.who3Desc'),
      icon: <TrendingUp className="w-7 h-7 text-gold-warm" />
    },
    {
      badge: language === 'vi' ? ' Chuyên Gia Cựu Trào' : 'Senior Experts',
      title: t('training.who4Title'),
      desc: t('training.who4Desc'),
      icon: <Users className="w-7 h-7 text-gold-warm" />
    },
  ];

  const curriculumModules = [
    { num: '01', title: t('training.mod1Title'), desc: t('training.mod1Desc') },
    { num: '02', title: t('training.mod2Title'), desc: t('training.mod2Desc') },
    { num: '03', title: t('training.mod3Title'), desc: t('training.mod3Desc') },
    { num: '04', title: t('training.mod4Title'), desc: t('training.mod4Desc') },
    { num: '05', title: t('training.mod5Title'), desc: t('training.mod5Desc') },
    { num: '06', title: t('training.mod6Title'), desc: t('training.mod6Desc') },
    { num: '07', title: t('training.mod7Title'), desc: t('training.mod7Desc') },
    { num: '08', title: t('training.mod8Title'), desc: t('training.mod8Desc') },
    { num: '09', title: t('training.mod9Title'), desc: t('training.mod9Desc') },
    { num: '10', title: t('training.mod10Title'), desc: t('training.mod10Desc') },
  ];

  const portfolioItems = [
    t('training.pfItem1'),
    t('training.pfItem2'),
    t('training.pfItem3'),
    t('training.pfItem4'),
    t('training.pfItem5'),
    t('training.pfItem6'),
    t('training.pfItem7'),
    t('training.pfItem8'),
  ];

  const programBenefits = [
    { title: t('training.benefit1Title'), desc: t('training.benefit1Desc'), icon: <BookOpen className="w-6 h-6 text-forest" /> },
    { title: t('training.benefit2Title'), desc: t('training.benefit2Desc'), icon: <Award className="w-6 h-6 text-forest" /> },
    { title: t('training.benefit3Title'), desc: t('training.benefit3Desc'), icon: <Handshake className="w-6 h-6 text-forest" /> },
    { title: t('training.benefit4Title'), desc: t('training.benefit4Desc'), icon: <Globe2 className="w-6 h-6 text-forest" /> },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon font-sans">
      <SEO
        title="Vietnam Agri Traders Training Program | VAC"
        description="Become a certified Vietnam Agri Trader. Connecting Vietnam's agricultural strengths with global buyers through structured trade representative training and VAC partner ecosystem."
        url="https://vietagri.co/training-program"
        preloadImage="/images/training_hero_bg.jpg"
      />

      {/* === HERO SECTION === */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-carbon text-cream overflow-hidden px-4 md:px-8 border-b border-gold-warm/30">
        {/* Background Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center transition-all duration-1000 transform scale-105" 
          style={{ backgroundImage: `url('/images/training_hero_bg.jpg')` }} 
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-carbon/90 via-carbon/75 to-carbon" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-carbon/40 to-carbon opacity-80" />

        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-5"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gold-champagne bg-gold-warm/15 border border-gold-warm/40 px-5 py-2 rounded-full flex items-center gap-2.5 backdrop-blur-md shadow-lg shadow-black/20">
              <GraduationCap size={18} className="text-gold-warm" />
              {t('training.heroEyebrow')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.15] text-gold-champagne max-w-5xl tracking-tight drop-shadow-md">
              {t('training.heroTitle')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 text-cream/90 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-3xl text-balance"
          >
            <p>{t('training.heroPara1')}</p>
            <p>{t('training.heroPara2')}</p>
            <p>{t('training.heroPara3')}</p>
          </motion.div>

          {/* Tagline Badge */}
          <div className="py-2 px-8 bg-forest/50 border border-gold-warm/30 rounded-full text-gold-champagne text-xs md:text-sm font-bold uppercase tracking-[0.25em] backdrop-blur-md shadow-inner">
            {t('training.tagline')}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <button
              onClick={() => setModalMode('info')}
              className="bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs md:text-sm uppercase tracking-wider py-4 px-9 rounded-xl shadow-xl hover:shadow-gold-warm/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <span>{t('training.btnInfo')}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Header Quick Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 w-full max-w-5xl pt-8 border-t border-gold-warm/20">
            <div className="bg-black/30 backdrop-blur-md border border-gold-warm/20 rounded-xl p-4 flex flex-col items-center text-center gap-1.5">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold-champagne">100+</span>
              <span className="text-[11px] md:text-xs text-cream/80 uppercase tracking-wider font-medium">{language === 'vi' ? 'Sản Phẩm Catalogue' : 'Catalogue Products'}</span>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-gold-warm/20 rounded-xl p-4 flex flex-col items-center text-center gap-1.5">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold-champagne">10</span>
              <span className="text-[11px] md:text-xs text-cream/80 uppercase tracking-wider font-medium">{language === 'vi' ? 'Chuyên Đề Cốt Lõi' : 'Core Modules'}</span>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-gold-warm/20 rounded-xl p-4 flex flex-col items-center text-center gap-1.5">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold-champagne">Global</span>
              <span className="text-[11px] md:text-xs text-cream/80 uppercase tracking-wider font-medium">{language === 'vi' ? 'Mạng Lưới Người Mua' : 'Buyer Networks'}</span>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-gold-warm/20 rounded-xl p-4 flex flex-col items-center text-center gap-1.5">
              <span className="font-serif text-xl md:text-2xl font-bold text-gold-champagne">100%</span>
              <span className="text-[11px] md:text-xs text-cream/80 uppercase tracking-wider font-medium">{language === 'vi' ? 'Hậu Thuẫn Từ VAC' : 'VAC Ecosystem Backing'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 1: BECOME A BRIDGE BETWEEN VIETNAM & THE WORLD === */}
      <section className="py-20 md:py-28 bg-ivory px-4 md:px-8 border-b border-gold-warm/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-5xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Trade Representation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-forest leading-tight lg:whitespace-nowrap">
              {t('training.bridgeTitle')}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-3xl mx-auto">
              {t('training.bridgeIntro')}
            </p>
          </div>

          {/* 7 Target Buyer Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">
            {targetBuyerCategories.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white border border-gold-warm/20 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-forest/5 rounded-full border border-gold-warm/15">
                  {item.icon}
                </div>
                <span className="font-serif text-xs md:text-sm font-bold text-forest leading-snug">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Key Role Highlight Banner */}
          <div className="bg-forest text-cream rounded-2xl p-8 md:p-12 shadow-xl border border-gold-warm/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-warm/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="p-4 bg-gold-warm/20 rounded-2xl border border-gold-warm/40 shrink-0">
                <Handshake size={36} className="text-gold-champagne" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-champagne">
                  {language === 'vi' ? 'Vai trò Cốt lõi của Thương nhân' : 'Your Principal Role'}
                </h3>
                <p className="text-sm md:text-base text-cream/90 font-light leading-relaxed">
                  {t('training.bridgeRole')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: WHO IS THIS PROGRAM FOR? === */}
      <section className="py-20 md:py-28 bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Target Audience
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-forest lg:whitespace-nowrap">
              {t('training.whoTitle')}
            </h2>
            <p className="text-xs md:text-sm uppercase tracking-wider text-carbon/60 font-semibold">
              {t('training.whoSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoTargetGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl border border-gold-warm/20 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-forest/5 rounded-xl border border-gold-warm/15 group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                      {group.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-warm/15 text-brown-soil px-2.5 py-1 rounded">
                      {group.badge}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-forest leading-snug">
                    {group.title}
                  </h3>
                  <p className="text-xs md:text-sm text-carbon/70 font-light leading-relaxed">
                    {group.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 3: STRUCTURED CURRICULUM & 10 MODULES === */}
      <section className="py-20 md:py-28 bg-ivory border-y border-gold-warm/15 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-5xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Curriculum Roadmap
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.75rem] font-bold text-forest lg:whitespace-nowrap">
              {t('training.curriculumTitle')}
            </h2>
            <p className="text-xs md:text-sm uppercase tracking-wider text-carbon/60 font-semibold">
              {t('training.curriculumSub')}
            </p>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-4xl mx-auto mt-2">
              {t('training.curriculumIntro')}
            </p>
          </div>

          {/* 10 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {curriculumModules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1, duration: 0.5 }}
                className="bg-cream border border-gold-warm/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-serif font-black text-2xl md:text-3xl text-gold-warm opacity-85 shrink-0 bg-forest/5 px-3 py-1 rounded-lg border border-gold-warm/20">
                    {mod.num}
                  </span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-forest leading-snug group-hover:text-forest-fresh transition-colors">
                    {mod.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-carbon/75 font-light leading-relaxed pl-14">
                  {mod.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Practical Training Approach Callout */}
          <div className="bg-forest/5 border border-gold-warm/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="p-4 bg-forest text-gold-champagne rounded-xl shrink-0 border border-gold-warm/30">
              <Sparkles size={32} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-forest">
                  {t('training.practicalTitle')}
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-gold-warm/20 text-brown-soil px-3 py-1 rounded-full border border-gold-warm/30">
                  40% Theory • 60% Practical
                </span>
              </div>
              <p className="text-xs md:text-sm text-carbon/80 font-light leading-relaxed">
                {t('training.practicalDesc')}
              </p>
            </div>
          </div>

          {/* Practical Trading Portfolio Outcomes Checklist */}
          <div className="bg-white border border-gold-warm/25 rounded-2xl p-8 md:p-12 shadow-md flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
                Program Deliverables
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-forest">
                {t('training.portfolioTitle')}
              </h3>
              <p className="text-xs md:text-sm text-carbon/70 font-light">
                {t('training.portfolioSub')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 bg-ivory/60 border border-gold-warm/15 rounded-xl p-4 transition-colors hover:bg-forest/5"
                >
                  <CheckCircle2 size={20} className="text-forest shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-carbon/85 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: PROGRAM BENEFITS & VAC SUPPORT === */}
      <section className="py-20 md:py-28 bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-5xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
              Ecosystem Advantage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-forest lg:whitespace-nowrap">
              {t('training.benefitsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((ben, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-gold-warm/20 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-forest/5 rounded-xl border border-gold-warm/15 w-fit">
                  {ben.icon}
                </div>
                <h3 className="font-serif text-base md:text-lg font-bold text-forest">
                  {ben.title}
                </h3>
                <p className="text-xs md:text-sm text-carbon/70 font-light leading-relaxed">
                  {ben.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="text-center pt-8">
            <button
              onClick={() => setModalMode('info')}
              className="bg-forest hover:bg-forest-fresh text-cream font-bold text-xs md:text-sm uppercase tracking-wider py-4 px-10 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>{t('training.btnInfo')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* === APPLICATION & INFO MODAL === */}
      <AnimatePresence>
        {modalMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-gold-warm/30 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-carbon text-cream p-6 flex justify-between items-center border-b border-gold-warm/20">
                <div>
                  <span className="text-[10px] text-gold-warm font-bold uppercase tracking-widest">
                    Vietnam Agriculture Center
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {t('training.btnInfo')}
                  </h3>
                </div>
                <button
                  onClick={() => setModalMode(null)}
                  className="p-1 rounded bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Form Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                {submitSuccess ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                    <CheckCircle2 size={48} className="text-forest" />
                    <h4 className="font-serif font-bold text-2xl text-forest">
                      {language === 'vi' ? 'Đã Nhận Thông Tin Đăng Ký' : 'Inquiry Received'}
                    </h4>
                    <p className="text-sm text-carbon/70 max-w-md font-light">
                      {t('common.success')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-carbon/80">
                        {t('training.formFullName')} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyen Van A"
                        className="bg-ivory border border-gold-warm/30 rounded px-4 py-2.5 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-carbon/80">
                          {t('training.formEmail')} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="email@example.com"
                          className="bg-ivory border border-gold-warm/30 rounded px-4 py-2.5 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-carbon/80">
                          {t('training.formPhone')} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+84 901 234 567"
                          className="bg-ivory border border-gold-warm/30 rounded px-4 py-2.5 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-carbon/80">
                        {t('training.formBackground')}
                      </label>
                      <input
                        type="text"
                        placeholder="Export Executive / Farm Owner / Senior Consultant..."
                        className="bg-ivory border border-gold-warm/30 rounded px-4 py-2.5 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-carbon/80">
                        {t('training.formMessage')}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={language === 'vi' ? 'Nêu ngắn gọn định hướng hoặc mong muốn hợp tác...' : 'Briefly describe your interest or market network...'}
                        className="bg-ivory border border-gold-warm/30 rounded px-4 py-2.5 text-xs md:text-sm text-carbon focus:outline-none focus:border-gold-warm"
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setModalMode(null)}
                        className="px-4 py-2.5 border border-carbon/20 rounded text-xs font-bold uppercase tracking-wider text-carbon hover:bg-carbon/5"
                      >
                        {language === 'vi' ? 'Hủy' : 'Cancel'}
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-gold-warm hover:bg-gold-champagne text-brown-soil font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>{t('common.loading')}</span>
                        ) : (
                          <>
                            <span>{t('training.btnSubmitInquiry')}</span>
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
