import { WalletBanner } from "@/components/wallet-banner"
import { PortfolioSection } from "@/components/portfolio-section"
import { AssetsTable } from "@/components/assets-table"

export default function WalletPage() {
  return (
    <div className="p-4 space-y-4">
      <WalletBanner />
      <PortfolioSection />
      <AssetsTable />
    </div>
  )
}

