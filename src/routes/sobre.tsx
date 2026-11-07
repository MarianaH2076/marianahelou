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
  { titulo: "Respeito à diferença", texto: "Acolher modos diversos de pensar, sentir e funcionar, incluindo a neurodivergência." },
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
            <Editable text="Sou a Mariana, psicóloga, leitora, escritora, neurodivergente, mãe de duas gatas, de muitas plantas e alguém bastante curiosa sobre as pessoas, suas histórias e as diferentes formas de estar no mundo." />
          </p>
          <p className="text-muted-foreground">
            <Editable text="Gosto de aprender, de fazer perguntas, escutar histórias e de encontrar conexões entre a psicologia e a vida como ela acontece, para além das paredes do consultório." />
          </p>
          <p className="text-muted-foreground">
            <Editable text="Minha trajetória até a psicologia passou por diferentes experiências, especialmente na educação, e foi me aproximando cada vez mais das perguntas que hoje orientam meu trabalho: como as pessoas se desenvolvem, se relacionam consigo mesmas e com o mundo? Como suas histórias, seus contextos e as condições em que vivem atravessam a maneira como pensam, sentem e agem?" />
          </p>
          <p className="text-muted-foreground">
            <Editable text=" Acredito que compreender alguém exige olhar para além do indivíduo, considerando também suas relações, sua história e o contexto social em que está inserido. É esse olhar, atento às singularidades e às diferenças, que procuro levar para tudo o que faço." />
          </p>
          <p className="text-muted-foreground">
            <Editable text="Atualmente, meu trabalho se divide entre a psicoterapia individual, o acompanhamento de pessoas com TDAH e o desenvolvimento de projetos que levam a psicologia para outros espaços. Tenho um interesse especial pela saúde mental de mulheres, pela neurodivergência e pelas possibilidades de construir formas mais sustentáveis de viver, trabalhar e se relacionar." />
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
              <Editable text="Minha prática clínica tem como principal referencial a Terapia Cognitivo-Comportamental (TCC), mas meu olhar não se limita a uma abordagem. Também sou atravessada por estudos sobre Terapia Focada na Compaixão e Terapias Contextuais, especialmente a Terapia de Aceitação e Compromisso (ACT). Acredito que compreender uma pessoa exige olhar para além de sua história individual: classe social, racismo, misoginia, machismo, homofobia e outras formas de desigualdade também atravessam nossas experiências e nosso sofrimento. Afinal, ninguém existe fora de seu contexto social." />
            </p>
            <p>
              <Editable text="Na prática, isso significa que não trabalho com fórmulas prontas. A gente constrói o caminho em conjunto, considerando sua história, suas necessidades, seus recursos e as condições concretas em que sua vida acontece. Busco construir um espaço de acolhimento e investigação, onde seja possível compreender padrões, experimentar novas estratégias, desenvolver ferramentas que façam sentido no cotidiano e te aproximar de uma vida com mais sentido, tudo isso respeitando seu tempo, suas possibilidades e seus limites." />
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
            comunidade e também as questões ambientais. Esse olhar mais amplo atravessa tanto a clínica quanto os projetos coletivos porque dialoga profundamente com a minha visão de mundo.
          </p>
          <p>
            Tenho um interesse especial por temas como neurodivergência, ansiedade climática, saúde mental, mindfulness e as diferentes formas de compreender nossa relação com nós mesmos, com as outras pessoas e com o mundo. 
          </p>
          <p>
            Fora dos estudos sobre psicologia, a literatura é uma das minhas grandes companheiras. Gosto especialmente de Eduardo Galeano, Haruki Murakami e Mariana Salomão Carrara. Também sou uma grande viciada em filmes, principalmente de terror, e séries, e tenho uma relação de longa data com a meditação e a atenção plena. Pema Chödrön é uma dessas referências às quais sempre gosto de voltar. São interesses que, de diferentes maneiras, alimentam minha curiosidade e atravessam tanto minha vida quanto meu trabalho.
          </p>
          {/* <p>
            <Editable text="[Interesses, temas de estudo e referências que inspiram o trabalho — a preencher]" />
          </p> */}
        </div>
      </section>

      <ContactInvite />
    </>
  );
}
