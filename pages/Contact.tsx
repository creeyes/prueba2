import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      
      <main className="flex-grow flex flex-col items-center py-12 px-6 sm:px-12 lg:px-24">
         <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            {/* Info */}
            <div className="flex flex-col gap-10">
               <div>
                  <span className="text-primary text-sm font-bold tracking-widest uppercase">Contact Us</span>
                  <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-4 dark:text-white">Get in Touch</h1>
                  <p className="text-text-muted dark:text-gray-400 text-lg">Experience exceptional service. Visit our headquarters or send us a message below.</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl border border-[#e6e3db] dark:border-white/10 bg-white dark:bg-white/5">
                     <span className="material-symbols-outlined text-[28px] text-primary mb-2">location_on</span>
                     <h3 className="font-bold dark:text-white">Visit Us</h3>
                     <p className="text-sm text-text-muted">123 Luxury Blvd, Madrid</p>
                  </div>
                   <div className="p-4 rounded-xl border border-[#e6e3db] dark:border-white/10 bg-white dark:bg-white/5">
                     <span className="material-symbols-outlined text-[28px] text-primary mb-2">call</span>
                     <h3 className="font-bold dark:text-white">Call Us</h3>
                     <p className="text-sm text-text-muted">+1 (555) 000-0000</p>
                  </div>
               </div>
               
               {/* Map */}
               <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#e6e3db] dark:border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.2] opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm-oAcjuA1xl_65iDR802Sgze-RCETbMJywLRWJ0f1C-NLO2w-ms68oBMmfh_riDpJJC5S1yudm_-lZoN7dRBEUSjk1oGgrqwarqEVI3l7Ed3hB7HWksp1IzBPMWRz6ChkHHHmErE9NCAsC5CPwPxq40l_wvfZbopvnG_na0ASEJdId2psHiSK_Qp7Q3Z6oHE1YaqquynZ4P4oXdbNKAWL9O7h4vEy-gcpA_6ZytdWc9HUidonuIwT-fm-w4yD19qH4b6jPzWGgIM')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-primary text-[#181611] p-2 rounded-full shadow-xl border-2 border-white">
                        <span className="material-symbols-outlined text-[24px]">location_on</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="flex flex-col justify-center">
               <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-[#e6e3db] dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h2>
                  <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input className="w-full rounded-lg border border-[#e6e3db] bg-[#fbfbf9] px-4 py-3 text-sm focus:border-primary focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Full Name" />
                        <input className="w-full rounded-lg border border-[#e6e3db] bg-[#fbfbf9] px-4 py-3 text-sm focus:border-primary focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Phone" />
                     </div>
                     <input className="w-full rounded-lg border border-[#e6e3db] bg-[#fbfbf9] px-4 py-3 text-sm focus:border-primary focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Email Address" />
                     <textarea className="w-full rounded-lg border border-[#e6e3db] bg-[#fbfbf9] px-4 py-3 text-sm focus:border-primary focus:outline-none min-h-[120px] resize-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Tell us about your needs..."></textarea>
                     <button className="w-full rounded-lg bg-primary py-3 px-6 text-[#181611] font-bold shadow-sm hover:bg-yellow-500 transition-all">Send Message</button>
                  </form>
               </div>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;