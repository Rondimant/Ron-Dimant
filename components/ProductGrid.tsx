
import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="blades" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Elite Equipment</h2>
            <h3 className="text-4xl md:text-5xl font-sport text-white uppercase">
              PRO-GRADE SELECTION
            </h3>
          </div>
          <div className="flex space-x-4">
            {['All', 'Blades', 'Rubbers', 'Tables'].map((cat) => (
              <button 
                key={cat}
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                  cat === 'All' ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-gray-400 hover:text-white font-bold uppercase tracking-[0.2em] text-sm flex items-center mx-auto transition-colors group">
            View Full Catalog
            <div className="ml-2 w-8 h-[1px] bg-blue-600 group-hover:w-12 transition-all"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
