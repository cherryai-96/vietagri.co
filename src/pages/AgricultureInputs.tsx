import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';
import { ProductInquiryForm } from '../components/products/ProductInquiryForm';
import {
  Sprout,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Layers,
  Cpu,
  Tractor,
  Compass,
  CheckCircle2,
  Sliders,
  Eye,
  Building2,
  Handshake,
  Landmark,
  Briefcase,
  GitMerge
} from 'lucide-react';

export const AgricultureInputs: React.FC = () => {
  const { t, language } = useTranslation();
  const isVi = language === 'vi';
  const isZh = language === 'zh';
  const isKo = language === 'ko';
  const isJa = language === 'ja';

  // Authentic input products from VAC owned content
  const actualProducts = [
    {
      id: 'soilz',
      badge: isVi ? 'Chất Kích Hoạt Vi Sinh' : isZh ? '微生物激活剂' : 'Microbial Activator',
      name: t('products.input1Title'),
      category: isVi ? 'Vi Sinh & Sinh Học Soil' : isZh ? '微生物与土壤生态' : 'Microbial & Soil Health',
      desc: t('products.input1Desc'),
      image: '/images/products/Bio.soilz.png',
      benefits: [
        t('products.input1Ben1'),
        t('products.input1Ben2'),
        t('products.input1Ben3'),
        t('products.input1Ben4'),
      ]
    },
    {
      id: 'manure',
      badge: isVi ? 'Hữu Cơ Nhập Khẩu Nhật Bản' : isZh ? '日本进口有机肥' : 'Japan Organic Import',
      name: t('products.input2Title'),
      category: isVi ? 'Phân Bón Hữu Cơ Cao Cấp' : isZh ? '特级有机肥料' : 'Premium Organic Fertilizer',
      desc: t('products.input2Desc'),
      image: '/images/products/Chicken_manure.png',
      benefits: [
        t('products.input2Ben1'),
        t('products.input2Ben2'),
        t('products.input2Ben3'),
      ]
    },
    {
      id: 'cowdung',
      badge: isVi ? 'Hữu Cơ Hoai Mục Tự Nhiên' : isZh ? '天然腐熟有机肥' : 'Composted Natural Organic',
      name: t('products.input3Title'),
      category: isVi ? 'Cải Tạo Đất & Tầng Mùn' : isZh ? '土壤改良与腐殖质' : 'Soil Conditioning & Humus',
      desc: t('products.input3Desc'),
      image: '/images/products/Cow_dung.png',
      benefits: [
        t('products.input3Ben1'),
        t('products.input3Ben2'),
        t('products.input3Ben3'),
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon font-sans overflow-x-hidden">
      <Helmet>
        <title>{isVi ? 'Vật Tư & Phân Bón Hữu Cơ Kỹ Thuật | Việt Agri' : isZh ? '可持续农业投入品与有机肥料 | 越南农业中心' : 'Sustainable Agriculture Inputs | Vietnam Agriculture Center'}</title>
        <meta
          name="description"
          content={isVi 
            ? 'Giải pháp vật tư vi sinh, phân bón hữu cơ cao cấp và công nghệ nông nghiệp tích hợp cho quy mô trang trại thương mại của Vietnam Agriculture Center.' 
            : isZh
            ? '越南农业中心为商业化农场提供先进的微生物投入品、高品质有机肥料及综合农业科技解决方案。'
            : 'Advanced microbial and organic inputs integrated into high-performance commercial farming systems by Vietnam Agriculture Center.'}
        />
      </Helmet>

      {/* ================= SECTION 1 — HERO ================= */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-forest text-white overflow-hidden pt-24 pb-16">
        {/* Background Image: Deep soil & healthy crop roots with subtle biological nodes */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/agri_inputs_hero_soil_roots.jpg"
            alt="Commercial crop field with deep soil root zone"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-warm/20 border border-gold-warm/40 text-gold-champagne text-xs font-bold uppercase tracking-widest whitespace-nowrap"
            >
              <Sprout size={14} className="text-gold-warm shrink-0" />
              {isVi ? 'VẬT TƯ & PHÂN BÓN NÔNG NGHIỆP BỀN VỮNG' : isZh ? '可持续农业投入品与物资' : isKo ? '지속 가능한 농자재 & 비료' : isJa ? '持続可能な農業資材・肥料' : 'SUSTAINABLE AGRICULTURE INPUTS'}
            </motion.span>

            {/* H1 Title - [text-wrap:balance] prevents orphan 1-word lines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight [text-wrap:balance] max-w-4xl"
            >
              {isVi 
                ? 'Vật Tư Tối Ưu Cho Cây Trồng Khỏe Mạnh & Hệ Thống Canh Tác Bền Vững' 
                : isZh
                ? '优质农业投入品 赋能强健作物与高效耕作系统'
                : isKo
                ? '작물 생육 촉진 및 지속 가능한 농업 시스템을 위한 우수 농자재'
                : isJa
                ? '作物生育促進と持続可能な農業システムのための優れた農業資材'
                : 'Better Inputs for Stronger Crops and Healthier Farming Systems'}
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gold-champagne font-medium leading-relaxed max-w-3xl [text-wrap:balance]"
            >
              {isVi 
                ? 'Đồng hành cùng nông nghiệp hiện đại bằng các nguồn vật tư vi sinh và hữu cơ chọn lọc, được thiết kế đồng bộ với hệ thống canh tác hiệu suất cao của VAC.' 
                : isZh
                ? '通过精选微生物及有机投入品赋能现代农业，与 VAC 高效种植系统深度协同。'
                : isKo
                ? 'VAC의 고성능 농업 시스템과 조화를 이루도록 설계된 첨단 미생물 및 유기농 농자재로 현대 농업을 지원합니다.'
                : isJa
                ? 'VACの高効率農業システムと調和するよう設計された先端微生物および有機資材で現代農業を支援します。'
                : 'Supporting modern agriculture with advanced microbial and organic inputs designed to work alongside VAC’s high-performance farming systems.'}
            </motion.p>

            {/* Secondary paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm md:text-base text-cream/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]"
            >
              {isVi 
                ? 'Trung Tâm Nông Nghiệp Việt Nam (VAC) tích hợp các nguồn vật tư nông nghiệp chọn lọc vào mạng lưới nông trại để tăng cường sức sống cây trồng, nâng cao hiệu quả canh tác và bảo vệ sức khỏe đất lâu dài.' 
                : isZh
                ? '越南农业中心 (VAC) 将精选农业投入品集成至农场网络，提升作物生命力、提高耕作效率并守护土壤健康。'
                : isKo
                ? '베트남 농업 센터(VAC)는 농장 네트워크에 엄선된 농자재를 적용하여 작물 활력을 높이고 농업 효율성을 향상시키며 토양 건강을 보호합니다.'
                : isJa
                ? 'ベトナム農業センター（VAC）は、農場ネットワークに厳選された農業資材を導入し、作物の生命力を高め、農業効率を向上させ、土壌の健康を保護します。'
                : 'Vietnam Agriculture Center integrates selected agricultural inputs into our farming network to support crop vitality, improve farming efficiency, and protect long-term soil health.'}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#input-focus"
                className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-7 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 group hover:scale-[1.02] whitespace-nowrap"
              >
                <span>{isVi ? 'Khám Phá Giải Pháp Vật Tư' : isZh ? '探索投入品解决方案' : isKo ? '농자재 솔루션 둘러보기' : isJa ? '農業資材ソリューションを見る' : 'Explore Our Input Solutions'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#inquiry"
                className="border border-gold-warm/40 hover:border-gold-champagne hover:bg-gold-warm/10 text-cream px-7 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
              >
                <span>{isVi ? 'Trao Đổi Với Chuyên Gia VAC' : isZh ? '咨询 VAC 农业专家' : isKo ? 'VAC 농업 전문가 문의' : isJa ? 'VAC農業専門家に相談する' : 'Talk to Our Agriculture Team'}</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
            <div className="bg-forest-light/60 backdrop-blur-md border border-gold-warm/20 p-6 rounded-2xl">
              <span className="text-gold-champagne font-bold text-xs uppercase tracking-widest block mb-2 whitespace-nowrap">
                {isVi ? 'Định Hướng Canh Tác B2B' : isZh ? 'B2B 现代农业导向' : isKo ? 'B2B 아그리테크 중심' : isJa ? 'B2Bアグリテック重視' : 'B2B Agritech Focus'}
              </span>
              <p className="text-xs text-cream/90 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tích hợp giải pháp vật tư vào mô hình canh tác liên kết quy mô lớn, không bán lẻ phân bón thông thường.' 
                  : isZh
                  ? '将投入品方案整合应用于大规模商业农场与企业契约种植项目。'
                  : isKo
                  ? '대규모 상업 농장 네트워크 및 기업형 계약 재배 프로젝트를 위한 통합 농자재 적용.'
                  : isJa
                  ? '大規模商業農場ネットワークおよび企業型契約栽培プロジェクト向けの統合農業資材導入。'
                  : 'Integrated input deployment for commercial farm networks and enterprise contract farming projects.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 — BEYOND FERTILIZER ================= */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8 border-b border-gold-warm/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-4xl flex flex-col gap-4">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'TẦM NHÌN HỆ THỐNG' : isZh ? '系统化农业愿景' : isKo ? '체계적인 농업 비전' : isJa ? '体系的な農業ビジョン' : 'SYSTEMIC VISION'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi 
                ? 'Hơn Cả Phân Bón — Kiến Tạo Hệ Thống Canh Tác Bền Vững' 
                : isZh
                ? '超越传统肥料 构筑更优秀的现代耕作体系'
                : isKo
                ? '단순한 비료 그 이상 — 더 우수한 농업 시스템 구축'
                : isJa
                ? '単なる肥料を超えて — より優れた農業システムの構築'
                : 'Beyond Fertilizer. Building Better Farming Systems.'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-3xl [text-wrap:balance]">
              {isVi 
                ? 'VAC nhìn nhận vật tư nông nghiệp bền vững là một phần cấu thành của hệ thống canh tác tích hợp. Chúng tôi kết hợp nguồn phân bón hữu cơ hoai mục, chất kích hoạt vi sinh đất và kỹ thuật hiện đại để tối ưu hóa toàn diện sinh thái nông trại.' 
                : isZh
                ? 'VAC 将可持续农业投入品视为综合耕作体系的核心组成部分。我们结合腐熟有机土壤调理剂、微生物激活剂与现代田间技术，全面优化农场生态。'
                : isKo
                ? 'VAC는 지속 가능한 농자재를 통합 농업 시스템의 핵심 요소로 인식합니다. 발효 유기농 토양 개량제, 미생물 활성제 및 현대적 농업 기술을 결합하여 농장 생태계를 전반적으로 최적화합니다.'
                : isJa
                ? 'VACは持続可能な農業資材を統合農業システムの不可欠な要素として捉えています。完熟有機土壌改良資材、微生物活性剤、現代的な農業技術を組み合わせ、農場生態系を総合的に最適化します。'
                : 'VAC views sustainable agricultural inputs as part of an integrated cultivation system. We combine organic conditioners, microbial activators, and modern field techniques to optimize farm ecology holistically.'}
            </p>
          </div>

          {/* Four Minimal Icon Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Cây Trồng Khỏe Mạnh' : isZh ? '作物体魄更强健' : isKo ? '작물 생육 강화' : isJa ? '作物の健全な生育' : 'Stronger Crops'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tăng cường sức đề kháng tự nhiên của bộ rễ và khả năng hấp thụ dinh dưỡng chủ động.' 
                  : isZh
                  ? '增强根系自然免疫力与主动养分吸收机制。'
                  : isKo
                  ? '뿌리의 자연 면역력 증대 및 능동적인 영양 흡수 메커니즘 강화.'
                  : isJa
                  ? '根の自然免疫力向上と積極的な養分吸収メカニズムの強化。'
                  : 'Enhancing natural root immunity and active nutrient absorption mechanisms.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <Zap size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Canh Tác Hiệu Quả Hơn' : isZh ? '耕作效率更高' : isKo ? '농업 효율성 향상' : isJa ? '農業効率の向上' : 'More Efficient Farming'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Giảm thiểu lãng phí phân bón, tối ưu số lần bón và nâng cao hiệu suất đầu tư.' 
                  : isZh
                  ? '减少肥料浪费，优化施肥频次，提高投资回报率。'
                  : isKo
                  ? '농자재 낭비 감소, 시비 빈도 최적화 및 투자 대비 수익률(ROI) 개선.'
                  : isJa
                  ? '資材の無駄を削減し、施肥頻度を最適化してROIを改善。'
                  : 'Reducing input wastage, optimizing application frequency, and improving ROI.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <Sprout size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Đất Sống Khỏe Mạnh' : isZh ? '土壤恢复生命力' : isKo ? '건강한 토양 생태계' : isJa ? '健全な土壌環境' : 'Healthier Soil'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tái tạo tầng mùn organic, cải tạo cấu trúc xốp và khôi phục quần thể vi sinh có lợi.' 
                  : isZh
                  ? '修复有机腐殖质层、改善土壤透气结构并恢复有益微生物菌群。'
                  : isKo
                  ? '유기 부식층 복원, 토양 통기성 구조 개선 및 유익 미생물 생태계 회복.'
                  : isJa
                  ? '有機腐植層の復元、土壌の通気性構造の改善、有益な土壌微生物群の回復。'
                  : 'Restoring organic humus layer, soil aeration structure, and beneficial soil microbiomes.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Năng Suất Dài Hạn' : isZh ? '长期稳定高产' : isKo ? '장기적 생산성' : isJa ? '長期的な生産性' : 'Long-Term Productivity'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Duy trì sản lượng thu hoạch ổn định qua nhiều mùa vụ mà không làm suy kiệt tài nguyên đất.' 
                  : isZh
                  ? '跨季度维持高产稳定收成，避免过度消耗土壤资产。'
                  : isKo
                  ? '토양 자원을 고갈시키지 않고 여러 계절 동안 높은 수확량을 유지.'
                  : isJa
                  ? '土壌資産を枯渇させることなく、季節を超えて高い収穫量を維持。'
                  : 'Sustaining high harvest output across seasons without depleting soil assets.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — OUR INPUT FOCUS ================= */}
      <section id="input-focus" className="py-20 md:py-28 bg-ivory px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'TRỌNG TÂM CUNG ỨNG' : isZh ? '核心供应领域' : isKo ? '주요 공급 분야' : isJa ? '主要供給分野' : 'OUR CORE FOCUS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Định Hướng Giải Pháp Vật Tư Nông Nghiệp' : isZh ? '可持续农业投入品核心方案' : isKo ? '지속 가능한 농자재 핵심 솔루션' : isJa ? '持持可能な農業資材コアソリューション' : 'Our Sustainable Agriculture Input Focus'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Tập trung vào 3 trụ cột giải pháp: Vi sinh sinh học, Phân bón hữu cơ cao cấp và Ứng dụng công nghệ Nông nghiệp tích hợp.' 
                : isZh
                ? '聚焦三大核心支柱：前沿微生物投入品、特级有机投入品及综合农业科技应用。'
                : isKo
                ? '3대 핵심 축: 첨단 미생물 농자재, 프리미엄 유기농 자재 및 통합 아그리테크 응용.'
                : isJa
                ? '3つのコアピラー：先端微生物資材、プレミアム有機資材、統合アグリテック応用。'
                : 'Focusing on three core pillars: Advanced Microbial Inputs, Premium Organic Inputs, and Integrated Agritech Application.'}
            </p>
          </div>

          {/* Three Large Editorial Content Blocks */}
          <div className="flex flex-col gap-16">

            {/* Block A — Advanced Microbial Inputs */}
            <div className="bg-white rounded-3xl border border-gold-warm/20 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full relative overflow-hidden">
                <img
                  src="/images/agri_inputs_microbial_soil_macro.jpg"
                  alt="Microbial subterranean soil microbiome"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-6 p-8 md:p-12 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
                  <Layers size={16} />
                  {isVi ? 'TRỤ CỘT 01' : isZh ? '柱石 01' : isKo ? '핵심 축 01' : isJa ? 'ピラー 01' : 'PILLAR 01'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Vật Tư Vi Sinh Sinh Học Cao Cấp' : isZh ? '高端生物微生物投入品' : isKo ? '첨단 미생물 농자재' : isJa ? '先端微生物資材' : 'Advanced Microbial Inputs'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Giải pháp kích hoạt hệ vi sinh vật bản địa sống trong đất (rhizosphere), phân giải khoáng chất khó tan và gia tăng khả năng hấp thụ dinh dưỡng của bộ rễ mà không gây dư lượng hóa học.' 
                    : isZh
                    ? '激活土壤根际原生微生物群落，解离固化矿物质，提升根系养分吸收能力且无化学残留。'
                    : isKo
                    ? '토양 근권 생물학적 활성화, 미네랄 용해 및 화학 잔류물 없는 식물 뿌리 영양 흡수 증대.'
                    : isJa
                    ? '根圏の生物活性化、難溶性ミネラルの溶解、化学残留物のない植物根の養分吸収の促進。'
                    : 'Unlocking rhizosphere biological activity, dissolving bound minerals, and enhancing plant root nutrient uptake without chemical residues.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Phân giải Lân và Kali khó tan trong đất thành dạng dễ hấp thụ' : isZh ? '解磷解钾，将土壤固化的难溶性磷钾转化为易吸收形态' : isKo ? '토양 내 난용성 인산 및 칼륨을 가용화' : isJa ? '土壌中の難溶性リン酸およびカリウムの可溶化' : 'Solubilizing fixed phosphorus & potassium in soil'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Ức chế vi sinh vật gây hại bộ rễ bằng cơ chế cạnh tranh sinh học' : isZh ? '通过生物竞争机制抑制根部病原微生物' : isKo ? '생물학적 경쟁 메커니즘을 통한 뿌리 병원균 억제' : isJa ? '生物的競合メカニズムによる根系病原菌の抑制' : 'Biological suppression of root pathogens'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Block B — Premium Organic Inputs */}
            <div className="bg-white rounded-3xl border border-gold-warm/20 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 lg:order-2 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-cream/40 p-8 flex items-center justify-center">
                <img
                  src="/images/products/Chicken_manure.png"
                  alt="Authentic organic input product"
                  className="max-h-80 object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="lg:col-span-6 lg:order-1 p-8 md:p-12 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
                  <Sprout size={16} />
                  {isVi ? 'TRỤ CỘT 02' : isZh ? '柱石 02' : isKo ? '핵심 축 02' : isJa ? 'ピラー 02' : 'PILLAR 02'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Phân Bón Hữu Cơ Hoai Mục Chuẩn Quốc Tế' : isZh ? '国际标准特级腐熟有机肥' : isKo ? '프리미엄 유기농 자재' : isJa ? 'プレミアム有機資材' : 'Premium Organic Inputs'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Nguồn phân bón hữu cơ lên men hoai mục hoàn toàn (nhập khẩu Nhật Bản & xử lý tiêu chuẩn), giàu axit humic, fulvic và các nguyên tố trung vi lượng tự nhiên.' 
                    : isZh
                    ? '完全发酵腐熟的有机肥料（日本进口标准与受控加工），富含腐殖酸、黄腐酸及天然中微量元素。'
                    : isKo
                    ? '완전 발효된 고급 유기질 비료(일본 수입 기준 및 공정 관리), 휴믹산, 풀빅산 및 미량 요소 풍부.'
                    : isJa
                    ? '完全発酵有機肥料（日本輸入規格および管理された加工）、フミン酸、フルボ酸および微量要素が豊富。'
                    : 'Fully composted organic fertilizers (imported Japan standards & controlled processing), rich in humic acids, fulvic compounds, and micronutrients.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Cam kết nguồn gốc minh bạch, không tạp chất và dại mầm bệnh' : isZh ? '原料来源透明，无杂质、无杂草种子及病原体' : isKo ? '투명한 원산지, 잡초 씨앗 및 병원균 제로' : isJa ? '透明性の高い原産地、雑草の種子や病原菌ゼロ' : 'Transparent origin, zero weed seeds & pathogen free'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Tăng độ phì nhiêu và khả năng giữ nước cho các vùng đất cát, đất xói mòn' : isZh ? '提高保水保肥能力（CEC），显著改善沙质及退化土壤' : isKo ? '침식 토양의 보수력 및 양이온 교환 능력(CEC) 향상' : isJa ? '侵食土壌の保水力および塩基置換容量（CEC）の向上' : 'Boosting CEC and water retention in eroded soils'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Block C — Integrated Agritech Application */}
            <div className="bg-white rounded-3xl border border-gold-warm/20 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full relative overflow-hidden">
                <img
                  src="/images/agri_inputs_agritech_electroculture.jpg"
                  alt="Modern commercial cultivation incorporating agritech"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="lg:col-span-6 p-8 md:p-12 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
                  <Cpu size={16} />
                  {isVi ? 'TRỤ CỘT 03' : isZh ? '柱石 03' : isKo ? '핵심 축 03' : isJa ? 'ピラー 03' : 'PILLAR 03'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Ứng Dụng Nông Nghiệp Công Nghệ Tích Hợp' : isZh ? '综合农业科技应用' : isKo ? '통합 아그리테크 응용' : isJa ? '統合アグリテック応用' : 'Integrated Agritech Application'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Kết hợp kỹ thuật Electroculture (Điện sinh học đất), cảm biến theo dõi sức khỏe đất real-time và phương pháp bón chính xác để tối đa hóa hiệu quả sử dụng vật tư.' 
                    : isZh
                    ? '结合土壤电磁农业技术（Electroculture）、实时土壤健康传感器及精准定量施肥，最大化提高肥料利用率。'
                    : isKo
                    ? '토양 전자기 재배(Electroculture) 기술, 실시간 토양 센서 및 정밀 투입을 결합하여 농자재 이용 효율을 극대화.'
                    : isJa
                    ? '土壌電磁栽培（Electroculture）技術、リアルタイム土壌センサー、精密施肥を統合し資材利用効率を最大化。'
                    : 'Integrating soil Electroculture techniques, real-time soil health sensors, and precision dosing to maximize input utilization efficiency.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Kích thích trao đổi ion đất bằng năng lượng tự nhiên (Electroculture)' : isZh ? '利用自然电磁能量（Electroculture）刺激土壤离子交换' : isKo ? '전자기 재배를 통한 토양 이온 교환 촉진' : isJa ? '電磁栽培による土壌イオン交換の促進' : 'Stimulating soil ion exchange via Electroculture'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Định lượng bón chính xác theo từng giai đoạn sinh trưởng cây trồng' : isZh ? '根据作物不同生长阶段进行精准养分配给' : isKo ? '작물 생육 단계별 정밀 양분 투입' : isJa ? '作物生育段階に応じた精密養分施肥' : 'Precision nutrient dosing per crop growth phase'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4 — FROM INPUT TO FIELD ================= */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8 border-t border-b border-gold-warm/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'QUY TRÌNH CANH TÁC' : isZh ? '田间管理流程' : isKo ? '현장 농업 프로세스' : isJa ? '現場農業プロセス' : 'FIELD PROCESS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Từ Nguồn Vật Tư Đến Cánh Đồng Canh Tác' : isZh ? '从投入品源头到标准化田间应用' : isKo ? '농자재 투입부터 현장 적용까지' : isJa ? '農業資材から現場適用まで' : 'From Input to Field'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Quy trình 4 bước tiếp cận kỹ thuật chuẩn hóa để đảm bảo vật tư phát huy tối đa hiệu quả trên thực địa.' 
                : isZh
                ? '标准化4步技术流程，确保投入品在田间发挥最大成效。'
                : isKo
                ? '농자재가 현장에서 최상의 성능을 발휘하도록 보장하는 표준화된 4단계 기술 프로세스.'
                : isJa
                ? '資材が現場で最適なパフォーマンスを発揮することを保証する標準化された4段階の技術プロセス。'
                : 'A standardized 4-step technical workflow ensuring inputs deliver optimal field performance.'}
            </p>
          </div>

          {/* 4-Step Horizontal Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">01</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Compass size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Hiểu Rõ Cây Trồng & Đất' : isZh ? '深入了解作物与土壤' : isKo ? '작물 및 토양 이해' : isJa ? '作物および土壌の理解' : 'Understand the Crop'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Phân tích thổ nhưỡng, độ pH, chỉ số EC và đặc tính sinh học của giống cây trồng tại vùng canh tác.' 
                  : isZh
                  ? '分析目标产区的土壤化学成分、pH值、EC值及作物的生物学需求。'
                  : isKo
                  ? '대상 지역의 토양 화학 성분, pH, EC 및 작물 생물학적 요구 사항 분석.'
                  : isJa
                  ? '対象地域の土壌化学、pH、EC、および作物の生物学的要件の分析。'
                  : 'Analyzing soil chemistry, pH, EC, and crop biological requirements for the target region.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">02</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Sliders size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Lựa Chọn Giải Pháp Phù Hợp' : isZh ? '匹配最佳农艺方案' : isKo ? '적절한 접근 방식 선택' : isJa ? '適切なアプローチの選択' : 'Select Appropriate Approach'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Phối hợp chủng vi sinh, dòng hữu cơ và tỷ lệ phối trộn tối ưu cho mục tiêu sản xuất.' 
                  : isZh
                  ? '匹配针对产量目标的最佳微生物菌株、有机品级及配比方案。'
                  : isKo
                  ? '목표 수확량에 맞춘 미생물 균주, 유기질 등급 및 배합 비율 맞춤 조정.'
                  : isJa
                  ? '目標収水量に合わせた微生物株、有機グレード、配合比率の最適化。'
                  : 'Matching microbial strains, organic grades, and blend ratios tailored to yield targets.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">03</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Tractor size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Tích Hợp Vào Quy Trình Bón' : isZh ? '融入标准化施肥流程' : isKo ? '재배 프로세스 통합' : isJa ? '栽培プロセスへの統合' : 'Integrate into Cultivation'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Ứng dụng vào lịch bón phân lót, bón thúc và hệ thống tưới nhỏ giọt/phun tự động của trang trại.' 
                  : isZh
                  ? '应用到基肥、追肥以及农场的自动滴灌与水肥一体化系统。'
                  : isKo
                  ? '기비, 추비, 자동 점적 관수 및 수비 일체화 시스템에 투입.'
                  : isJa
                  ? '元肥、追肥、自動滴下灌水および灌水施肥ラインへの導入。'
                  : 'Deploying into basal dressing, fertigation lines, and automated field dosing systems.'}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">04</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Eye size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Theo Dõi & Tối Ưu Hóa' : isZh ? '持续监测与优化调整' : isKo ? '모니터링 및 최적화' : isJa ? '観察および最適化' : 'Observe & Optimize'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Đánh giá chỉ số phát triển rễ, màu sắc lá và chỉ số độ phì đất để tinh chỉnh cho vụ sau.' 
                  : isZh
                  ? '监测根系密度、叶片指数及土壤有机碳，为后续轮作周期提供调优依据。'
                  : isKo
                  ? '뿌리 밀도, 엽면 지수 및 토양 유기 탄소를 모니터링하여 다음 재배 주기 정밀 조정.'
                  : isJa
                  ? '根の密度、葉面積指数、土壌有機炭素をモニタリングし、将来のサイクルを微調整。'
                  : 'Monitoring root density, canopy index, and soil organic carbon to refine future cycles.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 — COMMERCIAL AGRICULTURE ================= */}
      <section className="py-20 md:py-28 bg-ivory px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'ĐỐI TƯỢNG ỨNG DỤNG' : isZh ? '适用对象与场景' : isKo ? '적용 대상 분야' : isJa ? '適用対象分野' : 'TARGET APPLICATIONS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Vật Tư Bền Vững Cho Nông Nghiệp Quy Mô Thương Mại' : isZh ? '面向商业化规模农业的可持续投入品' : isKo ? '상업적 규모 농업을 위한 지속 가능한 농자재' : isJa ? '商業規模農業のための持続可能な農業資材' : 'Sustainable Inputs for Scalable Agriculture'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Giải pháp được thiết kế dành cho các chủ thể sản xuất quy mô lớn và tổ chức nông nghiệp chuyên nghiệp.' 
                : isZh
                ? '专为商业化种植户、企业化农业网络及农业投资机构量身打造。'
                : isKo
                ? '상업용 재배자, 기업형 농업 네트워크 및 농업 투자자를 위해 정밀 설계된 솔루션.'
                : isJa
                ? '商業生産者、企業型農業ネットワーク、農業投資家向けに設計されたソリューション。'
                : 'Solutions engineered for commercial growers, enterprise farming networks, and agricultural investors.'}
            </p>
          </div>

          {/* 4 Application Cards with 100% Authentic Commercial Farm Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gold-warm/20 shadow-lg flex flex-col group hover:border-gold-warm transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/agri_card_commercial_farms.jpg"
                  alt="Commercial farm operations in Vietnam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-forest font-bold text-base">
                    <Building2 size={18} className="text-gold-warm shrink-0" />
                    <span className="[text-wrap:balance]">{isVi ? 'Trang Trại Thương Mại' : isZh ? '商业化大田农场' : isKo ? '상업용 대형 농장' : isJa ? '商業用大規模農場' : 'Commercial Farms'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Cung ứng số lượng lớn phân bón hữu cơ và vi sinh ổn định cho các vùng trồng tập trung.' 
                      : isZh
                      ? '为大规模集中种植园区大批量稳定供应有机及生物投入品。'
                      : isKo
                      ? '대규모 농업 단지를 위한 안정적인 유기질 및 미생물 자재의 대량 공급.'
                      : isJa
                      ? '大規模農業団地向けの安定した有機および生物資材のバルク供給。'
                      : 'Bulk supply of consistent organic & biological inputs for large-scale agricultural estates.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gold-warm/20 shadow-lg flex flex-col group hover:border-gold-warm transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/agri_card_contract_farming.jpg"
                  alt="Contract farming crop rows in Vietnam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-forest font-bold text-base">
                    <Handshake size={18} className="text-gold-warm shrink-0" />
                    <span className="[text-wrap:balance]">{isVi ? 'Dự Án Canh Tác Liên Kết' : isZh ? '订单农业与联营项目' : isKo ? '계약 재배 프로젝트' : isJa ? '契約栽培プロジェクト' : 'Contract Farming Projects'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Đồng bộ nguồn vật tư đầu vào cho các hợp tác xã và hộ nông dân liên kết với VAC.' 
                      : isZh
                      ? '为 VAC 出口供应链挂钩的合作社及农户提供标准化投入品包。'
                      : isKo
                      ? 'VAC 수출 공급망과 연계된 협동조합 및 농가를 위한 표준화된 농자재 패키지.'
                      : isJa
                      ? 'VAC輸出サプライチェーンに連結された協同組合および農家向けの標準化資材パッケージ。'
                      : 'Standardized input packages for outgrowers & cooperatives linked to VAC export supply chains.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gold-warm/20 shadow-lg flex flex-col group hover:border-gold-warm transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/agri_card_investors.jpg"
                  alt="High-tech greenhouse agricultural facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-forest font-bold text-base">
                    <Landmark size={18} className="text-gold-warm shrink-0" />
                    <span className="[text-wrap:balance]">{isVi ? 'Nhà Đầu Tư Nông Nghiệp' : isZh ? '农业产业投资机构' : isKo ? '농업 분야 투자자' : isJa ? '農業分野の投資家' : 'Agricultural Investors'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Tư vấn mô hình canh tác hữu cơ bền vững để bảo toàn giá trị tài sản đất đai dài hạn.' 
                      : isZh
                      ? '提供可持续有机耕作指导，保障土地资产的长期价值。'
                      : isKo
                      ? '장기적인 토지 자산 가치를 보호하는 지속 가능한 유기농 농업 프레임워크 자문.'
                      : isJa
                      ? '長期的な土地資産価値を保護する持続可能な有機農業フレームワークのアドバイス。'
                      : 'Advising sustainable organic farming frameworks that protect long-term land asset valuation.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gold-warm/20 shadow-lg flex flex-col group hover:border-gold-warm transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/agri_card_partners.jpg"
                  alt="Agronomists inspecting commercial tea plantation in Vietnam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-forest font-bold text-base">
                    <Briefcase size={18} className="text-gold-warm shrink-0" />
                    <span className="[text-wrap:balance]">{isVi ? 'Đối Tác Kỹ Thuật & Vật Tư' : isZh ? '技术与物资合作伙伴' : isKo ? '농업 기술 및 자재 파트너' : isJa ? '農業技術・資材パートナー' : 'Agricultural Partners'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Hợp tác phát triển giải pháp sinh học và thử nghiệm quy trình kỹ thuật mới.' 
                      : isZh
                      ? '联合研发生物解决方案及开展田间试验评估。'
                      : isKo
                      ? '생물학적 솔루션 및 농학 현장 시험 프로토콜의 공동 개발.'
                      : isJa
                      ? '生物学的ソリューションおよび農学現場試験プロトコルの共同開発。'
                      : 'Collaborative development of biological solutions and agronomic field trial protocols.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6 — MORE THAN AN INPUT SUPPLIER ================= */}
      <section className="py-20 md:py-28 bg-forest text-white px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-champagne uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'MÔ HÌNH TÍCH HỢP TOÀN DIỆN' : isZh ? '全产业链综合架构' : isKo ? '통합 시스템 다이어그램' : isJa ? '統合システムダイアグラム' : 'INTEGRATED SYSTEM DIAGRAM'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight [text-wrap:balance]">
              {isVi ? 'Hơn Cả Một Nhà Cung Cấp Vật Tư' : isZh ? '超越传统农业投入品供应商' : isKo ? '단순한 농자재 공급업체 그 이상' : isJa ? '単なる農業資材サプライヤーを超えて' : 'More Than an Input Supplier'}
            </h2>
            <p className="text-sm md:text-base text-cream/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'VAC không chỉ phân phối vật tư mà là đơn vị tích hợp toàn chuỗi: Vật tư + Công nghệ + Canh tác + Tiêu thụ xuất khẩu.' 
                : isZh
                ? 'VAC 不仅是简单的物资供应商，更是全产业链集成商：投入品 + 农业科技 + 田间管理 + 出口供应链。'
                : isKo
                ? 'VAC는 단순한 자재 공급업체가 아니라 풀스택 통합 기관입니다: 농자재 + 아그리테크 + 재배 + 수출 공급망.'
                : isJa
                ? 'VACは単なる資材サプライヤーではなく、フルスタック統合機関です：資材 ＋ アグリテック ＋ 栽培 ＋ 輸出サプライチェーン。'
                : 'VAC is not just an input vendor, but a full-stack integrator: Inputs + Agritech + Cultivation + Export Supply Chain.'}
            </p>
          </div>

          {/* Premium Visual System Diagram */}
          <div className="bg-forest-light/60 border border-gold-warm/30 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Sprout size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Vật Tư Nông Nghiệp' : isZh ? '农业投入品' : isKo ? '농업 자재' : isJa ? '農業資材' : 'Agriculture Inputs'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Phân hữu cơ & Vi sinh' : isZh ? '有机肥料与微生物' : isKo ? '유기질 & 미생물' : isJa ? '有機＆微生物' : 'Organic & Microbial'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Cpu size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Công Nghệ Agritech' : isZh ? '前沿农业科技' : isKo ? '첨단 아그리테크' : isJa ? '先端アグリテック' : 'Advanced Agritech'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Electroculture & Sensors' : isZh ? '电磁农业与智能传感器' : isKo ? '전자기 재배 & 센서' : isJa ? '電磁栽培＆センサー' : 'Electroculture & Sensors'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Tractor size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Quy Trình Canh Tác' : isZh ? '田间种植规程' : isKo ? '재배 규정' : isJa ? '栽培実装' : 'Farming Implementation'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Tiêu chuẩn GlobalGAP' : isZh ? 'GlobalGAP 标准体系' : isKo ? 'GlobalGAP 표준' : isJa ? 'GlobalGAP標準' : 'GlobalGAP standards'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <GitMerge size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Chuỗi Cung Ứng Xuất Khẩu' : isZh ? '出口供应链' : isKo ? '수출 공급망' : isJa ? '輸出サプライチェーン' : 'Export Supply Chain'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Bao tiêu đầu ra' : isZh ? '收成包销对接' : isKo ? '수확물 매입 연계' : isJa ? '収穫物買取連携' : 'Harvest off-take'}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gold-warm/20 text-center">
              <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold text-gold-champagne uppercase tracking-widest [text-wrap:balance]">
                <span>=</span>
                <span>{isVi ? 'HỆ THỐNG NÔNG NGHIỆP BỀN VỮNG TÍCH HỢP (VAC INTEGRATED AGRI-SYSTEM)' : isZh ? 'VAC 综合可持续农业体系 (VAC INTEGRATED AGRI-SYSTEM)' : isKo ? '통합 지속 가능한 농업 시스템 (VAC INTEGRATED AGRI-SYSTEM)' : isJa ? '統合持続可能な農業システム (VAC INTEGRATED AGRI-SYSTEM)' : 'INTEGRATED SUSTAINABLE AGRICULTURE SYSTEM'}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 — ACTUAL PRODUCT SHOWCASE ================= */}
      <section id="products" className="py-20 md:py-28 bg-white px-4 md:px-8 border-b border-gold-warm/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'DANH MỤC VẬT TƯ THỰC TẾ' : isZh ? '实证投入品目录' : isKo ? '검증된 제품 카탈로그' : isJa ? '検証済み製品カタログ' : 'VERIFIED PRODUCT CATALOGUE'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Danh Mục Vật Tư Nông Nghiệp Khả Dụng' : isZh ? '可在线咨询农业投入品' : isKo ? '이용 가능한 농자재 카탈로그' : isJa ? '利用可能な農業資材カタログ' : 'Explore Available Agriculture Inputs'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Các dòng vật tư nông nghiệp chính chủ đã qua kiểm định thực tế và ứng dụng trên hệ thống nông trại VAC.' 
                : isZh
                ? '在越南农业中心商业化农场网络中得到广泛验证与应用的自研与精选投入品。'
                : isKo
                ? '베트남 농업 센터 상업용 농장 네트워크 전반에 걸쳐 유효성이 검증된 농자재 제품군.'
                : isJa
                ? 'ベトナム農業センターの商業農場ネットワーク全体で検証・活用されている農業資材製品群。'
                : 'Verified input products utilized across Vietnam Agriculture Center commercial farm networks.'}
            </p>
          </div>

          {/* Product Cards (No e-commerce junk, no fake cart, pure B2B technical style) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {actualProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-cream/30 rounded-3xl border border-gold-warm/20 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gold-warm transition-all group"
              >
                <div>
                  <div className="bg-white p-8 flex items-center justify-center border-b border-gold-warm/15 relative h-64">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-52 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-gold-warm text-brown-soil font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                      {prod.badge}
                    </span>
                  </div>

                  <div className="p-8 flex flex-col gap-4">
                    <span className="text-xs font-bold text-gold-warm uppercase tracking-wider whitespace-nowrap">
                      {prod.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-forest leading-snug [text-wrap:balance]">
                      {prod.name}
                    </h3>
                    <p className="text-xs md:text-sm text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                      {prod.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      {prod.benefits.map((ben, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-carbon/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-warm shrink-0 mt-1.5" />
                          <span className="[text-wrap:balance]">{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href="#inquiry"
                    className="w-full bg-forest hover:bg-forest-light text-white py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>{isVi ? 'Xem Chi Tiết & Liên Hệ Supplies' : isZh ? '查看详情与咨询供应' : isKo ? '상세 정보 보기 및 문의' : isJa ? '詳細を見る・供給について問い合わせる' : 'View Product & Inquire'}</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8 — VAC AGRICULTURAL ECOSYSTEM ================= */}
      <section className="py-20 md:py-28 bg-ivory px-4 md:px-8 border-b border-gold-warm/15">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 items-center">
            <span className="text-xs font-bold text-gold-warm uppercase tracking-widest whitespace-nowrap">
              {isVi ? 'HỆ SINH THÁI KHẮP CHUỖI' : isZh ? '全产业链贯通' : isKo ? '전체 생태계 흐름' : isJa ? 'エコシステム全体フロー' : 'FULL ECOSYSTEM FLOW'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Hệ Sinh Thái Nông Nghiệp VAC' : isZh ? 'VAC 农业生态全景' : isKo ? 'VAC 농업 생태계' : isJa ? 'VAC 農業エコシステム' : 'VAC Agricultural Ecosystem'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Liên kết chặt chẽ từ vật tư đầu vào đến nông sản xuất khẩu chất lượng cao.' 
                : isZh
                ? '将可持续投入品直接连接至全球出口市场的完整价值链。'
                : 'A seamless value chain linking sustainable inputs directly to global export markets.'}
            </p>
          </div>

          {/* Ecosystem Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">01. Inputs</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Vật Tư Bền Vững' : isZh ? '可持续投入品' : isKo ? '지속 가능한 농자재' : isJa ? '持続可能な農業資材' : 'Sustainable Inputs'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">02. Tech</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Công Nghệ Agritech' : isZh ? '前沿农业科技' : isKo ? '첨단 아그리테크' : isJa ? '先端アグリテック' : 'Advanced Agritech'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">03. Farming</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Canh Tác Liên Kết' : isZh ? '契约农业种植' : isKo ? '계약 재배' : isJa ? '契約栽培' : 'Contract Farming'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">04. Crops</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Sản Xuất Nông Sản' : isZh ? '高品质农作物' : isKo ? '농작물 생산' : isJa ? '農作物生産' : 'Crop Production'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">05. Export</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Xuất Khẩu & Chuỗi Cung Ứng' : isZh ? '全球出口供应链' : isKo ? '품질 & 수출 공급망' : isJa ? '品質＆輸出サプライチェーン' : 'Quality & Export Supply'}
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9 — CTA ================= */}
      <section id="inquiry" className="relative py-24 md:py-32 bg-forest text-white px-4 md:px-8 overflow-hidden">
        {/* Background Image: Cinematic commercial farm */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/agri_inputs_cta_commercial_farm.jpg"
            alt="Sprawling commercial agricultural estate"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/90 to-forest/70" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-12 text-center items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-warm/20 border border-gold-warm/40 text-gold-champagne text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              <Sprout size={14} className="text-gold-warm shrink-0" />
              {isVi ? 'HỢP TÁC CANH TÁC BỀN VỮNG' : isZh ? '可持续耕作合作' : isKo ? '지속 가능한 농업 파트너십' : isJa ? '持続可能な農業パートナーシップ' : 'SUSTAINABLE FARMING PARTNERSHIP'}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight [text-wrap:balance] max-w-3xl">
              {isVi 
                ? 'Xây Dựng Hệ Thống Canh Tác Bền Vững Cùng Việt Agri' 
                : isZh
                ? '与越南农业中心共建可持续高产耕作体系'
                : 'Build a More Sustainable Farming System with VAC'}
            </h2>

            <p className="text-sm md:text-base text-cream/90 font-light max-w-2xl leading-relaxed [text-wrap:balance]">
              {isVi 
                ? 'Liên hệ với đội ngũ kỹ thuật VAC để trao đổi về giải pháp vật tư nông nghiệp, khảo sát thổ nhưỡng và kế hoạch canh tác thương mại.' 
                : isZh
                ? '立即联系 VAC 农艺专家团队，探讨投入品方案、土壤适宜性评估及商业化耕作规划。'
                : 'Connect with VAC’s agronomy team to discuss input solutions, soil suitability, and commercial cultivation plans.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="#inquiry-form"
                className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                <span>{isVi ? 'Trao Đổi Dự Án Trang Trại' : isZh ? '探讨农场合作项目' : isKo ? '농장 프로젝트 상담' : isJa ? '農場プロジェクトのご相談' : 'Discuss Your Farming Project'}</span>
              </a>
              <a
                href="/products"
                className="border border-gold-warm/40 hover:border-gold-champagne text-cream px-8 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
              >
                <span>{isVi ? 'Xem Các Sản Phẩm Nông Sản →' : isZh ? '查看农产品方案 →' : isKo ? '계약 재배 솔루션 보기 →' : isJa ? '契約栽培ソリューションを見る →' : 'View Contract Farming Solutions →'}</span>
              </a>
            </div>
          </div>

          {/* Compact Inquiry Form */}
          <div id="inquiry-form" className="bg-white text-carbon rounded-3xl p-6 sm:p-10 shadow-2xl text-left border border-gold-warm/20 w-full">
            <ProductInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
