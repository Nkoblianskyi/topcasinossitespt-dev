"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2
  const formatVotes = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  const renderStars = () =>
    [...Array(5)].map((_, i) => {
      const fill = Math.min(Math.max((starRating - i) * 100, 0), 100)
      return (
        <div key={i} className="relative h-5 w-5">
          <Star className="absolute inset-0 h-5 w-5 text-primary/20" strokeWidth={1.5} />
          {fill > 0 && (
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - fill}% 0 0)` }}>
              <Star className="h-5 w-5 fill-primary text-primary" strokeWidth={1.5} />
            </div>
          )}
        </div>
      )
    })

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card border border-primary/30 max-w-sm p-0 overflow-hidden rounded-sm luxury-glow">

        {/* Top accent line */}
        <div className="h-0.5 w-full bg-primary" />

        {/* Badge strip */}
        {topCasino.badge && (
          <div className="bg-primary px-4 py-1.5 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              {topCasino.badge}
            </span>
          </div>
        )}

        {/* Body */}
        <div className="p-6 cursor-pointer" onClick={handleModalClick}>

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="w-44 h-20 rounded-sm bg-white/5 border border-border/60 p-3 flex items-center justify-center">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt="Casino logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Stars + score + reviews */}
          <div className="flex flex-col items-center gap-1 mb-5">
            <div className="flex items-center gap-0.5">{renderStars()}</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-primary">{topCasino.rating}</span>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <span className="text-[11px] text-muted-foreground">
              {formatVotes(topCasino.reviews)} avaliações
            </span>
          </div>

          {/* Bonus block */}
          <div className="border border-primary/30 rounded-sm bg-muted/30 px-5 py-4 mb-5 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
              Bónus de Boas-Vindas
            </p>
            <p className="text-xl font-serif font-bold text-foreground">{topCasino.bonus}</p>
          </div>

          {/* CTA */}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-sm text-sm tracking-wide"
            onClick={handleModalClick}
          >
            Obter Bónus Agora
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Bottom disclaimer */}
        <div className="border-t border-border/50 bg-muted/20 px-5 py-2">
          <p className="text-[10px] text-muted-foreground text-center">
            18+ | Jogo Responsável | T&C aplicam-se | Licenciado SRIJ
          </p>
        </div>

      </DialogContent>
    </Dialog>
  )
}
