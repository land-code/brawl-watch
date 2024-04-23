import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brawl watch',
  description: 'Una aplicación para ver a tus amigos jugar Brawl Stars'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${inter.className} p-4`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
