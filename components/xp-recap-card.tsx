"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  { week: "W1", xp: 0 },
  { week: "W2", xp: 0 },
  { week: "W3", xp: 0 },
  { week: "W4", xp: 0 },
  { week: "W5", xp: 0 },
  { week: "W6", xp: 0 },
  { week: "W7", xp: 0 },
]

export function XPRecapCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">XP Weekly Recap</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-500">+0</span>
          <span className="text-sm text-gray-500">XP</span>
        </div>
        <div className="text-sm text-gray-500">Earned For Week 1</div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="week" />
              <YAxis />
              <Bar dataKey="xp" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <div className="p-2 bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M17 5H7" />
              <path d="M17 19H7" />
            </svg>
          </div>
          Check back on Tuesday to see how you've done this week!
        </div>
      </CardContent>
    </Card>
  )
}

