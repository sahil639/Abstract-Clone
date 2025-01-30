import { Schibsted_Grotesk } from "next/font/google"
import "./globals.css"

const schibstedGrotesk = Schibsted_Grotesk({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>{children}</body>
    </html>
  )
}

