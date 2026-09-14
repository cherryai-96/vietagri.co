import subprocess

cmd = ['python3', '-m', 'gdown', '--folder', 'https://drive.google.com/drive/folders/17yM246ikasMMqybmExvW2fVKnA0nqO--', '-O', 'scratch/puree_catalogue_folder', '--remaining-ok']

res = subprocess.run(cmd, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
