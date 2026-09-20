import re

# Comprehensive B2B Chinese translations mapping for all 166 products
ZH_NAME_MAP = {
    # === POULTRY (15) ===
    'poultry-halal-whole-chicken': '清真整鸡 (去内脏·烧烤级)',
    'poultry-whole-chicken': '冷冻常规整鸡 (去内脏·烧烤级)',
    'poultry-boneless-breast-fillet': '无骨无皮鸡胸肉排 (Fillet)',
    'poultry-bone-in-breast': '带骨带皮鸡胸肉',
    'poultry-leg-quarters': '冷冻大鸡腿/四分之一后腿 (Leg Quarters)',
    'poultry-thighs': '冷冻鸡琵琶腿/鸡腿肉 (带骨/无骨)',
    'poultry-drumsticks': '冷冻小鸡腿/鸡棒腿 (Drumsticks)',
    'poultry-chicken-wings': '冷冻全鸡翅 (三节翅)',
    'poultry-wing-portions': '冷冻切段鸡翅 (翅中 & 翅根)',
    'poultry-chicken-feet-paws': '出口级冷冻鸡爪 & 鸡掌 (Feet & Paws)',
    'poultry-gizzard-liver-heart': '冷冻鸡杂 (鸡菫·鸡肝·鸡心)',
    'poultry-chicken-necks': '冷冻鸡脖',
    'poultry-nuggets-patties': '裹粉鸡块 & 鸡肉汉堡饼 (Nuggets & Patties)',
    'poultry-sausages-breaded': '鸡肉香肠 & 炸鸡系列',
    'poultry-marinated-ready-to-cook': '调味腌制即烹鸡肉系列',

    # === BASA (13) ===
    'basa-well-trimmed-fillet': '巴沙鱼柳 (精精修·去皮去骨去红肉)',
    'basa-untrimmed-fillet': '巴沙鱼柳 (带脂肪·未精修/半精修)',
    'basa-whole-round': '冷冻整条巴沙鱼 (原条)',
    'basa-headed-gutted': '冷冻去头去内脏巴沙鱼 (H&G)',
    'basa-steak-cuts': '冷冻巴沙鱼切段/鱼块 (Steak)',
    'basa-loin-portions': '巴沙鱼腰肉切块 (Loin Portions)',
    'basa-cubes-portions': '冷冻巴沙鱼丁/鱼块 (Cubes)',
    'basa-belly-strips': '冷冻巴沙鱼肚条 (Belly Strips)',
    'basa-breaded-fillet': '裹粉炸巴沙鱼柳 (Breaded Fillet)',
    'basa-battered-portions': '挂浆炸巴沙鱼块 (Battered Portions)',
    'basa-fish-fingers': '香酥巴沙鱼条 (Fish Fingers)',
    'basa-marinated-cubes': '调味腌制巴沙鱼丁',
    'basa-marinated-fillets': '调味腌制巴沙鱼柳',

    # === SHRIMP (12) ===
    'shrimp-vannamei-hoso': '南美白对虾 HOSO (带头带壳)',
    'shrimp-vannamei-hlso': '南美白对虾 HLSO (无头带壳)',
    'shrimp-vannamei-pdto': '南美白对虾 PDTO (去壳去肠线留尾)',
    'shrimp-vannamei-pd-pud': '南美白对虾 P&D / PUD (去壳去肠线不留尾)',
    'shrimp-cooked-cocktail': '熟制冷冻鸡尾虾仁 (Cooked Cocktail)',
    'shrimp-butterfly-cut': '蝴蝶开背虾仁 (Butterfly Cut)',
    'shrimp-black-tiger-hoso': '黑虎虾/草虾 HOSO (带头带壳)',
    'shrimp-black-tiger-pdto': '黑虎虾/草虾 PDTO (去壳去肠线留尾)',
    'shrimp-breaded-tempura': '天妇罗裹粉日式虾 (Breaded Tempura)',
    'shrimp-nobashi-ebi': '日式延长拉伸虾 (Nobashi Ebi)',
    'shrimp-skewers-marinated': '调味腌制海鲜虾串 (Shrimp Skewers)',
    'shrimp-paste-value-added': '特级高纯度虾滑/虾膏 (Shrimp Paste)',

    # === SQUID (11) ===
    'squid-whole-round': '野生海洋原条鱿鱼 (Whole Round)',
    'squid-whole-cleaned': '野生海洋去内脏清理鱿鱼 (Whole Cleaned)',
    'squid-skinless-tubes': '冷冻无皮鱿鱼胴体/鱿鱼筒 (Squid Tubes)',
    'squid-iqf-rings': 'IQF 速冻鱿鱼圈 (生鲜/烫熟)',
    'squid-cleaned-tentacles': '冷冻清理鱿鱼须 (Squid Tentacles)',
    'squid-tube-tentacles': '冷冻鱿鱼筒带须组合 (T+T)',
    'squid-pineapple-cut': '凤尾/菠萝花切花鱿鱼块 (Pineapple Cut)',
    'squid-strips-cuts': '冷冻鱿鱼条/鱿鱼丝 (Squid Strips)',
    'squid-breaded-rings': '裹粉炸鱿鱼圈 (Breaded Rings)',
    'squid-marinated-ready': '调味腌制即烹鱿鱼切块',
    'squid-stuffing-tubes': '馅料填充冷冻鱿鱼筒',

    # === FRESH FRUITS & VEGETABLES (44) ===
    'fresh-cavendish-banana': '出口级卡文迪许香蕉 (鲜果)',
    'fresh-mango': '越南 Cat Chu / R2E2 芒果 (鲜果)',
    'fresh-pomelo': '越南红心绿皮柚 (鲜果)',
    'fresh-durian': '越南 Ri6 / Monthong 金枕头榴莲 (鲜果)',
    'fresh-red-dragon-fruit': '越南红心火龙果 (鲜果)',
    'fresh-white-dragon-fruit': '越南白心火龙果 (鲜果)',
    'fresh-passion-fruit': '越南紫香百香果 (鲜果)',
    'fresh-soursop': '越南刺果番荔枝/刺梨 (鲜果)',
    'fresh-rambutan': '越南红毛丹 (鲜果)',
    'fresh-longan': '越南龙眼/桂圆 (鲜果)',
    'fresh-lychee': '越南海阳/北江荔枝 (鲜果)',
    'fresh-mangosteen': '越南特级山竹 (鲜果)',
    'fresh-jackfruit': '越南干苞黄肉木菠萝/菠萝蜜 (鲜果)',
    'fresh-papaya': '越南红肉木瓜 (鲜果)',
    'fresh-pineapple': '越南 Queen 皇后菠萝 (鲜果)',
    'fresh-lime': '越南无籽青檬/青柠檬 (鲜果)',
    'fresh-kumquat': '越南金桔/金柑 (鲜果)',
    'fresh-coconut': '越南暹罗香水椰青 (鲜果)',
    'fresh-guava': '越南红心/白心珍珠番石榴 (鲜果)',
    'fresh-star-fruit': '越南甜杨桃 (鲜果)',
    'fresh-sapodilla': '越南人心果 (鲜果)',
    'fresh-custard-apple': '越南释迦果/番荔枝 (鲜果)',
    'fresh-avocado': '越南 034 / Hass 牛油果 (鲜果)',
    'fresh-chili': '越南指天椒/红小天椒 (鲜辣椒)',
    'fresh-ginger': '越南老黄姜 (鲜姜)',
    'fresh-turmeric': '越南黄姜/郁金 (鲜姜)',
    'fresh-garlic': '越南单头紫皮大蒜 (鲜蒜)',
    'fresh-shallot': '越南红葱头 (鲜葱头)',
    'fresh-lemongrass': '越南香茅草 (鲜香茅)',
    'fresh-galangal': '越南高良姜/南姜 (鲜姜)',
    'fresh-sweet-potato': '越南紫薯/日本红薯 (鲜薯)',
    'fresh-taro': '越南槟榔芋/小芋头 (鲜芋)',
    'fresh-cassava': '越南木薯/树薯 (鲜薯)',
    'fresh-lotus-root': '越南九孔白莲藕 (鲜藕)',
    'fresh-lotus-seed': '越南鲜莲子 (剥壳)',
    'fresh-baby-corn': '越南特级鲜嫩玉米笋 (鲜笋)',
    'fresh-okra': '越南秋葵/黄秋葵 (鲜果)',
    'fresh-bitter-melon': '越南苦瓜/凉瓜 (鲜果)',
    'fresh-eggplant': '越南长紫茄子 (鲜茄)',
    'fresh-pumpkin': '越南南瓜/蜜本南瓜 (鲜瓜)',
    'fresh-cabbage': '越南高丽菜/卷心菜 (鲜菜)',
    'fresh-carrot': '越南红萝卜/胡萝卜 (鲜菜)',
    'fresh-sweet-corn': '越南黄甜玉米 (鲜穗)',
    'fresh-green-beans': '越南四季豆/青刀豆 (鲜豆)',

    # === POWDERS (31) ===
    'powder-fd-passion-fruit': '冻干百香果纯粉 (Freeze-Dried)',
    'powder-fd-pink-guava': '冻干粉红番石榴粉 (Freeze-Dried)',
    'powder-fd-avocado': '冻干牛油果纯粉 (Freeze-Dried)',
    'powder-fd-durian': '冻干金枕头榴莲纯粉 (Freeze-Dried)',
    'powder-fd-coconut': '冻干椰浆粉/椰子奶粉 (Freeze-Dried)',
    'powder-fd-dragon-fruit': '冻干红心火龙果纯粉 (Freeze-Dried)',
    'powder-fd-mango': '冻干芒果纯粉 (Freeze-Dried)',
    'powder-fd-pineapple': '冻干菠萝纯粉 (Freeze-Dried)',
    'powder-fd-banana': '冻干香蕉纯粉 (Freeze-Dried)',
    'powder-fd-papaya': '冻干木瓜纯粉 (Freeze-Dried)',
    'powder-fd-soursop': '冻干刺果番荔枝纯粉 (Freeze-Dried)',
    'powder-spray-lime': '喷雾干燥青柠檬果汁粉 (Spray-Dried)',
    'powder-spray-calamansi': '喷雾干燥金桔果汁粉 (Spray-Dried)',
    'powder-spray-tamarind': '喷雾干燥酸豆/酸角粉 (Spray-Dried)',
    'powder-spray-watermelon': '喷雾干燥西瓜果汁粉 (Spray-Dried)',
    'powder-spray-sugarcane': '喷雾干燥甘蔗汁纯粉 (Spray-Dried)',
    'powder-hot-air-ginger': '热风干燥纯老姜粉 (Hot-Air Dried)',
    'powder-hot-air-turmeric': '热风干燥高纯度姜黄粉 (Hot-Air Dried)',
    'powder-hot-air-lemongrass': '热风干燥香茅纯粉 (Hot-Air Dried)',
    'powder-hot-air-garlic': '热风干燥蒜粉 (Hot-Air Dried)',
    'powder-hot-air-shallot': '热风干燥红葱头粉 (Hot-Air Dried)',
    'powder-hot-air-chili': '热风干燥指天椒辣椒粉 (Hot-Air Dried)',
    'powder-hot-air-cinnamon': '越南官桂肉桂纯粉 (Hot-Air Dried)',
    'powder-hot-air-star-anise': '越南八角茴香纯粉 (Hot-Air Dried)',
    'powder-hot-air-black-pepper': '越南黑胡椒细粉 (Hot-Air Dried)',
    'powder-hot-air-white-pepper': '越南白胡椒细粉 (Hot-Air Dried)',
    'powder-veg-moringa': '辣木叶超级食品纯粉 (Organic Moringa)',
    'powder-veg-kale': '羽衣甘蓝超级食品纯粉 (Kale Powder)',
    'powder-veg-spinach': '菠菜/菠菜绿叶纯粉 (Spinach Powder)',
    'powder-veg-purple-sweet-potato': '紫薯天然色素纯粉 (Purple Sweet Potato)',
    'powder-veg-matcha-pandan': '斑兰叶/香草兰绿叶纯粉 (Pandan Leaf Powder)',

    # === FREEZE-DRIED FRUITS (12) ===
    'fd-mangosteen': '冻干特级山竹块/山竹果肉 (Freeze-Dried)',
    'fd-longan': '冻干无核龙眼干/桂圆肉 (Freeze-Dried)',
    'fd-rambutan': '冻干无核红毛丹块 (Freeze-Dried)',
    'fd-lychee': '冻干无核荔枝果肉 (Freeze-Dried)',
    'fd-coconut': '冻干香酥椰子片 (Freeze-Dried)',
    'fd-durian': '冻干金枕头榴莲脆片/榴莲块 (Freeze-Dried)',
    'fd-mango': '冻干芒果脆片/芒果丁 (Freeze-Dried)',
    'fd-dragon-fruit': '冻干红心火龙果脆片/火龙果丁 (Freeze-Dried)',
    'fd-pineapple': '冻干菠萝扇块/菠萝丁 (Freeze-Dried)',
    'fd-banana': '冻干香蕉片/香蕉丁 (Freeze-Dried)',
    'fd-jackfruit': '冻干干苞木菠萝/菠萝蜜脆片 (Freeze-Dried)',
    'fd-papaya': '冻干木瓜脆丁 (Freeze-Dried)',

    # === IQF FRUITS & VEGETABLES (12) ===
    'iqf-strawberry': 'IQF 速冻草莓 (整果/切片)',
    'iqf-watermelon': 'IQF 速冻西瓜丁/西瓜块',
    'iqf-potato': 'IQF 速冻薯条/薯丁',
    'iqf-lychee': 'IQF 速冻无核去皮荔枝果肉',
    'iqf-corn': 'IQF 速冻黄甜玉米粒',
    'iqf-durian': 'IQF 速冻榴莲果肉 (带核/去核)',
    'iqf-mango': 'IQF 速冻芒果丁/切块/切片',
    'iqf-dragon-fruit': 'IQF 速冻火龙果丁 (红心/白心)',
    'iqf-pineapple': 'IQF 速冻菠萝扇块/菠萝丁',
    'iqf-passion-fruit': 'IQF 速冻百香果块 (带籽/去籽)',
    'iqf-avocado': 'IQF 速冻牛油果切块/半果',
    'iqf-tropic-mix': 'IQF 速冻热带混合水果块',

    # === FRUIT PUREES & JUICES (16) ===
    'puree-durian': '冷冻无核榴莲果泥 (Puree)',
    'puree-avocado': '冷冻牛油果泥/牛油果糊 (Puree)',
    'puree-red-dragon-fruit': '冷冻红心火龙果泥 (Puree)',
    'puree-soursop': '冷冻刺果番荔枝/刺梨果泥 (Puree/Pulp)',
    'puree-mango': '冷冻 Cat Chu 芒果泥 (Puree)',
    'puree-passion-fruit': '冷冻百香果原浆/原汁 (带籽/去籽)',
    'puree-pink-guava': '冷冻粉红番石榴果泥 (Puree)',
    'puree-pineapple': '冷冻菠萝浓缩汁/菠萝果泥',
    'puree-calamansi': '冷冻金桔原汁/金柑原浆',
    'puree-lime': '冷冻无籽青柠檬原汁/浓缩汁',
    'puree-coconut-water': '冷冻纯椰子水/浓缩椰子水',
    'puree-sugarcane': '冷冻纯鲜榨甘蔗汁',
    'puree-tamarind': '无菌装酸豆/酸角浓缩膏 (Concentrate)',
    'puree-banana': '冷冻/无菌装香蕉果泥 (Puree)',
    'puree-papaya': '冷冻红肉木瓜果泥 (Puree)',
    'puree-lychee': '冷冻荔枝原汁/荔枝果泥',

    # === MISSING SEAFOOD & SQUID & SHRIMP ===
    'shrimp-retail-assortment': '零售装冷冻混合海鲜虾 (Shrimp Assortment)',
    'squid-wings-strips': '冷冻鱿鱼翅/鱿鱼耳朵条 (Squid Wings)',
    'squid-fillet-pineapple-cut': '凤尾/菠萝花切花鱿鱼片 (Squid Fillet Pineapple Cut)',
    'squid-battered-strips': '挂浆炸鱿鱼条 (Battered Squid Strips)',
    'squid-grilled-portions': '日式照烧/炭烤鱿鱼切块',
    'squid-dried-export': '越南特级天然晒干/烘干鱿鱼干 (Dried Squid)',

    # === MISSING FRESH PRODUCE ===
    'fresh-watermelon': '越南无籽红肉西瓜 (鲜果)',
    'fresh-melon': '越南网纹甜瓜/哈密瓜 (鲜果)',
    'fresh-strawberry': '越南大叻红草莓 (鲜果)',
    'fresh-star-apple': '越南牛奶果/星苹果 (鲜果)',
    'fresh-rose-apple': '越南莲雾/水蒲桃 (鲜果)',
    'fresh-king-orange': '越南三性青蜜橙 (鲜果)',
    'fresh-tangerine': '越南红柑/宽皮柑橘 (鲜果)',
    'fresh-persimmon': '越南脆柿/红柿 (鲜果)',
    'fresh-acerola-cherry': '越南西印度樱桃/针叶樱桃 (鲜果)',
    'fresh-cashew': '越南腰果梨/腰果果肉 (鲜果)',
    'fresh-gac-fruit': '越南木鳖果/木鳖子 (鲜果)',
    'fresh-purple-sweet-potato': '越南特级紫薯 (鲜果)',
    'fresh-onion': '越南紫皮洋葱 (鲜葱)',
    'fresh-bell-pepper': '越南彩椒/甜椒 (鲜椒)',
    'fresh-tomato': '越南硬质粉红番茄/西红柿 (鲜果)',
    'fresh-sugarcane': '越南食用黑蔗/黄甘蔗 (鲜蔗)',

    # === MISSING POWDERS & EXTRACTS ===
    'powder-col-banana': '喷雾/热风香蕉纯粉',
    'powder-col-gac': '高纯度木鳖果纯粉 (天然红素)',
    'powder-col-purple-potato': '紫薯天然色素纯粉',
    'powder-deh-kale': '脱水羽衣甘蓝粉 (Dehydrated Kale)',
    'powder-deh-shiso': '脱水紫苏叶纯粉 (Dehydrated Shiso)',
    'powder-ext-dragon-fruit': '红心火龙果浓缩萃取粉',
    'powder-ext-celery': '水芹/西芹浓缩萃取粉',
    'powder-ext-centella': '积雪草/雷公根纯粉 (Centella Powder)',
    'powder-ext-moringa': '辣木叶超级食品纯粉',
    'powder-fd-lychee': '冻干荔枝纯粉 (Freeze-Dried)',
    'powder-fd-acerola': '冻干针叶樱桃/维C纯粉',
    'powder-col-coffee': '越南高质罗布斯塔速溶咖啡粉',
    'powder-col-chili': '热风干燥指天椒辣椒粉',
    'powder-col-ginger': '热风干燥纯老姜粉',
    'powder-deh-pumpkin': '脱水南瓜纯粉',
    'powder-deh-cinnamon': '越南官桂肉桂粉',
    'powder-deh-star-anise': '越南八角茴香粉',
    'powder-ext-pineapple': '菠萝水溶性萃取粉',
    'powder-ext-mango': '芒果水溶性萃取粉',
    'powder-ext-lime': '青柠檬水溶性萃取粉',
    'powder-ext-turmeric': '高纯度姜黄素萃取粉 (Curcumin)',
    'powder-ext-beetroot': '红菜头/甜菜根水溶萃取粉',
    'powder-deh-taro': '脱水香芋纯粉',
    'powder-ext-grapefruit': '葡萄柚/柚皮苷萃取粉',
    'powder-ext-kumquat': '金桔水溶性萃取粉',
    'powder-ext-butterfly-pea': '蝶豆花天然蓝色色素粉',

    # === MISSING FREEZE-DRIED FRUITS ===
    'fd-watermelon': '冻干西瓜脆片/西瓜丁 (Freeze-Dried)',
    'fd-strawberry': '冻干整颗草莓/草莓片 (Freeze-Dried)',
    'fd-red-dragon-fruit': '冻干红心火龙果脆片 (Freeze-Dried)',
    'fd-passion-fruit': '冻干百香果块 (Freeze-Dried)',

    # === MISSING IQF FRUITS ===
    'iqf-soursop': 'IQF 速冻刺果番荔枝/刺梨果肉',
    'iqf-mango-dice': 'IQF 速冻芒果丁 (Hass/Cat Chu)',
    'iqf-papaya': 'IQF 速冻红肉木瓜丁',
    'iqf-red-dragon-fruit': 'IQF 速冻红心火龙果丁',

    # === MISSING PUREES & JUICES ===
    'puree-strawberry': '冷冻草莓果泥 (Puree)',
    'puree-peach': '冷冻黄桃/黄肉桃果泥 (Puree)',
    'juice-watermelon': '冷冻纯西瓜原汁 (Natural Juice)',
    'juice-passion-fruit': '冷冻纯百香果原汁 (Natural Juice)',
    'juice-pomelo': '冷冻纯红心柚原汁 (Natural Juice)',
    'juice-pineapple': '冷冻纯菠萝原汁 (Natural Juice)',
    'concentrate-coconut': '无菌装浓缩椰子水 (Concentrate)',
    'concentrate-pineapple': '无菌装浓缩菠萝汁 (60-65 Brix)',
    'concentrate-passion-fruit': '无菌装浓缩百香果汁 (50 Brix)',
    'concentrate-mango': '无菌装浓缩芒果浆 (28-30 Brix)'
}

def apply_translations():
    filepath = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_count = 0
    missing_count = 0

    def replace_item(match):
        nonlocal updated_count, missing_count
        item_block = match.group(0)
        pid_match = re.search(r"id:\s*'([^']+)'", item_block)
        if not pid_match:
            return item_block
        
        pid = pid_match.group(1)
        if pid in ZH_NAME_MAP:
            zh_name = ZH_NAME_MAP[pid]
            # Check if nameZh already exists in block
            if 'nameZh:' in item_block:
                item_block = re.sub(r"nameZh:\s*'[^']*'", f"nameZh: '{zh_name}'", item_block)
            else:
                item_block = re.sub(r"(nameVi:\s*'[^']+',)", r"\1\n    nameZh: '" + zh_name + "',", item_block)
            updated_count += 1
        else:
            print(f"Missing translation for ID: {pid}")
            missing_count += 1

        return item_block

    # Regex pattern to match each product object in PRODUCTS_LIST
    pattern = r"\{\s*id:\s*'[^']+'[\s\S]*?\n  \}"
    new_content = re.sub(pattern, replace_item, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully updated {updated_count} products with nameZh in products.ts. Missing: {missing_count}")

if __name__ == '__main__':
    apply_translations()
