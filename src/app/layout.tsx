import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sorriso Perfeito | Clínica Odontológica de Excelência",
  description:
    "Tratamentos odontológicos modernos com tecnologia de ponta. Implantes, ortodontia, clareamento, harmonização orofacial e mais. Agende sua avaliação.",
  keywords: [
    "clínica odontológica",
    "dentista",
    "implante dentário",
    "ortodontia",
    "clareamento dental",
    "harmonização orofacial"
  ],
  openGraph: {
    title: "Sorriso Perfeito | Clínica Odontológica",
    description:
      "Cuidamos do seu sorriso com tecnologia, conforto e atendimento humanizado.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Sorriso Perfeito",
              description: "Clínica odontológica especializada em tratamentos estéticos e funcionais",
              telephone: "+55-11-99999-0000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Paulista, 1000 — Sala 1205",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01310-100",
                addressCountry: "BR"
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-19:00, Sa 08:00-13:00"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
