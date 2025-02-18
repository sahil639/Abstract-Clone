import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface App {
  id: number
  name: string
  category: string
  description: string
  upvotes: number
  icon: string
}

interface AppListProps {
  apps: App[]
}

export function AppList({ apps }: AppListProps) {
  return (
    <div className="space-y-4">
      {apps.map((app) => (
        <div
          key={app.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="relative group">
            <Image src={app.icon || "/placeholder.svg"} alt={app.name} width={64} height={64} className="rounded-2xl" />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-colors" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{app.name}</h3>
              <span className="text-sm text-gray-500">{app.category}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{app.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full text-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              {app.upvotes.toLocaleString()}
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  )
}

