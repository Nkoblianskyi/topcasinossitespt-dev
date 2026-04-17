import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Gold top accent */}
      <div className="h-0.5 bg-primary w-full" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 md:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
              <span className="text-lg font-serif font-bold tracking-wide text-gold-gradient uppercase leading-none">
                topcasinossitespt
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-5 max-w-sm">
              Portal independente de análises de casinos online licenciados em Portugal. Informação imparcial e
              compromisso com o jogo responsável.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/gamble.webp" alt="GambleAware" className="h-8 w-auto bg-white p-1 rounded-sm" />
              </Link>
              <Link href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/jogo2.png" alt="Jogo Responsável" className="h-7 w-auto" />
              </Link>
              <Link href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/srij.svg" alt="SRIJ" className="h-7 w-auto" />
              </Link>
              <Link href="https://www.icad.pt" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/icad.png" alt="ICAD" className="h-8 w-auto bg-white p-1 rounded-sm" />
              </Link>
              <Link href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/gamecare.svg" alt="GamCare" className="h-8 w-auto bg-white p-1 rounded-sm" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#rankings" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Rankings
                </a>
              </li>
              <li>
                <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Jogo Responsável
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/politica-privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsible Gaming */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-muted-foreground text-center sm:text-left">
              O jogo pode causar dependência. Apenas para maiores de 18 anos. Jogue com responsabilidade.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-secondary/30 bg-secondary/5 rounded-sm">
              <span className="text-xs font-bold text-secondary">18+</span>
              <span className="text-[10px] text-muted-foreground">Jogo Responsável</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] text-muted-foreground/60">
            <p>Este site contém links de afiliados. Podemos receber comissões quando clica nestes links.</p>
            <p>© 2025 topcasinossitespt.com — Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
