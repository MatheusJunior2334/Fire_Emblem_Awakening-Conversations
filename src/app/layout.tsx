import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/languageContextProvider'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fire Emblem Awakening - Project',
  description: 'Project created with the main goal to replicate the support log system from the game "Fire Emblem Awakening".',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <html lang='pt'>
        <body className={fredoka.className}>
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}
