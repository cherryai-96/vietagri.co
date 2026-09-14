import fitz  # PyMuPDF
from PIL import Image
import os

pdf_path = 'scratch/VAC_Puree_Concentrate_Catalogue_2026.pdf'
doc = fitz.open(pdf_path)

print(f"Page 3 embedded images count: {len(doc[2].get_images())}")
print(f"Page 4 embedded images count: {len(doc[3].get_images())}")

# Let's inspect all image objects on page 3
p3_imgs = doc[2].get_images(full=True)
for i, img_info in enumerate(p3_imgs):
    xref = img_info[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    print(f"Page 3 Image {i+1}: xref={xref}, ext={image_ext}, size={len(image_bytes)} bytes")
    out_p = f"scratch/p3_raw_img_{i+1}.{image_ext}"
    with open(out_p, "wb") as f:
        f.write(image_bytes)

# Let's inspect all image objects on page 4
p4_imgs = doc[3].get_images(full=True)
for i, img_info in enumerate(p4_imgs):
    xref = img_info[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    print(f"Page 4 Image {i+1}: xref={xref}, ext={image_ext}, size={len(image_bytes)} bytes")
    out_p = f"scratch/p4_raw_img_{i+1}.{image_ext}"
    with open(out_p, "wb") as f:
        f.write(image_bytes)
