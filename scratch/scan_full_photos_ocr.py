import os
import glob
import subprocess
import json
from PIL import Image, ImageEnhance

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = sorted(glob.glob(os.path.join(photo_dir, '*.jpg')))

processed_dir = 'scratch/ocr_prep'
os.makedirs(processed_dir, exist_ok=True)

processed_files = []

for filepath in files:
    fname = os.path.basename(filepath)
    with Image.open(filepath) as img:
        # Increase contrast to make text pop
        enh = ImageEnhance.Contrast(img)
        enhanced = enh.enhance(1.8)
        out_p = os.path.join(processed_dir, fname)
        enhanced.save(out_p)
        processed_files.append((fname, out_p, filepath))

swift_script = """import Vision
import AppKit

let args = Array(CommandLine.arguments.dropFirst())

for path in args {
    let url = URL(fileURLWithPath: path)
    print("FILE_BEGIN:" + path)
    if let image = NSImage(contentsOf: url),
       let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) {
        let request = VNRecognizeTextRequest { req, err in
            req.recognitionLevel = .accurate
            req.usesLanguageCorrection = false
            if let obs = req.results as? [VNRecognizedTextObservation] {
                let texts = obs.compactMap { $0.topCandidates(1).first?.string }
                print(texts.joined(separator: " | "))
            }
        }
        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        try? handler.perform([request])
    }
    print("FILE_END")
}
"""

with open('scratch/swift_ocr_accurate.swift', 'w', encoding='utf-8') as f:
    f.write(swift_script)

prep_paths = [p[1] for p in processed_files]
cmd = ['swift', 'scratch/swift_ocr_accurate.swift'] + prep_paths
res = subprocess.run(cmd, capture_output=True, text=True)

ocr_map = {}
current_file = None
current_texts = []

for line in res.stdout.splitlines():
    if line.startswith("FILE_BEGIN:"):
        current_file = os.path.basename(line.replace("FILE_BEGIN:", "").strip())
        current_texts = []
    elif line == "FILE_END":
        if current_file:
            ocr_map[current_file] = " ".join(current_texts)
    else:
        if line.strip():
            current_texts.append(line.strip())

print(f"Scanned {len(ocr_map)} photos.")

for fname, text in ocr_map.items():
    if text.strip():
        print(f"FOUND: [{fname}] -> {text}")
