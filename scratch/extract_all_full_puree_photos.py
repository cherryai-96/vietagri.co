import fitz  # PyMuPDF
from PIL import Image, ImageEnhance
import os

pdf_path = 'scratch/VAC_Puree_Concentrate_Catalogue_2026.pdf'
doc = fitz.open(pdf_path)

# Render pages at 300 DPI for ultra crisp detail
zoom = 300 / 72
matrix = fitz.Matrix(zoom, zoom)

pix3 = doc[2].get_pixmap(matrix=matrix)
pix4 = doc[3].get_pixmap(matrix=matrix)

img3 = Image.frombytes("RGB", [pix3.width, pix3.height], pix3.samples)
img4 = Image.frombytes("RGB", [pix4.width, pix4.height], pix4.samples)

output_dir = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/public/images/products/puree'
os.makedirs(output_dir, exist_ok=True)

W3, H3 = img3.size
W4, H4 = img4.size

# Exact grid bounding boxes for Page 3 (8 Puree Fruit SKUs)
# 4 columns x 2 rows
col_w3 = W3 / 4.0
row_h3 = (H3 * (0.87 - 0.20)) / 2.0

puree_skus = [
    'puree_durian.png',
    'puree_avocado.png',
    'puree_dragon_fruit.png',
    'puree_soursop.png',
    'puree_mango.png',
    'puree_strawberry.png',
    'puree_pineapple.png',
    'puree_peach.png'
]

idx = 0
for r in range(2):
    for c in range(4):
        x1 = int(c * col_w3 + col_w3 * 0.02)
        y1 = int(H3 * 0.205 + r * row_h3 + row_h3 * 0.02)
        x2 = int((c + 1) * col_w3 - col_w3 * 0.02)
        y2 = int(H3 * 0.205 + (r + 1) * row_h3 - row_h3 * 0.02)

        cropped = img3.crop((x1, y1, x2, y2))

        # Create clean square 800x800 canvas
        canvas = Image.new('RGB', (800, 800), (255, 255, 255))
        cw, ch = cropped.size
        scale = min(720 / cw, 720 / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)

        canvas.paste(resized, ((800 - nw) // 2, (800 - nh) // 2))

        # Enhance contrast & sharpness
        enhancer = ImageEnhance.Sharpness(canvas)
        canvas = enhancer.enhance(1.2)

        out_file = os.path.join(output_dir, puree_skus[idx])
        canvas.save(out_file, 'PNG', quality=95)
        print(f"Saved FULL product photo [{puree_skus[idx]}] -> {out_file}")
        idx += 1

# Page 4 (4 Juices + 4 Concentrates)
juice_concentrate_skus = [
    'juice_watermelon.png',
    'juice_passion_fruit.png',
    'juice_pomelo.png',
    'juice_pineapple.png',
    'concentrate_coconut.png',
    'concentrate_pineapple.png',
    'concentrate_passion_fruit.png',
    'concentrate_mango.png'
]

col_w4 = W4 / 4.0
row_h4 = (H4 * (0.87 - 0.20)) / 2.0

idx = 0
for r in range(2):
    for c in range(4):
        x1 = int(c * col_w4 + col_w4 * 0.02)
        y1 = int(H4 * 0.205 + r * row_h4 + row_h4 * 0.02)
        x2 = int((c + 1) * col_w4 - col_w4 * 0.02)
        y2 = int(H4 * 0.205 + (r + 1) * row_h4 - row_h4 * 0.02)

        cropped = img4.crop((x1, y1, x2, y2))

        canvas = Image.new('RGB', (800, 800), (255, 255, 255))
        cw, ch = cropped.size
        scale = min(720 / cw, 720 / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)

        canvas.paste(resized, ((800 - nw) // 2, (800 - nh) // 2))

        enhancer = ImageEnhance.Sharpness(canvas)
        canvas = enhancer.enhance(1.2)

        out_file = os.path.join(output_dir, juice_concentrate_skus[idx])
        canvas.save(out_file, 'PNG', quality=95)
        print(f"Saved FULL product photo [{juice_concentrate_skus[idx]}] -> {out_file}")
        idx += 1

print("Successfully extracted all 16 FULL product photos!")
