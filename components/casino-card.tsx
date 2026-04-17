"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const isTopChoice = casino.rank === 1

  const renderStars = (rating: number, size: "sm" | "md" = "md") => {
    const starRating = rating / 2
    const dim = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)
          return (
            <div key={i} className={`relative ${dim}`}>
              <Star className={`absolute inset-0 ${dim} text-primary/20`} strokeWidth={1.5} />
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                >
                  <Star className={`${dim} fill-primary text-primary`} strokeWidth={1.5} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const formatVotes = (votes: number) =>
    votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return (
    <div className="relative group pt-4">

      {/* Badge — outside Link & overflow-hidden, sits on the top border */}
      {casino.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <span className={`block px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md ${isTopChoice
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
            }`}>
            {casino.badge}
          </span>
        </div>
      )}

      <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className={`relative rounded-sm overflow-hidden transition-all duration-300 hover:translate-y-[-1px] ${isTopChoice
            ? "bg-card border border-primary/50 luxury-glow"
            : "bg-card border border-border hover:border-primary/30"
            }`}
        >
          {/* ── MOBILE: 2-row layout (< 640px) ── */}
          <div className="sm:hidden p-3 space-y-2.5">
            {/* ROW 1: Rank + Logo + Bonus */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-muted border border-border flex items-center justify-center flex-shrink-0">
                <span className={`text-sm font-bold ${isTopChoice ? "text-primary" : "text-muted-foreground"}`}>
                  #{casino.rank}
                </span>
              </div>
              <div className="w-[130px] h-[60px] rounded-sm bg-white/5 border border-border/50 p-2 flex items-center justify-center flex-shrink-0">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`Casino ${casino.rank} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 text-center">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider leading-none mb-0.5">Bónus</p>
                <p className="text-base font-bold text-foreground leading-tight">{casino.bonus}</p>
              </div>
            </div>

            {/* ROW 2: Stars+reviews | Score | Button */}
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 flex flex-col items-start gap-0.5">
                {renderStars(casino.rating, "sm")}
                <span className="text-[9px] text-muted-foreground leading-none">
                  ({formatVotes(casino.reviews)})
                </span>
              </div>
              <div className="flex-1 flex justify-center">
                <span className={`text-sm font-bold leading-none ${isTopChoice ? "text-primary" : "text-foreground"}`}>
                  {casino.rating}
                  <span className="text-[10px] font-normal text-muted-foreground ml-0.5">/10</span>
                </span>
              </div>
              <div className="flex-shrink-0">
                <Button
                  className={`font-semibold py-2 px-4 rounded-sm text-xs h-auto ${isTopChoice
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                >
                  Obter Bónus
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* ── TABLET + DESKTOP: single-row layout (>= 640px) ── */}
          <div className="hidden sm:block p-5">
            <div className="grid grid-cols-[44px_160px_1fr_100px_140px] items-center gap-5">
              {/* Rank */}
              <div className="w-11 h-11 rounded-sm bg-muted flex items-center justify-center border border-border flex-shrink-0">
                <span className={`text-lg font-bold ${isTopChoice ? "text-primary" : "text-muted-foreground"}`}>
                  #{casino.rank}
                </span>
              </div>

              {/* Logo */}
              <div className="w-40 h-[72px] rounded-sm bg-white/5 border border-border/50 p-3 flex items-center justify-center flex-shrink-0">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`Casino ${casino.rank} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Bonus */}
              <div className="min-w-0 px-4 border-l border-border text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Bónus de Boas-Vindas</p>
                <p className="text-2xl font-bold text-foreground leading-tight">{casino.bonus}</p>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-center gap-1 px-2 border-l border-border flex-shrink-0">
                <div className={`text-2xl font-bold leading-none ${isTopChoice ? "text-primary" : "text-foreground"}`}>
                  {casino.rating}
                  <span className="text-xs font-normal text-muted-foreground ml-0.5">/10</span>
                </div>
                {renderStars(casino.rating)}
                <div className="text-[10px] text-muted-foreground">({formatVotes(casino.reviews)} avaliações)</div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <Button
                  className={`w-full font-semibold px-3 py-5 rounded-sm transition-all text-sm ${isTopChoice
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                >
                  Obter Bónus
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-muted/20 border-t border-border/50 px-4 py-1.5">
            <p className="text-[10px] text-muted-foreground text-center">
              18+ | Jogo Responsável | T&C aplicam-se | Licenciado SRIJ
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
