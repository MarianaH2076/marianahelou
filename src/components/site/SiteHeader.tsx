import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname.startsWith(to);
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container-editorial flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex flex-col leading-none" aria-label="Início">
          <span className="font-display text-[1.6rem] tracking-tight">{site.name}</span>
          <span className="eyebrow mt-1 text-[0.62rem] text-terracotta">{site.role}</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.to}>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:text-terracotta data-[state=open]:text-terracotta",
                        isActive(pathname, item.to) && "text-terracotta",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="size-3.5" aria-hidden />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      sideOffset={12}
                      className="w-80 rounded-md border-border bg-popover p-2"
                    >
                      <DropdownMenuItem asChild className="rounded-sm px-3 py-2">
                        <Link to="/atendimentos" className="eyebrow text-muted-foreground">
                          Visão geral
                        </Link>
                      </DropdownMenuItem>
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.to}
                          asChild
                          className={cn("area-" + child.area, "rounded-sm px-3 py-3 focus:bg-area-soft")}
                        >
                          <Link to={child.to} className="flex items-start gap-3">
                            <span className="mt-2 size-2 shrink-0 rounded-full bg-area" aria-hidden />
                            <span className="flex flex-col">
                              <span className="font-display text-base leading-snug">{child.label}</span>
                              <span className="text-xs text-muted-foreground">{child.description}</span>
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:text-terracotta",
                      isActive(pathname, item.to) && "text-terracotta",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 text-sm lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-4" aria-hidden />
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background p-8">
            <SheetTitle className="font-display text-2xl font-normal">{site.name}</SheetTitle>
            <nav aria-label="Navegação móvel" className="mt-10">
              <ul className="flex flex-col gap-5">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl hover:text-terracotta"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mt-3 flex flex-col gap-3 border-l border-border pl-4">
                        {item.children.map((child) => (
                          <li key={child.to} className={"area-" + child.area}>
                            <Link
                              to={child.to}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 text-base"
                            >
                              <span className="size-2 rounded-full bg-area" aria-hidden />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
