import Container from "./Container";
import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";
import { config } from "@/data/config";

export default function FinalCta() {
  return (
    <section className="bg-ink py-24 text-white md:py-32">
      <Container className="max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl">
          Vamos colocar seu negócio no ar?
        </h2>
        <p className="mt-5 text-white/70 leading-relaxed">
          O primeiro passo é uma conversa rápida. Me conta o que você precisa
          e eu te mostro como a gente chega lá. Sem compromisso, sem
          burocracia.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={config.contact.formLink} target="_blank" rel="noopener noreferrer">
            Preencher formulário
          </Button>
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="border-white/30 !text-white hover:!bg-white/10 hover:!text-white"
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <p className="mt-8 flex flex-col gap-1 text-sm text-white/50 sm:flex-row sm:justify-center sm:gap-4">
          <span>Instagram {config.contact.instagram}</span>
          <span>{config.contact.email}</span>
        </p>
      </Container>
    </section>
  );
}
