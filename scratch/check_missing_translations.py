import re

with open('/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Check products in PRODUCTS_LIST
# Extract PRODUCTS_LIST = [ ... ];
products_part = content.split("export const PRODUCTS_LIST: ProductItem[] = [")[1].split("export const CATEGORIES_DATA: Record<string, CategoryInfo> = {")[0]

missing_product_zh = []
missing_product_ko = []
missing_product_ja = []

# Split by product objects
blocks = products_part.split("id: '")
for b in blocks[1:]:
    prod_id = b.split("'")[0]
    if "nameZh:" not in b:
        missing_product_zh.append(prod_id)
    if "nameKo:" not in b:
        missing_product_ko.append(prod_id)
    if "nameJa:" not in b:
        missing_product_ja.append(prod_id)

print(f"Total Products: {len(blocks)-1}")
print(f"Missing Product nameZh: {len(missing_product_zh)} -> {missing_product_zh}")
print(f"Missing Product nameKo: {len(missing_product_ko)} -> {missing_product_ko}")
print(f"Missing Product nameJa: {len(missing_product_ja)} -> {missing_product_ja}")

# Check CATEGORIES_DATA
cat_part = content.split("export const CATEGORIES_DATA: Record<string, CategoryInfo> = {")[1].split("export const CATALOGUES: CatalogueInfo[] = [")[0]
cat_blocks = cat_part.split("id: '")

missing_cat_zh = []
missing_cat_ko = []
missing_cat_ja = []

for b in cat_blocks[1:]:
    cat_id = b.split("'")[0]
    for field in ["title", "subtitle", "description", "highlights", "availableCuts", "defaultPackaging", "storage"]:
        if f"{field}Zh" not in b:
            missing_cat_zh.append((cat_id, field))
        if f"{field}Ko" not in b:
            missing_cat_ko.append((cat_id, field))
        if f"{field}Ja" not in b:
            missing_cat_ja.append((cat_id, field))

print(f"\nTotal Categories: {len(cat_blocks)-1}")
print(f"Missing Category fields ZH: {len(missing_cat_zh)} -> {missing_cat_zh}")
print(f"Missing Category fields KO: {len(missing_cat_ko)} -> {missing_cat_ko}")
print(f"Missing Category fields JA: {len(missing_cat_ja)} -> {missing_cat_ja}")
