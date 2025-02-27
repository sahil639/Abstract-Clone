"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const tokens = [
  {
    name: "Pudgy Penguins",
    symbol: "PENGU",
    price: 0.01547,
    change: -23.378,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PUDGY%20PENGUINS.jpg-byY4sUoaPtIbSQmYv7r6CUBjDebV8y.jpeg",
  },
  {
    name: "USDC.e",
    symbol: "USDC.e",
    price: 1.0,
    change: 0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USDC-V60tiyIpJifwXvcukPVvQIbKslVYMM.png",
  },
  {
    name: "Yup",
    symbol: "YUP",
    price: 0.00219,
    change: 8.311,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YUP.jpg-GDHu159ZqtZhfTJ408IRfvTf5RbqcR.jpeg",
  },
  {
    name: "Vibe",
    symbol: "VIBE",
    price: 0.00106,
    change: -5.234,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VINBE-Yj4OJHiEQqwx1Wadxc5dbc1mmXiMLf.png",
  },
  {
    name: "AbstractXBT",
    symbol: "ABXBT",
    price: 0.0002,
    change: 2.567,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aBSTRACTXBT.jpg-tvAKV5xnHRLe3t1tBvqUektPRYaaCA.jpeg",
  },
  {
    name: "Theo",
    symbol: "THEO",
    price: 0.0003,
    change: -1.789,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sXXvbMJg5nDvrgblV8btjorxnukqtNsrlMBu5g1u5origSErNXCzOTIZm7OC4hbb47SbxvPOJLh+YltbxFbKK3SOhH6cxubSRFgkPok830ZOotFEXEAbPD0Sfh0O4WjBQK_zsWW8tCTV2iQMYMKVEQ==.jpg-SsKeQyGlZNDNMpofpDcBhKYd8TAOs2.jpeg",
  },
]

export function TokenList() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {tokens.map((token) => (
        <Card
          key={token.symbol}
          className="p-4 rounded-[16px] w-full flex flex-col justify-between border border-solid border-black/10 bg-gradient-to-r from-[#f5f8ff] to-[#fcfdff]"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div whileHover={{ scale: 1.1 }} className="w-[38px] h-[38px] rounded-full overflow-hidden">
              <img src={token.image || "/placeholder.svg"} alt={token.name} className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <div className="font-medium text-[13px]">{token.name}</div>
              <div className="text-[11px] text-gray-500">{token.symbol}</div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-medium text-[13px]">${token.price.toFixed(5)}</div>
              <div className={`text-[11px] ${token.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {token.change >= 0 ? "+" : ""}
                {token.change.toFixed(3)}%
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
        </Card>
      ))}
    </div>
  )
}

