/**
 * Site-wide editable content.
 * Values wrapped in [colchetes] are placeholders to be replaced by Mariana.
 * Contact `href: null` means the channel is not configured yet; it renders as a placeholder.
 */

export type ContactChannel = {
  id: "whatsapp" | "email" | "instagram" | "linkedin";
  label: string;
  value: string;
  href: string | null;
};

export const site = {
  name: "Mariana Helou",
  role: "Psicologia",
  tagline: "Psicóloga clínica",
  crp: "[CRP 00/00000 — a preencher]",
  location: "[Cidade, Estado — a preencher]",
  contact: [
    { id: "whatsapp", label: "WhatsApp", value: "[número a definir]", href: null },
    { id: "email", label: "E-mail", value: "[e-mail a definir]", href: null },
    { id: "instagram", label: "Instagram", value: "[@perfil a definir]", href: null },
    { id: "linkedin", label: "LinkedIn", value: "[perfil a definir]", href: null },
  ] satisfies ContactChannel[],
};

/** Mariana's Substack: source of the "Textos" section. */
export const substack = {
  url: "https://marianahelou.substack.com",
  feedUrl: "https://marianahelou.substack.com/feed",
};

export type AppPath =
  | "/"
  | "/sobre"
  | "/atendimentos"
  | "/atendimentos/psicoterapia-individual"
  | "/atendimentos/acompanhamento-tdah"
  | "/projetos"
  | "/textos"
  | "/contato";

export type NavItem = {
  label: string;
  to: AppPath;
  children?: { label: string; to: AppPath; description: string; area: AreaId }[];
};

export type AreaId = "psicoterapia" | "tdah" | "projetos" | "textos";

export const mainNav: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Sobre mim", to: "/sobre" },
  {
    label: "Atendimentos",
    to: "/atendimentos",
    children: [
      {
        label: "Psicoterapia individual",
        to: "/atendimentos/psicoterapia-individual",
        description: "Para adultos, online e/ou presencial",
        area: "psicoterapia",
      },
      {
        label: "Acompanhamento para pessoas com TDAH",
        to: "/atendimentos/acompanhamento-tdah",
        description: "Um serviço próprio, prático e colaborativo",
        area: "tdah",
      },
    ],
  },
  { label: "Projetos", to: "/projetos" },
  { label: "Textos", to: "/textos" },
  { label: "Contato", to: "/contato" },
];
