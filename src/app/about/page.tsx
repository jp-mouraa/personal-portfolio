export default function AboutPage() {
  return (
    <section className="text-left px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-white">About me</h1>
      <p className="text-gray-300 mb-6 max-w-4xl">
        Data Scientist with 4+ years of experience in data collection, processing, and analysis. 
        Specialist in process automation and solutions with Machine Learning and AI.
      </p>

      <div className="text-gray-300 space-y-4 max-w-4xl">
        <p>
          I started my academic journey in 2019 with a Technical degree in Informatics at SENAC. In 2021, I began my Bachelor 
          degree in Data Science and Artificial Intelligence at PUCRS, which I completed in 2024.
        </p>
        <p>
          I have experience in Data Science, Data Analysis, and Cybersecurity, having interned at companies such as PROCERGS, 
          Compass UOL, Dataglass, and ADP. I have worked with dashboards in Power BI and Tableau, built data pipelines and ETL 
          processes, used LLMs for business tasks, and performed pentests to enhance system security.
        </p>
      </div>
    </section>
  );
}
