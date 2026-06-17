import React, { useRef } from 'react';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  TrendingUp,
  ShieldCheck,
  Truck,
  Leaf,
  Cpu,
  Lock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const amount = firstChild ? firstChild.offsetWidth + 32 : 360; // 32 is md:gap-8
      scrollRef.current.scrollBy({ left: amount * direction, behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      icon: <Globe className="text-gold-warm w-8 h-8" />,
      title: t('home.sourcingTitle'),
      desc: t('home.sourcingDesc'),
      link: '/services',
    },
    {
      icon: <TrendingUp className="text-gold-warm w-8 h-8" />,
      title: t('home.farmingTitle'),
      desc: t('home.farmingDesc'),
      link: '/services',
    },
    {
      icon: <ShieldCheck className="text-gold-warm w-8 h-8" />,
      title: t('home.qaTitle'),
      desc: t('home.qaDesc'),
      link: '/services',
    },
    {
      icon: <Truck className="text-gold-warm w-8 h-8" />,
      title: t('home.logisticsTitle'),
      desc: t('home.logisticsDesc'),
      link: '/services',
    },
  ];

  const wolffiaTech = [
    {
      icon: <Leaf className="text-forest-fresh w-6 h-6" />,
      title: t('home.tech1Title'),
      desc: t('home.tech1Desc'),
      image: '/images/ss3.1.png',
    },
    {
      icon: <Cpu className="text-forest-fresh w-6 h-6" />,
      title: t('home.tech2Title'),
      desc: t('home.tech2Desc'),
      image: '/images/ss3.2.jpeg',
    },
    {
      icon: <Lock className="text-forest-fresh w-6 h-6" />,
      title: t('home.tech3Title'),
      desc: t('home.tech3Desc'),
      image: '/images/ss3.3.jpg',
    },
    {
      icon: <CheckCircle className="text-forest-fresh w-6 h-6" />,
      title: t('home.tech4Title'),
      desc: t('home.tech4Desc'),
      image: '/images/ss3.4.jpg',
    },
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center bg-carbon text-cream pt-24 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-45">
          <img 
            src="/hero_home.png" 
            alt="Vietnam Agriculture Center" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Cinematic Premium Overlay: Top-bottom gradient and dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/75 via-carbon/40 to-carbon z-5 pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 z-5 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(var(--color-gold-warm) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <h1 
              className="font-serif text-balance text-[1.75rem] leading-[1.1] sm:text-[2.25rem] md:text-4xl lg:text-[3rem] font-black leading-tight tracking-wide text-white max-w-4xl mx-auto drop-shadow-md py-1 uppercase"
              dangerouslySetInnerHTML={{ __html: t('home.heroTitle') }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-lg max-w-3xl font-medium leading-relaxed drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique"
          ><span dangerouslySetInnerHTML={{ __html: t('home.heroSub') }} /></motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-4 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/20 flex items-center gap-2 group cursor-pointer hover:scale-[1.03]"
            >
              <span>{t('common.partnerBtn')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <a
              href="/VAC_Corporate_Profile.pdf"
              download
              className="border border-cream/40 hover:border-gold-champagne hover:bg-cream/10 text-cream px-8 py-4 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer hover:scale-[1.03] backdrop-blur-sm"
            >
              {t('common.downloadBtn')}
            </a>
          </motion.div>
        </div>
      </section>



      {/* Advantage Section */}
      <section className="py-24 bg-ivory text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[2rem] leading-[1.1] sm:text-[2.5rem] md:text-5xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-wide text-forest leading-tight">
                <span dangerouslySetInnerHTML={{ __html: t('home.advantageTitle') }} />
              </h2>
              <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed"><span dangerouslySetInnerHTML={{ __html: t('home.advantageSub') }} /></p>
            </div>
            <div className="relative mt-2 min-h-[300px] flex-grow w-full rounded-2xl overflow-hidden shadow-xl border border-gold-warm/20 group">
              <img src="/images/home2.png" alt="Vietnam Agriculture Advantage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {advantages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-cream border border-gold-warm/15 rounded-xl p-8 flex flex-col gap-6 bento-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3.5 bg-forest/5 rounded-lg w-fit border border-gold-warm/10">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-forest">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-carbon/70 font-light leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="text-xs font-bold text-forest hover:text-gold-antique uppercase tracking-wider flex items-center gap-1.5 transition-colors self-start mt-2 group"
                >
                  <span>Read Detail</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Spotlight: Viet Wolffia - Slider Layout */}
      <section className="py-24 bg-cream border-t border-gold-warm/15 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center relative group">
          
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-forest flex items-center gap-2">
              <Leaf size={14} /><span dangerouslySetInnerHTML={{ __html: t('home.spotlightSub') }} /></span>
            <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold tracking-wide text-forest leading-tight max-w-3xl"><span dangerouslySetInnerHTML={{ __html: t('home.spotlightTitle') }} /></h2>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <button 
              onClick={() => scrollBy(-1)}
              className="absolute -left-4 md:-left-8 z-20 p-3 bg-white border border-gold-warm/30 text-forest rounded-full shadow-lg hover:bg-gold-warm hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100 disabled:opacity-0"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-4 w-full scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {wolffiaTech.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white border border-gold-warm/15 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] flex-shrink-0 snap-start"
                >
                  {/* For alternate layout, swap image and text position based on index */}
                  {idx % 2 === 0 ? (
                    <>
                      <div className="h-48 md:h-56 overflow-hidden p-4 pb-0">
                        <img src={tech.image} className="w-full h-full object-cover rounded-t-xl transition-transform duration-700 hover:scale-105" alt={tech.title} />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                        <h3 className="font-serif font-bold text-xl text-forest">{tech.title}</h3>
                        <p className="text-sm text-carbon/70 font-light leading-relaxed flex-grow">{tech.desc}</p>
                        <Link to="/viet-wolffia" className="text-xs font-bold text-forest hover:text-gold-antique uppercase tracking-wider flex items-center gap-1.5 mt-2 group-link">
                          <span>View Details</span> <ArrowRight size={13} className="group-link-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                        <h3 className="font-serif font-bold text-xl text-forest">{tech.title}</h3>
                        <p className="text-sm text-carbon/70 font-light leading-relaxed flex-grow">{tech.desc}</p>
                        <Link to="/viet-wolffia" className="text-xs font-bold text-forest hover:text-gold-antique uppercase tracking-wider flex items-center gap-1.5 mt-2 group-link">
                          <span>View Details</span> <ArrowRight size={13} className="group-link-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="h-48 md:h-56 overflow-hidden p-4 pt-0 mt-auto">
                        <img src={tech.image} className="w-full h-full object-cover rounded-b-xl transition-transform duration-700 hover:scale-105" alt={tech.title} />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => scrollBy(1)}
              className="absolute -right-4 md:-right-8 z-20 p-3 bg-white border border-gold-warm/30 text-forest rounded-full shadow-lg hover:bg-gold-warm hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100 disabled:opacity-0"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Custom style to hide scrollbar for webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </div>
      </section>

      {/* Global Sourcing spotlight & Quality banner */}
      <section className="py-20 relative px-4 md:px-8 border-y border-gold-warm/20 text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/global_logistics.png" alt="Global Sourcing" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-forest/80 mix-blend-overlay" />
          <div className="absolute inset-0 bg-carbon/70" />
        </div>
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center relative z-10">
          <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('home.trustTitle') }} /></h2>
          <p className="text-sm md:text-base text-cream/80 leading-relaxed font-light max-w-2xl">
            {t('home.trustDesc')}
          </p>
          <div className="h-[1px] w-24 bg-gold-warm/40 my-2" />
          <p className="text-xs uppercase tracking-widest text-gold-warm font-semibold">
            B2B Sourcing • Secure Trade Agents • Fully Trackable Shipments
          </p>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section className="py-24 bg-brown-soil text-cream relative px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold tracking-wide text-gold-champagne leading-tight"><span dangerouslySetInnerHTML={{ __html: t('home.ctaTitle') }} /></h2>
            <p className="text-sm md:text-base text-cream/70 font-light leading-relaxed">
              {t('home.ctaText')}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-gold-warm/10"
              >
                <span>{t('common.consultationBtn')}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-carbon/40 border border-gold-warm/20 rounded-xl p-8 flex flex-col gap-6 backdrop-blur-md">
            <h3 className="font-serif font-bold text-xl text-gold-champagne">
              Quick Inquiry
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(t('common.success'));
              }}
              className="flex flex-col gap-4 text-xs font-light text-cream/80"
            >
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold uppercase tracking-wider text-gold-warm">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AgriTrade Corp"
                  className="bg-carbon/50 border border-gold-warm/25 rounded px-3 py-2 text-cream placeholder-cream/35 focus:outline-none focus:border-gold-warm/75"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold uppercase tracking-wider text-gold-warm">Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="purchasing@agritrade.com"
                  className="bg-carbon/50 border border-gold-warm/25 rounded px-3 py-2 text-cream placeholder-cream/35 focus:outline-none focus:border-gold-warm/75"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold uppercase tracking-wider text-gold-warm">Area of Interest</label>
                <select className="bg-carbon/50 border border-gold-warm/25 rounded px-3 py-2 text-cream focus:outline-none focus:border-gold-warm/75">
                  <option value="sourcing" className="bg-brown-soil">Global Sourcing Services</option>
                  <option value="farming" className="bg-brown-soil">Contract Farming</option>
                  <option value="wolffia" className="bg-brown-soil">Viet Wolffia Supply</option>
                  <option value="logistics" className="bg-brown-soil">Export Logistics & QC</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-gold-warm hover:bg-gold-champagne text-brown-soil py-3 rounded font-bold uppercase tracking-wider transition-colors cursor-pointer mt-2"
              >
                {t('common.submitBtn')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
