import { Card, CardContent } from "@/components/ui/card"

interface StreamThumbnailProps {
  title: string
  creator: string
  viewers: number
}

export function StreamThumbnail({ title, creator, viewers }: StreamThumbnailProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src="/placeholder.svg?height=180&width=320" alt={title} className="w-full h-[180px] object-cover" />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">LIVE</div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{creator}</p>
        <p className="text-sm text-gray-500">{viewers} viewers</p>
      </CardContent>
    </Card>
  )
}

