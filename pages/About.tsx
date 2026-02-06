import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      
      {/* Hero */}
      <section className="w-full px-4 md:px-10 py-6 md:py-10">
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-900 min-h-[500px] flex items-center justify-center text-center px-4" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoNhA9rkDKA4eq62LN_W8ouyAFC56tI8k_vhQYXmWSOmrxSZLYP3tDj2d689jq7NOkQqgp9hSBymgACrAolmm4oZJWzpi4ezoX6RN8OdPRM0zb3UnMxgtDjM8IfOA3hN96wW1QkbMdAeO1V8DSJu7fANNkYFHp7qVSDp0zUWQrEuMfmgisLwdeZlY_Hws12ZwnywPe5SiwYVpyb3-1Ksh8sDhOLPmuiE2p1oDhOofrvG8mpKHKgqnvawtr9efW4op315bTlTFd1nE')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
           <div className="flex flex-col gap-6 max-w-4xl mx-auto items-center">
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold bg-black/30 px-3 py-1 rounded backdrop-blur-md">Est. 2003</span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">Curating Exceptional Living</h1>
              <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed">Over 20 years of defining luxury real estate in Barcelona.</p>
           </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 md:px-40 py-20 bg-background-light dark:bg-background-dark text-center">
         <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            To redefine the real estate experience through <span className="text-primary italic">integrity</span> and <span className="text-primary italic">quality</span>.
         </h2>
      </section>

      {/* Values */}
      <section className="px-4 md:px-10 pb-20 bg-background-light dark:bg-background-dark">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon: 'verified_user', title: 'Integrity', desc: 'Transparency is the cornerstone of our business.'},
              {icon: 'diamond', title: 'Excellence', desc: 'Uncompromising quality in every listing.'},
              {icon: 'lightbulb', title: 'Innovation', desc: 'Forward-thinking solutions for modern living.'}
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-4 rounded-xl border border-[#e6e3db] dark:border-gray-800 bg-white dark:bg-[#2a2415] p-8 hover:shadow-lg transition-all">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                   <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h4 className="text-text-main dark:text-white text-xl font-bold">{item.title}</h4>
                <p className="text-text-muted dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>
      
      {/* Stats */}
      <section className="border-y border-[#e6e3db] dark:border-gray-800 bg-white dark:bg-[#1a160d] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             {val: '20+', label: 'Years Experience'},
             {val: '850', label: 'Properties Sold'},
             {val: '98%', label: 'Client Satisfaction'},
             {val: '€1.2B', label: 'Sales Volume'}
           ].map(stat => (
             <div key={stat.label} className="flex flex-col items-center">
               <span className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-2">{stat.val}</span>
               <span className="text-sm font-medium uppercase tracking-widest text-text-muted">{stat.label}</span>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;