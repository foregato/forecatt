export interface PortfolioItem {
  id: string;
  name: string;
  url: string;
  /**
   * Caminho da imagem de preview, relativo a /public.
   * Troque o arquivo em /public/images/portfolio mantendo o mesmo nome,
   * ou aponte para um novo arquivo aqui — não precisa mexer em nenhum componente.
   */
  image: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "quadrimotors",
    name: "Quadrimotors e Cia",
    url: "https://quadrimotorsecia.com.br",
    image: "/images/portfolio/PgInicialQuadrimotors.png",
  },
  {
    id: "vila-office",
    name: "Vila Office",
    url: "https://vilaoffice213.com.br",
    image: "/images/portfolio/pgInicialVila.png",
  },
  {
    id: "luvia",
    name: "Luvia Marketing Digital",
    url: "https://luviamdigital.vercel.app",
    image: "/images/portfolio/pgInicialLuvia.png",
  },
];
