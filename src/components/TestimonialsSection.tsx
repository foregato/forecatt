import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { testimonials, type Testimonial } from "@/data/testimonial";

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
    <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-card">
      <svg
        className="h-6 w-6 text-accent/40"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">{text}</p>
      <div className="mt-6 border-t border-line pt-5">
        <p className="font-display text-sm font-semibold text-ink">{name}</p>
        <p className="mt-0.5 text-xs text-muted">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Depoimentos"
            title="O que dizem quem já contratou"
            description="Depoimentos reais de clientes que já passaram pelo processo e tiveram seus sites no ar."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t: Testimonial, i) => (
            <Reveal key={t.id} delay={i * 80} className="h-full">
              <TestimonialCard name={t.name} role={t.role} text={t.text} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
