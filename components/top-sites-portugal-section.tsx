const features = [
  {
    title: "Regulamentação SRIJ",
    description:
      "Desde 2015, o mercado português opera sob supervisão do SRIJ. O modelo regulatório português é reconhecido pela sua eficácia na proteção dos jogadores e transparência operacional.",
  },
  {
    title: "Licenças Obrigatórias",
    description:
      "Todos os operadores legais devem possuir licença válida emitida pelo SRIJ, sujeitos a verificações rigorosas de idoneidade financeira, técnica e de segurança de dados.",
  },
  {
    title: "Pagamentos Locais",
    description:
      "Suporte completo para MB Way, Multibanco, transferências bancárias e cartões de crédito. Transações processadas em euros com proteção SSL de nível bancário.",
  },
  {
    title: "Bónus Exclusivos",
    description:
      "O mercado português oferece bónus de boas-vindas atrativos, promoções regulares e programas de fidelização desenvolvidos especificamente para jogadores locais.",
  },
]

export function TopSitesPortugalSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-0.5 bg-secondary" />
            <span className="text-[10px] text-secondary uppercase tracking-widest font-medium">Mercado Português</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Casinos Online em <span className="text-primary">Portugal</span>
          </h2>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Portugal estabeleceu em 2015 um dos mercados de jogos online mais bem regulamentados da Europa. Sob a
            supervisão do SRIJ, o setor garante elevados padrões de segurança, transparência e proteção ao consumidor.
            Os jogadores portugueses beneficiam de um ambiente de jogo controlado e seguro, com operadores obrigados a
            implementar medidas de jogo responsável.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-card border border-border hover:border-primary/30 transition-all rounded-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-0.5 bg-primary" />
                <h3 className="text-sm font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 px-6 border border-primary/20 bg-primary/5 rounded-sm">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-0.5">Pronto para escolher o seu casino?</h3>
            <p className="text-xs text-muted-foreground">Explore os rankings e encontre o casino ideal para si.</p>
          </div>
          <a
            href="#rankings"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold rounded-sm transition-colors uppercase tracking-wider"
          >
            Ver Rankings
          </a>
        </div>
      </div>
    </section>
  )
}
