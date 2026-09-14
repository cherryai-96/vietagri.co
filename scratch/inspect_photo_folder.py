import os
import glob
from PIL import Image

photo_dirs = [
    'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos',
    'scratch/puree_folder/Products photos',
    'scratch/puree_new_catalogue/Mekong Herbal Catalogue/Products photos'
]

all_photos = []
for pdir in photo_dirs:
    if os.path.exists(pdir):
        files = glob.glob(os.path.join(pdir, '*.*'))
        print(f"Directory {pdir} has {len(files)} files.")
        all_photos.extend(files)

print(f"Total photos found: {len(all_photos)}")

# Deduplicate photos by size and filename or content
unique_photos = {}
for photo_path in all_photos:
    fname = os.path.basename(photo_path)
    size = os.path.getsize(photo_path)
    key = (fname, size)
    if key not in unique_photos:
        unique_photos[key] = photo_path

print(f"Unique photos count: {len(unique_photos)}")

# Print dimensions of unique photos
photo_info = []
for (fname, size), path in unique_photos.items():
    try:
        with Image.open(path) as img:
            w, h = img.size
            mode = img.mode
            photo_info.append((fname, size, w, h, path))
            print(f"File: {fname} | Size: {size} bytes | Resolution: {w}x{h} | Path: {path}")
    except Exception as e:
        print(f"Error opening {path}: {e}")
