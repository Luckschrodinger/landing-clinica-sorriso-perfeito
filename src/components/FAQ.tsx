"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Vocês atendem convênios?",
    a: "Sim! Atendemos os principais convênios odontológicos. Entre em contato para confirmar o seu."
  },
  {
    q: "Como funciona o parcelamento?",
    a: "Parcelamos em até 18x sem juros no cartão de crédito. Para pagamentos à vista no Pix oferecemos 8% de desconto."
  },
  {
    q: "A primeira avaliação é cobrada?",
    a: "Não. A consulta inicial de avaliação é gratuita e inclui o plano de tratamento personalizado."
  },
  {
    q: "Quanto tempo demora um tratamento de implante?",
    a: "Após a cirurgia inicial (1h em média), aguardamos 3 a 6 meses para a osseointegração antes da prótese definitiva."
  },
  {
    q: "Vocês fazem atendimento de urgência?",
    a: "Sim, temos horários reservados para urgências odontológicas. Ligue ou chame no WhatsApp para encaixe no mesmo dia."
  },
  {
    q: "É seguro fazer clareamento dental?",
    a: "Totalmente. Usamos géis de uso profissional aprovados pela ANVISA, aplicados sob supervisão da equipe."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-px max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Dúvidas frequentes
          </span>
          <h2 className="section-title mt-2">Antes de marcar, vale a leitura</h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-slate-900">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600 animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
