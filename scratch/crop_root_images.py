import os
from PIL import Image

def crop_edges(image_path, crop_pct=0.08):
    try:
        with Image.open(image_path) as img:
            width, height = img.size
            # Only crop if image width > 200 and height > 200 to avoid small icons/logos
            if width < 200 or height < 200:
                return
            left = int(width * crop_pct)
            top = int(height * crop_pct)
            right = int(width * (1.0 - crop_pct))
            bottom = int(height * (1.0 - crop_pct))
            
            cropped = img.crop((left, top, right, bottom))
            cropped.save(image_path)
            print(f"Cropped {image_path}: {width}x{height} -> {cropped.size[0]}x{cropped.size[1]}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == '__main__':
    root_dir = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/public/images'
    for f in os.listdir(root_dir):
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')) and not f.startswith(('vac-logo', 'logo', 'favicon', 'ai-about', 'icon')):
            full_path = os.path.join(root_dir, f)
            if os.path.isfile(full_path):
                crop_edges(full_path, crop_pct=0.08)
