import re

filepath = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace English bracket suffixes in nameZh
content = re.sub(r"nameZh:\s*'([^']+?)\s*\((Freeze-Dried|Spray-Dried|Hot-Air Dried|Puree|Concentrate)\)'", r"nameZh: '\1'", content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned English suffixes from nameZh in products.ts")
