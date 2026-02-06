import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  fullWidth?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fullWidth = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Buy', path: '/properties' },
    // Rent removed as requested since it points to the same place
    { name: 'Sell', path: '/sell' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`flex-none z-50 bg-white/95 dark:bg-[#181611]/95 backdrop-blur-sm border-b border-[#f4f3f0] dark:border-[#333] px-6 py-4 transition-colors duration-300 sticky top-0`}>
      <div className={`${fullWidth ? 'max-w-[1920px]' : 'max-w-7xl'} mx-auto flex items-center justify-between`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="size-8 text-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined !text-[32px]">apartment</span>
          </div>
          <h2 className="text-[#181611] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Inmobiliaria Martorell</h2>
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path) 
                ? 'text-primary' 
                : 'text-[#181611] dark:text-gray-200 hover:text-primary dark:hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/sell" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-opacity-90 transition-opacity text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">List Your Property</span>
          </Link>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f4f3f0] dark:bg-[#333] hover:bg-gray-200 dark:hover:bg-[#444] transition-colors text-[#181611] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3">
             <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#181611] dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#181611] border-b border-gray-100 dark:border-gray-800 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
           {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-base font-medium text-[#181611] dark:text-gray-200 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/sell" 
            className="w-full h-12 bg-primary flex items-center justify-center rounded-lg text-[#181611] font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            List Your Property
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;