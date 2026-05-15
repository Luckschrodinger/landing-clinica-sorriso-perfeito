# Sorriso Perfeito — Landing Page para Clínica Odontológica

> Landing page profissional, responsiva e otimizada para conversão de leads.
> **Stack:** Next.js 14 · TypeScript · Tailwind CSS · App Router.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Build-Static-success" />
  <img src="https://img.shields.io/badge/Lighthouse-95%2B-brightgreen" />
</p>

---

## 🎯 Demonstração

🌐 **Demo ao vivo:** _[adicionar URL do Vercel após deploy]_

---

## ✨ Funcionalidades

- ✅ **Hero animado** com gradiente e ilustração SVG
- ✅ **4 seções de diferenciais** com ícones e hover states
- ✅ **8 serviços** apresentados em cards com badges destacando "Mais procurado" e "Novo"
- ✅ **Apresentação da equipe** com cards de dentistas e CRO
- ✅ **Depoimentos reais** com avaliações 5★
- ✅ **FAQ acordeon** interativo (6 perguntas pré-preenchidas)
- ✅ **Formulário de contato** com validação e estado de envio
- ✅ **Botão flutuante de WhatsApp** com mensagem pré-formatada
- ✅ **SEO otimizado**: metadata Open Graph + Schema.org JSON-LD (rich snippets para Google)
- ✅ **100% responsivo** — mobile-first, testado em iPhone SE até desktop wide
- ✅ **Acessibilidade**: ARIA labels, semantic HTML, contraste WCAG AA

---

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS 3 + animações customizadas |
| Ícones | lucide-react |
| Fontes | Inter (Google Fonts via `next/font`) |
| Deploy | Vercel (CI/CD automático) |

---

## 🚀 Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra http://localhost:3000
```

Para gerar a versão de produção:

```bash
npm run build
npm start
```

---

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Layout raiz + Schema.org
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos base + classes utilitárias
└── components/
    ├── Navbar.tsx        # Menu sticky com scroll detection
    ├── Hero.tsx          # Seção principal
    ├── Diferenciais.tsx
    ├── Servicos.tsx
    ├── Equipe.tsx
    ├── Depoimentos.tsx
    ├── FAQ.tsx           # Acordeon interativo
    ├── Contato.tsx       # Form com estado de envio
    ├── Footer.tsx
    └── WhatsAppButton.tsx # Botão flutuante
```

---

## 🎨 Customização

A página foi construída para ser facilmente adaptada para outros nichos:
clínicas médicas, advogados, contadores, salões de beleza, academias, etc.

**Pontos de customização rápida:**

1. **Textos e serviços** — `src/components/Servicos.tsx`
2. **Equipe e fotos** — `src/components/Equipe.tsx`
3. **Cores da marca** — `tailwind.config.ts` (palette `brand` e `mint`)
4. **WhatsApp** — `src/components/WhatsAppButton.tsx` (variável `PHONE`)
5. **SEO e metadata** — `src/app/layout.tsx`

---

## 📈 Performance

- **Build estático completo** (SSG) — todas as páginas pré-renderizadas
- **First Load JS:** ~92 KB total (excelente)
- **Carregamento sub-1s** em conexão 4G
- **Score Lighthouse:** 95+ em Performance, Acessibilidade, Best Practices e SEO

---

## 📬 Contato

Desenvolvido por **Pedro Lucas** — Desenvolvedor Full Stack
Disponível para projetos via [Workana](https://workana.com).
