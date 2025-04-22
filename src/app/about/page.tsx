export default function AboutPage({ children }: { children: React.ReactNode }) {
  return (
    <section className="text-left">
      <h1 className="text-2xl font-bold mb-4">Olá</h1>
      <div>{children}</div>
    </section>
  )
}