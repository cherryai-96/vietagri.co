// Helper utility functions and mappings for translation of subcategories, formats, and specifications

export const subCategoryZhMap: Record<string, string> = {
  'Fruits': '新鲜水果',
  'Vegetables & Spices': '蔬菜与香料',
  'Fruit Purees': '果浆系列',
  'Natural Juices': '原汁系列',
  'Juice Concentrates': '浓缩汁系列',
  'Freeze-Dried Powder': '冻干纯粉',
  'Freeze-Dried Powders': '冻干纯粉系列',
  'Powder Collection': '综合果蔬粉',
  'Dehydrated Powder': '热风脱水粉',
  'Dehydrated Powders': '热风脱水粉系列',
  'Extract Powder': '水溶萃取粉',
  'Extract Powders': '水溶萃取粉系列',
  'Chicken Cuts': '鸡肉分割部位',
  'Halal Chicken': '清真鸡肉',
  'Chicken Offal': '鸡副产品',
  'Processed & Value-Added': '深加工与调味系列',
  'Basa Fillet': '巴沙鱼柳',
  'Whole & H&G Basa': '原条与去头巴沙鱼',
  'Value-Added Basa': '深加工巴沙鱼',
  'Vannamei Shrimp': '南美白对虾',
  'Black Tiger Shrimp': '黑虎虾/草虾',
  'Value-Added Shrimp': '深加工虾类',
  'Whole Squid': '原条鱿鱼',
  'Squid Cuts & Rings': '鱿鱼圈与切块',
  'Value-Added Squid': '深加工鱿鱼'
};

export const subCategoryViMap: Record<string, string> = {
  'Fruits': 'Trái Cây Tươi',
  'Vegetables & Spices': 'Rau Củ & Gia Vị',
  'Fruit Purees': 'Puree Trái Cây',
  'Natural Juices': 'Nước Ép Nguyên Chất',
  'Juice Concentrates': 'Nước Ép Đậm Đặc',
  'Freeze-Dried Powder': 'Bột Sấy Thăng Hoa',
  'Freeze-Dried Powders': 'Bột Sấy Thăng Hoa',
  'Powder Collection': 'Bột Nông Sản Tổng Hợp',
  'Dehydrated Powder': 'Bột Sấy Nhiệt',
  'Dehydrated Powders': 'Bột Sấy Nhiệt',
  'Extract Powder': 'Bột Chiết Xuất',
  'Extract Powders': 'Bột Chiết Xuất',
  'Chicken Cuts': 'Thịt Gà Cắt Khớp',
  'Halal Chicken': 'Thịt Gà Halal',
  'Chicken Offal': 'Phụ Phẩm Gà',
  'Processed & Value-Added': 'Chế Biến Sâu & Gia Trị Gia Tăng',
  'Basa Fillet': 'Cá Tra Basa Phi Lê',
  'Whole & H&G Basa': 'Cá Tra Nguyên Con & Bỏ Đầu',
  'Value-Added Basa': 'Cá Basa Chế Biến Sẵn',
  'Vannamei Shrimp': 'Tôm Thẻ Chân Trắng',
  'Black Tiger Shrimp': 'Tôm Sú',
  'Value-Added Shrimp': 'Tôm Chế Biến Sẵn',
  'Whole Squid': 'Mực Nguyên Con',
  'Squid Cuts & Rings': 'Mực Khoanh & Cắt Dải',
  'Value-Added Squid': 'Mực Chế Biến Sẵn'
};

export const formatZhMap: Record<string, string> = {
  '100 Mesh Fine Powder': '100目细粉',
  '80-100 Mesh': '80-100目细粉',
  'Soluble Grade': '速溶级',
  '100 Mesh High Lipid Powder': '100目高脂粉',
  '100% Pure Ri6 Durian Powder': '100%纯Ri6榴莲粉',
  'Frozen Seedless Puree': '冷冻无核果泥',
  'Aseptic Puree': '无菌装果泥',
  'Smooth Puree (Hass / 034 Variety)': '细腻果泥 (Hass/034)',
  'Pulp Chunk': '果肉颗粒',
  'Seed-in Puree': '带籽果泥',
  'Filtered Seedless Puree': '过滤无核果泥',
  'Raw Single-Strength Juice': '原榨单倍浓度汁',
  'Aseptic Drum Juice': '无菌大桶汁',
  'Single-Strength Juice': '原榨单倍汁',
  'Clear Juice': '澄清汁',
  '60-65 Brix Concentrate': '60-65 Brix 浓缩汁',
  '50 Brix Concentrate': '50 Brix 浓缩汁',
  '28-30 Brix Aseptic Puree': '28-30 Brix 无菌果泥',
  'Aseptic Drum': '无菌大桶装',
  'Whole Fruit': '整果',
  'Fine Powder (80-100 Mesh)': '80-100目细粉',
  'Freeze-Dried Slices / Cubes': '冻干切片/切块',
  'IQF Frozen Produce': 'IQF 速冻果蔬'
};

export const translateSubCategory = (sub: string | undefined, lang: string, fallbackDefault?: string): string => {
  if (!sub) return fallbackDefault || (lang === 'vi' ? 'Sản Phẩm' : lang === 'zh' ? '产品' : 'Products');
  if (lang === 'zh') return subCategoryZhMap[sub] || sub;
  if (lang === 'vi') return subCategoryViMap[sub] || sub;
  return sub;
};

export const translateFormat = (fmt: string, lang: string): string => {
  if (lang === 'zh') return formatZhMap[fmt] || fmt;
  return fmt;
};

export const translateShelfLife = (life: string | undefined, lang: string): string => {
  if (!life) return '';
  if (lang === 'zh') {
    return life
      .replace(/24 months \(Frozen -18°C\)/g, '-18°C 冷冻保质 24 个月')
      .replace(/24 months/g, '保质期 24 个月')
      .replace(/18 months under vacuum/g, '真空密封保质 18 个月')
      .replace(/12 months/g, '保质期 12 个月')
      .replace(/36 months/g, '保质期 36 个月')
      .replace(/at -18°C/g, '在 -18°C 环境下');
  }
  return life;
};
