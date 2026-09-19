export interface ProductItem {
  id: string;
  nameEn: string;
  nameVi: string;
  nameZh?: string;
  scientificName?: string;
  category: 'fresh' | 'powders' | 'freeze-dried' | 'iqf' | 'poultry' | 'seafood' | 'basa' | 'shrimp' | 'squid' | string;
  subCategory?: string;
  formats: string[];
  specifications: {
    moisture?: string;
    brix?: string;
    shelfLife: string;
    storage: string;
    packaging: string;
    origin?: string;
  };
  applications: string[];
  seasonality?: string;
  image: string;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  titleEn: string;
  titleVi: string;
  titleZh?: string;
  subtitleEn: string;
  subtitleVi: string;
  subtitleZh?: string;
  heroImage: string;
  catalogueFileName: string;
  catalogueDriveId: string;
  descriptionEn: string;
  descriptionVi: string;
  descriptionZh?: string;
  highlightsEn: string[];
  highlightsVi: string[];
  highlightsZh?: string[];
  availableCutsEn: string[];
  availableCutsVi: string[];
  availableCutsZh?: string[];
  defaultPackagingEn: string;
  defaultPackagingVi: string;
  defaultPackagingZh?: string;
  storageEn: string;
  storageVi: string;
  storageZh?: string;
}

export interface CatalogueInfo {
  id: string;
  titleEn: string;
  titleVi: string;
  titleZh?: string;
  category: string;
  pageCount: number;
  fileSize: string;
  fileName: string;
  downloadUrl: string;
  driveId: string;
  coverImage: string;
  descEn: string;
  descVi: string;
  descZh?: string;
}

export interface FormatComparison {
  formatKey: 'fresh' | 'powders' | 'freeze-dried' | 'iqf' | 'purees';
  titleEn: string;
  titleVi: string;
  bestSuitedEn: string;
  bestSuitedVi: string;
  advantageEn: string;
  advantageVi: string;
  storageEn: string;
  storageVi: string;
  shelfLifeEn: string;
  shelfLifeVi: string;
  link: string;
}

