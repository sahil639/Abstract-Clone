import { AppCard } from "@/components/app-card"

const spotlightApps = [
  {
    id: 1,
    name: "Captain & Company",
    category: "Gaming",
    upvotes: 19529,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XxcyswZXQPEhSn9F5sbbY0koDBgzzZ.png",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Roach Racing Club",
    category: "Gaming",
    upvotes: 13892,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Moonshot",
    category: "Trading",
    upvotes: 23735,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Duper",
    category: "Gaming",
    upvotes: 8449,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Myriad",
    category: "Trading",
    upvotes: 16747,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Witty",
    category: "Gaming",
    upvotes: 14577,
    image: "/placeholder.svg?height=200&width=400",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export function SpotlightSection() {
  return (
    <div className="space-y-6">
      <div className="relative h-[200px] rounded-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6D365] to-[#FDA085]" />
        <div className="relative h-full flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold text-black mb-2">Spotlight Apps</h1>
          <p className="text-black/80">Enjoy these highly curated apps.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {spotlightApps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  )
}

