"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RefreshCcw, Play, Gift, Code, Shield, Bug, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { SecurityDialog } from "@/components/security-dialog"

const navItems = [
  { icon: DiscoverIcon, label: "Discover", href: "/discover" },
  { icon: RefreshCcw, label: "Trade", href: "/" },
  { icon: Play, label: "Stream", href: "/stream" },
  { icon: Gift, label: "Rewards", href: "/rewards" },
  { icon: Code, label: "Develop", href: "/develop" },
]

const utilityItems = [
  { icon: Bug, label: "Bug Report", href: "/bug-report" },
  { icon: Shield, label: "Security", action: "security" },
  { icon: User, label: "Profile", href: "/profile" },
]

function DiscoverIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1761_1591)">
        <path
          d="M5.43282 4.44268C5.37471 4.38464 5.32861 4.31571 5.29715 4.23983C5.2657 4.16396 5.24951 4.08263 5.24951 4.00049C5.24951 3.91836 5.2657 3.83703 5.29715 3.76116C5.32861 3.68528 5.37471 3.61635 5.43282 3.55831L8.55782 0.433304C8.61586 0.375194 8.68479 0.329094 8.76067 0.297641C8.83654 0.266189 8.91787 0.25 9 0.25C9.08214 0.25 9.16347 0.266189 9.23934 0.297641C9.31522 0.329094 9.38415 0.375194 9.44219 0.433304L12.5672 3.55831C12.6253 3.61635 12.6714 3.68528 12.7029 3.76116C12.7343 3.83703 12.7505 3.91836 12.7505 4.00049C12.7505 4.08263 12.7343 4.16396 12.7029 4.23983C12.6714 4.31571 12.6253 4.38464 12.5672 4.44268L9.44219 7.56768C9.38415 7.62579 9.31522 7.67189 9.23934 7.70334C9.16347 7.7348 9.08214 7.75098 9 7.75098C8.91787 7.75098 8.83654 7.7348 8.76067 7.70334C8.68479 7.67189 8.61586 7.62579 8.55782 7.56768L5.43282 4.44268Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1761_1591">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Sidebar() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [securityOpen, setSecurityOpen] = useState(false)
  const pathname = usePathname()

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
    <>
      <div
        className="fixed left-0 top-0 w-[332px] h-screen bg-[#f9f8f5] p-2 overflow-y-auto rounded-[20px] border border-solid border-white/60"
        style={{
          boxShadow:
            "0 3px 5px 0 rgba(200, 206, 215, .25), 0 2px 3px 0 rgba(135, 175, 199, .12), 0 4px 10px 0 rgba(222, 228, 235, .25)",
        }}
      >
        <div className="h-full bg-white p-2 overflow-y-auto scrollbar-hide rounded-[20px] flex flex-col">
          <div className="flex-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qYuSWr77I1ARzIygFqHFwbrIaRZBqs.svg"
              alt="Abstract Logo"
              className="h-4 w-auto mb-8"
            />

            <Link href="/wallet">
              <motion.div
                className="relative bg-[#D2B48C] rounded-xl p-6 cursor-pointer shadow-lg overflow-hidden mb-8"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setRotation({ x: 0, y: 0 })}
              >
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${rotation.y + 50}% ${
                      rotation.x + 50
                    }%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
                  }}
                />
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-4 right-4"
                >
                  <g clipPath="url(#clip0_1761_1610)">
                    <path
                      d="M15.821 14.9844L20.642 19.7594L18.38 21.9994L13.56 17.2254C13.146 16.8154 12.602 16.5924 12.015 16.5924C11.429 16.5924 10.884 16.8154 10.471 17.2254L5.65104 21.9994L3.38904 19.7594L8.20904 14.9844H15.818H15.821Z"
                      fill="#805741"
                    />
                    <path
                      d="M16.626 13.6077L23.209 15.3527L24.036 12.2897L17.453 10.5447C16.889 10.3957 16.42 10.0377 16.127 9.53566C15.834 9.03666 15.758 8.45266 15.909 7.89466L17.671 1.37366L14.579 0.555664L12.816 7.07566L16.623 13.6037L16.626 13.6077Z"
                      fill="#805741"
                    />
                    <path
                      d="M7.409 13.6077L0.827 15.3527L0 12.2897L6.583 10.5447C7.146 10.3957 7.616 10.0377 7.909 9.53566C8.202 9.03666 8.277 8.45266 8.127 7.89466L6.365 1.37366L9.457 0.555664L11.219 7.07566L7.413 13.6037L7.409 13.6077Z"
                      fill="#805741"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1761_1610">
                      <rect width="24" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div className="text-sm mb-2 text-[#805741]">Wallet</div>
                  <div className="text-2xl font-bold mb-4 text-[#805741]">$0.00</div>
                  <div className="text-xs bg-white rounded-full px-2 py-1 w-fit text-black">0.00% (7d)</div>
                </div>
              </motion.div>
            </Link>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group hover:translate-x-2
                    ${pathname === item.href ? "bg-[#E5F9FF]" : "hover:bg-[#E5F9FF]"}`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${
                      pathname === item.href
                        ? "bg-gradient-to-br from-[#22d6ff] via-[#9fedff] to-[#3cff73]"
                        : "bg-white border border-[#E5F9FF]"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${pathname === item.href ? "text-black" : "text-black/50 group-hover:text-black"}`}
                    />
                  </div>
                  <span
                    className={`font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${pathname === item.href ? "text-black" : "text-black/50 group-hover:text-black"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-4 space-y-2">
            {utilityItems.map((item) =>
              item.action === "security" ? (
                <button
                  key={item.label}
                  onClick={() => setSecurityOpen(true)}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group hover:translate-x-2 hover:bg-[#E5F9FF]"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#E5F9FF] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    <item.icon className="w-5 h-5 text-black/50 group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                  </div>
                  <span className="font-medium text-black/50 group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group hover:translate-x-2
                    ${pathname === item.href ? "bg-[#E5F9FF]" : "hover:bg-[#E5F9FF]"}`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${
                      pathname === item.href
                        ? "bg-gradient-to-br from-[#22d6ff] via-[#9fedff] to-[#3cff73]"
                        : "bg-white border border-[#E5F9FF]"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${pathname === item.href ? "text-black" : "text-black/50 group-hover:text-black"}`}
                    />
                  </div>
                  <span
                    className={`font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${pathname === item.href ? "text-black" : "text-black/50 group-hover:text-black"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <SecurityDialog open={securityOpen} onOpenChange={setSecurityOpen} />
    </>
  )
}

