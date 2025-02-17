"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DiscIcon as Discord } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function ProfileCard() {
  const [progress, setProgress] = useState(10.94)
  const [timeLeft, setTimeLeft] = useState({ hours: 22, minutes: 45, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-banner h-full">
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-confetti.png"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">
            🏆
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">0xd415...2fAf</div>
        <div className="mt-2 text-lg font-semibold">Bronze Tier</div>
      </div>

      <Button variant="outline" className="w-full mb-6">
        <Discord className="mr-2 h-4 w-4" />
        Connect Discord to get XP Boost!
      </Button>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span>XP</span>
          <span>1,094/10,000</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="mb-6">
        <div className="text-sm mb-2">Next XP Update in</div>
        <div className="flex gap-2">
          <div className="bg-[#805741] text-white px-2 py-1 rounded text-sm">{timeLeft.hours}h</div>
          <div className="bg-[#805741] text-white px-2 py-1 rounded text-sm">{timeLeft.minutes}m</div>
          <div className="bg-[#805741] text-white px-2 py-1 rounded text-sm">{timeLeft.seconds}s</div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qYuSWr77I1ARzIygFqHFwbrIaRZBqs.svg"
          alt="Abstract Logo"
          className="w-6 h-6"
        />
        <p className="text-sm text-gray-600">
          Earn XP throughout the week by using Abstract, live streaming, and more!
        </p>
      </div>
    </div>
  )
}

