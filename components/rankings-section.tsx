import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section className="py-6 md:py-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-3">
        {/* Casino Cards */}
        <div className="space-y-3">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.rank} casino={casino} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 px-4 py-3 border border-border/50 bg-muted/10 rounded-sm text-center">
          <p className="text-xs text-muted-foreground">
            Todos os casinos possuem licença válida emitida pelo SRIJ. Rankings baseados em avaliações independentes da
            nossa equipa editorial, sem influência dos operadores.
          </p>
        </div>
      </div>
    </section>
  )
}
