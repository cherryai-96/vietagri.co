import fitz # PyMuPDF
import os

pdf_path = 'scratch/VAC_Puree_Concentrate_Catalogue_2026.pdf'
doc = fitz.open(pdf_path)

print(f"Total Pages in Puree Catalogue: {len(doc)}")

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text("text")
    print(f"\n--- PAGE {page_num + 1} ---")
    print(text.strip())

    # Render page as PNG image for inspection
    pix = page.get_pixmap(dpi=150)
    img_path = f"scratch/puree_cat_p{page_num + 1}.png"
    pix.save(img_path)
    print(f"Rendered page image: {img_path}")
