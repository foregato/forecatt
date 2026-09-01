# Forecatt — site institucional

Stack: React + Vite + TypeScript + Tailwind CSS.

## Rodar o projeto

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Estrutura

```
src/
├── components/   # UI — não tem texto/dado solto, tudo vem de src/data
├── data/         # conteúdo do site (edite aqui, não no JSX)
├── lib/          # funções utilitárias (ex: link do WhatsApp)
├── styles/       # CSS global (Tailwind)
public/
└── images/
    ├── logo/
    └── portfolio/
```

Imagens (logo, portfólio) ficam em `public/images`: arquivos ali podem ser
trocados diretamente, inclusive depois do build, sem precisar reimportar
nada no código — ideal para quando o portfólio for atualizado com
frequência.

## O que editar no dia a dia

- **Portfólio (imagens/links/nomes):** `src/data/portfolio.ts` +
  `public/images/portfolio/`. Troque os arquivos `.svg` de placeholder por
  screenshots reais (`.jpg`/`.png`/`.webp`, qualquer extensão funciona) e
  ajuste o caminho `image` no arquivo de dados. Não precisa tocar em nenhum
  componente.
- **WhatsApp, e-mail, Instagram, link do formulário:** `src/data/config.ts`
  — um único lugar, usado em todo o site.
- **Serviços, processo, pagamento, benefícios:** `src/data/content.ts` (um
  bloco exportado para cada seção).
- **Planos e comparativo:** `src/data/plans.ts`.
- **Cores e fontes:** `tailwind.config.js` (chaves `ink`, `accent`, `paper`,
  `font-display`, `font-body`).

## Pendências antes de publicar

- Substituir os placeholders de portfólio por screenshots reais.
- Substituir `formLink` em `src/data/config.ts` (atualmente
  `SEU_LINK_DO_FORMULARIO_AQUI`) pelo link real do formulário de briefing —
  ele é usado no botão "Preencher formulário" no final da página.
- Registrar domínio e configurar deploy (Vercel/Netlify recomendado).
