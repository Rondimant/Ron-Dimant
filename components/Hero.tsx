
import React from 'react';
import { ArrowRight, Zap, Target, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
            <Zap size={14} className="text-blue-500" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Est. 2024 • Elite Standards</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-sport text-white leading-[1.1] uppercase">
            RON DIMANT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">
              PRECISION. POWER. PERFORMANCE.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Engineered for the elite. Tested by champions. The ultimate equipment for the next generation of professional table tennis masters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center transition-all electric-glow group">
              Shop Professional Gear 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:border-blue-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Watch The Academy
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-blue-500 mb-1">
                <Target size={20} />
                <span className="text-white font-bold text-xl">99%</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Precision Rating</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-blue-500 mb-1">
                <Zap size={20} />
                <span className="text-white font-bold text-xl">120k</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Pro Revolutions</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-blue-500 mb-1">
                <Award size={20} />
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Gold Medals</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-[4/5] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/ttplayer/800/1000" 
              alt="Professional Table Tennis Player" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-2">Signature Series</p>
              <h3 className="text-white font-sport text-3xl">THE PRO COLLECTION</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
