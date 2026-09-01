import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { services, type Service } from "@/data/content";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <h3 className="font-display text-base font-semibold text-ink">
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
        <SectionTitle
          title="O que está incluso"
          description="Recursos que fazem parte do desenvolvimento e da preparação do site para mecanismos de busca e indexação."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
