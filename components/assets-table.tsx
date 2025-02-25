"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreVertical, RefreshCw, Settings2 } from "lucide-react"

const tabs = ["Tokens", "NFTs", "Transaction history"]

export function AssetsTable() {
  const [activeTab, setActiveTab] = useState("Tokens")

  return (
    <div className="bg-white rounded-[20px] p-6 h-[500px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition-all
                ${activeTab === tab ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Input placeholder="Search" className="w-[200px]" />
          <Button variant="outline">
            <Settings2 className="w-4 h-4 mr-2" />
            Manage Liquidity
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Empty state */}
      <div className="h-[calc(100%-72px)] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2">Your account is empty</h2>
        <p className="text-gray-500 mb-6">Fund your account to get started.</p>
        <Button>Fund account</Button>
      </div>
    </div>
  )
}

