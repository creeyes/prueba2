import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDetails: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Header />
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="hover:text-primary cursor-pointer">Properties</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-medium">Villa Serenity</span>
        </div>

        {/* Image Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-sm">
            <div className="md:col-span-2 md:row-span-2 bg-zinc-200 relative group overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmGkM17JDrDMmZC_Sb99sQ5tDlskvqGgH0WG08n6LFseVcOFgscekvjMw2DXByMU2gleVeeTK_EOZRX08YBS4cymJ5zTn0KuWdmhYOPzVTSsrSWy5a929w3uVvcOhfGpOJkkOjKuwixr14dqGXK15PNDklYly-jdB8EuiB0un2kguQPsRh80krXlHHTanY_AWLJgRWLY2lztL-m89VAdAYLTYPcxQRFXA4aubbpM3L6zRIqIRQ3ovAaLyLPdaxvmuEY5Lzqs-wLcA')" }}></div>
            </div>
            <div className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdxNGe7UHJ_zNXDvIPLtg4y69q0itD3cADBHi8Z-k7aGJNY3a0QIAINg8z_orWGIjvP1WMcmn3PeR89upSBxE7WyyvzGD6u_2dz5liA7C-5DQWfdv18x0MRXdrgHkYicvL9tCGhNN68jlUshlGdvTcb7Kp-IO8bYYXrQ5yrZxt-nFHihimziVumUu5MeZoj2STyJtkqGPyoa8TjaZFCJikMdh6ZbS6kY3q8luYgDYglgX60W7wnFsbvLsKnmGagP2HSFBKBn2IgQo')" }}></div>
            </div>
            <div className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsoRH_pY2Ofti5Hz5zT9_SiNevFc-kjsaxtsJ32vXsKuk2FtT0VCKCpew02XwhFRhOv_eXFeJVbaCs26xJKGeDI7UMRPLF0VEcbTBzyhn-M_8wQUx8EfITEPCzAo3ToORgHpzHadKFLWTqqIF_88sMxNgwcpj6xmaN7pd_GixZoV1ij2PedGj3Qtp7DPKAxlRR4TP_cMg83yogqzqyQvE9nifypG26ziktTfOS3KMJU8DZ8tnOnz-Ih2WbGgGvo_bnj7NuqyK-Lc8')" }}></div>
            </div>
            <div className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFYaY-vCt6OEHI1bnrSq7lYni8WoyceM3pkrOOn-DaL6vJYRz17rUTRTtCRZfSuAvYsyRlyUjC62wh1rR0E5bsA8xwhXS0S0VagXscLocZbOZcRUXnHabO3-e5I4SvtdRYsO9fg9HcS9q1icb4Spuc2K-rka-kIPsgrGPuQVAfSXiJYh8wxJVwyJpH4U_H1ytkd7-j_QdJ0B0odVKSqGR1dpVg4kTxW5D9eNkK3SvSpKIueug3mPOgjYAmgcFdIE0hbX8qMiSl3hA')" }}></div>
            </div>
            <div className="bg-zinc-200 relative group overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8YxHu9yYOvX9J4Hq5AgxnfBYpdzT_ui0W_4TSsEk3Yy2GI_V7HU26vFpRvF7i2tMFEXPD94JfcznTSLPDNHou5QNt0UCbeNvSYFb2KovzXRlffMuNVFnGtJGyOiqp1_VNQWUyNaygvxz0HrnKsAH3bmUDzDrluKuZwwEeZFlPMFee5d8cWXKdSnYamKcaJwIU3hxZ3kqaUDncHWF-Et9EVd9Q7kwWi_6WE_DpJsttH7p40RjhMWtF1OvgAro7UKTVIb0MTTPoHQo')" }}></div>
                <button className="absolute bottom-4 right-4 bg-white dark:bg-zinc-900 text-sm font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-primary hover:text-background-dark transition-colors z-10">
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                    View all photos
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
                        Villa Serenity - Oceanfront Estate
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light flex items-center gap-1">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                        123 Coastal Highway, Malibu, CA 90265
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-2">
                    <h2 className="text-3xl font-bold text-primary tracking-tight">$4,500,000</h2>
                    <div className="flex gap-6 text-zinc-700 dark:text-zinc-300">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">bed</span>
                            <span className="text-lg font-bold">5</span> <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Beds</span>
                        </div>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">bathtub</span>
                            <span className="text-lg font-bold">6</span> <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Baths</span>
                        </div>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-zinc-400">square_foot</span>
                            <span className="text-lg font-bold">4,200</span> <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sq Ft</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">About this home</h3>
                <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                    <p>Experience unparalleled luxury in this architecturally significant modern home situated on the prestigious Malibu coast. Designed with an emphasis on indoor-outdoor living, the residence features floor-to-ceiling glass walls that vanish to reveal panoramic ocean views.</p>
                    <p className="mt-4">The open-concept main floor boasts a chef's kitchen with custom Italian cabinetry, Wolf appliances, and a massive marble island. The primary suite is a private sanctuary with a fireplace, dual walk-in closets, and a spa-inspired bath overlooking the Pacific. Additional amenities include a home theater, temperature-controlled wine cellar, and a smart home automation system.</p>
                </div>
            </section>

            {/* Amenities */}
            <section className="flex flex-col gap-6 py-8 border-y border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                     {[
                       {icon: 'pool', label: 'Infinity Pool'},
                       {icon: 'wifi', label: 'Fast WiFi'},
                       {icon: 'fitness_center', label: 'Private Gym'},
                       {icon: 'garage', label: '3-Car Garage'},
                       {icon: 'wine_bar', label: 'Wine Cellar'},
                       {icon: 'ac_unit', label: 'Central AC'}
                     ].map(item => (
                       <div key={item.label} className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">{item.label}</span>
                       </div>
                     ))}
                </div>
            </section>

             {/* Location Map */}
            <section className="flex flex-col gap-6">
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Location</h3>
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
                            <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Listing Agent</p>
                            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Elena Martorell</h4>
                            <div className="flex items-center gap-1 text-primary text-sm">
                                <span className="material-symbols-outlined text-[16px] fill">star</span>
                                <span className="font-bold">4.9</span>
                                <span className="text-zinc-400 font-normal">(128 reviews)</span>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Request sent!"); }}>
                        <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Full Name" type="text" />
                        <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Email Address" type="email" />
                         <input className="w-full pl-4 pr-4 py-2 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Phone Number" type="tel" />
                        <textarea className="w-full p-3 bg-background-light dark:bg-background-dark border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none" placeholder="I'm interested in this property..." rows={3}></textarea>
                        <button className="mt-2 w-full bg-primary hover:bg-yellow-500 text-background-dark font-bold py-3 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2" type="submit">
                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                            Request Visit
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