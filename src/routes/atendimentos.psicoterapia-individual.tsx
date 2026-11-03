import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-vaso.jpg";
import { ContactInvite, PageIntro, SectionHeading } from "@/components/site/Blocks";
import { Editable } from "@/components/site/Editable";
import { psicoterapia } from "@/content/services";

export const Route = createFileRoute("/atendimentos/psicoterapia-individual")({
  head: () => ({
    meta: [
      { title: "Psicoterapia individual para adultos | Mariana Helou" },
      {
        name: "description",
        content:
          "O que é psicoterapia, como funciona o processo terapêutico, o que esperar da primeira sessão e formatos de atendimento online e presencial.",
      },
      { property: "og:title", content: "Psicoterapia individual | Mariana Helou" },
      {
        property: "og:description",
        content: "Um espaço de escuta para adultos — online e/ou presencial.",
      },
    ],
  }),
  component: Psicoterapia,
});

function Psicoterapia() {
  const p = psicoterapia;
  return (
    <div className="area-psicoterapia">
      <PageIntro
        area="psicoterapia"
        eyebrow="Atendimentos · Psicoterapia individual"
        title={
          <>
            Tempo e espaço para <em className="text-olive">pensar a própria vida.</em>
          </>
        }
        lead={p.intro}
        aside={
          <dl className="divide-y divide-border border-y border-border text-sm">
            {p.practical.map((item) => (
              <div key={item.label} className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">{item.label}</dt>
                <dd className="text-right font-medium">
                  <Editable text={item.value} />
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <SectionHeading eyebrow="O que é" title="O que é psicoterapia" className="md:col-span-5" />
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-6 md:col-start-7">
          {p.whatIs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </section>

      <section className="grain bg-olive text-paper">
        <div className="container-editorial py-20 md:py-28">
          <p className="eyebrow text-mustard">O processo</p>
          <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">Como o processo terapêutico acontece</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {p.process.map((step, i) => (
              <li key={step.title} className="border-t border-paper/30 pt-6">
                <span className="font-display text-5xl text-mustard">0{i + 1}</span>
                <h3 className="mt-6 text-3xl">{step.title}</h3>
                <p className="mt-3 text-paper/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <img
            src={heroImg}
            alt="Ramo de oliveira em vaso de barro"
            width={1152}
            height={1440}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <SectionHeading eyebrow="Primeiro encontro" title="O que esperar da primeira sessão" />
          <ul className="mt-10 space-y-5">
            {p.firstSession.map((item) => (
              <li key={item} className="flex gap-4 border-b border-border pb-5 text-lg">
                <span className="mt-3 size-2 shrink-0 rounded-full bg-area" aria-hidden />
                <span>
                  <Editable text={item} />
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-3xl">Formatos de atendimento</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.formats.map((f) => (
              <div key={f.title} className="rounded-sm bg-area-soft p-6">
                <p className="eyebrow text-area-ink">{f.title}</p>
                <p className="mt-3 text-sm">
                  <Editable text={f.text} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInvite
        title="Quer começar uma psicoterapia?"
        text="Escreva para agendar um primeiro encontro ou tirar dúvidas sobre horários, formatos e valores."
      />
    </div>
  );
}
