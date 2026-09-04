import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Reveal from "./Reveal";
import { plans, comparison, type Plan } from "@/data/plans";
import { whatsappLink, whatsappPlanMessage } from "@/lib/whatsapp";

function ComparisonValue({ value }: { value: string }) {
  if (value === "Sim") {
    return (
      <span className="inline-flex items-center gap-1.5 text-ink">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-accent">
          <path d="M2.5 7.2 5.3 10 11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Sim
      </span>
    );
  }
  if (value === "Não inclusa") {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3.5 3.5 10.5 10.5M10.5 3.5 3.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Não inclusa
      </span>
    );
  }
  return <>{value}</>;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        plan.highlighted
          ? "border-ink bg-ink text-white shadow-soft md:-translate-y-3"
          : "border-line bg-surface text-ink"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
          Mais procurado
        </span>
      )}
      <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
      <p className="mt-4 font-display text-3xl font-semibold">{plan.price}</p>
      <p
        className={`mt-1 text-sm ${
          plan.highlighted ? "text-white/70" : "text-muted"
        }`}
      >
        {plan.priceNote}
      </p>

      <p
        className={`mt-6 text-sm leading-relaxed ${
          plan.highlighted ? "text-white/80" : "text-muted"
        }`}
      >
        {plan.description}
      </p>

      <ul className="mt-6 flex flex-col gap-2 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span
              className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                plan.highlighted ? "bg-white/60" : "bg-accent"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={whatsappLink(whatsappPlanMessage(plan.name))}
        target="_blank"
        rel="noopener noreferrer"
        variant={plan.highlighted ? "secondary" : "primary"}
        className={`mt-8 ${
          plan.highlighted ? "border-white/30 !text-white hover:!bg-white/10 hover:!text-white" : ""
        }`}
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Investimento"
            title="Planos e valores"
            description="Duas formas de ter seu site no ar: pagar pelo desenvolvimento e hospedar onde quiser, ou contar com hospedagem e manutenção incluídas."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-white">
                  <th className="px-5 py-4 font-display font-semibold text-ink">
                    Comparativo
                  </th>
                  <th className="px-5 py-4 font-display font-semibold text-ink">
                    Site desenvolvido e entregue
                  </th>
                  <th className="px-5 py-4 font-display font-semibold text-ink">
                    Hospedagem + manutenção
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-0 odd:bg-surface even:bg-white">
                    <td className="px-5 py-4 text-muted">{row.label}</td>
                    <td className="px-5 py-4">
                      <ComparisonValue value={row.personalizado} />
                    </td>
                    <td className="px-5 py-4">
                      <ComparisonValue value={row.mensal} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
