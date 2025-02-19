import { Button } from "@/components/ui/button"

export function DevelopHero() {
  return (
    <div className="relative h-[384px] rounded-[20px] overflow-hidden bg-gray-50">
      {/* Background code snippets */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-3 gap-4 p-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="text-xs font-mono text-black">
              {`function AbstractCard(props) {
                return (
                  <div className="card">
                    {props.children}
                  </div>
                )
              }`}
            </div>
          ))}
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20at%201.10.48%E2%80%AFPM-p1Q8Pkwqj0v6m0e5dFByy3uDaxF71v.png"
            alt="Abstract Logo"
            className="absolute top-1/4 left-1/4 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20at%201.10.48%E2%80%AFPM-p1Q8Pkwqj0v6m0e5dFByy3uDaxF71v.png"
            alt="Abstract Logo"
            className="absolute bottom-1/4 right-1/4 w-16 h-16 transform translate-x-1/2 translate-y-1/2"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl font-bold mb-4">
          Build Something
          <br />
          Wonderful, On Chain
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          The power to build anything. The platform to reach everyone.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="px-8">
            Dev Docs
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Support
          </Button>
        </div>
      </div>
    </div>
  )
}

