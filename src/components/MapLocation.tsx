import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corregir el bug de los iconos de Leaflet en React (Importante)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41], // El punto del icono que corresponde a la ubicación
    popupAnchor: [1, -34]
});
L.Marker.prototype.options.icon = DefaultIcon;

export const MapLocation = () => {
  // Coordenadas EXACTAS del Parque Industrial Viedma (RP1)
  const position: [number, number] = [-40.836806, -62.9622346];

  return (
    <section id="ubicacion" className="py-32 bg-slate-200 dark:bg-slate-950 px-6 text-slate-900 dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 items-center flex gap-12">
        {/* Mapa */}
        <div className="h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-100 dark:border-slate-900 relative z-0">
          <MapContainer 
            center={position} 
            zoom={15} 
            scrollWheelZoom={false} 
            className="h-full w-full dark:brightness-90 dark:contrast-125 dark:hue-rotate-180 dark:invert-[90%]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-center font-sans">
                  <strong className="text-green-700">PARQUE INDUSTRIAL DE VIEDMA</strong><br />
                  Ruta Provincial 1
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="mb-40 text-center flex text-left flex-col md:flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
            Nuestra Ubicacion
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Nos encontramos en la Ruta Provincial 1, Viedma, Río Negro.
          </p>
        </div>
      </div>
    </section>
  );
};