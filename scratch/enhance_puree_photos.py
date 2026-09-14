import os
from PIL import Image, ImageEnhance, ImageFilter

input_dir = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/public/images/products/puree'
output_dir = input_dir

image_files = [
    'puree_durian.png', 'puree_avocado.png', 'puree_dragon_fruit.png', 'puree_soursop.png',
    'puree_mango.png', 'puree_strawberry.png', 'puree_pineapple.png', 'puree_peach.png',
    'juice_watermelon.png', 'juice_passion_fruit.png', 'juice_pomelo.png', 'juice_pineapple.png',
    'concentrate_coconut.png', 'concentrate_pineapple.png', 'concentrate_passion_fruit.png', 'concentrate_mango.png'
]

for filename in image_files:
    filepath = os.path.join(input_dir, filename)
    if not os.path.exists(filepath):
        continue

    img = Image.open(filepath).convert('RGBA')

    # Crop bounding box of non-white content
    # Find bounding box where pixel is not pure white
    bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
    diff = Image.alpha_composite(bg, img).convert('RGB')
    
    # Enhance color saturation & contrast slightly for realistic pop
    enhancer_col = ImageEnhance.Color(diff)
    diff = enhancer_col.enhance(1.12)

    enhancer_con = ImageEnhance.Contrast(diff)
    diff = enhancer_con.enhance(1.05)

    enhancer_sha = ImageEnhance.Sharpness(diff)
    diff = enhancer_sha.enhance(1.2)

    # Square Canvas 600x600 with clean studio styling
    target_size = (600, 600)
    canvas = Image.new('RGB', target_size, (255, 255, 255))

    # Resize image keeping aspect ratio to fit within 480x480 (centered)
    max_dim = 480
    w, h = diff.size
    scale = min(max_dim / w, max_dim / h)
    new_w, new_h = int(w * scale), int(h * scale)
    
    resized = diff.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Paste in center
    offset_x = (600 - new_w) // 2
    offset_y = (600 - new_h) // 2

    canvas.paste(resized, (offset_x, offset_y))
    canvas.save(filepath, 'PNG', quality=95)
    print(f"Enhanced {filename} into 600x600 photorealistic studio card.")

print("All puree images enhanced successfully!")
