import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { DarkModeToggle } from './ui/DarkModeToggle';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-md' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo y Nombre */}
        <div className="flex items-center gap-2">
          <img src="favicon-32x32.png" alt="Logo" className="w-8 h-8" />
          <span className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled 
              ? 'text-slate-900 dark:text-white' 
              : 'text-white' 
          }`}>
            Parque <span className={`${isScrolled ? 'text-slate-500' : 'text-white/70'} font-light`}>Industrial</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-slate-600 dark:text-slate-300 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Nosotros
          </a>
          {/* 
          <a 
            href="#contacto" 
            className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20' 
                : 'bg-white text-green-700 hover:bg-green-50 shadow-xl'
            }`}
          >
            Radicación
          </a>*/}

          <div className={`border-l pl-6 transition-colors duration-300 ${
            isScrolled ? 'border-slate-200 dark:border-slate-700' : 'border-white/20'
          }`}>
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`transition-colors ${isScrolled ? 'text-slate-600 dark:text-white' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Siempre con fondo para legibilidad) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#about" className="font-medium text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" className="font-bold text-green-600" onClick={() => setIsMenuOpen(false)}>Radicación</a>
        </div>
      )}
    </nav>
  );
};