import os
import glob
from PIL import Image

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = sorted(glob.glob(os.path.join(photo_dir, '*.jpg')))

print(f"Total photos in Products photos: {len(files)}")
for i, f in enumerate(files):
    fname = os.path.basename(f)
    print(f"[{i+1}] {fname}")
