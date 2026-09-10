export interface ProductItem {
  id: string;
  nameEn: string;
  nameVi: string;
  scientificName?: string;
  category: 'fresh' | 'powders' | 'freeze-dried' | 'iqf';
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
  id: 'fresh' | 'powders' | 'freeze-dried' | 'iqf';
  slug: string;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  heroImage: string;
  catalogueFileName: string;
  catalogueDriveId: string;
  descriptionEn: string;
  descriptionVi: string;
  highlightsEn: string[];
  highlightsVi: string[];
  availableCutsEn: string[];
  availableCutsVi: string[];
  defaultPackagingEn: string;
  defaultPackagingVi: string;
  storageEn: string;
  storageVi: string;
}

export interface CatalogueInfo {
  id: string;
  titleEn: string;
  titleVi: string;
  category: string;
  pageCount: number;
  fileSize: string;
  fileName: string;
  downloadUrl: string;
  driveId: string;
  coverImage: string;
  descEn: string;
  descVi: string;
}

export interface FormatComparison {
  formatKey: 'fresh' | 'powders' | 'freeze-dried' | 'iqf';
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
    subtitleEn: 'Seasonal Export-Grade Produce Direct from Verified Farms',
    subtitleVi: 'Nông Sản Tươi Đạt Chuẩn Xuất Khẩu Thu Hoạch Trực Tiếp Từ Vùng Trồng',
    heroImage: '/images/products/IMG_7966.PNG',
    catalogueFileName: 'VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    catalogueDriveId: '1N9T754XJ1-0x9HT5p8hBhvb9hV3N3-bP',
    descriptionEn: 'VAC connects global buyers directly to accredited Vietnamese fruit orchards and vegetable farms. Managed under strict VietGAP and GlobalG.A.P protocols, our fresh produce undergoes rigorous MRL testing, cold chain preservation, and certified VHT/irradiation treatment to ensure border compliance across the EU, USA, Japan, Korea, and ASEAN markets.',
    descriptionVi: 'VAC kết nối trực tiếp nhà mua hàng quốc tế với các trang trại và vùng trồng liên kết đạt chuẩn tại Việt Nam. Được quản lý theo quy trình VietGAP và GlobalG.A.P nghiêm ngặt, nông sản tươi VAC đáp ứng đầy đủ tiêu chuẩn dư lượng MRLs, bảo quản chuỗi lạnh liên tục và xử lý dịch hại (VHT/Chiếu xạ) sẵn sàng xuất khẩu.',
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
    availableCutsEn: ['Whole Fruit', 'Stem-on', 'Sorted by Caliber/Weight', 'Cleaned & Polished'],
    availableCutsVi: ['Quả nguyên', 'Còn cành lá', 'Phân loại theo kích thước/trọng lượng', 'Làm sạch & đánh bóng'],
    defaultPackagingEn: '5kg, 10kg, 18kg Ventilated Export Cartons with PE Liner or Plastic Crates on PE Pallets',
    defaultPackagingVi: 'Thùng carton đục lỗ 5kg, 10kg, 18kg có túi PE lót hoặc khay nhựa trên pallet quấn màng PE',
    storageEn: 'Cold storage (+2°C to +13°C depending on commodity), 85-95% RH',
    storageVi: 'Bảo quản lạnh (+2°C đến +13°C tùy loại nông sản), độ ẩm tương đối 85-95%'
  },
  'powders': {
    id: 'powders',
    slug: 'fruit-vegetable-powders',
    titleEn: 'Fruit & Vegetable Powders',
    titleVi: 'Bột Trái Cây & Rau Củ Thực Phẩm',
    subtitleEn: 'High-Purity Natural Ingredients for F&B, Bakery & Supplements',
    subtitleVi: 'Nguyên Liệu Tự Nhiên Cao Cấp Phục Vụ Đồ Uống, Bánh Kẹo & Thực Phẩm Chức Năng',
    heroImage: '/images/products/coffee_cacao.png',
    catalogueFileName: 'VAC_Powders_Product_Catalogue_2026-5.pdf',
    catalogueDriveId: '1HdqV7OvaVWPwKMaf4u2pwMnQuS9bZ6mT',
    descriptionEn: 'Engineered for industrial food and beverage manufacturers, VAC supplies a comprehensive portfolio of fruit and vegetable powders processed via Freeze-Drying, Dehydration, Spray-Drying, and Cold Water Soluble Extraction. Retaining vibrant natural colours, active bio-nutrients, and authentic flavour profiles without synthetic fillers or carrier agents.',
    descriptionVi: 'Dành riêng cho nhà sản xuất thực phẩm và đồ uống công nghiệp, VAC cung cấp danh mục bột trái cây & rau củ phong phú chế biến bằng công nghệ Sấy thăng hoa, Sấy lạnh/sấy nhiệt, Sấy phun và Chiết xuất hòa tan. Giữ trọn màu sắc tự nhiên, hoạt chất sinh học và hương vị đặc trưng không pha tạp chất hay chất độn nhân tạo.',
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
    availableCutsEn: ['Fine Powder (80-100 Mesh)', 'Water-Soluble Extract Powder', 'Granulated Powder'],
    availableCutsVi: ['Bột mịn (80-100 Mesh)', 'Bột chiết xuất hòa tan', 'Bột dạng hạt (Granulated)'],
    defaultPackagingEn: '1kg, 5kg Aluminum Vacuum Bags in 10kg/20kg Export Cartons or 25kg Fiber Drums',
    defaultPackagingVi: 'Túi nhôm hút chân không 1kg, 5kg đóng trong thùng carton 10kg/20kg hoặc Fiber Drum 25kg',
    storageEn: 'Cool, dry condition below 25°C, relative humidity < 60%',
    storageVi: 'Nơi khô ráo, thoáng mát dưới 25°C, độ ẩm tương đối < 60%'
  },
  'freeze-dried': {
    id: 'freeze-dried',
    slug: 'freeze-dried-fruits',
    titleEn: 'Freeze-Dried Fruits',
    titleVi: 'Trái Cây Sấy Thăng Hoa',
    subtitleEn: 'Sublimation Vacuum Freeze-Drying preserving natural flavor, aroma & nutrients',
    subtitleVi: 'Công Nghệ Sấy Thăng Hoa Chân Không Giữ Nguyên Hương Vị, Màu Sắc & Dinh Dưỡng',
    heroImage: '/images/products/IMG_7958.JPG',
    catalogueFileName: 'VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    catalogueDriveId: '1jPaTPhfWrBV9DBNz_5Iyp9pt_EtB_UfU',
    descriptionEn: 'Using sublimation vacuum freeze-drying technology, VAC freeze-dried fruits preserve original vitamins, antioxidants, natural aroma, and cell structure. Offering a delightful crunchy texture with moisture content below 5%, ideal for premium retail snacks, breakfast cereals, chocolate coating, and bakery inclusions.',
    descriptionVi: 'Ứng dụng công nghệ sấy thăng hoa chân không hiện đại, trái cây sấy thăng hoa VAC duy trì hàm lượng vitamin, chất chống oxy hóa, hương thơm và cấu trúc tế bào tự nhiên. Tạo độ giòn xốp thơm ngon với độ ẩm dưới 5%, hoàn hảo cho snack ăn liền cao cấp, ngũ cốc ăn sáng, phủ sô-cô-la và làm nhân bánh.',
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
    availableCutsEn: ['Whole Fruit', 'Slices (3-5mm / 5-7mm)', 'Pieces & Dices (5x5mm, 10x10mm)', 'Crisps & Powder Blend'],
    availableCutsVi: ['Nguyên quả', 'Thái lát (3-5mm / 5-7mm)', 'Cắt mảnh & hạt lựu (5x5mm, 10x10mm)', 'Mảnh giòn crisps'],
    defaultPackagingEn: 'Double PE inner bags in 5kg/10kg Export Cartons or Customized Retail Pouches',
    defaultPackagingVi: 'Túi PE đôi lót trong thùng carton 5kg/10kg xuất khẩu hoặc túi zipper nhôm OEM',
    storageEn: 'Ambient temperature (below 28°C), keep sealed in moisture-barrier packaging',
    storageVi: 'Nhiệt độ phòng (dưới 28°C), kín khí trong bao bì chống ẩm'
  },
  'iqf': {
    id: 'iqf',
    slug: 'iqf-fruits-vegetables',
    titleEn: 'IQF Fruits & Vegetables',
    titleVi: 'Trái Cây & Rau Củ Cấp Đông IQF',
    subtitleEn: 'Individually Quick-Frozen Formats for Controlled Industrial Portioning',
    subtitleVi: 'Nông Sản Cấp Đông Nhanh Rời Rạc Phục Vụ Chế Biến Công Nghiệp & HORECA',
    heroImage: '/images/products/IMG_7960.JPG',
    catalogueFileName: 'VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    catalogueDriveId: '1G2bwMHCCkACltg-6l6RwoHKYICe4nagj',
    descriptionEn: 'VAC IQF produce uses cryogenic fluidised bed freezing at -35°C to quickly freeze individual fruit and vegetable pieces, preventing large ice crystal formation and cell wall damage. Resulting in free-flowing frozen ingredients that allow exact industrial portioning without thawing the entire bulk package.',
    descriptionVi: 'Nông sản IQF VAC sử dụng công nghệ cấp đông băng chuyền siêu tốc ở -35°C để làm đông lạnh nhanh từng mảnh trái cây/rau củ riêng biệt, ngăn chặn hình thành tinh thể đá lớn làm vỡ tế bào. Sản phẩm tơi rời giúp các nhà máy chế biến định lượng chính xác mà không cần rã đông cả thùng.',
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
    availableCutsEn: ['Dice (10x10mm, 15x15mm, 20x20mm)', 'Slices / Strips', 'Halves & Segments', 'Whole / Seedless', 'Frozen Puree/Pulp Blocks'],
    availableCutsVi: ['Hạt lựu (10x10mm, 15x15mm, 20x20mm)', 'Thái lát / Dải dài', 'Nửa quả & Múi', 'Nguyên quả / Bỏ hạt', 'Khối Puree/Thịt quả đông lạnh'],
    defaultPackagingEn: '10kg / 15kg Blue PE Bag inside Heavy-Duty Export Carton or 1000kg Octabin',
    defaultPackagingVi: 'Túi PE xanh chuyên dụng lót trong thùng carton 10kg/15kg hoặc Octabin 1000kg',
    storageEn: 'Deep frozen at -18°C or lower continuous storage',
    storageVi: 'Trạng thái cấp đông sâu tại -18°C hoặc thấp hơn liên tục'
  }
};

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'fresh-cavendish-banana',
    nameEn: 'Fresh Cavendish Banana',
    nameVi: 'Chuối Cavendish Tươi Xuất Khẩu',
    scientificName: 'Musa acuminata (Cavendish Group)',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-red-dragon-fruit',
    nameEn: 'Fresh Red Dragon Fruit',
    nameVi: 'Thanh Long Ruột Đỏ Tươi',
    scientificName: 'Hylocereus costaricensis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-watermelon',
    nameEn: 'Fresh Seedless Watermelon',
    nameVi: 'Dưa Hấu Không Hạt Tươi',
    scientificName: 'Citrullus lanatus',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-custard-apple',
    nameEn: 'Fresh Custard Apple (Sugar Apple)',
    nameVi: 'Mãng Cầu Ta (Na) Tươi',
    scientificName: 'Annona squamosa',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    scientificName: 'Annona muricata',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-acerola-cherry',
    nameEn: 'Fresh Acerola Cherry',
    nameVi: 'Sơ Ri Tươi',
    scientificName: 'Malpighia emarginta',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-persimmon',
    nameEn: 'Fresh Persimmon',
    nameVi: 'Hồng Tươi Đà Lạt',
    scientificName: 'Diospyros kaki',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-guava',
    nameEn: 'Fresh Pink / White Guava',
    nameVi: 'Ổi Ruột Hồng / Trắng Tươi',
    scientificName: 'Psidium guajava',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-star-apple',
    nameEn: 'Fresh Star Apple (Vú Sữa)',
    nameVi: 'Vú Sữa Lò Rèn / Hoàng Kim Tươi',
    scientificName: 'Chrysophyllum cainito',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-papaya',
    nameEn: 'Fresh Red Flesh Papaya',
    nameVi: 'Đu Đủ Ruột Đỏ Tươi',
    scientificName: 'Carica papaya',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-mangosteen',
    nameEn: 'Fresh Mangosteen',
    nameVi: 'Măng Cụt Tươi',
    scientificName: 'Garcinia mangostana',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-coconut',
    nameEn: 'Fresh Young Diamond Coconut',
    nameVi: 'Dừa Xiêm Xanh Gọt Kim Cương Tươi',
    scientificName: 'Cocos nucifera',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-mango',
    nameEn: 'Fresh Cat Chu / R2E2 Mango',
    nameVi: 'Xoài Cát Chu / R2E2 Tươi Xuất Khẩu',
    scientificName: 'Mangifera indica',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-ginger',
    nameEn: 'Fresh Yellow Ginger',
    nameVi: 'Gừng Tươi Già Xuất Khẩu',
    scientificName: 'Zingiber officinale',
    category: 'fresh',
    subCategory: 'Culinary Crops',
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
    scientificName: 'Allium sativum',
    category: 'fresh',
    subCategory: 'Culinary Crops',
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
    id: 'fresh-lime',
    nameEn: 'Fresh Seedless Lime',
    nameVi: 'Chanh Không Hạt Tươi Xuất Khẩu',
    scientificName: 'Citrus latifolia',
    category: 'fresh',
    subCategory: 'Culinary Crops',
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
    id: 'fresh-purple-sweet-potato',
    nameEn: 'Fresh Purple Sweet Potato',
    nameVi: 'Khoai Lang Tím Nhật Tươi',
    scientificName: 'Ipomoea batatas',
    category: 'fresh',
    subCategory: 'Root Vegetables',
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
    id: 'fresh-chili',
    nameEn: 'Fresh Bird Eye / Red Chili',
    nameVi: 'Ớt Chỉ Thiên / Ớt Sừng Tươi',
    scientificName: 'Capsicum frutescens',
    category: 'fresh',
    subCategory: 'Culinary Crops',
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
    id: 'fresh-cashew',
    nameEn: 'Fresh Cashew',
    nameVi: 'Trái / Hạt Điều Tươi',
    scientificName: 'Anacardium occidentale',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-onion',
    nameEn: 'Fresh Onion',
    nameVi: 'Hành Tây Tươi',
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
    id: 'fresh-galangal',
    nameEn: 'Fresh Galangal',
    nameVi: 'Củ Riềng Tươi',
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
    id: 'fresh-shallot',
    nameEn: 'Fresh Red Shallot',
    nameVi: 'Hành Tím Tươi',
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
    id: 'fresh-carrot',
    nameEn: 'Fresh Carrot',
    nameVi: 'Cà Rốt Tươi',
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
    id: 'fresh-sugarcane',
    nameEn: 'Fresh Sugarcane',
    nameVi: 'Mía Tươi',
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
    id: 'fresh-lemongrass',
    nameEn: 'Fresh Lemongrass',
    nameVi: 'Sả Tươi',
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
    id: 'fresh-tomato',
    nameEn: 'Fresh Tomato',
    nameVi: 'Cà Chua Tươi',
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
    id: 'fresh-turmeric',
    nameEn: 'Fresh Yellow / Red Turmeric',
    nameVi: 'Nghệ Vàng / Nghệ Nếp Tươi',
    scientificName: 'Curcuma longa',
    category: 'fresh',
    subCategory: 'Culinary Crops',
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
    id: 'powder-fd-passion-fruit',
    nameEn: 'Freeze-Dried Passion Fruit Powder',
    nameVi: 'Bột Chanh Dây Sấy Thăng Hoa',
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
    id: 'fresh-rambutan',
    nameEn: 'Fresh Rambutan',
    nameVi: 'Chôm Chôm Tươi',
    scientificName: 'Nephelium lappaceum',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-strawberry',
    nameEn: 'Fresh Da Lat Strawberry',
    nameVi: 'Dâu Tây Đà Lạt Tươi',
    scientificName: 'Fragaria × ananassa',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-lychee',
    nameEn: 'Fresh Thieu Lychee',
    nameVi: 'Vải Thiều Tươi',
    scientificName: 'Litchi chinensis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    scientificName: 'Dimocarpus longan',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-sapodilla',
    nameEn: 'Fresh Sapodilla (Sapotche)',
    nameVi: 'Hồng Xiêm Tươi',
    scientificName: 'Manilkara zapota',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-melon',
    nameEn: 'Fresh Cantaloupe Melon',
    nameVi: 'Dưa Lưới Tươi',
    scientificName: 'Cucumis melo',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-banana',
    nameEn: 'Fresh Cavendish Banana',
    nameVi: 'Chuối Laba / Cavendish Tươi',
    scientificName: 'Musa acuminata',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
    formats: ['Hands (4-6 fingers)', 'Grade A'],
    specifications: {
      brix: '18 - 22°',
      shelfLife: '35 - 40 days (Green stage)',
      storage: '+13°C to +14°C',
      packaging: '13.5kg / 18kg Vacuum Bag Carton'
    },
    applications: ['Fresh Retail', 'Ripening Centers'],
    seasonality: 'Year-round',
    image: '/images/products/fresh/fresh_banana.png'
  },
{
    id: 'fresh-pineapple',
    nameEn: 'Fresh MD2 Pineapple',
    nameVi: 'Dứa / Thơm MD2 Tươi',
    scientificName: 'Ananas comosus',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-king-orange',
    nameEn: 'Fresh King Orange',
    nameVi: 'Cam Sành Tươi',
    scientificName: 'Citrus nobilis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    scientificName: 'Citrus reticulata',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-avocado',
    nameEn: 'Fresh Hass / 034 Avocado',
    nameVi: 'Bơ 034 / Hass Tươi',
    scientificName: 'Persea americana',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-jackfruit',
    nameEn: 'Fresh Red Flesh Jackfruit',
    nameVi: 'Mít Ruột Đỏ Tươi',
    scientificName: 'Artocarpus heterophyllus',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-durian',
    nameEn: 'Fresh Ri6 / Monthong Durian',
    nameVi: 'Sầu Riêng Ri6 / Monthong Tươi',
    scientificName: 'Durio zibethinus',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-pomelo',
    nameEn: 'Fresh Green Skin Pomelo',
    nameVi: 'Bưởi Da Xanh Tươi',
    scientificName: 'Citrus grandis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-rose-apple',
    nameEn: 'Fresh Rose Apple (Wax Apple)',
    nameVi: 'Mận An Phước Tươi',
    scientificName: 'Syzygium samarangense',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-passion-fruit',
    nameEn: 'Fresh Purple Passion Fruit',
    nameVi: 'Chanh Dây Tím Tươi',
    scientificName: 'Passiflora edulis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'fresh-gac-fruit',
    nameEn: 'Fresh Gac Fruit',
    nameVi: 'Quả Gấc Tươi',
    scientificName: 'Momordica cochinchinensis',
    category: 'fresh',
    subCategory: 'Tropical Fruits',
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
    id: 'powder-fd-lychee',
    nameEn: 'Freeze-Dried Lychee Powder',
    nameVi: 'Bột Vải Sấy Thăng Hoa',
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
  }
];

