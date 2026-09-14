import gdown
import os

url = 'https://drive.google.com/drive/folders/17yM246ikasMMqybmExvW2fVKnA0nqO--'
output_dir = 'scratch/puree_new_catalogue'

os.makedirs(output_dir, exist_ok=True)

try:
    print("Downloading folder via gdown...")
    files = gdown.download_folder(url=url, output=output_dir, quiet=False, remaining_ok=True)
    print("Downloaded files:", files)
except Exception as e:
    print("Error during download:", e)
