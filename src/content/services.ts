import type { AppPath, AreaId } from "./site";

/**
 * The three professional areas. They are conceptually distinct:
 * ADHD accompaniment is NOT a form of individual psychotherapy.
 */

export type AreaSummary = {
  id: Exclude<AreaId, "textos">;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  to: AppPath;
  cta: string;
};

export const areas: AreaSummary[] = [
  {
    id: "psicoterapia",
    number: "01",
    title: "Psicoterapia individual",
    shortTitle: "Psicoterapia",
    summary:
      "Um espaço de escuta para adultos que desejam compreender a própria história, elaborar o que pesa e encontrar outros modos de estar no mundo.",
    to: "/atendimentos/psicoterapia-individual",
    cta: "Conhecer a psicoterapia",
  },
  {
    id: "tdah",
    number: "02",
    title: "Acompanhamento para pessoas com TDAH",
    shortTitle: "Acompanhamento TDAH",
    summary:
      "Um serviço próprio, voltado a compreender necessidades, atravessar desafios do dia a dia e construir formas mais sustentáveis de organizar a vida.",
    to: "/atendimentos/acompanhamento-tdah",
    cta: "Conhecer o acompanhamento",
  },
  {
    id: "projetos",
    number: "03",
    title: "Projetos, grupos e atividades",
    shortTitle: "Projetos",
    summary:
      "Rodas de conversa, palestras, grupos e workshops que levam a psicologia para espaços coletivos — comunidades, escolas, organizações e empresas.",
    to: "/projetos",
    cta: "Ver projetos e atividades",
  },
];

/* ---------- Psicoterapia individual ---------- */

export const psicoterapia = {
  intro:
    "A psicoterapia individual é um encontro regular entre você e uma psicóloga, em que há tempo e cuidado para falar, escutar e pensar sobre o que se vive. Não há respostas prontas, mas sim um processo construído junto.",
  whatIs: [
    "Psicoterapia é um trabalho de escuta e de elaboração. A partir da fala, aquilo que parecia confuso, repetitivo ou difícil de nomear vai ganhando forma e, com o tempo, outras possibilidades começam a aparecer.",
    "É um espaço para adultos que atravessam momentos de mudança, sofrimento, dúvidas ou que simplesmente desejam se conhecer melhor.",
  ],
  process: [
    {
      title: "Escuta",
      text: "Cada pessoa chega com uma história singular. O processo começa por escutá-la sem pressa e sem julgamentos.",
    },
    {
      title: "Elaboração",
      text: "Ao longo dos encontros, sentidos são construídos, revistos e reorganizados, sempre no ritmo de quem está em terapia.",
    },
    {
      title: "Continuidade",
      text: "A regularidade dos encontros sustenta o processo. Frequência e duração são combinadas em conjunto.",
    },
  ],
  firstSession: [
    "Um primeiro encontro para nos conhecermos e entendermos o que te traz aqui.",
    "Espaço para suas perguntas sobre o funcionamento da terapia.",
    "Combinados iniciais: frequência, horários, valores e formato.",
    "[Informações adicionais sobre a primeira sessão — a preencher]",
  ],
  formats: [
    {
      title: "Online",
      // text: "[Plataforma, horários disponíveis e orientações para o atendimento online — a preencher]",
    },
    {
      title: "Presencial",
      text: "Brasília/DF, Asa Norte",
    },
  ],
  practical: [
    { label: "Público", value: "Adultos" },
    { label: "Duração da sessão", value: "50 minutos" },
    // { label: "Frequência", value: "[a definir]" },
    // { label: "Valores e convênios", value: "[a definir]" },
  ],
};

/* ---------- Acompanhamento TDAH ---------- */
/* Keep this copy free of any description of the service as psychotherapy.
 * `distinction` is the only field that may name psychotherapy, and only to say what it is not. */

