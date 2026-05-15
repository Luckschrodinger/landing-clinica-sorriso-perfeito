import { Quote, Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Mariana A.",
    tratamento: "Clareamento + Lentes",
    texto:
      "Mudou minha vida! Atendimento impecável da recepção à finalização. Recomendo de olhos fechados.",
    foto: "https://i.pravatar.cc/100?img=32"
  },
  {
    nome: "Lucas R.",
    tratamento: "Implante unitário",
    texto:
      "Procedimento rápido e sem dor. A Dra. Carolina explicou cada etapa com calma. Resultado perfeito.",
    foto: "https://i.pravatar.cc/100?img=14"
  },
  {
    nome: "Patrícia S.",
    tratamento: "Alinhadores invisíveis",
    texto:
      "Em 8 meses meus dentes ficaram alinhados sem ninguém perceber. Vale cada centavo.",
    foto: "https://i.pravatar.cc/100?img=49"
  }
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-brand-50/50 to-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Depoimentos
          </span>
          <h2 className="section-title mt-2">
            Quem viveu a experiência, recomenda
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="relative rounded-3xl bg-white p-7 shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.foto}
                  alt={d.nome}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{d.nome}</p>
                  <p className="text-xs text-slate-500">{d.tratamento}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
