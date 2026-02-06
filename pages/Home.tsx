import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/properties');
  };

  const properties = [
    {
      id: 1,
      title: "Villa Horizon",
      price: "€2,450,000",
      location: "Altea Hills, Alicante",
      beds: 5,
      baths: 4,
      area: "420m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRA18ziGW2Jzm8U6OxTKbFioVJM6-z7CbVnrqn1IfXBWPEkILojipMpv1uXJ9qNur9bGkiCsjY8cNtNFAmyDAZCNlaE06iXel2TDtPB1h8_OjWygEEmXorl5HJjQrorDnRWpg_BT7t8NlIHJy2DkR68Z851S33bKpy_CmnEZnyp8ncubBggVNQOBLT_n7pnAibCm8BXOR4G2-LLPVaEYzrCzh0A7TwjBy7AnBer_cCrik5LTmfl4jMScOmhm5uqNbxare4MXs5HqM",
      tag: "For Sale"
    },
    {
      id: 2,
      title: "The Palms Residence",
      price: "€1,890,000",
      location: "Javea, Costa Blanca",
      beds: 4,
      baths: 3,
      area: "310m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArWovLnAwbvFMoukU9IK73zGZt77czBOcx40b9mmw0-DXHLul1gXzNJWf0eNmx9V_2XUm1_f9Z4Iq8NtMmni6bjseHWL0nDYtVN_PnLEw70NNYzZB5H_OnJvGRHB82WwpgRylbyxCnI9gIXsWaObLI0GMC3rNDA3kuoq-l4YeHfa6EpevcqJCyXzhcrZsanRJomf4mueAOXYQavJgsukaefQJ69KAlwue5NZ4tFWUN4yDQThhEkWMhDBDcN1qrj7JAm9gFytbrQwM",
      tag: "New"
    },
    {
      id: 3,
      title: "Azure Heights",
      price: "€3,100,000",
      location: "Moraira, Alicante",
      beds: 6,
      baths: 5,
      area: "550m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1kEaqzrfIC2wR9zcZRyAmj4IX3xga_h8SBouM6OrXcq-Abb0Gmo3_pGmL1RrF_mnKjSrs3AtOo5K-J5Eef5LMn0zy1cEMp8dS_kZf_18AZ_VRDUSRY5IUwghpzWQS-O-Zcgd0_Hut_NwCtPSPz6cSxjGeHXwSzzWblJBLwKLumZtK8g7wAgF3eBDUXuO1KfU2FqNVUt3RzWkgoswp2l5eTWCac4pnhr-FK-6VGV2llaRLhEq1EFnltb4glvczX19uEod68D7VEIg",
      tag: "Featured"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt2kkUBtkpcJx3aUBF6_-h3SSdqAErG7htnr3D3NO9gYHeOSZK45mac29xqG3PFeKxwcN1mYzUt14nanLqBvIULwNIIxeS0d42-EocLOpOy1mhKRBzCwtBIaMiPWy6a1gsVp-LiMRea68KhBsKGCWA1uEvpVZG3HHtd2z-oyrfkD1EczhCkBXCNNIsMQSK-vZVpIfuCEkNMNV5PbD5P1sPnb7z1DwXKQ3C9sv_bQCOlfhv8maVzU3IR0jZfcMTh2yrNizcChP52e4')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-10 text-center max-w-5xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-lg">
            Find Your Sanctuary.
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-light mb-12 max-w-2xl drop-shadow-md">
            Exclusive properties in the most desirable locations. Experience luxury living tailored to your lifestyle.
          </p>
        </div>

        {/* Floating Search Module */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 flex justify-center px-4 z-10">
          <form onSubmit={handleSearch} className="bg-white dark:bg-background-dark shadow-xl rounded-xl p-4 md:p-6 w-full max-w-4xl flex flex-col md:flex-row gap-4 items-end border border-gray-100 dark:border-gray-800">
            {/* Location Input */}
            <div className="w-full md:flex-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Location</label>
              <div className="relative">
                <input 
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#1a160d] border border-gray-200 dark:border-gray-700 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="e.g. Costa Blanca" 
                />
                <span className="material-symbols-outlined absolute left-3 top-3 text-primary">search</span>
              </div>
            </div>
            
            {/* Type Dropdown */}
            <div className="w-full md:w-1/4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Property Type</label>
              <div className="relative">
                <select className="w-full h-12 pl-3 pr-8 rounded-lg bg-gray-50 dark:bg-[#1a160d] border border-gray-200 dark:border-gray-700 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none cursor-pointer">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Land</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-gray-400">expand_more</span>
              </div>
            </div>

            {/* Price Range */}
            <div className="w-full md:w-1/4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Price Range</label>
              <div className="relative">
                <select className="w-full h-12 pl-3 pr-8 rounded-lg bg-gray-50 dark:bg-[#1a160d] border border-gray-200 dark:border-gray-700 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none cursor-pointer">
                  <option>Any Price</option>
                  <option>€500k - €1M</option>
                  <option>€1M - €2.5M</option>
                  <option>€2.5M - €5M</option>
                  <option>€5M+</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-gray-400">expand_more</span>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto">
              <button type="submit" className="w-full h-12 px-8 bg-primary hover:bg-[#d9a610] text-[#181611] font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="pt-32 pb-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#181611] dark:text-white mb-3">Curated Residences</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <Link to="/properties" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View all properties <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <Link key={prop.id} to={`/properties/${prop.id}`} className="group bg-white dark:bg-[#2a2415] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#332e22]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wide text-[#181611] dark:text-white">
                  {prop.tag}
                </div>
                <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 hover:bg-primary hover:text-white p-2 rounded-full transition-colors" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#181611] dark:text-white truncate">{prop.title}</h3>
                  <span className="text-primary font-bold text-lg">{prop.price}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  {prop.location}
                </p>
                <div className="flex items-center gap-6 border-t border-gray-100 dark:border-gray-700 pt-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gray-400">bed</span> {prop.beds} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gray-400">bathtub</span> {prop.baths} Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gray-400">square_foot</span> {prop.area}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-[#1f1a12]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#181611] dark:text-white">Experience the Extraordinary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#181611] dark:text-white">Market Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Over 20 years of navigating the luxury real estate market with precision and insight.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">key</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#181611] dark:text-white">Exclusive Access</h3>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Unlock off-market listings and private viewings reserved for our distinguished clientele.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">gavel</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#181611] dark:text-white">Legal Security</h3>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Comprehensive legal support ensuring a seamless and secure transaction for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-gray-100 dark:bg-[#2a2415] rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-8 left-8 text-gray-200 dark:text-[#3a3220]">
            <span className="material-symbols-outlined text-9xl opacity-50">format_quote</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-[#1f1a12] shadow-lg">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ai6SwRxRE4TAAcmTGZZISnaWUJWfRRaUKteD1-9qvn3WIK3qoLWEwP6ZYsU7E0Lpna08npm0kf1OYjvCOlyTSNrfqrgv-pCuADzvA-yGXUDj_kWYaZ4cpjGGWCaKSwBOfuR6-9tyRKrK4D0yeDVq9YvkK62mdTmAmR_BqnbQeU2VSoQtSdNTSjVhA1Y_8YXy-nD8qRWh7Qd99ERkX92cfenJecuuMgCubS9VVBCh2kbwV9Y98Wvy7g4fqvH4SdPNsYUDWwS9rVY" alt="Client Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-light italic text-[#181611] dark:text-white leading-relaxed mb-6">
                "Inmobiliaria Martorell didn't just find us a house; they found us our dream lifestyle. Their attention to detail and understanding of our needs was impeccable from day one."
              </blockquote>
              <div>
                <cite className="text-lg font-bold text-[#181611] dark:text-white not-italic">Elena Rodriguez</cite>
                <p className="text-primary text-sm font-medium">Homeowner, Costa Blanca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#181611] mb-4">Stay Ahead of the Market</h2>
          <p className="text-[#181611]/80 mb-8 max-w-lg mx-auto">
            Join our exclusive newsletter to receive updates on new luxury listings, market trends, and investment opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white bg-white/90 placeholder:text-gray-500"
            />
            <button type="submit" className="bg-[#181611] text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;