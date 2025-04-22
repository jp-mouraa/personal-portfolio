import Link from "next/link";
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar(){
  return (
    <>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/jp-mouraa" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} size={30}/>
            </a>  
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-moura-medeiros-aaab05202/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} size={30}/>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}