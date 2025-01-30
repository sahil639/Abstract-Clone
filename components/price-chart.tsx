"use client"

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { time: "1", value: 3000 },
  { time: "2", value: 3200 },
  { time: "3", value: 3800 },
  { time: "4", value: 3100 },
  { time: "5", value: 2900 },
  { time: "6", value: 3000 },
  { time: "7", value: 3200 },
]

export function PriceChart() {
  return (
    <Card className="w-full max-w-[392px] h-full">
      <CardHeader>
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
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

