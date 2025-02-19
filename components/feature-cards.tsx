interface FeatureCard {
  icon: string
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: "ethereum",
    title: "Scaled with Abstract, Secured by Ethereum",
    description:
      "Abstract is a Layer 2 blockchain built on top of Ethereum, the world's most secure and decentralized computing platform. Onchain apps built on Abstract can leverage Ethereum's security while still being able to scale without bounds.",
  },
  {
    icon: "security",
    title: "Cutting-Edge Security, Micro-Level Costs",
    description:
      "Abstract uses cutting-edge zero-knowledge cryptography from the ZK Stack to secure assets and scale transaction throughput. Cryptographic proofs ensure the safety of assets while users enjoy sub-cent transaction fees.",
  },
  {
    icon: "support",
    title: "Support That Speaks Your Language",
    description:
      "Abstract's support infrastructure is built with one goal in mind: your success. Our team of experts are dedicated to your success, providing the tools, resources, and assistance you need to bring your vision to life.",
  },
]

function IconWithLightLeak({ name }: { name: string }) {
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
        {name === "ethereum" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L4 12L12 16L20 12L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L12 22L20 12L12 16L4 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {name === "security" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {name === "support" && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  )
}

export function FeatureCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {features.map((feature) => (
        <div key={feature.title} className="bg-white rounded-[20px] p-6 shadow-sm h-[425px] flex flex-col">
          <IconWithLightLeak name={feature.icon} />
          <h3 className="text-xl font-semibold mt-6 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

