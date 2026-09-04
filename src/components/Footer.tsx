import Container from "./Container";
import { config } from "@/data/config";
import { whatsappLink } from "@/lib/whatsapp";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

// Ative para exibir o crédito do desenvolvedor no rodapé.
const SHOW_DEVELOPER_CREDIT = true;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {config.brand.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {config.brand.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted">
            <a
              href={config.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              {config.contact.instagram}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              {config.contact.whatsappDisplay}
            </a>
            <a
              href={`mailto:${config.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {config.contact.email}
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-muted">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {config.brand.name}. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            {SHOW_DEVELOPER_CREDIT && <span>Desenvolvido por Forecatt</span>}
            <a href="#inicio" className="inline-flex items-center gap-1 hover:text-ink">
              Voltar ao topo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 7.5 6 4l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
