export const Hero = () => (
  <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://viedma.gob.ar/wp-content/uploads/2023/12/DJI_0279-scaled.jpg" 
        alt="Viedma"
        className="w-full h-full object-cover transition-transform duration-500" 
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-slate-950/50 transition-colors duration-500"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex justify-center relative z-10 w-full">
      <div className="text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
          Viedma • Río Negro
        </span>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter drop-shadow-lg">
          Potenciá tu <br/>
          <span className="text-green-600 dark:text-green-500 drop-shadow-sm">Emprendimiento</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-100 dark:text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed font-medium">
          Infraestructura de vanguardia y ubicación estratégica para el crecimiento exponencial de tu empresa.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a href="#contacto" className="px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-xl shadow-green-600/20 transition-all hover:-translate-y-1 active:scale-95">
            Iniciar Radicación
          </a>
        </div>
      </div>
    </div>
  </section>
);