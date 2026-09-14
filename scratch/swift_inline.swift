
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
