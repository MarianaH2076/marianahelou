import { createFileRoute } from "@tanstack/react-router";

import tdahImg from "@/assets/tdah-mesa.jpg";
import { ContactInvite, PageIntro, SectionHeading } from "@/components/site/Blocks";
import { Editable } from "@/components/site/Editable";
import { tdah } from "@/content/services";

export const Route = createFileRoute("/atendimentos/acompanhamento-tdah")({
  head: () => ({
    meta: [
      { title: "Acompanhamento para pessoas com TDAH | Mariana Helou" },
      {
        name: "description",
        content:
          "Um serviço próprio para pessoas com TDAH: compreender necessidades, atravessar desafios do cotidiano e construir formas sustentáveis de organizar a vida.",
      },
      { property: "og:title", content: "Acompanhamento para pessoas com TDAH | Mariana Helou" },
      {
        property: "og:description",
        content: "Prático, colaborativo e respeitoso com a neurodivergência.",
      },
    ],
  }),
  component: AcompanhamentoTdah,
});

function AcompanhamentoTdah() {
  const t = tdah;
  return (
    <div className="area-tdah">
      <PageIntro
        area="tdah"
        eyebrow="Atendimentos · Acompanhamento TDAH"
        title={
          <>
            Organizar a vida do <em className="text-mustard-deep">seu jeito</em>, no seu ritmo.
          </>
        }
        lead={t.intro}
        aside={
          <div className="rounded-sm border-l-4 border-area bg-area-soft p-6">
            <p className="eyebrow text-area-ink">Importante</p>
            <p className="mt-3 text-sm leading-relaxed">{t.distinction}</p>
          </div>
        }
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <SectionHeading eyebrow="Foco do trabalho" title="O que esse acompanhamento propõe" className="md:col-span-5" />
          <p className="text-lg text-muted-foreground md:col-span-6 md:col-start-7">
            Um trabalho próximo do cotidiano, que parte da sua experiência concreta — do que
            funciona, do que trava e do que você gostaria que fosse diferente.
          </p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.focus.map((f, i) => (
            <li key={f.title} className="flex flex-col bg-background p-8">
              <span className="flex size-10 items-center justify-center rounded-full bg-area font-display text-area-foreground">
                {i + 1}
              </span>
              <h3 className="mt-8 text-2xl">{f.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-area-soft">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6">
            <img
              src={tdahImg}
              alt="Mesa com pedras de rio alinhadas, caderno aberto e caneca amarela"
              width={1440}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow text-area-ink">Princípios</p>
            <h2 className="mt-5 text-4xl">Respeito à neurodivergência</h2>
            <ul className="mt-8 space-y-6">
              {t.principles.map((p) => (
                <li key={p} className="font-display text-2xl leading-snug">
                  — {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <SectionHeading eyebrow="Como funciona" title="Informações práticas" className="md:col-span-5" />
        <dl className="divide-y divide-border border-y border-border md:col-span-7">
          {t.details.map((d) => (
            <div key={d.label} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr]">
              <dt className="eyebrow pt-1 text-area-ink">{d.label}</dt>
              <dd className="text-lg">
                <Editable text={d.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactInvite
        title="Quer saber mais sobre o acompanhamento?"
        text="Escreva contando um pouco sobre o que você vive hoje. A partir daí, conversamos sobre o formato e se esse acompanhamento faz sentido para você."
      />
    </div>
  );
}
