import { SpotlightSection } from "@/components/spotlight-section"
import { LiveStreamsSection } from "@/components/live-streams-section"
import { ExploreAppsSection } from "@/components/explore-apps-section"

export default function DiscoverPage() {
  return (
    <div className="p-4 space-y-6 overflow-y-auto">
      <SpotlightSection />
      <LiveStreamsSection />
      <ExploreAppsSection />
    </div>
  )
}

