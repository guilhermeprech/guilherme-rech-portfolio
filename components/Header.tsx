"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0F1115]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0F1115]/70">
      <div className="pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div
            className={[
              "flex items-center justify-between",
              "rounded-2xl border border-[#1C1F26]",
              "px-4 py-3 sm:px-5",
              "transition-colors duration-300",
              scrolled ? "bg-[#0F1115]/70" : "bg-[#0F1115]/30",
            ].join(" ")}
          >
            <a
              href="#topo"
              className="text-sm font-semibold tracking-tight text-[#F5F7FA]"
            >
              Guilherme Rech
            </a>

            <nav className="hidden items-center gap-1 sm:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-[#9AA3AE] transition hover:bg-white/5 hover:text-[#F5F7FA]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contato"
              className="rounded-xl bg-[#3A6FF8] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110 active:brightness-95"
            >
              Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}