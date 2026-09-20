import re

categories_ko_ja = {
    "fresh": {
        "titleKo": "수출용 신선 과일 및 채소",
        "titleJa": "輸出用 新鮮な果物＆野菜",
        "subtitleKo": "인증 산지 직송 제철 수출 등급 농산물",
        "subtitleJa": "認証農園直送 旬の輸出グレード農産物",
        "descriptionKo": "VAC는 글로벌 구매자를 베트남 인증 과수원 및 채소 농장과 직접 연결합니다. 엄격한 VietGAP 및 GlobalG.A.P 프로토콜에 따라 관리되며 잔류 농약(MRL) 검사, 콜드체인 보관, VHT 훈증/방사선 처리를 거쳐 EU, 미국, 일본, 한국, 아세안 시장의 통관 기준을 충족합니다.",
        "descriptionJa": "VACはグローバルバイヤーをベトナムの認証果樹園および野菜農園と直接接続します。厳格なVietGAPおよびGlobalG.A.Pプロトコルで管理され、残留農薬（MRL）検査、コールドチェーン保全、VHT蒸気熱処理・蒸気殺菌を経て、EU、米国、日本、韓国、ASEAN市場の輸入基準を満たしています。",
        "highlightsKo": [
            "MRL 및 잔류 농약 기준 엄격 준수",
            "지속적인 콜드체인 관리 (REEFER 컨테이너 +2°C ~ +13°C)",
            "수확 후 검역 처리 인증 (VHT 훈증 / 방사선 처리)",
            "맞춤형 통풍 수출 포장 (통풍 상자 / 플라스틱 상자)"
        ],
        "highlightsJa": [
            "MRLおよび残留農薬基準の厳格な 준수",
            "継続的なコールドチェーン管理（REEFERコンテナ +2℃〜+13℃）",
            "収穫後検疫処理認証（VHT蒸気熱処理／照射処理）",
            "カスタム通気輸出包装（通気段ボール／プラスチックトレイ）"
        ],
        "availableCutsKo": ["원물 과일", "가지/잎 포함", "크기/중량별 선별", "세척 및 광택"],
        "availableCutsJa": ["果実丸ごと", "枝葉付き", "サイズ・重量別選別", "洗浄＆ポリッシュ"],
        "defaultPackagingKo": "5kg, 10kg, 18kg PE 라이너 포함 통풍 수출 상자 또는 팔레트 위 플라스틱 상자",
        "defaultPackagingJa": "5kg, 10kg, 18kg PEライナー付き輸出用通気段ボール、またはパレット積みプラスチックトレイ",
        "storageKo": "저온 저장은 품목에 따라 +2°C ~ +13°C, 상대 습도 85-95%",
        "storageJa": "品目に応じた低温保管（+2℃〜+13℃）、相対湿度 85-95%"
    },
    "powders": {
        "titleKo": "식품급 과채 순수 분말",
        "titleJa": "食品グレード 果菜パウダー",
        "subtitleKo": "식음료, 베이커리 및 건강기능식품용 고순도 천연 원료",
        "subtitleJa": "F&B・製パン・サプリメント用 高純度天然原料",
        "descriptionKo": "산업용 식음료 제조업체를 위해 설계된 VAC 분말 시리즈는 동결건조, 열풍건조, 분무건조 및 수용성 추출 공정을 거쳐 제조됩니다. 인공 첨가물이나 부형제 없이 천연 색상, 활성 영양소 및 풍미를 보존합니다.",
        "descriptionJa": "産業用F&Bメーカー向けに設計されたVACの果菜パウダーシリーズは、フリーズドライ、熱風乾燥、スプレーセキ、水溶性抽出技術で製造されています。人工添加物や賦形剤を使用せず、天然の vivid な色合い、栄養素、風味を保持しています。",
        "highlightsKo": [
            "4가지 핵심 제조 기술 (동결건조, 열풍건조, 분무건조, 추출)",
            "100% 천연, 인공 색소 및 보존제 무첨가",
            "미세 입자 입도 (80-100 메쉬)",
            "RTD 음료 및 보충제용 고수용성 제형"
        ],
        "highlightsJa": [
            "4つの核心製造技術（フリーズドライ、熱風乾燥、スプレードライ、エキス抽出）",
            "100％天然、人工着색料・保存料不使用",
            "標準メッシュサイズ（80〜100メッシュ）",
            "即飲RTD飲料やサプリメント用の高水溶性フォーミュラ"
        ],
        "availableCutsKo": ["미세 분말 (80-100 메쉬)", "수용성 추출 분말", "과립 분말"],
        "availableCutsJa": ["微粉末（80〜100メッシュ）", "水溶性エキスパウダー", "造粒パウダー"],
        "defaultPackagingKo": "1kg, 5kg 알루미늄 진공 봉투 (10kg/20kg 수출 상자 또는 25kg 화이버 드럼 포장)",
        "defaultPackagingJa": "1kg・5kgアルミ真空袋（10kg/20kg輸出用段ボールまたは25kgファイバードラム入り）",
        "storageKo": "25°C 이하의 건냉한 장소, 상대 습도 60% 미만",
        "storageJa": "25℃以下の冷暗所、相対湿度60％未満"
    },
    "freeze-dried": {
        "titleKo": "동결건조 과일",
        "titleJa": "フリーズドライフルーツ",
        "subtitleKo": "천연 풍미, 향 및 영양을 보존하는 진공 승화 동결건조",
        "subtitleJa": "天然の風味・香り・栄養を閉じた真空昇華フリーズドライ",
        "descriptionKo": "진공 승화 동결건조 기술을 사용하여 VAC 동결건조 과일은 비타민, 항산화제, 천연 향 및 세포 구조를 유지합니다. 수분 함량이 5% 미만으로 바삭한 식감을 제공하며 프리미엄 리테일 스낵, 시리얼, 초콜릿 코팅에 최적입니다.",
        "descriptionJa": "真空昇華フリーズドライ技術を使用し、VACのFDフルーツは天然ビタミン、抗酸化物質、天然の香りと細胞構造を保持します。水分含量5％未満でサクサ크した食感を提供し、高級スナック、シリアル、チョコレートコーティングに最適です。",
        "highlightsKo": [
            "영양소와 구조를 보존하는 승화 동결건조 기술",
            "낮은 수분 함량(< 5%)으로 18-24개월 상온 보관 가능",
            "100% 과일 원물, 미튀김, 설탕 및 보존제 무첨가",
            "다양한 절단 형태: 통원물, 슬라이스, 다이스, 크리스프"
        ],
        "highlightsJa": [
            "栄養素と構造を維持する昇華フリーズドライ技術",
            "超低水分量（< 5%）により常温で18〜24ヶ月長期間保存可能",
            "100%果実、ノンフライ、砂糖・人工保存料不使用",
            "多彩なカット形状：ホール、スライス、ダイス、クリスプ"
        ],
        "availableCutsKo": ["통원물", "슬라이스 (3-5mm / 5-7mm)", "다이스/큐브 (5x5mm, 10x10mm)", "크리스프"],
        "availableCutsJa": ["ホール", "スライス（3-5mm / 5-7mm）", "ダイス・カット（5x5mm、10x10mm）", "クリスプ"],
        "defaultPackagingKo": "5kg/10kg 수출 상자 내 이중 PE 봉투 또는 OEM 지퍼백",
        "defaultPackagingJa": "5kg/10kg輸出段ボール内ダブルPE袋、またはOEMアルミチャック付き袋",
        "storageKo": "상온 보관 (28°C 이하), 습기 차단 밀폐 포장 유지",
        "storageJa": "常温保存（28℃以下）、防湿密閉包装を維持"
    },
    "iqf": {
        "titleKo": "IQF 급속 냉동 과채",
        "titleJa": "IQF 急速冷凍果菜",
        "subtitleKo": "정밀 정량 투입이 가능한 개별 급속 냉동 규격",
        "subtitleJa": "産業用計量に最適な単体急速冷凍（IQF）",
        "descriptionKo": "-35°C의 초저온 가류상 냉동 기술을 사용하여 개별 과채 입자를 신속히 냉동함으로써 얼음 결정 형성을 방지하고 세포 벽 손상을 최소화합니다. 대용량 해동 없이 자동 정량 투입이 가능합니다.",
        "descriptionJa": "-35℃の流動床超急速冷凍技術を用い、果菜の単体を素早く個別に凍結させることで、細胞破壊を防ぎます。全解凍せずに自動計量投入が可能な100％バラ凍結状態です。",
        "highlightsKo": [
            "-35°C 초고속 냉동으로 세포 구조 및 해동 후 드립 방지",
            "100% 낱개 떼어짐 (Free-flowing) 포장",
            "엄격한 미생물 제어 및 금속 검출기 전수 검사",
            "다양한 절단 규격 (다이스, 하프, 슬라이스, 퓨레 블록)"
        ],
        "highlightsJa": [
            "-35℃超急速凍結による細胞保持と解凍時のドリップ抑制",
            "100％バラ凍結（Free-flowing）で自動投入に対応",
            "厳格な微生物管理と金属検出器による全品検査",
            "豊富なカット形態（ダイス、ハーフ、スライス、ホール、ピューレブロック）"
        ],
        "availableCutsKo": ["다이스 (10x10mm, 15x15mm, 20x20mm)", "슬라이스 / 스트립", "하프 & 세그먼트", "통원물 / 씨제거", "냉동 퓨레 블록"],
        "availableCutsJa": ["ダイス（10x10mm、15x15mm、20x20mm）", "スライス／ストリップ", "ハーフ＆セグメント", "ホール／種抜き", "冷凍ピューレブロック"],
        "defaultPackagingKo": "10kg / 15kg 청색 PE 내포장 수출 상자 또는 1000kg 옥타빈",
        "defaultPackagingJa": "10kg / 15kg ブルーPE内袋入り輸出用段ボールまたは1000kgオクタビン",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    },
    "purees": {
        "titleKo": "과일 퓨레, 원액 및 농축액",
        "titleJa": "フルーツピューレ・濃縮液・ストレート果汁",
        "subtitleKo": "산업 가공용 100% 순수 천연 과일 퓨레 & 농축액",
        "subtitleJa": "F&B産業加工用 100％天然無菌ピューレ・濃縮果汁",
        "descriptionKo": "VAC 과일 퓨레와 농축액은 베트남 최고의 완숙 열대 과일로 제조됩니다. 무균 착즙 및 순간 살균 시스템을 적용하여 합성 향료, 보존제, 설탕 추가 없이 생과일 고유의 색, 향, 영양을 보존합니다.",
        "descriptionJa": "VACのフルーツピューレと濃縮液は、ベ트ナム産の最高熟度の熱帯果実を使用しています。無菌コールドクラッシュと瞬時高温殺菌システムにより、人工香料・保存料・添加糖なしで鮮やかな色、濃郁な香り、滑らかな質感を保ちます。",
        "highlightsKo": [
            "100% 천연 생과일 원료, 설탕 및 합성 보존제 무첨가",
            "무균 공정 및 순간 살균으로 과일 본연의 향과 색상 유지",
            "Brix(°Bx), pH, 과육 함량의 엄격한 규격화",
            "다양한 규격: 씨 포함/제거 퓨레, 1배 착즙 원액, 고농축액"
        ],
        "highlightsJa": [
            "100％天然生果実原料、砂糖・人工保存料不使用",
            "無菌加工・瞬時高温殺菌による鮮やかな色と風味の維持",
            "Brix（糖度）、pH、パルプ分の厳密な標準化",
            "柔軟な規格：種入り／種抜きピューレ、ストレート果汁、高濃縮液"
        ],
        "availableCutsKo": ["무균 냉동 퓨레 (씨제거/씨포함)", "100% 착즙 생과일 원액", "고농축 과일 농축액", "드럼/파우치 포장 퓨레"],
        "availableCutsJa": ["無菌冷凍ピューレ（種抜き／種入り）", "ストレート天然果汁（Single-Strength）", "高Brix濃縮果汁", "ドラム／パウチ包装ピューレ"],
        "defaultPackagingKo": "20kg 아셉틱 팩인박스, 200kg 무균 스틸 드럼, 또는 10kg 진공 파우치",
        "defaultPackagingJa": "20kg無菌バッグインボックス（BIB）、200kg無菌スチールドラム、または10kg真空パ우チ",
        "storageKo": "퓨레 제품 -18°C 냉동 보관, 아셉틱 포장 상온/냉장 보관",
        "storageJa": "冷凍ピューレは-18℃深冷凍、無菌包装品は常温／冷蔵保管"
    },
    "seafood": {
        "titleKo": "수출용 수산물 및 해산물",
        "titleJa": "輸出用 水産物＆海鮮製品",
        "subtitleKo": "인증 가공 공장에서 직송하는 바사 피쉬, 새우 및 오징어",
        "subtitleJa": "認証加工工場直送 バサ魚・エビ・イカ製品",
        "descriptionKo": "VAC는 바사 피쉬, 블랙타이거 및 흰다리새우, 오징어/문어를 포함한 수산물 포트폴리오를 제공합니다. HACCP, BRCGS, ISO 인증 시설에서 처리되며 양식장에서 구매자까지 추적 가능합니다.",
        "descriptionJa": "VACはバサ魚、ブラックタイガー・バナメイエビ、イカ・タコを含む水産物ポートフォリオを提供しています。HACCP、BRCGS、ISO認証工場で加工され、認証養殖場から全世界へ完全なトレーサビリティを保証します。",
        "highlightsKo": [
            "HACCP, BRCGS, ISO 및 Halal 인증 가공 시설",
            "항생제 및 중금속 잔류물 엄격 검사",
            "지속적인 -18°C 초저온 콜드체인 유지",
            "다양한 수출 규격 (필렛, 스테이크, PTO, 노바시, 링, 꼬치)"
        ],
        "highlightsJa": [
            "HACCP、BRCGS、ISOおよびハラール認証加工工場",
            "抗生物質および重金属残留の厳格な検査",
            "-18℃連続深冷凍コールドチェーンの徹底",
            "多彩な輸出加工規格（フィレ、ステイク、PTO、伸長エビ、イカリング、串焼き）"
        ],
        "availableCutsKo": ["필렛 (정제/미정제)", "스테이크 / 토막", "큐브 / 포션", "PTO / P&D / 노바시 새우", "오징어 튜브 / 링 / 다리"],
        "availableCutsJa": ["フィレ（トリミング済み／未トリミング）", "ステイク・切身", "キューブ・ポーション", "PTO／P&D／ノバシエビ", "イカ筒／イカリング／イカ足"],
        "defaultPackagingKo": "1kg / 2kg PE 라이더 백 (10kg 마스터 상자 내포장)",
        "defaultPackagingJa": "1kg / 2kg PEライダー袋（10kgマスター段ボール入り）またはブロック凍結",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    },
    "crops-plant-based": {
        "titleKo": "농산물 및 식물성 제품",
        "titleJa": "農産物＆植物性製品",
        "subtitleKo": "신선, 건조, 분말, 퓨레 및 IQF 포맷 종합 포트폴리오",
        "subtitleJa": "生果・粉末・FD・ピューレ・IQFを網羅する総合ポートフォリオ",
        "descriptionKo": "VAC는 신선 과채, 분말, 퓨레/원액, 동결건조, IQF 급속 냉동 등 5가지 핵심 규격에 걸쳐 열대 농산물 포트폴리오를 제공합니다. GlobalG.A.P, HACCP, ISO, BRCGS 기준에 따라 가공됩니다.",
        "descriptionJa": "VACは、生果物・野菜、果菜パウダー、果汁・ピューレ、フリーズドライ、IQF急速冷凍の5大フォーミュラで熱帯農産物ポートフォリオを提供しています。GlobalG.A.P、HACCP、ISO、BRCGSの基準下で加工されています。",
        "highlightsKo": [
            "GlobalG.A.P 및 VietGAP 농장 추적성",
            "5가지 가공 규격 (신선, 분말, 퓨레/원액, 동결건조, IQF)",
            "콜드체인 및 수확 후 검역 처리 인증 (VHT/방사선)",
            "맞춤형 B2B 산업 포장 및 OEM 브랜딩"
        ],
        "highlightsJa": [
            "GlobalG.A.PおよびVietGAP農場のトレーサビリティ",
            "5大加工規格（生果、パウダー、ピューレ／果汁、FD、IQF）",
            "認証コールドチェーン＆収穫後処理（VHT／照射）",
            "カスタムB2B産業用包装およびOEMプライベートブランド"
        ],
        "availableCutsKo": ["통원물", "다이스 / 큐브", "퓨레 / 무균 원액", "미세 분말 (80-100 메쉬)", "동결건조 슬라이스"],
        "availableCutsJa": ["丸ごと生果", "ダイス／キューブ", "ピューレ／無菌原汁", "微粉末（80〜100メッシュ）", "FDスライス"],
        "defaultPackagingKo": "통풍 상자, 200kg 무균 드럼, 진공 봉투 및 마스터 상자",
        "defaultPackagingJa": "輸出通気段ボール、200kg無菌ドラム、真空袋およびマスター段ボール",
        "storageKo": "규격별: +2°C~+13°C (신선), -18°C (IQF/퓨레), 상온 건조 (분말/FD)",
        "storageJa": "規格による：+2℃〜+13℃（生果）、-18℃（IQF／ピューレ）、常温乾燥（パウダー／FD）"
    },
    "poultry": {
        "titleKo": "수출용 가금류 제품",
        "titleJa": "輸出用 家禽肉製品",
        "subtitleKo": "엄격한 기준에 따라 가공된 수출 등급 계육 제품",
        "subtitleJa": "厳格な国際基準に準拠した輸出グレード鶏肉製品",
        "descriptionKo": "VAC는 생물안전 상업 농장에서 조달한 고품질 계육 제품을 공급합니다. 완전한 질병 제어 및 도계 위생을 갖춘 ISO 및 Halal 인증 도계장에서 가공됩니다.",
        "descriptionJa": "VACはバイオセキュアな商業農場から調達した高品質な鶏肉製品を供給しています。完全な病原体管理と衛生基準を満たすISOおよびハラール認証屠殺場で加工されています。",
        "highlightsKo": [
            "생물안전 양계 및 조류독감 무발생 인증",
            "Halal 및 ISO 인증 도계 및 가공",
            "-35°C 급속 터널 냉동 및 초저온 보관",
            "도매상 및 가공 공장용 맞춤형 벌크 포장"
        ],
        "highlightsJa": [
            "バイオセキュア養鶏＆鳥インフルエンザ非発生認証",
            "ハラールおよびISO認証屠殺・加工",
            "-35℃トンネル急速凍結および深冷凍保管",
            "卸売業者および加工工場向けカスタムバルク包装"
        ],
        "availableCutsKo": ["통닭 (Eviscerated)", "닭발 / 닭날개", "닭가슴살 / 닭다리", "봉 / 윙컷"],
        "availableCutsJa": ["丸鶏（内臓除去済み）", "足／手羽先", "胸肉／モモ肉", "手羽元・ドラム"],
        "defaultPackagingKo": "10kg / 15kg PE 내포장 마스터 상자 또는 진공 포장",
        "defaultPackagingJa": "10kg / 15kg PE内袋マスター段ボールまたは真空パック",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    },
    "basa": {
        "titleKo": "바사 피쉬 (메콩강 판가시우스)",
        "titleJa": "バサ魚・パンガシウス",
        "subtitleKo": "메콩 메콩강 농장에서 수확한 고품질 백색육 바사 피렛",
        "subtitleJa": "メコン川デルタの高品質白身パンガシウスフィレ＆ステイク",
        "descriptionKo": "VAC는 HACCP 및 BRCGS 인증에 따라 가공된 수출 표준 바사 피쉬(Pangasius hypophthalmus)를 공급합니다. 정제 필렛, 미정제 필렛, 로즈 필렛, 스테이크, 큐브 및 꼬치 등의 형태로 제공됩니다.",
        "descriptionJa": "VACはHACCPおよびBRCGS認証のもと加工された輸出標準のバサ魚（Pangasius）を供給しています。トリミングフィレ、未トリミングフィレ、ローズフィレ、ステイク、キューブ、串焼きなどの形態で取り扱っています。",
        "highlightsKo": [
            "HACCP, BRCGS, ISO 및 Halal 인증 시설",
            "ASC / BAP 인증 지속 가능한 양식 조달",
            "100% 백색육, 항생제 및 화학 잔류물 zero 보장",
            "IQF 개별 급속 냉동 및 글레이징 맞춤 설정 (0-20%)"
        ],
        "highlightsJa": [
            "HACCP、BRCGS、ISOおよびハラール認証工場",
            "ASC／BAP認証の持続可能な水産養殖調達",
            "100％白身肉、抗生物質・化学残留物ゼロ保証",
            "IQF単体急速凍結およびグレーズ率カスタム（0〜20％）"
        ],
        "availableCutsKo": ["정제 필렛 (Well-trimmed)", "미정제 필렛 (Untrimmed)", "스테이크 / 토막", "큐브 / 포션", "로즈 필렛", "꼬치"],
        "availableCutsJa": ["トリミングフィレ（Well-trimmed）", "未トリミングフィレ（Untrimmed）", "ステイク・切身", "キューブ・ポーション", "ローズフィレ", "串焼き"],
        "defaultPackagingKo": "1kg / 2kg PE 백 (10kg 마스터 상자 내포장)",
        "defaultPackagingJa": "1kg / 2kg PE袋（10kgマスター段ボール入り）またはシャッターパック",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    },
    "shrimp": {
        "titleKo": "베트남 새우 제품 (흰다리새우 & 블랙타이거)",
        "titleJa": "ベトナム産エビ製品（バナメイ＆ブラックタイガー）",
        "subtitleKo": "HOSO, HLSO, PTO, P&D, 노바시 및 가공 규격 수출 등급 새우",
        "subtitleJa": "HOSO、HLSO、PTO、P&D、ノバシ、各種高付加価値加工エビ",
        "descriptionKo": "ASC/BAP 인증 연안 양식장에서 수확한 프리미엄 베트남 새우입니다. 블랙타이거 및 흰다리새우를 HOSO, HLSO, PTO, P&D, 노바시, 튀김용 및 자숙 IQF 규격으로 가공합니다.",
        "descriptionJa": "ASC/BAP認証沿岸養殖場から収穫されたベトナム産エビです。ブラックタイガーおよびバナメイエビをHOSO、HLSO、PTO、P&D、ノバシ、天ぷら用、ボイルIQFなどの形態で加工供給しています。",
        "highlightsKo": [
            "ASC/BAP 인증 농장의 블랙타이거 및 흰다리새우",
            "완전한 추적성 및 무질병 생물안전성",
            "부가가치 가공 규격 (노바시, 버터플라이, 튀김용)",
            "정밀 중량 선별 및 IQF 급속 냉동 품질"
        ],
        "highlightsJa": [
            "ASC/BAP認証養殖場のブラックタイガー＆バナメイエビ",
            "完全なトレーサビリティと無病原体バイオセキュリティ",
            "高付加価値加工規格（ノバシ、バタフライ、天ぷら衣付き）",
            "精密なサイズ選別とIQF品質"
        ],
        "availableCutsKo": ["HOSO (통원물)", "HLSO (머리제거)", "PTO (꼬리포함)", "P&D (껍질/내장제거)", "노바시 연장 새우", "자숙 IQF"],
        "availableCutsJa": ["HOSO（有頭・有殻）", "HLSO（無頭・有殻）", "PTO（むき身・尾付き）", "P&D（むき身・背ワタ抜き）", "ノバシ伸長エビ", "ボイルIQF（Cooked）"],
        "defaultPackagingKo": "1kg / 1.8kg 블록 냉동 상자 또는 IQF 라이더 백 (10kg 마스터 상자)",
        "defaultPackagingJa": "1kg / 1.8kg ブロック冷凍箱、またはIQF袋入り10kgマスター段ボール",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    },
    "squid": {
        "titleKo": "오징어 및 문어 제품",
        "titleJa": "遠洋イカ＆タコ製品",
        "subtitleKo": "원양 천연 오징어 & 문어: 정제 원물, 튜브, 링, 다리, 솔방울 컷",
        "subtitleJa": "天然遠洋イカ＆タコ：下処理済みホール、ツボ抜き、リング、足、松笠カット",
        "descriptionKo": "베트남 해역에서 어획한 원양 오징어와 문어로, 입항 직후 가공되어 천연의 단맛과 쫄깃한 식감을 유지합니다. 원물 정제 오징어, 튜브 (U4-U10), 링, 솔방울 컷, 다리, 건오징어 및 베이비 문어를 제공합니다.",
        "descriptionJa": "ベトナム近海で水揚げされた天然の遠洋イカ・タコで、水揚げ後すぐに加工されるため、天然の甘みと歯ごたえが保持されています。下処理ホール、ツボ抜き（U4〜U10）、イカリング、松笠カット、イカ足、スルメイカ、ベビーダコを取り揃えています。",
        "highlightsKo": [
            "100% 원양 천연 수산물로 깊은 단맛 보유",
            "입항 직후 즉시 가공으로 쫄깃한 식감 보존",
            "맞춤형 절단 (솔방울/솔잎 컷, 링, 튜브, 꼬치)",
            "EU 및 미국 FDA 등록 수출 가공 시설"
        ],
        "highlightsJa": [
            "100％遠洋天然海鮮で高い天然の甘み",
            "水揚げ直後の加工による歯ごたえの維持",
            "カスタムカット（松笠カット、リング、ツボ抜き、串焼き）",
            "EUおよび米国FDA登録済みの輸出加工工場"
        ],
        "availableCutsKo": ["원물 정제 오징어", "오징어 튜브 (U4, U5, U7, U10)", "오징어 링", "솔방울 컷 (Pineapple Cut)", "오징어 다리", "건오징어", "절단 / 베이비 문어"],
        "availableCutsJa": ["下処理済みホールイカ", "ツボ抜きイカ（U4、U5、U7、U10）", "イカリング", "松笠カット（Pineapple Cut）", "イカ足", "スルメイカ", "カット／ベビーダコ"],
        "defaultPackagingKo": "1kg / 2kg PE 백 (10kg 마스터 상자 내포장) 또는 1kg/2kg 블록 냉동",
        "defaultPackagingJa": "1kg / 2kg PE袋（10kgマスター段ボール入り）または1kg/2kgブロック冷凍",
        "storageKo": "-18°C 이하 지속 냉동 보관",
        "storageJa": "-18℃以下の連続深冷凍保管"
    }
}

