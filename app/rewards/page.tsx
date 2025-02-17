import { ProfileCard } from "@/components/profile-card"
import { MyriadBadgeCard } from "@/components/myriad-badge-card"
import { BadgesCard } from "@/components/badges-card"
import { XPRecapCard } from "@/components/xp-recap-card"
import { PerksCard } from "@/components/perks-card"

export default function RewardsPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-6">
          <MyriadBadgeCard />
        </div>
        <div className="col-span-3">
          <BadgesCard />
        </div>
        <div className="col-span-3">
          <XPRecapCard />
        </div>
        <div className="col-span-3">
          <PerksCard />
        </div>
      </div>
    </div>
  )
}

