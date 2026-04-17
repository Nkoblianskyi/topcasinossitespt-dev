"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      {/* Gold accent line */}
      <div className="h-0.5 bg-primary w-full" />

      {/* Main header */}
      <div className="glass-effect border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: SRIJ badge */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.srij.turismodeportugal.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image src="/srij.svg" alt="SRIJ" width={22} height={22} className="rounded" />

              </Link>
            </div>

            {/* Center: Brand */}
            <Link href="/" className="flex flex-col items-center group">
              <span className="text-base md:text-lg font-serif font-bold tracking-wide text-gold-gradient uppercase leading-none">
                topcasinossitespt
              </span>
            </Link>

            {/* Right: 18+ */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-sm border border-secondary/60 bg-secondary/10">
                <span className="text-xs font-bold text-secondary">18+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red accent line */}
      <div className="h-0.5 bg-secondary/60 w-full" />
    </header>
  )
}
