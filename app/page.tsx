import { Header } from "@/components/header"
import { TokenList } from "@/components/token-list"
import { PriceChart } from "@/components/price-chart"
import { TokenTable } from "@/components/token-table"

export default function Home() {
  return (
    <div className="p-4">
      <Header className="sticky top-0 z-10 overflow-auto" />
      <div className="mt-4">
        <div className="mt-4 p-6 bg-white rounded-[20px] shadow-banner w-full h-full relative block box-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Most popular tokens</h2>
          <div className="flex gap-4">
            <PriceChart />
            <div className="flex-1">
              <TokenList />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <TokenTable />
        </div>
      </div>
    </div>
  )
}

