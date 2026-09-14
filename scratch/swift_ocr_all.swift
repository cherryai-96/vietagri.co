import Vision
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
                    print("\n=== \(filename) ===")
                    print(texts.joined(separator: " | "))
                }
            }
        }
        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        try? handler.perform([request])
    }
}
