import Container from "./Container";
import SectionTitle from "./SectionTitle";
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
    <div className="rounded-2xl border border-line bg-surface p-6">
      <div className="space-y-3">
        <div className="rounded-lg bg-white px-4 py-3">
          <p className="text-xs text-muted">Antes</p>
          <p className="mt-0.5 text-sm text-ink/60 line-through">{before}</p>
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
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <SectionTitle
          title="O que muda quando seu negócio tem um site"
          description="Não é só uma página na internet. É a diferença entre ser invisível e ser encontrado, entre parecer amador e parecer referência."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <ResultCard
              key={r.id}
              before={r.before}
              after={r.after}
              description={r.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
