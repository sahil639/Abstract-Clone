import { ChevronRight, FileText, GraduationCap, MessageCircleQuestion, Github, Wallet, Users } from "lucide-react"

interface GetStartedCard {
  icon: typeof FileText
  title: string
  description: string
}

const cards: GetStartedCard[] = [
  {
    icon: FileText,
    title: "Dev Docs",
    description: "Learn to build the next generation of onchain applications.",
  },
  {
    icon: GraduationCap,
    title: "Tutorials",
    description: "Watch step-by-step tutorials to get started building.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Dev Support",
    description: "Get developer support from the Abstract community in Discord.",
  },
  {
    icon: Github,
    title: "Github",
    description: "Start contributing to Abstract's open source repositories.",
  },
  {
    icon: Wallet,
    title: "Global Wallet",
    description: "Learn more about the wallet powering the Abstract ecosystem.",
  },
  {
    icon: Users,
    title: "Abstract Events",
    description: "Meet the Abstract community at local meetups.",
  },
]

function IconWithLightLeak({ Icon }: { Icon: typeof FileText }) {
  return (
    <div className="relative w-16 h-16 bg-black rounded-xl overflow-hidden">
      {/* Light leak effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div className="relative w-full h-full flex items-center justify-center text-white">
        <Icon className="w-6 h-6" />
      </div>
    </div>
  )
}

export function GetStartedSection() {
  return (
    <div className="space-y-6">
      <div className="relative h-[200px] rounded-[20px] overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 gap-4 p-8 opacity-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="text-xs font-mono text-black">
                {`function GetStarted() {
                  return (
                    <div>
                      <h1>Get Started</h1>
                    </div>
                  )
                }`}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl font-bold mb-2">Get Started</h1>
          <p className="text-xl text-gray-600">Getting started with abstract</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group bg-white rounded-[20px] p-6 shadow-sm max-h-[260px] flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <IconWithLightLeak Icon={card.icon} />
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

