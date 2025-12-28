
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const ExpertEndorsement: React.FC = () => {
  return (
    <section id="academy" className="py-24 bg-[#0d0d0d] overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
        <span className="text-[20rem] font-sport leading-none">RON</span>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Endorsed by Elites</h2>
          <h3 className="text-4xl md:text-5xl font-sport text-white uppercase mb-8">
            TRUSTED BY THE <br />NEXT GENERATION
          </h3>
          <p className="text-gray-400 text-lg">
            At Ron Dimant, we don't just sell equipment. We build partnerships with athletes who demand nothing but perfection from their tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 relative group hover:border-blue-500/30 transition-all">
              <Quote size={40} className="text-blue-500/20 absolute top-8 right-8" />
              <div className="flex items-center space-x-6 mb-8">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="text-white font-bold text-xl">{t.name}</h4>
                  <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertEndorsement;
