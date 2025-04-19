// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">

      <nav style={{ padding: '1rem', backgroundColor: '#111111' }}>
        <Link href="/">Início</Link> |{' '}
        <Link href="/home">Home</Link> |{' '}
        <Link href="/about">Sobre</Link>
      </nav>

    </div>
  )
}

export default Navbar;