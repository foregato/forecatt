export interface Plan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    id: "desenvolvimento",
    name: "Site desenvolvido e entregue",
    price: "R$ 600 a R$ 1.000",
    priceNote: "Valor único, referente ao desenvolvimento completo — não é mensalidade",
    description:
      "O valor varia de acordo com a complexidade e os requisitos do projeto. Ao final, você recebe o site completo em um arquivo compactado e escolhe onde hospedar.",
    features: [
      "Site desenvolvido do zero, sob medida",
      "Entrega do projeto em arquivo compactado",
      "Você hospeda onde preferir",
      "Você contrata sua própria hospedagem, se precisar",
      "Você contrata seu próprio domínio",
    ],
    ctaLabel: "Quero desenvolver meu site",
  },
  {
    id: "hospedagem",
    name: "Hospedagem + manutenção",
    price: "R$ 99,90/mês",
    priceNote: "+ domínio à parte (~R$ 40/ano)",
    description:
      "Ideal para quem não quer se preocupar com nada técnico. Os R$ 99,90 mensais já incluem a criação completa do site, não é apenas o custo da hospedagem.",
    features: [
      "Criação completa do site",
      "Hospedagem inclusa",
      "Manutenção contínua",
      "Suporte relacionado ao site",
      "Atualizações necessárias",
      "Acompanhamento do projeto",
    ],
    ctaLabel: "Quero hospedagem + manutenção",
    highlighted: true,
  },
];

export interface ComparisonRow {
  label: string;
  personalizado: string;
  mensal: string;
}

export const comparison: ComparisonRow[] = [
  { label: "Desenvolvimento do site", personalizado: "Sim", mensal: "Sim" },
  { label: "Design personalizado", personalizado: "Sim", mensal: "Sim" },
  { label: "Responsivo", personalizado: "Sim", mensal: "Sim" },
  { label: "Entrega do projeto", personalizado: "Arquivo compactado", mensal: "Já fica hospedado" },
  { label: "Hospedagem", personalizado: "Cliente contrata", mensal: "Inclusa" },
  { label: "Domínio", personalizado: "Cliente contrata", mensal: "~R$ 40/ano à parte" },
  { label: "Manutenção e suporte", personalizado: "Não inclusa", mensal: "Inclusa" },
  { label: "Backup e versões do projeto", personalizado: "Sim", mensal: "Sim" },
  { label: "Valor", personalizado: "R$ 600 a R$ 1.000 (único)", mensal: "R$ 99,90/mês" },
];
