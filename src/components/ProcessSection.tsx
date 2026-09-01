import Container from "./Container";
import SectionTitle from "./SectionTitle";
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
        <SectionTitle title="Como funciona" />

        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
          {process.map((item) => (
            <li key={item.step} className="border-t border-line pt-5">
              <span className="font-display text-sm text-accent">{item.step}</span>
              <h3 className="mt-2 font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-line bg-surface px-5 py-4">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <p className="text-sm leading-relaxed text-ink">{processHighlight}</p>
        </div>

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
                  <span className="text-muted" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {paymentExplanation}
          </p>
        </div>
      </Container>
    </section>
  );
}
