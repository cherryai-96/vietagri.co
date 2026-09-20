import re

# Comprehensive B2B Korean and Japanese translations mapping for all categories and products

CATEGORIES_KO_JA = {
    'fresh': {
        'titleKo': '수출용 신선 과일 및 채소',
        'titleJa': '輸出用生果物・野菜',
        'subtitleKo': '인증된 농가에서 산지 직송하는 수출 등급 농산물',
        'subtitleJa': 'VietGAP/GlobalG.A.P. 認証 농家から直接調達する高品質農産物',
        'descriptionKo': 'VAC는 전 세계 구매자를 베트남 인증 과수원 및 채소 농가에 직접 연결합니다. 엄격한 VietGAP 및 GlobalG.A.P. 프로토콜 하에 관리되는 신선 농산물은 MRL 잔류 농약 검사, 콜드체인 보존 및 VHT/방사선 소독 처리를 거쳐 EU, 미국, 일본, 한국 및 아세안 시장의 통관 기준을 완벽히 충족합니다.',
        'descriptionJa': 'VACはグローバルバイヤーをベトナムの認定果수園や野菜農園に直接接続します。厳格なVietGAPおよびGlobalG.A.P.プロ토コルに基づき管理され、残留農薬（MRL）検査、コールドチェーン保全、VHT/照射処理を経て、EU、米国、日本、韓国、ASEAN市場の通関基準を満たしています。',
        'highlightsKo': [
            'VietGAP 및 GlobalG.A.P. 인증 농가 직접 연결',
            'VHT(증기열처리) 및 멸균 방사선 소독 지원',
            '목적지 항구까지 연속 수확 후 콜드체인 보존',
            'Eurofins MRL 잔류 농약 정밀 검사 보고서 제공'
        ],
        'highlightsJa': [
            'VietGAPおよびGlobalG.A.P.認定農園との直接提携',
            'VHT（蒸気熱処理）および照射検疫処理に対応',
            '収穫後から目的港までの連続コールドチェーン保全',
            'Eurofins残留農薬（MRL）検査レポート完備'
        ],
        'availableCutsKo': ['원물 과일 (Whole Fruit)', '등급별 선별 (Grade A)', '폼넷 보호 포장', '슬라이스 및 깍둑썰기 (Diced)'],
        'availableCutsJa': ['生果（Whole Fruit）', '等級別選別（Grade A）', 'フルーツキャップ保護包装', 'カット・ダイ스加工'],
        'defaultPackagingKo': '통풍 골판지 상자, 폼넷 및 통풍 플라스틱 상자, 항공/해상 컨테이너',
        'defaultPackagingJa': '通気性段ボール箱、保護ネット、通気コンテナ（空輸・海輸対応）',
        'storageKo': '품목별 적정 온도: +2°C ~ +13°C (신선 유지 콜드체인)',
        'storageJa': '品목別適正温度：+2℃〜+13℃（新鮮冷蔵コールドチェーン）'
    },
    'powders': {
        'titleKo': '과일 및 채소 천연 분말',
        'titleJa': 'フルーツ＆野菜パウダー',
        'subtitleKo': '100% 프리미엄 과채 원물 기반 고농축 천연 파우더',
        'subtitleJa': '100％天然果実・野菜原料の 고농축パウダー',
        'descriptionKo': '동결건조(FD), 분무건조(SD) 및 열풍건조(AD) 기술로 제조된 VAC 분말은 가공식품, 음료, 건강기능식품 및 제과제빵 산업에 최적화되어 있습니다. 80-100 메쉬 미세 입자로 인공 첨가물 없이 원물의 영양과 향미를 그대로 보존합니다.',
        'descriptionJa': 'フリーズドライ（FD）、スプレードライ（SD）、열風乾燥（AD）の先進技術で加工されたVACのパウダーは、食品、飲料、サプリメント、製菓業界に最適です。80〜100メッシュの微粉末で、添加物なしで素材本来の栄養と風味を保ちます。',
        'highlightsKo': [
            '동결건조(FD) 기술로 영양소 98% 보존',
            '80-100 메쉬 균일한 미세 분말',
            '인공 보존제 및 색소 무첨가 Clean-Label',
            '대용량 산업용 10kg-25kg 방습 알루미늄 포장'
        ],
        'highlightsJa': [
            'フリーズドライ（FD）により栄養素を98％保持',
            '80〜100メッシュの均일な微粉末',
            '人工保存料・着色料不使用のクリーンレーベル',
            '大容量産業用10kg〜25kg防湿アルミ袋包装'
        ],
        'availableCutsKo': ['미세 분말 (80-100 Mesh)', '수용성 분말 (Soluble Grade)', '과립형 (Granules)'],
        'availableCutsJa': ['微粉末（80〜100メッシュ）', '水溶性パウダー（Soluble）', '造粒・グラニュール'],
        'defaultPackagingKo': '2중 방습 알루미늄 호일 백 (10kg / 20kg / 25kg 마스터 카톤)',
        'defaultPackagingJa': '二重防湿アルミ袋（10kg / 20kg / 25kg マスターカートン）',
        'storageKo': '상온 건조 보관 (습도 < 60%, 25°C 이하)',
        'storageJa': '常温冷暗所保存（湿度＜60％、25℃以下）'
    },
    'freeze-dried': {
        'titleKo': '동결건조 과일 (Freeze-Dried Fruits)',
        'titleJa': 'フリーズドライフルーツ（Freeze-Dried）',
        'subtitleKo': '영양과 바삭한 식감을 살린 프리미엄 동결건조 과일',
        'subtitleJa': '栄養とサクサ크食感を両立したプレミアムFDフルーツ',
        'descriptionKo': '영하 35°C 진공 동결건조 기술을 사용하여 과일 본연의 세포 구조, 향, 색상 및 영양소를 98% 유지합니다. 수분 함량 5% 미만으로 보존제 없이 상온 장기 보관이 가능합니다.',
        'descriptionJa': 'マイナス35℃の真空凍結乾燥技術により、果物本来の細胞構造、香り、色、栄養素を98％ 유지します。水分含有量5％未満で、保存料なしで常温長期保存が可能です。',
        'highlightsKo': ['영양소 및 비타민 98% 유지', '수분 함량 < 5% 프리미엄 바삭함', '무설탕, 무보존제 100% 순수 과일', '상온 보관 가능 (긴 유통기한)'],
        'highlightsJa': ['栄養素・ビタミンを98％保持', '水分率＜5％のサクサク食感', '砂糖・保存料不使用100％無添加', '常温保存可能（長い賞味期限）'],
        'availableCutsKo': ['슬라이스 (Slices)', '다이스 (Dices 5x5mm - 10x10mm)', '파우더 (Powder)', '원물 블록 (Whole / Chunk)'],
        'availableCutsJa': ['スライス（Slices）', 'ダイス（5x5mm〜10x10mm）', 'パウダー（Powder）', 'ホール・チャンク（Chunk）'],
        'defaultPackagingKo': '질소 충전 질소포장 알루미늄 지퍼백 또는 10kg 마스터 드럼/카톤',
        'defaultPackagingJa': '窒素充填アルミジッパー袋または10kgマスタードラム/段ボール',
        'storageKo': '상온 보관 (25°C 이하 습기 차단)',
        'storageJa': '常温保存（25℃以下、多湿回避）'
    },
    'iqf': {
        'titleKo': 'IQF 급속 냉동 과채류',
        'titleJa': 'IQF 急速冷凍フルーツ＆野菜',
        'subtitleKo': '개별 급속 냉동(IQF)으로 신선함과 신속 가공성을 동시에',
        'subtitleJa': '個別急速冷凍（IQF）で新鮮さと高い加工性を両立',
        'descriptionKo': '영하 35°C IQF(Individual Quick Freezing) 설비로 세포 파괴 없이 과채류를 개별 냉동합니다. 100% 낱개 분리 상태를 유지하여 식품 공장의 자동 정량 투입에 최적화되어 있습니다.',
        'descriptionJa': 'マイナス35℃のIQF（Individual Quick Freezing）設備により、細胞を破壊せず個別に急速冷凍。100％パラパラの状態で自動定量投入に最適です。',
        'highlightsKo': ['영하 35°C 초고속 개별 급속 냉동', '100% 낱개 분리 (Free-flowing)', '해동 후 원물 조직감 우수 유지', 'HACCP 및 ISO 22000 냉동 기준 준수'],
        'highlightsJa': ['マイナス35℃超高速個別急速冷凍', '100％パラパラ保持（Free-flowing）', '解凍後も優れた食感・組織感を維持', 'HACCPおよびISO 22000冷凍基準適合'],
        'availableCutsKo': ['다이스 (Cubes/Dices 10x10mm)', '슬라이스 (Slices)', '하프 컷 (Half Cut)', '원물 냉동 (Whole)'],
        'availableCutsJa': ['ダイス（Cubes/Dices 10x10mm）', 'スライス（Slices）', 'ハーフカット（Half Cut）', 'ホール冷凍（Whole）'],
        'defaultPackagingKo': '10kg / 15kg PE 라이닝 마스터 카톤 또는 1kg 리테일 파우치',
        'defaultPackagingJa': '10kg / 15kg PEライナー入りマスター段ボールまたは1kgリテール袋',
        'storageKo': '-18°C 이하 냉동 보관',
        'storageJa': '-18℃以下要冷凍'
    },
    'purees': {
        'titleKo': '과일 퓨레, 즙 및 농축액',
        'titleJa': 'フルーツピューレ・果汁・浓缩液',
        'subtitleKo': '아셉틱(Aseptic) 무균 포장 및 당도(Brix) 규격화 퓨레',
        'subtitleJa': 'アセプティック（Aseptic）無菌包装＆Brix規格化ピューレ',
        'descriptionKo': '음료, 유제품, 아이스크림 및 제과 공장을 위한 고품질 과일 퓨레 및 농축액입니다. 아셉틱 무균 럼 포장으로 냉동/상온 유통이 가능하며 표준화된 브릭스(Brix) 수치를 보장합니다.',
        'descriptionJa': '飲料、乳製品、アイスクリーム、製菓メーカー向けの高品質フルーツピューレおよび濃縮液。アセプティック無菌ドラム包装により、安定した品質とBrix度数を保証します。',
        'highlightsKo': ['아셉틱(Aseptic) 200L 무균 드럼 포장', 'Brix 및 산도(pH) 표준 규격 관리', '씨 제거(Seedless) 및 필터링 옵션', '냉동 및 상온 아셉틱 제품 라인업'],
        'highlightsJa': ['アセプティック（無菌）200Lドラム包装', 'Brixおよび酸度（pH）の厳格な規格管理', '種抜き（Seedless）および裏ごし対応', '冷凍・常温アセプティック各種ラインナップ'],
        'availableCutsKo': ['무균 퓨레 (Aseptic Puree)', '씨 포함 퓨레 (Seed-in Puree)', '농축액 (60-65 Brix Concentrate)', '착즙 원액 (Single-Strength)'],
        'availableCutsJa': ['無菌ピューレ（Aseptic Puree）', '種入りピューレ（Seed-in）', '濃縮液（60-65 Brix）', 'ストレート果汁（Single-Strength）'],
        'defaultPackagingKo': '200kg 아셉틱 백 인 드럼 (Bag-in-Drum) 또는 20kg 아셉틱 카톤',
        'defaultPackagingJa': '200kg アセプティックバッグ・イン・ドラム（Bag-in-Drum）または20kg箱',
        'storageKo': '-18°C 냉동 보관 또는 상온 무균 보관',
        'storageJa': '-18℃要冷凍または常温無菌保存'
    },
    'seafood': {
        'titleKo': '수산물 및 해산물 수출 라인업',
        'titleJa': '水産物・シーフード輸出ポートフォリオ',
        'subtitleKo': '베트남 청정 청정해역산 고품질 냉동 수산물',
        'subtitleJa': 'ベトナムの豊かな海が育む高品質冷凍水産物',
        'descriptionKo': 'VAC는 베트남 남부 해역 및 메콩강 양식장의 바사(Basa), 흰다리새우, 블랙타이거, 오징어 수산물을 지속가능한 방식으로 공급합니다. HACCP, BRCGS, Halal 및 ASC 인증 공장에서 가공됩니다.',
        'descriptionJa': 'VACはベトナム南部海域およびメコン川養殖場のバサ、バナメイエビ、ブラックタイガー、アオリイカ等の水産物を供給します。HACCP、BRCGS、Halal、ASC認証工場で加工されています。',
        'highlightsKo': ['HACCP, BRCGS, ASC 및 Halal 인증 시설', '수율 및 글레이징(Glazing) 완벽 맞춤제작', '바사, 새우, 오징어 전문 수출라인', 'B2B 대용량 IQF 및 블록 냉동 옵션'],
        'highlightsJa': ['HACCP、BRCGS、ASCおよびHalal認証工場', '歩留まり・グレーズ（氷衣）比率のカスタム対応', 'バサ・エビ・イカに特化した輸出ライン', 'B2B大容量IQFおよびブロック凍結対応'],
        'availableCutsKo': ['필렛 (Fillet)', '원물 (Whole Round)', 'H&G (Headless & Gutted)', 'IQF 링 & 컷 (Rings & Cuts)'],
        'availableCutsJa': ['フィーレ（Fillet）', 'ラウンド（Whole Round）', 'H&G（ドレス・去頭去内臓）', 'IQFリング・カット'],
        'defaultPackagingKo': '10kg / 20kg PE 마스터 카톤, IVP(개별 진공 포장), 리테일 지퍼백',
        'defaultPackagingJa': '10kg / 20kg PEライナーマスターカートン、IVP真空包装、リテール袋',
        'storageKo': '-18°C 이하 딥 프리징 보관',
        'storageJa': '-18℃以下ディープフリーズ冷凍保存'
    },
    'crops-plant-based': {
        'titleKo': '농산물 및 식물성 제품 에코시스템',
        'titleJa': '農産物＆植物性ベース製品エコシステム',
        'subtitleKo': '신선, 건조, 분말, 퓨레, IQF 5대 가공 포맷 종합 포트폴리오',
        'subtitleJa': '生果・乾燥・パウダー・ピューレ・IQF 5大加工フォーマット総合ポートフォリオ',
        'descriptionKo': 'VAC는 베트남의 다양한 열대 농산물을 5가지 핵심 가공 형태로 제공합니다. GlobalG.A.P, HACCP, ISO 및 BRCGS 표준 하에 가공되어 글로벌 B2B 공급망을 지원합니다.',
        'descriptionJa': 'VACはベトナムの多様な熱帯農産物を5つのコア加工形態で提供します。GlobalG.A.P、HACCP、ISO、BRCGS規格のもと加工され、世界のB2Bサプライチェーンを支えます。',
        'highlightsKo': ['5대 가공 포맷 통합 제조 능력', '글로벌 MRL 농약 잔류 기준 완전 준수', '대형 B2B 구매자를 위한 맞춤 스펙', '안전한 콜드체인 및 통관 서류 지원'],
        'highlightsJa': ['5大加工フォーマット統合製造能力', 'グローバルMRL残留農薬基準への完全適合', '大口B2Bバイヤー向けカスタムスペック対応', '安心のコールドチェーン＆通関書類サポート'],
        'availableCutsKo': ['원물 (Whole)', '다이스 / 큐브 (Diced/Cubes)', '퓨레 / 아셉틱 (Puree/Aseptic)', '미세 분말 (Fine Powder)', '동결건조 (Freeze-Dried)'],
        'availableCutsJa': ['生果（Whole）', 'ダイス・キューブ（Diced/Cubes）', 'ピューレ・アセプティック（Puree/Aseptic）', '微粉末（Fine Powder）', 'フリーズドライ（Freeze-Dried）'],
        'defaultPackagingKo': '통풍 카톤, 드럼 아셉틱 백, 진공 파우치 및 마스터 카톤',
        'defaultPackagingJa': '通気カートン、ドラム無菌バッグ、真空パック＆マスター段ボール',
        'storageKo': '포맷별: +2°C ~ +13°C (신선), -18°C (IQF/퓨레), 상온 (분말/FD)',
        'storageJa': 'フォーマット別：+2℃〜+13℃（生果）、-18℃（IQF/ピューレ）、常温（パウダー/FD）'
    },
    'poultry': {
        'titleKo': '계육 및 가금류 수출 제품',
        'titleJa': '鶏肉・家禽類輸出製品',
        'subtitleKo': '할랄(Halal) 인증 및 규격화된 냉동 계육 부위별 제품',
        'subtitleJa': 'ハラール（Halal）認証＆規格化された冷凍鶏肉部位別製品',
        'descriptionKo': '베트남 현대식 도계장에서 가공되는 가금류 제품입니다. 할랄 인증 통닭, 무뼈 가슴살, 장각, 날개, 족 등 전 세계 식자재 및 가공공장 요구사항에 맞춘 정밀 절단을 제공합니다.',
        'descriptionJa': 'ベト남の近代的な解体加工工場で생産される家禽製品。ハラール認証丸鶏、骨なし胸肉、骨付き腿肉、手羽、モミジ等、世界の外食・加工食品メーカーのニーズに応える精密カットを提供します。',
        'highlightsKo': ['할랄(Halal) 도축 인증 라인', 'ISO 22000 및 HACCP 위생 관리', '정밀 무게 선별 및 부위별 맞춤 절단', '대용량 식자재 및 OEM 가공용 포장'],
        'highlightsJa': ['ハラール（Halal）屠殺認証ライン', 'ISO 22000およびHACCP衛生管理', '精密重量選別＆部位別カスタムカット', '外食用大容量およびOEM加工用包装'],
        'availableCutsKo': ['통닭 (Whole Bird)', '무뼈 가슴살 (Boneless Breast)', '장각 (Leg Quarters)', '날개 (Wings)', '닭발 / 족 (Feet & Paws)'],
        'availableCutsJa': ['丸鶏（Whole Bird）', '骨なし胸肉（Boneless Breast）', '骨付き大腿肉（Leg Quarters）', '手羽（Wings）', 'モミジ・鶏足（Feet & Paws）'],
        'defaultPackagingKo': '10kg / 15kg PE 라이닝 마스터 카톤 또는 IVP 진공 포장',
        'defaultPackagingJa': '10kg / 15kg PEライナー入りマスターカートンまたはIVP真空パック',
        'storageKo': '-18°C 이하 냉동 보관',
        'storageJa': '-18℃以下要冷凍'
    },
    'basa': {
        'titleKo': '바사 / 메콩 메기 (Pangasius Basa)',
        'titleJa': 'パンガシウス・バサ（Pangasius Basa）',
        'subtitleKo': '백색 육질의 프리미엄 바사 필렛 및 가공 제품',
        'subtitleJa': '白身でクセのない高品位バサフィーレ＆加工品',
        'descriptionKo': '메콩강의 깨끗한 양식장에서 생산되는 바사 피쉬입니다. 수율 정미(Well-trimmed) 필렛, 스테이크 컷, 큐브 및 튀김용 가공품까지 미국, 유럽, 아시아 시장 요구사항에 맞춰 공급됩니다.',
        'descriptionJa': 'メコン川の澄んだ養殖場で育てられたバサ魚。丁寧にトリミングされたフィレ、ステッキカット、キューブ、衣付き加工品まで、欧米・日本・アジア市場の仕様に対応します。',
        'highlightsKo': ['ASC 및 BAP 양식 인증', 'Well-Trimmed(지방 및 붉은살 완전 제거)', '정밀 수율 및 글레이징(Glazing) 제어', '식자재 및 급식용 대량 공급'],
        'highlightsJa': ['ASCおよびBAP養殖認証', 'Well-Trimmed（脂・血合い完全除去）', '正確な歩留まり＆グレーズ（氷衣）管理', '外食・給食用大口安定供給'],
        'availableCutsKo': ['정미 필렛 (Well-Trimmed Fillet)', '원형 스테이크 (Steak Cuts)', '큐브 / 로인 (Cubes/Loin)', '빵가루 튀김 (Breaded Fillet)'],
        'availableCutsJa': ['精修フィーレ（Well-Trimmed Fillet）', 'ステッキカット（Steak）', 'キューブ・ロイン（Cubes/Loin）', 'フライ用衣付きフィーレ（Breaded）'],
        'defaultPackagingKo': '10kg IQF 벌크 카톤, Shatterpack 또는 리테일 진공팩',
        'defaultPackagingJa': '10kg IQFバルクカートン、シャッターパック、リテールパック',
        'storageKo': '-18°C 이하 딥 프리징 보관',
        'storageJa': '-18℃以下要冷凍'
    },
    'shrimp': {
        'titleKo': '베트남 프리미엄 새우 (Vannamei & Black Tiger)',
        'titleJa': 'ベトナム産プレミアムエビ（バナメイ＆ブラックタイガー）',
        'subtitleKo': '흰다리새우 및 블랙타이거 규격별 냉동 새우 제품',
        'subtitleJa': 'バナメイエビ＆ブラックタイガー規格別冷凍エビ製品',
        'descriptionKo': '베트남 친환경 양식장에서 엄선된 흰다리새우(Vannamei)와 블랙타이거(Black Tiger)입니다. HOSO(Head-on), HLSO(Headless), PDTO(Peeled Tail-on), 튀김용 덴푸라 등 다양한 형태로 가공됩니다.',
        'descriptionJa': 'ベトナムの環境配慮型養殖場で厳選されたバナメイおよびブラックタイガー。HOSO（有頭）、HLSO（無頭）、PDTO（保尾むき身）、天ぷら用加工など多様な形態で提供します。',
        'highlightsKo': ['ASC 및 GlobalG.A.P. 양식 인증', '항생제 무검출 (Antibiotic-free)', 'HOSO, HLSO, PDTO, PUD 정밀 규격', '일식 튀김용 노바시(Nobashi) 지원'],
        'highlightsJa': ['ASCおよびGlobalG.A.P.養殖認証', '抗生物質不検出（Antibiotic-free）', 'HOSO、HLSO、PDTO、PUD精密規格', '和食用伸しエビ（ノバシ）対応'],
        'availableCutsKo': ['HOSO (带头带壳)', 'HLSO (无头带壳)', 'PDTO (去壳留尾)', 'P&D (완전 껍질제거)', '노바시 (Nobashi Ebi)'],
        'availableCutsJa': ['HOSO（有頭・殻付き）', 'HLSO（無頭・殻付き）', 'PDTO（保尾むき身）', 'P&D（完全むき身）', 'ノバシエビ（Nobashi）'],
        'defaultPackagingKo': '1kg / 1.8kg 블록 아이스 팩, 10kg 마스터 카톤, IQF 파우치',
        'defaultPackagingJa': '1kg / 1.8kg ブロック凍結、10kgマスターカートン、IQFパック',
        'storageKo': '-18°C 이하 냉동 보관',
        'storageJa': '-18℃以下要冷凍'
    },
    'squid': {
        'titleKo': '원양 오징어 및 가공 제품',
        'titleJa': '天然天然イカ＆加工製品',
        'subtitleKo': '자연산 원양 오징어(Ocean Squid) 및 튜브, 링, 척',
        'subtitleJa': '天然イカ（Ocean Squid）＆チューブ・リング・カット',
        'descriptionKo': '베트남 청정 원양에서 포획한 오징어입니다. 내장 제거 원물, 무피 튜브(Tubes), IQF 오징어 링(Rings), 파인애플 컷(Pineapple cut) 등 고품질 가공 수산물을 공급합니다.',
        'descriptionJa': 'ベトナムの澄んだ外洋で水揚げされた天然イカ。内臓除去品、皮むきチューブ、IQFリング、松笠カット（Pineapple cut）など高品位加工水産物を供給します。',
        'highlightsKo': ['100% 원양 자연산 오징어 (Wild-caught)', '무피 튜브(Skinless Tubes) U5-U10 규격', '솔방울/파인애플 컷 정밀 칼집 가공', '튀김용 빵가루 오징어 링 옵션'],
        'highlightsJa': ['100％外洋天然イカ（Wild-caught）', '皮むきチューブ（Tubes）U5〜U10規格', '松笠カット（Pineapple cut）精密隠し包丁', 'フライ用衣付きイカリング対応'],
        'availableCutsKo': ['원물 오징어 (Whole Round)', '오징어 튜브 (Skinless Tubes)', '오징어 링 (IQF Rings)', '솔방울 컷 (Pineapple Cut)', '오징어 다리 (Tentacles)'],
        'availableCutsJa': ['原条イカ（Whole Round）', 'イカチューブ（Skinless Tubes）', 'イカリング（IQF Rings）', '松笠カット（Pineapple Cut）', 'ゲソ・下足（Tentacles）'],
        'defaultPackagingKo': '10kg IQF 벌크 카톤, 1kg 리테일 지퍼백',
        'defaultPackagingJa': '10kg IQFバルクカートン、1kgリテールジッパー袋',
        'storageKo': '-18°C 이하 딥 프리징 보관',
        'storageJa': '-18℃以下要冷凍'
    }
}

