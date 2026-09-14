import urllib.request
import re
import os
import json

folder_id = '17yM246ikasMMqybmExvW2fVKnA0nqO--'
url = f'https://drive.google.com/drive/folders/{folder_id}'

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')

    # Look for file IDs in the page
    # Google Drive folder HTML contains file IDs and titles
    matches = re.findall(r'\["([a-zA-Z0-9_-]{25,})",\["([^"]+)"', html)
    print("Matches found:", len(matches))
    for m in matches[:10]:
        print(m)

    # Alternative regex for PDF/Doc file IDs
    pdf_matches = re.findall(r'https://drive\.google\.com/file/d/([a-zA-Z0-9_-]+)', html)
    print("PDF matches:", pdf_matches)

except Exception as e:
    print("Error fetching folder:", e)
