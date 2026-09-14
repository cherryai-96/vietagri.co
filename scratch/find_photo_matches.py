import os
import glob
from PIL import Image

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = glob.glob(os.path.join(photo_dir, '*.jpg'))

crops_dir = 'scratch/photo_title_crops'
os.makedirs(crops_dir, exist_ok=True)

print(f"Processing {len(files)} photos...")

for filepath in files:
    fname = os.path.basename(filepath)
    with Image.open(filepath) as img:
        w, h = img.size
        # Crop top 25% of image where product title usually is
        top_crop = img.crop((0, 0, w, int(h * 0.35)))
        crop_path = os.path.join(crops_dir, f"crop_top_{fname}")
        top_crop.save(crop_path)

        # Crop bottom 25% of image where product label might be
        bot_crop = img.crop((0, int(h * 0.65), w, h))
        crop_bot_path = os.path.join(crops_dir, f"crop_bot_{fname}")
        bot_crop.save(crop_bot_path)

print("Cropped title banners for all 50 photos.")
