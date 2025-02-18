"use client"

import { useState } from "react"
import { AppList } from "@/components/app-list"
import { CategorySwitcher } from "@/components/category-switcher"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["Featured", "Gaming", "Trading", "Social"]

const apps = [
  {
    id: 1,
    name: "Penguin Life",
    category: "Gaming",
    description:
      "Penguin Life is a cozy, all-ages mobile simulation game where players farm resources and expand their islands. Players will earn soulbound achievements and discover eggs with...",
    upvotes: 6424,
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    name: "Gamblor",
    category: "Gaming",
    description:
      "Gamblor.io → The only true crypto casino Features: a. Crypto exclusive deposits and withdrawals with no waiting times, delays, or blocks. b. Full customer privacy with no KYC...",
    upvotes: 4979,
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    name: "Spray & Pray",
    category: "Trading",
    description:
      "Spray & Pray is a no-loss social finance and trading platform that gives users the thrill of crypto trading without any financial risk, combining engaging social gaming with simulate...",
    upvotes: 4867,
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 4,
    name: "Franky's Dinner",
    category: "Gaming",
    description:
      "Franky's Dinner is a US-based multimedia company blending animation and mobile game development to deliver innovative, community-driven experiences. Our flagship mobile...",
    upvotes: 4767,
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 5,
    name: "Vibes TCG",
    category: "Gaming",
    description:
      "A digital & physical trading card game, officially licensing the Pudgy Penguins IP. Create your account to collect, trade, and compete with Pudgy Penguins, each with unique...",
    upvotes: 3767,
    icon: "/placeholder.svg?height=64&width=64",
  },
]

export function ExploreAppsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Featured")

  return (
    <div className="space-y-6">
      <div className="relative h-[200px] rounded-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#84fab0] via-[#8fd3f4] to-[#84fab0]" />
        <div className="relative h-full flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold text-black mb-2">Explore All Apps</h1>
          <p className="text-black/80">Your gateway to decentralized apps starts here.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Featured Apps
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </h2>
        </div>

        <CategorySwitcher categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />

        <AppList apps={apps} />
      </div>
    </div>
  )
}

