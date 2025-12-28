
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ExpertEndorsement from './components/ExpertEndorsement';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-600/30">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        
        {/* Mid-page banner */}
        <div className="h-64 bg-fixed bg-center bg-cover flex items-center justify-center relative group" 
          style={{ backgroundImage: 'url(https://picsum.photos/seed/ttaction/1920/600)' }}>
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-3xl md:text-5xl font-sport text-white mb-4">DOMINATE THE ARENA</h2>
            <p className="text-white/80 font-bold uppercase tracking-[0.3em] text-sm">Engineered For The One Percent</p>
          </div>
        </div>

        <ExpertEndorsement />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
