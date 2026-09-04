import { whatsappLink } from "@/lib/whatsapp";

export default function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white px-4 py-3 shadow-lg md:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-full bg-accent py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
      >
        Solicitar orçamento pelo WhatsApp
      </a>
    </div>
  );
}
