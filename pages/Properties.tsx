import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ENDPOINTS } from '../config';

// Interfaz para los datos que vienen de GHL
interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqm: number; // Tu backend envía 'sqm', no 'sqft'
  image: string;
  isFeatured?: boolean;
}

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos reales de GHL al iniciar
  useEffect(() => {
    fetch(ENDPOINTS.PROPERTIES)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching properties");
        return res.json();
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error conectando con GHL:", err);
        setLoading(false);
      });
  }, []);

  // Formateador de precio (Euros)
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#181611] dark:text-gray-100 antialiased overflow-hidden h-screen flex flex-col">
      <Header fullWidth />
      
      {/* Main Content Area (Split View) */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Left Panel: Filters & Listings */}
        <div className="w-full lg:w-[60%] xl:w-[55%] h-full flex flex-col bg-background-light dark:bg-background-dark border-r border-[#f4f3f0] dark:border-[#333]">
          {/* Sticky Filter Header */}
          <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#f4f3f0] dark:border-[#333] px-6 py-4 shadow-sm">
            {/* Title & Count */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-[#181611] dark:text-white">Properties in Barcelona</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {loading ? "Loading..." : `Showing ${properties.length} exclusive homes`}
              </p>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#181611] px-4 text-sm font-medium text-[#181611] dark:text-gray-200 hover:border-primary transition-colors shadow-sm">
                <span>Price Range</span>
                <span className="material-symbols-outlined !text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#181611] px-4 text-sm font-medium text-[#181611] dark:text-gray-200 hover:border-primary transition-colors shadow-sm">
                <span>Property Type</span>
                <span className="material-symbols-outlined !text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#181611] px-4 text-sm font-medium text-[#181611] dark:text-gray-200 hover:border-primary transition-colors shadow-sm">
                <span>Beds & Baths</span>
                <span className="material-symbols-outlined !text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#181611] px-4 text-sm font-medium text-[#181611] dark:text-gray-200 hover:border-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined !text-[18px]">tune</span>
                <span>More Filters</span>
              </button>
              <div className="ml-auto hidden md:flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <button className="font-medium text-[#181611] dark:text-white flex items-center gap-1">
                  Newest <span className="material-symbols-outlined !text-[16px]">keyboard_arrow_down</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Listings Grid */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {loading ? (
                <div className="flex items-center justify-center h-40">
                    <p className="text-xl text-gray-400">Loading properties...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-8">
                {properties.map((prop) => (
                    <Link to={`/properties/${prop.id}`} key={prop.id} className="group relative flex flex-col rounded-xl bg-white dark:bg-[#181611] shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-[#333] overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                        {prop.isFeatured && (
                        <span className="absolute top-3 left-3 z-10 rounded bg-primary/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#181611] backdrop-blur-md">
                            Featured
                        </span>
                        )}
                        <button className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 text-[#181611] dark:text-white backdrop-blur-md hover:scale-110 transition-transform" onClick={(e) => e.preventDefault()}>
                            <span className="material-symbols-outlined !text-[20px]">favorite</span>
                        </button>
                        
                        {/* IMAGEN DINÁMICA */}
                        <img 
                            src={prop.image || "https://placehold.co/600x400?text=No+Image"} 
                            alt={prop.title} 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="bg-primary text-[#181611] font-bold py-2 px-6 rounded-lg text-sm hover:bg-[#d9a60e] transition-colors translate-y-2 group-hover:translate-y-0 duration-300">
                            View Details
                        </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                        <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-[#181611] dark:text-white">{formatPrice(prop.price)}</h3>
                        </div>
                        <p className="text-base font-medium text-[#181611] dark:text-gray-200 line-clamp-1">{prop.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{prop.location}</p>
                        <div className="mt-4 flex items-center gap-4 border-t border-gray-100 dark:border-[#333] pt-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined !text-[20px] text-gray-400">bed</span>
                            <span className="font-semibold text-[#181611] dark:text-gray-200">{prop.beds}</span> Beds
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined !text-[20px] text-gray-400">bathtub</span>
                            <span className="font-semibold text-[#181611] dark:text-gray-200">{prop.baths}</span> Baths
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined !text-[20px] text-gray-400">square_foot</span>
                            {/* Cambiado Sq Ft por m2 si prefieres, o lo dejas igual */}
                            <span className="font-semibold text-[#181611] dark:text-gray-200">{prop.sqm}</span> m²
                        </div>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            )}
            
            {/* Pagination/Load More */}
            <div className="flex justify-center pb-12">
              <button className="bg-white dark:bg-[#181611] border border-gray-200 dark:border-gray-700 text-[#181611] dark:text-white font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md hover:border-primary transition-all duration-300">
                Load More Properties
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: Sticky Map */}
        <div className="hidden lg:block w-[40%] xl:w-[45%] h-full relative bg-gray-200 dark:bg-gray-800">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-[.9] brightness-[1.1] dark:invert dark:grayscale dark:contrast-[.8]" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz1opAFVaZd73qy-nNePB_J1W36sikleF9zZ8TYD6RaE7hbibavLL6jCzf8gCn0ciSW4gyGx_LBpk3eDFcm-Sgttr8fwSQG_0Ylw7H3dhzZsdQRm2nHEIUGWa09lZO_19-qLnblgEvZ00pF99puQujsZI5Xua4DwRZSPlGZEQxBOb7amVYWkk5v55dTWAAa_ndw8v8GI20zlY953QJzkvX7UUKKIVStcKyZBkYBGvoxVIFV2shjqPikgJuq4l4_FtDcboGeyw0roU')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
          
          {/* Map Markers (Visual Only for now) */}
          <div className="absolute top-[30%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div className="relative flex flex-col items-center">
              <div className="bg-primary text-[#181611] font-bold text-sm px-3 py-1.5 rounded-full shadow-lg border-2 border-white dark:border-[#181611] z-10 scale-110 group-hover:scale-125 transition-transform duration-200">
                $1.25M
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white dark:border-t-[#181611] -mt-[1px] relative z-0"></div>
            </div>
          </div>
          
           <div className="absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div className="relative flex flex-col items-center">
              <div className="bg-white dark:bg-[#333] text-[#181611] dark:text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 group-hover:bg-primary group-hover:text-[#181611] group-hover:border-primary transition-all duration-200">
                $890k
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white dark:border-t-[#333] -mt-[1px]"></div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="bg-white dark:bg-[#181611] dark:text-white size-10 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="bg-white dark:bg-[#181611] dark:text-white size-10 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">remove</span>
            </button>
             <button className="bg-white dark:bg-[#181611] dark:text-white size-10 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-2">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>

        {/* Mobile Floating Map Button */}
        <div className="lg:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
           <button className="flex items-center gap-2 bg-[#181611] dark:bg-white text-white dark:text-[#181611] px-6 py-3 rounded-full shadow-xl font-semibold hover:scale-105 transition-transform">
                <span className="material-symbols-outlined !text-[20px]">map</span>
                View Map
            </button>
        </div>
      </main>
    </div>
  );
};

export default Properties;
