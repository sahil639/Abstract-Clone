"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function MyriadBadgeCard() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 45, seconds: 0 })

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
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-[20px] p-6 shadow-banner h-full relative overflow-hidden">
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-sm">{timeLeft.hours}h</div>
        <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-sm">{timeLeft.minutes}m</div>
        <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-sm">{timeLeft.seconds}s</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="max-w-[60%]">
          <div className="text-sm text-yellow-600 mb-2">⚡ Flash Badge</div>
          <h2 className="text-2xl font-bold mb-2">Myriad Master</h2>
          <p className="text-sm text-gray-600 mb-4">
            This badge is awarded to users who has any amount of money on a market in Myriad.
          </p>
          <Button variant="outline">View Details</Button>
        </div>
        <div className="w-[200px] h-[200px]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8M2aqo0MY0D95WOhYbt3HMAaOJOgh.png"
            alt="Myriad Master Badge"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

