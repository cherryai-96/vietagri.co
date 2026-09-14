import fitz  # PyMuPDF
from PIL import Image, ImageEnhance
import os

pdf_path = 'scratch/VAC_Puree_Concentrate_Catalogue_2026.pdf'
doc = fitz.open(pdf_path)

# Render Page 3 (Puree Fruit - 8 SKUs) and Page 4 (Juice & Concentrate - 8 SKUs) at 300 DPI
zoom = 300 / 72
matrix = fitz.Matrix(zoom, zoom)

pix3 = doc[2].get_pixmap(matrix=matrix)
img3_path = 'scratch/page3_300dpi.png'
pix3.save(img3_path)

pix4 = doc[3].get_pixmap(matrix=matrix)
img4_path = 'scratch/page4_300dpi.png'
pix4.save(img4_path)

print("Page 3 size:", pix3.width, pix3.height)
print("Page 4 size:", pix4.width, pix4.height)

# Let's inspect the layout of Page 3 (8 cards in 2 rows x 4 cols or 4 rows x 2 cols)
page3_img = Image.open(img3_path)
page4_img = Image.open(img4_path)

output_dir = '/Users/tt/Desktop/Vietagri/Website/Vietagri.co/public/images/products/puree'
os.makedirs(output_dir, exist_ok=True)

# Page 3 has 8 Puree cards (2 rows of 4 columns, or 4 rows of 2 columns)
# Let's write a crop helper that extracts 8 grid bounding boxes on page 3 and page 4
# Page dimensions are width W, height H
W3, H3 = page3_img.size

# Let's measure crop boxes for Page 3 (8 Puree Fruit cards)
# Grid layout on Page 3: 2 rows x 4 columns
# Column widths: 4 columns
col_w3 = W3 / 4.0
# Header top margin: ~22% of H, Footer bottom margin: ~8% of H
# Card height area is between Y = 0.22*H to 0.88*H
row_h3 = (H3 * (0.88 - 0.22)) / 2.0

puree_names = [
    'puree_durian.png',
    'puree_avocado.png',
    'puree_dragon_fruit.png',
    'puree_soursop.png',
    'puree_mango.png',
    'puree_strawberry.png',
    'puree_pineapple.png',
    'puree_peach.png'
]

# Extract Page 3 cards
idx = 0
for r in range(2):
    for c in range(4):
        x1 = int(c * col_w3)
        y1 = int(H3 * 0.21 + r * row_h3)
        x2 = int((c + 1) * col_w3)
        y2 = int(H3 * 0.21 + (r + 1) * row_h3)

        card = page3_img.crop((x1, y1, x2, y2))
        
        # Create clean 600x600 canvas
        canvas = Image.new('RGB', (600, 600), (255, 255, 255))
        cw, ch = card.size
        scale = min(520 / cw, 520 / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = card.resize((nw, nh), Image.Resampling.LANCZOS)

        canvas.paste(resized, ((600 - nw) // 2, (600 - nh) // 2))

        # Enhance contrast and sharpness
        enhancer = ImageEnhance.Sharpness(canvas)
        canvas = enhancer.enhance(1.15)

        out_path = os.path.join(output_dir, puree_names[idx])
        canvas.save(out_path, 'PNG', quality=95)
        print(f"Saved Puree card {puree_names[idx]} -> {out_path}")
        idx += 1

# Page 4 has 4 Juice cards (Row 1) and 4 Concentrate cards (Row 2)
W4, H4 = page4_img.size
col_w4 = W4 / 4.0
row_h4 = (H4 * (0.88 - 0.22)) / 2.0

juice_concentrate_names = [
    'juice_watermelon.png',
    'juice_passion_fruit.png',
    'juice_pomelo.png',
    'juice_pineapple.png',
    'concentrate_coconut.png',
    'concentrate_pineapple.png',
    'concentrate_passion_fruit.png',
    'concentrate_mango.png'
]

idx = 0
for r in range(2):
    for c in range(4):
        x1 = int(c * col_w4)
        y1 = int(H4 * 0.21 + r * row_h4)
        x2 = int((c + 1) * col_w4)
        y2 = int(H4 * 0.21 + (r + 1) * row_h4)

        card = page4_img.crop((x1, y1, x2, y2))
        
        canvas = Image.new('RGB', (600, 600), (255, 255, 255))
        cw, ch = card.size
        scale = min(520 / cw, 520 / ch)
        nw, nh = int(cw * scale), int(ch * scale)
        resized = card.resize((nw, nh), Image.Resampling.LANCZOS)

        canvas.paste(resized, ((600 - nw) // 2, (600 - nh) // 2))

        enhancer = ImageEnhance.Sharpness(canvas)
        canvas = enhancer.enhance(1.15)

        out_path = os.path.join(output_dir, juice_concentrate_names[idx])
        canvas.save(out_path, 'PNG', quality=95)
        print(f"Saved Juice/Concentrate card {juice_concentrate_names[idx]} -> {out_path}")
        idx += 1

print("Extracted all 16 product cards from catalogue successfully!")
