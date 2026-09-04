import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { portfolio, type PortfolioItem } from "@/data/portfolio";

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="border-b border-line bg-paper p-2.5">
        <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </span>
          <span className="truncate text-xs text-muted">{displayUrl(item.url)}</span>
        </div>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden bg-ink2">
        <img
          src={item.image}
          alt={`Preview do site ${item.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            // Placeholder simples enquanto a imagem real não é adicionada.
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="flex items-center justify-between p-5">
        <span className="font-display text-sm font-semibold text-ink">
          {item.name}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-accent">
          Ver projeto
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M3.5 9.5 9.5 3.5M4.5 3.5h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Portfólio" title="Alguns projetos desenvolvidos pela Forecatt" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