file_path = "/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We need to inject ko and ja fields into each category block in CATEGORIES_DATA
for cat_id, data in categories_ko_ja.items():
    # Find category block: 'id': 'fresh' or 'fresh': {
    pattern = rf"('{cat_id}':\s*\{{.*?)(storageZh:[^\n]+)"
    
    def replacer(match):
        prefix = match.group(1)
        storage_line = match.group(2)
        
        # Format ko and ja fields
        fields = f"""
    titleKo: {repr(data['titleKo'])},
    titleJa: {repr(data['titleJa'])},
    subtitleKo: {repr(data['subtitleKo'])},
    subtitleJa: {repr(data['subtitleJa'])},
    descriptionKo: {repr(data['descriptionKo'])},
    descriptionJa: {repr(data['descriptionJa'])},
    highlightsKo: {repr(data['highlightsKo'])},
    highlightsJa: {repr(data['highlightsJa'])},
    availableCutsKo: {repr(data['availableCutsKo'])},
    availableCutsJa: {repr(data['availableCutsJa'])},
    defaultPackagingKo: {repr(data['defaultPackagingKo'])},
    defaultPackagingJa: {repr(data['defaultPackagingJa'])},
    storageKo: {repr(data['storageKo'])},
    storageJa: {repr(data['storageJa'])},"""
        return prefix + storage_line + fields

    content, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    print(f"Updated category {cat_id}: {count}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Finished updating src/data/products.ts with KO and JA category fields.")
