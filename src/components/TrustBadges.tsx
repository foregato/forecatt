import Container from "./Container";

const badges = [
  {
    title: "Pague só depois de ver",
    text: "Você aprova o protótipo antes de qualquer pagamento. Sem surpresas, sem risco.",
  },
  {
    title: "Site entregue em até 7 dias",
    text: "Processo enxuto e direto. Você não fica meses esperando por algo simples.",
  },
  {
    title: "Suporte humano",
    text: "Não é robô, não é ticket genérico. Você fala direto com quem está construindo o site.",
  },
  {
    title: "Código limpo e escalável",
    text: "Seu site é construído com tecnologia moderna, pronto para crescer junto com seu negócio.",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-line bg-surface py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="font-display text-sm font-semibold text-ink">
                {badge.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
