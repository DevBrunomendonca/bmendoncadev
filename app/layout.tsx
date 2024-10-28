import type { Metadata } from "next"
import "./globals.css"
import Header from "./_components/header"

import { Poppins } from "next/font/google"

export const metadata: Metadata = {
  title: "Portfólio - Bruno Mendonça",
  description: "...",
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
        {children}
      </body>
    </html>
  )
}
