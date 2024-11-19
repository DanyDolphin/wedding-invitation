// Next
import type { Metadata } from 'next'

// Styles
import './globals.css'
import './enterAnimations.css'

// Global fonts
import globalFonts from '@/app/fonts'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '💌 Allison & Mario',
  description: 'Nos casamos! aqui puedes ver los detalles',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${globalFonts} antialiased`}>{children}</body>
      <Script src="/scripts/enterAnimations.js" />
    </html>
  )
}
