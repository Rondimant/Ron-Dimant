
import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-900/40 to-[#1a1a1a] rounded-[3rem] p-12 lg:p-24 border border-blue-500/10 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>

          <div className="max-w-xl relative z-10 text-center lg:text-left">
            <h3 className="text-4xl lg:text-5xl font-sport text-white uppercase mb-6">
              JOIN THE <span className="text-blue-500">DIMANT TEAM</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Get exclusive access to pro training drills, limited-edition equipment drops, and insider techniques from Ron Dimant's elite coaches.
            </p>
          </div>

          <form className="w-full lg:w-auto relative z-10 flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-black/50 border border-white/10 rounded-full px-8 py-5 text-white focus:outline-none focus:border-blue-500 min-w-[300px] font-bold text-sm tracking-widest uppercase"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center transition-all electric-glow whitespace-nowrap">
              Sign Up <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
