import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { results } from "@/data/results";

function ResultCard({
  before,
  after,
  description,
}: {
  before: string;
  after: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow duration-300 hover:shadow-card">
      <div className="space-y-2">
        <div className="rounded-lg bg-white px-4 py-3">
          <p className="text-xs text-muted">Antes</p>
          <p className="mt-0.5 text-sm text-ink/60 line-through">{before}</p>
        </div>

        <div className="flex justify-center py-0.5 text-line" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v11M2.5 8 7 12.5 11.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="rounded-lg bg-ink px-4 py-3">
          <p className="text-xs text-white/60">Depois</p>
          <p className="mt-0.5 text-sm font-medium text-white">{after}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section id="resultados" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Resultados"
            title="O que muda quando seu negócio tem um site"
            description="Não é só uma página na internet. É a diferença entre ser invisível e ser encontrado, entre parecer amador e parecer referência."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal key={r.id} delay={i * 80} className="h-full">
              <ResultCard before={r.before} after={r.after} description={r.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
