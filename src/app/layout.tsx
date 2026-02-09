import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E31B23',
}

export const metadata: Metadata = {
  title: 'look.me | O provador oficial do seu e-commerce',
  description: 'Deixe seu cliente experimentar antes de comprar. Aumente conversão em até 40%, reduza devoluções em 30%. Provador virtual com IA para e-commerces de moda.',
  keywords: 'provador virtual, try-on, e-commerce, moda, IA, inteligência artificial, conversão, devolução, virtual fitting room, prova virtual',
  authors: [{ name: 'look.me' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'look.me | Provador Virtual para E-commerce',
    description: 'Deixe seu cliente experimentar antes de comprar. Aumente conversão, reduza devolução. Integração em 10 minutos.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'look.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'look.me | Provador Virtual para E-commerce',
    description: 'Aumente conversão em 40%. Reduza devoluções em 30%. Provador virtual com IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
