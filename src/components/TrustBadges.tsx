import Container from "./Container";
import Reveal from "./Reveal";

const badges = [
  {
    title: "Pague só depois de ver",
    text: "Você aprova o protótipo antes de qualquer pagamento. Sem surpresas, sem risco.",
    icon: (
      <path d="M12 22s7-4.2 7-10.6V6l-7-3-7 3v5.4C5 17.8 12 22 12 22Zm-2.7-9.3 2 2 3.7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Site entregue em até 7 dias",
    text: "Processo enxuto e direto. Você não fica meses esperando por algo simples.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Suporte humano",
    text: "Não é robô, não é ticket genérico. Você fala direto com quem está construindo o site.",
    icon: (
      <>
        <circle cx="12" cy="8.2" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Código limpo e escalável",
    text: "Seu site é construído com tecnologia moderna, pronto para crescer junto com seu negócio.",
    icon: (
      <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-line bg-surface py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {badge.icon}
                  </svg>
                </span>
                <p className="mt-3 font-display text-sm font-semibold text-ink">
                  {badge.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {badge.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
