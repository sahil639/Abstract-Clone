import { StreamBanner } from "@/components/stream-banner"
import { StreamGrid } from "@/components/stream-grid"
import { StreamFilter } from "@/components/stream-filter"

export default function StreamPage() {
  return (
    <div className="p-4">
      <StreamBanner />
      <div className="mt-4 p-6 bg-white rounded-[20px] shadow-banner">
        <div className="flex justify-between items-center mb-6">
          <StreamFilter />
          <h2 className="text-2xl font-bold">All Streams</h2>
        </div>
        <StreamGrid />
      </div>
    </div>
  )
}

