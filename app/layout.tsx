import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guilhermerech.com.br"),

  title: {
    default: "Guilherme Rech — Sites, Sistemas e Aplicativos",
    template: "%s | Guilherme Rech",
  },

  description:
    "Desenvolvimento de soluções digitais sob medida: sites profissionais, sistemas web e aplicativos. Projetos com foco em resultado e atendimento direto.",

  openGraph: {
    title: "Guilherme Rech — Soluções Digitais Sob Medida",
    description:
      "Sites, sistemas e aplicativos desenvolvidos com foco em performance, elegância e resultado.",
    url: "https://www.guilhermerech.com.br",
    siteName: "Guilherme Rech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Rech — Soluções Digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Guilherme Rech — Soluções Digitais",
    description:
      "Sites, sistemas e aplicativos sob medida para empresas e profissionais.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F1115] text-[#F5F7FA]`}
      >
        {children}
      </body>
    </html>
  );
}