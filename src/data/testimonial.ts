export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "quadrimotors",
    name: "Quadrimotors e Cia",
    role: "Concessionária de veículos",
    text:
      "O site ficou exatamente como a gente imaginava. Antes a gente só tinha Instagram, agora os clientes chegam pelo Google também. A entrega foi rápida e o suporte sempre responde.",
  },
  {
    id: "vila-office",
    name: "Vila Office",
    role: "Coworking e salas comerciais",
    text:
      "Precisávamos de algo que transmitisse profissionalismo para quem busca sala comercial. O site ficou limpo, direto e já ajudou a fechar novos contratos.",
  },
  {
    id: "luvia",
    name: "Luvia Marketing Digital",
    role: "Agência de marketing",
    text:
      "Como agência, a gente tem exigência com design. O resultado superou o esperado. O site carrega rápido, é responsivo e a estrutura técnica está impecável.",
  },
];
