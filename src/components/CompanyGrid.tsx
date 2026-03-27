const empresas = [
  { nombre: "Logística Patagonia", rubro: "Transporte" },
  { nombre: "Viedma Tech", rubro: "Software" },
  { nombre: "EcoEnergía RN", rubro: "Renovables" },
  { nombre: "Frutos del Valle", rubro: "Alimenticio" }
];

export const CompanyGrid = () => (
  <section className="py-40 bg-slate-100 dark:bg-slate-900 px-6 transition-colors duration-300">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Empresas Integradas</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-12">
        Formá parte de nuestra comunidad industrial en crecimiento.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {empresas.map((e) => (
          <div 
            key={e.nombre} 

            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500 transition-all group"
          >
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-lg mb-4 mx-auto flex items-center justify-center transition-colors">
              <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                {e.nombre[0]}
              </span>
            </div>

            <h3 className="font-bold text-slate-800 dark:text-slate-100">
              {e.nombre}
            </h3>

            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {e.rubro}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);