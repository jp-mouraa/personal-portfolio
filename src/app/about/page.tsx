export default function AboutPage({ children }: { children: React.ReactNode }) {
  return (
    <section className="text-left">
      <h1 className="mt-4 font-arial text-gray-300 mb-4 text-center">
        Data Scientist with 4+ years of experience in data collection, processing and analysis. 
        Specialist in process automation and solutions with Machine Learning and AI.
      </h1>
      <div>{children}</div>
    </section>
  )
}