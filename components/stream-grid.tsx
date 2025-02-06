import { StreamThumbnail } from "@/components/stream-thumbnail"

const streams = [
  { id: 1, title: "Crypto Market Analysis", creator: "CryptoExpert", viewers: 1200 },
  { id: 2, title: "NFT Showcase", creator: "ArtCollector", viewers: 800 },
  { id: 3, title: "DeFi Strategies", creator: "DeFiGuru", viewers: 1500 },
  { id: 4, title: "Blockchain Development", creator: "CodeMaster", viewers: 950 },
  { id: 5, title: "Crypto News Roundup", creator: "NewsAnchor", viewers: 2000 },
  { id: 6, title: "Trading Tips & Tricks", creator: "TradePro", viewers: 1800 },
]

export function StreamGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {streams.map((stream) => (
        <StreamThumbnail key={stream.id} {...stream} />
      ))}
    </div>
  )
}

