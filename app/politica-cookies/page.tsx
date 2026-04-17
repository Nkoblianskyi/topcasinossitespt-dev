import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const cookieTypes = [
    {
      title: "Cookies Necessários",
      badge: "Obrigatórios",
      description:
        "Essenciais para o correto funcionamento do website. Não podem ser desativados, pois são necessários para funções básicas como segurança e gestão de sessão.",
      example: "Cookies de sessão, autenticação, segurança CSRF",
    },
    {
      title: "Cookies de Análise",
      badge: "Opcionais",
      description:
        "Permitem medir e melhorar o desempenho do site através de dados agregados e anónimos. Ajudam-nos a compreender como os utilizadores interagem com o conteúdo.",
      example: "Google Analytics, métricas de tráfego",
    },
    {
      title: "Cookies de Funcionalidade",
      badge: "Opcionais",
      description:
        "Memorizam as suas preferências para proporcionar uma experiência personalizada. Incluem escolhas de idioma e configurações de visualização.",
      example: "Preferências de idioma, consentimento de cookies",
    },
    {
      title: "Cookies de Marketing",
      badge: "Opcionais",
      description:
        "Utilizados para apresentar conteúdo relevante e rastrear cliques em links de afiliados. Permitem-nos avaliar a eficácia das nossas parcerias comerciais.",
      example: "Rastreamento de afiliados, remarketing",
    },
  ]

  const browsers = [
    { name: "Google Chrome", path: "Definições → Privacidade e segurança → Cookies e outros dados de sites" },
    { name: "Mozilla Firefox", path: "Opções → Privacidade e Segurança → Cookies e dados de sites" },
    { name: "Safari", path: "Preferências → Privacidade → Gerir dados de websites" },
    { name: "Microsoft Edge", path: "Definições → Cookies e permissões do site → Gerir e eliminar cookies" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>

          {/* Page Header */}
          <div className="mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-secondary" />
              <span className="text-[10px] text-secondary uppercase tracking-widest font-medium">Legal</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              Política de <span className="text-primary">Cookies</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              topcasinossitespt.com — Última atualização: {lastUpdated}
            </p>
          </div>

          <div className="space-y-5">
            {/* Section 1 */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">Introdução</h2>
              </div>
              <div className="pl-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O <strong className="text-foreground">topcasinossitespt.com</strong> utiliza cookies e tecnologias
                  semelhantes para melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar
                  conteúdo. Esta política explica o que são cookies, como os utilizamos e como pode controlá-los ou
                  eliminá-los.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">O que são Cookies?</h2>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um website. Permitem
                  que o site reconheça o seu dispositivo e memorize informações sobre a sua visita, tornando a
                  experiência mais eficiente e personalizada.
                </p>
                <div className="flex gap-3 p-3 bg-muted/30 border border-border rounded-sm">
                  <div className="w-0.5 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Tipos:</span> Os cookies podem ser{" "}
                    <em>persistentes</em> (permanecem até expirarem ou serem eliminados) ou{" "}
                    <em>de sessão</em> (eliminados automaticamente quando fecha o navegador).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">Tipos de Cookies que Utilizamos</h2>
              </div>
              <div className="pl-10 grid sm:grid-cols-2 gap-3">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="p-4 bg-muted/20 border border-border rounded-sm">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xs font-bold text-foreground">{cookie.title}</h3>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm flex-shrink-0 ${
                        cookie.badge === "Obrigatórios"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {cookie.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{cookie.description}</p>
                    <p className="text-[10px] text-muted-foreground/60 italic">Ex: {cookie.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">Cookies de Terceiros</h2>
              </div>
              <div className="pl-10 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Alguns cookies são colocados por serviços de terceiros que integrámos no nosso site. Não controlamos
                  diretamente esses cookies.
                </p>
                <p>
                  <span className="font-medium text-foreground">Terceiros incluem:</span> fornecedores de análise
                  (Google Analytics), plataformas de afiliados de casinos, redes sociais e serviços de publicidade.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">5</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">Como Gerir Cookies</h2>
              </div>
              <div className="pl-10">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Pode controlar e eliminar cookies através das configurações do seu navegador:
                </p>
                <div className="space-y-2 mb-4">
                  {browsers.map((browser, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 border border-border rounded-sm">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-foreground">{browser.name}</p>
                        <p className="text-xs text-muted-foreground">{browser.path}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border border-primary/20 bg-primary/5 rounded-sm">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Atenção:</span> Desativar cookies pode afetar o
                    correto funcionamento de algumas funcionalidades do site.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 - Contact */}
            <section className="p-5 bg-card border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">6</span>
                </div>
                <h2 className="text-sm font-bold text-foreground">Contacto</h2>
              </div>
              <p className="pl-10 text-sm text-muted-foreground leading-relaxed">
                Para questões sobre esta Política de Cookies ou para exercer os seus direitos, contacte-nos através do
                formulário disponível no nosso website. Responderemos no prazo máximo de 30 dias úteis.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
