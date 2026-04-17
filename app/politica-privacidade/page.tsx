import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const sections = [
    {
      number: "1",
      title: "Introdução",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          O <strong className="text-foreground">topcasinossitespt.com</strong> está comprometido em proteger a sua
          privacidade e dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e
          protegemos as suas informações quando visita o nosso website. Ao utilizar o nosso site, concorda com os termos
          desta política. Se não concordar, por favor não utilize o nosso website.
        </p>
      ),
    },
    {
      number: "2",
      title: "Informações que Recolhemos",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
              2.1 Informações Fornecidas Diretamente
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Podemos recolher informações quando:
            </p>
            <ul className="space-y-1.5">
              {[
                "Preenche formulários de contacto no nosso website",
                "Se regista para receber a nossa newsletter",
                "Participa em inquéritos ou promoções",
                "Comunica connosco por email ou redes sociais",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
              2.2 Informações Recolhidas Automaticamente
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ao visitar o nosso website, recolhemos automaticamente dados sobre o seu dispositivo e comportamento de
              navegação, incluindo endereço IP, tipo de navegador, páginas visitadas e duração da visita. Consulte a
              nossa{" "}
              <Link href="/politica-cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>{" "}
              para mais detalhes.
            </p>
          </div>
        </div>
      ),
    },
    {
      number: "3",
      title: "Como Utilizamos as Suas Informações",
      content: (
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Prestação de Serviços", desc: "Operar, manter e melhorar o nosso website e conteúdo editorial" },
            { title: "Comunicação", desc: "Enviar newsletters e atualizações relevantes, se solicitado" },
            { title: "Personalização", desc: "Adaptar a experiência de navegação às suas preferências" },
            { title: "Segurança", desc: "Detetar, prevenir e resolver problemas técnicos e de segurança" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-muted/30 border border-border rounded-sm">
              <p className="text-xs font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "4",
      title: "Partilha de Informações",
      content: (
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p className="font-medium text-foreground">
            Não vendemos, alugamos nem comercializamos as suas informações pessoais a terceiros.
          </p>
          <p>
            Podemos partilhar informações de forma agregada e anónima com parceiros de análise, parceiros de afiliados
            para rastrear referências, ou quando exigido por lei ou autoridade competente.
          </p>
        </div>
      ),
    },
    {
      number: "5",
      title: "Os Seus Direitos (RGPD)",
      content: (
        <div className="space-y-2">
          {[
            { right: "Direito de acesso", desc: "Solicitar uma cópia das suas informações pessoais" },
            { right: "Direito de retificação", desc: "Corrigir informações incorretas ou incompletas" },
            { right: "Direito ao apagamento", desc: "Solicitar a eliminação dos seus dados pessoais" },
            { right: "Direito de oposição", desc: "Opor-se ao processamento para fins de marketing direto" },
            { right: "Direito de portabilidade", desc: "Receber os seus dados num formato estruturado e legível" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 border border-border rounded-sm">
              <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-foreground">{item.right}: </span>
                <span className="text-xs text-muted-foreground">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "6",
      title: "Retenção de Dados",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          Conservamos os seus dados pessoais apenas pelo tempo necessário para os fins descritos nesta política. Os dados
          de navegação são normalmente eliminados após 26 meses. Pode solicitar a eliminação dos seus dados a qualquer
          momento através dos contactos disponíveis no site.
        </p>
      ),
    },
    {
      number: "7",
      title: "Segurança",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não
          autorizado, alteração, divulgação ou destruição. O nosso website utiliza encriptação SSL. Contudo, nenhum
          método de transmissão pela internet é 100% seguro.
        </p>
      ),
    },
    {
      number: "8",
      title: "Contacto",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          Para questões relacionadas com esta Política de Privacidade ou para exercer os seus direitos, contacte-nos
          através do formulário disponível no nosso website. Responderemos no prazo máximo de 30 dias úteis.
        </p>
      ),
    },
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
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              topcasinossitespt.com — Última atualização: {lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((section) => (
              <section
                key={section.number}
                className="p-5 bg-card border border-border rounded-sm"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-7 h-7 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{section.number}</span>
                  </div>
                  <h2 className="text-sm font-bold text-foreground pt-0.5">{section.title}</h2>
                </div>
                <div className="pl-10">{section.content}</div>
              </section>
            ))}
          </div>

          {/* Responsible Gaming */}
          <div className="mt-6 p-5 border border-secondary/30 bg-secondary/5 rounded-sm">
            <h2 className="text-sm font-bold text-foreground mb-2">Jogo Responsável</h2>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              O topcasinossitespt.com promove o jogo responsável. O jogo deve ser uma forma de entretenimento, nunca uma
              fonte de rendimento. Apenas para maiores de 18 anos.
            </p>
            <div className="flex gap-4">
              <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                Jogo Responsável PT
              </a>
              <a href="https://www.sicad.pt" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                SICAD
              </a>
              <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                SRIJ
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
