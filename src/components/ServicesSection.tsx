import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { services, type Service } from "@/data/content";

const icons: Record<string, JSX.Element> = {
  design: (
    <path d="M4 16 14 6l4 4-10 10H4v-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  responsivo: (
    <>
      <rect x="3" y="4" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15.5" y="7" width="5.5" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  "seo-tecnico": (
    <>
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14.5 14.5 19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  indexacao: (
    <path d="M4 18V9l6-5 6 5v9M8 18v-6h4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  llms: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  dominio: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8s-1.2 5.8-3.4 8c-2.2-2.2-3.4-5-3.4-8s1.2-5.8 3.4-8Z" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  whatsapp: (
    <path d="M6 18 7.2 14A7 7 0 1 1 10 16.7L6 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  manutencao: (
    <path d="M11 4 9 6l3 3-5 5-3-3-2 2 5 5 7-7 3 3 2-2-3-3 1.5-1.5A3 3 0 0 0 14 4.9L11 4Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {icons[service.id] ?? <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />}
        </svg>
      </span>
      <h3 className="mt-4 font-display text-base font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="O que você recebe"
            title="O que está incluso"
            description="Recursos que fazem parte do desenvolvimento e da preparação do site para mecanismos de busca e indexação."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
