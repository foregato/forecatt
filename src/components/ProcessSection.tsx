import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  process,
  processHighlight,
  paymentFlow,
  paymentExplanation,
} from "@/data/content";

export default function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Processo" title="Como funciona" />
        </Reveal>

        <ol className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
          <span className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-line md:block" aria-hidden="true" />
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 70}>
              <li className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper font-display text-sm font-semibold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={100}>
          <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-line bg-surface px-5 py-4">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <p className="text-sm leading-relaxed text-ink">{processHighlight}</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 rounded-2xl border border-line bg-surface p-8">
            <h3 className="font-display text-base font-semibold text-ink">
              Como funciona o pagamento
            </h3>

            <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
              {paymentFlow.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className="rounded-full border border-line bg-white px-4 py-2 font-medium text-ink">
                    {item.label}
                  </span>
                  {index < paymentFlow.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-muted">
                      <path d="M3 7h8M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
              {paymentExplanation}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
