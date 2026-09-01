import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { portfolio, type PortfolioItem } from "@/data/portfolio";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-ink2">
        <img
          src={item.image}
          alt={`Preview do site ${item.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
        <span className="text-sm text-accent">Ver projeto</span>
      </div>
    </a>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-line bg-surface py-20 md:py-28">
      <Container>
        <SectionTitle title="Alguns projetos desenvolvidos pela Forecatt" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
