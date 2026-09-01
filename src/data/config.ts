// Todas as informações centrais da marca vivem aqui.
// Alterar um dado neste arquivo atualiza o site inteiro — nunca duplique
// telefone, WhatsApp, e-mail etc. diretamente dentro de componentes.

export const config = {
  brand: {
    name: "Forecatt",
    tagline: "Sites profissionais e personalizados",
  },
  contact: {
    whatsapp: "5519991801570", // formato internacional, sem símbolos
    whatsappDisplay: "(19) 99180-1570",
    email: "trabalhoforegato@hotmail.com",
    instagram: "@forecatt",
    instagramUrl: "https://www.instagram.com/forecatt",
    // TODO: substituir pelo link real do formulário de briefing/requisitos.
    formLink: "SEU_LINK_DO_FORMULARIO_AQUI",
  },
  whatsappDefaultMessage:
    "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
} as const;
