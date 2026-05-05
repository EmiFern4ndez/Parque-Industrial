import React, { useState } from 'react';

export const Form = () => {
  const [formData, setFormData] = useState({
    razonSocial: '',
    cuit: '',
    rubro: '',
    tipoEmpresa: 'existente',
    personalAOcupar: '',
    contactoNombre: '',
    email: '',
    telefono: '',
    descripcionProyecto: '',
    superficieRequerida: '', // Inicia vacío para el guion
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de solicitud de ingreso (GPIV):", formData);
  };

  // CSS para limpiar inputs: sin flechas en números y estilizado para modo oscuro
  const inputClasses = `
    mt-1 block w-full rounded-xl border border-slate-200 dark:border-slate-800 
    bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm 
    focus:ring-2 focus:ring-green-500 focus:border-transparent p-3 transition-all outline-none
    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
  `;

  // CSS para selects: flecha personalizada y cursor pointer
  const selectClasses = `
    ${inputClasses} cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80
    bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] 
    bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 appearance-none
  `;

  const labelClasses = "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 ml-1";

  return (
    <section id="contacto" className="py-32 bg-slate-100 dark:bg-slate-900 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Solicitud de Ingreso
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Complete el formulario para iniciar su radicación en el Parque Industrial Viedma.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* Razón Social y Estado de Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <label className={labelClasses}>Razón Social</label>
                <input type="text" name="razonSocial" required className={inputClasses} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Estado de Empresa</label>
                <select name="tipoEmpresa" className={selectClasses} onChange={handleChange} value={formData.tipoEmpresa}>
                  <option value="existente" className="dark:bg-slate-900">Empresa Existente</option>
                  <option value="nueva" className="dark:bg-slate-900">Empresa Nueva</option>
                </select>
              </div>
            </div>

            {/* CUIT y Personal a Ocupar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClasses}>CUIT</label>
                <input type="text" name="cuit" placeholder="00-00000000-0" required className={inputClasses} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Personal a Ocupar (estimado)</label>
                <input type="number" name="personalAOcupar" placeholder="Cantidad de empleados" required className={inputClasses} onChange={handleChange} />
              </div>
            </div>

            {/* Rubro */}
            <div>
              <label className={labelClasses}>Rubro o Actividad Principal</label>
              <input type="text" name="rubro" required className={inputClasses} onChange={handleChange} />
            </div>

            {/* Contacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelClasses}>Nombre Responsable</label>
                <input type="text" name="contactoNombre" required className={inputClasses} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Email</label>
                <input type="email" name="email" required className={inputClasses} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Teléfono</label>
                <input type="tel" name="telefono" className={inputClasses} onChange={handleChange} />
              </div>
            </div>

            {/* Descripción del Proyecto (Sin resize manual) */}
            <div>
              <label className={labelClasses}>Descripción del Proyecto Productivo</label>
              <textarea 
                name="descripcionProyecto" 
                rows={4} 
                required 
                className={`${inputClasses} resize-none`} 
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Superficie con Opción por Defecto "-" */}
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <div className="flex-1 max-w-[300px]">
                <label className={labelClasses}>Superficie Requerida (m²)</label>
                <select 
                  name="superficieRequerida" 
                  required 
                  className={selectClasses} 
                  onChange={handleChange}
                  value={formData.superficieRequerida}
                >
                  <option value="" disabled className="dark:bg-slate-900 text-slate-400">- Seleccionar -</option>
                  <option value="1250" className="dark:bg-slate-900">1250 m²</option>
                  <option value="2000" className="dark:bg-slate-900">2000 m²</option>
                  <option value="5000" className="dark:bg-slate-900">5000 m²</option>
                </select>
              </div>
              
              <div className="flex-1 text-right">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-xl shadow-green-600/20 transition-all hover:-translate-y-1 active:scale-95 text-lg"
                >
                  Enviar Formulario
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};