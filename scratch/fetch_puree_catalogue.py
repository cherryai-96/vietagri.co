import gdown
import os

pdf_id = '1S5D829gwdnJuHvCJN6EHFK3we_Eh8pLQ'
url = f'https://drive.google.com/uc?id={pdf_id}'
output_file = 'scratch/VAC_Puree_Concentrate_Catalogue_2026.pdf'

print("Downloading Puree & Concentrate Catalogue PDF...")
gdown.download(url, output_file, quiet=False)
print("Downloaded to:", output_file)
