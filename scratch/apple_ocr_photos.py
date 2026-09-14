import os
import glob
import subprocess
import json

photo_dir = 'scratch/puree_catalogue_folder/Mekong Herbal Catalogue/Products photos'
files = glob.glob(os.path.join(photo_dir, '*.jpg'))

# Use macOS sips / vision via swift one-liner to OCR text from image
swift_ocr_script = """
import Vision
import AppKit

let args = CommandLine.arguments
guard args.count > 1 else { exit(1) }
let imagePath = args[1]

guard let image = NSImage(contentsOfFile: imagePath),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    exit(1)
}

let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    let strings = observations.compactMap { $5 in }
    for obs in observations {
        if let topCandidate = obs.topCandidates(1).first {
            print(topCandidate.string)
        }
    }
}

let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try? handler.perform([request])
"""

with open('scratch/ocr_swift.swift', 'w', encoding='utf-8') as f:
    f.write("""import Vision
import AppKit

let args = CommandLine.arguments
if args.count < 2 { exit(1) }
let url = URL(fileURLWithPath: args[1])
guard let image = NSImage(contentsOf: url),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }

let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for obs in observations {
        if text = obs.topCandidates(1).first?.string {
            print(text)
        }
    }
}
let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try? handler.perform([request])
""")

print("Created swift OCR script")
