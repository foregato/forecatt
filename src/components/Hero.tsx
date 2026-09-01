import Container from "./Container";
import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";

const differentiators = ["Design personalizado", "Responsivo", "SEO", "Domínio", "Suporte"];

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-line">
      <Container className="py-24 md:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink text-balance md:text-6xl">
            Seu negócio merece uma presença profissional na internet.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted leading-relaxed">
            Sites modernos, personalizados e pensados para apresentar sua
            empresa, conquistar clientes e fortalecer sua marca.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </Button>
            <Button href="#portfolio" variant="secondary">
              Ver portfólio
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {differentiators.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
