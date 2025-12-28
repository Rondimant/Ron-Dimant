
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blades', href: '#blades' },
    { name: 'Rubbers', href: '#rubbers' },
    { name: 'Tables', href: '#tables' },
    { name: 'The Academy', href: '#academy' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121212]/95 backdrop-blur-md py-4 border-b border-blue-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-sport text-2xl tracking-tighter text-white">
            RON <span className="text-blue-500">DIMANT</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="relative text-gray-300 hover:text-blue-500 transition-colors">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all electric-glow">
            Get Pro Gear
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#121212] z-40 transition-transform duration-500 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-sport text-white hover:text-blue-500 transition-colors flex items-center"
            >
              {link.name} <ChevronRight className="ml-2 text-blue-500" />
            </a>
          ))}
          <button className="bg-blue-600 w-full text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-8">
            Shop Professional Gear
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
