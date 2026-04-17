export function AboutUsSection() {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "100%", label: "Licenciados SRIJ" },
    { value: "50+", label: "Análises Publicadas" },
    { value: "5K+", label: "Leitores Mensais" },
  ]

  const values = [
    {
      title: "Equipa Especializada",
      text: "Analistas com mais de uma década de experiência na cobertura da indústria de jogos online em Portugal.",
    },
    {
      title: "Independência Total",
      text: "As nossas classificações baseiam-se exclusivamente em critérios objetivos. Nenhum operador influencia os resultados.",
    },
    {
      title: "Verificação SRIJ",
      text: "Apenas recomendamos operadores com licença válida emitida pelo Serviço de Regulação e Inspeção de Jogos.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-0.5 bg-secondary" />
            <span className="text-[10px] text-secondary uppercase tracking-widest font-medium">Sobre Nós</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            A Nossa <span className="text-primary">Missão</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          {/* Text */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">topcasinossitespt.com</strong> é o portal independente de referência
              para análises de casinos online licenciados em Portugal. A nossa equipa de especialistas certificados em
              iGaming avalia cada plataforma segundo critérios rigorosos e objetivos.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A nossa metodologia combina testes práticos em ambiente real, análise técnica de segurança, verificação de
              licenciamento pelo SRIJ e avaliação completa da experiência do utilizador. Cada casino é submetido a um
              processo de avaliação multifase antes de ser incluído nos nossos rankings.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não aceitamos pagamentos para melhorar classificações. A nossa remuneração vem exclusivamente de comissões
              de afiliados, sem interferência nas pontuações atribuídas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 bg-card border border-border hover:border-primary/30 transition-colors rounded-sm">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-4">
          {values.map((val, i) => (
            <div key={i} className="p-5 bg-card border border-border rounded-sm group hover:border-primary/30 transition-all">
              <div className="w-1 h-8 bg-secondary mb-4 rounded-sm" />
              <h3 className="text-sm font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
