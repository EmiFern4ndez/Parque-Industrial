import { CheckCircle2 } from 'lucide-react';

export const About = () => (
  <section id="about" className="py-32 bg-slate-200 dark:bg-slate-950 px-6 text-slate-900 dark:text-white transition-colors duration-500">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Un espacio diseñado para crecer</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          El Parque Industrial de Viedma ofrece una ubicación estratégica con acceso directo a rutas nacionales, brindando un ecosistema de servicios industriales de alta calidad.
        </p>
        <div className="space-y-5">
          {['Seguridad 24/7', 'Exenciones impositivas', 'Infraestructura de carga'].map((item) => (
            <div key={item} className="flex items-center gap-4 text-slate-700 dark:text-slate-200 font-semibold group">
              <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:scale-110 transition-transform">
                <CheckCircle2 size={22} className="text-green-600 dark:text-green-400" /> 
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 transition-all">
        <img src="https://apia.ar/wp-content/uploads/2024/11/Parque-Industrial-de-Viedma.webp" alt="Industria" className="w-full" />
      </div>
    </div>
  </section>
);