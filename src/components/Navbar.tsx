"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all ${
        scrolled ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-brand-700">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg tracking-tight">Sorriso Perfeito</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary !py-2.5 !px-5 text-xs">
            Agendar avaliação
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="container-px flex flex-col gap-2 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
