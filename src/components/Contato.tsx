"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Demo: simula envio. Em produção, integrar com EmailJS, Resend ou API própria.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contato" className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-mint-300">
            Vamos conversar
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Agende sua avaliação gratuita
          </h2>
          <p className="mt-3 text-slate-300">
            Preencha o formulário e entraremos em contato em até 2 horas úteis.
            Ou ligue agora — atendemos de segunda a sábado.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint-300">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Endereço</p>
                <p className="text-sm text-slate-300">
                  Av. Paulista, 1000 — Sala 1205 · São Paulo/SP
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint-300">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Telefone</p>
                <p className="text-sm text-slate-300">(11) 99999-0000 · WhatsApp</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint-300">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">E-mail</p>
                <p className="text-sm text-slate-300">contato@sorrisoperfeito.com.br</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-mint-300">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Horário</p>
                <p className="text-sm text-slate-300">
                  Seg a Sex · 8h às 19h · Sábados · 8h às 13h
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 text-slate-800 shadow-soft"
        >
          {sent ? (
            <div className="grid place-items-center gap-3 py-16 text-center">
              <CheckCircle2 className="h-14 w-14 text-mint-500" />
              <h3 className="text-xl font-semibold text-slate-900">
                Recebemos sua mensagem!
              </h3>
              <p className="max-w-xs text-sm text-slate-600">
                Em breve um de nossos especialistas entrará em contato para
                confirmar sua avaliação.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-slate-900">
                Solicite seu horário
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Atendimento confirmado em até 24h.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Nome completo
                  </label>
                  <input
                    required
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-700">
                      WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      name="telefone"
                      placeholder="(11) 99999-0000"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@exemplo.com"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Interesse
                  </label>
                  <select
                    name="interesse"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  >
                    <option>Avaliação geral</option>
                    <option>Clareamento</option>
                    <option>Implantes</option>
                    <option>Ortodontia / Alinhadores</option>
                    <option>Harmonização orofacial</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="mensagem"
                    rows={3}
                    placeholder="Conte-nos brevemente o que procura..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary mt-2 w-full disabled:opacity-60"
                >
                  {loading ? "Enviando..." : (
                    <>
                      Quero ser contactado <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500">
                  Seus dados estão protegidos conforme a LGPD.
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
