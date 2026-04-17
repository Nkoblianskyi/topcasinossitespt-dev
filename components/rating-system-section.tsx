const criteria = [
  { title: "Licenciamento SRIJ", description: "Verificação completa da licença e conformidade regulamentar", weight: "25%" },
  { title: "Segurança & SSL", description: "Encriptação de dados e proteção de transações financeiras", weight: "20%" },
  { title: "Bónus & Condições", description: "Avaliação dos termos, requisitos de aposta e validade", weight: "20%" },
  { title: "Experiência de Uso", description: "Usabilidade, design e compatibilidade móvel da plataforma", weight: "15%" },
  { title: "Métodos de Pagamento", description: "Velocidade, opções disponíveis e limites de levantamento", weight: "10%" },
  { title: "Suporte ao Cliente", description: "Qualidade, disponibilidade e eficiência do apoio", weight: "10%" },
]

export function RatingSystemSection() {
  return (
    <section className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-0.5 bg-secondary" />
            <span className="text-[10px] text-secondary uppercase tracking-widest font-medium">Metodologia</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Sistema de <span className="text-primary">Avaliação</span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cada casino é submetido a uma avaliação rigorosa em múltiplas dimensões antes de ser incluído nos rankings.
            A nossa escala vai de 0 a 10, com critérios ponderados de forma objetiva e revistos trimestralmente. Os
            testes são realizados com contas reais e sem conhecimento dos operadores.
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-card border border-border hover:border-primary/30 transition-all rounded-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-1 h-6 bg-primary rounded-sm flex-shrink-0" />
                <span className="text-sm font-bold text-primary">{item.weight}</span>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground">Análises Verificadas</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground">Atualização Contínua</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground">Sem Influência Externa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
