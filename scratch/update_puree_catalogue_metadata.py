import os

products_file = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'
header_file = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/components/Header.tsx'

# 1. Update products.ts CATEGORIES_DATA['purees'] title and catalogue reference
with open(products_file, 'r', encoding='utf-8') as f:
    p_content = f.read()

p_content = p_content.replace(
    "titleEn: 'Fruit Purees & Concentrates',",
    "titleEn: 'Puree Fruit, Juice & Concentrates',"
).replace(
    "titleVi: 'Trái Cây Xay Nhuyễn & Nước Ép Đậm Đặc (Puree & Concentrate)',",
    "titleVi: 'Puree Trái Cây, Nước Ép & Đậm Đặc (Puree Fruit & Juices)',"
).replace(
    "catalogueFileName: 'VAC_IQF_Puree_Catalogue_2026.pdf',",
    "catalogueFileName: 'VAC_Puree_Concentrate_Catalogue_2026.pdf',"
).replace(
    "catalogueDriveId: '1o3DgzPTqN9fjnEEsuFG-YnNzkG_A2aRj',",
    "catalogueDriveId: '1S5D829gwdnJuHvCJN6EHFK3we_Eh8pLQ',"
)

with open(products_file, 'w', encoding='utf-8') as f:
    f.write(p_content)

print("Updated products.ts!")

# 2. Update Header.tsx menu title for Purees item
with open(header_file, 'r', encoding='utf-8') as f:
    h_content = f.read()

h_content = h_content.replace(
    "label: language === 'vi' ? 'Trái cây xay nhuyễn (Purees)' : 'Fruit Purees'",
    "label: language === 'vi' ? 'Puree trái cây (Puree Fruit & Juices)' : 'Puree Fruit & Juices'"
)

with open(header_file, 'w', encoding='utf-8') as f:
    f.write(h_content)

print("Updated Header.tsx!")
