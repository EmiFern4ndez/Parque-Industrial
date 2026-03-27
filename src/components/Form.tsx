import { Building2, User, FileText, Mail, Phone, Tag, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const datos = Object.fromEntries(formData.entries());

    const { error } = await supabase
      .from('solicitudes')
      .insert([
        {
          razon_social: datos.razon_social,
          cuit: datos.cuit,
          representante: datos.representante,
          rubro: datos.rubro,
          email: datos.email,
          telefono: datos.telefono,
          estado: 'pendiente'
        }
      ]);

    setLoading(false);

    if (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar la solicitud: " + error.message);
    } else {
      setEnviado(true);
    }
  };

  // Pantalla de Éxito (Dark Mode Ready)
  if (enviado) {
    return (
      <section className="py-24 px-6 text-center bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-md mx-auto p-10 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-200 dark:border-green-800 shadow-xl">
          <div className="flex justify-center mb-4 text-green-600 dark:text-green-400">
            <CheckCircle size={60} />
          </div>
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">¡Solicitud Enviada!</h2>
          <p className="text-green-700 dark:text-green-300 mb-6 font-medium">
            Los datos se han registrado correctamente en el sistema del Parque Industrial Viedma.
          </p>
          <button 
            onClick={() => setEnviado(false)}
            className="px-6 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all"
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-slate-200 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 md:p-14 rounded-[2.5rem] shadow-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all">
          
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
              Solicitud de <span className="text-green-600 dark:text-green-500 italic">Radicación</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Iniciá el trámite para instalar tu empresa en el parque.
            </p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
            {[
              { label: "Razón Social", name: "razon_social", icon: Building2, placeholder: "Nombre empresa" },
              { label: "CUIT", name: "cuit", icon: FileText, placeholder: "30-XXXXXXXX-X" },
              { label: "Representante Legal", name: "representante", icon: User, placeholder: "Nombre completo" },
              { label: "Rubro", name: "rubro", icon: Tag, placeholder: "Ej: Metalúrgico" },
              { label: "Email", name: "email", icon: Mail, placeholder: "empresa@correo.com", type: "email" },
              { label: "Teléfono", name: "telefono", icon: Phone, placeholder: "+54 2920..." },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  {f.label}
                </label>
                <div className="relative group">
                  <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 dark:group-focus-within:text-green-500 transition-colors" size={20} />
                  <input 
                    required
                    name={f.name}
                    type={f.type || "text"}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-slate-400" 
                    placeholder={f.placeholder}
                  />
                </div>
              </div>
            ))}
            
            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 mt-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white font-black text-xl py-5 rounded-2xl shadow-xl shadow-green-600/20 hover:shadow-green-600/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Procesando...
                </>
              ) : 'ENVIAR SOLICITUD FORMAL'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};