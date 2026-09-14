import os
import glob
from PIL import Image


photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = glob.glob(os.path.join(photo_dir, '*.jpg'))

print(f"Total full photos: {len(files)}")

# Let's write a script that generates a gallery HTML page with all 50 photos so we can easily map them!
html_content = """<!DOCTYPE html>
<html>
<head>
<title>Puree Photo Gallery</title>
<style>
body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card { background: #222; border-radius: 8px; overflow: hidden; padding: 10px; border: 1px solid #444; }
.card img { width: 100%; height: 200px; object-fit: cover; border-radius: 6px; }
.card p { margin: 8px 0 0 0; font-size: 12px; word-break: break-all; color: #ddd; }
</style>
</head>
<body>
<h1>VAC Puree Product Photos Gallery</h1>
<div class="grid">
"""

for filepath in files:
    fname = os.path.basename(filepath)
    rel_path = filepath
    html_content += f"""
    <div class="card">
        <img src="file://{os.path.abspath(filepath)}" alt="{fname}">
        <p><b>{fname}</b></p>
    </div>
    """

html_content += """
</div>
</body>
</html>
"""

gallery_path = 'scratch/photo_gallery.html'
with open(gallery_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Generated photo gallery at {gallery_path}")