export const tdah = {
  distinction:
    "Este acompanhamento não é psicoterapia individual. É um serviço distinto, com objetivos, formato e dinâmica próprios.",
  intro:
    "Um espaço prático e colaborativo para pessoas com TDAH que desejam compreender melhor as próprias necessidades, lidar com os desafios do cotidiano e construir maneiras mais possíveis de organizar a vida.",
  focus: [
    {
      title: "Compreender necessidades",
      text: "Reconhecer como sua atenção, energia e ritmo funcionam, sem tomar como medida um padrão que não foi feito para você.",
    },
    {
      title: "Atravessar o cotidiano",
      text: "Olhar com cuidado para rotinas, prazos, compromissos e tarefas que costumam pesar mais do que deveriam.",
    },
    {
      title: "Desenvolver estratégias",
      text: "Experimentar recursos e combinados concretos, ajustados à sua realidade, e revisá-los quando for preciso.",
    },
    {
      title: "Sustentar no tempo",
      text: "Construir formas de organização que caibam na vida real: flexíveis, possíveis e respeitosas com quem você é.",
    },
  ],
  principles: [
    "Neurodivergência não é defeito a ser corrigido.",
    "Estratégias são construídas junto, não impostas.",
    "O ritmo e a realidade de cada pessoa orientam o trabalho.",
  ],
  details: [
    { label: "Metodologia", value: "[Descrição da metodologia — a preencher]" },
    { label: "Formato", value: "[Online ou presencial, individual" },
    { label: "Duração", value: "Cada encontro tem duração de 50 minutos e a duração do acompanhamento em si é acordada individualmente" },
    { label: "Para quem", value: "Adultos com diagnóstico ou suspeita de TDAH que já estejam em terapia" },
    // { label: "Informações práticas", value: "[Valores, agendamento e outros detalhes — a preencher]" },
  ],
};

/* ---------- Projetos ---------- */

export type ProjectKind = {
  id: string;
  title: string;
  text: string;
  audience: string;
};

export const projectKinds: ProjectKind[] = [
  {
    id: "rodas",
    title: "Rodas de conversa",
    text: "Encontros horizontais em que a palavra circula. Um modo de pensar junto sobre temas da vida, do trabalho e da saúde mental.",
    audience: "Comunidades, coletivos e grupos",
  },
  {
    id: "palestras",
    title: "Palestras",
    text: "Falas sobre psicologia e saúde mental, pensadas para o contexto e as perguntas de cada público.",
    audience: "Escolas, organizações e eventos",
  },
  {
    id: "grupos",
    title: "Grupos e encontros",
    text: "Espaços de troca contínua ou pontual, em torno de temas e experiências em comum.",
    audience: "Pessoas e grupos interessados",
  },
  {
    id: "workshops",
    title: "Workshops e projetos educativos",
    text: "Atividades formativas e projetos desenhados em parceria, com momentos de reflexão e prática.",
    audience: "Escolas, empresas e instituições",
  },
];

export type ProjectEntry = {
  status: "em-andamento" | "proximo" | "realizado";
  kind: string;
  title: string;
  date: string;
  place: string;
  description: string;
};

/* Placeholder entries — replace with real projects and events. */
export const projectEntries: ProjectEntry[] = [
  {
    status: "em-andamento",
    kind: "Grupo",
    title: "[Nome do projeto em andamento]",
    date: "[Período]",
    place: "[Local ou online]",
    description: "[Breve descrição do projeto, objetivos e público — a preencher]",
  },
  {
    status: "proximo",
    kind: "Roda de conversa",
    title: "[Título do próximo encontro]",
    date: "[Data e horário]",
    place: "[Local ou online]",
    description: "[Tema, formato e como participar — a preencher]",
  },
  {
    status: "proximo",
    kind: "Workshop",
    title: "[Título do próximo workshop]",
    date: "[Data e horário]",
    place: "[Local ou online]",
    description: "[Tema, formato e como participar — a preencher]",
  },
  {
    status: "realizado",
    kind: "Palestra",
    title: "[Título de atividade realizada]",
    date: "[Data]",
    place: "[Instituição ou local]",
    description: "[Breve relato da atividade — a preencher]",
  },
];
