"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RefreshCw, Settings2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

const tabs = ["Trending", "Top", "Gainers"]

interface Token {
  id: number
  rank: number
  name: string
  symbol: string
  image: string
  price: number
  change1h: number
  change24h: number
  volume24h: number
  marketCap: number
}

const tokens: Token[] = [
  {
    id: 1,
    rank: 1,
    name: "Ether",
    symbol: "ETH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ether-q0O1r3btam7rZ9I3wCKviOA12tS3hE.png",
    price: 2708.85,
    change1h: 0.22,
    change24h: 0.77,
    volume24h: 4690000,
    marketCap: 36030000,
  },
  {
    id: 2,
    rank: 2,
    name: "Pudgy Penguins",
    symbol: "PENGU",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PUDGY%20PENGUINS.jpg-byY4sUoaPtIbSQmYv7r6CUBjDebV8y.jpeg",
    price: 0.0083,
    change1h: 0.12,
    change24h: -6.74,
    volume24h: 626090,
    marketCap: 4980000,
  },
  {
    id: 3,
    rank: 3,
    name: "USDC.e",
    symbol: "USDC.e",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USDC-V60tiyIpJifwXvcukPVvQIbKslVYMM.png",
    price: 1.0,
    change1h: 0,
    change24h: 0,
    volume24h: 4210000,
    marketCap: 4450000,
  },
  {
    id: 4,
    rank: 4,
    name: "USDT",
    symbol: "USDT",
    image: "/placeholder.svg?height=32&width=32",
    price: 1.0,
    change1h: 0,
    change24h: 0.01,
    volume24h: 531530,
    marketCap: 289510,
  },
  {
    id: 5,
    rank: 5,
    name: "Noot Noot",
    symbol: "NOOT",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00231,
    change1h: -0.43,
    change24h: -11.83,
    volume24h: 173660,
    marketCap: 2290000,
  },
  {
    id: 6,
    rank: 6,
    name: "ABSTER",
    symbol: "ABSTER",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00031,
    change1h: 2.86,
    change24h: 2.86,
    volume24h: 53160,
    marketCap: 307050,
  },
  {
    id: 7,
    rank: 7,
    name: "CHENGU",
    symbol: "CHENGU",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00042,
    change1h: 5,
    change24h: -26.32,
    volume24h: 52210,
    marketCap: 416310,
  },
  {
    id: 8,
    rank: 8,
    name: "zippy",
    symbol: "zippy",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00046,
    change1h: 0,
    change24h: 17.95,
    volume24h: 30710,
    marketCap: 317400,
  },
  {
    id: 9,
    rank: 9,
    name: "Chester",
    symbol: "CHESTE",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00016,
    change1h: 0,
    change24h: 14.29,
    volume24h: 10630,
    marketCap: 158470,
  },
  {
    id: 10,
    rank: 10,
    name: "Yup",
    symbol: "YUP",
    image: "/placeholder.svg?height=32&width=32",
    price: 0.00022,
    change1h: -4.35,
    change24h: -21.43,
    volume24h: 10330,
    marketCap: 217860,
  },
]

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(2)}M`
  } else if (num >= 1000) {
    return `$${(num / 1000).toFixed(2)}K`
  }
  return `$${num.toFixed(2)}`
}

function formatPrice(price: number): string {
  if (price >= 1) {
    return `$${price.toFixed(2)}`
  }
  return `$${price.toFixed(price < 0.0001 ? 8 : 4)}`
}

function formatPercentage(value: number): JSX.Element {
  const isPositive = value > 0
  const isNeutral = value === 0
  const color = isPositive ? "text-green-500" : isNeutral ? "text-gray-500" : "text-red-500"
  const arrow = isPositive ? "▲" : isNeutral ? "▶" : "▼"

  return (
    <span className={color}>
      {arrow} {Math.abs(value)}%
    </span>
  )
}

export function TokenTable() {
  const [activeTab, setActiveTab] = useState("Trending")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-banner">
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
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[205px]"
          />
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Settings2 className="h-4 w-4 mr-2" />
            Manage Liquidity
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">1 hour</TableHead>
              <TableHead className="text-right">24 hours</TableHead>
              <TableHead className="text-right">Volume</TableHead>
              <TableHead className="text-right">M/Cap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens
              .filter(
                (token) =>
                  token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((token) => (
                <TableRow key={token.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">#{token.rank}</span>
                      <Image
                        src={token.image || "/placeholder.svg"}
                        alt={token.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-sm text-gray-500">{token.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{formatPrice(token.price)}</TableCell>
                  <TableCell className="text-right">{formatPercentage(token.change1h)}</TableCell>
                  <TableCell className="text-right">{formatPercentage(token.change24h)}</TableCell>
                  <TableCell className="text-right font-medium">{formatNumber(token.volume24h)}</TableCell>
                  <TableCell className="text-right font-medium">{formatNumber(token.marketCap)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

