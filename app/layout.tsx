import type { Metadata } from "next"
import "./globals.css"
import Header from "./_components/header"

import { Poppins } from "next/font/google"
import Footer from "./_components/footer"

export const metadata: Metadata = {
  title: "Portfólio - Bruno Mendonça",
  description:
    "Desenvolvendo experiências digitais e soluções modernas, com foco na criação de aplicações web de alto desempenho, utilizando as mais recentes tecnologias do mercado.",
  icons: {
    icon: "/favicon-pottfolio.ico",
  },
  openGraph: {
    title: "Portfólio - Bruno Mendonça",
    description:
      "Desenvolvendo experiências digitais e soluções modernas, com foco na criação de aplicações web de alto desempenho, utilizando as mais recentes tecnologias do mercado.",
    url: "",
    type: "website",
    images: [
      {
        url: "/banner-main.webp",
        width: 1200,
        height: 630,
        alt: "Banner Portfólio",
      },
    ],
  },
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