export const CATALOGUES_LIST: CatalogueInfo[] = [
  {
    id: 'cat-harvest-edition-2026',
    titleEn: 'VAC Complete Product Catalogue 2026 (Harvest Edition)',
    titleVi: 'Catalogue Tổng Tập Nông Sản VietAgri 2026 (Harvest Edition)',
    category: 'Complete Master Portfolio',
    pageCount: 16,
    fileSize: '34.9 MB',
    fileName: 'VAC_Product_Catalogue_2026_Harvest_Edition.pdf',
    downloadUrl: '/catalogues/VAC_Product_Catalogue_2026_Harvest_Edition.pdf',
    driveId: '1U70DJaj_9dWtu6jSr9sZmsxNeBO-7jAF',
    coverImage: '/images/products/IMG_7966.PNG',
    descEn: 'Comprehensive guide covering all 4 processing formats: Fresh Produce, Fruit & Vegetable Powders, Freeze-Dried Fruits, and IQF Frozen Produce alongside Viet Wolffia and Organic Inputs.',
    descVi: 'Tài liệu tổng hợp toàn bộ 4 định dạng chế biến nông sản: Nông sản tươi, Bột trái cây & rau củ, Trái cây sấy thăng hoa và Cấp đông IQF cùng siêu thực phẩm Việt Wolffia & Phân bón hữu cơ.'
  },
  {
    id: 'cat-fresh-2026',
    titleEn: 'Fresh Fruits & Vegetables Catalogue 2026',
    titleVi: 'Catalogue Trái Cây & Rau Củ Tươi Xuất Khẩu 2026',
    category: 'Fresh Produce',
    pageCount: 12,
    fileSize: '31.1 MB',
    fileName: 'VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    downloadUrl: '/catalogues/VAC_Fresh_Fruits_Vegetables_Catalogue_2026.pdf',
    driveId: '1N9T754XJ1-0x9HT5p8hBhvb9hV3N3-bP',
    coverImage: '/images/products/IMG_7967.JPG',
    descEn: 'Export-grade Vietnamese fresh fruits, root vegetables, and culinary crops with seasonal calendars, caliber specifications, and post-harvest cold chain management.',
    descVi: 'Trái cây tươi xuất khẩu, củ quả và gia vị nhiệt đới Việt Nam kèm lịch thu hoạch theo mùa, tiêu chuẩn phân loại size và quy trình bảo quản chuỗi lạnh xuất khẩu.'
  },
  {
    id: 'cat-powders-2026',
    titleEn: 'Fruit & Vegetable Powders Product Catalogue 2026',
    titleVi: 'Catalogue Bột Trái Cây & Rau Củ Thực Phẩm 2026',
    category: 'Food Ingredients & Extracts',
    pageCount: 12,
    fileSize: '25.0 MB',
    fileName: 'VAC_Powders_Product_Catalogue_2026-5.pdf',
    downloadUrl: '/catalogues/VAC_Powders_Product_Catalogue_2026-5.pdf',
    driveId: '1HdqV7OvaVWPwKMaf4u2pwMnQuS9bZ6mT',
    coverImage: '/images/products/coffee_cacao.png',
    descEn: 'Technical specifications for Freeze-Dried Powders, Tropical Powder Collection, Dehydrated Powders, and 100% Water Soluble Extract Powders for F&B and Nutraceuticals.',
    descVi: 'Thông số kỹ thuật chi tiết cho Bột sấy thăng hoa, Bộ sưu tập bột nông sản nhiệt đới, Bột sấy lạnh và Bột chiết xuất hòa tan 100% chuyên dụng cho F&B và Dược phẩm.'
  },
  {
    id: 'cat-freeze-dried-2026',
    titleEn: 'Freeze-Dried Fruits Product Catalogue 2026',
    titleVi: 'Catalogue Trái Cây Sấy Thăng Hoa 2026',
    category: 'Sublimation Dried Fruits',
    pageCount: 6,
    fileSize: '10.6 MB',
    fileName: 'VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    downloadUrl: '/catalogues/VAC_Freeze_Dried_Fruits_Catalogue_2026-1.pdf',
    driveId: '1jPaTPhfWrBV9DBNz_5Iyp9pt_EtB_UfU',
    coverImage: '/images/products/IMG_7958.JPG',
    descEn: 'Sublimation vacuum freeze-dried fruits with crispy texture, moisture under 5%, preserving 98%+ nutrients in Whole, Slices, Dices, and Crisps forms.',
    descVi: 'Trái cây sấy thăng hoa chân không giữ trọn 98% dinh dưỡng, cấu trúc giòn xốp thơm ngon với độ ẩm dưới 5% dạng Nguyên quả, Lát, Hạt lựu và Crisps.'
  },
  {
    id: 'cat-iqf-2026',
    titleEn: 'IQF Fruits & Vegetables Product Catalogue 2026',
    titleVi: 'Catalogue Trái Cây & Rau Củ Cấp Đông IQF 2026',
    category: 'Individually Quick-Frozen',
    pageCount: 6,
    fileSize: '12.0 MB',
    fileName: 'VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    downloadUrl: '/catalogues/VAC_IQF_Fruits_Vegetables_Catalogue_2026-1.pdf',
    driveId: '1G2bwMHCCkACltg-6l6RwoHKYICe4nagj',
    coverImage: '/images/products/IMG_7960.JPG',
    descEn: 'Cryogenic IQF frozen fruits and vegetables (-35°C freezing, -18°C storage) in free-flowing Dices, Slices, Halves, and Puree blocks for industrial food manufacturing.',
    descVi: 'Nông sản cấp đông siêu tốc IQF (-35°C) tơi rời dạng Hạt lựu, Lát, Nửa quả và Khối Puree phục vụ nhà máy chế biến thực phẩm và chuỗi HORECA.'
  }
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
  }
];

export function getProductsByCategory(category: string): ProductItem[] {
  return PRODUCTS_LIST.filter(p => p.category === category);
}

export function getCategoryInfo(slugOrId: string): CategoryInfo | undefined {
  for (const cat of Object.values(CATEGORIES_DATA)) {
    if (cat.id === slugOrId || cat.slug === slugOrId) {
      return cat;
    }
  }
  return undefined;
}
