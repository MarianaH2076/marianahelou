import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

import { ContactInvite, PostCard, PostMeta } from "@/components/site/Blocks";
import { getCategories, getFeaturedPosts, getPosts } from "@/lib/content";
import { cn } from "@/lib/utils";

const searchSchema = z.object({ categoria: z.string().optional() });

export const Route = createFileRoute("/textos/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Textos | Mariana Helou — Psicologia" },
      {
        name: "description",
        content:
          "Textos sobre psicologia, TDAH, cotidiano, limites e saúde mental, escritos por Mariana Helou.",
      },
      { property: "og:title", content: "Textos | Mariana Helou" },
      {
        property: "og:description",
        content: "Reflexões sobre psicologia, cotidiano e saúde mental.",
      },
    ],
  }),
  component: Textos,
});

function Textos() {
  const { categoria } = Route.useSearch();
  const categories = getCategories();
  const [lead, ...others] = getFeaturedPosts(3);
  const all = getPosts().filter((p) => !categoria || p.category === categoria);

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

      {/* Featured */}
      {lead && (
        <section className="container-editorial grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <article className="group relative md:col-span-7">
            <p className="eyebrow text-muted-foreground">Em destaque</p>
            <h2 className="mt-6 text-4xl transition-colors group-hover:text-terracotta md:text-6xl">
              <Link to="/textos/$slug" params={{ slug: lead.slug }} className="after:absolute after:inset-0">
                {lead.title}
              </Link>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{lead.excerpt}</p>
            <PostMeta post={lead} className="mt-8" />
          </article>
          <div className="grid gap-10 md:col-span-4 md:col-start-9">
            {others.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* Archive */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-16 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl">Todos os textos</h2>
            <nav aria-label="Categorias" className="flex flex-wrap gap-2">
              <CategoryChip label="Todas" active={!categoria} />
              {categories.map((c) => (
                <CategoryChip key={c} label={c} value={c} active={categoria === c} />
              ))}
            </nav>
          </div>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {all.map((p) => (
              <li key={p.slug} className="group relative grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                <PostMeta post={p} className="md:col-span-4" />
                <h3 className="text-2xl transition-colors group-hover:text-terracotta md:col-span-6 md:text-3xl">
                  <Link to="/textos/$slug" params={{ slug: p.slug }} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <span className="text-sm md:col-span-2 md:text-right" aria-hidden>
                  Ler →
                </span>
              </li>
            ))}
            {all.length === 0 && <li className="py-8 text-muted-foreground">Nenhum texto nesta categoria ainda.</li>}
          </ul>
        </div>
      </section>

      <ContactInvite />
    </div>
  );
}

function CategoryChip({ label, value, active }: { label: string; value?: string; active: boolean }) {
  return (
    <Link
      to="/textos"
      search={value ? { categoria: value } : {}}
      resetScroll={false}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border hover:border-foreground",
      )}
    >
      {label}
    </Link>
  );
}
