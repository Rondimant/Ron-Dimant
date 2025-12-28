
import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const StatBar = ({ label, value }: { label: string; value: number }) => (
    <div className="mb-3">
      <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-400 mb-1">
        <span>{label}</span>
        <span className="text-blue-500 font-bold">{value}</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
          style={{ width: `${(value / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="group relative bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-[#222]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-blue-600 transition-colors">
            <ExternalLink size={18} />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-[10px] font-bold text-white px-2 py-1 rounded uppercase tracking-tighter">
            {product.category}
          </span>
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
        {product.name}
      </h3>
      
      <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10 leading-relaxed">
        {product.description}
      </p>

      <div className="space-y-1 mb-8">
        <StatBar label="Speed" value={product.stats.speed} />
        <StatBar label="Control" value={product.stats.control} />
        <StatBar label="Spin" value={product.stats.spin} />
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-2xl font-sport text-white">${product.price.toFixed(2)}</span>
        <button className="bg-white/5 hover:bg-blue-600 text-white p-3 rounded-xl transition-all group/btn flex items-center space-x-2">
          <ShoppingCart size={20} className="group-hover/btn:scale-110 transition-transform" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-widest">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
