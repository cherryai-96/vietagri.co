import os
import glob
import subprocess

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = sorted(glob.glob(os.path.join(photo_dir, '*.jpg')))

print(f"Total files found: {len(files)}")

swift_code = """import Vision
import AppKit

let args = Array(CommandLine.arguments.dropFirst())

for path in args {
    let url = URL(fileURLWithPath: path)
    let filename = url.lastPathComponent
    if let image = NSImage(contentsOf: url),
       let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) {
        let request = VNRecognizeTextRequest { req, err in
            req.recognitionLevel = .accurate
            if let obs = req.results as? [VNRecognizedTextObservation] {
                let texts = obs.compactMap { $0.topCandidates(1).first?.string }
                if !texts.isEmpty {
                    print("\\n=== \\(filename) ===")
                    print(texts.joined(separator: " | "))
                }
            }
        }
        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        try? handler.perform([request])
    }
}
"""

with open('scratch/swift_ocr_all.swift', 'w', encoding='utf-8') as f:
    f.write(swift_code)

cmd = ['swift', 'scratch/swift_ocr_all.swift'] + files
res = subprocess.run(cmd, capture_output=True, text=True)

print("--- OCR RESULTS ---")
print(res.stdout)
