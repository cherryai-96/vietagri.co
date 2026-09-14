import os
import glob
import subprocess

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = sorted(glob.glob(os.path.join(photo_dir, '*.jpg')))

swift_code = """
import Vision
import AppKit

let args = CommandLine.arguments
if args.count > 1 {
    let url = URL(fileURLWithPath: args[1])
    if let image = NSImage(contentsOf: url),
       let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) {
        let request = VNRecognizeTextRequest { req, err in
            if let obs = req.results as? [VNRecognizedTextObservation] {
                let texts = obs.compactMap { $0.topCandidates(1).first?.string }
                print(texts.joined(separator: " | "))
            }
        }
        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        try? handler.perform([request])
    }
}
"""

with open('scratch/swift_inline.swift', 'w', encoding='utf-8') as f:
    f.write(swift_code)

results = {}

for i, filepath in enumerate(files):
    fname = os.path.basename(filepath)
    res = subprocess.run(['swift', 'scratch/swift_inline.swift', filepath], capture_output=True, text=True)
    text = res.stdout.strip()
    results[fname] = text
    print(f"[{i+1}/{len(files)}] {fname} -> {text[:80]}")

import json
with open('scratch/ocr_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\nSaved all OCR results to scratch/ocr_results.json!")
