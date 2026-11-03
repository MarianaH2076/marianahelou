<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All editable site copy lives in typed modules under `src/content/`; pages read posts through `src/lib/content.ts`. Why: keeps content separate from layout so a CMS (e.g. WordPress REST) can replace the static modules without touching pages.
- Posts ("Textos") come from the Substack RSS feed, fetched server-side (`src/lib/substack.functions.ts` → `substack.server.ts`, parsed by dependency-free `substack.ts`) and returned as `{ posts, error }`; `/textos/$slug` only redirects to Substack. Why: Substack sends no CORS headers, the parser must run on both Node (Netlify) and Workers, and a feed outage must degrade to a notice, not a broken page.
- Placeholder copy is written in `[colchetes]` and rendered through `<Editable>`, which highlights it. Why: makes unfilled content obvious instead of inventing facts.
- Each professional area gets its colour identity from an `.area-*` class that sets `--area*` variables (used as `bg-area`, `text-area-ink`, `bg-area-soft`). Why: one consistent mechanism for per-area theming.
- Shared site chrome (header, footer, skip link) lives in `src/routes/__root.tsx`; site components live in `src/components/site/`.
