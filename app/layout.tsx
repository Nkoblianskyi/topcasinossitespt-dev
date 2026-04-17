import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "topcasinossitespt.com | Top Casinos Online em Portugal 2025",
  description:
    "O portal de referência para os melhores casinos online em Portugal. Rankings independentes, análises detalhadas e bónus exclusivos dos casinos licenciados pelo SRIJ.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="bg-background">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} dark antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
