import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Geist, Roboto } from 'next/font/google'
import type { Metadata } from 'next'

// Importing fonts from Google Fonts and roboto
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const roboto = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'personal-portifolio',
  description: 'Hi, my name is João Pedro de Moura. Welcome to my portfolio!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${geist.variable} bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}