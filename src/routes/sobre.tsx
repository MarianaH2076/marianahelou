import { createFileRoute } from "@tanstack/react-router";

import { ContactInvite, PageIntro, PortraitPlaceholder } from "@/components/site/Blocks";
import { Editable } from "@/components/site/Editable";
import retratoImg from "@/assets/foto-pessoal.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre mim | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Conheça a trajetória, a formação, a abordagem clínica e os valores de Mariana Helou, psicóloga clínica.",
      },
      { property: "og:title", content: "Sobre mim | Mariana Helou" },
      {
        property: "og:description",
        content: "Trajetória, formação, abordagem e valores da psicóloga Mariana Helou.",
      },
    ],
  }),
  component: Sobre,
});

/* Editable placeholders — Mariana's real background goes here. */
const formacao = [
  { periodo: "[Ano]", titulo: "[Graduação em Psicologia]", lugar: "[Instituição]" },
  { periodo: "[Ano]", titulo: "[Especialização / pós-graduação]", lugar: "[Instituição]" },
  { periodo: "[Ano]", titulo: "[Formação complementar]", lugar: "[Instituição]" },
];

const experiencia = [
  { periodo: "[Período]", titulo: "[Experiência profissional]", lugar: "[Local / instituição]" },
  { periodo: "[Período]", titulo: "[Experiência profissional]", lugar: "[Local / instituição]" },
];

const valores = [
  { titulo: "Escuta", texto: "Dar tempo e lugar para que cada pessoa seja ouvida na sua singularidade." },
  { titulo: "Ética", texto: "Sigilo, responsabilidade e cuidado como fundamentos de qualquer encontro." },
  { titulo: "Respeito à diferença", texto: "Acolher modos diversos de pensar, sentir e funcionar — incluindo a neurodivergência." },
  { titulo: "Compromisso coletivo", texto: "Entender a saúde mental também como questão social, compartilhada." },
];

function Timeline({ title, items }: { title: string; items: typeof formacao }) {
  return (
    <div>
      <h3 className="eyebrow text-terracotta">{title}</h3>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {items.map((it, i) => (
          <li key={i} className="grid grid-cols-[6rem_1fr] gap-4 py-5">
            <span className="text-sm text-muted-foreground">
              <Editable text={it.periodo} />
            </span>
            <span>
              <span className="block font-display text-xl">
                <Editable text={it.titulo} />
              </span>
              <span className="text-sm text-muted-foreground">
                <Editable text={it.lugar} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sobre() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre mim"
        title={
          <>
            Psicóloga, leitora, escritora, e alguém que acredita no <em className="text-terracotta">encontro</em>.
          </>
        }
        lead="Meu trabalho se desdobra entre a clínica, o acompanhamento de pessoas com TDAH e projetos que levam a psicologia para espaços coletivos."
      />

      <section className="container-editorial grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <PortraitPlaceholder src={retratoImg} alt="Mariana Helou, psicóloga" />
        </div>
        <div className="space-y-6 text-lg md:col-span-6 md:col-start-7">
          <p className="eyebrow text-terracotta">Apresentação</p>
          <p className="font-display text-3xl leading-snug">
            <Editable text="[Frase de apresentação pessoal, na voz da Mariana — a preencher]" />
          </p>
          <p className="text-muted-foreground">
            <Editable text="[Parágrafo sobre como chegou à psicologia e o que move o seu trabalho — a preencher]" />
          </p>
          <p className="text-muted-foreground">
            <Editable text="[Parágrafo sobre a atuação atual: clínica, acompanhamento TDAH e projetos — a preencher]" />
          </p>

          <div className="space-y-14 pt-12">
            {/* <Timeline title="Formação acadêmica" items={formacao} />
            <Timeline title="Experiência profissional" items={experiencia} /> */}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="eyebrow text-olive">Abordagem clínica</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Como penso o cuidado.</h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              <Editable text="[Referencial teórico e abordagem clínica — a preencher]" />
            </p>
            <p>
              <Editable text="[Como essa abordagem se traduz na prática do consultório — a preencher]" />
            </p>
          </div>

          <ul className="mt-6 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 md:col-span-12 lg:grid-cols-4">
            {valores.map((v, i) => (
              <li key={v.titulo} className="bg-card p-8">
                <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{v.titulo}</h3>
                <p className="mt-3 text-base text-muted-foreground">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow text-mustard-deep">Interesses e perspectivas</p>
          <h2 className="mt-5 text-4xl md:text-5xl">Uma psicologia que conversa com o mundo.</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Penso a psicologia em diálogo com outras áreas: a literatura, a educação, a vida em
            comunidade. Esse olhar mais amplo atravessa tanto a clínica quanto os projetos coletivos.
          </p>
          <p>
            <Editable text="[Interesses, temas de estudo e referências que inspiram o trabalho — a preencher]" />
          </p>
        </div>
      </section>

      <ContactInvite />
    </>
  );
}