def update_categories_data():
    filepath = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for cat_id, info in CATEGORIES_KO_JA.items():
        # Match category entry block in CATEGORIES_DATA
        pattern = r"('" + cat_id + r"':\s*\{[\s\S]*?\n  \})"
        match = re.search(pattern, content)
        if match:
            block = match.group(1)
            # Add or update titleKo, titleJa, etc.
            if 'titleKo:' not in block:
                block = block.replace(f"titleZh: '{CATEGORIES_DATA_ZH_TITLES.get(cat_id, '')}',", 
                                      f"titleZh: '{CATEGORIES_DATA_ZH_TITLES.get(cat_id, '')}',\n    titleKo: '{info['titleKo']}',\n    titleJa: '{info['titleJa']}',")
                block = block.replace(f"subtitleZh: '{CATEGORIES_DATA_ZH_SUBTITLES.get(cat_id, '')}',", 
                                      f"subtitleZh: '{CATEGORIES_DATA_ZH_SUBTITLES.get(cat_id, '')}',\n    subtitleKo: '{info['subtitleKo']}',\n    subtitleJa: '{info['subtitleJa']}',")
                block = block.replace(f"descriptionZh: '{CATEGORIES_DATA_ZH_DESCS.get(cat_id, '')}',", 
                                      f"descriptionZh: '{CATEGORIES_DATA_ZH_DESCS.get(cat_id, '')}',\n    descriptionKo: '{info['descriptionKo']}',\n    descriptionJa: '{info['descriptionJa']}',")
            # Replace back in content
            content = content.replace(match.group(1), block)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

