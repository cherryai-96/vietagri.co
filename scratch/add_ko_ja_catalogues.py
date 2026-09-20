import re

file_path = "/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update CatalogueInfo interface
interface_old = """export interface CatalogueInfo {
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
}"""

interface_new = """export interface CatalogueInfo {
  id: string;
  titleEn: string;
  titleVi: string;
  titleZh?: string;
  titleKo?: string;
  titleJa?: string;
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
  descKo?: string;
  descJa?: string;
}"""

content = content.replace(interface_old, interface_new)

catalogues_ko_ja = {
    "cat-harvest-edition-2026": {
        "titleKo": "VAC 2026 종합 농산물 카탈로그 (Harvest Edition)",
        "titleJa": "VAC 2026年 総合農産物カタログ（Harvest Edition）",
        "descKo": "신선 농산물, 과채 분말, 동결건조 과일, IQF 급속 냉동 농산물 4대 가공 형태와 베트남 울피아 및 유기 농자재를 종합 수록한 공식 통합 안내서.",
        "descJa": "生果・果菜パウダー・FD・IQF急速冷凍の4大加工形態に加え、ベトナム・ウルフイアおよび有機農資材を完壁に網羅した総合ガイド。"
    },
    "cat-fresh-2026": {
        "titleKo": "2026 수출용 신선 과일 및 채소 카탈로그",
        "titleJa": "2026年 輸出用新鮮果物＆野菜カタログ",
        "descKo": "수출 등급 베트남 신선 과일, 근채류 및 조리용 작물의 수확 캘린더, 중량/크기 선별 기준 및 수확 후 콜드체인 보관 지침 안내.",
        "descJa": "輸出グレードのベトナム産生果・根菜・調理作物の収穫カレンダー、サイズ選別規格、収穫後コールドチェーン管理を掲載。"
    },
    "cat-powders-2026": {
        "titleKo": "2026 식품급 과채 순수 분말 카탈로그",
        "titleJa": "2026年 果菜パウダー製品カタログ",
        "descKo": "식음료 및 건강기능식품용 동결건조 분말, 열대 농산물 분말 컬렉션, 열풍 건조 분말 및 100% 수용성 추출 분말의 기술 사양서.",
        "descJa": "FDパウダー、熱帯農産物パウダー、熱風乾燥パウダー、100％水溶性エキスパウダーのF&B・サプリメント向け詳細仕様書。"
    },
    "cat-freeze-dried-2026": {
        "titleKo": "2026 동결건조 과일 제품 카탈로그",
        "titleJa": "2026年 フリーズドライフルーツカタログ",
        "descKo": "수분 5% 미만, 영양소 98% 이상 보존, 바삭한 식감의 진공 승화 동결건조 과일 (통원물, 슬라이스, 다이스, 크리스프 형태).",
        "descJa": "水分5％未満、栄養素98％以上保持。サクサク食感の真空昇華フリーズドライフルーツ（ホール、スライス、ダイス、クリスプ形態）。"
    },
    "cat-iqf-2026": {
        "titleKo": "2026 IQF 급속 냉동 과채 카탈로그",
        "titleJa": "2026年 IQF急速冷凍果菜カタログ",
        "descKo": "산업용 식품 가공을 위한 초저온 IQF 급속 냉동 과채 (-35°C 동결) 낱개 떼어짐 다이스, 슬라이스, 하프 및 퓨레 블록 안내.",
        "descJa": "食品工業加工向け超急速IQF凍結（-35℃凍結）バラ凍結ダイス、スライス、ハーフ、ピューレブロック仕様書。"
    },
    "cat-purees-2026": {
        "titleKo": "2026 과일 퓨레, 원액 및 농축액 카탈로그",
        "titleJa": "2026年 フルーツピューレ＆濃縮果汁カタログ",
        "descKo": "식음료 산업 가공용 무균 냉동 과일 퓨레, 씨제거 과육, 100% 착즙 생과일 원액 및 고Brix 농축액 사양서.",
        "descJa": "F&B産業加工向け無菌冷凍フルーツピューレ、裏ごし果肉、ストレート果汁、高Brix濃縮果汁仕様書。"
    }
}

for cat_id, data in catalogues_ko_ja.items():
    pattern = rf"(id:\s*'{cat_id}'.*?descZh:\s*'[^\n']+')\n"
    
    def replacer(match):
        prefix = match.group(1)
        fields = f"""
    titleKo: {repr(data['titleKo'])},
    titleJa: {repr(data['titleJa'])},
    descKo: {repr(data['descKo'])},
    descJa: {repr(data['descJa'])},"""
        return prefix + fields + "\n"

    content, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    print(f"Updated catalogue {cat_id}: {count}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Finished updating Catalogues in src/data/products.ts")
