import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ContactInvite, PageIntro } from "@/components/site/Blocks";
import { areas } from "@/content/services";

export const Route = createFileRoute("/atendimentos/")({
  head: () => ({
    meta: [
      { title: "Atendimentos | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Dois serviços distintos: psicoterapia individual para adultos e acompanhamento para pessoas com TDAH.",
      },
      { property: "og:title", content: "Atendimentos | Mariana Helou" },
      {
        property: "og:description",
        content: "Psicoterapia individual e acompanhamento para pessoas com TDAH — dois serviços, dois propósitos.",
      },
    ],
  }),
  component: Atendimentos,
});

function Atendimentos() {
  const services = areas.filter((a) => a.id !== "projetos");
  return (
    <>
      <PageIntro
        eyebrow="Atendimentos"
        title="Dois serviços, dois propósitos."
        lead="A psicoterapia individual e o acompanhamento para pessoas com TDAH são trabalhos diferentes, com objetivos, formatos e dinâmicas próprios. Conheça cada um para escolher o que faz sentido para você."
      />
      <section className="container-editorial grid gap-8 py-20 md:grid-cols-2 md:py-28">
        {services.map((s) => (
          <article
            key={s.id}
            className={`area-${s.id} group relative flex min-h-[26rem] flex-col rounded-sm bg-area-soft p-10 md:p-14`}
          >
            <span className="font-display text-7xl text-area-ink/70">{s.number}</span>
            <h2 className="mt-auto pt-16 text-4xl md:text-5xl">{s.title}</h2>
            <p className="mt-5 max-w-md text-muted-foreground">{s.summary}</p>
            <Link
              to={s.to}
              className="mt-10 inline-flex items-center gap-2 font-semibold text-area-ink after:absolute after:inset-0"
            >
              {s.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </article>
        ))}
      </section>
      <ContactInvite text="Ficou em dúvida sobre qual serviço procurar? Escreva contando um pouco do que você busca." />
    </>
  );
}