CATEGORIES_DATA_ZH_TITLES = {
    'fresh': '出口新鲜水果与蔬菜', 'powders': '果蔬纯粉系列', 'freeze-dried': '冻干水果', 'iqf': 'IQF 速冻果蔬',
    'purees': '果浆、浓缩汁与原汁', 'seafood': '出口水产与海鲜组合', 'crops-plant-based': '农产品与植物基生态',
    'poultry': '家禽产品系列', 'basa': '巴沙鱼 / 湄公河鲶鱼', 'shrimp': '越南特级虾类', 'squid': '远洋鱿鱼与加工系列'
}
CATEGORIES_DATA_ZH_SUBTITLES = {
    'fresh': '产地直采·符合 VietGAP/GlobalG.A.P 出口标准', 'powders': '100% 纯天然·无添加高浓度果蔬纯粉',
    'freeze-dried': '保留 98% 营养与酥脆口感的特级冻干水果', 'iqf': 'IQF 单体快速冻结·锁鲜与高高效加工',
    'purees': '无菌袋装果浆 (Aseptic Puree) 与标准 Brix 糖度浓缩汁', 'seafood': '源自越南天然海域与湄公河生态养殖',
    'crops-plant-based': '涵盖鲜果、干燥、纯粉、果浆与 IQF 5 大加工形态', 'poultry': '清真 Halal 认证与标准化冷冻切割部位',
    'basa': '肉质洁白·无腥味高品质巴沙鱼柳与加工系列', 'shrimp': '南美白对虾与黑虎虾全规格出口系列', 'squid': '野生远洋鱿鱼·鱿鱼筒、鱿鱼圈与切花系列'
}
CATEGORIES_DATA_ZH_DESCS = {
    'fresh': 'VAC 将全球买家直接对接至越南经过认证的水果果园及蔬菜基地。全流程采用 VietGAP 和 GlobalG.A.P. 规范管理，生鲜农产品经过严格的农药残留 (MRL) 检测、全程冷链保鲜及 VHT 蒸汽热处理 / 辐射灭菌处理，完全符合欧盟、美国、日本、韩国及东盟市场的准入要求。',
    'powders': '采用冻干 (FD)、喷雾干燥 (SD) 及热风干燥 (AD) 先进工艺制成，VAC 果蔬纯粉广泛应用于食品加工、饮料、保健品及烘焙工业。80-100 目细粉，无添加剂，完美保留天然营养与风味。',
    'freeze-dried': '采用 -35°C 真空冻干技术，完整保留水果 98% 的细胞结构、香气、色彩及天然维生素。水分含量低于 5%，无需防腐剂即可在常温下长期保存。',
    'iqf': '采用 -35°C IQF (Individual Quick Freezing) 单体速冻设备，在不破坏细胞结构的前提下速冻果蔬。100% 颗粒独立不粘连，非常适合食品工厂自动化定量添加。',
    'purees': '专为饮料、乳制品、冰淇淋及烘焙工业打造的高品质果浆与浓缩汁。采用 200L 无菌大桶包装 (Aseptic Drum)，提供稳定可靠的 Brix 糖度与酸度指标。',
    'seafood': 'VAC 持续稳定供应源自ベトナム南部海域及湄公河养殖基地的巴沙鱼、南美白对虾、黑虎虾及远洋鱿鱼。所有产品均在符合 HACCP、BRCGS、Halal 及 ASC 认证的工厂加工。',
    'crops-plant-based': 'VAC 提供越南丰富热带农产品 5 大核心加工形态。在 GlobalG.A.P、HACCP、ISO 及 BRCGS 标准下加工，全力保障全球 B2B 供应链。',
    'poultry': '源自越南现代解体加工厂的家禽产品。提供清真 Halal 认证整鸡、无骨鸡胸肉、大鸡腿、鸡翅、鸡爪等，精确切割，满足全球餐饮及食品加工厂需求。',
    'basa': '源自湄公河优质养殖场的巴沙鱼。提供精修 (Well-trimmed) 鱼柳、鱼块 (Steak)、鱼丁及裹粉炸鱼等，完全符合欧美、日本及亚洲市场标准。',
    'shrimp': '源自베トナム生态养殖场的南美白对虾与黑虎虾。提供 HOSO (带头带壳)、HLSO (无头带壳)、PDTO (去壳留尾)、日式天妇罗等多种规格。',
    'squid': '源自ベトナム纯净远洋捕捞的鱿鱼。提供去内脏原条、无皮鱿鱼筒 (Tubes)、IQF 鱿鱼圈 (Rings)、菠萝切花 (Pineapple cut) 等高品质加工水产。'
}

print("Category script template ready.")
