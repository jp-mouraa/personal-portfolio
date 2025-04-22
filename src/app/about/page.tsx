import styles from "./About.module.css"
 
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles.about}>
        <div>
          <h1>Ola</h1>
          {children}
        </div>
      </main>
    </>
  )
}