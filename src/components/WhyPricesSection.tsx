import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const highlights = [
  {
    id: "promocional",
    title: "Valores acessíveis sem perder qualidade",
    text: "Trabalho com preços justos porque acredito que todo negócio merece um site profissional, não só quem tem orçamento de agência. A qualidade é a mesma, o diferencial está no processo enxuto e no atendimento direto.",
    icon: (
      <path d="M12 3v18M17 6.5c-1-1-2.8-1.7-5-1.7-3 0-5.4 1.5-5.4 3.6s2.4 3.1 5.4 3.6c3 .5 5.4 1.5 5.4 3.6S15 21.2 12 21.2c-2.2 0-4-.7-5-1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
  },
  {
    id: "backup",
    title: "Backup e versões do projeto",
    text: "Mantenho backup dos sites desenvolvidos e das diferentes versões de cada projeto, preservando o histórico e facilitando futuras atualizações ou restaurações.",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function WhyPricesSection() {
  return (
    <section className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Transparência" title="Por que esses valores?" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-white p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
