import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-8">
      <svg
        className="h-6 w-6 text-accent/40"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mt-4 text-sm leading-relaxed text-ink">{text}</p>
      <div className="mt-6 border-t border-line pt-5">
        <p className="font-display text-sm font-semibold text-ink">{name}</p>
        <p className="mt-0.5 text-xs text-muted">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <SectionTitle
          title="O que dizem quem já contratou"
          description="Depoimentos reais de clientes que já passaram pelo processo e tiveram seus sites no ar."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} name={t.name} role={t.role} text={t.text} />
          ))}
        </div>
      </Container>
    </section>
  );
}
