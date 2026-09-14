import sys
import os

products_file = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'

with open(products_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert 'purees' into CATEGORIES_DATA after 'iqf'
puree_cat_str = """  'purees': {
    id: 'purees',
    slug: 'fruit-purees',
    titleEn: 'Fruit Purees & Concentrates',
    titleVi: 'Trái Cây Xay Nhuyễn & Nước Ép Đậm Đặc (Puree & Concentrate)',
    subtitleEn: '100% Pure Natural Fruit Purees, Juices & Concentrates for F&B Industrial Processing',
    subtitleVi: 'Nông Sản Xay Nhuyễn & Nước Ép Tự Nhiên 100% Phục Vụ Chế Biến Công Nghiệp & Đồ Uống',
    heroImage: '/images/products/puree/puree_mango.png',
    catalogueFileName: 'VAC_IQF_Puree_Catalogue_2026.pdf',
    catalogueDriveId: '1o3DgzPTqN9fjnEEsuFG-YnNzkG_A2aRj',
    descriptionEn: 'VAC Fruit Purees and Concentrates are crafted from selected fresh tropical fruits harvested at peak ripeness in Vietnam. Processed under aseptic cold-crushing and thermal flash pasteurisation systems, our purees retain vibrant natural colour, rich aroma, smooth texture, and bio-nutrients without artificial flavours, preservatives, or added sugar.',
    descriptionVi: 'Trái cây xay nhuyễn (Puree) và Nước ép đậm đặc VAC được sản xuất từ 100% trái cây tươi nhiệt đới thu hoạch đúng độ chín tại Việt Nam. Xử lý bằng hệ thống nghiền lạnh vô trùng và thanh trùng siêu tốc, giữ trọn màu sắc tươi sáng, hương vị đậm đà, độ mịn mượt tự nhiên và dưỡng chất quý giá mà không bổ sung đường, hương liệu hay chất bảo quản.',
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
    defaultPackagingEn: '20kg Aseptic Bag in Box, 200kg Aseptic Steel Drum, or 10kg Vacuum Pouch',
    defaultPackagingVi: 'Túi vô trùng Aseptic 20kg đóng hộp Carton, Phuy thép vô trùng 200kg, hoặc Túi chân không 10kg',
    storageEn: 'Deep freeze at -18°C for Purees, or Chilled/Ambient for Aseptic Packaging',
    storageVi: 'Cấp đông sâu -18°C đối với Puree đông lạnh, hoặc bảo quản mát/thường đối với hàng Aseptic'
  },"""

if "'purees': {" not in content:
    target_iqf = "    storageVi: 'Trạng thái cấp đông sâu tại -18°C hoặc thấp hơn liên tục'\n  },"
    if target_iqf in content:
        content = content.replace(target_iqf, target_iqf + "\n" + puree_cat_str)
        print("Inserted purees into CATEGORIES_DATA")

# 2. Insert Puree products into PRODUCTS_LIST before PRODUCTS_LIST ends
puree_products_str = """  // === PUREE, JUICE & CONCENTRATE PRODUCTS ===
  {
    id: 'puree-durian',
    nameEn: 'Frozen Durian Puree (Seedless)',
    nameVi: 'Puree Sầu Riêng Đông Lạnh (Bỏ Hạt)',
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
  }"""

if "'puree-durian'" not in content:
    target_butterfly = "    image: '/images/products/powders/powders_butterfly_pea_flower.png'\n  }\n];"
    if target_butterfly in content:
        content = content.replace(target_butterfly, "    image: '/images/products/powders/powders_butterfly_pea_flower.png'\n  },\n" + puree_products_str + "\n];")
        print("Inserted Puree products into PRODUCTS_LIST")

# 3. Insert into CATALOGUES_LIST
puree_catalogue_str = """  {
    id: 'cat-purees-2026',
    titleEn: 'Fruit Purees & Concentrates Catalogue 2026',
    titleVi: 'Catalogue Trái Cây Xay Nhuyễn & Nước Ép Đậm Đặc 2026',
    category: 'Purees & Concentrates',
    pageCount: 8,
    fileSize: '18.5 MB',
    fileName: 'VAC_IQF_Puree_Catalogue_2026.pdf',
    downloadUrl: '/catalogues/VAC_IQF_Puree_Catalogue_2026.pdf',
    driveId: '1o3DgzPTqN9fjnEEsuFG-YnNzkG_A2aRj',
    coverImage: '/images/products/puree/puree_mango.png',
    descEn: 'Aseptic frozen fruit purees, seedless pulps, single-strength juices, and high-Brix concentrates for F&B industrial processing.',
    descVi: 'Puree trái cây cấp đông vô trùng, thịt quả bỏ hạt, nước ép nguyên chất và nước ép đậm đặc Brix cao cho ngành chế biến F&B công nghiệp.'
  },"""

if "'cat-purees-2026'" not in content:
    target_iqf_cat = "    descVi: 'Nông sản cấp đông siêu tốc IQF (-35°C) tơi rời dạng Hạt lựu, Lát, Nửa quả và Khối Puree phục vụ nhà máy chế biến thực phẩm và chuỗi HORECA.'\n  }\n];"
    if target_iqf_cat in content:
        content = content.replace(target_iqf_cat, "    descVi: 'Nông sản cấp đông siêu tốc IQF (-35°C) tơi rời dạng Hạt lựu, Lát, Nửa quả và Khối Puree phục vụ nhà máy chế biến thực phẩm và chuỗi HORECA.'\n  },\n" + puree_catalogue_str + "\n];")
        print("Inserted Puree catalogue into CATALOGUES_LIST")

# 4. Insert into FORMAT_COMPARISONS
puree_format_str = """  {
    formatKey: 'purees',
    titleEn: 'Fruit Purees & Concentrates',
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
  },"""

if "formatKey: 'purees'" not in content:
    target_iqf_format = "    link: '/products/iqf-fruits-vegetables'\n  }\n];"
    if target_iqf_format in content:
        content = content.replace(target_iqf_format, "    link: '/products/iqf-fruits-vegetables'\n  },\n" + puree_format_str + "\n];")
        print("Inserted Puree format comparison into FORMAT_COMPARISONS")

# 5. Update getProductsByCategory and getCategoryInfo
cat_fn_str = """  if (norm === 'purees' || norm === 'fruit-purees' || norm === 'puree-products') {
    return PRODUCTS_LIST.filter(p => p.category === 'purees');
  }"""

if "norm === 'fruit-purees'" not in content:
    target_poultry_fn = "  if (norm === 'poultry' || norm === 'poultry-products') {\n    return PRODUCTS_LIST.filter(p => p.category === 'poultry');\n  }"
    if target_poultry_fn in content:
        content = content.replace(target_poultry_fn, target_poultry_fn + "\n" + cat_fn_str)

    target_poultry_info = "  if (norm === 'poultry' || norm === 'poultry-products') {\n    return CATEGORIES_DATA['poultry'];\n  }"
    cat_info_str = """  if (norm === 'purees' || norm === 'fruit-purees' || norm === 'puree-products') {
    return CATEGORIES_DATA['purees'];
  }"""
    if target_poultry_info in content:
        content = content.replace(target_poultry_info, target_poultry_info + "\n" + cat_info_str)
        print("Updated getProductsByCategory and getCategoryInfo")

with open(products_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished updating products.ts!")
