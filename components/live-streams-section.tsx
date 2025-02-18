import { AppCard } from "@/components/app-card"

const liveStreamApps = [
  {
    id: 1,
    name: "Stream App 1",
    category: "Gaming",
    upvotes: 15234,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Stream App 2",
    category: "Gaming",
    upvotes: 12543,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Stream App 3",
    category: "Trading",
    upvotes: 18765,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Stream App 4",
    category: "Gaming",
    upvotes: 9876,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Stream App 5",
    category: "Trading",
    upvotes: 14321,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Stream App 6",
    category: "Gaming",
    upvotes: 11234,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export function LiveStreamsSection() {
  return (
    <div className="space-y-6">
      <div className="relative h-[200px] rounded-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]" />
        <div className="relative h-full flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold text-black">Live Streams</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {liveStreamApps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  )
}

