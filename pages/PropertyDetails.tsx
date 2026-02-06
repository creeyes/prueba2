import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ENDPOINTS } from '../config';

// Interfaz (Ya no dependemos de 'description' del back)
interface PropertyDetail {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  images: string[];
  features: string[];
}

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  
  useEffect(() => {
    if (id) {
        fetch(ENDPOINTS.DETAIL(id))
            .then(res => {
                if (!res.ok) throw new Error("Error cargando propiedad");
                return res.json();
            })
            .then(data => setProperty(data))
            .catch(err => console.error("Error:", err));
    }
  }, [id]);

  if (!property) {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <div className="flex-grow flex items-center justify-center text-zinc-500">Cargando detalles...</div>
        </div>
    );
  }

  const formatPrice = (val: number) => 
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  // Helpers de imágenes
  const mainImage = property.images?.[0] || "https://placehold.co/800x600?text=No+Image";
  const subImages = property.images?.slice(1, 5) || [];

  // --- GENERADOR DE DESCRIPCIÓN AUTOMÁTICA ---
  // Creamos un texto profesional usando los datos que SÍ tenemos
  const generatedDescription = `
    Descubre esta magnífica oportunidad inmobiliaria: **${property.title}**. 
    
    Situada en la exclusiva zona de **${property.location}**, esta propiedad destaca por su excelente ubicación y potencial. 
    Cuenta con una superficie construida de **${property.sqm} m²**, distribuidos inteligentemente para maximizar el espacio y la luz natural.
    
    La vivienda dispone de **${property.beds} habitaciones** amplias y **${property.baths} baños** completos, ofreciendo el confort necesario para la vida diaria.
    
    Por un precio de **${formatPrice(property.price)}**, esta es una oportunidad única en el mercado actual. ¡Contáctanos para agendar una visita!
  `;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Header />
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          <span className="hover:text-primary cursor-pointer">Inicio</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="hover:text-primary cursor-pointer">Propiedades</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate max-w-[200px]">{property.title}</span>
        </div>

        {/* Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-sm">
            <div className="md:col-span-2 md:row-span-2 bg-zinc-200 relative group overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url('${mainImage}')` }}></div>
            </div>
            {subImages.map((imgUrl, idx) => (
                <div key={idx} className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                         style={{ backgroundImage: `url('${imgUrl}')` }}></div>
                </div>
            ))}
            <div className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                {subImages.length > 0 && (
                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url('${subImages[subImages.length - 1] || mainImage}')` }}></div>
                )}
                <button className="absolute bottom-4 right-4 bg-white dark:bg-zinc-900 text-sm font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-primary hover:text-background-dark transition-colors z-10">
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                    Ver fotos
                </button>
            </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            {/* Header Info */}
            <div className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                        {property.title}
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light flex items-center gap-1">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                        {property.location}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-2">
                    <h2 className="text-3xl font-bold text-primary tracking-tight">{formatPrice(property.price)}</h2>
                    <div className="flex gap-6 text-zinc-700 dark:text-zinc-300">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">bed</span>
                            <span className="text-lg font-bold">{property.beds}</span> <span className="text-sm">Hab</span>
                        </div>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">bathtub</span>
                            <span className="text-lg font-bold">{property.baths}</span> <span className="text-sm">Baños</span>
                        </div>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">square_foot</span>
                            <span className="text-lg font-bold">{property.sqm}</span> <span className="text-sm">m²</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* AQUI ESTÁ EL CAMBIO: Descripción Generada */}
            <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Sobre esta propiedad</h3>
                <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 font-light leading-relaxed whitespace-pre-line">
                    {/* Renderizamos la descripción generada */}
                    <p>{generatedDescription}</p>
                </div>
            </section>

            {/* Amenities */}
            <section className="flex flex-col gap-6 py-8 border-y border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                     {property.features && property.features.length > 0 ? property.features.map((feat, index) => (
                       <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium capitalize">{feat}</span>
                       </div>
                     )) : (
                        <p className="text-zinc-400 italic">Consultar características.</p>
                     )}
                </div>
            </section>
            
            {/* Map Placeholder */}
            <section className="flex flex-col gap-6">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Ubicación</h3>
                <div className="w-full h-[320px] bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj9gfgrKjO1Fo3c8oNrdMw5Iz3aQuY5jPS18BRgrZchwGyS8DmVu18ynmU1FqH8OD52TyQrhtsTaeypHT8GVqJApEcqEFAEk6aBhklpsMxwRk-eHrlT-Y9smZCE2pwzaXTs81LudLJNsxSpSD-vpgXaTwAwdo15AvezH0JXF3GAwJOpCn-mq7jtrZ_B91KMGVwEEMAE1-CcFwLDR4wC-dhzYY9aAdA3lcYNQpLdtPE7Ce9tS0016MHBCV2LeZVr6GcyfTu6SHG8_I')" }}></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-primary/90 text-background-dark p-3 rounded-full shadow-lg transform -translate-y-4">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                    </div>
                </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
             <div className="sticky top-24 flex flex-col gap-6">
                <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4 mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-6">
                        <div className="size-16 rounded-full bg-zinc-200 overflow-hidden shrink-0 border-2 border-primary/20">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBozknur32qtIRvhCWUs7XHSKqYfwPD9t_e8bS-P1d0hHhYXwVfudc2h1Y-cQcwTv0D_WV5sLhVOVAuHJHHUjJeG1Lu-RyBc8p20VkERnXk1gMROW4RoNMxv368v7u8R5WO2DWNvdZvOcNCiQ38co3ao1gClQEE9thsMC5DfYrNvhEEMxzIJui7TK8AWgaxnwEEJLuL3Wf3HUGNnEgQ6v5TOtfuOFFGYEE0ETaVn5Aii3xymClqvVtFsiShiSOu3fzlnRwe2whoB9o" alt="Agent" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Agente Inmobiliario</p>
                            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Elena Martorell</h4>
                            <div className="flex items-center gap-1 text-primary text-sm">
                                <span className="material-symbols-outlined text-[16px] fill">star</span>
                                <span className="font-bold">4.9</span>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado (Simulación)"); }}>
                        <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm outline-none focus:border-primary" placeholder="Nombre completo" type="text" />
                        <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm outline-none focus:border-primary" placeholder="Email" type="email" />
                        <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm outline-none focus:border-primary" placeholder="Teléfono" type="tel" />
                        <textarea className="w-full p-3 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm outline-none focus:border-primary resize-none" placeholder={`Hola, me interesa ${property.title}...`} rows={3}></textarea>
                        <button className="mt-2 w-full bg-primary hover:bg-yellow-500 text-background-dark font-bold py-3 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2" type="submit">
                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                            Solicitar Visita
                        </button>
                    </form>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
