"use client"

import { Line, LineChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const generateData = () => {
  const data = []
  const now = new Date()
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000)
    data.push({
      time: time.toISOString(),
      value: 3000 + Math.random() * 200 - 100,
    })
  }
  return data
}

const data = generateData()

export function PriceChart() {
  return (
    <Card className="w-[40%] h-full">
      <CardHeader className="w-full">
        <CardTitle className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ether-q0O1r3btam7rZ9I3wCKviOA12tS3hE.png"
            alt="ETH"
            className="w-6 h-6"
          />
          <div>
            <span>Ether (ETH)</span>
            <div className="text-sm text-red-500">-3.458%</div>
          </div>
          <div className="ml-auto text-2xl font-bold">$3,059.75</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#colorGradient)"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22d3ee"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
                fillOpacity={1}
                fill="url(#colorGradient)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