export const CATEGORIES_DATA: Record<string, CategoryInfo> = {
  'fresh': {
    id: 'fresh',
    slug: 'fresh-fruits-vegetables',
    titleEn: 'Fresh Fruits & Vegetables',
    titleVi: 'Trái Cây & Rau Củ Tươi Xuất Khẩu',
    titleZh: '出口新鲜水果与蔬菜',
    subtitleEn: 'Seasonal Export-Grade Produce Direct from Verified Farms',
    subtitleVi: 'Nông Sản Tươi Đạt Chuẩn Xuất Khẩu Thu Hoạch Trực Tiếp Từ Vùng Trồng',
    subtitleZh: '产地直采·符合 VietGAP/GlobalG.A.P 出口标准',
    heroImage: '/images/products/IMG_7966.PNG',
    catalogueFileName: 'VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    catalogueDriveId: '1N9T754XJ1-0x9HT5p8hBhvb9hV3N3-bP',
    descriptionEn: 'VAC connects global buyers directly to accredited Vietnamese fruit orchards and vegetable farms. Managed under strict VietGAP and GlobalG.A.P protocols, our fresh produce undergoes rigorous MRL testing, cold chain preservation, and certified VHT/irradiation treatment to ensure border compliance across the EU, USA, Japan, Korea, and ASEAN markets.',
    descriptionVi: 'VAC kết nối trực tiếp nhà mua hàng quốc tế với các trang trại và vùng trồng liên kết đạt chuẩn tại Việt Nam. Được quản lý theo quy trình VietGAP và GlobalG.A.P nghiêm ngặt, nông sản tươi VAC đáp ứng đầy đủ tiêu chuẩn dư lượng MRLs, bảo quản chuỗi lạnh liên tục và xử lý dịch hại (VHT/Chiếu xạ) sẵn sàng xuất khẩu.',
    descriptionZh: 'VAC 将全球买家直接对接至越南经过认证的水果果园及蔬菜基地。全流程采用 VietGAP 和 GlobalG.A.P 规范管理，生鲜农产品经过严格的农药残留 (MRL) 检测、全程冷链保鲜及 VHT 蒸汽热处理 / 辐射灭菌处理，完全符合欧盟、美国、日本、韩国及东盟市场的准入要求。',
    highlightsEn: [
      'Strict MRL & pesticide residue compliance',
      'Continuous cold chain management (REEFER container +2°C to +13°C)',
      'Certified post-harvest treatment (VHT / Irradiation)',
      'Custom ventilated export packaging (Carton / Plastic crates)'
    ],
    highlightsVi: [
      'Kiểm soát nghiêm ngặt dư lượng thuốc BVTV đạt chuẩn MRLs',
      'Quản lý chuỗi lạnh liên tục (Container lạnh REEFER từ +2°C đến +13°C)',
      'Xử lý sau thu hoạch đạt chuẩn (Xử lý hơi nước nóng VHT / Chiếu xạ)',
      'Đóng gói xuất khẩu chuyên dụng (Thùng carton thông khí / Khay nhựa)'
    ],
    highlightsZh: [
      '严格控制农药残留 (MRLs) 符合目标国标准',
      '全程冷链运输管理 (冷藏集装箱 +2°C 至 +13°C)',
      '后处理检疫认证 (VHT 蒸汽热处理 / 辐射灭菌)',
      '定制化透气出口包装 (透气纸箱 / 塑料周转箱)'
    ],
    availableCutsEn: ['Whole Fruit', 'Stem-on', 'Sorted by Caliber/Weight', 'Cleaned & Polished'],
    availableCutsVi: ['Quả nguyên', 'Còn cành lá', 'Phân loại theo kích thước/trọng lượng', 'Làm sạch & đánh bóng'],
    availableCutsZh: ['整果', '带茎带叶', '按果径/重量分级', '清洗与抛光'],
    defaultPackagingEn: '5kg, 10kg, 18kg Ventilated Export Cartons with PE Liner or Plastic Crates on PE Pallets',
    defaultPackagingVi: 'Thùng carton đục lỗ 5kg, 10kg, 18kg có túi PE lót hoặc khay nhựa trên pallet quấn màng PE',
    defaultPackagingZh: '5kg, 10kg, 18kg 出口透气纸箱（内衬 PE 袋）或托盘装塑料周转箱',
    storageEn: 'Cold storage (+2°C to +13°C depending on commodity), 85-95% RH',
    storageVi: 'Bảo quản lạnh (+2°C đến +13°C tùy loại nông sản), độ ẩm tương đối 85-95%',
    storageZh: '冷库储存（+2°C 至 +13°C，视具体品种而定），相对湿度 85-95%'
  },
  'powders': {
    id: 'powders',
    slug: 'fruit-vegetable-powders',
    titleEn: 'Fruit & Vegetable Powders',
    titleVi: 'Bột Trái Cây & Rau Củ Thực Phẩm',
    titleZh: '食品级果蔬纯粉',
    subtitleEn: 'High-Purity Natural Ingredients for F&B, Bakery & Supplements',
    subtitleVi: 'Nguyên Liệu Tự Nhiên Cao Cấp Phục Vụ Đồ Uống, Bánh Kẹo & Thực Phẩm Chức Năng',
    subtitleZh: '高纯度天然食品配料·专供食品饮料、烘焙与保健品工业',
    heroImage: '/images/products/coffee_cacao.png',
    catalogueFileName: 'VAC_Powders_Product_Catalogue_2026-5.pdf',
    catalogueDriveId: '1HdqV7OvaVWPwKMaf4u2pwMnQuS9bZ6mT',
    descriptionEn: 'Engineered for industrial food and beverage manufacturers, VAC supplies a comprehensive portfolio of fruit and vegetable powders processed via Freeze-Drying, Dehydration, Spray-Drying, and Cold Water Soluble Extraction. Retaining vibrant natural colours, active bio-nutrients, and authentic flavour profiles without synthetic fillers or carrier agents.',
    descriptionVi: 'Dành riêng cho nhà sản xuất thực phẩm và đồ uống công nghiệp, VAC cung cấp danh mục bột trái cây & rau củ phong phú chế biến bằng công nghệ Sấy thăng hoa, Sấy lạnh/sấy nhiệt, Sấy phun và Chiết xuất hòa tan. Giữ trọn màu sắc tự nhiên, hoạt chất sinh học và hương vị đặc trưng không pha tạp chất hay chất độn nhân tạo.',
    descriptionZh: 'VAC 专为食品饮料工业化生产商打造，提供涵盖冻干 (Freeze-Dried)、热风/冷风干燥 (Dehydrated)、喷雾干燥 (Spray-Dried) 及水溶萃取 (Extract) 工艺的完整果蔬粉系列。保留鲜艳天然色素、生物活性营养素及纯正风味，无任何人工添加剂、防腐剂或填充剂。',
    highlightsEn: [
      '4 Manufacturing technologies (Freeze-Dried, Dehydrated, Spray-Dried, Extract)',
      '100% natural, free from synthetic colours & preservatives',
      'Fine particle sizing (80 to 100 Mesh)',
      'High solubility formulations for RTD beverages & supplement mixes'
    ],
    highlightsVi: [
      '4 công nghệ chế biến (Sấy thăng hoa, Sấy nhiệt/lạnh, Sấy phun, Chiết xuất)',
      '100% tự nhiên, không màu nhân tạo và chất bảo quản',
      'Độ mịn tiêu chuẩn (80 đến 100 Mesh)',
      'Độ hòa tan cao chuyên dụng cho đồ uống pha sẵn RTD & thực phẩm chức năng'
    ],
    highlightsZh: [
      '4 大核心生产工艺（冻干、干燥、喷雾干燥、水溶萃取）',
      '100% 天然成分，无人工色素与防腐剂',
      '标准细度（80 至 100 Mesh）',
      '高水溶性配方，适用于 RTD 即饮饮料与补充剂混合粉'
    ],
    availableCutsEn: ['Fine Powder (80-100 Mesh)', 'Water-Soluble Extract Powder', 'Granulated Powder'],
    availableCutsVi: ['Bột mịn (80-100 Mesh)', 'Bột chiết xuất hòa tan', 'Bột dạng hạt (Granulated)'],
    availableCutsZh: ['细粉 (80-100 Mesh)', '水溶性萃取粉', '造粒颗粒粉 (Granulated)'],
    defaultPackagingEn: '1kg, 5kg Aluminum Vacuum Bags in 10kg/20kg Export Cartons or 25kg Fiber Drums',
    defaultPackagingVi: 'Túi nhôm hút chân không 1kg, 5kg đóng trong thùng carton 10kg/20kg hoặc Fiber Drum 25kg',
    defaultPackagingZh: '1kg/5kg 铝箔真空袋，20kg 出口纸箱或 25kg 纸板桶 (Fiber Drum)',
    storageEn: 'Cool, dry condition below 25°C, relative humidity < 60%',
    storageVi: 'Nơi khô ráo, thoáng mát dưới 25°C, độ ẩm tương đối < 60%',
    storageZh: '阴凉干燥处，25°C 以下，相对湿度 < 60%'
  },
  'freeze-dried': {
    id: 'freeze-dried',
    slug: 'freeze-dried-fruits',
    titleEn: 'Freeze-Dried Fruits',
    titleVi: 'Trái Cây Sấy Thăng Hoa',
    titleZh: '冻干水果系列',
    subtitleEn: 'Sublimation Vacuum Freeze-Drying preserving natural flavor, aroma & nutrients',
    subtitleVi: 'Công Nghệ Sấy Thăng Hoa Chân Không Giữ Nguyên Hương Vị, Màu Sắc & Dinh Dưỡng',
    subtitleZh: '真空升华冻干技术·完美锁住天然香气、营养与纯正口感',
    heroImage: '/images/products/IMG_7958.JPG',
    catalogueFileName: 'VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    catalogueDriveId: '1jPaTPhfWrBV9DBNz_5Iyp9pt_EtB_UfU',
    descriptionEn: 'Using sublimation vacuum freeze-drying technology, VAC freeze-dried fruits preserve original vitamins, antioxidants, natural aroma, and cell structure. Offering a delightful crunchy texture with moisture content below 5%, ideal for premium retail snacks, breakfast cereals, chocolate coating, and bakery inclusions.',
    descriptionVi: 'Ứng dụng công nghệ sấy thăng hoa chân không hiện đại, trái cây sấy thăng hoa VAC duy trì hàm lượng vitamin, chất chống oxy hóa, hương thơm và cấu trúc tế bào tự nhiên. Tạo độ giòn xốp thơm ngon với độ ẩm dưới 5%, hoàn hảo cho snack ăn liền cao cấp, ngũ cốc ăn sáng, phủ sô-cô-la và làm nhân bánh.',
    descriptionZh: 'VAC 冻干水果采用现代真空升华冻干技术，完整保留了原生维生素、抗氧化物质、天然香气与细胞结构。产品水分低于 5%，呈现酥脆爽口的质地，是高端零售零食、早餐麦片、巧克力涂层及烘焙夹心的理想选择。',
    highlightsEn: [
      'Sublimation technology preserving nutrients and natural structure',
      'Low moisture content (< 5%) for long ambient shelf life (18-24 months)',
      'Pure fruit, non-fried, zero added sugar or synthetic preservatives',
      'Diverse cut forms: Whole, Slices, Dices, and Crisps'
    ],
    highlightsVi: [
      'Công nghệ thăng hoa bảo tồn trên 98% dinh dưỡng và cấu trúc nguyên bản',
      'Độ ẩm siêu thấp (< 5%) bảo quản nhiệt độ phòng từ 18-24 tháng',
      '100% trái cây nguyên chất, không chiên, không thêm đường hay chất bảo quản',
      'Đa dạng dạng cắt: Nguyên quả, Thái lát, Hạt lựu, Mảnh giòn crisps'
    ],
    highlightsZh: [
      '升华冻干技术保留 98% 以上营养与天然结构',
      '超低水分含量 (< 5%)，常温保质期长达 18-24 个月',
      '100% 纯水果，非油炸、无添加糖及防腐剂',
      '多种切割规格：整果、切片、切丁及碎屑 (Crisps)'
    ],
    availableCutsEn: ['Whole Fruit', 'Slices (3-5mm / 5-7mm)', 'Pieces & Dices (5x5mm, 10x10mm)', 'Crisps & Powder Blend'],
    availableCutsVi: ['Nguyên quả', 'Thái lát (3-5mm / 5-7mm)', 'Cắt mảnh & hạt lựu (5x5mm, 10x10mm)', 'Mảnh giòn crisps'],
    availableCutsZh: ['整果', '切片 (3-5mm / 5-7mm)', '切丁 (5x5mm, 10x10mm)', '酥脆碎屑 (Crisps) 与复合粉末'],
    defaultPackagingEn: 'Double PE inner bags in 5kg/10kg Export Cartons or Customized Retail Pouches',
    defaultPackagingVi: 'Túi PE đôi lót trong thùng carton 5kg/10kg xuất khẩu hoặc túi zipper nhôm OEM',
    defaultPackagingZh: '双层 PE 内袋，5kg/10kg 出口纸箱或定制 OEM 拉链铝箔袋',
    storageEn: 'Ambient temperature (below 28°C), keep sealed in moisture-barrier packaging',
    storageVi: 'Nhiệt độ phòng (dưới 28°C), kín khí trong bao bì chống ẩm',
    storageZh: '常温密封保存（28°C 以下），避光防潮'
  },
  'iqf': {
    id: 'iqf',
    slug: 'iqf-fruits-vegetables',
    titleEn: 'IQF Fruits & Vegetables',
    titleVi: 'Trái Cây & Rau Củ Cấp Đông IQF',
    titleZh: 'IQF 速冻果蔬',
    subtitleEn: 'Individually Quick-Frozen Formats for Controlled Industrial Portioning',
    subtitleVi: 'Nông Sản Cấp Đông Nhanh Rời Rạc Phục Vụ Chế Biến Công Nghiệp & HORECA',
    subtitleZh: '单体快速冻结技术·便于工业化定量投料与餐饮应用',
    heroImage: '/images/products/IMG_7960.JPG',
    catalogueFileName: 'VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    catalogueDriveId: '1G2bwMHCCkACltg-6l6RwoHKYICe4nagj',
    descriptionEn: 'VAC IQF produce uses cryogenic fluidised bed freezing at -35°C to quickly freeze individual fruit and vegetable pieces, preventing large ice crystal formation and cell wall damage. Resulting in free-flowing frozen ingredients that allow exact industrial portioning without thawing the entire bulk package.',
    descriptionVi: 'Nông sản IQF VAC sử dụng công nghệ cấp đông băng chuyền siêu tốc ở -35°C để làm đông lạnh nhanh từng mảnh trái cây/rau củ riêng biệt, ngăn chặn hình thành tinh thể đá lớn làm vỡ tế bào. Sản phẩm tơi rời giúp các nhà máy chế biến định lượng chính xác mà không cần rã đông cả thùng.',
    descriptionZh: 'VAC IQF 农产品采用 -35°C 流化床流体超速冻结技术，快速冻结单体果蔬颗粒，防止形成大冰晶破坏细胞壁。产品呈现 100% 颗粒独立散装状态，便于食品工厂进行精准定量投料，无需整箱解冻。',
    highlightsEn: [
      'Ultra-fast freezing (-35°C) preserving cellular integrity and drip-loss upon thawing',
      '100% free-flowing pieces for automated industrial dispensing',
      'Strict microbiological control and metal detector scanning',
      'Wide cut variations (Dices, Halves, Slices, Whole, Puree blocks)'
    ],
    highlightsVi: [
      'Cấp đông siêu tốc (-35°C) giữ nguyên vẹn tế bào và hạn chế rỉ dịch khi rã đông',
      'Sản phẩm tơi rời 100% thích hợp cho hệ thống định lượng tự động',
      'Kiểm soát vi sinh nghiêm ngặt và rà kim loại tự động',
      'Đa dạng dạng cắt (Hạt lựu, Nửa quả, Thái lát, Nguyên quả, Khối Puree)'
    ],
    highlightsZh: [
      '-35°C 超速冻结，保留细胞完整度与复原口感',
      '100% 单体独立不粘连，适用于自动化投料',
      '严格的微生物控制与自动金属检测仪把关',
      '丰富切割形态（切丁、切块、切片、整果、冻块）'
    ],
    availableCutsEn: ['Dice (10x10mm, 15x15mm, 20x20mm)', 'Slices / Strips', 'Halves & Segments', 'Whole / Seedless', 'Frozen Puree/Pulp Blocks'],
    availableCutsVi: ['Hạt lựu (10x10mm, 15x15mm, 20x20mm)', 'Thái lát / Dải dài', 'Nửa quả & Múi', 'Nguyên quả / Bỏ hạt', 'Khối Puree/Thịt quả đông lạnh'],
    availableCutsZh: ['切丁 (10x10mm, 15x15mm, 20x20mm)', '切片 / 切条', '对半切 / 瓣状', '整果 / 去核去籽', '冻果浆/果肉块 (Puree Blocks)'],
    defaultPackagingEn: '10kg / 15kg Blue PE Bag inside Heavy-Duty Export Carton or 1000kg Octabin',
    defaultPackagingVi: 'Túi PE xanh chuyên dụng lót trong thùng carton 10kg/15kg hoặc Octabin 1000kg',
    defaultPackagingZh: '10kg / 15kg 蓝 PE 内袋出口重型纸箱或 1000kg 八角纸箱 (Octabin)',
    storageEn: 'Deep frozen at -18°C or lower continuous storage',
    storageVi: 'Trạng thái cấp đông sâu tại -18°C hoặc thấp hơn liên tục',
    storageZh: '深度冷冻储存于 -18°C 或更低温度'
  },
  'purees': {
    id: 'purees',
    slug: 'fruit-purees',
    titleEn: 'Fruit Purees, Juices & Concentrates',
    titleVi: 'Puree Trái Cây, Nước Ép & Đậm Đặc (Fruit Purees, Juices & Concentrates)',
    titleZh: '果浆、浓缩汁与原汁',
    subtitleEn: '100% Pure Natural Fruit Purees, Juices & Concentrates for F&B Industrial Processing',
    subtitleVi: 'Nông Sản Xay Nhuyễn & Nước Ép Tự Nhiên 100% Phục Vụ Chế Biến Công Nghiệp & Đồ Uống',
    subtitleZh: '100% 纯天然无菌果浆与浓缩果汁·专供食品饮料工业加工',
    heroImage: '/images/products/puree/puree_mango.png',
    catalogueFileName: 'VAC_Puree_Concentrate_Catalogue_2026.pdf',
    catalogueDriveId: '1S5D829gwdnJuHvCJN6EHFK3we_Eh8pLQ',
    descriptionEn: 'VAC Fruit Purees and Concentrates are crafted from selected fresh tropical fruits harvested at peak ripeness in Vietnam. Processed under aseptic cold-crushing and thermal flash pasteurisation systems, our purees retain vibrant natural colour, rich aroma, smooth texture, and bio-nutrients without artificial flavours, preservatives, or added sugar.',
    descriptionVi: 'Trái cây xay nhuyễn (Puree) và Nước ép đậm đặc VAC được sản xuất từ 100% trái cây tươi nhiệt đới thu hoạch đúng độ chín tại Việt Nam. Xử lý bằng hệ thống nghiền lạnh vô trùng và thanh trùng siêu tốc, giữ trọn màu sắc tươi sáng, hương vị đậm đà, độ mịn mượt tự nhiên và dưỡng chất quý giá mà không bổ sung đường, hương liệu hay chất bảo quản.',
    descriptionZh: 'VAC 果浆与浓缩汁选用越南原产地最佳成熟度的热风/热带水果制作。采用冷破碎无菌处理与瞬时高温灭菌 (Flash Pasteurisation) 系统，保留鲜艳色彩、浓郁果香、细腻质地与天然营养，无人工香精、防腐剂或添加糖。',
    highlightsEn: [
      '100% Natural Fresh Fruit, Zero Added Sugar or Artificial Preservatives',
      'Aseptic Processing & Flash Pasteurisation preserving fresh fruit aroma & color',
      'Strict Brix (°Bx), pH, and Pulp content standardization for industrial consistency',
      'Flexible Formats: Puree with Seeds, Seedless Puree, Single-Strength Juice, Juice Concentrate'
    ],
    highlightsVi: [
      '100% Trái cây tươi tự nhiên, không bổ sung đường hay chất bảo quản nhân tạo',
      'Công nghệ nghiền vô trùng & Thanh trùng siêu tốc giữ nguyên màu sắc & hương vị tươi',
      'Kiểm soát chuẩn xác chỉ số Brix (°Bx), pH và độ mịn pulp cho quy mô công nghiệp',
      'Đa dạng quy cách: Puree có hạt, Puree bỏ hạt, Nước ép nguyên chất, Nước ép đậm đặc'
    ],
    highlightsZh: [
      '100% 天然鲜果原料，无添加糖与防腐剂',
      '无菌冷破碎与瞬时灭菌技术，保留鲜果风味',
      '严格标准化 Brix 糖度、pH 及果肉含量',
      '灵活规格：带籽/去籽果浆、原汁 (Single-Strength)、浓缩汁'
    ],
    availableCutsEn: [
      'Aseptic Frozen Puree (Seedless / Seed-in)',
      'Single Strength Natural Fruit Juice',
      'High Brix Fruit Juice Concentrate',
      'Frozen Puree Drum / Pouch Packaging'
    ],
    availableCutsVi: [
      'Puree cấp đông vô trùng (Bỏ hạt / Có hạt)',
      'Nước ép tươi nguyên chất single-strength',
      'Nước ép trái cây đậm đặc Brix cao',
      'Puree đóng phuy / túi PE cấp đông'
    ],
    availableCutsZh: [
      '无菌冻果浆 (去籽 / 带籽)',
      '单倍浓度天然果汁 (Single-Strength)',
      '高 Brix 糖度浓缩果汁',
      '桶装/袋装冻果浆'
    ],
    defaultPackagingEn: '20kg Aseptic Bag in Box, 200kg Aseptic Steel Drum, or 10kg Vacuum Pouch',
    defaultPackagingVi: 'Túi vô trùng Aseptic 20kg đóng hộp Carton, Phuy thép vô trùng 200kg, hoặc Túi chân không 10kg',
    defaultPackagingZh: '20kg 无菌盒中袋 (BIB)、200kg 无菌钢桶 (Steel Drum) 或 10kg 真空袋',
    storageEn: 'Deep freeze at -18°C for Purees, or Chilled/Ambient for Aseptic Packaging',
    storageVi: 'Cấp đông sâu -18°C đối với Puree đông lạnh, hoặc bảo quản mát/thường đối với hàng Aseptic',
    storageZh: '冻果浆 -18°C 深度冷冻；无菌包装可常温/冷藏保存'
  },
  'seafood': {
    id: 'seafood',
    slug: 'seafood-products',
    titleEn: 'Aquaculture & Seafood Products',
    titleVi: 'Sản Phẩm Thủy Hải Sản',
    titleZh: '出口级水产与海鲜',
    subtitleEn: 'Export-Grade Basa Fish, Shrimp & Squid Products Direct from Accredited Facilities',
    subtitleVi: 'Cá Basa, Tôm & Mực Đạt Chuẩn Xuất Khẩu Quốc Tế',
    subtitleZh: '巴沙鱼、对虾及远洋鱿鱼·标准加工厂直供',
    heroImage: '/images/products/seafood/basa_whole_round.jpeg',
    catalogueFileName: 'VAC_Basa_Fish_Catalog_2026.pdf',
    catalogueDriveId: '1EBOBC4fxbm_xXpTCEQZ5024KMe5bZw_5',
    descriptionEn: 'VAC provides a comprehensive portfolio of aquaculture and seafood products including Basa fish, Black Tiger & Vannamei shrimp, and Squid/Octopus. Processed in HACCP, BRCGS, and ISO certified facilities with strict traceability from accredited farms to global buyers.',
    descriptionVi: 'VAC cung cấp danh mục sản phẩm thủy hải sản cao cấp bao gồm Cá Basa, Tôm Sú/Thẻ chân trắng và Mực/Bạch tuộc. Được chế biến tại các nhà máy đạt chứng nhận HACCP, BRCGS, ISO với quy trình truy xuất nguồn gốc nghiêm ngặt từ vùng nuôi đạt chuẩn đến đối tác thương mại toàn cầu.',
    descriptionZh: 'VAC 提供涵盖巴沙鱼、草虾/南美白对虾、鱿鱼及章鱼的出口级水产品。产品均在认证的 HACCP、BRCGS 及 ISO 工厂加工，全程可追溯。',
    highlightsEn: [
      'HACCP, BRCGS, ISO & Halal Certified Processing Facilities',
      'Strict Antibiotic & Heavy Metal Residue Testing',
      'Deep Freeze (-18°C) Cold Chain Integrity',
      'Diverse Export Formats (Fillet, Portions, Steaks, PTO, Nobashi, Rings, Skewers)'
    ],
    highlightsVi: [
      'Nhà máy chế biến đạt chuẩn HACCP, BRCGS, ISO & Halal',
      'Kiểm soát nghiêm ngặt dư lượng kháng sinh & kim loại nặng',
      'Bảo quản chuỗi lạnh cấp đông sâu (-18°C) liên tục',
      'Đa dạng quy cách chế biến (Fillet, Cắt khúc, Tôm PTO, Nobashi, Mực khoanh, Xiên que)'
    ],
    highlightsZh: [
      'HACCP、BRCGS、ISO 及清真 Halal 认证加工厂',
      '严格的抗生素与重金属残留检测',
      '-18°C 深度冷冻全程冷链保障',
      '多样化出口规格（鱼片、切段、虾仁、鱿鱼圈、串烧）'
    ],
    availableCutsEn: ['Fillet (Well/Untrimmed)', 'Cutlet / Steaks', 'Cubes / Portions', 'PTO / P&D / Nobashi Shrimp', 'Squid Tube / Rings / Tentacles'],
    availableCutsVi: ['Fillet (Lọc sạch / Chưa lọc)', 'Cắt khúc / Steaks', 'Cắt vuông / Cắt khúc', 'Tôm PTO / P&D / Nobashi', 'Mực ống / Khoanh / Râu mực'],
    availableCutsZh: ['巴沙鱼片 (修剪/未修剪)', '切段 / 鱼排 (Steaks)', '切块 (Portions/Cubes)', '带尾/去尾虾仁 (PTO/P&D/Nobashi)', '鱿鱼筒/鱿鱼圈/鱿鱼须'],
    defaultPackagingEn: 'IQF 1kg / 2kg PE Rider Bag in 10kg Master Carton or Interleaved Shatterpack',
    defaultPackagingVi: 'Cấp đông rời IQF túi PE 1kg / 2kg lót thùng carton 10kg hoặc mạ băng đóng khối',
    defaultPackagingZh: '1kg/2kg IQF 骑缝袋 10kg Master 纸箱或包冰块装',
    storageEn: 'Deep freeze at -18°C or lower continuous storage',
    storageVi: 'Bảo quản cấp đông sâu tại -18°C hoặc thấp hơn',
    storageZh: '深度冷冻于 -18°C 或更低温度'
  },
  'crops-plant-based': {
    id: 'crops-plant-based',
    slug: 'crops-plant-based-products',
    titleEn: 'Crops & Plant-Based Products',
    titleVi: 'Nông Sản & Sản Phẩm Từ Cây Trồng',
    titleZh: '农产品与植物基产品',
    subtitleEn: 'Comprehensive Portfolio of Fresh, Dried, Powdered, Pureed & IQF Produce',
    subtitleVi: 'Danh Mục Tổng Thể Nông Sản Tươi, Bột, Sấy Thăng Hoa, Puree & Cấp Đông IQF',
    subtitleZh: '涵盖鲜果、纯粉、冻干、果浆及 IQF 速冻的完整产品线',
    heroImage: '/images/products/IMG_7966.PNG',
    catalogueFileName: 'VAC_Puree_Concentrate_Catalogue_2026.pdf',
    catalogueDriveId: '1S5D829gwdnJuHvCJN6EHFK3we_Eh8pLQ',
    descriptionEn: 'VAC provides an integrated portfolio of tropical agricultural produce across five core formats: Fresh Fruits & Vegetables, Fruit & Veg Powders, Fruit Purees & Juices, Freeze-Dried Fruits, and IQF Frozen Produce. Processed under GlobalG.A.P, HACCP, ISO, and BRCGS standards for global B2B supply.',
    descriptionVi: 'VAC cung cấp hệ sinh thái nông sản nhiệt đới toàn diện qua 5 định dạng chế biến chính: Trái Cây & Rau Củ Tươi, Bột Nông Sản, Puree & Nước Ép Trái Cây, Trái Cây Sấy Thăng Hoa, và Nông Sản Cấp Đông IQF. Sản xuất theo tiêu chuẩn GlobalG.A.P, HACCP, ISO, BRCGS phục vụ cung ứng B2B quốc tế.',
    descriptionZh: 'VAC 提供越南热带农产品 5 大加工规格生态：新鲜果蔬、果蔬纯粉、果浆浓缩汁、冻干水果及 IQF 速冻农产品。严格遵循 GlobalG.A.P、HACCP、ISO 与 BRCGS 国际标准，满足全球 B2B 采购需求。',
    highlightsEn: [
      'GlobalG.A.P & VietGAP Farm Traceability',
      '5 Processing Formats (Fresh, Powder, Puree/Juice, Freeze-Dried, IQF)',
      'Certified Cold Chain & Post-Harvest Treatments (VHT/Irradiation)',
      'Customized Industrial B2B Packaging & Private Labeling'
    ],
    highlightsVi: [
      'Truy xuất nguồn gốc vùng trồng VietGAP & GlobalG.A.P',
      '5 Định dạng chế biến (Tươi, Bột, Puree/Nước ép, Sấy thăng hoa, IQF)',
      'Chứng nhận chuỗi lạnh & Xử lý sau thu hoạch (VHT/Chiếu xạ)',
      'Đóng gói B2B công nghiệp & gia công nhãn hàng riêng (Private Label)'
    ],
    highlightsZh: [
      'GlobalG.A.P 及 VietGAP 基地全程可追溯',
      '5 大核心加工形态（生鲜、纯粉、果浆/果汁、冻干、IQF速冻）',
      '认证冷链及检疫后处理 (VHT 蒸汽热处理 / 辐射灭菌)',
      '定制化 B2B 工业包装与 OEM 贴牌服务'
    ],
    availableCutsEn: ['Whole Produce', 'Diced / Cubes', 'Puree / Aseptic Liquid', 'Fine Powder (80-100 Mesh)', 'Freeze-Dried Slices'],
    availableCutsVi: ['Quả nguyên', 'Cắt hạt lựu / Cắt khúc', 'Puree / Nước ép vô trùng', 'Bột mịn (80-100 Mesh)', 'Lát sấy thăng hoa'],
    availableCutsZh: ['整果/整菜', '切丁 / 切块', '果浆 / 无菌原汁', '细粉 (80-100 Mesh)', '冻干片/冻干丁'],
    defaultPackagingEn: 'Ventilated Cartons, Aseptic Bags in Drums, Vacuum Pouches & Master Cartons',
    defaultPackagingVi: 'Thùng carton thông khí, Phuy Aseptic 200kg, Túi nhôm chân không & Thùng master',
    defaultPackagingZh: '出口透气纸箱、200kg 无菌大钢桶、真空袋及 Master 纸箱',
    storageEn: 'Format-dependent: +2°C to +13°C (Fresh), -18°C (IQF/Puree), Ambient dry (Powders/FD)',
    storageVi: 'Tùy định dạng: +2°C đến +13°C (Hàng tươi), -18°C (IQF/Puree), Khô thoáng (Bột/Sấy)',
    storageZh: '依规格而定：+2°C 至 +13°C (生鲜)，-18°C (IQF/果浆)，常温干燥 (纯粉/冻干)'
  },
  'poultry': {
    id: 'poultry',
    slug: 'poultry-products',
    titleEn: 'Poultry Products',
    titleVi: 'Sản Phẩm Gia Cầm Xuất Khẩu',
    titleZh: '出口家禽类产品',
    subtitleEn: 'Export-Grade Chicken & Poultry Products Processed to Strict Standards',
    subtitleVi: 'Thịt Gà & Gia Cầm Chế Biến Tiêu Chuẩn Xuất Khẩu Quốc Tế',
    subtitleZh: '符合清真 certification 与常规标准的高品质鸡肉产品',
    heroImage: '/images/products/poultry/poultry_halal_whole_chicken.jpeg',
    catalogueFileName: 'VAC_Chicken_Products_Catalog_2026.pdf',
    catalogueDriveId: '1u8_chicken_catalog',
    descriptionEn: 'VAC supplies high-quality poultry products sourced from biosecure commercial farms. Processed in ISO & Halal certified slaughterhouses with complete disease control, strict hygiene, and deep-freeze preservation.',
    descriptionVi: 'VAC cung cấp các sản phẩm gia cầm chất lượng cao từ các trang trại thương mại an toàn sinh học. Chế biến tại nhà máy giết mổ đạt chuẩn ISO & Halal với kiểm soát dịch bệnh nghiêm ngặt và bảo quản cấp đông sâu.',
    descriptionZh: 'VAC 从生物安全商业农场采购优质家禽产品。在 ISO 及 Halal 清真认证屠宰场加工，控制疫病，深度冷冻保鲜。',
    highlightsEn: [
      'Biosecure Farming & Avian Flu Free Certification',
      'Halal & ISO Certified Slaughtering & Processing',
      'Continuous Blast Freezing (-35°C) & Deep Cold Storage',
      'Custom Bulk Export Packaging for Wholesalers & Processing Plants'
    ],
    highlightsVi: [
      'Trang trại an toàn sinh học đạt chứng nhận không cúm gia cầm',
      'Quy trình giết mổ & chế biến đạt chuẩn Halal & ISO',
      'Cấp đông gió siêu tốc (-35°C) & lưu kho lạnh sâu',
      'Đóng gói xuất khẩu linh hoạt cho nhà bán buôn & nhà máy chế biến'
    ],
    highlightsZh: [
      '生物安全养殖·无禽流感认证基地',
      'Halal 清真及 ISO 认证屠宰加工',
      '-35°C 鼓风超速冻结与深冷储存',
      '灵活的批量出口包装，适合批发商与加工厂'
    ],
    availableCutsEn: ['Whole Chicken', 'Chicken Feet / Paws', 'Chicken Breast / Thigh', 'Wings & Drumsticks'],
    availableCutsVi: ['Gà nguyên con', 'Chân gà / Cánh gà', 'Ức gà / Đùi gà', 'Đùi cánh gia công'],
    availableCutsZh: ['整鸡', '鸡爪 / 鸡掌', '鸡胸 / 鸡腿', '翅膀 / 棒棒腿'],
    defaultPackagingEn: '10kg / 15kg PE Bag in Master Carton or Vacuum Pack',
    defaultPackagingVi: 'Túi PE 10kg / 15kg lót thùng carton master hoặc hút chân không',
    defaultPackagingZh: '10kg / 15kg PE 内袋外 Master 纸箱或真空包装',
    storageEn: 'Deep freeze at -18°C or lower continuous storage',
    storageVi: 'Bảo quản cấp đông sâu tại -18°C hoặc thấp hơn',
    storageZh: '-18°C 或更低深度冷冻保存'
  },
  'basa': {
    id: 'basa',
    slug: 'basa-fish-pangasius',
    titleEn: 'Basa Fish — Pangasius',
    titleVi: 'Cá Tra & Cá Basa Chế Biến Xuất Khẩu',
    titleZh: '巴沙鱼 / 龙利鱼 (Pangasius)',
    subtitleEn: 'High-Quality White Flesh Pangasius Fillets, Portions & Steaks from Mekong Delta Farms',
    subtitleVi: 'Fillet Cá Tra/Basa Trắng Sạch, Cắt Khúc & Steaks Thu Hoạch Từ Vùng Nuôi ĐBSCL',
    subtitleZh: '湄公河三角洲优质白肉巴沙鱼片、切段与鱼排',
    heroImage: '/images/products/seafood/basa_well_trimmed_fillet.jpeg',
    catalogueFileName: 'VAC_Basa_Fish_Catalog_2026.pdf',
    catalogueDriveId: '1EBOBC4fxbm_xXpTCEQZ5024KMe5bZw_5',
    descriptionEn: 'VAC supplies export-standard Pangasius hypophthalmus (Basa fish) processed under strict HACCP and BRCGS certifications. Available in well-trimmed fillets, untrimmed fillets, rose fillets, steaks, portions, cubes, and skewers.',
    descriptionVi: 'VAC cung cấp Cá Tra/Cá Basa (Pangasius hypophthalmus) đạt tiêu chuẩn xuất khẩu được chế biến theo chứng nhận HACCP và BRCGS. Đa dạng chủng loại Fillet lọc sạch, Fillet chưa lọc, Fillet cuộn hoa hồng, cắt khúc steaks, cắt khối cubes và xiên que.',
    descriptionZh: 'VAC 供应在 HACCP 和 BRCGS 严格认证下加工的出口标准 Pangasius 巴沙鱼。提供精修鱼片、未精修鱼片、玫瑰卷鱼片、鱼排、鱼块及串烧。',
    highlightsEn: [
      'HACCP, BRCGS, ISO & Halal Certified Facilities',
      'ASC / BAP Certified Responsible Aquaculture Sourcing',
      '100% White Flesh, Zero Chemical Residue / Antibiotic Guaranteed',
      'IQF Individual Quick Freezing & Glazing Customized (0-20%)'
    ],
    highlightsVi: [
      'Nhà máy đạt chứng chỉ quốc tế HACCP, BRCGS, ISO & Halal',
      'Nguồn nuôi trồng đạt chứng nhận ASC / BAP bền vững',
      'Thịt trắng 100%, không dư lượng kháng sinh hay hóa chất',
      'Cấp đông rời IQF & Mạ băng theo yêu cầu khách hàng (0-20%)'
    ],
    highlightsZh: [
      'HACCP、BRCGS、ISO 及 Halal 认证工厂',
      'ASC / BAP 认证可持续水产养殖源头',
      '100% 纯白肉，无抗生素与化学残留保证',
      'IQF 单体速冻与包冰定制 (0-20%)'
    ],
    availableCutsEn: ['Fillet Well-trimmed', 'Fillet Untrimmed', 'Steaks / Cutlets', 'Portions / Cubes', 'Rose Fillet', 'Skewers'],
    availableCutsVi: ['Fillet Lọc sạch', 'Fillet Chưa lọc', 'Cắt khúc Steaks', 'Cắt vuông Portions/Cubes', 'Fillet Cuộn hoa hồng', 'Xiên que'],
    availableCutsZh: ['精修鱼片 (Well-trimmed)', '未精修鱼片 (Untrimmed)', '切段鱼排 (Steaks)', '切块 (Portions/Cubes)', '玫瑰卷鱼片 (Rose)', '串烧 (Skewers)'],
    defaultPackagingEn: 'IQF 1kg / 2kg PE Rider Bag in 10kg Master Carton or Interleaved Shatterpack',
    defaultPackagingVi: 'Túi PE 1kg / 2kg lót thùng carton 10kg hoặc đóng khối shatterpack',
    defaultPackagingZh: '1kg / 2kg PE 骑缝袋 10kg Master 纸箱或平板冻',
    storageEn: 'Deep freeze at -18°C or lower continuous storage',
    storageVi: 'Bảo quản cấp đông sâu tại -18°C hoặc thấp hơn',
    storageZh: '-18°C 或更低深度冷冻保存'
  },
  'shrimp': {
    id: 'shrimp',
    slug: 'vietnamese-shrimp',
    titleEn: 'Vietnamese Shrimp Products',
    titleVi: 'Tôm Việt Nam Xuất Khẩu (Vannamei & Black Tiger)',
    titleZh: '越南对虾系列 (南美白对虾与草虾)',
    subtitleEn: 'Export-Grade Whiteleg & Black Tiger Shrimp: HOSO, HLSO, PTO, P&D, Nobashi & Value-Added Formats',
    subtitleVi: 'Tôm Thẻ Chân Trắng & Tôm Sú: HOSO, HLSO, PTO, P&D, Nobashi & Chế Biến Giá Trị Gia Tăng',
    subtitleZh: '出口级对虾：HOSO、HLSO、PTO、P&D、Nobashi 及深加工规格',
    heroImage: '/images/products/seafood/shrimp_hoso.jpeg',
    catalogueFileName: 'VAC_Shrimp_Products_Catalog_2026.pdf',
    catalogueDriveId: '1ZHNriy_IOit5LKeXVvAVF15nKxTGdrif',
    descriptionEn: 'Premium Vietnamese shrimp products harvested from ASC/BAP certified coastal farms. Featuring Black Tiger (Penaeus monodon) and Whiteleg (Penaeus vannamei) shrimp processed into HOSO, HLSO, PTO, P&D, Nobashi, Tempura, and Cooked IQF formats.',
    descriptionVi: 'Sản phẩm Tôm Việt Nam chất lượng cao thu hoạch từ các vùng nuôi ven biển đạt chuẩn ASC/BAP. Bao gồm Tôm Sú và Tôm Thẻ chân trắng được chế biến thành Tôm nguyên con HOSO, Tôm bỏ đầu HLSO, Tôm PTO, P&D, Nobashi, Tempura và Tôm luộc chín IQF.',
    descriptionZh: 'VAC 优质越南对虾采自 ASC/BAP 认证沿海养殖场。涵盖草虾 (Penaeus monodon) 与南美白对虾 (Penaeus vannamei)，加工为 HOSO 带头带壳、HLSO 去头带壳、PTO 留尾、P&D 去壳去肠线、Nobashi 伸长虾及 Tempura 天妇罗。',
    highlightsEn: [
      'Black Tiger & Vannamei Shrimp from ASC/BAP Certified Farms',
      'Complete Traceability & Disease Free Bio-Security',
      'Value-Added Formats (Nobashi, Butterfly, Tempura Breaded)',
      'Precise Weight Grading & IQF Single-Freeze Quality'
    ],
    highlightsVi: [
      'Tôm Sú & Tôm Thẻ chân trắng từ trang trại đạt chuẩn ASC/BAP',
      'Truy xuất nguồn gốc 100% & An toàn sinh học không bệnh dịch',
      'Chế biến giá trị gia tăng (Nobashi, Bướm, Tôm lăn bột Tempura)',
      'Phân loại size chính xác & Cấp đông đơn IQF tươi ngon'
    ],
    highlightsZh: [
      'ASC/BAP 认证养殖场草虾与白对虾',
      '全程可追溯与生物安全无病害',
      '高附加值加工形态 (Nobashi、蝴蝶虾、天妇罗)',
      '精准重量分级与 IQF 单冻品质'
    ],
    availableCutsEn: ['HOSO (Head-on Shell-on)', 'HLSO (Headless Shell-on)', 'PTO (Peeled Tail-on)', 'P&D (Peeled & Deveined)', 'Nobashi Stretch Shrimp', 'Cooked IQF'],
    availableCutsVi: ['Tôm nguyên con HOSO', 'Tôm bỏ đầu HLSO', 'Tôm còn đuôi PTO', 'Tôm bóc vỏ bỏ chỉ P&D', 'Tôm duỗi Nobashi', 'Tôm luộc chín IQF'],
    availableCutsZh: ['HOSO (带头带壳)', 'HLSO (去头带壳)', 'PTO (去壳留尾)', 'P&D (去壳去肠线)', 'Nobashi 伸长虾', '熟冻 IQF (Cooked)'],
    defaultPackagingEn: '1kg / 1.8kg Block Frozen Box or IQF Rider Bag in 10kg Master Carton',
    defaultPackagingVi: 'Đóng khối Block 1kg / 1.8kg hoặc Cấp đông rời IQF túi PE trong thùng 10kg',
    defaultPackagingZh: '1kg / 1.8kg 块冻盒装或 IQF 袋装 10kg Master 纸箱',
    storageEn: 'Deep freeze at -18°C or lower continuous storage',
    storageVi: 'Bảo quản cấp đông sâu tại -18°C hoặc thấp hơn',
    storageZh: '-18°C 或更低深度冷冻保存'
  },
  'squid': {
    id: 'squid',
    slug: 'squid-products',
    titleEn: 'Squid & Octopus Products',
    titleVi: 'Mực & Bạch Tuộc Chế Biến Xuất Khẩu',
    titleZh: '远洋鱿鱼与章鱼系列',
    subtitleEn: 'Wild-Caught Ocean Squid & Octopus: Whole Cleaned, Tubes, Rings, Tentacles & Flower Cut',
    subtitleVi: 'Mực & Bạch Tuộc Biển Tự Nhiên: Nguyên Con Làm Sạch, Mực Ống, Mực Khoanh, Râu Mực & Mực Cắt Hoa',
    subtitleZh: '野生捕捞远洋鱿鱼与章鱼：原条做净、鱿鱼筒、鱿鱼圈、鱿鱼须及切花',
    heroImage: '/images/products/seafood/squid_whole_cleaned.jpeg',
    catalogueFileName: 'VAC_Squid_Products_Catalog_2026.pdf',
    catalogueDriveId: '1UU-DLH9UjaDWFbz5LCserzNZFjaMHAUo',
    descriptionEn: 'Wild-caught ocean squid and octopus from Vietnamese waters, processed immediately post-landing to maintain natural sweetness and tender texture. Offering Whole Cleaned Squid, Squid Tubes (U4-U10), Squid Rings, Flower Cut Squid, Tentacles, Dried Squid, and Baby Octopus.',
    descriptionVi: 'Mực và bạch tuộc đánh bắt tự nhiên tại vùng biển Việt Nam, chế biến ngay sau khi cập cảng để giữ nguyên độ ngọt và độ giòn tự nhiên. Cung cấp Mực nguyên con làm sạch, Mực ống (U4-U10), Mực khoanh, Mực cắt hoa, Râu mực, Mực khô và Bạch tuộc baby.',
    descriptionZh: '越南海域野生捕捞鱿鱼与章鱼，靠岸后立即加工，保持天然鲜甜与紧实口感。提供做净原条、鱿鱼筒 (U4-U10)、鱿鱼圈、切花鱿鱼、鱿鱼须、干鱿鱼及 Baby 小章鱼。',
    highlightsEn: [
      '100% Wild-Caught Ocean Seafood with High Natural Sweetness',
      'Instant Post-Landing Processing for Firm Texture',
      'Customized Cutting (Pineapple/Flower Cut, Rings, Tubes, Skewers)',
      'EU & US FDA Registered Export Facilities'
    ],
    highlightsVi: [
      '100% Thủy hải sản biển đánh bắt tự nhiên với độ ngọt cao',
      'Chế biến ngay sau khi cấp cảng giữ độ giòn săn chắc',
      'Cắt định hình theo yêu cầu (Cắt hoa khía vảy rồng, Khoanh, Ống, Xiên que)',
      'Nhà máy xuất khẩu đạt mã EU & đăng ký US FDA'
    ],
    highlightsZh: [
      '100% 远洋野生捕捞，天然鲜甜度高',
      '靠岸即加工，肉质紧实爽脆',
      '定制化切割 (菠萝切花、鱿鱼圈、鱿鱼筒、串烧)',
      '欧盟 (EU) 及美国 FDA 注册出口工厂'
    ],
    availableCutsEn: ['Whole Cleaned Squid', 'Squid Tube (U4, U5, U7, U10)', 'Squid Rings', 'Flower / Pineapple Cut', 'Tentacles', 'Dried Squid', 'Cut / Baby Octopus'],
    availableCutsVi: ['Mực nguyên con làm sạch', 'Mực ống (U4, U5, U7, U10)', 'Mực khoanh', 'Mực cắt hoa vảy rồng', 'Râu mực', 'Mực khô sấy', 'Bạch tuộc cắt / baby'],
    availableCutsZh: ['做净原条鱿鱼', '鱿鱼筒 (U4, U5, U7, U10)', '鱿鱼圈', '菠萝切花 (Pineapple Cut)', '鱿鱼须', '干鱿鱼', '切块 / Baby 小章鱼'],
    defaultPackagingEn: 'IQF PE Bag 1kg / 2kg in 10kg Master Carton or Block Frozen 1kg/2kg',
    defaultPackagingVi: 'Túi PE IQF 1kg / 2kg lót thùng carton 10kg hoặc đóng khối Block 1kg/2kg',
    defaultPackagingZh: '1kg / 2kg IQF 袋装 10kg Master 纸箱 or 1kg/2kg 块冻',
    storageEn: 'Deep freeze at -18°C or lower continuous storage',
    storageVi: 'Bảo quản cấp đông sâu tại -18°C hoặc thấp hơn',
    storageZh: '-18°C 或更低深度冷冻保存'
  }
};

