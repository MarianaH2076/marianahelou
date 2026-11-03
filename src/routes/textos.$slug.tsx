import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ContactInvite, PostCard, PostMeta } from "@/components/site/Blocks";
import { Editable } from "@/components/site/Editable";
import { getPostBySlug, getPosts } from "@/lib/content";

export const Route = createFileRoute("/textos/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Texto não encontrado | Mariana Helou" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Mariana Helou` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <h1 className="text-5xl">Texto não encontrado</h1>
      <Link to="/textos" className="mt-8 inline-block link-underline">
        Voltar para os textos
      </Link>
    </div>
  ),
  component: Artigo,
});

function Artigo() {
  const { post } = Route.useLoaderData();
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article className="container-editorial pb-20 pt-14 md:pt-24">
        <Link to="/textos" className="eyebrow text-muted-foreground hover:text-terracotta">
          ← Textos
        </Link>
        <header className="mx-auto mt-12 max-w-3xl text-center">
          <PostMeta post={post} className="justify-center" />
          <h1 className="mt-8 text-4xl md:text-6xl">{post.title}</h1>
          <p className="mt-8 font-display text-xl italic text-muted-foreground md:text-2xl">
            <Editable text={post.excerpt} />
          </p>
        </header>
        <div className="mx-auto mt-14 h-px max-w-xs bg-terracotta" aria-hidden />
        <div className="prose-editorial mx-auto mt-14 max-w-[40rem]">
          {post.body.map((para, i) => (
            <p key={i}>
              <Editable text={para} />
            </p>
          ))}
        </div>
        <footer className="mx-auto mt-16 max-w-[40rem] border-t border-border pt-8 text-sm text-muted-foreground">
          Escrito por <span className="text-foreground">Mariana Helou</span>, psicóloga.
        </footer>
      </article>

      <section className="border-t border-border bg-card">
        <div className="container-editorial py-20">
          <h2 className="text-3xl">Continue lendo</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <ContactInvite />
    </>
  );
}
