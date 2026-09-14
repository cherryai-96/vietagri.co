
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
