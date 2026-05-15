import {
  Smile,
  Sparkles,
  Stethoscope,
  Wrench,
  Baby,
  Syringe,
  Brain,
  ShieldCheck
} from "lucide-react";

const servicos = [
  {
    icon: Sparkles,
    titulo: "Clareamento Dental",
    descricao:
      "Dentes até 8 tons mais claros com gel profissional e LED de última geração.",
    badge: "Mais procurado"
  },
  {
    icon: Wrench,
    titulo: "Implantes Dentários",
    descricao:
      "Implantes de titânio com prótese definitiva. Procedimento em sessão única.",
    badge: "Garantia 5 anos"
  },
  {
    icon: Smile,
    titulo: "Ortodontia & Alinhadores",
    descricao:
      "Aparelhos fixos, autoligados e alinhadores invisíveis para todas as idades.",
    badge: null
  },
  {
    icon: Stethoscope,
    titulo: "Limpeza & Profilaxia",
    descricao:
      "Remoção de tártaro, polimento e aplicação de flúor em consulta única.",
    badge: null
  },
  {
    icon: Brain,
    titulo: "Harmonização Orofacial",
    descricao:
      "Botox, preenchimento labial e contorno facial com técnicas atualizadas.",
    badge: "Novo"
  },
  {
    icon: Baby,
    titulo: "Odontopediatria",
    descricao:
      "Atendimento lúdico e especializado para o sorriso dos pequenos.",
    badge: null
  },
  {
    icon: Syringe,
    titulo: "Endodontia (Canal)",
    descricao:
      "Tratamento de canal com microscópio operatório — preciso e indolor.",
    badge: null
  },
  {
    icon: ShieldCheck,
    titulo: "Prótese & Reabilitação",
    descricao:
      "Próteses fixas, móveis e sobre implantes com acabamento natural.",
    badge: null
  }
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Tratamentos
          </span>
          <h2 className="section-title mt-2">
            Soluções completas para a sua saúde bucal
          </h2>
          <p className="section-subtitle">
            Da prevenção à reabilitação completa — tudo em um único lugar, com
            tecnologia digital e equipe especializada.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              {s.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-mint-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-mint-700">
                  {s.badge}
                </span>
              )}
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-mint-500 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.descricao}</p>
              <a
                href="#contato"
                className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Saber mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
