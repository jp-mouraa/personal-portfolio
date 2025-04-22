import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' }
  ];

  return (
    <nav className="w-full mb-2 border-0 block bg-[#111] px-8 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4 font-medium">
        {links.map((link, index) => (
          <span key={link.href} className="relative text-[#f1f1f1]">
            <Link href={link.href}>{link.label}</Link>
            {index < links.length - 1 && <span className="ml-4 text-[#555]">|</span>}
          </span>
        ))}
      </div>
      <div className="flex items-center">
        <a href="https://github.com/jp-mouraa" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[#f1f1f1] text-[30px] ml-6 hover:text-purple-500 hover:scale-125 transition-transform duration-1000" />
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-moura-medeiros-aaab05202/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#f1f1f1] text-[30px] ml-6 hover:text-[#1e90ff] hover:scale-125 transition-transform duration-1000" />
        </a>
      </div>
    </nav>
  )
}