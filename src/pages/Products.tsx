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
      descEn: 'Explore Vietnamese fruit and vegetable products in fresh, powder, puree, frozen and individually quick frozen (IQF) formats. VAC works with growers and processors to match product varieties, processing methods, packaging and order volumes to the needs of importers, food manufacturers, food-service operators and retailers.',
      descVi: 'Khám phá các sản phẩm trái cây và rau củ Việt Nam dưới các dạng tươi, bột, xay nhuyễn (puree), đông lạnh và cấp đông rời siêu tốc (IQF). VAC hợp tác với các vùng trồng và nhà máy chế biến để tối ưu hóa quy cách, phương pháp xử lý, đóng gói và sản lượng đáp ứng chính xác nhu cầu của nhà nhập khẩu, nhà máy thực phẩm và chuỗi bán lẻ.',
      linkPath: '/products/fresh-fruits-vegetables',
      linkTextEn: 'Explore Crop & Plant-Based Products',
      linkTextVi: 'Xem Danh Mục Nông Sản & Cây Trồng',
      tags: ['Fresh Produce', 'Dehydrated Powders', 'Fruit Purees, Juices & Concentrates', 'Freeze-Dried', 'IQF Frozen'],
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
      descEn: 'Source Vietnamese chicken products through two clearly defined supply channels: Halal-certified and conventional. Available product forms may include whole chicken, cuts, by-products and value-added products. VAC matches enquiries with suitable processing partners and coordinates specifications, cold-chain handling and required documentation. Halal certification is verified for the specific supplier, product and destination market.',
      descVi: 'Nguồn cung ứng các sản phẩm thịt gà Việt Nam thông qua hai kênh cung ứng riêng biệt: Tiêu chuẩn Halal và Tiêu chuẩn thông thường. Danh mục sản phẩm bao gồm gà nguyên con, thịt gà cắt miếng, phụ phẩm và sản phẩm chế biến sâu. VAC kết nối yêu cầu thương mại với các đối tác chế biến phù hợp, quản lý chuỗi lạnh và hồ sơ chứng nhận Halal theo đúng thị trường đích.',
      linkPath: '/products/poultry-products',
      linkTextEn: 'Explore Poultry Products',
      linkTextVi: 'Xem Danh Mục Sản Phẩm Gia Cầm',
      tags: ['Halal-Certified', 'Conventional Chicken', 'Whole Bird & Cuts', 'By-Products', 'Value-Added'],
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
      descEn: 'Discover Vietnamese Basa fish, shrimp and squid in a range of whole, cut, cleaned and frozen export formats. VAC coordinates species and origin information, processing specifications, size grades, packaging, quality documentation and cold-chain export arrangements with suitable seafood partners.',
      descVi: 'Khám phá các sản phẩm Cá Basa, Tôm Việt Nam và Mực xuất khẩu với đa dạng dạng nguyên con, cắt khúc, làm sạch và cấp đông xuất khẩu. VAC phối hợp thông tin loài, nguồn gốc, quy cách chế biến, phân loại kích thước, đóng gói và hồ sơ xuất khẩu chuỗi lạnh với các nhà máy hải sản uy tín.',
      linkPath: '/products/seafood-products',
      linkTextEn: 'Explore Seafood Products',
      linkTextVi: 'Xem Danh Mục Thủy Hải Sản',
      tags: ['Basa Fish / Pangasius', 'Black Tiger & Vannamei Shrimp', 'Ocean Squid & Octopus', 'Frozen Export Formats'],
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
      descEn: 'Explore VAC’s existing range of agriculture input products for growers and farming partners. Our team helps identify suitable products for different cultivation needs and coordinates product information, supply and technical guidance with the relevant partners.',
      descVi: 'Khám phá danh mục giải pháp vật tư nông nghiệp của VAC dành cho người trồng và đối tác trang trại. Đội ngũ chuyên gia VAC tư vấn lựa chọn sản phẩm phù hợp với thổ nhưỡng, quy trình canh tác và phối hợp cung ứng kỹ thuật tối ưu hóa năng suất.',
      linkPath: '/agricultural-inputs',
      linkTextEn: 'Explore Agriculture Inputs',
      linkTextVi: 'Xem Danh Mục Vật Tư Nông Nghiệp',
      tags: ['Bio-Fertilizers', 'Organic Soil Conditioners', 'Microbial Activators', 'Sustainable Inputs'],
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
        <title>Our Products & Export Portfolio | Vietnam Agriculture Center</title>
        <meta
          name="description"
          content="Vietnam Agriculture Center (VAC) connects international buyers with Vietnamese growers, processors and suppliers across four core product categories."
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
              <span>{language === 'vi' ? 'Tổng Quan Danh Mục Sản Phẩm' : 'Products Overview'}</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl tracking-wide text-forest uppercase leading-tight">
              {language === 'vi' ? 'Sản Phẩm Của Chúng Tôi' : 'Our Products'}
            </h2>

            <p className="font-sans text-base md:text-lg text-carbon/80 leading-relaxed font-light text-justify">
              {language === 'vi'
                ? 'Trung Tâm Nông Nghiệp Việt Nam (VAC) kết nối các nhà mua hàng quốc tế với các vùng trồng, nhà chế biến và nhà cung ứng Việt Nam qua 4 nhóm sản phẩm chủ lực. Chúng tôi điều phối quy cách kỹ thuật, đối tác cung ứng phù hợp, đóng gói, chứng nhận chất lượng và thủ tục xuất khẩu đáp ứng chính xác tiêu chuẩn của từng sản phẩm và thị trường tiêu thụ.'
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
                descEn={cat.descEn}
                descVi={cat.descVi}
                linkPath={cat.linkPath}
                linkTextEn={cat.linkTextEn}
                linkTextVi={cat.linkTextVi}
                tags={cat.tags}
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

