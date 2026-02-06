import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sell: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 antialiased min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#181611]/80 backdrop-blur-md border-b border-[#f4f3f0] dark:border-[#332e22]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">real_estate_agent</span>
            </div>
            <h2 className="text-[#181611] dark:text-white text-xl font-bold tracking-tight">Inmobiliaria Martorell</h2>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-[#181611] dark:text-white tracking-tighter mb-4">Sell Your Property</h1>
              <p className="text-[#897f61] dark:text-[#a89f85] text-lg leading-relaxed">
                Share details about your property to get an accurate valuation from our luxury real estate experts.
              </p>
            </div>
            
            {/* Progress */}
            <nav className="hidden lg:flex flex-col gap-0 border-l-2 border-slate-200 dark:border-slate-700 pl-6 py-2">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="relative pb-8 group last:pb-0" onClick={() => setActiveStep(step)}>
                  <div className={`absolute -left-[29px] top-1 h-3 w-3 rounded-full ring-4 ring-white dark:ring-background-dark ${activeStep >= step ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
                  <span className={`font-bold text-sm uppercase tracking-wider mb-1 block ${activeStep >= step ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>Step {step}</span>
                  <span className={`font-medium text-lg ${activeStep >= step ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                    {['Location & Type', 'Details', 'Visuals', 'Contact'][index]}
                  </span>
                </div>
              ))}
            </nav>

            <div className="bg-white dark:bg-[#2a2415] p-6 rounded-xl shadow-sm border border-slate-100 dark:border-[#3a321f]">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">Market Leaders</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">"Inmobiliaria Martorell sold our villa in record time. Their valuation was spot on."</p>
            </div>
          </aside>

          {/* Form */}
          <form className="w-full lg:w-2/3 flex flex-col gap-10" onSubmit={(e) => { e.preventDefault(); alert("Listing Submitted!"); }}>
            
            {/* Step 1 */}
            <section className={`bg-white dark:bg-[#1e1a11] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-opacity ${activeStep === 1 ? 'opacity-100' : 'opacity-60'}`} onClick={() => setActiveStep(1)}>
               <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">Location & Property Type</h3>
               <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                     <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Property Address</label>
                     <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">location_on</span>
                        <input className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-[#2a2518] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Enter street address" type="text" />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {['Apartment', 'House', 'Villa', 'Commercial'].map((type) => (
                       <label key={type} className="cursor-pointer group relative">
                         <input type="radio" name="property_type" className="peer sr-only" />
                         <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#2a2518] peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-all h-32">
                           <span className="material-symbols-outlined text-3xl text-slate-400 peer-checked:text-primary">{type === 'House' ? 'home' : type === 'Villa' ? 'villa' : type === 'Commercial' ? 'storefront' : 'apartment'}</span>
                           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{type}</span>
                         </div>
                       </label>
                     ))}
                  </div>
               </div>
            </section>

             {/* Step 2 */}
            <section className={`bg-white dark:bg-[#1e1a11] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-opacity ${activeStep === 2 ? 'opacity-100' : 'opacity-60'}`} onClick={() => setActiveStep(2)}>
               <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">Property Details</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                 {['Bedrooms', 'Bathrooms', 'Area (m²)', 'Price (€)'].map((label, i) => (
                    <label key={label} className="flex flex-col gap-2">
                      <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">{label}</span>
                      <input className="w-full p-3 bg-slate-50 dark:bg-[#2a2518] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary dark:text-white" type="number" placeholder="0" />
                    </label>
                 ))}
               </div>
               <textarea className="w-full p-4 bg-slate-50 dark:bg-[#2a2518] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary" rows={4} placeholder="Describe your property..."></textarea>
            </section>

             {/* Step 3 */}
             <section className={`bg-white dark:bg-[#1e1a11] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-opacity ${activeStep === 3 ? 'opacity-100' : 'opacity-60'}`} onClick={() => setActiveStep(3)}>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">Photos</h3>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-[#252015] cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">cloud_upload</span>
                  <p className="font-medium text-slate-900 dark:text-white">Click to upload photos</p>
                </div>
             </section>

             {/* Step 4 */}
             <section className={`bg-white dark:bg-[#1e1a11] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-opacity ${activeStep === 4 ? 'opacity-100' : 'opacity-60'}`} onClick={() => setActiveStep(4)}>
                <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-6">Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input className="w-full p-3 bg-slate-50 dark:bg-[#2a2518] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary" placeholder="Full Name" />
                   <input className="w-full p-3 bg-slate-50 dark:bg-[#2a2518] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary" placeholder="Email" />
                </div>
             </section>

             <div className="flex justify-end gap-4 pt-6">
               <button type="submit" className="bg-primary hover:bg-primary/90 text-[#181611] px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                 <span>Submit Listing</span>
                 <span className="material-symbols-outlined text-lg">arrow_forward</span>
               </button>
             </div>
          </form>
        </div>
      </main>
      
      <footer className="mt-12 py-8 bg-white dark:bg-[#181611] border-t border-[#f4f3f0] dark:border-[#332e22] text-center text-sm text-slate-500">
        © 2024 Inmobiliaria Martorell. All rights reserved.
      </footer>
    </div>
  );
};

export default Sell;