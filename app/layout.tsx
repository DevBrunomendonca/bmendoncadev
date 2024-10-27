import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfólio - Bruno Mendonça",
  description: "...",
}

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
