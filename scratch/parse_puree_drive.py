import requests
import re
import json

url = "https://drive.google.com/drive/folders/17yM246ikasMMqybmExvW2fVKnA0nqO--?hl=vi"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

res = requests.get(url, headers=headers)
html = res.text

# Extract json data blocks inside script tags
matches = re.findall(r'window\[\'_DRIVE_iv\'\]\s*=\s*(\{.*?\});', html)
if not matches:
    matches = re.findall(r'AF_initDataCallback\(\{key:\s*\'ds:[\d]+\',\s*hash:\s*\'[\d]+\',\s*data:(.*?)\}\);', html, re.DOTALL)

print("Found AF_initDataCallback data blocks:", len(matches))

# Let's search for filenames and file IDs in html
items = re.findall(r'\["([a-zA-Z0-9_-]{25,})",\["([^"]+)"', html)
print("Extracted items count:", len(items))
for item in items:
    print(item)

# Search for any PDF or DOCX filenames
pdf_files = re.findall(r'[\w\s-]+\.(?:pdf|docx|png|jpg|jpeg)', html, re.IGNORECASE)
print("Files mentioned in HTML:", set(pdf_files))
