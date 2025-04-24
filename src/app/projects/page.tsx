export default function ProjectsPage() {
  return (
    <section className="text-left px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-white">Projetos</h1>

      <div className="space-y-6 text-white">
        <div>
          <h2 className="text-2xl font-semibold">Classificador de Jogos</h2>
          <p>
            Aplicação prática de machine learning desenvolvida para classificar jogos por gênero
            com base em suas descrições. Utiliza modelos de aprendizado supervisionado para prever o gênero
            com alta precisão.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Projetos Financeiros (em andamento)</h2>
          <p>
            Desenvolvimento de aplicações voltadas ao mercado financeiro. Utiliza análise de dados
            e modelos preditivos para auxiliar na tomada de decisão sobre investimentos.
          </p>
        </div>
      </div>
    </section>
  );
}
