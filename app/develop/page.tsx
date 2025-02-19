import { DevelopSwitcher } from "@/components/develop-switcher"
import { DevelopHero } from "@/components/develop-hero"
import { FeatureCards } from "@/components/feature-cards"
import { GetStartedSection } from "@/components/get-started-section"

export default function DevelopPage() {
  return (
    <div className="p-4 space-y-6 overflow-y-auto">
      <DevelopSwitcher />
      <DevelopHero />
      <FeatureCards />
      <GetStartedSection />
    </div>
  )
}

