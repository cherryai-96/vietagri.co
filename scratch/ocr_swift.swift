import Vision
import AppKit

let args = CommandLine.arguments
if args.count < 2 { exit(1) }
let url = URL(fileURLWithPath: args[1])
guard let image = NSImage(contentsOf: url),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }

let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for obs in observations {
        if let text = obs.topCandidates(1).first?.string {
            print(text)
        }
    }
}
let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try? handler.perform([request])
