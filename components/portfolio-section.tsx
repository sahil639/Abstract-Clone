"use client"

import { Copy, Globe, Plus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LineChart, Line, ResponsiveContainer } from "recharts"

const data = [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]

export function PortfolioSection() {
  const walletAddress = "0xd415...2fAf"

  const copyAddress = () => {
    navigator.clipboard.writeText("0xd415...2fAf")
  }

  return (
    <div className="bg-white rounded-[20px] p-6 h-[190px]">
      {/* Upper part - 90px */}
      <div className="h-[90px] flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100" />
          <button onClick={copyAddress} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            {walletAddress}
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-black hover:bg-black/90">
            <Plus className="w-4 h-4 mr-2" />
            Fund
          </Button>
          <Button variant="outline">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Globe className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Lower part - 100px */}
      <div className="h-[100px] flex justify-between items-end">
        <div>
          <div className="text-2xl font-semibold mb-1">$0.00</div>
          <div className="text-sm text-gray-500">$0.00 Last 7 days</div>
        </div>
        <div className="w-[200px] h-[60px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#E2E8F0"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

