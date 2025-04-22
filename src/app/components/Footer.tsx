import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <hr className={styles.line} />
        <p> © {new Date().getFullYear()} Jp moura </p>
      </footer>
    </>
    )
  }
  
