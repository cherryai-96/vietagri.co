import os
from PIL import Image

def crop_edges(image_path, crop_pct=0.08):
    """
    Crops crop_pct (e.g. 8%) off all four edges of an image
    to eliminate distorted borders/frames from source catalogue extractions.
    """
    try:
        with Image.open(image_path) as img:
            width, height = img.size
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
    base_dir = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/public/images/products'
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                full_path = os.path.join(root, f)
                crop_edges(full_path, crop_pct=0.08)
