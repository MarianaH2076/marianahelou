/**
 * Blog posts ("Textos"). Example content — titles, dates and bodies are placeholders.
 * Shape mirrors a typical CMS post (slug, title, excerpt, category, date, body) so it can be
 * swapped for WordPress REST data through src/lib/content.ts.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  featured?: boolean;
  body: string[];
};

const exampleBody = (topic: string): string[] => [
  `Este é um texto de exemplo sobre ${topic}. Ele existe para mostrar como a leitura acontece aqui: com tempo, espaço e uma tipografia que convida a ficar.`,
  "Substitua estes parágrafos pelo conteúdo final. Textos longos são bem-vindos — o layout foi pensado para sustentar uma leitura confortável, com linhas de comprimento moderado e respiro entre os parágrafos.",
  "[Desenvolvimento do texto — a preencher]",
  "[Considerações finais — a preencher]",
];

export const posts: Post[] = [
  {
    slug: "quando-organizar-a-vida-parece-mais-dificil",
    title: "Quando organizar a vida parece mais difícil do que deveria",
    excerpt:
      "Sobre a distância entre o que esperamos de nós mesmos e o que de fato conseguimos sustentar no dia a dia.",
    category: "TDAH e neurodivergência",
    date: "2026-10-14",
    readingMinutes: 7,
    featured: true,
    body: exampleBody("organização e cotidiano"),
  },
  {
    slug: "tempo-demais-tentando-dar-conta-de-tudo",
    title: "O que acontece quando passamos tempo demais tentando dar conta de tudo?",
    excerpt:
      "Uma reflexão sobre exigência, cansaço e o que fica de fora quando tudo parece urgente.",
    category: "Clínica e cotidiano",
    date: "2026-09-22",
    readingMinutes: 6,
    featured: true,
    body: exampleBody("exigência e cansaço"),
  },
  {
    slug: "entre-expectativas-e-possibilidades",
    title: "Entre expectativas e possibilidades: aprendendo a respeitar os próprios limites",
    excerpt:
      "Limites não como falha, mas como contorno — aquilo que nos permite existir de forma mais inteira.",
    category: "Limites e autocuidado",
    date: "2026-08-30",
    readingMinutes: 8,
    featured: true,
    body: exampleBody("limites e possibilidades"),
  },
  {
    slug: "texto-exemplo-conversar-em-roda",
    title: "[Título de texto] — sobre conversar em roda",
    excerpt: "[Resumo do texto — a preencher]",
    category: "Saúde mental e coletividade",
    date: "2026-07-18",
    readingMinutes: 5,
    body: exampleBody("experiências coletivas"),
  },
  {
    slug: "texto-exemplo-ritmos-proprios",
    title: "[Título de texto] — sobre ritmos próprios",
    excerpt: "[Resumo do texto — a preencher]",
    category: "TDAH e neurodivergência",
    date: "2026-06-25",
    readingMinutes: 4,
    body: exampleBody("ritmos e atenção"),
  },
  {
    slug: "texto-exemplo-comecar-terapia",
    title: "[Título de texto] — sobre começar uma terapia",
    excerpt: "[Resumo do texto — a preencher]",
    category: "Clínica e cotidiano",
    date: "2026-05-30",
    readingMinutes: 6,
    body: exampleBody("o início de um processo terapêutico"),
  },
];
