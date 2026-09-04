export interface ResultItem {
  id: string;
  before: string;
  after: string;
  description: string;
}

export const results: ResultItem[] = [
  {
    id: "encontrado",
    before: "Seu negócio não aparece no Google",
    after: "Clientes te encontram pesquisando online",
    description:
      "Com SEO técnico e indexação no Google Search Console, seu site começa a aparecer nas buscas relevantes para o seu ramo.",
  },
  {
    id: "credibilidade",
    before: "Dúvida sobre a seriedade do negócio",
    after: "Primeira impressão profissional e confiável",
    description:
      "Um site bem feito transmite estabilidade e cuidado com a imagem. Isso converte visitantes em clientes antes mesmo do primeiro contato.",
  },
  {
    id: "contato",
    before: "Perde clientes por falta de canal direto",
    after: "WhatsApp, e-mail e formulário em um só lugar",
    description:
      "Todas as formas de contato organizadas e de fácil acesso. O visitante encontra o que precisa sem esforço.",
  },
  {
    id: "portfolio",
    before: "Trabalhos espalhados no Instagram",
    after: "Portfólio organizado e sempre disponível",
    description:
      "Seus projetos, produtos ou serviços apresentados de forma estruturada, sem depender do algoritmo de rede social.",
  },
];
