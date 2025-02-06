import { Button } from "@/components/ui/button"

export function StreamBanner() {
  return (
    <div className="w-full bg-white p-6 rounded-[20px] shadow-banner h-[330px] flex justify-between items-center">
      <div className="max-w-[50%]">
        <div className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium mb-4">
          Go Live
        </div>
        <h1 className="text-3xl font-bold mb-2">Start Your Own Stream</h1>
        <p className="text-gray-600 mb-6">Share your insights and connect with your audience in real-time.</p>
        <Button size="lg">Become a Creator</Button>
      </div>
      <div className="w-[45%] h-full">
        <img
          src="/placeholder.svg?height=298&width=500"
          alt="Streaming"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

