"use client"

export function HeroSection() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-10 md:py-14">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/casino-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-background/88" />
      {/* Left red strip accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          <span className="text-foreground">Top Casinos</span>
          <br />
          <span className="text-gold-gradient">em Portugal</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Rankings verificados, análises detalhadas e bónus exclusivos dos melhores casinos licenciados pelo SRIJ.
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-0 max-w-lg mx-auto mb-6 border border-border divide-x divide-border bg-card/40">
          <div className="flex-1 py-3 px-2 text-center">
            <div className="text-lg font-bold text-primary leading-none">100%</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">SRIJ</div>
          </div>
          <div className="flex-1 py-3 px-2 text-center">
            <div className="text-lg font-bold text-primary leading-none">18+</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">Responsável</div>
          </div>
          <div className="flex-1 py-3 px-2 text-center">
            <div className="text-lg font-bold text-primary leading-none">SSL</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">Seguro</div>
          </div>
          <div className="flex-1 py-3 px-2 text-center">
            <div className="text-lg font-bold text-primary leading-none">24/7</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">Suporte</div>
          </div>
        </div>

        {/* Date */}
        <p className="text-xs text-muted-foreground/60">
          Atualizado: <span className="text-muted-foreground">{formattedDate}</span>
        </p>
      </div>
    </section>
  )
}
