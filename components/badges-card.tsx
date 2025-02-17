import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const badges = [
  { id: 1, name: "Gold", image: "/placeholder.svg?height=64&width=64" },
  { id: 2, name: "Discord", image: "/placeholder.svg?height=64&width=64" },
  { id: 3, name: "Coffee", image: "/placeholder.svg?height=64&width=64" },
  { id: 4, name: "Silver", image: "/placeholder.svg?height=64&width=64" },
  { id: 5, name: "Bronze", image: "/placeholder.svg?height=64&width=64" },
  { id: 6, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 7, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 8, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 9, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 10, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 11, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
  { id: 12, name: "Empty", image: "/placeholder.svg?height=64&width=64" },
]

export function BadgesCard() {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-banner h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Badges</h2>
        <Button variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          View All
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="aspect-square">
            <img
              src={badge.image || "/placeholder.svg"}
              alt={badge.name}
              className="w-full h-full object-cover rounded-full border-2 border-gray-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

