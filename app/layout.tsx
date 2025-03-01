import { Schibsted_Grotesk } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import "./globals.css"
import type React from "react"

const schibstedGrotesk = Schibsted_Grotesk({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>
        <div className="flex min-h-screen bg-[#f9f8f5]">
          <Sidebar />
          <main className="flex-1 ml-[332px] h-screen overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