export const PRODUCTS_LIST: ProductItem[] = [
  // === POULTRY PRODUCTS ===
  {
    id: 'poultry-halal-whole-chicken',
    nameEn: 'Halal Whole Chicken (Eviscerated & Griller)',
    nameVi: 'Thịt Gà Nguyên Con Chứng Nhận Halal',
    nameZh: '清真整鸡 (去内脏·烧烤级)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Halal Chicken',
    formats: ['Whole Bird (Head-off, Feet-off, Eviscerated)', 'Griller / Broiler'],
    specifications: {
      shelfLife: '24 months (Frozen -18°C) / 14 days (Chilled 0-4°C)',
      storage: '-18°C or lower (Frozen)',
      packaging: '10kg / 15kg PE Lined Master Carton or IVP Polybag',
      origin: 'Vietnam (Halal Slaughterhouse Certified)'
    },
    applications: ['Retail Supermarkets', 'Halal Wholesale', 'Food Service & HORECA'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_whole_chicken.jpeg'
  },
  {
    id: 'poultry-whole-chicken',
    nameEn: 'Conventional Frozen Whole Chicken (Eviscerated & Griller)',
    nameVi: 'Thịt Gà Nguyên Con Đông Lạnh',
    nameZh: '冷冻常规整鸡 (去内脏·烧烤级)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Whole Bird (Head-off, Feet-off, Eviscerated)', 'Griller / Broiler (800g - 1800g)'],
    specifications: {
      shelfLife: '24 months (Frozen -18°C)',
      storage: '-18°C or lower',
      packaging: '10kg / 15kg PE Lined Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Food Service & HORECA', 'Supermarket Retail', 'Wholesale Import'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_whole_chicken.jpeg'
  },
  {
    id: 'poultry-boneless-breast-fillet',
    nameEn: 'Boneless Skinless Chicken Breast Fillet',
    nameVi: 'Ức Gà Phi Lê Bỏ Da Bỏ Xương',
    nameZh: '无骨无皮鸡胸肉排 (Fillet)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Single Fillet', 'Butterfly Cut', 'Dices & Strips'],
    specifications: {
      shelfLife: '24 months (Frozen) / 14 days (Chilled)',
      storage: '-18°C or lower',
      packaging: '2kg Vacuum Pack x 6 / 12kg Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Health Snacks', 'Meal Prep', 'Industrial Food Manufacturing'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_boneless_breast.jpeg'
  },
  {
    id: 'poultry-bone-in-breast',
    nameEn: 'Bone-in Chicken Breast',
    nameVi: 'Ức Gà Có Xương Có Da',
    nameZh: '带骨带皮鸡胸肉',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Bone-in Skin-on Breast', 'Half Breast Cuts'],
    specifications: {
      shelfLife: '24 months (Frozen -18°C)',
      storage: '-18°C or lower',
      packaging: '10kg / 15kg PE Lined Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Food Processing', 'Catering', 'Supermarkets'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_bone_in_breast.jpeg'
  },
  {
    id: 'poultry-leg-quarters',
    nameEn: 'Frozen Chicken Leg Quarters',
    nameVi: 'Đùi Gà Góc Tư Đông Lạnh',
    nameZh: '冷冻大鸡腿/四分之一后腿 (Leg Quarters)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Whole Leg Quarter', 'Bone-in Skin-on'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg / 15kg Bulk Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Institutional Catering', 'Food Service', 'Wholesale Distribution'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_leg_quarters.jpeg'
  },
  {
    id: 'poultry-thighs',
    nameEn: 'Chicken Thighs (Bone-in / Boneless)',
    nameVi: 'Đùi Gà Má Đùi (Có Xương / Bỏ Xương)',
    nameZh: '冷冻鸡琵琶腿/鸡腿肉 (带骨/无骨)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Bone-in Thigh', 'Boneless Skinless Thigh Meat'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg PE Lined Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Restaurants & HORECA', 'Meal Prep', 'Retail Packs'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_thighs.jpeg'
  },
  {
    id: 'poultry-drumsticks',
    nameEn: 'Chicken Drumsticks',
    nameVi: 'Đùi Tỏi Gà Đông Lạnh',
    nameZh: '冷冻小鸡腿/鸡棒腿 (Drumsticks)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Skin-on Drumstick', 'Caliber Graded (100g - 150g+)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg / 15kg IQF Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Fast Food Chains', 'Retail Supermarkets', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_drumsticks.jpeg'
  },
  {
    id: 'poultry-chicken-wings',
    nameEn: 'Whole Chicken Wings (3-Joint)',
    nameVi: 'Cánh Gà Nguyên Con (3 Khớp)',
    nameZh: '冷冻全鸡翅 (三节翅)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['3-Joint Whole Wing (100g+)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Bar & Grill', 'Fast Food Chains', 'Wholesale Import'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_whole_wings.jpeg'
  },
  {
    id: 'poultry-wing-portions',
    nameEn: 'Chicken Wing Portions (Wingette & Drumette)',
    nameVi: 'Cánh Gà Cắt Khớp (Cánh Giữa & Tỏi Cánh)',
    nameZh: '冷冻切段鸡翅 (翅中 & 翅根)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Mid-Joint Wing (Wingette)', 'Wingstick (Drumette)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg / 12kg IQF Master Carton',
      origin: 'Vietnam'
    },
    applications: ['QSR Chains', 'Supermarkets', 'Snack Processing'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_wing_portions.jpeg'
  },
  {
    id: 'poultry-chicken-feet-paws',
    nameEn: 'Export Chicken Feet & Paws',
    nameVi: 'Chân Gà & Bàn Chân Gà Xuất Khẩu',
    nameZh: '出口级冷冻鸡爪 & 鸡掌 (Feet & Paws)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken By-Products',
    formats: ['Grade A Paws (35g+)', 'Grade A Feet (45g+)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '15kg Block Frozen or IQF Carton',
      origin: 'Vietnam'
    },
    applications: ['Asian Wholesale Markets', 'Dim Sum Manufacturing', 'Snack Processing'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_feet_paws.jpeg'
  },
  {
    id: 'poultry-gizzard-liver-heart',
    nameEn: 'Chicken Offals (Gizzard, Liver & Heart)',
    nameVi: 'Mề Gà, Gan Gà & Tim Gà Đông Lạnh',
    nameZh: '冷冻鸡杂 (鸡菫·鸡肝·鸡心)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken By-Products',
    formats: ['Cleaned Gizzard', 'Fresh Frozen Liver', 'Heart'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg PE Lined Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Pet Food Processing', 'Traditional Markets', 'Food Manufacturing'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_offals.jpeg'
  },
  {
    id: 'poultry-chicken-necks',
    nameEn: 'Chicken Necks',
    nameVi: 'Cổ Gà Đông Lạnh',
    nameZh: '冷冻鸡脖',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken By-Products',
    formats: ['Skin-on Neck', 'Skinless Neck'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg / 15kg PE Lined Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Soup Stock & Broth Processing', 'Pet Food Industry', 'Wholesale'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_necks.jpeg'
  },
  {
    id: 'poultry-nuggets-patties',
    nameEn: 'Chicken Nuggets & Patties',
    nameVi: 'Gà Viên Tẩm Bột & Thịt Gà Burger',
    nameZh: '裹粉鸡块 & 鸡肉汉堡饼 (Nuggets & Patties)',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Breaded Nuggets', 'Chicken Patties'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '500g / 1kg Retail Pouch or Bulk 10kg Carton',
      origin: 'Vietnam (OEM Private Label)'
    },
    applications: ['Convenience Stores', 'Retail Supermarkets', 'QSR Chains'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_nuggets_patties.jpeg'
  },
  {
    id: 'poultry-sausages-breaded',
    nameEn: 'Chicken Sausages & Breaded Chicken',
    nameVi: 'Xúc Xích Gà & Thịt Gà Tẩm Bột',
    nameZh: '鸡肉香肠 & 炸鸡系列',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Frankfurter Sausages', 'Breaded Fillet Cuts'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '500g / 1kg Pack or 10kg Carton',
      origin: 'Vietnam (OEM Private Label)'
    },
    applications: ['Retail Ready', 'Breakfast & School Catering', 'Fast Food'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_sausages_breaded.jpeg'
  },
  {
    id: 'poultry-marinated-ready-to-cook',
    nameEn: 'Marinated & Ready-to-Cook Poultry',
    nameVi: 'Thịt Gà Tẩm Ướp Gia Vị Sẵn',
    nameZh: '调味腌制即烹鸡肉系列',
    scientificName: 'Gallus gallus domesticus',
    category: 'poultry',
    subCategory: 'Chicken Cuts',
    formats: ['Marinated Skewers', 'Pre-seasoned Cuts', 'BBQ Marinated Wings'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: 'Vacuum Pack or IQF Pouch',
      origin: 'Vietnam (OEM Private Label)'
    },
    applications: ['Supermarket Ready Meals', 'HORECA & BBQ Chains', 'Retail Ready'],
    seasonality: 'Year-round',
    image: '/images/products/poultry/poultry_marinated.jpeg'
  },

  // === BASA FISH (PANGASIUS) PRODUCTS ===
  {
    id: 'basa-well-trimmed-fillet',
    nameEn: 'Pangasius Basa Fillet (Well-Trimmed)',
    nameVi: 'Cá Tra Basa Phi Lê Làm Sạch Mỡ (Well-Trimmed)',
    nameZh: '巴沙鱼柳 (精精修·去皮去骨去红肉)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Skinless, Boneless, Fat Off, Red Meat Off, Belly Off', 'Sizes: 120-170g, 170-220g, 220g+'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Bulk Carton or 1kg IVP Printed Retail Bag',
      origin: 'Mekong Delta, Vietnam (ASC / BAP Certified)'
    },
    applications: ['Supermarket Retail', 'Food Service & Restaurants', 'Industrial Processing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_well_trimmed_fillet.jpeg'
  },
  {
    id: 'basa-untrimmed-fillet',
    nameEn: 'Pangasius Basa Fillet (Untrimmed / Semi-Trimmed)',
    nameVi: 'Cá Tra Basa Phi Lê Nguyên Bản (Untrimmed)',
    nameZh: '巴沙鱼柳 (带脂肪·未精修/半精修)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Skinless, Boneless, Fat-On, Red Meat On', 'Sizes: 170-220g, 220g+'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg Interleaved Block / IQF Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Catering & Institutional Markets', 'Processing Plants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_boneless_fillet.jpeg'
  },
  {
    id: 'basa-whole-round',
    nameEn: 'Whole Round Basa Fish',
    nameVi: 'Cá Tra Basa Nguyên Con Đông Lạnh',
    nameZh: '冷冻整条巴沙鱼 (原条)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Whole Round (Gut-In or Eviscerated)', 'Sizes: 800g-1.2kg, 1.2-2kg'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg Bulk Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Wholesale Fish Markets', 'Seafood Processing Plants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_whole_round.jpeg'
  },
  {
    id: 'basa-headed-gutted',
    nameEn: 'Headed & Gutted Basa Fish (H&G)',
    nameVi: 'Cá Tra Basa Bỏ Đầu Rút Ruột (H&G)',
    nameZh: '冷冻去头去内脏巴沙鱼 (H&G)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Head-Off, Tail-On, Eviscerated'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Traditional Markets', 'Fish Wholesalers'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_headed_gutted.jpeg'
  },
  {
    id: 'basa-steak-cuts',
    nameEn: 'Frozen Pangasius Basa Fish Steak',
    nameVi: 'Cá Tra Basa Cắt Khúc Đông Lạnh (Basa Steak)',
    nameZh: '冷冻巴沙鱼切段/鱼块 (Steak)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Skin-On, Bone-In Steak Cuts (Thickness 2.5-3.5cm)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg Retail PE Bag or 10kg Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Retail Markets', 'Asian Supermarkets', 'Home Cooking'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_steaks.jpeg'
  },
  {
    id: 'basa-loin-portions',
    nameEn: 'Pangasius Basa Loin & Portion Cuts',
    nameVi: 'Cá Tra Basa Cắt Loin & Miếng Vuông (Loin Portions)',
    nameZh: '巴沙鱼腰肉切块 (Loin Portions)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Thick Loin Cut 80-120g', 'Square Portions 50-80g'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Carton',
      origin: 'Vietnam'
    },
    applications: ['Gourmet Food Service', 'Air Fryer Meals'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_portions.jpeg'
  },
  {
    id: 'basa-cubes-portions',
    nameEn: 'Pangasius Basa Cubes & Dices',
    nameVi: 'Cá Tra Basa Cắt Khối Hạt Lựu (Basa Cubes)',
    nameZh: '冷冻巴沙鱼丁/鱼块 (Cubes)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Dice 15x15mm, 20x20mm', 'Portion Cuts 50-80g'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Carton',
      origin: 'Vietnam'
    },
    applications: ['Ready Meals', 'Fish Soups & Skewers', 'Food Manufacturing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_cubes.jpeg'
  },
  {
    id: 'basa-belly-strips',
    nameEn: 'Pangasius Basa Belly Flaps & Strips',
    nameVi: 'Bào Ngư & Dải Thịt Bụng Cá Tra Basa',
    nameZh: '冷冻巴沙鱼肚条 (Belly Strips)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Skinless Fat Belly Strips'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg Block Frozen / IQF Carton',
      origin: 'Vietnam'
    },
    applications: ['Fish Soup Ingredients', 'Fish Oil Processing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_strips.jpeg'
  },
  {
    id: 'basa-breaded-fillet',
    nameEn: 'Breaded Pangasius Basa Fillets',
    nameVi: 'Cá Tra Basa Phi Lê Tẩm Bột Chiên',
    nameZh: '裹粉炸巴沙鱼柳 (Breaded Fillet)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Crispy Panko Breaded Fillet (100g, 150g)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '1kg Retail Bag x 10 / Master Carton',
      origin: 'Vietnam (OEM Private Label)'
    },
    applications: ['Fish & Chips Chains', 'QSR Restaurants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_breaded_fillets.jpeg'
  },
  {
    id: 'basa-battered-portions',
    nameEn: 'Battered Pangasius Basa Portions',
    nameVi: 'Cá Tra Basa Cắt Miếng Tẩm Bột Battered',
    nameZh: '挂浆炸巴沙鱼块 (Battered Portions)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Tempura / Beer Battered Portions (50-80g)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '10kg HORECA Master Pack',
      origin: 'Vietnam'
    },
    applications: ['Pubs & Restaurants', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_battered_portions.jpeg'
  },
  {
    id: 'basa-fish-fingers',
    nameEn: 'Basa Fish Fingers & Sticks',
    nameVi: 'Cá Tra Basa Cắt Thanh Tẩm Bột (Fish Fingers)',
    nameZh: '香酥巴沙鱼条 (Fish Fingers)',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Pre-cooked Breaded Fish Sticks (25g-30g/piece)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '300g / 500g Retail Box or 5kg Bulk',
      origin: 'Vietnam'
    },
    applications: ['Supermarket Freezer Section', 'School Meals'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_fish_fingers.jpeg'
  },
  {
    id: 'basa-marinated-cubes',
    nameEn: 'Marinated & Seasoned Basa Cubes',
    nameVi: 'Cá Tra Basa Cắt Khối Tẩm Ướp Gia Vị',
    nameZh: '调味腌制巴沙鱼丁',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Garlic & Herb / Teriyaki / Cajun Marinated Cubes'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '500g Vacuum Pouch or 10kg Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Meal Kits', 'Ready-to-Cook Products'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_seasoned_cubes.jpeg'
  },
  {
    id: 'basa-marinated-fillets',
    nameEn: 'Marinated & Herb Seasoned Basa Fillets',
    nameVi: 'Cá Tra Basa Phi Lê Tẩm Ướp Gia Vị Thảo Mộc',
    nameZh: '调味腌制巴沙鱼柳',
    scientificName: 'Pangasius hypophthalmus',
    category: 'basa',
    subCategory: 'Basa Fish — Pangasius',
    formats: ['Herb & Garlic / Lemon Pepper Marinated Whole Fillets'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '1kg Vacuum Bag or 10kg Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Supermarket Ready Meals', 'Food Service & HORECA'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/basa_marinated_fillets.jpeg'
  },

  // === VIETNAMESE SHRIMP PRODUCTS ===
  {
    id: 'shrimp-vannamei-hoso',
    nameEn: 'Vannamei Whiteleg Shrimp HOSO (Head-On Shell-On)',
    nameVi: 'Tôm Thẻ Chân Trắng HOSO (Còn Đầu Còn Vỏ)',
    nameZh: '南美白对虾 HOSO (带头带壳)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Whole Raw HOSO', 'Counts: 16/20, 21/25, 26/30, 31/40, 41/50 counts/kg'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg / 2kg Frozen Block Carton x 6 / Master Carton',
      origin: 'Vietnam (ASC / BAP 4-Star Certified)'
    },
    applications: ['Seafood Buffets', 'High-End Dining', 'Export Wholesale'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_hoso.jpeg'
  },
  {
    id: 'shrimp-vannamei-hlso',
    nameEn: 'Vannamei Whiteleg Shrimp HLSO (Headless Shell-On)',
    nameVi: 'Tôm Thẻ Chân Trắng HLSO (Bỏ Đầu Còn Vỏ)',
    nameZh: '南美白对虾 HLSO (无头带壳)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Raw Headless Shell-On', 'Counts: 16/20, 26/30, 31/40, 41/50, 51/60'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1.8kg Block x 6 / 10.8kg Master Carton or 1kg IQF Bag',
      origin: 'Vietnam'
    },
    applications: ['Restaurant Chains', 'Seafood Wholesalers'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_hlso.jpeg'
  },
  {
    id: 'shrimp-vannamei-pdto',
    nameEn: 'Vannamei Shrimp PDTO (Peeled Deveined Tail-On)',
    nameVi: 'Tôm Thẻ Bóc Vỏ Rút Chỉ Còn Đuôi (PDTO)',
    nameZh: '南美白对虾 PDTO (去壳去肠线留尾)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Raw / Cooked IQF PDTO', 'Counts: 21/25, 26/30, 31/40, 41/50, 51/60'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Printed Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Gourmet Dining', 'Shrimp Cocktails', 'Retail Ready'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_pto.jpeg'
  },
  {
    id: 'shrimp-vannamei-pd-pud',
    nameEn: 'Vannamei Shrimp P&D / PUD (Peeled & Deveined)',
    nameVi: 'Tôm Thẻ Bóc Vỏ Rút Chỉ Bỏ Đuôi (P&D / PUD)',
    nameZh: '南美白对虾 P&D / PUD (去壳去肠线不留尾)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Peeled & Deveined Tail-Off', 'Raw & Cooked IQF'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Rider Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Pizza & Pasta Toppings', 'Ready Meals', 'Processing Plants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_pd.jpeg'
  },
  {
    id: 'shrimp-cooked-cocktail',
    nameEn: 'Cooked Peeled Cocktail Shrimp',
    nameVi: 'Tôm Hấp Bóc Vỏ Cocktail (Cooked Cocktail Shrimp)',
    nameZh: '熟制冷冻鸡尾虾仁 (Cooked Cocktail)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Fully Cooked Peeled Tail-On IQF'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '500g / 1kg Retail Zipper Bag with Sauce Ring',
      origin: 'Vietnam'
    },
    applications: ['Supermarket Ready-to-Eat', 'Appetizer Trays'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_cocktail.jpeg'
  },
  {
    id: 'shrimp-butterfly-cut',
    nameEn: 'Raw & Cooked Butterfly-Cut Shrimp',
    nameVi: 'Tôm Chẻ Lưng Bướm (Butterfly-Cut Shrimp)',
    nameZh: '蝴蝶开背虾仁 (Butterfly Cut)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Deep Butterfly Cut Tail-On IQF'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Rider Bag x 10 / Carton',
      origin: 'Vietnam'
    },
    applications: ['Grilling & Frying', 'Catering Events'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_butterfly.jpeg'
  },
  {
    id: 'shrimp-black-tiger-hoso',
    nameEn: 'Giant Black Tiger Shrimp HOSO & HLSO',
    nameVi: 'Tôm Sú Nguyên Con (Black Tiger HOSO & HLSO)',
    nameZh: '黑虎虾/草虾 HOSO (带头带壳)',
    scientificName: 'Penaeus monodon',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Giant HOSO / HLSO', 'Counts: 8/12, 13/15, 16/20 counts/kg'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg / 2kg Block Carton x 6 / Master Carton',
      origin: 'Vietnam (Mangrove Ecological Farming)'
    },
    applications: ['Luxury Seafood Dining', 'Five-Star Hotels', 'Export Wholesale'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_hoso.jpeg'
  },
  {
    id: 'shrimp-black-tiger-pdto',
    nameEn: 'Black Tiger Shrimp PDTO & P&D',
    nameVi: 'Tôm Sú Bóc Vỏ Rút Chỉ (Black Tiger PDTO)',
    nameZh: '黑虎虾/草虾 PDTO (去壳去肠线留尾)',
    scientificName: 'Penaeus monodon',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['PDTO & P&D Raw IQF', 'Counts: 16/20, 21/25, 26/30'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Printed Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Fine Dining Seafood', 'Asian Gourmet Cuisine'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_pto.jpeg'
  },
  {
    id: 'shrimp-breaded-tempura',
    nameEn: 'Panko Breaded & Tempura Shrimp',
    nameVi: 'Tôm Tẩm Bột Panko & Tempura Chiên Giòn',
    nameZh: '天妇罗裹粉日式虾 (Breaded Tempura)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Pre-fried / Oven-ready Breaded Shrimp (13-15g/piece)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '300g Tray x 20 / Carton or Custom OEM Pouch',
      origin: 'Vietnam'
    },
    applications: ['Japanese Restaurants', 'Supermarket Freezer Section'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_breaded.jpeg'
  },
  {
    id: 'shrimp-nobashi-ebi',
    nameEn: 'Nobashi Stretched Shrimp (Ebi Fry)',
    nameVi: 'Tôm Nobashi Duỗi Thẳng (Ebi Fry Format)',
    nameZh: '日式延长拉伸虾 (Nobashi Ebi)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Stretched PDTO Shrimp (Sizes 16/20, 21/25, 26/30)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '20 pieces/tray x 20 trays / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Sushi Bars', 'Japanese Bento', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_tempura.jpeg'
  },
  {
    id: 'shrimp-skewers-marinated',
    nameEn: 'Raw & Cooked Marinated Shrimp Skewers',
    nameVi: 'Tôm Xiên Que Tẩm Ướp Gia Vị BBQ',
    nameZh: '调味腌制海鲜虾串 (Shrimp Skewers)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Bamboo Skewers (4-5 shrimp/skewer, Garlic/Herb/Cajun)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '500g Vacuum Pack x 10 / Carton',
      origin: 'Vietnam'
    },
    applications: ['Barbecue Chains', 'Retail Ready Grill Section'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_skewers.jpeg'
  },
  {
    id: 'shrimp-retail-assortment',
    nameEn: 'Retail-Ready Shrimp Assortment',
    nameVi: 'Bộ Sản Phẩm Tôm Chế Biến Sẵn Đóng Túi Retail',
    nameZh: '零售装冷冻混合海鲜虾 (Shrimp Assortment)',
    scientificName: 'Litopenaeus vannamei',
    category: 'shrimp',
    subCategory: 'Vietnamese Shrimp',
    formats: ['Seasoned Shrimp, Shrimp Cakes, Garlic Butter Shrimp'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '400g / 500g Stand-up Zipper Pouch (Private Label)',
      origin: 'Vietnam'
    },
    applications: ['Supermarket Chains', 'Retail Convenience Stores'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/shrimp_retail_ready.jpeg'
  },

  // === SQUID & CALAMARI PRODUCTS ===
  {
    id: 'squid-whole-round',
    nameEn: 'Wild Ocean Whole Round Squid',
    nameVi: 'Mực Ống Nguyên Con Đánh Bắt Tự Nhiên',
    nameZh: '野生海洋原条鱿鱼 (Whole Round)',
    scientificName: 'Photololigo edulis / Todarodes pacificus',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Whole Round Sea-Frozen', 'Sizes: 10-15cm, 15-20cm, 20-25cm, 25cm+'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg Block / IQF Master Carton',
      origin: 'Vietnam Sea Wild-Caught'
    },
    applications: ['Seafood Wholesalers', 'Processing Plants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_whole_round.jpeg'
  },
  {
    id: 'squid-whole-cleaned',
    nameEn: 'Whole Cleaned Ocean Squid',
    nameVi: 'Mực Ống Tự Nhiên Làm Sạch (Whole Cleaned)',
    nameZh: '野生海洋去内脏清理鱿鱼 (Whole Cleaned)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Gutted, Ink Sac Removed, Wing-On, Head-On / Head-Off'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Rider Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Seafood Restaurants', 'Stir-Fry & Grilling', 'Supermarket Retail'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_whole_cleaned.jpeg'
  },
  {
    id: 'squid-skinless-tubes',
    nameEn: 'Skinless Squid Tubes (U5, U7, U10)',
    nameVi: 'Mực Thân Bỏ Da Đông Lạnh (Squid Tubes)',
    nameZh: '冷冻无皮鱿鱼胴体/鱿鱼筒 (Squid Tubes)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['First Grade Skinless, Boneless Tubes', 'Sizes: U5, U7, U10, U20 (pcs/kg)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Bulk Carton or 1kg IVP Retail Bag',
      origin: 'Vietnam'
    },
    applications: ['Catering Services', 'Calamari Ring Slicing', 'Industrial Plants'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_tubes.jpeg'
  },
  {
    id: 'squid-iqf-rings',
    nameEn: 'IQF Squid Rings (Raw / Blanched)',
    nameVi: 'Mực Khoanh Đông Lạnh IQF (Squid Rings)',
    nameZh: 'IQF 速冻鱿鱼圈 (生鲜/烫熟)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Diameter 3-7cm, Width 1-1.5cm', 'Raw & Blanched IQF'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Printed Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Pizza Toppings', 'Seafood Mix', 'Mediterranean Cuisine'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_rings.jpeg'
  },
  {
    id: 'squid-cleaned-tentacles',
    nameEn: 'Cleaned Ocean Squid Tentacles',
    nameVi: 'Râu Mực Biển Làm Sạch (Squid Tentacles)',
    nameZh: '冷冻清理鱿鱼须 (Squid Tentacles)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Eyes-Off, Beak-Off Cleaned Tentacles'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Bag x 10 / Carton or 2kg Interleaved Block',
      origin: 'Vietnam'
    },
    applications: ['Asian Stir-Fry', 'Seafood Hotpot', 'Snack Manufacturing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_tentacles.jpeg'
  },
  {
    id: 'squid-wings-strips',
    nameEn: 'Squid Wings & Cut Strips',
    nameVi: 'Vè Mực & Mực Cắt Dải (Squid Wings & Strips)',
    nameZh: '冷冻鱿鱼翅/鱿鱼耳朵条 (Squid Wings)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Skinless Squid Wings', 'Strips 1x5cm, 1.5x7cm'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '10kg IQF Bulk Carton',
      origin: 'Vietnam'
    },
    applications: ['Seafood Salad Mix', 'Industrial Food Processing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_wings.jpeg'
  },
  {
    id: 'squid-fillet-pineapple-cut',
    nameEn: 'Pineapple-Cut Carved Squid Fillets',
    nameVi: 'Mực Phi Lê Cắt Vảy Rồng (Pineapple Cut Squid)',
    nameZh: '凤尾/菠萝花切花鱿鱼片 (Squid Fillet Pineapple Cut)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Cross-Hatch Diamond Carved Fillet Sheets (4x6cm, 5x8cm)'],
    specifications: {
      shelfLife: '24 months',
      storage: '-18°C or lower',
      packaging: '1kg IQF Bag x 10 / Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Chinese & Asian Stir-Fry', 'High-End Seafood Buffets'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_fillets.jpeg'
  },
  {
    id: 'squid-breaded-rings',
    nameEn: 'Breaded Calamari Squid Rings',
    nameVi: 'Mực Khoanh Tẩm Bột Chiên (Breaded Calamari)',
    nameZh: '裹粉炸鱿鱼圈 (Breaded Rings)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Panko Breaded Rings (Pre-fried / Oven ready)'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '500g / 1kg Retail Color Pouch or 10kg HORECA Pack',
      origin: 'Vietnam (OEM Available)'
    },
    applications: ['Fast Food & Bars', 'Finger Food Catering', 'Supermarket Retail'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_breaded_rings.jpeg'
  },
  {
    id: 'squid-battered-strips',
    nameEn: 'Battered Calamari Strips',
    nameVi: 'Mực Cắt Dải Tẩm Bột Battered',
    nameZh: '挂浆炸鱿鱼条 (Battered Squid Strips)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Seasoned Batter Coated Strips'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '10kg Master Carton',
      origin: 'Vietnam'
    },
    applications: ['Pub Food', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_battered_calamari.jpeg'
  },
  {
    id: 'squid-grilled-portions',
    nameEn: 'Seasoned & Grilled Squid Portions',
    nameVi: 'Mực Nướng Gia Vị Chế Biến Sẵn',
    nameZh: '日式照烧/炭烤鱿鱼切块',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Char-grilled Whole & Tube Portions'],
    specifications: {
      shelfLife: '18 months',
      storage: '-18°C or lower',
      packaging: '300g / 500g Vacuum Pouch',
      origin: 'Vietnam'
    },
    applications: ['Ready Meals', 'Retail Ready'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_grilled_portions.jpeg'
  },
  {
    id: 'squid-dried-export',
    nameEn: 'Export Grade Sun-Dried Ocean Squid',
    nameVi: 'Mực Khô Biển Tự Nhiên Xuất Khẩu',
    nameZh: '越南特级天然晒干/烘干鱿鱼干 (Dried Squid)',
    scientificName: 'Photololigo edulis',
    category: 'squid',
    subCategory: 'Squid & Calamari',
    formats: ['Natural Sun-Dried Whole Squid (Sizes: 10-15, 16-20, 21-25 pcs/kg)'],
    specifications: {
      shelfLife: '12 months',
      storage: 'Cool dry condition (< 15°C) or Frozen (-18°C)',
      packaging: '10kg Bulk Carton or 500g Vacuum Pack',
      origin: 'Vietnam'
    },
    applications: ['Asian Specialty Stores', 'Gift Packs', 'Snack Processing'],
    seasonality: 'Year-round',
    image: '/images/products/seafood/squid_dried.jpeg'
  },
  {
    id: 'fresh-cavendish-banana',
    nameEn: 'Fresh Cavendish Banana',
    nameVi: 'Chuối Cavendish Tươi Xuất Khẩu',
    nameZh: '出口级卡文迪许香蕉 (鲜果)',
    scientificName: 'Musa acuminata (Cavendish Group)',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Hand / Cluster (4, 5, 6 hands/box)', 'Grade A Export Standard'],
    specifications: {
      brix: '18 - 22° (when ripe)',
      shelfLife: '30 - 45 days in reefer container (+13.5°C)',
      storage: '+13.5°C to +14.5°C, RH 85-90%',
      packaging: '13.5kg / 18.5kg Vacuum PE Bag in Master Carton'
    },
    applications: ['Fresh Retail', 'Supermarket Chains', 'Wholesale Markets'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_banana.png'
  },
{
    id: 'fresh-mango',
    nameEn: 'Fresh Cat Chu / R2E2 Mango',
    nameVi: 'Xoài Cát Chu / R2E2 Tươi Xuất Khẩu',
    nameZh: '越南 Cat Chu / R2E2 芒果 (鲜果)',
    scientificName: 'Mangifera indica',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole VHT Treated Fruit', 'Size 300g-500g'],
    specifications: {
      brix: '14 - 17°',
      shelfLife: '25 - 30 days',
      storage: '+10°C to +12°C',
      packaging: '5kg / 10kg Export Carton with VHT Stamp'
    },
    applications: ['Fresh Retail (Japan, Korea, Australia Markets)'],
    seasonality: 'Year-round (Peak: Dec to May)',
    image: '/images/products/fresh/fresh_mango.png'
  },
{
    id: 'fresh-pomelo',
    nameEn: 'Fresh Green Skin Pomelo',
    nameVi: 'Bưởi Da Xanh Tươi',
    nameZh: '越南红心绿皮柚 (鲜果)',
    scientificName: 'Citrus grandis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit (1.2kg-2.0kg)'],
    specifications: {
      brix: '11 - 13°',
      shelfLife: '60 days',
      storage: '+10°C to +12°C',
      packaging: '12kg Export Carton (6-9 fruits)'
    },
    applications: ['Fresh Retail', 'Premium Gift Packs'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_pomelo.png'
  },
{
    id: 'fresh-durian',
    nameEn: 'Fresh Ri6 / Monthong Durian',
    nameVi: 'Sầu Riêng Ri6 / Monthong Tươi',
    nameZh: '越南 Ri6 / Monthong 金枕头榴莲 (鲜果)',
    scientificName: 'Durio zibethinus',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit (2kg-4.5kg)', 'Frozen Flesh Tray'],
    specifications: {
      brix: '28 - 35°',
      shelfLife: '10 days (Fresh) / 24 months (Frozen)',
      storage: '+13°C to +15°C',
      packaging: '18kg Export Carton (4-6 fruits)'
    },
    applications: ['Gourmet Retail', 'Bakery', 'Desserts'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_durian.png'
  },
{
    id: 'fresh-red-dragon-fruit',
    nameEn: 'Fresh Red Dragon Fruit',
    nameVi: 'Thanh Long Ruột Đỏ Tươi',
    nameZh: '越南红心火龙果 (鲜果)',
    scientificName: 'Hylocereus costaricensis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Caliber 300g-450g / 450g-650g'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '25 - 30 days at cold storage',
      storage: '+3°C to +5°C, RH 85-90%',
      packaging: '4.5kg / 9kg / 18kg Ventilated Export Carton'
    },
    applications: ['Fresh Retail', 'Fruit Salads', 'HORECA', 'Beverages'],
    seasonality: 'Year-round (Peak: May to November)',
    image: '/images/products/fresh/fresh_red_dragon_fruit.png'
  },
{
    id: 'fresh-pineapple',
    nameEn: 'Fresh MD2 Pineapple',
    nameVi: 'Dứa / Thơm MD2 Tươi',
    nameZh: '越南 Queen 皇后菠萝 (鲜果)',
    scientificName: 'Ananas comosus',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Crown-on', 'Crownless'],
    specifications: {
      brix: '14 - 17°',
      shelfLife: '28 days',
      storage: '+8°C to +10°C',
      packaging: '12kg Export Carton (6-9 counts)'
    },
    applications: ['Fresh Retail', 'Fresh Cut Processing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_pineapple.png'
  },
{
    id: 'fresh-coconut',
    nameEn: 'Fresh Young Diamond Coconut',
    nameVi: 'Dừa Xiêm Xanh Gọt Kim Cương Tươi',
    nameZh: '越南暹罗香水椰青 (鲜果)',
    scientificName: 'Cocos nucifera',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Diamond Cut', 'Easy-Open Ring Cut'],
    specifications: {
      brix: '7 - 9° (Natural Coconut Water)',
      shelfLife: '60 days in cold chain',
      storage: '+2°C to +4°C',
      packaging: '9 or 12 coconuts per Export Carton'
    },
    applications: ['Fresh Hydration', 'Supermarkets', 'Hospitality'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_coconut.png'
  },
{
    id: 'fresh-jackfruit',
    nameEn: 'Fresh Red Flesh Jackfruit',
    nameVi: 'Mít Ruột Đỏ Tươi',
    nameZh: '越南干苞黄肉木菠萝/菠萝蜜 (鲜果)',
    scientificName: 'Artocarpus heterophyllus',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Cleaned Pods'],
    specifications: {
      brix: '18 - 22°',
      shelfLife: '20 days',
      storage: '+10°C to +12°C',
      packaging: '10kg - 15kg Master Carton'
    },
    applications: ['Fresh Retail', 'Pre-cut Trays'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_jackfruit.png'
  },
{
    id: 'fresh-mangosteen',
    nameEn: 'Fresh Mangosteen',
    nameVi: 'Măng Cụt Tươi',
    nameZh: '越南特级山竹 (鲜果)',
    scientificName: 'Garcinia mangostana',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Grade 4A, 5A, 6A'],
    specifications: {
      brix: '16 - 19°',
      shelfLife: '18 - 21 days',
      storage: '+12°C to +13°C',
      packaging: '5kg / 9kg Plastic Crate or Carton'
    },
    applications: ['Air-Freight & Sea-Freight Premium Retail'],
    seasonality: 'May to August',
    image: '/images/products/fresh/fresh_mangosteen.png'
  },
{
    id: 'fresh-passion-fruit',
    nameEn: 'Fresh Purple Passion Fruit',
    nameVi: 'Chanh Dây Tím Tươi',
    nameZh: '越南紫香百香果 (鲜果)',
    scientificName: 'Passiflora edulis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit Grade A (10-14 pcs/kg)'],
    specifications: {
      brix: '15 - 18°',
      shelfLife: '30 days',
      storage: '+5°C to +7°C',
      packaging: '2kg / 4.5kg / 10kg Export Carton'
    },
    applications: ['Fresh Retail', 'Juice Extracting'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_passion_fruit.png'
  },
{
    id: 'fresh-lychee',
    nameEn: 'Fresh Thieu Lychee',
    nameVi: 'Vải Thiều Tươi',
    nameZh: '越南海阳/北江荔枝 (鲜果)',
    scientificName: 'Litchi chinensis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit with Stem', 'Grade A'],
    specifications: {
      brix: '17 - 20°',
      shelfLife: '20 - 25 days (VHT Treated)',
      storage: '+3°C to +5°C',
      packaging: '5kg / 10kg Ventilated Carton'
    },
    applications: ['Fresh Retail', 'Gourmet Export'],
    seasonality: 'May to July',
    image: '/images/products/fresh/fresh_lychee.png'
  },
{
    id: 'fresh-longan',
    nameEn: 'Fresh Longan (I-Do)',
    nameVi: 'Nhãn I-Do Tươi',
    nameZh: '越南龙眼/桂圆 (鲜果)',
    scientificName: 'Dimocarpus longan',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Bunch / Whole Fruit'],
    specifications: {
      brix: '18 - 22°',
      shelfLife: '30 days',
      storage: '+4°C to +6°C',
      packaging: '10kg Plastic Crate / Carton'
    },
    applications: ['Fresh Retail', 'Canned Fruit Processing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_longan.png'
  },
{
    id: 'fresh-rambutan',
    nameEn: 'Fresh Rambutan',
    nameVi: 'Chôm Chôm Tươi',
    nameZh: '越南红毛丹 (鲜果)',
    scientificName: 'Nephelium lappaceum',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Grade A Sorted'],
    specifications: {
      brix: '16 - 19°',
      shelfLife: '14 days',
      storage: '+10°C to +12°C',
      packaging: '5kg / 10kg Export Carton'
    },
    applications: ['Fresh Retail', 'Fruit Salads'],
    seasonality: 'May to September',
    image: '/images/products/fresh/fresh_rambutan.png'
  },
{
    id: 'fresh-avocado',
    nameEn: 'Fresh Hass / 034 Avocado',
    nameVi: 'Bơ 034 / Hass Tươi',
    nameZh: '越南 034 / Hass 牛油果 (鲜果)',
    scientificName: 'Persea americana',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit (300g-500g)'],
    specifications: {
      brix: 'Dry matter > 21%',
      shelfLife: '21 days (Cold storage)',
      storage: '+5°C to +7°C',
      packaging: '4kg / 10kg Master Carton'
    },
    applications: ['Fresh Retail', 'HORECA', 'Guacamole'],
    seasonality: 'March to September',
    image: '/images/products/fresh/fresh_avocado.png'
  },
{
    id: 'fresh-watermelon',
    nameEn: 'Fresh Seedless Watermelon',
    nameVi: 'Dưa Hấu Không Hạt Tươi',
    nameZh: '越南无籽红肉西瓜 (鲜果)',
    scientificName: 'Citrullus lanatus',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Weight 3kg - 6kg/fruit'],
    specifications: {
      brix: '11 - 13°',
      shelfLife: '30 days',
      storage: '+10°C to +13°C',
      packaging: 'Master carton or PE-padded wooden crates'
    },
    applications: ['Fresh Retail', 'Juice Bars', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_seedless_watermelon.png'
  },
{
    id: 'fresh-melon',
    nameEn: 'Fresh Cantaloupe Melon',
    nameVi: 'Dưa Lưới Tươi',
    nameZh: '越南网纹甜瓜/哈密瓜 (鲜果)',
    scientificName: 'Cucumis melo',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit 1.2kg - 2.2kg'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '21 days',
      storage: '+8°C to +10°C',
      packaging: '4-6 fruits in Master Carton'
    },
    applications: ['Fresh Retail', 'High-End Supermarkets'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_melon.png'
  },
{
    id: 'fresh-strawberry',
    nameEn: 'Fresh Da Lat Strawberry',
    nameVi: 'Dâu Tây Đà Lạt Tươi',
    nameZh: '越南大叻红草莓 (鲜果)',
    scientificName: 'Fragaria × ananassa',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Grade A'],
    specifications: {
      brix: '8 - 11°',
      shelfLife: '7 - 10 days',
      storage: '+2°C to +4°C',
      packaging: '250g Punnet in 3kg Carton'
    },
    applications: ['Fresh Retail', 'Desserts', 'Confectionery'],
    seasonality: 'November to April',
    image: '/images/products/fresh/fresh_strawberry.png'
  },
{
    id: 'fresh-custard-apple',
    nameEn: 'Fresh Custard Apple (Sugar Apple)',
    nameVi: 'Mãng Cầu Ta (Na) Tươi',
    nameZh: '越南释迦果/番荔枝 (鲜果)',
    scientificName: 'Annona squamosa',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Size 350g-500g/fruit'],
    specifications: {
      brix: '18 - 22°',
      shelfLife: '10 - 14 days',
      storage: '+8°C to +10°C',
      packaging: '5kg Foam-padded Export Carton'
    },
    applications: ['Fresh Retail', 'Gourmet Fruit Baskets'],
    seasonality: 'August to December',
    image: '/images/products/fresh/fresh_custard_apple.png'
  },
{
    id: 'fresh-soursop',
    nameEn: 'Fresh Soursop',
    nameVi: 'Mãng Cầu Xiêm Tươi',
    nameZh: '越南刺果番荔枝/刺梨 (鲜果)',
    scientificName: 'Annona muricata',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', '1.5kg - 3.5kg/fruit'],
    specifications: {
      brix: '14 - 17°',
      shelfLife: '12 - 15 days',
      storage: '+10°C to +12°C',
      packaging: '10kg Foam Net Wrapped Export Carton'
    },
    applications: ['Fresh Juice', 'Smoothies', 'Processing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_soursop.png'
  },
{
    id: 'fresh-star-apple',
    nameEn: 'Fresh Star Apple (Vú Sữa)',
    nameVi: 'Vú Sữa Lò Rèn / Hoàng Kim Tươi',
    nameZh: '越南牛奶果/星苹果 (鲜果)',
    scientificName: 'Chrysophyllum cainito',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Caliber 250g-400g'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '14 - 18 days',
      storage: '+10°C to +12°C',
      packaging: '5kg Custom Molded Tray Carton'
    },
    applications: ['Air-Freight Premium Retail'],
    seasonality: 'November to April',
    image: '/images/products/fresh/fresh_star_apple.png'
  },
{
    id: 'fresh-guava',
    nameEn: 'Fresh Pink / White Guava',
    nameVi: 'Ổi Ruột Hồng / Trắng Tươi',
    nameZh: '越南红心/白心珍珠番石榴 (鲜果)',
    scientificName: 'Psidium guajava',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit with Foam Net', 'Size 250g-400g'],
    specifications: {
      brix: '9 - 12°',
      shelfLife: '20 days',
      storage: '+8°C to +10°C',
      packaging: '10kg Export Carton with Individual Foam Sleeve'
    },
    applications: ['Fresh Retail', 'Juicing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_guava.png'
  },
{
    id: 'fresh-papaya',
    nameEn: 'Fresh Red Flesh Papaya',
    nameVi: 'Đu Đủ Ruột Đỏ Tươi',
    nameZh: '越南红肉木瓜 (鲜果)',
    scientificName: 'Carica papaya',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit', 'Size 800g - 1.8kg'],
    specifications: {
      brix: '11 - 14°',
      shelfLife: '18 - 22 days',
      storage: '+10°C to +12°C',
      packaging: '10kg / 12kg Export Carton'
    },
    applications: ['Fresh Fruit Baskets', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_papaya.png'
  },
{
    id: 'fresh-rose-apple',
    nameEn: 'Fresh Rose Apple (Wax Apple)',
    nameVi: 'Mận An Phước Tươi',
    nameZh: '越南莲雾/水蒲桃 (鲜果)',
    scientificName: 'Syzygium samarangense',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit Grade A'],
    specifications: {
      brix: '9 - 12°',
      shelfLife: '12 days',
      storage: '+6°C to +8°C',
      packaging: '5kg Foam-padded Carton'
    },
    applications: ['Fresh Retail'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_rose_apple.png'
  },
{
    id: 'fresh-king-orange',
    nameEn: 'Fresh King Orange',
    nameVi: 'Cam Sành Tươi',
    nameZh: '越南三性青蜜橙 (鲜果)',
    scientificName: 'Citrus nobilis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit'],
    specifications: {
      brix: '10 - 13°',
      shelfLife: '20 days',
      storage: '+8°C to +10°C',
      packaging: '10kg / 15kg Master Carton'
    },
    applications: ['Fresh Juice', 'Retail'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_king_orange.png'
  },
{
    id: 'fresh-tangerine',
    nameEn: 'Fresh Sweet Tangerine',
    nameVi: 'Quýt Đường Tươi',
    nameZh: '越南红柑/宽皮柑橘 (鲜果)',
    scientificName: 'Citrus reticulata',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit'],
    specifications: {
      brix: '11 - 14°',
      shelfLife: '20 days',
      storage: '+8°C to +10°C',
      packaging: '10kg Export Carton'
    },
    applications: ['Fresh Retail', 'Gift Boxes'],
    seasonality: 'October to February',
    image: '/images/products/fresh/fresh_tangerine.png'
  },
{
    id: 'fresh-persimmon',
    nameEn: 'Fresh Persimmon',
    nameVi: 'Hồng Tươi Đà Lạt',
    nameZh: '越南脆柿/红柿 (鲜果)',
    scientificName: 'Diospyros kaki',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Crispy Whole Fruit', 'Size 150g-250g'],
    specifications: {
      brix: '14 - 18°',
      shelfLife: '20 - 25 days',
      storage: '+2°C to +5°C',
      packaging: '5kg / 10kg Export Carton'
    },
    applications: ['Fresh Retail', 'Drying Processing'],
    seasonality: 'September to December',
    image: '/images/products/fresh/fresh_persimmon.png'
  },
{
    id: 'fresh-sapodilla',
    nameEn: 'Fresh Sapodilla (Sapotche)',
    nameVi: 'Hồng Xiêm Tươi',
    nameZh: '越南人心果 (鲜果)',
    scientificName: 'Manilkara zapota',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit'],
    specifications: {
      brix: '19 - 24°',
      shelfLife: '14 days',
      storage: '+12°C to +14°C',
      packaging: '5kg Export Carton'
    },
    applications: ['Fresh Retail', 'Smoothies'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_sapodilla.png'
  },
{
    id: 'fresh-acerola-cherry',
    nameEn: 'Fresh Acerola Cherry',
    nameVi: 'Sơ Ri Tươi',
    nameZh: '越南西印度樱桃/针叶樱桃 (鲜果)',
    scientificName: 'Malpighia emarginta',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Cherry', 'Grade A Sorted'],
    specifications: {
      brix: '7 - 10°',
      shelfLife: '7 - 10 days in cold chain',
      storage: '+2°C to +4°C',
      packaging: '2kg / 3kg Clamshell Punnet in Master Carton'
    },
    applications: ['Natural Vitamin C Extract', 'Fresh Retail', 'Preserves'],
    seasonality: 'May to October',
    image: '/images/products/fresh/fresh_acerola_cherry.png'
  },
{
    id: 'fresh-cashew',
    nameEn: 'Fresh Cashew',
    nameVi: 'Trái / Hạt Điều Tươi',
    nameZh: '越南腰果梨/腰果果肉 (鲜果)',
    scientificName: 'Anacardium occidentale',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Fresh Whole', 'Grade A'],
    specifications: {
      shelfLife: '15 - 20 days',
      storage: '+10°C to +12°C',
      packaging: '10kg Carton Box'
    },
    applications: ['Fresh Retail', 'Nut Processing'],
    seasonality: 'Feb - May',
    image: '/images/products/fresh/fresh_cashew.png'
  },
{
    id: 'fresh-gac-fruit',
    nameEn: 'Fresh Gac Fruit',
    nameVi: 'Quả Gấc Tươi',
    nameZh: '越南木鳖果/木鳖子 (鲜果)',
    scientificName: 'Momordica cochinchinensis',
    category: 'fresh',
    subCategory: 'Fruits',
    formats: ['Whole Fruit (1kg-2.5kg)'],
    specifications: {
      brix: 'Lycopene & Beta-Carotene rich',
      shelfLife: '20 days',
      storage: '+10°C to +12°C',
      packaging: '10kg Export Carton'
    },
    applications: ['Lycopene Extraction', 'Nutraceuticals', 'Culinary'],
    seasonality: 'September to February',
    image: '/images/products/fresh/fresh_gac_fruit.png'
  },
{
    id: 'fresh-lime',
    nameEn: 'Fresh Seedless Lime',
    nameVi: 'Chanh Không Hạt Tươi Xuất Khẩu',
    nameZh: '越南无籽青檬/青柠檬 (鲜果)',
    scientificName: 'Citrus latifolia',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Green Lime', 'Caliber 12-20 pcs/kg'],
    specifications: {
      brix: '7 - 9°',
      shelfLife: '40 - 50 days',
      storage: '+5°C to +7°C',
      packaging: '7kg / 10kg Ventilated Export Carton'
    },
    applications: ['Fresh Supermarkets', 'Restaurants', 'Beverage Industry'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_lime.png'
  },
{
    id: 'fresh-ginger',
    nameEn: 'Fresh Yellow Ginger',
    nameVi: 'Gừng Tươi Già Xuất Khẩu',
    nameZh: '越南老黄姜 (鲜姜)',
    scientificName: 'Zingiber officinale',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Root', 'Washed & Air-Dried 100g+'],
    specifications: {
      shelfLife: '60 - 90 days',
      storage: '+12°C to +14°C, RH 70%',
      packaging: '10kg / 20kg Mesh Bag or Carton'
    },
    applications: ['Culinary Spice', 'Extraction', 'Pharmaceuticals'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_ginger.png'
  },
{
    id: 'fresh-garlic',
    nameEn: 'Fresh Solo / Multi-clove Garlic',
    nameVi: 'Tỏi Cô Đơn / Tỏi Nhiều Tép Tươi',
    nameZh: '越南单头紫皮大蒜 (鲜蒜)',
    scientificName: 'Allium sativum',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Bulb', 'Size 3.5cm - 5.5cm'],
    specifications: {
      shelfLife: '6 - 9 months',
      storage: '-1°C to +1°C, RH 65%',
      packaging: '10kg Mesh bag or Carton'
    },
    applications: ['Retail', 'Black Garlic Processing'],
    seasonality: 'February to October',
    image: '/images/products/fresh/fresh_garlic.png'
  },
{
    id: 'fresh-chili',
    nameEn: 'Fresh Bird Eye / Red Chili',
    nameVi: 'Ớt Chỉ Thiên / Ớt Sừng Tươi',
    nameZh: '越南指天椒/红小天椒 (鲜辣椒)',
    scientificName: 'Capsicum frutescens',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['With Stem / Stemless', 'Length 4cm-7cm'],
    specifications: {
      shelfLife: '25 - 30 days',
      storage: '+5°C to +7°C',
      packaging: '4kg / 8kg Ventilated Carton with Paper Liners'
    },
    applications: ['Culinary', 'Processing', 'Spices'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_chili.png'
  },
{
    id: 'fresh-turmeric',
    nameEn: 'Fresh Yellow / Red Turmeric',
    nameVi: 'Nghệ Vàng / Nghệ Nếp Tươi',
    nameZh: '越南黄姜/郁金 (鲜姜)',
    scientificName: 'Curcuma longa',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Washed Whole Rhizome', 'High Curcumin Content'],
    specifications: {
      shelfLife: '60 days',
      storage: '+12°C to +14°C',
      packaging: '10kg / 25kg Mesh Bag or Carton'
    },
    applications: ['Curcumin Extraction', 'Food Processing', 'Spice'],
    seasonality: 'December to May',
    image: '/images/products/fresh/fresh_turmeric.png'
  },
{
    id: 'fresh-lemongrass',
    nameEn: 'Fresh Lemongrass',
    nameVi: 'Sả Tươi',
    nameZh: '越南香茅草 (鲜香茅)',
    scientificName: 'Cymbopogon citratus',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Fresh Cut Stalks', 'Trimmed'],
    specifications: {
      shelfLife: '21 - 30 days',
      storage: '+5°C to +8°C',
      packaging: '10kg Carton'
    },
    applications: ['Culinary', 'Essential Oils'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_lemongrass.png'
  },
{
    id: 'fresh-purple-sweet-potato',
    nameEn: 'Fresh Purple Sweet Potato',
    nameVi: 'Khoai Lang Tím Nhật Tươi',
    nameZh: '越南特级紫薯 (鲜果)',
    scientificName: 'Ipomoea batatas',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Cleaned Whole Root', 'Size S/M/L (100g-350g)'],
    specifications: {
      shelfLife: '45 - 60 days',
      storage: '+13°C to +15°C',
      packaging: '10kg / 20kg Export Carton'
    },
    applications: ['Fresh Retail', 'Baking', 'Starch Processing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_purple_sweet_potato.png'
  },
{
    id: 'fresh-shallot',
    nameEn: 'Fresh Red Shallot',
    nameVi: 'Hành Tím Tươi',
    nameZh: '越南红葱头 (鲜葱头)',
    scientificName: 'Allium ascalonicum',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Bulbs', 'Peeled'],
    specifications: {
      shelfLife: '60 - 90 days',
      storage: '+15°C to +18°C',
      packaging: '10kg Mesh Bag'
    },
    applications: ['Culinary', 'Processing'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_shallot.png'
  },
{
    id: 'fresh-onion',
    nameEn: 'Fresh Onion',
    nameVi: 'Hành Tây Tươi',
    nameZh: '越南紫皮洋葱 (鲜葱)',
    scientificName: 'Allium cepa',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Bulbs', 'Peeled'],
    specifications: {
      shelfLife: '60 - 90 days',
      storage: '+0°C to +4°C',
      packaging: '10kg / 20kg Mesh Bag'
    },
    applications: ['Culinary', 'Food Industry'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_onion.png'
  },
{
    id: 'fresh-carrot',
    nameEn: 'Fresh Carrot',
    nameVi: 'Cà Rốt Tươi',
    nameZh: '越南红萝卜/胡萝卜 (鲜菜)',
    scientificName: 'Daucus carota',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Washed Whole', 'Topped'],
    specifications: {
      shelfLife: '45 - 60 days',
      storage: '+0°C to +2°C',
      packaging: '10kg / 20kg Carton'
    },
    applications: ['Fresh Retail', 'Juicing'],
    seasonality: 'Nov - Apr',
    image: '/images/products/fresh/fresh_carrot.png'
  },
{
    id: 'fresh-bell-pepper',
    nameEn: 'Fresh Sweet Bell Pepper',
    nameVi: 'Ớt Chuông Tươi',
    nameZh: '越南彩椒/甜椒 (鲜椒)',
    scientificName: 'Capsicum annuum',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Red / Yellow / Green Whole'],
    specifications: {
      shelfLife: '14 - 21 days',
      storage: '+7°C to +10°C',
      packaging: '5kg / 10kg Carton'
    },
    applications: ['Fresh Retail', 'Salads'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_bell_pepper.png'
  },
{
    id: 'fresh-tomato',
    nameEn: 'Fresh Tomato',
    nameVi: 'Cà Chua Tươi',
    nameZh: '越南硬质粉红番茄/西红柿 (鲜果)',
    scientificName: 'Solanum lycopersicum',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Round / Cherry Tomato'],
    specifications: {
      shelfLife: '14 - 21 days',
      storage: '+10°C to +13°C',
      packaging: '5kg / 10kg Carton'
    },
    applications: ['Fresh Retail', 'Sauces'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_tomato.png'
  },
{
    id: 'fresh-galangal',
    nameEn: 'Fresh Galangal',
    nameVi: 'Củ Riềng Tươi',
    nameZh: '越南高良姜/南姜 (鲜姜)',
    scientificName: 'Alpinia galanga',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Whole Rhizomes', 'Sliced'],
    specifications: {
      shelfLife: '30 - 45 days',
      storage: '+12°C to +15°C',
      packaging: '10kg Carton Box'
    },
    applications: ['Spices & Seasoning', 'Extracts'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_galangal.png'
  },
{
    id: 'fresh-sugarcane',
    nameEn: 'Fresh Sugarcane',
    nameVi: 'Mía Tươi',
    nameZh: '越南食用黑蔗/黄甘蔗 (鲜蔗)',
    scientificName: 'Saccharum officinarum',
    category: 'fresh',
    subCategory: 'Vegetables & Spices',
    formats: ['Peeled Cut Stalks', 'Whole Stalks'],
    specifications: {
      brix: '18 - 22°',
      shelfLife: '14 - 21 days',
      storage: '+2°C to +5°C',
      packaging: '20kg Vacuum Bag / Carton'
    },
    applications: ['Juice Bar', 'Beverages'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_sugarcane.png'
  },
{
    id: 'powder-fd-passion-fruit',
    nameEn: 'Freeze-Dried Passion Fruit Powder',
    nameVi: 'Bột Chanh Dây Sấy Thăng Hoa',
    nameZh: '冻干百香果纯粉 (Freeze-Dried)',
    category: 'powders',
    subCategory: 'Freeze-Dried Powder',
    formats: ['100 Mesh Fine Powder', 'Soluble Grade'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Below 25°C, sealed away from moisture',
      packaging: '1kg Aluminum foil bag in 10kg Carton'
    },
    applications: ['Beverages', 'Ice Cream', 'Bakery', 'Dietary Supplements'],
    image: '/images/products/powders/powders_passion_fruit.png'
  },
{
    id: 'powder-fd-pink-guava',
    nameEn: 'Freeze-Dried Pink Guava Powder',
    nameVi: 'Bột Ổi Hồng Sấy Thăng Hoa',
    nameZh: '冻干粉红番石榴粉 (Freeze-Dried)',
    category: 'powders',
    subCategory: 'Freeze-Dried Powder',
    formats: ['80-100 Mesh'],
    specifications: {
      moisture: '< 5.0%',
      shelfLife: '24 months',
      storage: 'Cool dry condition',
      packaging: '5kg Aluminum Bag x 4 in 20kg Carton'
    },
    applications: ['Smoothie Mixes', 'Functional Food', 'Confectionery'],
    image: '/images/products/powders/powders_pink_guava.png'
  },
{
    id: 'powder-fd-avocado',
    nameEn: 'Freeze-Dried Avocado Powder',
    nameVi: 'Bột Bơ Sáp Sấy Thăng Hoa',
    nameZh: '冻干牛油果纯粉 (Freeze-Dried)',
    category: 'powders',
    subCategory: 'Freeze-Dried Powder',
    formats: ['100 Mesh High Lipid Powder'],
    specifications: {
      moisture: '< 3.5%',
      shelfLife: '18 months under vacuum',
      storage: 'Cool dark room',
      packaging: '1kg Vacuum Foil Bag in 10kg Carton'
    },
    applications: ['Nutritional Shakes', 'Cosmetic Formulations', 'Baby Food'],
    image: '/images/products/powders/powders_avocado.png'
  },
{
    id: 'powder-fd-durian',
    nameEn: 'Freeze-Dried Durian Powder',
    nameVi: 'Bột Sầu Riêng Sấy Thăng Hoa',
    nameZh: '冻干金枕头榴莲纯粉 (Freeze-Dried)',
    category: 'powders',
    subCategory: 'Freeze-Dried Powder',
    formats: ['100% Pure Ri6 Durian Powder'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Store sealed below 22°C',
      packaging: '1kg Aluminum Foil Bag x 10'
    },
    applications: ['Premium Pastry', 'Durian Coffee', 'Desserts', 'Fillings'],
    image: '/images/products/powders/powders_durian.png'
  },
{
    id: 'powder-fd-coconut',
    nameEn: 'Freeze-Dried Coconut Milk Powder',
    nameVi: 'Bột Nước Cốt Dừa Sấy Thăng Hoa',
    nameZh: '冻干椰浆粉/椰子奶粉 (Freeze-Dried)',
    category: 'powders',
    subCategory: 'Freeze-Dried Powder',
    formats: ['Ultra-Fine Soluble Powder'],
    specifications: {
      moisture: '< 3.0%',
      shelfLife: '24 months',
      storage: 'Cool dry place',
      packaging: '25kg Fiber Drum with PE liner'
    },
    applications: ['Curry Mixes', 'Instant Coffee Premix', 'Vegan Dairy Alternatives'],
    image: '/images/products/powders/powders_coconut.png'
  },
{
    id: 'powder-col-banana',
    nameEn: 'Natural Banana Powder',
    nameVi: 'Bột Chuối Tự Nhiên',
    nameZh: '喷雾/热风香蕉纯粉',
    category: 'powders',
    subCategory: 'Powder Collection',
    formats: ['Ripe Banana Powder / Green Banana Resistant Starch'],
    specifications: {
      moisture: '< 6.0%',
      shelfLife: '18 months',
      storage: 'Ambient dry storage',
      packaging: '20kg Kraft Bag with Inner PE'
    },
    applications: ['Gut Health Supplements', 'Baby Porridge', 'Baking'],
    image: '/images/products/powders/powders_banana.png'
  },
{
    id: 'powder-col-gac',
    nameEn: 'Gac Fruit Powder (High Beta-Carotene)',
    nameVi: 'Bột Gấc Tự Nhiên (Giàu Lycopene)',
    nameZh: '高纯度木鳖果纯粉 (天然红素)',
    category: 'powders',
    subCategory: 'Powder Collection',
    formats: ['80 Mesh Natural Powder'],
    specifications: {
      moisture: '< 5.0%',
      shelfLife: '24 months',
      storage: 'Light-proof vacuum packaging',
      packaging: '1kg Aluminum Foil Bag x 10'
    },
    applications: ['Natural Red Colorant', 'Eye Health Supplements', 'Cosmetics'],
    image: '/images/products/powders/powders_gac_fruit.png'
  },
{
    id: 'powder-col-purple-potato',
    nameEn: 'Purple Sweet Potato Powder',
    nameVi: 'Bột Khoai Lang Tím Tự Nhiên',
    nameZh: '紫薯天然色素纯粉',
    category: 'powders',
    subCategory: 'Powder Collection',
    formats: ['100 Mesh Natural Purple Powder'],
    specifications: {
      moisture: '< 6.0%',
      shelfLife: '24 months',
      storage: 'Cool dry place',
      packaging: '20kg Export Carton'
    },
    applications: ['Natural Food Coloring', 'Bubble Tea', 'Noodles', 'Pastry'],
    image: '/images/products/powders/powders_purple_sweet_potato.png'
  },
{
    id: 'powder-deh-kale',
    nameEn: 'Dehydrated Kale Powder',
    nameVi: 'Bột Cải Xoan Kale Sấy Lạnh',
    nameZh: '脱水羽衣甘蓝粉 (Dehydrated Kale)',
    category: 'powders',
    subCategory: 'Dehydrated Powder',
    formats: ['100 Mesh Fine Green Powder'],
    specifications: {
      moisture: '< 6.0%',
      shelfLife: '18 months',
      storage: 'Keep sealed below 25°C',
      packaging: '10kg Carton with vacuum foil bag'
    },
    applications: ['Green Juice Powders', 'Detox Blends', 'Noodle Fortification'],
    image: '/images/products/powders/powders_kale.png'
  },
{
    id: 'powder-deh-shiso',
    nameEn: 'Dehydrated Shiso (Perilla) Leaf Powder',
    nameVi: 'Bột Lá Tía Tô Sấy Lạnh',
    nameZh: '脱水紫苏叶纯粉 (Dehydrated Shiso)',
    category: 'powders',
    subCategory: 'Dehydrated Powder',
    formats: ['100 Mesh Powder'],
    specifications: {
      moisture: '< 5.5%',
      shelfLife: '24 months',
      storage: 'Cool dry place',
      packaging: '10kg Carton'
    },
    applications: ['Herbal Tea Formula', 'Skincare Products', 'Seasoning'],
    image: '/images/products/powders/powders_shiso.png'
  },
{
    id: 'powder-ext-dragon-fruit',
    nameEn: 'Red Dragon Fruit Extract Powder (Instant)',
    nameVi: 'Bột Chiết Xuất Thanh Long Đỏ Hòa Tan',
    nameZh: '红心火龙果浓缩萃取粉',
    category: 'powders',
    subCategory: 'Extract Powder',
    formats: ['100% Water Soluble Extract'],
    specifications: {
      moisture: '< 4.5%',
      shelfLife: '24 months',
      storage: 'Cool dry sealed storage',
      packaging: '15kg / 25kg Fiber Drum'
    },
    applications: ['Instant Beverage Mixes', 'Natural Pink-Red Dye', 'Jelly'],
    image: '/images/products/powders/powders_red_dragon_fruit.png'
  },
{
    id: 'powder-ext-celery',
    nameEn: 'Celery Extract Powder (Instant Soluble)',
    nameVi: 'Bột Chiết Xuất Cần Tây Hòa Tan',
    nameZh: '水芹/西芹浓缩萃取粉',
    category: 'powders',
    subCategory: 'Extract Powder',
    formats: ['Fine Soluble Powder'],
    specifications: {
      moisture: '< 5.0%',
      shelfLife: '24 months',
      storage: 'Sealed dry environment',
      packaging: '25kg Drum'
    },
    applications: ['Weight Loss Beverages', 'Detox Powder Sachets', 'Supplements'],
    image: '/images/products/powders/powders_celery_extract.png'
  },
{
    id: 'powder-ext-centella',
    nameEn: 'Centella Asiatica (Gotu Kola) Extract Powder',
    nameVi: 'Bột Chiết Xuất Rau Má Hòa Tan',
    nameZh: '积雪草/雷公根纯粉 (Centella Powder)',
    category: 'powders',
    subCategory: 'Extract Powder',
    formats: ['100% Water Soluble Extract'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Below 25°C',
      packaging: '10kg Carton or 25kg Drum'
    },
    applications: ['Functional Cooling Drinks', 'Nutraceuticals', 'Cosmetics'],
    image: '/images/products/powders/powders_centella_asiatica_extract.png'
  },
{
    id: 'powder-ext-moringa',
    nameEn: 'Moringa Leaf Extract Powder',
    nameVi: 'Bột Chiết Xuất Chùm Ngây Hòa Tan',
    nameZh: '辣木叶超级食品纯粉',
    category: 'powders',
    subCategory: 'Extract Powder',
    formats: ['Soluble Fine Green Powder'],
    specifications: {
      moisture: '< 5.0%',
      shelfLife: '24 months',
      storage: 'Cool dark condition',
      packaging: '25kg Fiber Drum'
    },
    applications: ['Superfood Formulations', 'Protein Drinks', 'Capsules'],
    image: '/images/products/powders/powders_moringa_extract.png'
  },
{
    id: 'fd-mangosteen',
    nameEn: 'Freeze-Dried Mangosteen',
    nameVi: 'Măng Cụt Sấy Thăng Hoa',
    nameZh: '冻干特级山竹块/山竹果肉 (Freeze-Dried)',
    scientificName: 'Garcinia mangostana',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Whole Segment', 'Halves', 'Pieces'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '18 months',
      storage: 'Ambient cool dry place (< 28°C)',
      packaging: '5kg Inner PE bag in Export Carton or OEM Pouch'
    },
    applications: ['Premium Snack', 'Gourmet Gift Packs', 'Cereal Inclusion'],
    image: '/images/products/freeze-dried/freeze-dried_mangosteen.png'
  },
{
    id: 'fd-longan',
    nameEn: 'Freeze-Dried Longan',
    nameVi: 'Nhãn Sấy Thăng Hoa',
    nameZh: '冻干无核龙眼干/桂圆肉 (Freeze-Dried)',
    scientificName: 'Dimocarpus longan',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Whole Seedless Flesh'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Ambient dry storage',
      packaging: '5kg Cartons or Customized Bags'
    },
    applications: ['Snacks', 'Herbal Tea Blends', 'Confectionery'],
    image: '/images/products/freeze-dried/freeze-dried_longan.png'
  },
{
    id: 'fd-rambutan',
    nameEn: 'Freeze-Dried Rambutan',
    nameVi: 'Chôm Chôm Sấy Thăng Hoa',
    nameZh: '冻干无核红毛丹块 (Freeze-Dried)',
    scientificName: 'Nephelium lappaceum',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Seedless Whole Flesh'],
    specifications: {
      moisture: '< 4.5%',
      shelfLife: '18 months',
      storage: 'Cool dry condition',
      packaging: '5kg Carton'
    },
    applications: ['Exotic Fruit Snack Mixes', 'Trail Mix'],
    image: '/images/products/freeze-dried/freeze-dried_rambutan.png'
  },
{
    id: 'fd-lychee',
    nameEn: 'Freeze-Dried Lychee',
    nameVi: 'Vải Thiều Sấy Thăng Hoa',
    nameZh: '冻干无核荔枝果肉 (Freeze-Dried)',
    scientificName: 'Litchi chinensis',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Whole Seedless Fruit', 'Halves'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Dry ambient storage',
      packaging: '5kg Export Carton with foil barrier'
    },
    applications: ['Retail Healthy Snacks', 'Chocolate Coating', 'Tea Blends'],
    image: '/images/products/freeze-dried/freeze-dried_lychee.png'
  },
{
    id: 'fd-coconut',
    nameEn: 'Freeze-Dried Coconut Crisps',
    nameVi: 'Dừa Sấy Thăng Hoa Giòn Xốp',
    nameZh: '冻干香酥椰子片 (Freeze-Dried)',
    scientificName: 'Cocos nucifera',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Slices', 'Cubes 10x10mm', 'Crisps'],
    specifications: {
      moisture: '< 3.0%',
      shelfLife: '18 months',
      storage: 'Sealed dry storage',
      packaging: '10kg Carton or Retail Zipper Pouch'
    },
    applications: ['Granola Toppings', 'Yogurt Inclusion', 'Snacks'],
    image: '/images/products/freeze-dried/freeze-dried_coconut.png'
  },
{
    id: 'fd-banana',
    nameEn: 'Freeze-Dried Banana Slices',
    nameVi: 'Chuối Sấy Thăng Hoa Thái Lát',
    nameZh: '冻干香蕉片/香蕉丁 (Freeze-Dried)',
    scientificName: 'Musa acuminata',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Slices 5-7mm', 'Dices 10x10mm', 'Whole'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Ambient dry storage',
      packaging: '5kg x 2 Inner Bags per Carton'
    },
    applications: ['Breakfast Cereals', 'Baby Snacks', 'Chocolate Inclusions'],
    image: '/images/products/freeze-dried/freeze-dried_banana.png'
  },
{
    id: 'fd-watermelon',
    nameEn: 'Freeze-Dried Watermelon Crisps',
    nameVi: 'Dưa Hấu Sấy Thăng Hoa',
    nameZh: '冻干西瓜脆片/西瓜丁 (Freeze-Dried)',
    scientificName: 'Citrullus lanatus',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Triangles', 'Dices 15x15mm'],
    specifications: {
      moisture: '< 4.5%',
      shelfLife: '18 months',
      storage: 'Keep sealed from humidity',
      packaging: '4kg Carton'
    },
    applications: ['Innovative Fruit Snacks', 'Dessert Decoration'],
    image: '/images/products/freeze-dried/freeze-dried_watermelon.png'
  },
{
    id: 'fd-durian',
    nameEn: 'Freeze-Dried Durian Chunk',
    nameVi: 'Sầu Riêng Ri6 Sấy Thăng Hoa Nguyên Miếng',
    nameZh: '冻干金枕头榴莲脆片/榴莲块 (Freeze-Dried)',
    scientificName: 'Durio zibethinus',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Natural Chunks / Cubes'],
    specifications: {
      moisture: '< 3.5%',
      shelfLife: '24 months',
      storage: 'Sealed below 25°C',
      packaging: '5kg Inner foil bag x 2 in Master Carton'
    },
    applications: ['Luxury Fruit Snack', 'Souvenir Retail Packs'],
    image: '/images/products/freeze-dried/freeze-dried_durian.png'
  },
{
    id: 'fd-strawberry',
    nameEn: 'Freeze-Dried Strawberry',
    nameVi: 'Dâu Tây Đà Lạt Sấy Thăng Hoa',
    nameZh: '冻干整颗草莓/草莓片 (Freeze-Dried)',
    scientificName: 'Fragaria × ananassa',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Whole', 'Halves', 'Slices 5mm', 'Dices'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Cool dry condition',
      packaging: '5kg Export Carton'
    },
    applications: ['Cereal Mixes', 'Chocolate Moulding', 'Pastry Decoration'],
    image: '/images/products/freeze-dried/freeze-dried_strawberry.png'
  },
{
    id: 'fd-mango',
    nameEn: 'Freeze-Dried Mango Slices / Dices',
    nameVi: 'Xoài Cát Sấy Thăng Hoa Thái Lát',
    nameZh: '冻干芒果脆片/芒果丁 (Freeze-Dried)',
    scientificName: 'Mangifera indica',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Slices 6-8mm', 'Dices 10x10mm', 'Strips'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Ambient dry storage',
      packaging: '5kg x 2 Bags in 10kg Carton'
    },
    applications: ['Tropical Snack Mix', 'Trail Mix', 'Confectionery'],
    image: '/images/products/freeze-dried/freeze-dried_mango.png'
  },
{
    id: 'fd-red-dragon-fruit',
    nameEn: 'Freeze-Dried Red Dragon Fruit',
    nameVi: 'Thanh Long Ruột Đỏ Sấy Thăng Hoa',
    nameZh: '冻干红心火龙果脆片 (Freeze-Dried)',
    scientificName: 'Hylocereus costaricensis',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Slices', 'Dices 10x10mm', 'Crisps'],
    specifications: {
      moisture: '< 4.0%',
      shelfLife: '24 months',
      storage: 'Moisture-proof sealed bag',
      packaging: '5kg Carton'
    },
    applications: ['Smoothie Bowl Topping', 'Healthy Snacks', 'Bakery'],
    image: '/images/products/freeze-dried/freeze-dried_red_dragon_fruit.png'
  },
{
    id: 'fd-passion-fruit',
    nameEn: 'Freeze-Dried Passion Fruit Crunch',
    nameVi: 'Chanh Dây Sấy Thăng Hoa Dạng Mảnh',
    nameZh: '冻干百香果块 (Freeze-Dried)',
    scientificName: 'Passiflora edulis',
    category: 'freeze-dried',
    subCategory: 'Freeze-Dried Fruits',
    formats: ['Crunchy Granules', 'Pieces with seeds / Seedless'],
    specifications: {
      moisture: '< 3.5%',
      shelfLife: '18 months',
      storage: 'Below 25°C',
      packaging: '5kg Vacuum Foil Bag in Carton'
    },
    applications: ['Chocolate Crunch Inclusion', 'Ice Cream Topping', 'Baking'],
    image: '/images/products/freeze-dried/freeze-dried_passion_fruit.png'
  },
{
    id: 'iqf-strawberry',
    nameEn: 'IQF Strawberry Whole / Sliced',
    nameVi: 'Dâu Tây Cấp Đông IQF Nguyên Quả / Lát',
    nameZh: 'IQF 速冻草莓 (整果/切片)',
    scientificName: 'Fragaria × ananassa',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Whole (Caliber 15-25mm, 25-35mm)', 'Sliced (6mm)'],
    specifications: {
      shelfLife: '24 months at -18°C',
      storage: 'Continuous deep freezing -18°C or lower',
      packaging: '10kg Blue PE inner bag in Export Carton'
    },
    applications: ['Jam Processing', 'Industrial Smoothies', 'Bakery Fillings'],
    image: '/images/products/iqf/iqf_strawberry.png'
  },
{
    id: 'iqf-watermelon',
    nameEn: 'IQF Watermelon Dice',
    nameVi: 'Dưa Hấu Cấp Đông IQF Hạt Lựu',
    nameZh: 'IQF 速冻西瓜丁/西瓜块',
    scientificName: 'Citrullus lanatus',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Dice 10x10mm', 'Dice 15x15mm'],
    specifications: {
      brix: '10 - 12°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Heavy Duty Carton'
    },
    applications: ['Beverage Bases', 'Frozen Desserts', 'Food Service'],
    image: '/images/products/iqf/iqf_watermelon.png'
  },
{
    id: 'iqf-potato',
    nameEn: 'IQF Potato Strips / Cubes',
    nameVi: 'Khoai Tây Cấp Đông IQF Cắt Sợi / Hạt Lựu',
    nameZh: 'IQF 速冻薯条/薯丁',
    scientificName: 'Solanum tuberosum',
    category: 'iqf',
    subCategory: 'IQF Vegetables',
    formats: ['Strips 7x7mm, 10x10mm', 'Cubes 10x10mm'],
    specifications: {
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Carton or 1000kg Octabin'
    },
    applications: ['French Fries Manufacturing', 'Ready Meals', 'HORECA'],
    image: '/images/products/iqf/iqf_potato.png'
  },
{
    id: 'iqf-lychee',
    nameEn: 'IQF Seedless Lychee Whole',
    nameVi: 'Vải Thiều IQF Bóc Vỏ Bỏ Hạt',
    nameZh: 'IQF 速冻无核去皮荔枝果肉',
    scientificName: 'Litchi chinensis',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Whole Pitted Flesh'],
    specifications: {
      brix: '16 - 18°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Export Carton with PE bag'
    },
    applications: ['Canned Fruit Mixes', 'Cocktails', 'Desserts'],
    image: '/images/products/iqf/iqf_lychee.png'
  },
{
    id: 'iqf-corn',
    nameEn: 'IQF Sweet Corn Kernels',
    nameVi: 'Bắp Ngọt IQF Tách Hạt Đông Lạnh',
    nameZh: 'IQF 速冻黄甜玉米粒',
    scientificName: 'Zea mays var. saccharata',
    category: 'iqf',
    subCategory: 'IQF Vegetables',
    formats: ['Whole Kernels Free-Flowing'],
    specifications: {
      brix: '12 - 14°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg / 20kg Carton or Bulk Bag'
    },
    applications: ['Mixed Frozen Vegetables', 'Canned Food', 'Ready Meals'],
    image: '/images/products/iqf/iqf_corn.png'
  },
{
    id: 'iqf-avocado',
    nameEn: 'IQF Avocado Cubes / Halves',
    nameVi: 'Bơ Sáp IQF Cắt Hạt Lựu / Nửa Quả',
    nameZh: 'IQF 速冻牛油果切块/半果',
    scientificName: 'Persea americana',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Cubes 10x10mm, 15x15mm', 'Halves Pitted', 'Puree Block'],
    specifications: {
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Vacuum PE Bag in Master Carton'
    },
    applications: ['Guacamole Manufacturing', 'Salad Bars', 'Smoothies'],
    image: '/images/products/iqf/iqf_avocado.png'
  },
{
    id: 'iqf-soursop',
    nameEn: 'IQF Soursop Pulp / Seedless Puree',
    nameVi: 'Thịt Mãng Cầu Xiêm IQF Đông Lạnh Bỏ Hạt',
    nameZh: 'IQF 速冻刺果番荔枝/刺梨果肉',
    scientificName: 'Annona muricata',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Seedless Pulp Chunks', 'Frozen Puree Block'],
    specifications: {
      brix: '14 - 16°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg / 20kg PE Bag in Carton or Drum'
    },
    applications: ['Beverage Industry', 'Smoothie Base', 'Ice Cream'],
    image: '/images/products/iqf/iqf_soursop.png'
  },
{
    id: 'iqf-mango-dice',
    nameEn: 'IQF Mango Dice / Cheeks',
    nameVi: 'Xoài IQF Cắt Hạt Lựu / Má Xoài Đông Lạnh',
    nameZh: 'IQF 速冻芒果丁 (Hass/Cat Chu)',
    scientificName: 'Mangifera indica',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Dice 10x10mm, 15x15mm, 20x20mm', 'Cheeks / Spears'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Heavy Duty Carton with Inner PE'
    },
    applications: ['Industrial Fruit Preparation', 'Yogurt', 'Smoothies', 'Bakery'],
    image: '/images/products/iqf/iqf_mango_dice.png'
  },
{
    id: 'iqf-pineapple',
    nameEn: 'IQF Pineapple Tidbits / Dice',
    nameVi: 'Dứa IQF Cắt Miếng / Hạt Lựu Đông Lạnh',
    nameZh: 'IQF 速冻菠萝扇块/菠萝丁',
    scientificName: 'Ananas comosus',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Tidbits 1/12', 'Dice 10x10mm', 'Rings'],
    specifications: {
      brix: '12 - 14°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Carton'
    },
    applications: ['Pizza Topping', 'Fruit Cocktails', 'Food Processing'],
    image: '/images/products/iqf/iqf_pineapple.png'
  },
{
    id: 'iqf-papaya',
    nameEn: 'IQF Red Papaya Dice',
    nameVi: 'Đu Đủ Ruột Đỏ IQF Cắt Hạt Lựu',
    nameZh: 'IQF 速冻红肉木瓜丁',
    scientificName: 'Carica papaya',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Dice 10x10mm, 15x15mm'],
    specifications: {
      brix: '10 - 12°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Export Carton'
    },
    applications: ['Tropical Fruit Mixes', 'Smoothies'],
    image: '/images/products/iqf/iqf_papaya.png'
  },
{
    id: 'iqf-durian',
    nameEn: 'IQF Durian Seedless Flesh / Whole Segment',
    nameVi: 'Sầu Riêng Ri6 IQF Đông Lạnh Nguyên Múi / Puree',
    nameZh: 'IQF 速冻榴莲果肉 (带核/去核)',
    scientificName: 'Durio zibethinus',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Whole Segment with seed', 'Seedless Puree Block'],
    specifications: {
      brix: '24 - 30°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Vacuum PE Bag in Master Carton'
    },
    applications: ['Pastry & Bakery', 'Desserts', 'Durian Beverages', 'HORECA'],
    image: '/images/products/iqf/iqf_durian.png'
  },
{
    id: 'iqf-red-dragon-fruit',
    nameEn: 'IQF Red Dragon Fruit Dice',
    nameVi: 'Thanh Long Ruột Đỏ IQF Cắt Hạt Lựu',
    nameZh: 'IQF 速冻红心火龙果丁',
    scientificName: 'Hylocereus costaricensis',
    category: 'iqf',
    subCategory: 'IQF Fruits',
    formats: ['Dice 10x10mm, 15x15mm', 'Ball Cut (Scoop)'],
    specifications: {
      brix: '12 - 15°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Heavy Duty Carton'
    },
    applications: ['Smoothie Mixes', 'Sorbet Base', 'Natural Colorant Inclusion'],
    image: '/images/products/iqf/iqf_red_dragon_fruit.png'
  },
{
    id: 'powder-fd-lychee',
    nameEn: 'Freeze-Dried Lychee Powder',
    nameVi: 'Bột Vải Sấy Thăng Hoa',
    nameZh: '冻干荔枝纯粉 (Freeze-Dried)',
    scientificName: 'Litchi chinensis',
    category: 'powders',
    subCategory: 'Freeze-Dried Powders',
    formats: ['Fine Powder (100 Mesh)'],
    specifications: {
      brix: 'Natural fruit sugar content',
      shelfLife: '24 months',
      storage: '< 25°C, Dry condition',
      packaging: '5kg Aluminum Bag in Carton'
    },
    applications: ['RTD Drinks', 'Ice Cream', 'Supplements'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_lychee.png'
  },
{
    id: 'powder-fd-acerola',
    nameEn: 'Freeze-Dried Acerola Cherry Powder',
    nameVi: 'Bột Sơ Ri Sấy Thăng Hoa (Giàu Vitamin C)',
    nameZh: '冻干针叶樱桃/维C纯粉',
    scientificName: 'Malpighia emarginata',
    category: 'powders',
    subCategory: 'Freeze-Dried Powders',
    formats: ['Fine Powder (100 Mesh)'],
    specifications: {
      brix: 'Natural Vitamin C > 17%',
      shelfLife: '24 months',
      storage: '< 20°C, Moisture-proof',
      packaging: '1kg / 5kg Vacuum Aluminum Bag'
    },
    applications: ['Natural Vitamin C Fortification', 'Health Drinks'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_acerola_cherry.png'
  },
{
    id: 'powder-col-coffee',
    nameEn: 'Instant Robusta Coffee Powder',
    nameVi: 'Bột Cà Phê Hòa Tan Robusta',
    nameZh: '越南高质罗布斯塔速溶咖啡粉',
    scientificName: 'Coffea canephora',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Spray-Dried Powder / Agglomerated'],
    specifications: {
      brix: 'Caffeine > 2.5%',
      shelfLife: '24 months',
      storage: '< 25°C, RH < 60%',
      packaging: '10kg / 25kg Fiber Drum'
    },
    applications: ['3-in-1 Coffee Mixes', 'RTD Beverages', 'Bakery'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_coffee.png'
  },
{
    id: 'powder-col-chili',
    nameEn: 'Pure Chili Powder',
    nameVi: 'Bột Ớt Nguyên Chất',
    nameZh: '热风干燥指天椒辣椒粉',
    scientificName: 'Capsicum annuum',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Powder (60-80 Mesh)'],
    specifications: {
      brix: 'Capsaicin content customized',
      shelfLife: '24 months',
      storage: 'Cool & dry',
      packaging: '10kg / 20kg Export Bag'
    },
    applications: ['Seasoning Blends', 'Sauces', 'Snack Foods'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_chili.png'
  },
{
    id: 'powder-col-ginger',
    nameEn: 'Pure Ginger Powder',
    nameVi: 'Bột Gừng Nguyên Chất',
    nameZh: '热风干燥纯老姜粉',
    scientificName: 'Zingiber officinale',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Powder (80 Mesh)'],
    specifications: {
      brix: 'Gingerol content > 1.5%',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '10kg / 25kg Bag in Carton'
    },
    applications: ['Herbal Tea', 'Confectionery', 'Seasoning'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_ginger.png'
  },
{
    id: 'powder-deh-pumpkin',
    nameEn: 'Dehydrated Pumpkin Powder',
    nameVi: 'Bột Bí Đỏ Sấy Lạnh',
    nameZh: '脱水南瓜纯粉',
    scientificName: 'Cucurbita moschata',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Fine Powder (100 Mesh)'],
    specifications: {
      brix: 'Beta-carotene rich',
      shelfLife: '18 months',
      storage: 'Dry & cool condition',
      packaging: '10kg / 20kg Export Bag'
    },
    applications: ['Baby Foods', 'Soups', 'Bakery Inclusions'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_pumpkin.png'
  },
{
    id: 'powder-deh-cinnamon',
    nameEn: 'Pure Yen Bai Cinnamon Powder',
    nameVi: 'Bột Quế Yên Bái Nguyên Chất',
    nameZh: '越南官桂肉桂粉',
    scientificName: 'Cinnamomum cassia',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Fine Powder (80-100 Mesh)'],
    specifications: {
      brix: 'Essential Oil > 3.0%',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '10kg / 25kg Bag in Carton'
    },
    applications: ['Bakery', 'Beverages', 'Pharmaceuticals'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_cinnamon.png'
  },
{
    id: 'powder-deh-star-anise',
    nameEn: 'Pure Star Anise Powder',
    nameVi: 'Bột Hoa Hồi Nguyên Chất',
    nameZh: '越南八角茴香粉',
    scientificName: 'Illicium verum',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['Fine Powder (80 Mesh)'],
    specifications: {
      brix: 'Anethole content high',
      shelfLife: '24 months',
      storage: 'Cool & dry',
      packaging: '10kg / 25kg Bag'
    },
    applications: ['Spice Mixes', 'Five-Spice Powder', 'Extracts'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_star_anise.png'
  },
{
    id: 'powder-ext-pineapple',
    nameEn: 'Instant Pineapple Extract Powder',
    nameVi: 'Bột Chiết Xuất Dứa Hòa Tan',
    nameZh: '菠萝水溶性萃取粉',
    scientificName: 'Ananas comosus',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['100% Water Soluble Powder'],
    specifications: {
      brix: 'Natural aroma intact',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '5kg / 10kg Vacuum Bag'
    },
    applications: ['Instant Drinks', 'Jelly', 'Flavoring'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_pineapple.png'
  },
{
    id: 'powder-ext-mango',
    nameEn: 'Instant Mango Extract Powder',
    nameVi: 'Bột Chiết Xuất Xoài Hòa Tan',
    nameZh: '芒果水溶性萃取粉',
    scientificName: 'Mangifera indica',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['100% Water Soluble Powder'],
    specifications: {
      brix: 'Vibrant yellow color',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '5kg / 10kg Vacuum Bag'
    },
    applications: ['Beverage Premixes', 'Desserts', 'Dairy'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_mango.png'
  },
{
    id: 'powder-ext-lime',
    nameEn: 'Instant Lime Extract Powder',
    nameVi: 'Bột Chiết Xuất Chanh Hòa Tan',
    nameZh: '青柠檬水溶性萃取粉',
    scientificName: 'Citrus aurantiifolia',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['100% Water Soluble Powder'],
    specifications: {
      brix: 'Citric acid natural',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '5kg Vacuum Bag'
    },
    applications: ['Instant Limeade', 'Seasonings', 'Sauces'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_lime.png'
  },
{
    id: 'powder-ext-turmeric',
    nameEn: 'Curcumin Turmeric Extract Powder',
    nameVi: 'Tinh Bột Nghệ / Chiết Xuất Curcumin',
    nameZh: '高纯度姜黄素萃取粉 (Curcumin)',
    scientificName: 'Curcuma longa',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['Fine Yellow Powder'],
    specifications: {
      brix: 'Curcumin content > 95%',
      shelfLife: '24 months',
      storage: 'Light-protected < 25°C',
      packaging: '1kg / 5kg / 25kg Drum'
    },
    applications: ['Nutraceuticals', 'Functional Foods', 'Cosmetics'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_turmeric_extract.png'
  },
{
    id: 'powder-ext-beetroot',
    nameEn: 'Instant Beetroot Extract Powder',
    nameVi: 'Bột Chiết Xuất Củ Dền',
    nameZh: '红菜头/甜菜根水溶萃取粉',
    scientificName: 'Beta vulgaris',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['100% Water Soluble Powder'],
    specifications: {
      brix: 'Betanin natural colorant',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '5kg Vacuum Bag'
    },
    applications: ['Natural Food Color', 'Pre-workout Drinks'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_beetroot_extract.png'
  },
{
    id: 'powder-deh-taro',
    nameEn: 'Dehydrated Taro Powder',
    nameVi: 'Bột Khoai Môn Sấy Khô',
    nameZh: '脱水香芋纯粉',
    scientificName: 'Colocasia esculenta',
    category: 'powders',
    subCategory: 'Dehydrated Powders',
    formats: ['80-100 mesh powder'],
    specifications: {
      brix: 'Natural aroma',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '25kg Aluminum Foil Bag'
    },
    applications: ['Bakery', 'Beverages', 'Confectionery'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_taro.png'
  },
{
    id: 'powder-ext-grapefruit',
    nameEn: 'Instant Grapefruit Extract Powder',
    nameVi: 'Bột Bưởi Hòa Tan',
    nameZh: '葡萄柚/柚皮苷萃取粉',
    scientificName: 'Citrus paradisi',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['Instant Soluble Powder'],
    specifications: {
      brix: '100% Water Soluble',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '20kg Fiber Drum'
    },
    applications: ['Functional Drinks', 'Supplements'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_grapefruit.png'
  },
{
    id: 'powder-ext-kumquat',
    nameEn: 'Instant Kumquat Extract Powder',
    nameVi: 'Bột Tắc (Tắt) Hòa Tan',
    nameZh: '金桔水溶性萃取粉',
    scientificName: 'Citrus japonica',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['Instant Soluble Powder'],
    specifications: {
      brix: '100% Water Soluble',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '20kg Fiber Drum'
    },
    applications: ['Beverages', 'Tea Blends'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_kumquat.png'
  },
{
    id: 'powder-ext-butterfly-pea',
    nameEn: 'Butterfly Pea Flower Extract Powder',
    nameVi: 'Bột Hoa Đậu Biếc Hòa Tan',
    nameZh: '蝶豆花天然蓝色色素粉',
    scientificName: 'Clitoria ternatea',
    category: 'powders',
    subCategory: 'Extract Powders',
    formats: ['Natural Blue Color Powder'],
    specifications: {
      brix: '100% Water Soluble',
      shelfLife: '24 months',
      storage: '< 25°C',
      packaging: '15kg / 20kg Drum'
    },
    applications: ['Natural Food Color', 'Tea & Cocktails'],
    seasonality: 'Year-round',
    image: '/images/products/powders/powders_butterfly_pea_flower.png'
  },
  // === PUREE, JUICE & CONCENTRATE PRODUCTS ===
  {
    id: 'puree-durian',
    nameEn: 'Frozen Durian Puree (Seedless)',
    nameVi: 'Puree Sầu Riêng Đông Lạnh (Bỏ Hạt)',
    nameZh: '冷冻无核榴莲果泥 (Puree)',
    scientificName: 'Durio zibethinus',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Frozen Seedless Puree', 'Aseptic Puree'],
    specifications: {
      brix: '24 - 30°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Vacuum Pouch / 200kg Aseptic Drum'
    },
    applications: ['Ice Cream & Gelato', 'Pastry & Bakery', 'Durian Beverages', 'Dessert Processing'],
    seasonality: 'Year-round',
    image: '/images/products/puree/puree_durian.png'
  },
  {
    id: 'puree-avocado',
    nameEn: 'Frozen Avocado Puree',
    nameVi: 'Puree Bơ Đông Lạnh',
    nameZh: '冷冻牛油果泥/牛油果糊 (Puree)',
    scientificName: 'Persea americana',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Smooth Puree (Hass / 034 Variety)', 'Pulp Chunk'],
    specifications: {
      brix: 'Natural fruit sugar',
      shelfLife: '18 months at -18°C',
      storage: '-18°C or lower',
      packaging: '5kg / 10kg Vacuum Pouch'
    },
    applications: ['Smoothies & Shakes', 'Guacamole & Dips', 'Baby Food', 'Cosmetic Formulations'],
    seasonality: 'Main crop May - Oct',
    image: '/images/products/puree/puree_avocado.png'
  },
  {
    id: 'puree-red-dragon-fruit',
    nameEn: 'Frozen Red Dragon Fruit Puree',
    nameVi: 'Puree Thanh Long Ruột Đỏ Đông Lạnh',
    nameZh: '冷冻红心火龙果泥 (Puree)',
    scientificName: 'Hylocereus costaricensis',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Seed-in Puree', 'Filtered Seedless Puree'],
    specifications: {
      brix: '12 - 15°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg / 20kg Aseptic Bag in Box / 200kg Drum'
    },
    applications: ['Smoothie Bases', 'Beverage Colorant', 'Ice Cream', 'Yogurt Toppings'],
    seasonality: 'Year-round',
    image: '/images/products/puree/puree_dragon_fruit.png'
  },
  {
    id: 'puree-soursop',
    nameEn: 'Frozen Soursop Puree / Pulp',
    nameVi: 'Puree / Thịt Mãng Cầu Gai Đông Lạnh',
    nameZh: '冷冻刺果番荔枝/刺梨果泥 (Puree/Pulp)',
    scientificName: 'Annona muricata',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Seedless Pulp Puree', 'Coarse Puree'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Vacuum Pouch / 200kg Drum'
    },
    applications: ['Nectars & Juices', 'Sorbet', 'Confectionery Fillings', 'Nutraceutical Drinks'],
    seasonality: 'Year-round',
    image: '/images/products/puree/puree_soursop.png'
  },
  {
    id: 'puree-mango',
    nameEn: 'Frozen Mango Puree (Cat Chu / Kaew Variety)',
    nameVi: 'Puree Xoài Cát Chu / Xoài Keo Đông Lạnh',
    nameZh: '冷冻 Cat Chu 芒果泥 (Puree)',
    scientificName: 'Mangifera indica',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Smooth Aseptic Puree', 'Frozen Puree Block'],
    specifications: {
      brix: '14 - 18°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '20kg Aseptic Bag in Box / 200kg Aseptic Steel Drum'
    },
    applications: ['Juice Blends', 'Baby Food', 'Bakery Glazes', 'Yogurt & Ice Cream'],
    seasonality: 'Peak harvest Mar - Jul',
    image: '/images/products/puree/puree_mango.png'
  },
  {
    id: 'puree-strawberry',
    nameEn: 'Frozen Strawberry Puree',
    nameVi: 'Puree Dâu Tây Đông Lạnh',
    nameZh: '冷冻草莓果泥 (Puree)',
    scientificName: 'Fragaria × ananassa',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Filtered Seedless Puree', 'Seed-in Puree'],
    specifications: {
      brix: '8 - 11°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Pouch / 200kg Drum'
    },
    applications: ['Dessert Sauces', 'Fruit Preparations', 'Cocktail Mixers', 'Bakery Fillings'],
    seasonality: 'Nov - Apr',
    image: '/images/products/puree/puree_strawberry.png'
  },
  {
    id: 'puree-pineapple',
    nameEn: 'Frozen Pineapple Puree',
    nameVi: 'Puree Dứa (Thơm) Đông Lạnh',
    nameZh: '冷冻菠萝浓缩汁/菠萝果泥',
    scientificName: 'Ananas comosus',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Smooth Puree', 'Single-Strength Crush'],
    specifications: {
      brix: '12 - 14°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '20kg Aseptic Bag / 200kg Drum'
    },
    applications: ['Tropical Juice Blends', 'Jams & Preserves', 'BBQ Marinades & Sauces'],
    seasonality: 'Year-round',
    image: '/images/products/puree/puree_pineapple.png'
  },
  {
    id: 'puree-peach',
    nameEn: 'Frozen Peach Puree',
    nameVi: 'Puree Đào Đông Lạnh',
    nameZh: '冷冻黄桃/黄肉桃果泥 (Puree)',
    scientificName: 'Prunus persica',
    category: 'purees',
    subCategory: 'Fruit Purees',
    formats: ['Smooth Golden Puree'],
    specifications: {
      brix: '11 - 14°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '10kg Pouch / 200kg Drum'
    },
    applications: ['Peach Teas', 'Baby Food Purees', 'Fruit Spreads', 'Dairy Inclusions'],
    seasonality: 'May - Aug',
    image: '/images/products/puree/puree_peach.png'
  },
  {
    id: 'juice-watermelon',
    nameEn: 'Natural Watermelon Juice (Single Strength)',
    nameVi: 'Nước Ép Dưa Hấu Nguyên Chất',
    nameZh: '冷冻纯西瓜原汁 (Natural Juice)',
    scientificName: 'Citrullus lanatus',
    category: 'purees',
    subCategory: 'Natural Juices',
    formats: ['Single Strength Unsweetened Juice'],
    specifications: {
      brix: '8 - 10°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '200kg Aseptic Drum / 20kg Bag in Box'
    },
    applications: ['RTD Cold-Pressed Beverages', 'Hydration Drinks', 'Ice Pops'],
    seasonality: 'Year-round',
    image: '/images/products/puree/juice_watermelon.png'
  },
  {
    id: 'juice-passion-fruit',
    nameEn: 'Natural Passion Fruit Juice (Seedless)',
    nameVi: 'Nước Ép Chanh Dây Nguyên Chất (Bỏ Hạt)',
    nameZh: '冷冻纯百香果原汁 (Natural Juice)',
    scientificName: 'Passiflora edulis',
    category: 'purees',
    subCategory: 'Natural Juices',
    formats: ['Single Strength Seedless Juice', 'Juice with Seeds'],
    specifications: {
      brix: '13 - 16°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '20kg Aseptic Bag / 200kg Drum'
    },
    applications: ['Acid Balance Beverage Mixers', 'Confectionery', 'Sauces & Dressing'],
    seasonality: 'Year-round',
    image: '/images/products/puree/juice_passion_fruit.png'
  },
  {
    id: 'juice-pomelo',
    nameEn: 'Natural Pink Pomelo Juice',
    nameVi: 'Nước Ép Bưởi Hồng Nguyên Chất',
    nameZh: '冷冻纯红心柚原汁 (Natural Juice)',
    scientificName: 'Citrus maxima',
    category: 'purees',
    subCategory: 'Natural Juices',
    formats: ['Single Strength Pulp Juice'],
    specifications: {
      brix: '9 - 11°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '20kg Aseptic Bag / 200kg Drum'
    },
    applications: ['Detox Beverages', 'Citrus Juice Blends', 'Cocktail Bases'],
    seasonality: 'Year-round',
    image: '/images/products/puree/juice_pomelo.png'
  },
  {
    id: 'juice-pineapple',
    nameEn: 'Natural Pineapple Juice (Single Strength)',
    nameVi: 'Nước Ép Dứa Nguyên Chất',
    nameZh: '冷冻纯菠萝原汁 (Natural Juice)',
    scientificName: 'Ananas comosus',
    category: 'purees',
    subCategory: 'Natural Juices',
    formats: ['Single Strength Juice'],
    specifications: {
      brix: '12 - 14°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '200kg Aseptic Drum'
    },
    applications: ['Canned Drinks', 'Beverage Bottling', 'Food Service'],
    seasonality: 'Year-round',
    image: '/images/products/puree/juice_pineapple.png'
  },
  {
    id: 'concentrate-coconut',
    nameEn: 'Coconut Water Concentrate 60° Brix',
    nameVi: 'Nước Dừa Đậm Đặc 60° Brix',
    nameZh: '无菌装浓缩椰子水 (Concentrate)',
    scientificName: 'Cocos nucifera',
    category: 'purees',
    subCategory: 'Juice Concentrates',
    formats: ['60° Brix High Concentrate'],
    specifications: {
      brix: '60° ± 1°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '200kg Steel Drum with Aseptic Liner'
    },
    applications: ['Isotonic Drinks Reconstitution', 'Coconut Water Reconstitution', 'Flavoring'],
    seasonality: 'Year-round',
    image: '/images/products/puree/concentrate_coconut.png'
  },
  {
    id: 'concentrate-pineapple',
    nameEn: 'Pineapple Juice Concentrate 60° Brix',
    nameVi: 'Nước Ép Dứa Đậm Đặc 60° Brix',
    nameZh: '无菌装浓缩菠萝汁 (60-65 Brix)',
    scientificName: 'Ananas comosus',
    category: 'purees',
    subCategory: 'Juice Concentrates',
    formats: ['Clarified Concentrate 60° Brix', 'Cloudy Concentrate'],
    specifications: {
      brix: '60° ± 1°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '250kg Aseptic Drum'
    },
    applications: ['Juice Manufacturing Reconstitution', 'Canned Fruit Syrup', 'Sweetener Replacement'],
    seasonality: 'Year-round',
    image: '/images/products/puree/concentrate_pineapple.png'
  },
  {
    id: 'concentrate-passion-fruit',
    nameEn: 'Passion Fruit Juice Concentrate 50° Brix',
    nameVi: 'Nước Chanh Dây Đậm Đặc 50° Brix',
    nameZh: '无菌装浓缩百香果汁 (50 Brix)',
    scientificName: 'Passiflora edulis',
    category: 'purees',
    subCategory: 'Juice Concentrates',
    formats: ['Concentrate 50° Brix'],
    specifications: {
      brix: '50° ± 1°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '200kg Aseptic Drum'
    },
    applications: ['Tropical Beverage Reconstitution', 'Candy & Syrup Manufacturing'],
    seasonality: 'Year-round',
    image: '/images/products/puree/concentrate_passion_fruit.png'
  },
  {
    id: 'concentrate-mango',
    nameEn: 'Mango Juice Concentrate 28-30° Brix',
    nameVi: 'Nước Xoài Đậm Đặc 28-30° Brix',
    nameZh: '无菌装浓缩芒果浆 (28-30 Brix)',
    scientificName: 'Mangifera indica',
    category: 'purees',
    subCategory: 'Juice Concentrates',
    formats: ['Concentrated Puree 28-30° Brix'],
    specifications: {
      brix: '28 - 30°',
      shelfLife: '24 months at -18°C',
      storage: '-18°C or lower',
      packaging: '215kg Aseptic Drum'
    },
    applications: ['Industrial Nectar Reconstitution', 'Yogurt Fruit Prep', 'Bakery Topping'],
    seasonality: 'Mar - Jul',
    image: '/images/products/puree/concentrate_mango.png'
  }
];

export const CATALOGUES_LIST: CatalogueInfo[] = [
  {
    id: 'cat-harvest-edition-2026',
    titleEn: 'VAC Complete Product Catalogue 2026 (Harvest Edition)',
    titleVi: 'Catalogue Tổng Tập Nông Sản VietAgri 2026 (Harvest Edition)',
    titleZh: 'VAC 2026年农产品综合目录 (Harvest Edition)',
    category: 'Complete Master Portfolio',
    pageCount: 16,
    fileSize: '34.9 MB',
    fileName: 'VAC_Product_Catalogue_2026_Harvest_Edition.pdf',
    downloadUrl: '/catalogues/VAC_Product_Catalogue_2026_Harvest_Edition.pdf',
    driveId: '1U70DJaj_9dWtu6jSr9sZmsxNeBO-7jAF',
    coverImage: '/images/products/IMG_7966.PNG',
    descEn: 'Comprehensive guide covering all 4 processing formats: Fresh Produce, Fruit & Vegetable Powders, Freeze-Dried Fruits, and IQF Frozen Produce alongside Viet Wolffia and Organic Inputs.',
    descVi: 'Tài liệu tổng hợp toàn bộ 4 định dạng chế biến nông sản: Nông sản tươi, Bột trái cây & rau củ, Trái cây sấy thăng hoa và Cấp đông IQF cùng siêu thực phẩm Việt Wolffia & Phân bón hữu cơ.',
    descZh: '全面涵盖4大加工形态：鲜果农产品、水果蔬菜粉、冻干水果、IQF速冻农产品以及越南 Wolffia 和有机农业投入品。'
  },
  {
    id: 'cat-fresh-2026',
    titleEn: 'Fresh Fruits & Vegetables Catalogue 2026',
    titleVi: 'Catalogue Trái Cây & Rau Củ Tươi Xuất Khẩu 2026',
    titleZh: '2026年出口鲜果与蔬菜产品目录',
    category: 'Fresh Produce',
    pageCount: 12,
    fileSize: '31.1 MB',
    fileName: 'VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    downloadUrl: '/catalogues/VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    driveId: '1N9T754XJ1-0x9HT5p8hBhvb9hV3N3-bP',
    coverImage: '/images/products/IMG_7967.JPG',
    descEn: 'Export-grade Vietnamese fresh fruits, root vegetables, and culinary crops with seasonal calendars, caliber specifications, and post-harvest cold chain management.',
    descVi: 'Trái cây tươi xuất khẩu, củ quả và gia vị nhiệt đới Việt Nam kèm lịch thu hoạch theo mùa, tiêu chuẩn phân loại size và quy trình bảo quản chuỗi lạnh xuất khẩu.',
    descZh: '出口级越南鲜果、根茎类蔬菜及热带调味作物，附带季节性采收日历、规格分级标准及采后冷链保鲜管理。'
  },
  {
    id: 'cat-powders-2026',
    titleEn: 'Fruit & Vegetable Powders Product Catalogue 2026',
    titleVi: 'Catalogue Bột Trái Cây & Rau Củ Thực Phẩm 2026',
    titleZh: '2026年水果与蔬菜粉产品目录',
    category: 'Food Ingredients & Extracts',
    pageCount: 12,
    fileSize: '25.0 MB',
    fileName: 'VAC_Powders_Product_Catalogue_2026-5.pdf',
    downloadUrl: '/catalogues/VAC_Powders_Product_Catalogue_2026-5.pdf',
    driveId: '1HdqV7OvaVWPwKMaf4u2pwMnQuS9bZ6mT',
    coverImage: '/images/products/coffee_cacao.png',
    descEn: 'Technical specifications for Freeze-Dried Powders, Tropical Powder Collection, Dehydrated Powders, and 100% Water Soluble Extract Powders for F&B and Nutraceuticals.',
    descVi: 'Thông số kỹ thuật chi tiết cho Bột sấy thăng hoa, Bộ sưu tập bột nông sản nhiệt đới, Bột sấy lạnh và Bột chiết xuất hòa tan 100% chuyên dụng cho F&B và Dược phẩm.',
    descZh: '冻干粉、热带农产品粉系列、冷干粉及100%水溶性提取粉的技术规格，专为食品饮料及保健品工业打造。'
  },
  {
    id: 'cat-freeze-dried-2026',
    titleEn: 'Freeze-Dried Fruits Product Catalogue 2026',
    titleVi: 'Catalogue Trái Cây Sấy Thăng Hoa 2026',
    titleZh: '2026年冻干水果产品目录',
    category: 'Sublimation Dried Fruits',
    pageCount: 6,
    fileSize: '10.6 MB',
    fileName: 'VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    downloadUrl: '/catalogues/VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    driveId: '1jPaTPhfWrBV9DBNz_5Iyp9pt_EtB_UfU',
    coverImage: '/images/products/IMG_7958.JPG',
    descEn: 'Sublimation vacuum freeze-dried fruits with crispy texture, moisture under 5%, preserving 98%+ nutrients in Whole, Slices, Dices, and Crisps forms.',
    descVi: 'Trái cây sấy thăng hoa chân không giữ trọn 98% dinh dưỡng, cấu trúc giòn xốp thơm ngon với độ ẩm dưới 5% dạng Nguyên quả, Lát, Hạt lựu và Crisps.',
    descZh: '真空升华冻干水果，保持酥脆口感，水分低于5%，保留98%以上的营养成分，涵盖整果、切片、切丁及脆片形态。'
  },
  {
    id: 'cat-iqf-2026',
    titleEn: 'IQF Fruits & Vegetables Product Catalogue 2026',
    titleVi: 'Catalogue Trái Cây & Rau Củ Cấp Đông IQF 2026',
    titleZh: '2026年IQF速冻水果与蔬菜产品目录',
    category: 'Individually Quick-Frozen',
    pageCount: 6,
    fileSize: '12.0 MB',
    fileName: 'VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    downloadUrl: '/catalogues/VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    driveId: '1G2bwMHCCkACltg-6l6RwoHKYICe4nagj',
    coverImage: '/images/products/IMG_7960.JPG',
    descEn: 'Cryogenic IQF frozen fruits and vegetables (-35°C freezing, -18°C storage) in free-flowing Dices, Slices, Halves, and Puree blocks for industrial food manufacturing.',
    descVi: 'Nông sản cấp đông siêu tốc IQF (-35°C) tơi rời dạng Hạt lựu, Lát, Nửa quả và Khối Puree phục vụ nhà máy chế biến thực phẩm và chuỗi HORECA.',
    descZh: '深冷IQF速冻水果与蔬菜（-35°C冻结，-18°C储存），提供松散切丁、切片、对半及果泥块形态，服务于工业食品制造。'
  },
  {
    id: 'cat-purees-2026',
    titleEn: 'Fruit Purees & Concentrates Catalogue 2026',
    titleVi: 'Catalogue Trái Cây Xay Nhuyễn & Nước Ép Đậm Đặc 2026',
    titleZh: '2026年果泥与浓缩果汁产品目录',
    category: 'Purees & Concentrates',
    pageCount: 8,
    fileSize: '18.5 MB',
    fileName: 'VAC_IQF_Puree_Catalogue_2026.pdf',
    downloadUrl: '/catalogues/VAC_IQF_Puree_Catalogue_2026.pdf',
    driveId: '1o3DgzPTqN9fjnEEsuFG-YnNzkG_A2aRj',
    coverImage: '/images/products/puree/puree_mango.png',
    descEn: 'Aseptic frozen fruit purees, seedless pulps, single-strength juices, and high-Brix concentrates for F&B industrial processing.',
    descVi: 'Puree trái cây cấp đông vô trùng, thịt quả bỏ hạt, nước ép nguyên chất và nước ép đậm đặc Brix cao cho ngành chế biến F&B công nghiệp.',
    descZh: '无菌冷冻果泥、去籽果肉、原汁及高Brix浓缩果汁，专为食品饮料工业加工设计。'
  },
];

export const FORMAT_COMPARISONS: FormatComparison[] = [
  {
    formatKey: 'fresh',
    titleEn: 'Fresh Fruits & Vegetables',
    titleVi: 'Nông Sản Tươi (Fresh)',
    bestSuitedEn: 'Supermarkets, Fresh Produce Wholesalers, HORECA & Direct Consumer Markets',
    bestSuitedVi: 'Siêu thị, Nhà bán buôn trái cây tươi, Chuỗi nhà hàng HORECA & Tiêu dùng trực tiếp',
    advantageEn: '100% Natural presentation, authentic crisp texture, premium whole-product positioning',
    advantageVi: 'Hình thức tự nhiên 100%, hương vị và độ giòn nguyên bản, vị thế sản phẩm cao cấp',
    storageEn: 'Cold chain (+2°C to +13°C), RH 85-95%',
    storageVi: 'Chuỗi lạnh (+2°C đến +13°C), độ ẩm 85-95%',
    shelfLifeEn: '14 - 45 days (commodity dependent)',
    shelfLifeVi: '14 - 45 ngày (tùy chủng loại)',
    link: '/products/fresh-fruits-vegetables'
  },
  {
    formatKey: 'powders',
    titleEn: 'Fruit & Vegetable Powders',
    titleVi: 'Bột Nông Sản (Powders)',
    bestSuitedEn: 'F&B Industrial Manufacturing, Instant Drinks, Bakery, Confectionery & Nutraceuticals',
    bestSuitedVi: 'Nhà máy chế biến F&B, Đồ uống hòa tan, Bánh kẹo, Thực phẩm chức năng & Dược phẩm',
    advantageEn: 'Concentrated dosage, zero water weight logistics, ultra-high shelf stability, instant solubility',
    advantageVi: 'Hàm lượng đậm đặc, tối ưu chi phí vận chuyển, bảo quản cực tốt, độ hòa tan cao',
    storageEn: 'Ambient dry (< 25°C), moisture barrier bags',
    storageVi: 'Nhiệt độ phòng mát (< 25°C), túi chống ẩm',
    shelfLifeEn: '18 - 24 months',
    shelfLifeVi: '18 - 24 tháng',
    link: '/products/fruit-vegetable-powders'
  },
  {
    formatKey: 'freeze-dried',
    titleEn: 'Freeze-Dried Fruits',
    titleVi: 'Sấy Thăng Hoa (Freeze-Dried)',
    bestSuitedEn: 'Premium Retail Healthy Snacks, Breakfast Cereals, Chocolate Inclusions & Gourmet Foods',
    bestSuitedVi: 'Snacks ăn kiêng cao cấp, Ngũ cốc ăn sáng, Sô-cô-la nhân trái cây & Quà tặng thực phẩm',
    advantageEn: 'Preserves 98%+ original nutrients, natural colour, crispy texture, moisture < 5%',
    advantageVi: 'Bảo tồn trên 98% dinh dưỡng, màu sắc tự nhiên, giòn xốp thơm ngon, độ ẩm < 5%',
    storageEn: 'Ambient (< 28°C) in sealed moisture-proof barrier',
    storageVi: 'Nhiệt độ phòng (< 28°C) trong bao bì kín khí',
    shelfLifeEn: '18 - 24 months',
    shelfLifeVi: '18 - 24 tháng',
    link: '/products/freeze-dried-fruits'
  },
  {
    formatKey: 'iqf',
    titleEn: 'IQF Frozen Produce',
    titleVi: 'Cấp Đông Rời (IQF)',
    bestSuitedEn: 'Industrial Smoothies, Jam/Sauce Plants, Frozen Bakery, Dairy & Food Service Portioning',
    bestSuitedVi: 'Nhà máy sinh tố công nghiệp, Mứt/Sốt, Bánh kẹo đông lạnh, Chế biến suất ăn công nghiệp',
    advantageEn: '100% Free-flowing pieces for exact automated portioning without bulk thawing',
    advantageVi: 'Sản phẩm tơi rời 100% giúp định lượng chính xác không cần rã đông cả khối',
    storageEn: 'Deep freeze at -18°C or lower continuous',
    storageVi: 'Cấp đông sâu tại -18°C liên tục',
    shelfLifeEn: '24 months',
    shelfLifeVi: '24 tháng',
    link: '/products/iqf-fruits-vegetables'
  },
  {
    formatKey: 'purees',
    titleEn: 'Fruit Purees, Juices & Concentrates',
    titleVi: 'Xay Nhuyễn & Đậm Đặc (Puree & Concentrate)',
    bestSuitedEn: 'Beverage Bottling, Dairy & Ice Cream, Bakery Fillings, Jams/Sauces & Baby Food Plants',
    bestSuitedVi: 'Nhà máy sản xuất đồ uống đóng chai, Sữa & Kem, Nhân bánh kẹo, Mứt/Sốt & Thực phẩm trẻ em',
    advantageEn: '100% Homogeneous texture, zero fruit waste, standardized Brix/pH, smooth pumping in production',
    advantageVi: 'Cấu trúc đồng nhất 100%, không hao hụt trái cây, chuẩn hóa Brix/pH, bơm rót dễ dàng trong dây chuyền',
    storageEn: 'Deep freeze at -18°C for Purees, Ambient for Aseptic packaging',
    storageVi: 'Bảo quản đông -18°C đối với Puree, hoặc nhiệt độ phòng cho bao bì Aseptic',
    shelfLifeEn: '18 - 24 months',
    shelfLifeVi: '18 - 24 tháng',
    link: '/products/fruit-purees'
  },
];

export function getProductsByCategory(category: string): ProductItem[] {
  const norm = category.toLowerCase().trim();
  if (norm === 'crops-plant-based' || norm === 'crops-plant-based-products' || norm === 'crops') {
    return PRODUCTS_LIST.filter(p => ['fresh', 'powders', 'purees', 'freeze-dried', 'iqf'].includes(p.category));
  }
  if (norm === 'seafood' || norm === 'seafood-products' || norm === 'aquaculture-seafood') {
    return PRODUCTS_LIST.filter(p => ['seafood', 'basa', 'shrimp', 'squid'].includes(p.category));
  }
  if (norm === 'basa' || norm === 'basa-fish-pangasius') {
    return PRODUCTS_LIST.filter(p => p.category === 'basa');
  }
  if (norm === 'shrimp' || norm === 'vietnamese-shrimp') {
    return PRODUCTS_LIST.filter(p => p.category === 'shrimp');
  }
  if (norm === 'squid' || norm === 'squid-products') {
    return PRODUCTS_LIST.filter(p => p.category === 'squid');
  }
  if (norm === 'poultry' || norm === 'poultry-products') {
    return PRODUCTS_LIST.filter(p => p.category === 'poultry');
  }
  if (norm === 'purees' || norm === 'fruit-purees' || norm === 'puree-products') {
    return PRODUCTS_LIST.filter(p => p.category === 'purees');
  }
  return PRODUCTS_LIST.filter(p => p.category === norm || (CATEGORIES_DATA[norm] && CATEGORIES_DATA[norm].slug === p.category));
}

export function getCategoryInfo(slugOrId: string): CategoryInfo | undefined {
  const norm = slugOrId.toLowerCase().trim();
  for (const cat of Object.values(CATEGORIES_DATA)) {
    if (cat.id === norm || cat.slug === norm) {
      return cat;
    }
  }
  if (norm === 'crops-plant-based' || norm === 'crops-plant-based-products' || norm === 'crops') {
    return CATEGORIES_DATA['crops-plant-based'];
  }
  if (norm === 'seafood' || norm === 'seafood-products' || norm === 'aquaculture-seafood') {
    return CATEGORIES_DATA['seafood'];
  }
  if (norm === 'basa' || norm === 'basa-fish-pangasius') {
    return CATEGORIES_DATA['basa'];
  }
  if (norm === 'shrimp' || norm === 'vietnamese-shrimp') {
    return CATEGORIES_DATA['shrimp'];
  }
  if (norm === 'squid' || norm === 'squid-products') {
    return CATEGORIES_DATA['squid'];
  }
  if (norm === 'poultry' || norm === 'poultry-products') {
    return CATEGORIES_DATA['poultry'];
  }
  if (norm === 'purees' || norm === 'fruit-purees' || norm === 'puree-products') {
    return CATEGORIES_DATA['purees'];
  }
  return undefined;
}