import Container from "./Container";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    id: "promocional",
    title: "Valores acessíveis sem perder qualidade",
    text: "Trabalho com preços justos porque acredito que todo negócio merece um site profissional, não só quem tem orçamento de agência. A qualidade é a mesma, o diferencial está no processo enxuto e no atendimento direto.",
  },
  {
    id: "backup",
    title: "Backup e versões do projeto",
    text: "Mantenho backup dos sites desenvolvidos e das diferentes versões de cada projeto, preservando o histórico e facilitando futuras atualizações ou restaurações.",
  },
];

export default function WhyPricesSection() {
  return (
    <section className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <SectionTitle title="Por que esses valores?" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-line bg-white p-8"
            >
              <h3 className="font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
