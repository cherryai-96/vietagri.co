import re

file_path = "/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/data/products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix storageZh without trailing comma
content = re.sub(r"(storageZh:[^\n,]+)(\n\s*titleKo:)", r"\1,\2", content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed storageZh trailing commas in src/data/products.ts")
