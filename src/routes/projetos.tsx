import { createFileRoute } from "@tanstack/react-router";

import rodaImg from "@/assets/roda-cadeiras.jpg";
import { ContactInvite, PageIntro, SectionHeading } from "@/components/site/Blocks";
import { Editable } from "@/components/site/Editable";
import { projectEntries, projectKinds, type ProjectEntry } from "@/content/services";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos e atividades | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Rodas de conversa, palestras, grupos, encontros, workshops e projetos educativos em psicologia e saúde mental para pessoas, comunidades, escolas e empresas.",
      },
      { property: "og:title", content: "Projetos e atividades | Mariana Helou" },
      {
        property: "og:description",
        content: "A psicologia em espaços coletivos: rodas de conversa, palestras, grupos e workshops.",
      },
    ],
  }),
  component: Projetos,
});

const statusGroups: { id: ProjectEntry["status"]; title: string }[] = [
  { id: "em-andamento", title: "Em andamento" },
  { id: "proximo", title: "Próximas atividades" },
  { id: "realizado", title: "Atividades realizadas" },
];

function Projetos() {
  return (
    <div className="area-projetos">
      <PageIntro
        area="projetos"
        eyebrow="Projetos e atividades"
        title={
          <>
            A psicologia também acontece <em className="text-terracotta">em roda.</em>
          </>
        }
        lead="Iniciativas coletivas e educativas que abrem espaço para conversar, aprender e pensar a saúde mental junto — com pessoas, comunidades, escolas, organizações e empresas."
      />

      <section className="container-editorial pt-16 md:pt-24">
        <figure>
          <img
            src={rodaImg}
            alt="Cadeiras de madeira dispostas em círculo em uma sala iluminada com piso de terracota"
            width={1440}
            height={1088}
            className="aspect-[21/9] w-full rounded-sm object-cover"
          />
        </figure>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <SectionHeading eyebrow="Formatos" title="Modos de estar junto" />
        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projectKinds.map((k, i) => (
            <article key={k.id} id={k.id} className="grid grid-cols-[auto_1fr] gap-6 border-t border-foreground/80 pt-8">
              <span className="font-display text-5xl text-terracotta">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-3xl">{k.title}</h3>
                <p className="mt-4 text-muted-foreground">{k.text}</p>
                <p className="eyebrow mt-6 text-area-ink">Para: {k.audience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="border-t border-border bg-card">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading eyebrow="Agenda e arquivo" title="Projetos, encontros e registros" />
          <div className="mt-14 space-y-16">
            {statusGroups.map((g) => {
              const items = projectEntries.filter((e) => e.status === g.id);
              return (
                <div key={g.id} className="grid gap-8 md:grid-cols-12">
                  <h3 className="text-2xl md:col-span-3">{g.title}</h3>
                  <ul className="divide-y divide-border border-y border-border md:col-span-9">
                    {items.map((e, i) => (
                      <li key={i} className="grid gap-3 py-6 md:grid-cols-[10rem_1fr_12rem]">
                        <span className="eyebrow pt-1 text-area-ink">{e.kind}</span>
                        <div>
                          <p className="font-display text-2xl">
                            <Editable text={e.title} />
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            <Editable text={e.description} />
                          </p>
                        </div>
                        <p className="text-sm md:text-right">
                          <Editable text={e.date} />
                          <br />
                          <span className="text-muted-foreground">
                            <Editable text={e.place} />
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <ContactInvite
        title="Vamos criar algo juntos?"
        text="Para convites, parcerias e propostas de atividades com escolas, organizações, empresas ou comunidades, escreva contando a ideia."
      />
    </div>
  );
}
