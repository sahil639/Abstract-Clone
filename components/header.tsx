import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <div className="w-full bg-white p-6 rounded-[20px] shadow-banner">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[32px] font-bold mb-2">Trade anytime, anywhere</h1>
        <p className="text-[16px] text-gray-600 mb-6">Find the tokens you need, and exchange with ease.</p>
        <div className="relative max-w-[400px] mx-auto">
          <Input placeholder="Search token name, symbol or address" className="pl-10 h-[48px] pr-4" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

