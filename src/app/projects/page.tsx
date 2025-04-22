import styles from "./Projects.module.css"

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.projects}>
            <h1> 
                Opa
            </h1>
            <div>
                {children}
            </div>
        </main>
    )
}