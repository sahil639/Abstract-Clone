import { Button } from "@/components/ui/button"

export function WalletBanner() {
  return (
    <div className="h-[152px] rounded-[20px] overflow-hidden relative bg-gradient-to-r from-[#7CD4FD] to-[#3C8CE7] text-white p-6 flex items-center">
      <div className="relative z-10 flex-1">
        <h1 className="text-2xl font-semibold mb-2">Trade anytime, anywhere.</h1>
        <p className="text-white/80 mb-4">Find the tokens you need, and exchange with ease.</p>
        <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
          Trade
        </Button>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full">
        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#FF9F43] rounded-full opacity-80" />
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-[#4834D4] rounded-full opacity-70" />
      </div>
    </div>
  )
}

