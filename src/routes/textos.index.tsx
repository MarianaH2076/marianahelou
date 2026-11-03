import { createFileRoute, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";

import livroImg from "@/assets/livro-aberto.jpg";
import { ContactInvite, FeedNotice, PostCard, PostLink, PostMeta } from "@/components/site/Blocks";
import { substack } from "@/content/site";
import { loadPosts } from "@/lib/content";

export const Route = createFileRoute("/textos/")({
  loader: () => loadPosts(),
  staleTime: 10 * 60 * 1000,
  head: () => ({
    meta: [
      { title: "Textos | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Textos sobre psicologia, TDAH, cotidiano e saúde mental, escritos por Mariana Helou e publicados no Substack.",
      },
      { property: "og:title", content: "Textos | Mariana Helou" },
      {
        property: "og:description",
        content: "Reflexões sobre psicologia, cotidiano e saúde mental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  errorComponent: TextosError,
  notFoundComponent: () => <TextosShell><FeedNotice unavailable={false} className="my-16" /></TextosShell>,
  component: Textos,
});

function TextosShell({ children }: { children: ReactNode }) {
  return (
    <div className="area-textos">
      <section className="border-b border-border">
        <div className="container-editorial pb-14 pt-16 md:pt-24">
          <p className="eyebrow text-terracotta">Textos</p>
          <h1 className="mt-6 text-6xl md:text-[7rem] md:leading-none">Textos</h1>
          <p className="measure mt-8 text-lg text-muted-foreground md:text-xl">
            Escritos sobre a vida cotidiana, a clínica, o TDAH e a saúde mental — para ler com calma.
          </p>
        </div>
      </section>
      {children}
      <ContactInvite />
    </div>
  );
}

function TextosError() {
  const router = useRouter();
  return (
    <TextosShell>
      <div className="container-editorial py-16">
        <FeedNotice unavailable />
        <button type="button" onClick={() => router.invalidate()} className="mt-6 text-sm link-underline">
          Tentar novamente
        </button>
      </div>
    </TextosShell>
  );
}

function Textos() {
  const { posts, error } = Route.useLoaderData();
  const [lead, ...rest] = posts;
  const others = rest.slice(0, 2);

  if (!lead) {
    return (
      <TextosShell>
        <div className="container-editorial py-16 md:py-24">
          <FeedNotice unavailable={Boolean(error)} />
        </div>
      </TextosShell>
    );
  }

  return (
    <TextosShell>
      {/* Featured: most recent */}
      <section className="container-editorial grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <article className="group relative md:col-span-7">
          <p className="eyebrow text-muted-foreground">Mais recente</p>
          <h2 className="mt-6 text-4xl transition-colors group-hover:text-terracotta md:text-6xl">
            <PostLink post={lead} className="after:absolute after:inset-0" />
          </h2>
          {lead.excerpt && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{lead.excerpt}</p>}
          <PostMeta post={lead} className="mt-8" />
          <img
            src={livroImg}
            alt="Livro aberto sobre tecido verde-oliva"
            width={1440}
            height={1088}
            loading="lazy"
            className="mt-12 aspect-[16/9] w-full rounded-sm object-cover"
          />
        </article>
        {others.length > 0 && (
          <div className="grid content-start gap-10 md:col-span-4 md:col-start-9">
            {others.map((p) => (
              <PostCard key={p.url} post={p} />
            ))}
          </div>
        )}
      </section>

      {/* Archive */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-16 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl">Todos os textos</h2>
            <a
              href={substack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium link-underline"
            >
              Assinar no Substack ↗
            </a>
          </div>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {posts.map((p) => (
              <li key={p.url} className="group relative grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                <PostMeta post={p} className="md:col-span-4" />
                <h3 className="text-2xl transition-colors group-hover:text-terracotta md:col-span-6 md:text-3xl">
                  <PostLink post={p} className="after:absolute after:inset-0" />
                </h3>
                <span className="text-sm md:col-span-2 md:text-right" aria-hidden>
                  Ler ↗
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </TextosShell>
  );
}
