// Blocos de conteúdo institucional (textos das seções da página).
// Informações de marca/contato ficam em `config.ts`; planos e portfólio
// têm arquivo próprio por serem mais extensos e editados com mais frequência.

export interface Benefit {
  id: string;
  title: string;
}

export const benefits: Benefit[] = [
  { id: "credibilidade", title: "Transmitir mais credibilidade" },
  { id: "servicos", title: "Apresentar serviços de forma profissional" },
  { id: "google", title: "Ser encontrado nas pesquisas do Google" },
  { id: "contato", title: "Facilitar o contato com clientes" },
  { id: "presenca", title: "Ter uma presença digital própria" },
  {
    id: "apresentacao",
    title: "Apresentar produtos, trabalhos, projetos e informações da empresa",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "design",
    title: "Design personalizado",
    description:
      "Cada site é desenvolvido de acordo com a identidade e a necessidade do cliente.",
  },
  {
    id: "responsivo",
    title: "Responsividade",
    description: "O site funciona em celular, tablet e computador.",
  },
  {
    id: "seo-tecnico",
    title: "SEO técnico (Meta Description + robots.txt)",
    description:
      "Meta description otimizada e arquivo robots.txt configurados, ajudando o Google a entender e rastrear o site corretamente.",
  },
  {
    id: "indexacao",
    title: "Google Search Console",
    description:
      "Cadastro e configuração do site no Google Search Console, para acompanhar e melhorar a indexação nas buscas.",
  },
  {
    id: "llms",
    title: "Preparado para IA (llms.txt)",
    description:
      "Inclusão do arquivo llms.txt, deixando o site também preparado para ser compreendido por ferramentas de inteligência artificial.",
  },
  {
    id: "dominio",
    title: "Domínio",
    description: "Auxílio na configuração e publicação do domínio do cliente.",
  },
  {
    id: "whatsapp",
    title: "Integração com WhatsApp e redes sociais",
    description: "Facilitação do contato entre o cliente e o negócio.",
  },
  {
    id: "manutencao",
    title: "Manutenção",
    description:
      "Disponível no plano de hospedagem, mantendo o site atualizado enquanto o cliente permanecer no plano.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Primeiro contato",
    description:
      "Você entra em contato demonstrando interesse em criar um site.",
  },
  {
    step: "02",
    title: "Briefing / Requisitos",
    description:
      "Envio um formulário para você contar sobre o negócio, o objetivo do site, informações e preferências visuais.",
  },
  {
    step: "03",
    title: "Primeiro protótipo",
    description:
      "Com base no formulário, desenvolvo e apresento a primeira versão do projeto para você avaliar.",
  },
  {
    step: "04",
    title: "Ajustes",
    description:
      "Trabalhamos juntos por meio de feedbacks até chegarmos ao resultado desejado.",
  },
  {
    step: "05",
    title: "Finalização",
    description:
      "Após a aprovação, finalizo o projeto e faço a entrega conforme o modelo escolhido.",
  },
];

export const processHighlight =
  "O projeto pode ser concluído em até 1 semana, dependendo da complexidade e da velocidade dos feedbacks.";

export interface PaymentStep {
  label: string;
}

export const paymentFlow: PaymentStep[] = [
  { label: "Contato" },
  { label: "Formulário" },
  { label: "Primeiro protótipo" },
  { label: "Pagamento" },
  { label: "Ajustes" },
  { label: "Finalização" },
];

export const paymentExplanation =
  "O pagamento é realizado após a apresentação do primeiro protótipo, e não somente ao final do projeto. Assim, você já vê o andamento do seu site antes de pagar, e eu tenho a garantia de seguir com os ajustes e a finalização.";
