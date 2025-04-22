import './globals.css'
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
// Importing fonts from Google Fonts and roboto
import { Geist, Roboto } from 'next/font/google'
// Metadata for the application
import type { Metadata } from 'next'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-roboto'
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  title: 'personal-portifolio',
  description: 'Hi, my names João Pedro de Moura, Welcome to my portfolio!',
}

// Main layout of the application
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${geist.variable}`} /*className="text-3xl font-bold underline"*/>
        <Navbar/>
        <div className="content-wrapper">
          {children}  
        </div>
        <Footer />
      </body>
    </html>
  )
}
