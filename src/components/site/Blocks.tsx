import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { substack } from "@/content/site";
import { formatDate, type Post } from "@/lib/content";
import { cn } from "@/lib/utils";

/* Page opening with editorial number, eyebrow and title. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  area,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  area?: string;
  aside?: ReactNode;
}) {
  return (
    <section className={cn(area && "area-" + area, "border-b border-border")}>
      <div className="container-editorial grid gap-10 pb-16 pt-16 md:grid-cols-12 md:pb-24 md:pt-24">
        <div className="animate-rise md:col-span-8">
          <p className="eyebrow flex items-center gap-3 text-area-ink">
            <span className="h-px w-10 bg-area" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl">{title}</h1>
          {lead && <p className="measure mt-8 text-lg text-muted-foreground md:text-xl">{lead}</p>}
        </div>
        {aside && <div className="md:col-span-4 md:self-end">{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow text-area-ink">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}

/* Final contact invitation used across pages. */
export function ContactInvite({
  title = "Vamos conversar?",
  text = "Se algo aqui fez sentido para você, escreva. Respondo com calma e atenção.",
  area,
}: {
  title?: string;
  text?: string;
  area?: string;
}) {
  return (
    <section className={cn(area && "area-" + area, "container-editorial py-24 md:py-32")}>
      <div className="grain overflow-hidden rounded-sm bg-olive px-8 py-16 text-paper md:px-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-mustard">Contato</p>
            <h2 className="mt-5 text-4xl md:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-paper/80">{text}</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button asChild variant="onDark" size="pill">
              <Link to="/contato">
                Entrar em contato <ArrowUpRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PostMeta({ post, className }: { post: Post; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", className)}>
      <span className="eyebrow text-terracotta-deep">Substack</span>
      <span aria-hidden>·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
    </p>
  );
}

/** Link to the article on Substack (opens in a new tab). */
export function PostLink({ post, className }: { post: Post; className?: string }) {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className={className}>
      {post.title}
      <span className="sr-only"> (abre no Substack, em nova aba)</span>
    </a>
  );
}

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col border-t border-foreground/80 pt-6">
      <PostMeta post={post} />
      <h3 className={cn("mt-4 transition-colors group-hover:text-terracotta", large ? "text-3xl md:text-4xl" : "text-2xl")}>
        <PostLink post={post} className="after:absolute after:inset-0" />
      </h3>
      {post.excerpt && <p className="mt-4 text-muted-foreground">{post.excerpt}</p>}
      <span className="mt-auto pt-6 text-sm font-medium text-foreground" aria-hidden>
        <span className="link-underline">Ler no Substack</span> ↗
      </span>
    </article>
  );
}

/** Friendly fallback when the Substack feed is unavailable or still empty. */
export function FeedNotice({ unavailable, className }: { unavailable: boolean; className?: string }) {
  return (
    <div className={cn("rounded-sm border border-dashed border-foreground/30 p-8 md:p-10", className)} role="status">
      <p className="font-display text-2xl">
        {unavailable ? "Não foi possível carregar os textos agora." : "Os primeiros textos estão a caminho."}
      </p>
      <p className="mt-3 max-w-xl text-muted-foreground">
        {unavailable
          ? "Enquanto isso, você pode ler todas as publicações diretamente no Substack."
          : "As publicações aparecem aqui automaticamente assim que forem lançadas no Substack."}
      </p>
      <a
        href={substack.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-medium link-underline"
      >
        Ir para o Substack ↗
      </a>
    </div>
  );
}

/* Clearly marked placeholder frame for photography still to be provided. */
export function PortraitPlaceholder({ label = "Espaço para retrato profissional" }: { label?: string }) {
  return (
    <div className="grain relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-sm bg-sand">
      <div className="absolute inset-6 rounded-sm border border-dashed border-charcoal/30" aria-hidden />
      <div className="absolute left-1/2 top-[38%] size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/25" aria-hidden />
      <p className="eyebrow relative z-10 p-10 text-charcoal/70">{label}</p>
    </div>
  );
}
