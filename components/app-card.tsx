import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"

interface AppCardProps {
  name: string
  category: string
  upvotes: number
  image: string
  icon: string
}

export function AppCard({ name, category, upvotes, image, icon }: AppCardProps) {
  return (
    <div className="relative h-[200px] rounded-[20px] overflow-hidden group">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={200}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

      {/* Top badges */}
      <div className="absolute top-4 left-4">
        <div className="bg-[#F6D365] text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="w-4 h-4" />
          Spotlight
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">{upvotes.toLocaleString()}</div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${name} icon`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-sm">{name}</div>
              <div className="text-xs text-gray-600">{category}</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-8">
            Visit app
          </Button>
        </div>
      </div>
    </div>
  )
}

