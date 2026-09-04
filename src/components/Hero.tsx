import Container from "./Container";
import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";
import { config } from "@/data/config";

const differentiators = [
  "Design personalizado",
  "Responsivo",
  "SEO configurado",
  "Domínio incluso",
  "Suporte humano",
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line mesh-glow">
      <Container className="grid grid-cols-1 items-center gap-16 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">{config.brand.tagline}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink text-balance md:text-6xl">
            Sites que fazem seu negócio ser encontrado, lembrado e escolhido.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted leading-relaxed">
            Desenvolvo sites sob medida para empresas que querem mais do que
            uma página bonita. Querem resultados: clientes chegando pelo
            Google, credibilidade na primeira visita e um canal de contato
            que realmente funciona.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" withArrow>
              Solicitar orçamento
            </Button>
            <Button href="#portfolio" variant="secondary">
              Ver projetos entregues
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
            {differentiators.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/60 px-3 py-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-accent">
                  <path d="M2.5 6.2 5 8.7l4.5-5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
          <div className="relative rotate-[1.5deg] rounded-2xl border border-line bg-surface p-3 shadow-soft transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 h-5 flex-1 rounded-full bg-paper" />
            </div>
            <div className="space-y-3 rounded-xl bg-paper p-5">
              <div className="h-3 w-2/5 rounded-full bg-ink/15" />
              <div className="h-6 w-4/5 rounded-lg bg-ink/25" />
              <div className="h-3 w-3/5 rounded-full bg-ink/10" />
              <div className="mt-4 flex gap-3">
                <div className="h-9 w-28 rounded-full bg-accent/80" />
                <div className="h-9 w-24 rounded-full border border-ink/15" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white" />
                <div className="h-16 rounded-lg bg-white" />
                <div className="h-16 rounded-lg bg-white" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 -rotate-3 rounded-xl border border-line bg-white px-5 py-4 shadow-card">
            <p className="font-display text-2xl font-semibold text-accent">7 dias</p>
            <p className="text-xs text-muted">entrega média</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
