import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Check, 
  ChevronRight, 
  ArrowRight,
  Info,
  Award,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedTabs, setExpandedTabs] = useState<number[]>([0]);
  const location = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam !== null) {
      const tabId = parseInt(tabParam, 10);
      if (!isNaN(tabId)) {
        setActiveTab(tabId);
        setExpandedTabs(prev => prev.includes(tabId) ? prev : [...prev, tabId]);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);

  const isTabActive = (id: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return expandedTabs.includes(id);
    }
    return activeTab === id;
  };

  const handleTabClick = (id: number) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setExpandedTabs(prev => 
        prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
      );
    }
  };

  const pillars = [
    {
      id: 0,
      icon: <Globe className="w-6 h-6" />,
      title: t('services.sourcingTitle'),
      subtitle: t('services.sourcingSub'),
      desc: t('services.sourcingText'),
      bullets: [
        t('services.sourcingBullet1'),
        t('services.sourcingBullet2'),
        t('services.sourcingBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Năng Lực Cung Ứng & Nông Sản Chủ Lực' : t('language') === 'zh' ? '直采能力与核心大宗商品' : 'Sourcing Capabilities & Commodities',
        specs: [
          t('language') === 'vi' ? 'Kết nối trực tiếp mạng lưới vùng trồng đạt chuẩn tại 15 tỉnh thành.' : t('language') === 'zh' ? '直接对接 15 个省份认证合作农场基地网络。' : 'Direct access to certified grower networks across 15 provinces.',
          t('language') === 'vi' ? 'Năng lực cung ứng đại trà các loại bột thực vật giá trị cao (như bột hạt sen cao cấp).' : t('language') === 'zh' ? '具备高价值植物纯粉的大宗稳定供应能力（如特级莲子粉）。' : 'Bulk supply capabilities for high-value botanical powders (e.g., premium lotus seed powder).',
          t('language') === 'vi' ? 'Kiểm nghiệm dư lượng thuốc bảo vệ thực vật nghiêm ngặt (Eurofins) theo MRLs thị trường đích.' : t('language') === 'zh' ? '严格的农药残留检测 (Eurofins 认证)，完全符合目标市场 MRL 限量。' : 'Strict pesticide residue testing (Eurofins certified) mapping to target market restrictions (MRLs).',
          t('language') === 'vi' ? 'Báo cáo kiểm toán giá gốc tại vườn cung cấp trực tiếp cho nhà mua hàng trước khi ký kết.' : t('language') === 'zh' ? '在商业签约前直接向买家提供产地价格审计报告。' : 'Local pricing audit report provided directly to buyers before commercial sign-off.'
        ]
      },
      image: '/images/agriculture_products.png',
      linkPath: '/contact',
      linkText: t('language') === 'vi' ? 'Liên Hệ Ngay' : t('language') === 'zh' ? '立即联系我们' : 'Contact Us'
    },
    {
      id: 1,
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('services.farmingTitle'),
      subtitle: t('services.farmingSub'),
      desc: t('services.farmingText'),
      bullets: [
        t('services.farmingBullet1'),
        t('services.farmingBullet2'),
        t('services.farmingBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Cấu Trúc Đầu Tư & Hợp Tác' : t('language') === 'zh' ? '投资与契约种植合作架构' : 'Investment & Partnerships Structures',
        specs: [
          t('language') === 'vi' ? 'Mô hình hoa hồng hấp dẫn cho các đại lý thương mại được chứng nhận.' : t('language') === 'zh' ? '为认证贸易代理商提供极具吸引力的佣金合作机制。' : 'Lucrative commission models (standard commission rates applied to certified trade agents).',
          t('language') === 'vi' ? 'Vận hành trang trại trọn gói từ quỹ đất, tưới tiêu IoT đến thu hoạch.' : t('language') === 'zh' ? '提供从土地流转、IoT 智能灌溉到收割的全套农场托管服务。' : 'Turnkey farm operations covering land securing, IoT irrigation infrastructure, and harvest management.',
          t('language') === 'vi' ? 'Thỏa thuận chia sẻ sản lượng minh bạch dựa trên năng suất lịch sử.' : t('language') === 'zh' ? '基于历史产量的透明化农作物作物分成与 ROI 预估协议。' : 'Structured crop-sharing agreements with transparent ROI projections based on historical yields.',
          t('language') === 'vi' ? 'Cam kết bao tiêu sản lượng với giá sàn thỏa thuận trước nhằm rủi ro thị trường.' : t('language') === 'zh' ? '提供预设保底价的回购协议，规避市场价格波动风险。' : 'Guaranteed buy-back agreements at pre-negotiated floor pricing to hedge market volatility.'
        ]
      },
      image: '/images/ai-services-hightech.png',
      linkPath: '/contract-farming',
      linkText: t('nav.contractFarming') || 'Contract Farming'
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6" />,
      title: t('services.organicTitle'),
      subtitle: t('services.organicSub'),
      desc: t('services.organicText'),
      bullets: [
        t('services.organicBullet1'),
        t('services.organicBullet2'),
        t('services.organicBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Năng Lực Chứng Nhận & Tiêu Chuẩn ESG' : t('language') === 'zh' ? '认证评估与 ESG 可持续发展标准' : 'Certification Capabilities & ESG Alignment',
        specs: [
          t('language') === 'vi' ? 'Lộ trình chuyển đổi từng bước từ đất trồng truyền thống sang hữu cơ.' : t('language') === 'zh' ? '为传统农田提供向有机农业转型的阶梯式规划路线图。' : 'Step-by-step transition mapping for conventional to organic farmland.',
          t('language') === 'vi' ? 'Quản lý tuân thủ GlobalG.A.P., EU Organic và USDA Organic tại chỗ.' : t('language') === 'zh' ? '全程现场督导 GlobalG.A.P.、欧盟有机及 USDA 有机标准执行。' : 'On-the-ground management for GlobalG.A.P., EU Organic, and USDA Organic compliance.',
          t('language') === 'vi' ? 'Đại diện làm việc trực tiếp với các đơn vị kiểm toán quốc tế.' : t('language') === 'zh' ? '在第三方国际机构审计期间提供全方位代表与对接服务。' : 'Full representation and liaison services during third-party international audits.',
          t('language') === 'vi' ? 'Chuẩn hóa dữ liệu ESG phục vụ báo cáo doanh nghiệp.' : t('language') === 'zh' ? '为企业编制 ESG 指标报告提供标准化数据构建。' : 'ESG data structuring for corporate reporting metrics.'
        ]
      },
      image: '/images/organic_certification.png',
      linkPath: '/organic-consulting-certification',
      linkText: t('nav.organicConsulting') || 'Organic Consulting'
    },
    {
      id: 3,
      icon: <Cpu className="w-6 h-6" />,
      title: t('services.agritechTitle'),
      subtitle: t('services.agritechSub'),
      desc: t('services.agritechText'),
      bullets: [
        t('services.agritechBullet1'),
        t('services.agritechBullet2'),
        t('services.agritechBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Nông Nghiệp Điện Từ & Tối Ưu Năng Suất' : t('language') === 'zh' ? '物理电磁农业与非化学增产方案' : 'Electroculture & Non-Chemical Yield Optimization',
        specs: [
          t('language') === 'vi' ? 'Lắp đặt ăng-ten khí quyển và hệ thống tiếp địa địa từ.' : t('language') === 'zh' ? '安装大气电位天线与地磁接地物理系统。' : 'Installation of atmospheric antennas and geomagnetic grounding systems.',
          t('language') === 'vi' ? 'Kích thích sức sống tế bào thực vật mà không dùng hóa chất.' : t('language') === 'zh' ? '无需化学试剂，自然激活植物细胞活力与代谢速率。' : 'Stimulation of plant cellular vitality and metabolic rates without synthetic chemicals.',
          t('language') === 'vi' ? 'Tăng cường sức đề kháng tự nhiên với sâu bệnh và thời tiết khắc nghiệt.' : t('language') === 'zh' ? '天然增强植物对病虫害及极端天气的系统性抵抗力。' : 'Natural reinforcement of systemic resistance to pests and extreme weather.',
          t('language') === 'vi' ? 'Giảm nhu cầu tưới nước và phân bón mà vẫn duy trì sản lượng cao.' : t('language') === 'zh' ? '在减少灌溉与肥料投入的同时，维持峰值产出。' : 'Reduction in irrigation and fertilizer requirements while maintaining peak output.'
        ]
      },
      image: '/images/electroculture.png',
      linkPath: '/infrastructure-rd',
      linkText: t('nav.infrastructure') || 'Infrastructure & R&D'
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t('services.qaTitle'),
      subtitle: t('services.qaSub'),
      desc: t('services.qaText'),
      bullets: [
        t('services.qaBullet1'),
        t('services.qaBullet2'),
        t('services.qaBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Quy Trình Đảm Bảo Chất Lượng & Chứng Nhận' : t('language') === 'zh' ? '质量保证体系与出口认证通道' : 'Quality Assurance & Certifications Pathway',
        specs: [
          t('language') === 'vi' ? 'Đánh giá sẵn sàng trước kiểm toán cho GlobalG.A.P. và EU Organic.' : t('language') === 'zh' ? '提供 GlobalG.A.P. 与欧盟有机认证的预审评估。' : 'Pre-audit readiness assessments for GlobalG.A.P., EU Organic, and USDA Organic.',
          t('language') === 'vi' ? 'Kỹ sư nông học tại chỗ quản lý vệ sinh cây trồng và an toàn nguồn nước.' : t('language') === 'zh' ? '驻地农艺师严格监管作物卫生、水质安全与土壤健康。' : 'On-the-ground agronomists managing crop hygiene, water safety, and soil health compliance.',
          t('language') === 'vi' ? 'Mã truy xuất nguồn gốc lô hàng tích hợp hệ thống QR code.' : t('language') === 'zh' ? '全流程批次追溯码，无缝集成 QR 码追踪系统。' : 'End-to-end batch traceability codes integrated with QR tracking systems.',
          t('language') === 'vi' ? 'Báo cáo kiểm định trước khi xuất hàng (SGS/Bureau Veritas) cho mỗi container.' : t('language') === 'zh' ? '为每个出口集装箱提供装船前检验报告 (SGS/BV 协调)。' : 'Pre-shipment inspection reports (SGS/Bureau Veritas coordination) for every export container.'
        ]
      },
      image: '/images/export_quality.png',
      linkPath: '/contact',
      linkText: t('language') === 'vi' ? 'Liên Hệ Ngay' : t('language') === 'zh' ? '立即联系我们' : 'Contact Us'
    },
    {
      id: 5,
      icon: <Truck className="w-6 h-6" />,
      title: t('services.logisticsTitle'),
      subtitle: t('services.logisticsSub'),
      desc: t('services.logisticsText'),
      bullets: [
        t('services.logisticsBullet1'),
        t('services.logisticsBullet2'),
        t('services.logisticsBullet3'),
      ],
      details: {
        specTitle: t('language') === 'vi' ? 'Đóng Gói Xuất Khẩu & Logistics Chuỗi Lạnh' : t('language') === 'zh' ? '出口标准包装与全球冷链物流' : 'Global Packaging & Cold-Chain Logistics',
        specs: [
          t('language') === 'vi' ? 'Túi nhôm nhiều lớp bảo vệ chống ẩm chuyên dụng cho bột nông sản (10kg-25kg).' : t('language') === 'zh' ? '高规格多层铝箔风琴袋 (10kg-25kg)，专为大宗农产粉体防潮设计。' : 'Advanced multi-layer aluminum gusseted bags (10kg-25kg) designed for moisture barrier protection of bulk powders.',
          t('language') === 'vi' ? 'Quản lý chuỗi lạnh kiểm soát nhiệt độ từ cảng TP.HCM đến các cảng toàn cầu.' : t('language') === 'zh' ? '鲜果出口全程温控冷链管理（从胡志明港至全球各大目的港）。' : 'Temperature-controlled cold-chain management for fresh produce exports (HCMC port to global ports).',
          t('language') === 'vi' ? 'Thực hiện đầy đủ chứng thư xuất khẩu: Kiểm dịch thực vật, C/O (Form A/D/EUR.1), Thông quan.' : t('language') === 'zh' ? '全套出口通关单证办理：植物检疫证书、原产地证 (Form A/D/EUR.1) 及海关申报。' : 'Export documentation execution: Phytosanitary certificates, Certificates of Origin (Form A/D/EUR.1), Customs Clearances.',
          t('language') === 'vi' ? 'Điều phối vận tải biển LCL/FCL với các hãng tàu hàng đầu.' : t('language') === 'zh' ? '对接一线船公司，专业协调 LCL 拼箱与 FCL 整柜海运。' : 'LCL/FCL ocean freight coordination with tier-1 shipping lines.'
        ]
      },
      image: '/images/global_logistics.png',
      linkPath: '/contact',
      linkText: t('language') === 'vi' ? 'Liên Hệ Ngay' : t('language') === 'zh' ? '立即联系我们' : 'Contact Us'
    }
  ];

  const renderTabContent = (tabId: number) => {
    const tabData = pillars.find(p => p.id === tabId) || pillars[0];
    return (
      <div className="flex flex-col gap-8 flex-grow justify-between w-full">
        {/* Content block */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-6 lg:w-3/5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-antique">
                {tabData.subtitle}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest" dangerouslySetInnerHTML={{ __html: tabData.title }} />
            </div>

            <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
              {tabData.desc}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {tabData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm font-light text-carbon/85">
                  <Check size={16} className="text-gold-warm shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {tabData.linkPath && (
              <div className="pt-2">
                <Link
                  to={tabData.linkPath}
                  className="inline-flex items-center gap-2 bg-forest hover:bg-brown-soil text-gold-champagne px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md border border-gold-warm/20 group"
                >
                  <span>{tabData.linkText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
          
          <div className="lg:w-2/5 shrink-0">
            <div className="w-full h-48 lg:h-full min-h-[200px] rounded-xl overflow-hidden shadow-md border border-gold-warm/15 relative">
              <img src={tabData.image} alt={tabData.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Specification drawer info */}
        <div className="mt-8 pt-8 border-t border-gold-warm/20 bg-cream/30 p-6 rounded-lg border border-gold-warm/10 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-serif font-bold text-forest text-base">
            <Info size={16} className="text-gold-warm shrink-0" />
            <span>{tabData.details.specTitle}</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-light text-carbon/75">
            {tabData.details.specs.map((spec, sidx) => (
              <li key={sidx} className="flex items-start gap-1.5 leading-normal">
                <ChevronRight size={12} className="text-gold-antique shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans overflow-hidden">
      <SEO 
        title="Our Services | Vietnam Agriculture Center (VAC)"
        description="Comprehensive agricultural services including strategic sourcing, contract farming, strict quality assurance, and end-to-end global logistics."
        url="https://vietagri.co/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Agricultural Sourcing and Contract Farming",
          "provider": {
            "@type": "Organization",
            "name": "Vietnam Agriculture Center"
          },
          "description": "We offer agricultural sourcing, high-tech contract farming, quality assurance, and global logistics for B2B buyers."
        }}
        preloadImage="/images/services-hero-bg.jpg"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('/images/services-hero-bg.jpg')` }}
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
              Core Services
            </span>
            <h1 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('services.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('services.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-16 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest leading-tight"><span dangerouslySetInnerHTML={{ __html: t('services.introTitle') }} /></h2>
          <p className="text-sm md:text-base text-carbon/75 font-light leading-relaxed">
            {t('services.introDesc')}
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="services-tabs" className="pb-24 bg-cream text-carbon px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left: Tab Selectors & Mobile Accordion Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {pillars.map((tab) => (
              <React.Fragment key={tab.id}>
                <button
                  id={`tab-button-${tab.id}`}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isTabActive(tab.id)
                      ? 'bg-forest text-cream border-gold-warm shadow-md'
                      : 'bg-ivory text-carbon border-gold-warm/15 hover:border-gold-warm/40 hover:bg-cream/80'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isTabActive(tab.id) ? 'bg-gold-warm text-brown-soil' : 'bg-forest/5 text-forest'
                  }`}>
                    {tab.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className={`font-serif text-lg font-bold ${isTabActive(tab.id) ? 'text-gold-champagne' : 'text-forest'}`} dangerouslySetInnerHTML={{ __html: tab.title }} />
                    <span className={`text-[10px] uppercase tracking-wider font-semibold ${isTabActive(tab.id) ? 'text-cream/70' : 'text-carbon/60'}`}><span dangerouslySetInnerHTML={{ __html: tab.subtitle }} /></span>
                  </div>
                </button>
                
                {/* Mobile Inline Content (Accordion) */}
                <AnimatePresence>
                  {isTabActive(tab.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden overflow-hidden"
                    >
                      <div className="bg-ivory border border-gold-warm/15 rounded-2xl p-6 shadow-sm mb-2 mt-1 flex flex-col justify-between">
                        {renderTabContent(tab.id)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>

          {/* Right: Tab Panel (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-2/3 bg-ivory border border-gold-warm/15 rounded-2xl p-8 lg:p-12 shadow-sm min-h-[500px] flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 flex-grow justify-between w-full"
              >
                {renderTabContent(activeTab)}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Services CTA Section */}
      <section className="py-24 text-cream relative px-4 md:px-8 border-t border-gold-warm/25 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/global_logistics.png" alt="Partner with VAC" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-brown-soil/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-carbon/40" />
        </div>
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center relative z-10">
          <h2 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold text-gold-champagne leading-tight"><span dangerouslySetInnerHTML={{ __html: t('services.ctaTitle') }} /></h2>
          <p className="text-sm md:text-base text-cream/80 font-light leading-relaxed max-w-2xl"><span dangerouslySetInnerHTML={{ __html: t('services.ctaSub') }} /></p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/15 flex items-center gap-2 group cursor-pointer"
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
