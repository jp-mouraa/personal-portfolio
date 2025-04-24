export default function ProjectsPage() {
  return (
    <section className="text-left px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-white">Projetos</h1>

      <div className="space-y-6 text-white">
        <div>
          <h2 className="text-2xl font-semibold">Game Classifiers</h2>
          <p>
          Practical machine learning application developed to classify games by genre based on their descriptions. 
          It uses supervised learning models to predict genre with high accuracy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Financial Projects (in progress)</h2>
          <p>
          Development of applications aimed at the financial market. 
          Use of data analysis and predictive models to assist in decision-making on investments.
          </p>
        </div>
      </div>
    </section>
  );
}
