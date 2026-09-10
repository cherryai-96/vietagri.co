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

  // Authentic input products from VAC owned content
  const actualProducts = [
    {
      id: 'soilz',
      badge: isVi ? 'Chất Kích Hoạt Vi Sinh' : 'Microbial Activator',
      name: t('products.input1Title'),
      category: isVi ? 'Vi Sinh & Sinh Học Soil' : 'Microbial & Soil Health',
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
      badge: isVi ? 'Hữu Cơ Nhập Khẩu Nhật Bản' : 'Japan Organic Import',
      name: t('products.input2Title'),
      category: isVi ? 'Phân Bón Hữu Cơ Cao Cấp' : 'Premium Organic Fertilizer',
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
      badge: isVi ? 'Hữu Cơ Hoai Mục Tự Nhiên' : 'Composted Natural Organic',
      name: t('products.input3Title'),
      category: isVi ? 'Cải Tạo Đất & Tầng Mùn' : 'Soil Conditioning & Humus',
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
        <title>{isVi ? 'Vật Tư & Phân Bón Hữu Cơ Kỹ Thuật | Việt Agri' : 'Sustainable Agriculture Inputs | Vietnam Agriculture Center'}</title>
        <meta
          name="description"
          content={isVi 
            ? 'Giải pháp vật tư vi sinh, phân bón hữu cơ cao cấp và công nghệ nông nghiệp tích hợp cho quy mô trang trại thương mại của Vietnam Agriculture Center.' 
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
              {isVi ? 'VẬT TƯ & PHÂN BÓN NÔNG NGHIỆP BỀN VỮNG' : 'SUSTAINABLE AGRICULTURE INPUTS'}
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
                <span>{isVi ? 'Khám Phá Giải Pháp Vật Tư' : 'Explore Our Input Solutions'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#inquiry"
                className="border border-gold-warm/40 hover:border-gold-champagne hover:bg-gold-warm/10 text-cream px-7 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
              >
                <span>{isVi ? 'Trao Đổi Với Chuyên Gia VAC' : 'Talk to Our Agriculture Team'}</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
            <div className="bg-forest-light/60 backdrop-blur-md border border-gold-warm/20 p-6 rounded-2xl">
              <span className="text-gold-champagne font-bold text-xs uppercase tracking-widest block mb-2 whitespace-nowrap">
                {isVi ? 'Định Hướng Canh Tác B2B' : 'B2B Agritech Focus'}
              </span>
              <p className="text-xs text-cream/90 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tích hợp giải pháp vật tư vào mô hình canh tác liên kết quy mô lớn, không bán lẻ phân bón thông thường.' 
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
              {isVi ? 'TẦM NHÌN HỆ THỐNG' : 'SYSTEMIC VISION'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi 
                ? 'Hơn Cả Phân Bón — Kiến Tạo Hệ Thống Canh Tác Bền Vững' 
                : 'Beyond Fertilizer. Building Better Farming Systems.'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-3xl [text-wrap:balance]">
              {isVi 
                ? 'VAC nhìn nhận vật tư nông nghiệp bền vững là một phần cấu thành của hệ thống canh tác tích hợp. Chúng tôi kết hợp nguồn phân bón hữu cơ hoai mục, chất kích hoạt vi sinh đất và kỹ thuật hiện đại để tối ưu hóa toàn diện sinh thái nông trại.' 
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
                {isVi ? 'Cây Trồng Khỏe Mạnh' : 'Stronger Crops'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tăng cường sức đề kháng tự nhiên của bộ rễ và khả năng hấp thụ dinh dưỡng chủ động.' 
                  : 'Enhancing natural root immunity and active nutrient absorption mechanisms.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <Zap size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Canh Tác Hiệu Quả Hơn' : 'More Efficient Farming'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Giảm thiểu lãng phí phân bón, tối ưu số lần bón và nâng cao hiệu suất đầu tư.' 
                  : 'Reducing input wastage, optimizing application frequency, and improving ROI.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <Sprout size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Đất Sống Khỏe Mạnh' : 'Healthier Soil'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Tái tạo tầng mùn organic, cải tạo cấu trúc xốp và khôi phục quần thể vi sinh có lợi.' 
                  : 'Restoring organic humus layer, soil aeration structure, and beneficial soil microbiomes.'}
              </p>
            </div>

            <div className="bg-cream/50 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 hover:border-gold-warm transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest [text-wrap:balance]">
                {isVi ? 'Năng Suất Dài Hạn' : 'Long-Term Productivity'}
              </h3>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Duy trì sản lượng thu hoạch ổn định qua nhiều mùa vụ mà không làm suy kiệt tài nguyên đất.' 
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
              {isVi ? 'TRỌNG TÂM CUNG ỨNG' : 'OUR CORE FOCUS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Định Hướng Giải Pháp Vật Tư Nông Nghiệp' : 'Our Sustainable Agriculture Input Focus'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Tập trung vào 3 trụ cột giải pháp: Vi sinh sinh học, Phân bón hữu cơ cao cấp và Ứng dụng công nghệ Nông nghiệp tích hợp.' 
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
                  {isVi ? 'TRỤ CỘT 01' : 'PILLAR 01'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Vật Tư Vi Sinh Sinh Học Cao Cấp' : 'Advanced Microbial Inputs'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Giải pháp kích hoạt hệ vi sinh vật bản địa sống trong đất (rhizosphere), phân giải khoáng chất khó tan và gia tăng khả năng hấp thụ dinh dưỡng của bộ rễ mà không gây dư lượng hóa học.' 
                    : 'Unlocking rhizosphere biological activity, dissolving bound minerals, and enhancing plant root nutrient uptake without chemical residues.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Phân giải Lân và Kali khó tan trong đất thành dạng dễ hấp thụ' : 'Solubilizing fixed phosphorus & potassium in soil'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Ức chế vi sinh vật gây hại bộ rễ bằng cơ chế cạnh tranh sinh học' : 'Biological suppression of root pathogens'}</span>
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
                  {isVi ? 'TRỤ CỘT 02' : 'PILLAR 02'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Phân Bón Hữu Cơ Hoai Mục Chuẩn Quốc Tế' : 'Premium Organic Inputs'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Nguồn phân bón hữu cơ lên men hoai mục hoàn toàn (nhập khẩu Nhật Bản & xử lý tiêu chuẩn), giàu axit humic, fulvic và các nguyên tố trung vi lượng tự nhiên.' 
                    : 'Fully composted organic fertilizers (imported Japan standards & controlled processing), rich in humic acids, fulvic compounds, and micronutrients.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Cam kết nguồn gốc minh bạch, không tạp chất và dại mầm bệnh' : 'Transparent origin, zero weed seeds & pathogen free'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Tăng độ phì nhiêu và khả năng giữ nước cho các vùng đất cát, đất xói mòn' : 'Boosting CEC and water retention in eroded soils'}</span>
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
                  {isVi ? 'TRỤ CỘT 03' : 'PILLAR 03'}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest leading-tight [text-wrap:balance]">
                  {isVi ? 'Ứng Dụng Nông Nghiệp Công Nghệ Tích Hợp' : 'Integrated Agritech Application'}
                </h3>
                <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed [text-wrap:balance]">
                  {isVi 
                    ? 'Kết hợp kỹ thuật Electroculture (Điện sinh học đất), cảm biến theo dõi sức khỏe đất real-time và phương pháp bón chính xác để tối đa hóa hiệu quả sử dụng vật tư.' 
                    : 'Integrating soil Electroculture techniques, real-time soil health sensors, and precision dosing to maximize input utilization efficiency.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Kích thích trao đổi ion đất bằng năng lượng tự nhiên (Electroculture)' : 'Stimulating soil ion exchange via Electroculture'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-carbon/85">
                    <CheckCircle2 size={16} className="text-gold-warm shrink-0 mt-0.5" />
                    <span>{isVi ? 'Định lượng bón chính xác theo từng giai đoạn sinh trưởng cây trồng' : 'Precision nutrient dosing per crop growth phase'}</span>
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
              {isVi ? 'QUY TRÌNH CANH TÁC' : 'FIELD PROCESS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Từ Nguồn Vật Tư Đến Cánh Đồng Canh Tác' : 'From Input to Field'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Quy trình 4 bước tiếp cận kỹ thuật chuẩn hóa để đảm bảo vật tư phát huy tối đa hiệu quả trên thực địa.' 
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
                <span className="[text-wrap:balance]">{isVi ? 'Hiểu Rõ Cây Trồng & Đất' : 'Understand the Crop'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Phân tích thổ nhưỡng, độ pH, chỉ số EC và đặc tính sinh học của giống cây trồng tại vùng canh tác.' 
                  : 'Analyzing soil chemistry, pH, EC, and crop biological requirements for the target region.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">02</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Sliders size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Lựa Chọn Giải Pháp Phù Hợp' : 'Select Appropriate Approach'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Phối hợp chủng vi sinh, dòng hữu cơ và tỷ lệ phối trộn tối ưu cho mục tiêu sản xuất.' 
                  : 'Matching microbial strains, organic grades, and blend ratios tailored to yield targets.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">03</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Tractor size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Tích Hợp Vào Quy Trình Bón' : 'Integrate into Cultivation'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Ứng dụng vào lịch bón phân lót, bón thúc và hệ thống tưới nhỏ giọt/phun tự động của trang trại.' 
                  : 'Deploying into basal dressing, fertigation lines, and automated field dosing systems.'}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-gold-warm/20 flex flex-col gap-4 relative">
              <span className="font-serif text-3xl font-bold text-gold-warm">04</span>
              <div className="flex items-center gap-2 text-forest font-bold text-base">
                <Eye size={18} className="text-gold-warm shrink-0" />
                <span className="[text-wrap:balance]">{isVi ? 'Theo Dõi & Tối Ưu Hóa' : 'Observe & Optimize'}</span>
              </div>
              <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                {isVi 
                  ? 'Đánh giá chỉ số phát triển rễ, màu sắc lá và chỉ số độ phì đất để tinh chỉnh cho vụ sau.' 
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
              {isVi ? 'ĐỐI TƯỢNG ỨNG DỤNG' : 'TARGET APPLICATIONS'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Vật Tư Bền Vững Cho Nông Nghiệp Quy Mô Thương Mại' : 'Sustainable Inputs for Scalable Agriculture'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Giải pháp được thiết kế dành cho các chủ thể sản xuất quy mô lớn và tổ chức nông nghiệp chuyên nghiệp.' 
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
                    <span className="[text-wrap:balance]">{isVi ? 'Trang Trại Thương Mại' : 'Commercial Farms'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Cung ứng số lượng lớn phân bón hữu cơ và vi sinh ổn định cho các vùng trồng tập trung.' 
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
                    <span className="[text-wrap:balance]">{isVi ? 'Dự Án Canh Tác Liên Kết' : 'Contract Farming Projects'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Đồng bộ nguồn vật tư đầu vào cho các hợp tác xã và hộ nông dân liên kết với VAC.' 
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
                    <span className="[text-wrap:balance]">{isVi ? 'Nhà Đầu Tư Nông Nghiệp' : 'Agricultural Investors'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Tư vấn mô hình canh tác hữu cơ bền vững để bảo toàn giá trị tài sản đất đai dài hạn.' 
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
                    <span className="[text-wrap:balance]">{isVi ? 'Đối Tác Kỹ Thuật & Vật Tư' : 'Agricultural Partners'}</span>
                  </div>
                  <p className="text-xs text-carbon/75 leading-relaxed [text-wrap:balance]">
                    {isVi 
                      ? 'Hợp tác phát triển giải pháp sinh học và thử nghiệm quy trình kỹ thuật mới.' 
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
              {isVi ? 'MÔ HÌNH TÍCH HỢP TOÀN DIỆN' : 'INTEGRATED SYSTEM DIAGRAM'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight [text-wrap:balance]">
              {isVi ? 'Hơn Cả Một Nhà Cung Cấp Vật Tư' : 'More Than an Input Supplier'}
            </h2>
            <p className="text-sm md:text-base text-cream/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'VAC không chỉ phân phối vật tư mà là đơn vị tích hợp toàn chuỗi: Vật tư + Công nghệ + Canh tác + Tiêu thụ xuất khẩu.' 
                : 'VAC is not just an input vendor, but a full-stack integrator: Inputs + Agritech + Cultivation + Export Supply Chain.'}
            </p>
          </div>

          {/* Premium Visual System Diagram */}
          <div className="bg-forest-light/60 border border-gold-warm/30 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Sprout size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Vật Tư Nông Nghiệp' : 'Agriculture Inputs'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Phân hữu cơ & Vi sinh' : 'Organic & Microbial'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Cpu size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Công Nghệ Agritech' : 'Advanced Agritech'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Electroculture & Sensors' : 'Electroculture & Sensors'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <Tractor size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Quy Trình Canh Tác' : 'Farming Implementation'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Tiêu chuẩn GlobalGAP' : 'GlobalGAP standards'}
                </p>
              </div>

              <div className="bg-forest p-6 rounded-2xl border border-gold-warm/30 flex flex-col gap-3 text-center">
                <GitMerge size={32} className="text-gold-champagne mx-auto shrink-0" />
                <h4 className="font-bold text-sm text-gold-champagne uppercase tracking-wider [text-wrap:balance]">
                  {isVi ? 'Chuỗi Cung Ứng Xuất Khẩu' : 'Export Supply Chain'}
                </h4>
                <p className="text-xs text-cream/70 [text-wrap:balance]">
                  {isVi ? 'Bao tiêu đầu ra' : 'Harvest off-take'}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gold-warm/20 text-center">
              <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold text-gold-champagne uppercase tracking-widest [text-wrap:balance]">
                <span>=</span>
                <span>{isVi ? 'HỆ THỐNG NÔNG NGHIỆP BỀN VỮNG TÍCH HỢP (VAC INTEGRATED AGRI-SYSTEM)' : 'INTEGRATED SUSTAINABLE AGRICULTURE SYSTEM'}</span>
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
              {isVi ? 'DANH MỤC VẬT TƯ THỰC TẾ' : 'VERIFIED PRODUCT CATALOGUE'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Danh Mục Vật Tư Nông Nghiệp Khả Dụng' : 'Explore Available Agriculture Inputs'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Các dòng vật tư nông nghiệp chính chủ đã qua kiểm định thực tế và ứng dụng trên hệ thống nông trại VAC.' 
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
                    <span>{isVi ? 'Xem Chi Tiết & Liên Hệ Supplies' : 'View Product & Inquire'}</span>
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
              {isVi ? 'HỆ SINH THÁI KHẮP CHUỖI' : 'FULL ECOSYSTEM FLOW'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight [text-wrap:balance]">
              {isVi ? 'Hệ Sinh Thái Nông Nghiệp VAC' : 'VAC Agricultural Ecosystem'}
            </h2>
            <p className="text-sm md:text-base text-carbon/80 font-light leading-relaxed max-w-2xl [text-wrap:balance]">
              {isVi 
                ? 'Liên kết chặt chẽ từ vật tư đầu vào đến nông sản xuất khẩu chất lượng cao.' 
                : 'A seamless value chain linking sustainable inputs directly to global export markets.'}
            </p>
          </div>

          {/* Ecosystem Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">01. Inputs</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Vật Tư Bền Vững' : 'Sustainable Inputs'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">02. Tech</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Công Nghệ Agritech' : 'Advanced Agritech'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">03. Farming</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Canh Tác Liên Kết' : 'Contract Farming'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">04. Crops</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Sản Xuất Nông Sản' : 'Crop Production'}
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gold-warm/20 text-center flex flex-col gap-2">
              <span className="text-xs font-bold text-gold-warm uppercase whitespace-nowrap">05. Export</span>
              <h4 className="font-serif font-bold text-forest text-sm [text-wrap:balance]">
                {isVi ? 'Xuất Khẩu & Chuỗi Cung Ứng' : 'Quality & Export Supply'}
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
              {isVi ? 'HỢP TÁC CANH TÁC BỀN VỮNG' : 'SUSTAINABLE FARMING PARTNERSHIP'}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight [text-wrap:balance] max-w-3xl">
              {isVi 
                ? 'Xây Dựng Hệ Thống Canh Tác Bền Vững Cùng Việt Agri' 
                : 'Build a More Sustainable Farming System with VAC'}
            </h2>

            <p className="text-sm md:text-base text-cream/90 font-light max-w-2xl leading-relaxed [text-wrap:balance]">
              {isVi 
                ? 'Liên hệ với đội ngũ kỹ thuật VAC để trao đổi về giải pháp vật tư nông nghiệp, khảo sát thổ nhưỡng và kế hoạch canh tác thương mại.' 
                : 'Connect with VAC’s agronomy team to discuss input solutions, soil suitability, and commercial cultivation plans.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="#inquiry-form"
                className="bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                <span>{isVi ? 'Trao Đổi Dự Án Trang Trại' : 'Discuss Your Farming Project'}</span>
              </a>
              <a
                href="/products"
                className="border border-gold-warm/40 hover:border-gold-champagne text-cream px-8 py-4 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
              >
                <span>{isVi ? 'Xem Các Sản Phẩm Nông Sản →' : 'View Contract Farming Solutions →'}</span>
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
