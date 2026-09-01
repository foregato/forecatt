import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";
import { config } from "@/data/config";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Como funciona" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" className="font-display text-xl font-semibold text-ink">
          {config.brand.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
        >
          Solicitar orçamento
        </Button>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Solicitar orçamento
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
