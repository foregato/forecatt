import { useId, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { faqItems } from "@/data/faq";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="pr-4 text-sm font-medium text-ink">{question}</span>
        <span
          className={`shrink-0 text-accent transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2v12M2 8h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-2xl pb-5 text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-line py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            description="Tire suas dúvidas antes de começar. Se não encontrar o que procura, é só chamar no WhatsApp."
          />
        </Reveal>

        <Reveal delay={80} className="mt-12 max-w-3xl">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
