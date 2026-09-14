import os
import glob
import subprocess

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = glob.glob(os.path.join(photo_dir, '*.jpg'))

print(f"OCR scanning {len(files)} photos...")

results = {}

for filepath in files:
    fname = os.path.basename(filepath)
    cmd = ['./scratch/ocr_bin', filepath]
    res = subprocess.run(cmd, capture_output=True, text=True)
    text = res.stdout.strip()
    results[fname] = text
    print(f"\n--- {fname} ---")
    print(text)

with open('scratch/ocr_results.json', 'w', encoding='utf-8') as f:
    import json
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\nSaved all OCR results to scratch/ocr_results.json!")
