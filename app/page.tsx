import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { TokenList } from "@/components/token-list"
import { PriceChart } from "@/components/price-chart"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Sidebar />
      <main className="ml-[332px] p-4">
        <Header />
        <div className="mt-4 p-6 bg-white rounded-[20px] shadow-banner">
          <h2 className="text-2xl font-bold mb-6">Most popular tokens</h2>
          <div className="flex gap-4">
            <div className="w-[392px] h-full">
              <PriceChart />
            </div>
            <div className="flex-1">
              <TokenList />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

