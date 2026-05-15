import { Instagram, Linkedin } from "lucide-react";

const equipe = [
  {
    nome: "Dra. Carolina Mendes",
    especialidade: "Implantodontia & Reabilitação Oral",
    cro: "CRO-SP 81.234",
    foto: "https://i.pravatar.cc/300?img=47"
  },
  {
    nome: "Dr. Rafael Souza",
    especialidade: "Ortodontia & Alinhadores Invisíveis",
    cro: "CRO-SP 74.512",
    foto: "https://i.pravatar.cc/300?img=12"
  },
  {
    nome: "Dra. Beatriz Lima",
    especialidade: "Estética Dental & Harmonização",
    cro: "CRO-SP 92.078",
    foto: "https://i.pravatar.cc/300?img=45"
  }
];

export default function Equipe() {
  return (
    <section id="equipe" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nossa equipe
          </span>
          <h2 className="section-title mt-2">
            Especialistas que cuidam de você
          </h2>
          <p className="section-subtitle">
            Profissionais reconhecidos, com atualização constante em
            congressos nacionais e internacionais.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m) => (
            <div
              key={m.nome}
              className="overflow-hidden rounded-3xl bg-white shadow-card transition-all hover:shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.foto}
                  alt={m.nome}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {m.nome}
                </h3>
                <p className="mt-1 text-sm text-brand-700">{m.especialidade}</p>
                <p className="mt-1 text-xs text-slate-500">{m.cro}</p>
                <div className="mt-4 flex items-center gap-3 text-slate-400">
                  <a href="#" aria-label="Instagram" className="hover:text-brand-700">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-brand-700">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
