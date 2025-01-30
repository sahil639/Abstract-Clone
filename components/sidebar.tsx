"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Compass, RefreshCcw, Play, Gift, Code, Bug, Shield } from "lucide-react"

const navItems = [
  { icon: Compass, label: "Discover", href: "#" },
  { icon: RefreshCcw, label: "Trade", href: "#", isActive: true },
  { icon: Play, label: "Stream", href: "#" },
  { icon: Gift, label: "Rewards", href: "#" },
  { icon: Code, label: "Develop", href: "#" },
  { icon: Bug, label: "Bug Report", href: "#" },
  { icon: Shield, label: "Security", href: "#" },
]

export function Sidebar() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setRotation({ x: rotateX, y: rotateY })
  }

  return (
    <div className="fixed top-0 left-0 h-screen bg-[#f9f8f5] p-4">
      <div className="w-[300px] h-full bg-white rounded-[20px] p-4 overflow-y-auto scrollbar-hide">
        <div className="space-y-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qYuSWr77I1ARzIygFqHFwbrIaRZBqs.svg"
            alt="Abstract Logo"
            className="h-4 w-auto mb-8"
          />

          <motion.div
            className="relative bg-[#D2B48C] rounded-xl p-6 cursor-pointer shadow-lg"
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotation({ x: 0, y: 0 })}
          >
            <div>
              <div className="text-sm mb-2 text-[#805741]">Wallet</div>
              <div className="text-2xl font-bold mb-4 text-[#805741]">$0.00</div>
              <div className="text-xs bg-white rounded-full px-2 py-1 w-fit text-black">0.00% (7d)</div>
            </div>
          </motion.div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:translate-x-1.5 group
                  ${item.isActive ? "bg-blue-500/25 text-blue-600" : "hover:bg-gray-100"}`}
              >
                <item.icon
                  className={`w-5 h-5 ${item.isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}`}
                />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

