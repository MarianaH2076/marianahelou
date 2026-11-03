import { Link } from "@tanstack/react-router";

import { Editable } from "@/components/site/Editable";
import { areas } from "@/content/services";
import { mainNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="grain bg-charcoal text-paper">
      <div className="container-editorial grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl leading-tight">{site.name}</p>
          <p className="eyebrow mt-3 text-mustard">{site.tagline}</p>
          <p className="mt-6 max-w-sm text-sm text-paper/70">
            Psicoterapia individual, acompanhamento para pessoas com TDAH e projetos coletivos em
            psicologia e saúde mental.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/50">Áreas de atuação</p>
          <ul className="mt-5 space-y-3 text-sm">
            {areas.map((a) => (
              <li key={a.id}>
                <Link to={a.to} className="link-underline">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-paper/50">Navegar</p>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-paper/50">Contato</p>
          <ul className="mt-5 space-y-3 text-sm">
            {site.contact.map((c) => (
              <li key={c.id}>
                {c.href ? (
                  <a href={c.href} className="link-underline">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-paper/70">{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-paper/50 md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name} · <Editable text={site.crp} />
          </span>
          <span>
            <Editable text={site.location} />
          </span>
        </div>
      </div>
    </footer>
  );
}
