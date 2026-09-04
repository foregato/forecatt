import Container from "./Container";
import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";

const differentiators = [
  "Design personalizado",
  "Responsivo",
  "SEO configurado",
  "Domínio incluso",
  "Suporte humano",
];

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-line">
      <Container className="py-24 md:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink text-balance md:text-6xl">
            Sites que fazem seu negócio ser encontrado, lembrado e escolhido.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted leading-relaxed">
            Desenvolvo sites sob medida para empresas que querem mais do que
            uma página bonita. Querem resultados: clientes chegando pelo
            Google, credibilidade na primeira visita e um canal de contato
            que realmente funciona.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </Button>
            <Button href="#portfolio" variant="secondary">
              Ver projetos entregues
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
