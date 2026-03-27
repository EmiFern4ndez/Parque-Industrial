import { Navbar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CompanyGrid } from './components/CompanyGrid';
import { Form } from './components/Form';
import 'leaflet/dist/leaflet.css';
import { MapLocation } from './components/MapLocation';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <MapLocation />
      <CompanyGrid />
      <Form />
      <footer className="py-12 bg-slate-200 text-center text-slate-400 dark:text-slate-600 dark:bg-slate-950 transition-colors duration-500">
        <p>© {new Date().getFullYear()} Parque Industrial Viedma - Municipalidad de Viedma</p>
      </footer>
    </div>
  );
}

export default App;