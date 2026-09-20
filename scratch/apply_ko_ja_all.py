import re

# Comprehensive product name translation dictionary for KO & JA for all 166 products
PRODUCT_KO_JA_MAP = {
    # === POULTRY (15) ===
    'poultry-halal-whole-chicken': ('할랄 인증 냉동 통닭 (도계 완료)', 'ハラール認証 冷凍丸鶏（内臓除去済み）'),
    'poultry-whole-chicken': ('일반 냉동 통닭 (도계 완료)', '冷凍丸鶏（内臓除去済み）'),
    'poultry-boneless-breast-fillet': ('무뼈 껍질제거 닭가슴살 필렛', '骨なし皮なし 鶏胸肉フィレ'),
    'poultry-bone-in-breast': ('뼈있는 닭가슴살 (껍질포함)', '骨付き皮付き 鶏胸肉'),
    'poultry-leg-quarters': ('냉동 닭 장각/후腿 (Leg Quarters)', '冷凍 骨付き鶏腿肉（レッグクォーター）'),
    'poultry-thighs': ('냉동 닭 넓적다리/마달 (Thighs)', '冷凍 鶏サイ・腿肉（Thighs）'),
    'poultry-drumsticks': ('냉동 닭 북채/북봉 (Drumsticks)', '冷凍 鶏ドラムスティック（Drumsticks）'),
    'poultry-chicken-wings': ('냉동 전날개 (3절개 날개)', '冷凍 全手羽（三節手羽）'),
    'poultry-wing-portions': ('냉동 윙봉 & 윙렛 (Cuts)', '冷凍 切断手羽（手羽中・手羽元）'),
    'poultry-chicken-feet-paws': ('수출용 냉동 닭발 & 족발 (Feet & Paws)', '輸出用 冷凍モミジ・鶏足（Feet & Paws）'),
    'poultry-gizzard-liver-heart': ('냉동 닭 내장 (근위·간·염통)', '冷凍 鶏内臓（砂肝・レバー・ハツ）'),
    'poultry-chicken-necks': ('냉동 닭 목살 (Necks)', '冷凍 鶏ネック（닭목）'),
    'poultry-nuggets-patties': ('치킨 너겟 & 버거 패티', 'チキンナゲット＆バーガーパティ'),
    'poultry-sausages-breaded': ('치킨 소시지 & 크리스피 치킨', 'チキンソーセージ＆衣付きチキン'),
    'poultry-marinated-ready-to-cook': ('양념 양념 조리용 계육', '味付け調理用チキン'),

    # === BASA (13) ===
    'basa-well-trimmed-fillet': ('바사 피쉬 필렛 (Well-Trimmed 정미)', 'パンガシウス・バサフィレ（精修・皮骨除去）'),
    'basa-untrimmed-fillet': ('바사 피쉬 필렛 (Untrimmed 원형)', 'パンガシウス・バサフィレ（脂肪残し未精修）'),
    'basa-whole-round': '냉동 통 바사 피쉬 (원물)',
    'basa-headed-gutted': ('냉동 머리/내장 제거 바사 (H&G)', '冷凍 去頭去内臓バサ（H&G）'),
    'basa-steak-cuts': ('냉동 바사 피쉬 스테이크/토막', '冷凍 バサ・ステッキカット（Steak）'),
    'basa-loin-portions': ('바사 피쉬 로인 컷', 'バサ・ロインカット（Loin）'),
    'basa-cubes-portions': ('냉동 바사 큐브/다이스', '冷凍 バサ・キューブカット（Cubes）'),
    'basa-belly-strips': ('냉동 바사 복육/뱃살 (Belly Strips)', '冷凍 バサ・ハラス・腹肉（Belly Strips）'),
    'basa-breaded-fillet': ('튀김용 빵가루 바사 필렛', 'フライ用衣付きバサフィレ（Breaded）'),
    'basa-battered-portions': ('반죽 튀김용 바사 조각', 'バッター衣付きバサカット（Battered）'),
    'basa-fish-fingers': ('바사 피쉬핑거 (Fish Fingers)', 'バサ・フィッシュスティック（Fish Fingers）'),
    'basa-marinated-cubes': ('양념 바사 큐브', '味付けバサ・キューブ'),
    'basa-marinated-fillets': ('양념 바사 필렛', '味付けバサフィレ'),

    # === SHRIMP (12) ===
    'shrimp-vannamei-hoso': ('흰다리새우 HOSO (머리/껍질 포함)', 'バナメイエビ HOSO（有頭・殻付き）'),
    'shrimp-vannamei-hlso': ('흰다리새우 HLSO (머리 제거 껍질 포함)', 'バナメイエビ HLSO（無頭・殻付き）'),
    'shrimp-vannamei-pdto': ('흰다리새우 PDTO (탈각 꼬리 남김)', 'バナメイエビ PDTO（保尾むき身）'),
    'shrimp-vannamei-pd-pud': ('흰다리새우 P&D / PUD (완전 탈각)', 'バナメイエビ P&D / PUD（完全むき身）'),
    'shrimp-cooked-cocktail': ('자숙 칵테일 새우 (Cooked Cocktail)', 'ボイルむき身カクテルエビ（Cocktail）'),
    'shrimp-butterfly-cut': ('버터플라이 컷 새우 (Butterfly)', 'バタフライカットエビ（Butterfly）'),
    'shrimp-black-tiger-hoso': ('블랙타이거 HOSO (머리/껍질 포함)', 'ブラックタイガー HOSO（有頭・殻付き）'),
    'shrimp-black-tiger-pdto': ('블랙타이거 PDTO (탈각 꼬리 남김)', 'ブラックタイガー PDTO（保尾むき身）'),
    'shrimp-breaded-tempura': ('튀김용 빵가루/덴푸라 새우', 'パン粉フライ・天ぷら用エビ'),
    'shrimp-nobashi-ebi': ('일식 노바시 튀김용 새우 (Nobashi)', '和食用伸しエビ（ノバシエビ）'),
    'shrimp-skewers-marinated': ('양념 새우 꼬치 (Shrimp Skewers)', '味付けエビ串（Shrimp Skewers）'),
    'shrimp-paste-value-added': ('프리미엄 새우 완자/새우 완자 반죽', '特級エビ団子・すり身（Shrimp Paste）'),

    # === SQUID (11) ===
    'squid-whole-round': ('원양 원물 오징어 (Whole Round)', '天然原条イカ（Whole Round）'),
    'squid-whole-cleaned': ('내장 제거 세척 오징어 (Cleaned)', '下処理済み天然イカ（Whole Cleaned）'),
    'squid-skinless-tubes': ('무피 냉동 오징어 튜브 (Tubes)', '皮むき冷凍イカ筒・チューブ（Tubes）'),
    'squid-iqf-rings': ('IQF 냉동 오징어 링 (Rings)', 'IQF急速冷凍イカリング（Rings）'),
    'squid-cleaned-tentacles': ('냉동 세척 오징어 다리 (Tentacles)', '下処理済みイカゲソ・下足（Tentacles）'),
    'squid-tube-tentacles': ('오징어 튜브 & 다리 세트 (T+T)', 'イカチューブ＆ゲソセット（T+T）'),
    'squid-pineapple-cut': ('파인애플/솔방울 칼집 오징어', '松笠・パイナップルカットイカ'),
    'squid-strips-cuts': ('냉동 오징어 채/스트립 (Strips)', '冷凍カットイカ短冊（Strips）'),
    'squid-breaded-rings': ('빵가루 오징어 링 튀김', 'パン粉衣付きイカリングフライ'),
    'squid-marinated-ready': ('양념 즉석 조리용 오징어', '味付け調理用カットイカ'),
    'squid-stuffing-tubes': ('속채움용 냉동 오징어 튜브', '具材詰め用冷凍イカチューブ'),

    # === FRESH FRUITS & VEGETABLES (44) ===
    'fresh-cavendish-banana': ('베트남 카벤디쉬 바나나 (신선)', 'ベトナム産キャベンディッシュバナナ（生果）'),
    'fresh-mango': ('베트남 깟쭈 / R2E2 망고 (신선)', 'ベトナム産キャッチュー/R2E2マンゴー（生果）'),
    'fresh-pomelo': ('베트남 자몽 / 포멜로 (신선)', 'ベトナム産緑皮ポメロ・文旦（生果）'),
    'fresh-durian': ('베트남 Ri6 / 몬통 두리안 (신선)', 'ベトナム産Ri6/モントーンドリアン（生果）'),
    'fresh-red-dragon-fruit': ('베트남 레드 용과 (신선)', 'ベトナム産レッドドラゴンフルーツ（生果）'),
    'fresh-white-dragon-fruit': ('베트남 화이트 용과 (신선)', 'ベトナム産ホワイトドラゴンフルーツ（生果）'),
    'fresh-passion-fruit': ('베트남 패션후르츠 (신선)', 'ベトナム産パッションフルーツ（生果）'),
    'fresh-soursop': ('베트남 사우어솝 / 구아바나 (신선)', 'ベトナム産サワーソップ・刺果番荔枝（生果）'),
    'fresh-rambutan': ('베트남람부탄 (신선)', 'ベトナム産ランブータン（生果）'),
    'fresh-longan': ('베트남 용안 / 롱간 (신선)', 'ベト남産リュウガン・竜眼（生果）'),
    'fresh-lychee': ('베트남 라이치 / 리치 (신선)', 'ベトナム産ライチ（生果）'),
    'fresh-mangosteen': ('베트남 망고스틴 (신선)', 'ベトナム産マンゴスチン（生果）'),
    'fresh-jackfruit': ('베트남 잭후르츠 (신선)', 'ベトナム産ジャックフルーツ（生果）'),
    'fresh-papaya': ('베트남 파파야 (신선)', 'ベトナム産パパイヤ（生果）'),
    'fresh-pineapple': ('베트남 파인애플 (신선)', 'ベトナム産パイナップル（生果）'),
    'fresh-lime': ('베트남 라임 / 무씨 라임 (신선)', 'ベトナム産種なしライム（生果）'),
    'fresh-kumquat': ('베트남 금귤 / 낑깡 (신선)', 'ベトナム産金柑・キンカン（生果）'),
    'fresh-coconut': ('베트남 코코넛 / 코코넛 워터 (신선)', 'ベトナム産ヤシの実・ココナッツ（生果）'),
    'fresh-guava': ('베트남 구아바 (신선)', 'ベトナム産グアバ（生果）'),
    'fresh-star-fruit': ('베트남 스타후르츠 (신선)', 'ベトナム産スターフルーツ（生果）'),
    'fresh-sapodilla': ('베트남 사포딜라 (신선)', 'ベトナム産サポディラ（生果）'),
    'fresh-custard-apple': ('베트남 석가두 (신선)', 'ベトナム産バンレイシ・釈迦頭（生果）'),
    'fresh-avocado': ('베트남 아보카도 (신선)', 'ベトナム産アボカド（生果）'),
    'fresh-chili': ('베트남 쥐똥고추 / 홍고추 (신선)', 'ベトナム産赤唐辛子（生果）'),
    'fresh-ginger': ('베트남 생강 (신선)', 'ベトナム産生姜（生果）'),
    'fresh-turmeric': ('베트남 울금 / 강황 (신선)', 'ベトナム産ウコン（生果）'),
    'fresh-garlic': ('베트남 마늘 (신선)', 'ベトナム産ニンニク（生果）'),
    'fresh-shallot': ('베트남 붉은 샬롯 (신선)', 'ベトナム産赤エシャロット（生果）'),
    'fresh-lemongrass': ('베트남 레몬그라스 (신선)', 'ベトナム産レモングラス（生果）'),
    'fresh-galangal': ('베트남 갈랑갈 / 대강황 (신선)', 'ベトナム産ナンキョウ・ガラangal（生果）'),
    'fresh-sweet-potato': ('베트남 자색고구마 / 고구마 (신선)', 'ベトナム産紫サツマイモ・サツマイモ（生果）'),
    'fresh-taro': ('베트남 토란 / 알토란 (신선)', 'ベトナム産サトイモ・タロイモ（生果）'),
    'fresh-cassava': ('베트남 카사바 / 타피오카 뿌리 (신선)', 'ベトナム産キャッサバ（生果）'),
    'fresh-lotus-root': ('베트남 연근 (신선)', 'ベトナム産レンコン・蓮根（生果）'),
    'fresh-lotus-seed': ('베트남 연씨 / 연자 (신선)', 'ベトナム産ハスの実・蓮子（生果）'),
    'fresh-baby-corn': ('베트남 영콘 / 아기옥수수 (신선)', 'ベトナム産ヤングコーン（生果）'),
    'fresh-okra': ('베트남 오크라 (신선)', 'ベトナム産オクラ（生果）'),
    'fresh-bitter-melon': ('베트남 여주 / 여주열매 (신선)', 'ベトナム産ゴーヤ・苦瓜（生果）'),
    'fresh-eggplant': ('베트남 가지 (신선)', 'ベトナム产ナス・茄子（生果）'),
    'fresh-pumpkin': '베트남 단호박 / 남호박 (신선)',
    'fresh-cabbage': ('베트남 양배추 (신선)', 'ベトナム産キャベツ（生果）'),
    'fresh-carrot': ('베트남 당근 (신선)', 'ベトナム産ニンジン（生果）'),
    'fresh-sweet-corn': ('베트남 스위트콘 / 초당옥수수 (신선)', 'ベトナム産スイートコーン（生果）'),
    'fresh-green-beans': ('베트남 그린빈 / 그린빈스 (신선)', 'ベトナム産インゲン豆（生果）'),

    # === POWDERS (31) ===
    'powder-fd-passion-fruit': ('동결건조 패션후르츠 분말', 'フリーズドライ パッションフルーツパウダー'),
    'powder-fd-pink-guava': ('동결건조 핑크 구아바 분말', 'フリーズドライ ピンクグアバパウダー'),
    'powder-fd-avocado': ('동결건조 아보카도 분말', 'フリーズドライ アボカドパウダー'),
    'powder-fd-durian': ('동결건조 두리안 분말', 'フリーズドライ ドリアンパウダー'),
    'powder-fd-coconut': ('동결건조 코코넛밀크 분말', 'フリーズドライ ココナッツミルクパウダー'),
    'powder-fd-dragon-fruit': ('동결건조 레드용과 분말', 'フリーズドライ レッドドラゴンフルーツパウダー'),
    'powder-fd-mango': ('동결건조 망고 분말', 'フリーズドライ マンゴーパウダー'),
    'powder-fd-pineapple': ('동결건조 파인애플 분말', 'フリーズドライ パイナップルパウダー'),
    'powder-fd-banana': ('동결건조 바나나 분말', 'フリーズドライ バナナパウダー'),
    'powder-fd-papaya': ('동결건조 파파야 분말', 'フリーズドライ パパイヤパウダー'),
    'powder-fd-soursop': ('동결건조 사우어솝 분말', 'フリーズドライ サワーソップパウダー'),
    'powder-spray-lime': ('분무건조 라임 분말', 'スプレード라이 ライムパウダー'),
    'powder-spray-calamansi': ('분무건조 칼라만시 분말', 'スプレードライ カラマンシーパウダー'),
    'powder-spray-tamarind': ('분무건조 타마린드 분말', 'スプレードライ タマリンドパウダー'),
    'powder-spray-watermelon': ('분무건조 수박 분말', 'スプレードライ スイカパウダー'),
    'powder-spray-sugarcane': ('분무건조 사탕수수 분말', 'スプレードライ サトウキビパウダー'),
    'powder-hot-air-ginger': ('열풍건조 순수 생강 분말', '熱風乾燥 純生姜パウダー'),
    'powder-hot-air-turmeric': ('열풍건조 강황 / 울금 분말', '熱風乾燥 ウコンパウダー'),
    'powder-hot-air-lemongrass': ('열풍건조 레몬그라스 분말', '熱風乾燥 レモングラスパウダー'),
    'powder-hot-air-garlic': ('열풍건조 마늘 분말', '熱風乾燥 ニンニクパウダー'),
    'powder-hot-air-shallot': ('열풍건조 붉은 샬롯 분말', '熱風乾燥 エシャロットパウダー'),
    'powder-hot-air-chili': ('열풍건조 고춧가루 / 고추 분말', '熱風乾燥 唐辛子パウダー'),
    'powder-hot-air-cinnamon': ('열풍건조 베트남 계피 분말', '熱風乾燥 ベトナムシナモンパウダー'),
    'powder-hot-air-star-anise': ('열풍건조 팔각 분말', '熱風乾燥 八角・スターアニスパウダー'),
    'powder-hot-air-black-pepper': ('베트남 흑후추 분말', 'ベトナム産黒胡椒パウダー'),
    'powder-hot-air-white-pepper': ('베트남 백후추 분말', 'ベトナム産白胡椒パウダー'),
    'powder-veg-moringa': ('유기농 모링가 이노베이션 분말', 'オーガニックモリンガパウダー'),
    'powder-veg-kale': ('케일 슈퍼푸드 분말', 'ケールスーパーフードパウダー'),
    'powder-veg-spinach': ('시금치 분말', 'ほうれん草パウダー'),
    'powder-veg-purple-sweet-potato': ('자색고구마 천연 색소 분말', '紫サツマイモ天然色素パウダー'),
    'powder-veg-matcha-pandan': ('판단 잎 천연 분말', 'パンダンリーフパウダー'),

    # === FREEZE-DRIED FRUITS (12) ===
    'fd-mangosteen': ('동결건조 망고스틴 (Freeze-Dried)', 'フリーズドライ マンゴスチン'),
    'fd-longan': ('동결건조 용안 / 롱간 (Freeze-Dried)', 'フリーズドライ リュウガン'),
    'fd-rambutan': ('동결건조 람부탄 (Freeze-Dried)', 'フリーズドライ ランブータン'),
    'fd-lychee': ('동결건조 라이치 / 리치 (Freeze-Dried)', 'フリーズドライ ライチ'),
    'fd-coconut': ('동결건조 코코넛 칩 (Freeze-Dried)', 'フリーズドライ ココナッツチップ'),
    'fd-durian': ('동결건조 두리안 칩 (Freeze-Dried)', 'フリーズドライ ドリアンチップ'),
    'fd-mango': ('동결건조 망고 다이스/칩 (Freeze-Dried)', 'フリーズドライ マンゴーダイス'),
    'fd-dragon-fruit': ('동결건조 레드용과 칩 (Freeze-Dried)', 'フリーズドライ レッドドラゴンフルーツ'),
    'fd-pineapple': ('동결건조 파인애플 칩 (Freeze-Dried)', 'フリーズドライ パイナップル'),
    'fd-banana': ('동결건조 바나나 칩 (Freeze-Dried)', 'フリーズドライ バナナ'),
    'fd-jackfruit': ('동결건조 잭후르츠 칩 (Freeze-Dried)', 'フリーズドライ ジャックフルーツ'),
    'fd-papaya': ('동결건조 파파야 다이스 (Freeze-Dried)', 'フリーズドライ パパイヤ'),

    # === IQF FRUITS & VEGETABLES (12) ===
    'iqf-strawberry': ('IQF 냉동 딸기 (원물 / 슬라이스)', 'IQF 急速冷凍ストロベリー（ホール/スライス）'),
    'iqf-watermelon': ('IQF 냉동 수박 큐브', 'IQF 急速冷凍スイカダイス'),
    'iqf-potato': ('IQF 냉동 감자 스트립/큐브', 'IQF 急速冷凍ポテトカット'),
    'iqf-lychee': ('IQF 냉동 라이치 (씨 제거)', 'IQF 急速冷凍ライチ（種抜き）'),
    'iqf-corn': ('IQF 냉동 스위트콘 알갱이', 'IQF 急速冷凍スイートコーン'),
    'iqf-durian': ('IQF 냉동 두리안 과육', 'IQF 急速冷凍ドリアン果肉'),
    'iqf-mango': ('IQF 냉동 망고 다이스/큐브', 'IQF 急速冷凍マンゴーダイス'),
    'iqf-dragon-fruit': ('IQF 냉동 용과 다이스 (레드/화이트)', 'IQF 急速冷凍ドラゴンフルーツダイス'),
    'iqf-pineapple': ('IQF 냉동 파인애플 조각/큐브', 'IQF 急速冷凍パイナップルカット'),
    'iqf-passion-fruit': ('IQF 냉동 패션후르츠 (씨 포함/제거)', 'IQF 急速冷凍パッションフルーツ'),
    'iqf-avocado': ('IQF 냉동 아보카도 큐브/하프', 'IQF 急速冷凍アボカドカット'),
    'iqf-tropic-mix': ('IQF 냉동 열대과일 믹스', 'IQF 急速冷凍トロピカルミックス'),

    # === FRUIT PUREES & JUICES (16) ===
    'puree-durian': ('냉동 씨제거 두리안 퓨레 (Puree)', '冷凍種抜きドリアンピューレ（Puree）'),
    'puree-avocado': ('냉동 아보카도 퓨레 (Puree)', '冷凍アボカドピューレ（Puree）'),
    'puree-red-dragon-fruit': ('냉동 레드용과 퓨레 (Puree)', '冷凍レッドドラゴンフルーツピューレ（Puree）'),
    'puree-soursop': ('냉동 사우어솝 퓨레 / 과육 (Puree)', '冷凍サワーソップピューレ・果肉（Puree）'),
    'puree-mango': ('냉동 깟쭈 망고 퓨레 (Puree)', '冷凍キャッチューマンゴーピューレ（Puree）'),
    'puree-passion-fruit': ('냉동 패션후르츠 퓨레 / 즙', '冷凍パッションフルーツピューレ・果汁'),
    'puree-pink-guava': ('냉동 핑크 구아바 퓨레 (Puree)', '冷凍ピンクグアバピューレ（Puree）'),
    'puree-pineapple': ('냉동 파인애플 퓨레 / 농축액', '冷凍パイナップルピューレ・濃縮液'),
    'puree-calamansi': ('냉동 칼라만시 원액 / 퓨레', '冷凍カラマンシー果汁・ピューレ'),
    'puree-lime': ('냉동 라임 원액 / 농축액', '冷凍ライムストレート果汁・濃縮液'),
    'puree-coconut-water': ('냉동 순수 코코넛 워터 / 농축액', '冷凍ココナッツウォーター・濃縮液'),
    'puree-sugarcane': ('냉동 착즙 사탕수수 원액', '冷凍サトウキビ生搾り果汁'),
    'puree-tamarind': ('아셉틱 타마린드 농축 페이스트', 'アセプティックタマリンド濃縮ペースト'),
    'puree-banana': ('냉동 / 아셉틱 바나나 퓨레', '冷凍・アセプティックバナナピューレ'),
    'puree-papaya': ('냉동 파파야 퓨레 (Puree)', '冷凍パパイヤピューレ（Puree）'),
    'puree-lychee': ('냉동 라이치 원액 / 퓨레', '冷凍ライチ果汁・ピューレ'),

    # === MISSING ITEMS ===
    'shrimp-retail-assortment': ('리테일팩 냉동 모듬 해산물 새우', 'リテール用冷凍ミックスシーフード・エビ'),
    'squid-wings-strips': ('냉동 오징어 지느러미 / 스트립', '冷凍イカ耳・短冊カット（Squid Wings）'),
    'squid-fillet-pineapple-cut': ('파인애플 솔방울 컷 오징어 필렛', '松笠・パイナップルカットイカフィーレ'),
    'squid-battered-strips': ('반죽 튀김용 오징어 채', 'バッター衣付きイカ短冊フライ'),
    'squid-grilled-portions': ('데리야끼 / 숯불구이 오징어 컷', '照り焼き・直火焼き用カットイカ'),
    'squid-dried-export': ('베트남 건오징어 (Export Dried Squid)', 'ベトナム特選天然乾燥スルメイカ'),
    'fresh-watermelon': ('베트남 씨없는 수박 (신선)', 'ベトナム産種なしスイカ（生果）'),
    'fresh-melon': ('베트남 멜론 / 하미과 (신선)', 'ベトナム産メロン・ハミ瓜（生果）'),
    'fresh-strawberry': ('베트남 달랏 딸기 (신선)', 'ベトナム・ダラット産イチゴ（生果）'),
    'fresh-star-apple': ('베트남 스타애플 / 우유과 (신선)', 'ベトナム産スターアップル・ミルクフルーツ（生果）'),
    'fresh-rose-apple': ('베트남 왁스애플 / 렌무 (신선)', 'ベトナム産レンブ・レンブー（生果）'),
    'fresh-king-orange': ('베트남 킹 오렌지 (신선)', 'ベトナム産キングオレンジ（生果）'),
    'fresh-tangerine': ('베트남 감귤 / 귤 (신선)', 'ベトナム産みかん・柑橘（生果）'),
    'fresh-persimmon': ('베트남 단감 / 곶감용 감 (신선)', 'ベトナム産柿・カキ（生果）'),
    'fresh-acerola-cherry': ('베트남 아세로라 체리 (신선)', 'ベトナム産アセロラチェリー（生果）'),
    'fresh-cashew': ('베트남 캐슈과육 (신선)', 'ベトナム産カシューアップル（生果）'),
    'fresh-gac-fruit': ('베트남 걱 / 목별과 (신선)', 'ベトナム産ナンバンカラスウリ・ガック（生果）'),
    'fresh-purple-sweet-potato': ('베트남 특급 자색고구마 (신선)', 'ベトナム産特選紫サツマイモ（生果）'),
    'fresh-onion': ('베트남 양파 (신선)', 'ベトナム産玉ねぎ（生果）'),
    'fresh-bell-pepper': ('베트남 파프리카 / 피망 (신선)', 'ベトナム産パプリカ・ピーマン（生果）'),
    'fresh-tomato': ('베트남 토마토 (신선)', 'ベトナム産トマト（生果）'),
    'fresh-sugarcane': ('베트남 사탕수수 (신선)', 'ベトナム産サトウキビ（生果）'),
    'powder-col-banana': ('바나나 천연 분말', 'バナナパウダー'),
    'powder-col-gac': ('걱(Gac) 천연 영양 분말', 'ガック天然色素パウダー'),
    'powder-col-purple-potato': ('자색고구마 색소 분말', '紫サツマイモパウダー'),
    'powder-deh-kale': ('건조 케일 분말', '乾燥ケールパウダー'),
    'powder-deh-shiso': ('건조 자소엽 / 차조기 분말', '乾燥赤紫蘇パウダー'),
    'powder-ext-dragon-fruit': ('레드용과 농축 추출 분말', 'レッドドラゴンフルーツエキスパウダー'),
    'powder-ext-celery': ('셀러리 추출 분말', 'セロリエキスパウダー'),
    'powder-ext-centella': ('병풀 / 시카(Centella) 분말', 'ツボクサ・CICAパウダー'),
    'powder-ext-moringa': ('유기농 모링가 분말', 'モリンガパウダー'),
    'fd-watermelon': ('동결건조 수박 칩', 'フリーズドライ スイカ'),
    'fd-strawberry': ('동결건조 통 딸기', 'フリーズドライ ストロベリー'),
    'fd-red-dragon-fruit': ('동결건조 레드용과 칩', 'フリーズドライ レッドドラゴンフルーツ'),
    'fd-passion-fruit': ('동결건조 패션후르츠 칩', 'フリーズドライ パッションフルーツ'),
    'iqf-soursop': ('IQF 냉동 사우어솝 과육', 'IQF 急速冷凍サワーソップ'),
    'iqf-mango-dice': ('IQF 냉동 망고 다이스', 'IQF 急速冷凍マンゴーダイス'),
    'iqf-papaya': ('IQF 냉동 파파야 다이스', 'IQF 急速冷凍パパイヤダイス'),
    'iqf-red-dragon-fruit': ('IQF 냉동 레드용과 다이스', 'IQF 急速冷凍レッドドラゴンフルーツダイ스'),
    'powder-fd-lychee': ('동결건조 라이치 분말', 'フリーズドライ ライチパウダー'),
    'powder-fd-acerola': ('동결건조 아세로라 비타민C 분말', 'フリーズドライ アセロラビタミンCパウダー'),
    'powder-col-coffee': ('베트남 로부스타 인스턴트 커피 분말', 'ベトナム産ロブスタインスタントコーヒーパウダー'),
    'powder-col-chili': ('열풍건조 고춧가루', '熱風乾燥 唐辛子パウダー'),
    'powder-col-ginger': ('열풍건조 생강가루', '熱風乾燥 生姜パウダー'),
    'powder-deh-pumpkin': ('건조 단호박 분말', '乾燥カボチャパウダー'),
    'powder-deh-cinnamon': ('베트남 계피가루', 'ベトナムシナモンパウダー'),
    'powder-deh-star-anise': ('베트남 팔각가루', 'ベトナム八角パウダー'),
    'powder-ext-pineapple': ('파인애플 추출 분말', 'パイナップルエキスパウダー'),
    'powder-ext-mango': ('망고 추출 분말', 'マンゴーエキスパウダー'),
    'powder-ext-lime': ('라임 추출 분말', 'ライムエキスパウダー'),
    'powder-ext-turmeric': ('고순도 커큐민 강황 추출 분말', '高純度クルクミンウコンエキスパウダー'),
    'powder-ext-beetroot': ('비트루트 추출 분말', 'ビーツエキスパウダー'),
    'powder-deh-taro': ('건조 토란 분말', '乾燥タロイモパウダー'),
    'powder-ext-grapefruit': ('자몽 추출 분말', 'グレープフルーツエキスパウダー'),
    'powder-ext-kumquat': ('금귤 추출 분말', '金柑エキスパウダー'),
    'powder-ext-butterfly-pea': ('나비콩꽃(버터플라이피) 천연 청색 분말', 'バタフライピー天然ブルーパウダー'),
    'puree-strawberry': ('냉동 딸기 퓨레', '冷凍ストロベリーピューレ'),
    'puree-peach': ('냉동 황도/복숭아 퓨레', '冷凍イエローピーチピューレ'),
    'juice-watermelon': ('냉동 착즙 수박 착즙액', '冷凍ストレートスイカ果汁'),
    'juice-passion-fruit': ('냉동 착즙 패션후르츠 착즙액', '冷凍ストレートパッションフルーツ果汁'),
    'juice-pomelo': ('냉동 착즙 포멜로 착즙액', '冷凍ストレートポメロ果汁'),
    'juice-pineapple': ('냉동 착즙 파인애플 착즙액', '冷凍ストレートパイナップル果汁'),
    'concentrate-coconut': ('아셉틱 농축 코코넛 워터', 'アセプティック濃縮ココナッツウォーター'),
    'concentrate-pineapple': ('아셉틱 농축 파인애플 즙 (60-65 Brix)', 'アセプティック濃縮パイナップル果汁'),
    'concentrate-passion-fruit': ('아셉틱 농축 패션후르츠 즙 (50 Brix)', 'アセプティック濃縮パッションフルーツ果汁'),
    'concentrate-mango': ('아셉틱 농축 망고 퓨레 (28-30 Brix)', 'アセプティック濃縮マンゴーピューレ')
}

