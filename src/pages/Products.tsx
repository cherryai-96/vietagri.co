import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { ProductHero } from '../components/products/ProductHero';
import { ProductCategory } from '../components/products/ProductCategory';
import { ProductInquiryForm } from '../components/products/ProductInquiryForm';
import { ProductCTA } from '../components/products/ProductCTA';

import { motion } from 'framer-motion';

export const Products: React.FC = () => {
  const { language } = useTranslation();

  const mainCategories = [
    {
      id: 'crop-products',
      titleEn: 'Crop & Plant-Based Products',
      titleVi: 'Nông Sản & Sản Phẩm Từ Cây Trồng',
      titleZh: '农产品与植物基产品',
      titleKo: '농산물 및 식물성 제품',
      titleJa: '農産物＆植物性製品',
      descEn: 'Explore Vietnamese fruit and vegetable products in fresh, powder, puree, frozen and individually quick frozen (IQF) formats. VAC works with growers and processors to match product varieties, processing methods, packaging and order volumes to the needs of importers, food manufacturers, food-service operators and retailers.',
      descVi: 'Khám phá các sản phẩm trái cây và rau củ Việt Nam dưới các dạng tươi, bột, xay nhuyễn (puree), đông lạnh và cấp đông rời siêu tốc (IQF). VAC hợp tác với các vùng trồng và nhà máy chế biến để tối ưu hóa quy cách, phương pháp xử lý, đóng gói và sản lượng đáp ứng chính xác nhu cầu của nhà nhập khẩu, nhà máy thực phẩm và chuỗi bán lẻ.',
      descZh: '探索越南新鲜水果和蔬菜产品，涵盖鲜果、果粉、果泥、冷冻及个别速冻 (IQF) 等形态。VAC 与种植户及加工厂紧密合作，优化品种选育、加工工艺、包装及订货量，精准满足进口商、食品制造商、餐饮运营商及零售商的需求。',
      descKo: '신선, 분말, 퓨레, 냉동 및 개별 급속 냉동(IQF) 형태의 베트남 과채 제품군을 탐색하십시오. VAC는 수입업체, 식품 제조업체 및 유통 업체의 요구 사항에 맞춰 생산자와 협력합니다.',
      descJa: '生果、パウダー、ピューレ、冷凍および個別急速冷凍（IQF）形式のベトナム産果物・野菜製品をラインナップ。VACは輸入業者や食品メーカーのニーズに合わせて生産・加工を最適化します。',
      linkPath: '/products/fresh-fruits-vegetables',
      linkTextEn: 'Explore Crop & Plant-Based Products',
      linkTextVi: 'Xem Danh Mục Nông Sản & Cây Trồng',
      linkTextZh: '查看农产品与植物基产品目录',
      linkTextKo: '농산물 제품 카탈로그 보기',
      linkTextJa: '農産物製品カタログを見る',
      tagsEn: ['Fresh Produce', 'Dehydrated Powders', 'Fruit Purees, Juices & Concentrates', 'Freeze-Dried', 'IQF Frozen'],
      tagsVi: ['Nông Sản Tươi', 'Bột Chế Biến', 'Puree & Nước Ép', 'Sấy Thăng Hoa', 'Cấp Đông IQF'],
      tagsZh: ['生鲜农产品', '果蔬纯粉', '果浆与浓缩汁', '冻干水果', 'IQF速冻'],
      tagsKo: ['신선 농산물', '과채 분말', '과일 퓨레 & 농축액', '동결건조', 'IQF 급속 냉동'],
      tagsJa: ['新鮮生果', '果菜パウダー', 'ピューレ＆濃縮液', 'FDフリーズドライ', 'IQF急速冷凍'],
      images: [
        '/images/products/fresh/fresh_banana.png',
        '/images/products/IMG_7967.JPG',
        '/images/products/IMG_7966.PNG',
        '/images/products/IMG_7958.JPG',
        '/images/products/IMG_7960.JPG'
      ],
    },
    {
      id: 'poultry-products',
      titleEn: 'Poultry Products',
      titleVi: 'Sản Phẩm Gia Cầm Xuất Khẩu',
      titleZh: '出口家禽类产品',
      titleKo: '수출용 가금류 제품',
      titleJa: '輸出用家禽肉製品',
      descEn: 'Source Vietnamese chicken products through two clearly defined supply channels: Halal-certified and conventional. Available product forms may include whole chicken, cuts, by-products and value-added products. VAC matches enquiries with suitable processing partners and coordinates specifications, cold-chain handling and required documentation. Halal certification is verified for the specific supplier, product and destination market.',
      descVi: 'Nguồn cung ứng các sản phẩm thịt gà Việt Nam thông qua hai kênh cung ứng riêng biệt: Tiêu chuẩn Halal và Tiêu chuẩn thông thường. Danh mục sản phẩm bao gồm gà nguyên con, thịt gà cắt miếng, phụ phẩm và sản phẩm chế biến sâu. VAC kết nối yêu cầu thương mại với các đối tác chế biến phù hợp, quản lý chuỗi lạnh và hồ sơ chứng nhận Halal theo đúng thị trường đích.',
      descZh: '通过清真认证 (Halal) 与常规两大独立供应链采购越南鸡肉产品。产品形态涵盖整鸡、分割肉、副产品及精深加工产品。VAC 统一对接需求与合适加工厂，管控冷链物流及对应目标市场的清真合规文件。',
      descKo: '할랄 인증 및 일반 공급 채널을 통해 베트남 계육 제품을 조달하십시오. 통닭, 부위별 정육, 부산물 및 가공품 사양을 갖추고 콜드체인을 관리합니다.',
      descJa: 'ハラール認証および standard 供給チャネルを通じてベトナム産鶏肉製品を調達。丸鶏、部位別カット、副産物、高付加価値加工品を各種取り揃えています。',
      linkPath: '/products/poultry-products',
      linkTextEn: 'Explore Poultry Products',
      linkTextVi: 'Xem Danh Mục Sản Phẩm Gia Cầm',
      linkTextZh: '查看家禽类产品目录',
      linkTextKo: '가금류 제품 카탈로그 보기',
      linkTextJa: '家禽肉製品カタログを見る',
      tagsEn: ['Halal-Certified', 'Conventional Chicken', 'Whole Bird & Cuts', 'By-Products', 'Value-Added'],
      tagsVi: ['Chứng Nhận Halal', 'Gà Công Nghiệp', 'Gà Nguyên Con & Cắt Miếng', 'Phụ Phẩm Gia Cầm', 'Chế Biến Sâu'],
      tagsZh: ['清真认证 (Halal)', '常规鸡肉', '整鸡与分割肉', '副产品', '深加工产品'],
      tagsKo: ['할랄 인증', '일반 계육', '통닭 및 정육', '부산물', '가공 제품'],
      tagsJa: ['ハラール認証', '一般鶏肉', '丸鶏・部位カット', '副産物', '深加工品'],
      images: [
        '/images/products/poultry/poultry_halal_whole_chicken.jpeg',
        '/images/products/poultry/poultry_boneless_breast.jpeg',
        '/images/products/poultry/poultry_whole_wings.jpeg',
        '/images/products/poultry/poultry_drumsticks.jpeg',
        '/images/products/poultry/poultry_feet_paws.jpeg',
        '/images/products/poultry/poultry_leg_quarters.jpeg'
      ],
    },
    {
      id: 'seafood-products',
      titleEn: 'Aquaculture & Seafood Products',
      titleVi: 'Sản Phẩm Thủy Hải Sản',
      titleZh: '水产与海鲜产品',
      titleKo: '수산물 및 해산물 제품',
      titleJa: '水産物＆海鮮製品',
      descEn: 'Discover Vietnamese Basa fish, shrimp and squid in a range of whole, cut, cleaned and frozen export formats. VAC coordinates species and origin information, processing specifications, size grades, packaging, quality documentation and cold-chain export arrangements with suitable seafood partners.',
      descVi: 'Khám phá các sản phẩm Cá Basa, Tôm Việt Nam và Mực xuất khẩu với đa dạng dạng nguyên con, cắt khúc, làm sạch và cấp đông xuất khẩu. VAC phối hợp thông tin loài, nguồn gốc, quy cách chế biến, phân loại kích thước, đóng gói và hồ sơ xuất khẩu chuỗi lạnh với các nhà máy hải sản uy tín.',
      descZh: '探索越南巴沙鱼、对虾及鱿鱼等出口级海鲜，提供整条、切段、去内脏及速冻等多种规格。VAC 协调物种信息、原产地证明、加工规格、尺寸分级、包装、质量认证及冷链出口。',
      descKo: '바사 피쉬, 새우 및 오징어 제품의 냉동 수출 규격을 확인하십시오. VAC는 품종, 원산지, 가공 규격 및 콜드체인 수출 배송을 전담 조율합니다.',
      descJa: 'ベトナム産バサ魚、エビ、イカなどの輸出用冷凍水산物をラインナップ。VACは加工規格、選別、包装、冷錬輸出手続きを一括 조율します。',
      linkPath: '/products/seafood-products',
      linkTextEn: 'Explore Seafood Products',
      linkTextVi: 'Xem Danh Mục Thủy Hải Sản',
      linkTextZh: '查看水产与海鲜产品目录',
      linkTextKo: '수산물 제품 카탈로그 보기',
      linkTextJa: '水産物製品カタログを見る',
      tagsEn: ['Basa Fish / Pangasius', 'Black Tiger & Vannamei Shrimp', 'Ocean Squid & Octopus', 'Frozen Export Formats'],
      tagsVi: ['Cá Basa / Pangasius', 'Tôm Sú & Tôm Thẻ', 'Mực & Bạch Tuộc', 'Cấp Đông Xuất Khẩu'],
      tagsZh: ['巴沙鱼 / 龙利鱼', '草虾与南美白对虾', '远洋鱿鱼与章鱼', '出口速冻规格'],
      tagsKo: ['바사 피쉬 (Pangasius)', '블랙타이거 & 흰다리새우', '오징어 & 문어', '수출용 냉동 포맷'],
      tagsJa: ['バサ魚 (Pangasius)', 'ブラックタイガー＆バナメイエビ', '天然イカ＆タコ', '輸出用冷凍規格'],
      images: [
        '/images/products/seafood/basa_well_trimmed_fillet.jpeg',
        '/images/products/seafood/shrimp_hoso.jpeg',
        '/images/products/seafood/squid_whole_cleaned.jpeg',
        '/images/products/seafood/basa_steaks.jpeg',
        '/images/products/seafood/shrimp_pto.jpeg',
        '/images/products/seafood/squid_rings.jpeg'
      ],
    },
    {
      id: 'agricultural-inputs',
      titleEn: 'Agriculture Inputs',
      titleVi: 'Vật Tư & Nguyên Liệu Nông Nghiệp',
      titleZh: '农业投入品与物资',
      titleKo: '농업 자재 및 원자재',
      titleJa: '農業資材・原材料',
      descEn: 'Explore VAC’s existing range of agriculture input products for growers and farming partners. Our team helps identify suitable products for different cultivation needs and coordinates product information, supply and technical guidance with the relevant partners.',
      descVi: 'Khám phá danh mục giải pháp vật tư nông nghiệp của VAC dành cho người trồng và đối tác trang trại. Đội ngũ chuyên gia VAC tư vấn lựa chọn sản phẩm phù hợp với thổ nhưỡng, quy trình canh tác và phối hợp cung ứng kỹ thuật tối ưu hóa năng suất.',
      descZh: '探索 VAC 为种植户及农场合作伙伴提供的农业投入品方案。专家团队根据土壤条件与种植需求提供选品建议，并联合技术伙伴提供全程技术指导。',
      descKo: '농가 및 농장 파트너를 위한 VAC의 농자재 솔루션입니다. 토양 개선, 유기질 비료 및 지속 가능한 농업용 입자 솔루션을 제공합니다.',
      descJa: '農家および農園パートナー向けのVAC農業資材ソリューション。土壌改良、有機肥料、持続可能な農業資材をラインナップしています。',
      linkPath: '/agricultural-inputs',
      linkTextEn: 'Explore Agriculture Inputs',
      linkTextVi: 'Xem Danh Mục Vật Tư Nông Nghiệp',
      linkTextZh: '查看农业投入品目录',
      linkTextKo: '농자재 제품 카탈로그 보기',
      linkTextJa: '農業資材カタログを見る',
      tagsEn: ['Bio-Fertilizers', 'Organic Soil Conditioners', 'Microbial Activators', 'Sustainable Inputs'],
      tagsVi: ['Phân Bón Sinh Học', 'Cải Tạo Đất Hữu Cơ', 'Vi Sinh Kích Hoạt', 'Vật Tư Bền Vững'],
      tagsZh: ['生物有机肥', '有机土壤改良剂', '微生物激活剂', '可持续投入品'],
      tagsKo: ['미생물 비료', '유기질 토양 개량제', '미생물 활성제', '지속 가능한 자재'],
      tagsJa: ['バイオ肥料', '有機土壌改良剤', '微生物活性剤', '持続可能資材'],
      images: [
        '/images/products/Bio.soilz.png',
        '/images/products/Chicken_manure.png',
        '/images/products/Cow_dung.png',
        '/images/products/soil_activator.png'
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-cream text-carbon">
      <Helmet>
        <title>
          {language === 'vi'
            ? 'Sản Phẩm & Danh Mục Xuất Khẩu | VietAgri.co'
            : language === 'zh'
            ? '我们的产品与出口组合 | 越南农业中心'
            : language === 'ko'
            ? '제품 및 수출 포트폴리오 | 베트남 농업 센터'
            : language === 'ja'
            ? '製品＆輸出ポートフォリオ | ベトナム農業センター'
            : 'Our Products & Export Portfolio | Vietnam Agriculture Center'}
        </title>
        <meta
          name="description"
          content={
            language === 'vi'
              ? 'Trung Tâm Nông Nghiệp Việt Nam (VAC) kết nối nhà mua hàng quốc tế với nông dân và nhà chế biến...'
              : language === 'zh'
              ? '越南农业中心 (VAC) 在四大核心产品领域连接国际买家与越南种植户、加工商及供应商。'
              : language === 'ko'
              ? '베트남 농업 센터(VAC)는 4대 핵심 제품 분야에서 글로벌 바이어와 베트남 생산자 및 가공 업체를 연결합니다.'
              : language === 'ja'
              ? 'ベトナム農業センター（VAC）は4つの主要製品カテゴリーで国際バイヤーとベトナムの生産者・加工業者を結びつけます。'
              : 'Vietnam Agriculture Center (VAC) connects international buyers with Vietnamese growers, processors and suppliers across four core product categories.'
          }
        />
      </Helmet>

      {/* === HERO === */}
      <ProductHero />

      {/* === MAIN PRODUCTS OVERVIEW SECTION === */}
      <section id="part1" className="py-20 md:py-28 bg-ivory px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5 mb-16 md:mb-20 max-w-4xl"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-warm">
              <span className="w-8 h-[2px] bg-gold-warm" />
              <span>
                {language === 'vi'
                  ? 'Tổng Quan Danh Mục Sản Phẩm'
                  : language === 'zh'
                  ? '产品目录总览'
                  : language === 'ko'
                  ? '제품 카탈로그 개요'
                  : language === 'ja'
                  ? '製品カタログ概要'
                  : 'Products Overview'}
              </span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl tracking-wide text-forest uppercase leading-tight">
              {language === 'vi'
                ? 'Sản Phẩm Của Chúng Tôi'
                : language === 'zh'
                ? '我们的产品'
                : language === 'ko'
                ? 'VAC 주요 취급 제품'
                : language === 'ja'
                ? 'VAC取扱製品一覧'
                : 'Our Products'}
            </h2>

            <p className="font-sans text-base md:text-lg text-carbon/80 leading-relaxed font-light text-justify">
              {language === 'vi'
                ? 'Trung Tâm Nông Nghiệp Việt Nam (VAC) kết nối các nhà mua hàng quốc tế với các vùng trồng, nhà chế biến và nhà cung ứng Việt Nam qua 4 nhóm sản phẩm chủ lực. Chúng tôi điều phối quy cách kỹ thuật, đối tác cung ứng phù hợp, đóng gói, chứng nhận chất lượng và thủ tục xuất khẩu đáp ứng chính xác tiêu chuẩn của từng sản phẩm và thị trường tiêu thụ.'
                : language === 'zh'
                ? '越南农业中心 (VAC) 在4大核心产品领域连接国际买家与越南种植区、加工厂及供应商。我们根据具体产品和目标市场的要求，统一协调买家技术规格、匹配合适的供应伙伴、包装设计、质量认证及出口通关手续。'
                : language === 'ko'
                ? '베트남 농업 센터(VAC)는 4대 주요 제품군을 통해 글로벌 바이어와 베트남 현지 농가, 가공 공장 및 공급 업체를 연결합니다. 구매자 요구 사양, 포장 규격, 품질 인증서 및 콜드체인 수출 절차를 완벽하게 총괄 조율합니다.'
                : language === 'ja'
                ? 'ベトナム農業センター（VAC）は、4つの主要製品カテゴリーを通じて国際バイヤーとベトナムの生産地・加工工場・サプライヤーを接続します。バイヤーの技術仕様、適切な供給パートナー、包装、品質証明書、冷錬輸出手続きを徹底管理します。'
                : 'Vietnam Agriculture Center (VAC) connects international buyers with Vietnamese growers, processors and suppliers across four product categories. We coordinate buyer specifications, suitable supply partners, packaging, quality documentation and export arrangements according to each product and destination market.'}
            </p>
          </motion.div>

          {/* Product Categories — Alternating 4 Core Categories */}
          <div className="flex flex-col gap-12 md:gap-16">
            {mainCategories.map((cat, idx) => (
              <ProductCategory
                key={cat.id}
                id={cat.id}
                titleEn={cat.titleEn}
                titleVi={cat.titleVi}
                titleZh={cat.titleZh}
                titleKo={cat.titleKo}
                titleJa={cat.titleJa}
                descEn={cat.descEn}
                descVi={cat.descVi}
                descZh={cat.descZh}
                descKo={cat.descKo}
                descJa={cat.descJa}
                linkPath={cat.linkPath}
                linkTextEn={cat.linkTextEn}
                linkTextVi={cat.linkTextVi}
                linkTextZh={cat.linkTextZh}
                linkTextKo={cat.linkTextKo}
                linkTextJa={cat.linkTextJa}
                tagsEn={cat.tagsEn}
                tagsVi={cat.tagsVi}
                tagsZh={cat.tagsZh}
                tagsKo={cat.tagsKo}
                tagsJa={cat.tagsJa}
                images={cat.images}
                reversed={idx % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === INQUIRY FORM === */}
      <section id="inquiry" className="py-20 md:py-28 bg-cream border-t border-gold-warm/20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ProductInquiryForm />
        </div>
      </section>

      {/* === CTA === */}
      <ProductCTA />
    </div>
  );
};

