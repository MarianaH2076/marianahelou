import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { areas, tdah } from "@/content/services";
import { mainNav } from "@/content/site";
import { routeTree } from "@/routeTree.gen";

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

describe("ADHD accompaniment is distinct from psychotherapy", () => {
  it("never describes the ADHD service as psychotherapy outside its explicit distinction note", () => {
    const { distinction, ...rest } = tdah;
    const mentions = collectStrings(rest).filter((s) => /psicoterap/i.test(s));
    expect(mentions).toEqual([]);
    expect(distinction).toMatch(/não é psicoterapia/i);
  });

  it("has its own page, separate from the psychotherapy page", () => {
    const tdahArea = areas.find((a) => a.id === "tdah");
    const psiArea = areas.find((a) => a.id === "psicoterapia");
    expect(tdahArea?.to).toBe("/atendimentos/acompanhamento-tdah");
    expect(psiArea?.to).toBe("/atendimentos/psicoterapia-individual");
  });
});

describe("Navigation", () => {
  it("lists the six main sections in order", () => {
    expect(mainNav.map((n) => n.label)).toEqual([
      "Início",
      "Sobre mim",
      "Atendimentos",
      "Projetos",
      "Textos",
      "Contato",
    ]);
  });

  it("groups both services under the Atendimentos dropdown", () => {
    const atendimentos = mainNav.find((n) => n.label === "Atendimentos");
    expect(atendimentos?.children?.map((c) => c.to)).toEqual([
      "/atendimentos/psicoterapia-individual",
      "/atendimentos/acompanhamento-tdah",
    ]);
  });

  it("every nav link resolves to a real page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const paths = mainNav.flatMap((n) => [n.to, ...(n.children?.map((c) => c.to) ?? [])]);
    for (const path of paths) {
      const matches = router.matchRoutes(path);
      const leaf = matches.at(-1);
      expect(leaf?.routeId, path).not.toBe(rootRouteId);
    }
  });
});
