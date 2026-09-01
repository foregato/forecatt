import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { benefits } from "@/data/content";

export default function WhySection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="Por que ter um site?" />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-start gap-3 border-b border-line pb-5"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-ink">{benefit.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
