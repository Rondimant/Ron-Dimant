
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <span className="font-sport text-3xl tracking-tighter text-white">
              RON <span className="text-blue-500">DIMANT</span>
            </span>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Redefining professional table tennis equipment through relentless engineering and athlete-first design.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Equipment</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Competition Blades</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Professional Rubbers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Tournament Tables</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Signature Clothing</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Academy</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Masterclasses</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Elite Coaching</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Event Calendar</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Expert Support</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Warranties</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Global Distributors</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            © 2024 RON DIMANT TABLE TENNIS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
