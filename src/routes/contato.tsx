import { createFileRoute, Link } from "@tanstack/react-router";
import { AtSign, Linkedin, Mail, MessageCircle } from "lucide-react";

import { Editable } from "@/components/site/Editable";
import { areas } from "@/content/services";
import { site, type ContactChannel } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Entre em contato com Mariana Helou sobre psicoterapia individual, acompanhamento para pessoas com TDAH ou projetos e atividades.",
      },
      { property: "og:title", content: "Contato | Mariana Helou" },
      {
        property: "og:description",
        content: "Caminhos de contato para psicoterapia, acompanhamento TDAH e projetos profissionais.",
      },
    ],
  }),
  component: Contato,
});

const pathwayText: Record<string, string> = {
  psicoterapia:
    "Para agendar um primeiro encontro ou tirar dúvidas sobre horários, formatos e valores da psicoterapia.",
  tdah: "Para saber mais sobre o acompanhamento para pessoas com TDAH e conversar sobre o formato.",
  projetos:
    "Para convites, palestras, parcerias e propostas de atividades com escolas, organizações, empresas ou comunidades.",
};

const icons: Record<ContactChannel["id"], typeof Mail> = {
  whatsapp: MessageCircle,
  email: Mail,
  instagram: AtSign,
  linkedin: Linkedin,
};

function Contato() {
  return (
    <>
      <section className="container-editorial grid gap-12 pb-16 pt-16 md:grid-cols-12 md:pt-24">
        <div className="animate-rise md:col-span-8">
          <p className="eyebrow flex items-center gap-3 text-terracotta">
            <span className="h-px w-10 bg-terracotta" aria-hidden />
            Contato
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl">
            Toda conversa começa com <em className="text-olive">uma primeira palavra.</em>
          </h1>
          <p className="measure mt-8 text-lg text-muted-foreground md:text-xl">
            Escreva do jeito que for possível — curto, longo, com dúvidas ou com certezas. Respondo
            com calma e atenção.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-20">
        <p className="eyebrow text-muted-foreground">Sobre o que você quer conversar?</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {areas.map((a) => (
            <li key={a.id} className={`area-${a.id} flex flex-col rounded-sm bg-area-soft p-8`}>
              <span className="h-1 w-12 bg-area" aria-hidden />
              <h2 className="mt-8 text-3xl">{a.title}</h2>
              <p className="mt-4 text-muted-foreground">{pathwayText[a.id]}</p>
              <div className="mt-auto pt-8 text-sm">
                <a href="#canais" className="font-semibold text-area-ink link-underline">
                  Ver canais de contato ↓
                </a>
                <span className="mx-2 text-muted-foreground">·</span>
                <Link to={a.to} className="text-muted-foreground link-underline">
                  Saiba mais
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="canais" className="grain scroll-mt-24 bg-olive text-paper">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="eyebrow text-mustard">Canais</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Onde me encontrar</h2>
            <p className="mt-6 text-paper/75">
              Ao escrever, conte brevemente qual dos caminhos acima te interessa — isso ajuda a
              responder melhor.
            </p>
          </div>
          <ul className="divide-y divide-paper/15 border-y border-paper/15 md:col-span-7">
            {site.contact.map((c) => {
              const Icon = icons[c.id];
              const inner = (
                <>
                  <Icon className="size-5 text-mustard" aria-hidden />
                  <span className="eyebrow w-28 text-paper/60">{c.label}</span>
                  <span className="font-display text-2xl">
                    <Editable text={c.value} />
                  </span>
                </>
              );
              return (
                <li key={c.id}>
                  {c.href ? (
                    <a href={c.href} className="flex items-center gap-5 py-6 transition-colors hover:text-mustard">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-5 py-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container-editorial py-16 text-sm text-muted-foreground">
        <p>
          <Editable text={site.crp} /> · <Editable text={site.location} />
        </p>
        <p className="mt-2 max-w-2xl">
          Este site não é um canal de atendimento de urgência. Em situações de crise, procure o CVV
          (ligue 188) ou um serviço de saúde mais próximo.
        </p>
      </section>
    </>
  );
}
