import { Award, Clock, CreditCard, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Equipe especialista",
    desc: "Profissionais com pós-graduação em CRO ativo e atualização contínua."
  },
  {
    icon: Clock,
    title: "Agendamento em 24h",
    desc: "Atendimento ágil com confirmação por WhatsApp e horários flexíveis."
  },
  {
    icon: CreditCard,
    title: "Parcelamento facilitado",
    desc: "Até 18x sem juros no cartão e condições especiais no Pix."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    desc: "Ambiente acolhedor, técnicas indolores e foco no seu conforto."
  }
];

export default function Diferenciais() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              {it.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
