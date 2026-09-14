import os
import glob
import subprocess
import json

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = sorted(glob.glob(os.path.join(photo_dir, '*.jpg')))

swift_batch_code = """
import Vision
import AppKit

let args = Array(CommandLine.arguments.dropFirst())

for path in args {
    let url = URL(fileURLWithPath: path)
    print("FILE_BEGIN:" + path)
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
    print("FILE_END")
}
"""

with open('scratch/swift_batch.swift', 'w', encoding='utf-8') as f:
    f.write(swift_batch_code)

print("Running batch Swift OCR on all 50 photos...")
cmd = ['swift', 'scratch/swift_batch.swift'] + files
res = subprocess.run(cmd, capture_output=True, text=True)

lines = res.stdout.splitlines()
ocr_map = {}
current_file = None
current_texts = []

for line in lines:
    if line.startswith("FILE_BEGIN:"):
        current_file = os.path.basename(line.replace("FILE_BEGIN:", "").strip())
        current_texts = []
    elif line == "FILE_END":
        if current_file:
            ocr_map[current_file] = " ".join(current_texts)
    else:
        if line.strip():
            current_texts.append(line.strip())

print(f"Scanned {len(ocr_map)} photos successfully!")

with open('scratch/ocr_matched_results.json', 'w', encoding='utf-8') as f:
    json.dump(ocr_map, f, ensure_ascii=False, indent=2)

for fname, text in ocr_map.items():
    print(f"\n[{fname}] -> {text[:100]}")
