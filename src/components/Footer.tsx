import { Sparkles, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container-px grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-2 font-bold text-brand-700">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Sorriso Perfeito</span>
          </a>
          <p className="mt-4 max-w-md text-sm text-slate-600">
            Clínica odontológica especializada em tratamentos estéticos,
            funcionais e reabilitação completa. Tecnologia, conforto e
            atendimento humanizado em São Paulo desde 2012.
          </p>
          <div className="mt-5 flex items-center gap-3 text-slate-400">
            <a href="#" aria-label="Instagram" className="rounded-full bg-slate-100 p-2 transition hover:bg-brand-100 hover:text-brand-700">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-slate-100 p-2 transition hover:bg-brand-100 hover:text-brand-700">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-slate-100 p-2 transition hover:bg-brand-100 hover:text-brand-700">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><a href="#servicos" className="hover:text-brand-700">Serviços</a></li>
            <li><a href="#equipe" className="hover:text-brand-700">Equipe</a></li>
            <li><a href="#depoimentos" className="hover:text-brand-700">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-brand-700">Dúvidas</a></li>
            <li><a href="#contato" className="hover:text-brand-700">Contato</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Av. Paulista, 1000 · Sl. 1205</li>
            <li>São Paulo · SP · 01310-100</li>
            <li>(11) 99999-0000</li>
            <li>contato@sorrisoperfeito.com.br</li>
          </ul>
        </div>
      </div>

      <div className="container-px mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Sorriso Perfeito. Todos os direitos reservados.</p>
        <p>CNPJ 00.000.000/0001-00 · Responsável Técnica: Dra. Carolina Mendes — CRO-SP 81.234</p>
      </div>
    </footer>
  );
}
