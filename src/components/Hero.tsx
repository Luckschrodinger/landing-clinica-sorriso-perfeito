import { ArrowRight, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 sm:pt-32">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-mint-200/50 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl animate-blob" />

      <div className="container-px relative grid items-center gap-14 pb-20 sm:pb-28 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-700 shadow-card">
            <ShieldCheck className="h-4 w-4 text-mint-500" />
            +12 anos cuidando do seu sorriso
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sorrisos que transformam{" "}
            <span className="bg-gradient-to-r from-brand-600 to-mint-500 bg-clip-text text-transparent">
              autoestima em rotina
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Da consulta de rotina ao implante completo: tratamentos modernos
            com tecnologia digital, atendimento humanizado e parcelamento
            facilitado em até 18x.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-primary">
              Agendar avaliação gratuita <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-secondary">
              Ver tratamentos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 stroke-amber-400"
                />
              ))}
              <span className="ml-1 font-semibold text-slate-900">4.9</span>
              <span>· +800 avaliações</span>
            </div>
            <div className="hidden h-4 w-px bg-slate-200 sm:block" />
            <span className="hidden sm:inline">Convênios aceitos</span>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-mint-100 shadow-soft">
            <svg
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              role="img"
              aria-label="Ilustração de paciente sorrindo"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#3b8bf2" />
                  <stop offset="1" stopColor="#06c4a8" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#g1)" opacity="0.12" />
              <circle cx="200" cy="180" r="90" fill="#fbbf77" />
              <ellipse cx="200" cy="380" rx="170" ry="120" fill="#fbbf77" />
              <rect x="60" y="280" width="280" height="180" rx="40" fill="#ffffff" opacity="0.55" />
              <path
                d="M160 200 Q200 240 240 200"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="170" cy="170" r="5" fill="#1f3f87" />
              <circle cx="230" cy="170" r="5" fill="#1f3f87" />
            </svg>
          </div>

          <div className="absolute -left-6 bottom-10 hidden w-60 rounded-2xl bg-white p-4 shadow-soft md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-mint-100 text-mint-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Garantia</p>
                <p className="text-sm font-semibold text-slate-900">
                  5 anos em implantes
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-12 hidden w-56 rounded-2xl bg-white p-4 shadow-soft md:block">
            <p className="text-xs text-slate-500">Tempo médio</p>
            <p className="text-sm font-semibold text-slate-900">
              Agendamento em 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
