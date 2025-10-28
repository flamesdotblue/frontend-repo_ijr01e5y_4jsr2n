import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} NeonRamp Inc. All rights reserved.
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#sell" className="hover:text-white">Sell</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
