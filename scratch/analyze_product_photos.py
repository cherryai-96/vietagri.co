import os
import glob
from PIL import Image, ImageStat


photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = glob.glob(os.path.join(photo_dir, '*.jpg'))

print(f"Total photos to analyze: {len(files)}")

# Output summary dir
summary_dir = 'scratch/photo_previews'
os.makedirs(summary_dir, exist_ok=True)

photo_stats = []

for filepath in files:
    fname = os.path.basename(filepath)
    with Image.open(filepath) as img:
        img_rgb = img.convert('RGB')
        
        # Calculate average R, G, B
        stat = ImageStat.Stat(img_rgb)
        r, g, b = stat.mean[:3]

        # Calculate dominant color hue / saturation in HSV
        img_hsv = img_rgb.convert('HSV')
        stat_hsv = ImageStat.Stat(img_hsv)
        h_mean, s_mean, v_mean = stat_hsv.mean[:3]

        # Create thumbnail
        thumb = img_rgb.copy()
        thumb.thumbnail((300, 200))
        thumb.save(os.path.join(summary_dir, fname))

        photo_stats.append({
            'filename': fname,
            'path': filepath,
            'r': round(r, 1),
            'g': round(g, 1),
            'b': round(b, 1),
            'hue': round(h_mean, 1),
            'sat': round(s_mean, 1),
            'val': round(v_mean, 1)
        })

# Sort by Hue
photo_stats.sort(key=lambda x: x['hue'])

print("\n--- CLASSIFIED PHOTO LIST BY COLOR HUE ---")
for p in photo_stats:
    print(f"File: {p['filename']} | Hue: {p['hue']} | Sat: {p['sat']} | Val: {p['val']} | R:{p['r']} G:{p['g']} B:{p['b']}")
