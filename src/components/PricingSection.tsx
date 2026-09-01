import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { plans, comparison, type Plan } from "@/data/plans";
import { whatsappLink, whatsappPlanMessage } from "@/lib/whatsapp";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        plan.highlighted
          ? "border-ink bg-ink text-white"
          : "border-line bg-surface text-ink"
      }`}
    >
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
        <SectionTitle
          title="Planos e valores"
          description="Duas formas de ter seu site no ar: pagar pelo desenvolvimento e hospedar onde quiser, ou contar com hospedagem e manutenção incluídas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

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
                  <td className="px-5 py-4 text-ink">{row.personalizado}</td>
                  <td className="px-5 py-4 text-ink">{row.mensal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
