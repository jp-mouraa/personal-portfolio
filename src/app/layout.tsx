import './globals.css'
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
import { ReactNode } from 'react'


export const metadata = {
  title: 'personal-portifolio',
  description: 'Hi, my name´s João Pedro de Moura, Welcome to my portfolio!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
