"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Gold top border */}
      <div className="h-0.5 bg-primary w-full" />
      <div className="glass-effect border-t border-border">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Text */}
            <div className="flex-1">
              <p className="text-xs text-foreground font-medium mb-0.5">
                topcasinossitespt.com utiliza cookies
              </p>
              <p className="text-[11px] text-muted-foreground">
                Ao continuar a navegar aceita a nossa{" "}
                <Link href="/politica-cookies" className="text-primary hover:underline">
                  política de cookies
                </Link>{" "}
                e{" "}
                <Link href="/politica-privacidade" className="text-primary hover:underline">
                  política de privacidade
                </Link>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="text-[11px] h-8 px-3 bg-transparent border-border hover:border-primary/50 hover:text-primary"
                asChild
              >
                <Link href="/politica-cookies">Gerir</Link>
              </Button>
              <Button
                onClick={acceptCookies}
                size="sm"
                className="h-8 px-4 text-[11px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Aceitar
              </Button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