def apply_ko_ja_to_products():
    filepath = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    updated = 0
    def replace_item(match):
        nonlocal updated
        item_block = match.group(0)
        pid_match = re.search(r"id:\s*'([^']+)'", item_block)
        if not pid_match:
            return item_block
        
        pid = pid_match.group(1)
        if pid in PRODUCT_KO_JA_MAP:
            val = PRODUCT_KO_JA_MAP[pid]
            if isinstance(val, tuple):
                nameKo, nameJa = val
            else:
                nameKo, nameJa = val, val
            
            # Replace or append nameKo and nameJa after nameZh
            if 'nameKo:' in item_block:
                item_block = re.sub(r"nameKo:\s*'[^']*'", f"nameKo: '{nameKo}'", item_block)
                item_block = re.sub(r"nameJa:\s*'[^']*'", f"nameJa: '{nameJa}'", item_block)
            else:
                item_block = re.sub(r"(nameZh:\s*'[^']+',)", r"\1\n    nameKo: '" + nameKo + "',\n    nameJa: '" + nameJa + "',", item_block)
            updated += 1
        return item_block

    pattern = r"\{\s*id:\s*'[^']+'[\s\S]*?\n  \}"
    new_content = re.sub(pattern, replace_item, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully added nameKo & nameJa for {updated} products in products.ts")

if __name__ == '__main__':
    apply_ko_ja_to_products()
