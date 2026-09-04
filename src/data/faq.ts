export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer:
      "Na maioria dos casos, entre 5 e 10 dias úteis. O prazo depende da complexidade do projeto e da velocidade com que você envia o conteúdo e os feedbacks. Projetos mais simples já saem em uma semana.",
  },
  {
    question: "E se eu não gostar do primeiro protótipo?",
    answer:
      "Você só paga depois de ver e aprovar o primeiro protótipo. Se não gostar, não tem compromisso. Meu processo foi pensado justamente para você não correr risco.",
  },
  {
    question: "Preciso entender de tecnologia para ter um site?",
    answer:
      "De jeito nenhum. Eu cuido de tudo: design, desenvolvimento, configuração do domínio e publicação. Você só precisa me contar sobre o seu negócio e aprovar o resultado.",
  },
  {
    question: "O site vai aparecer no Google?",
    answer:
      "Sim. Todo site já sai com SEO técnico configurado, meta descriptions otimizadas, cadastro no Google Search Console e arquivo robots.txt. Isso dá as bases para o Google encontrar e indexar seu site corretamente.",
  },
  {
    question: "Posso atualizar o site depois?",
    answer:
      "Se optar pelo plano de hospedagem + manutenção, eu mesmo faço as atualizações que você precisar. No plano de entrega do projeto, você recebe os arquivos e pode contratar qualquer desenvolvedor para fazer alterações futuras.",
  },
  {
    question: "O que acontece se eu quiser cancelar a hospedagem?",
    answer:
      "Você pode cancelar a qualquer momento, sem multa. Se quiser levar o site para outro servidor, eu entrego os arquivos atualizados e ajudo na migração.",
  },
];
