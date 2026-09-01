import { config } from "@/data/config";

/**
 * Gera um link do WhatsApp com mensagem contextual.
 * Use sempre esta função — nunca monte o link manualmente em um componente.
 */
export function whatsappLink(message?: string): string {
  const text = message?.trim() || config.whatsappDefaultMessage;
  const params = new URLSearchParams({ text });
  return `https://wa.me/${config.contact.whatsapp}?${params.toString()}`;
}

/** Mensagem pronta para quando o interesse é em um plano específico. */
export function whatsappPlanMessage(planName: string): string {
  return `Olá! Vim pelo site e gostaria de saber mais sobre o ${planName}.`;
}
