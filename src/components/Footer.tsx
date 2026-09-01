import Container from "./Container";
import { config } from "@/data/config";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Como funciona" },
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

          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href={config.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Instagram: {config.contact.instagram}
            </a>
            <span>WhatsApp: {config.contact.whatsappDisplay}</span>
            <a href={`mailto:${config.contact.email}`} className="hover:text-ink">
              E-mail: {config.contact.email}
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

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {config.brand.name}. Todos os direitos reservados.</span>
          {SHOW_DEVELOPER_CREDIT && <span>Desenvolvido por Forecatt</span>}
        </div>
      </Container>
    </footer>
  );
}
