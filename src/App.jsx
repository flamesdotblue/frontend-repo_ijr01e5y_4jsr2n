import React from 'react';
import Hero from './components/Hero';
import SellForm from './components/SellForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">NeonRamp</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#sell" className="hover:text-white">Sell</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
          <a href="#sell" className="ml-4 rounded-md bg-white text-black text-sm px-3 py-1.5 font-medium">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <SellForm />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
