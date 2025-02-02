"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RefreshCcw, Play, Gift, Code, Bug, Shield } from "lucide-react"

const navItems = [
  { icon: RefreshCcw, label: "Trade", href: "#" },
  { icon: Play, label: "Stream", href: "#" },
  { icon: Gift, label: "Rewards", href: "#" },
  { icon: Code, label: "Develop", href: "#" },
  { icon: Bug, label: "Bug Report", href: "#" },
  { icon: Shield, label: "Security", href: "#" },
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
          d="M5.43282 4.44268C5.37471 4.38464 5.32861 4.31571 5.29715 4.23983C5.2657 4.16396 5.24951 4.08263 5.24951 4.00049C5.24951 3.91836 5.2657 3.83703 5.29715 3.76116C5.32861 3.68528 5.37471 3.61635 5.43282 3.55831L8.55782 0.433304C8.61586 0.375194 8.68479 0.329094 8.76067 0.297641C8.83654 0.266189 8.91787 0.25 9 0.25C9.08214 0.25 9.16347 0.266189 9.23934 0.297641C9.31522 0.329094 9.38415 0.375194 9.44219 0.433304L12.5672 3.55831C12.6253 3.61635 12.6714 3.68528 12.7029 3.76116C12.7343 3.83703 12.7505 3.91836 12.7505 4.00049C12.7505 4.08263 12.7343 4.16396 12.7029 4.23983C12.6714 4.31571 12.6253 4.38464 12.5672 4.44268L9.44219 7.56768C9.38415 7.62579 9.31522 7.67189 9.23934 7.70334C9.16347 7.7348 9.08214 7.75098 9 7.75098C8.91787 7.75098 8.83654 7.7348 8.76067 7.70334C8.68479 7.67189 8.61586 7.62579 8.55782 7.56768L5.43282 4.44268ZM9.44219 10.4333C9.38415 10.3752 9.31522 10.3291 9.23934 10.2977C9.16347 10.2662 9.08214 10.25 9 10.25C8.91787 10.25 8.83654 10.2662 8.76067 10.2977C8.68479 10.3291 8.61586 10.3752 8.55782 10.4333L5.43282 13.5583C5.37471 13.6164 5.32861 13.6853 5.29715 13.7612C5.2657 13.837 5.24951 13.9184 5.24951 14.0005C5.24951 14.0826 5.2657 14.164 5.29715 14.2398C5.32861 14.3157 5.37471 14.3846 5.43282 14.4427L8.55782 17.5677C8.61586 17.6258 8.68479 17.6719 8.76067 17.7034C8.83654 17.7348 8.91787 17.751 9 17.751C9.08214 17.751 9.16347 17.7348 9.23934 17.7034C9.31522 17.6719 9.38415 17.6258 9.44219 17.5677L12.5672 14.4427C12.6253 14.3846 12.6714 14.3157 12.7029 14.2398C12.7343 14.164 12.7505 14.0826 12.7505 14.0005C12.7505 13.9184 12.7343 13.837 12.7029 13.7612C12.6714 13.6853 12.6253 13.6164 12.5672 13.5583L9.44219 10.4333ZM17.5672 8.55831L14.4422 5.43331C14.3841 5.3752 14.3152 5.3291 14.2393 5.29764C14.1635 5.26619 14.0821 5.25 14 5.25C13.9179 5.25 13.8365 5.26619 13.7607 5.29764C13.6848 5.3291 13.6159 5.3752 13.5578 5.43331L10.4328 8.55831C10.3747 8.61635 10.3286 8.68528 10.2972 8.76116C10.2657 8.83703 10.2495 8.91836 10.2495 9.00049C10.2495 9.08263 10.2657 9.16396 10.2972 9.23983C10.3286 9.31571 10.3747 9.38464 10.4328 9.44268L13.5578 12.5677C13.6159 12.6258 13.6848 12.6719 13.7607 12.7034C13.8365 12.7348 13.9179 12.751 14 12.751C14.0821 12.751 14.1635 12.7348 14.2393 12.7034C14.3152 12.6719 14.3841 12.6258 14.4422 12.5677L17.5672 9.44268C17.6253 9.38464 17.6714 9.31571 17.7029 9.23983C17.7343 9.16396 17.7505 9.08263 17.7505 9.00049C17.7505 8.91836 17.7343 8.83703 17.7029 8.76116C17.6714 8.68528 17.6253 8.61635 17.5672 8.55831ZM7.56719 8.55831L4.44219 5.43331C4.38415 5.3752 4.31522 5.3291 4.23934 5.29764C4.16347 5.26619 4.08214 5.25 4 5.25C3.91787 5.25 3.83654 5.26619 3.76067 5.29764C3.68479 5.3291 3.61586 5.3752 3.55782 5.43331L0.432816 8.55831C0.374706 8.61635 0.328606 8.68528 0.297153 8.76116C0.265701 8.83703 0.249512 8.91836 0.249512 9.00049C0.249512 9.08263 0.265701 9.16396 0.297153 9.23983C0.328606 9.31571 0.374706 9.38464 0.432816 9.44268L3.55782 12.5677C3.61586 12.6258 3.68479 12.6719 3.76067 12.7034C3.83654 12.7348 3.91787 12.751 4 12.751C4.08214 12.751 4.16347 12.7348 4.23934 12.7034C4.31522 12.6719 4.38415 12.6258 4.44219 12.5677L7.56719 9.44268C7.6253 9.38464 7.6714 9.31571 7.70285 9.23983C7.73431 9.16396 7.75049 9.08263 7.75049 9.00049C7.75049 8.91836 7.73431 8.83703 7.70285 8.76116C7.6714 8.68528 7.6253 8.61635 7.56719 8.55831Z"
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
  const [activeItem, setActiveItem] = useState("Discover")

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
            className="relative bg-[#D2B48C] rounded-xl p-6 cursor-pointer shadow-lg overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotation({ x: 0, y: 0 })}
          >
            {/* Add lighting effect */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${rotation.y + 50}% ${rotation.x + 50}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
              }}
            />

            {/* Add SVG to top-right corner */}
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

          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group hover:translate-x-2
                  ${activeItem === item.label ? "bg-[#E5F9FF]" : "hover:bg-[#E5F9FF]"}`}
                onClick={() => setActiveItem(item.label)}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${
                    activeItem === item.label
                      ? "bg-gradient-to-br from-[#22d6ff] via-[#9fedff] to-[#3cff73]"
                      : "bg-white border border-[#E5F9FF]"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${activeItem === item.label ? "text-black" : "text-black/50 group-hover:text-black"}`}
                  />
                </div>
                <span
                  className={`font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${activeItem === item.label ? "text-black" : "text-black/50 group-hover:text-black"}`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

