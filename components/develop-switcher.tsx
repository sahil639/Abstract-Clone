"use client"

import { useState } from "react"

const tabs = ["Explore", "Tools", "My Apps"]

export function DevelopSwitcher() {
  const [activeTab, setActiveTab] = useState("Explore")

  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-gray-100 rounded-full p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${activeTab === tab ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

