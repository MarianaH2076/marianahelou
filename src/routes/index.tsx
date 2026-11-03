import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-vaso.jpg";
import livroImg from "@/assets/livro-aberto.jpg";
import { ContactInvite, PostCard, PortraitPlaceholder } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { areas } from "@/content/services";
import { getFeaturedPosts } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariana Helou | Psicóloga — psicoterapia, TDAH e projetos" },
      {
        name: "description",
        content:
          "Psicóloga clínica. Psicoterapia individual para adultos, acompanhamento para pessoas com TDAH e projetos, grupos e atividades em saúde mental.",
      },
      { property: "og:title", content: "Mariana Helou | Psicologia" },
      {
        property: "og:description",
        content:
          "Um espaço para compreender, elaborar e construir novas possibilidades — na clínica, no acompanhamento de pessoas com TDAH e em experiências coletivas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = getFeaturedPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="container-editorial grid gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-20">
        <div className="flex flex-col justify-between md:col-span-7">
          <div className="animate-rise">
            <p className="eyebrow flex items-center gap-3 text-terracotta">
              <span className="h-px w-10 bg-terracotta" aria-hidden />
              Mariana Helou · Psicóloga clínica
            </p>
            <h1 className="mt-8 text-5xl leading-[1.04] md:text-[5.25rem]">
              Um espaço para compreender, elaborar e construir{" "}
              <em className="text-olive">novas possibilidades.</em>
            </h1>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="measure text-lg text-muted-foreground">
              Sou psicóloga e meu trabalho acontece em diferentes frentes: a psicoterapia
              individual, o acompanhamento para pessoas com TDAH e atividades educativas e
              coletivas — modos distintos de cuidar, pensar e aprender junto.
            </p>
            <Button asChild variant="editorial" size="pill">
              <Link to="/contato">
                Entrar em contato <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <figure className="md:col-span-5">
          <img
            src={heroImg}
            alt="Vaso de terracota com um ramo de oliveira sob luz de fim de tarde"
            width={1152}
            height={1440}
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Psicologia clínica, acompanhamento e projetos coletivos
          </figcaption>
        </figure>
      </section>

      {/* Three areas */}
      <section className="border-y border-border bg-card">
        <div className="container-editorial py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl md:text-5xl">Três frentes de trabalho, cada uma com seu próprio lugar.</h2>
            <p className="eyebrow text-muted-foreground">Áreas de atuação</p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {areas.map((a) => (
              <li key={a.id} className={`area-${a.id} group relative flex flex-col bg-card p-8 transition-colors hover:bg-area-soft md:p-10`}>
                <span className="absolute inset-x-0 top-0 h-1 bg-area" aria-hidden />
                <span className="font-display text-6xl text-area-ink/80">{a.number}</span>
                <h3 className="mt-10 text-3xl">{a.title}</h3>
                <p className="mt-5 text-muted-foreground">{a.summary}</p>
                <Link
                  to={a.to}
                  className="mt-auto flex items-center gap-2 pt-10 text-sm font-semibold text-area-ink after:absolute after:inset-0"
                >
                  {a.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-editorial grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <PortraitPlaceholder />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="eyebrow text-terracotta">Apresentação</p>
          <h2 className="mt-5 text-4xl md:text-5xl">
            A psicologia como prática de escuta — no consultório e fora dele.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              Acredito que a psicologia pode acontecer em muitos lugares: no encontro a dois da
              clínica, no trabalho prático junto a pessoas com TDAH e nas conversas coletivas que
              abrem espaço para pensar a saúde mental em comunidade.
            </p>
            <p>
              Cada uma dessas frentes tem sua forma, seu ritmo e seus objetivos. Em todas, procuro
              sustentar a mesma postura: atenção, cuidado e respeito à singularidade de cada pessoa.
            </p>
          </div>
          <Button asChild variant="editorialOutline" size="pill" className="mt-10">
            <Link to="/sobre">Conhecer minha trajetória</Link>
          </Button>
        </div>
      </section>

      {/* Featured texts */}
      <section className="area-textos bg-sand/60">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-terracotta-deep">Textos</p>
              <h2 className="mt-5 text-4xl md:text-6xl">Escrever também é uma forma de pensar junto.</h2>
            </div>
            <div className="md:col-span-5">
              <img
                src={livroImg}
                alt="Livro aberto sobre tecido verde-oliva com um ramo de capim seco"
                width={1440}
                height={1088}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-14">
            <Button asChild variant="editorial" size="pill">
              <Link to="/textos">
                Ver todos os textos <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactInvite />
    </>
  );
}
