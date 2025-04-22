export default function ProjectsPage({ children }: { children: React.ReactNode }) {
    return (
      <section className="text-left">
        <h1 className="text-2xl font-bold mb-4">Opa</h1>
        <div>{children}</div>
      </section>
    )
  }