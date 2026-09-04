import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { about } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="sobre" className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow={about.role} title={about.headline} />
            <div className="mt-8 space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="font-display text-3xl font-semibold text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-xs text-muted">
                  Atendimento personalizado. Cada projeto recebe atenção de ponta a
                  ponta, do primeiro contato até o site no ar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
