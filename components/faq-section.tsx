export function FAQSection() {
  const principles = [
    {
      title: "Estabeleça Limites Financeiros",
      text: "Defina um orçamento fixo para entretenimento e utilize as ferramentas de limite de depósito disponíveis em todos os casinos licenciados pelo SRIJ.",
    },
    {
      title: "Controle o Tempo de Jogo",
      text: "Defina períodos específicos para jogar e faça pausas regulares. As plataformas licenciadas oferecem alertas de tempo e opções de autoexclusão temporária.",
    },
    {
      title: "Nunca Persiga Perdas",
      text: "Se perder o valor definido, pare imediatamente. Tentar recuperar perdas aumentando apostas é um comportamento de risco que deve ser evitado.",
    },
    {
      title: "Jogue Apenas por Diversão",
      text: "O jogo nunca deve ser visto como fonte de rendimento. Se já não sentir prazer ao jogar, é altura de fazer uma pausa.",
    },
  ]

  const resources = [
    {
      title: "Linha Vida — 1414",
      text: "Serviço do SICAD para apoio a comportamentos aditivos, incluindo jogo problemático. Gratuito, confidencial e disponível 24 horas.",
    },
    {
      title: "Autoexclusão Nacional",
      text: "Através do SRIJ, pode solicitar exclusão de todos os operadores licenciados por períodos de 3 meses a 5 anos, ou de forma permanente.",
    },
    {
      title: "Jogadores Anónimos Portugal",
      text: "Organização sem fins lucrativos com grupos de apoio em todo o país. Reuniões gratuitas e abertas a qualquer pessoa afetada.",
    },
    {
      title: "Ferramentas de Proteção",
      text: "Todos os casinos licenciados oferecem limites de depósito, alertas de sessão, histórico de transações e opção de encerramento de conta.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-0.5 bg-secondary" />
            <span className="text-[10px] text-secondary uppercase tracking-widest font-medium">Informação</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Jogo <span className="text-primary">Responsável</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
            O jogo deve ser sempre uma forma de entretenimento. Conheça as práticas essenciais para uma experiência
            segura e responsável.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Principles */}
          <div className="bg-card border border-border rounded-sm p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5 pb-3 border-b border-border">
              Princípios Fundamentais
            </h3>
            <div className="space-y-4">
              {principles.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-0.5 bg-primary rounded-full flex-shrink-0 mt-1 self-stretch" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-card border border-border rounded-sm p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5 pb-3 border-b border-border">
              Recursos de Apoio
            </h3>
            <div className="space-y-4">
              {resources.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-0.5 bg-secondary rounded-full flex-shrink-0 mt-1 self-stretch" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="grid sm:grid-cols-3 gap-4 p-6 bg-muted/20 border border-border rounded-sm">
          <div>
            <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Sinais de Alerta</h4>
            <ul className="space-y-1.5">
              {[
                "Gastar mais do que pode perder",
                "Mentir sobre hábitos de jogo",
                "Negligenciar responsabilidades",
                "Pedir dinheiro emprestado para jogar",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Regulação em Portugal</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              O SRIJ é a entidade reguladora que garante a proteção dos jogadores, supervisionando todos os operadores
              licenciados e aplicando medidas de jogo responsável obrigatórias.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Menores de Idade</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              O jogo online é estritamente proibido a menores de 18 anos. Todos os operadores verificam a idade e
              identidade dos jogadores antes de permitir o acesso à plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
