import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth (don't intercept pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:py-24 flex min-h-[88vh] items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Instant crypto off-ramp
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Sell crypto instantly.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300">
              Get cash in minutes.
            </span>
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Convert BTC, ETH, and stablecoins to your bank or card at the best available rates.
            No hidden fees. Lightning-fast payouts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#sell"
              className="rounded-lg bg-white text-black px-5 py-3 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition"
            >
              Start Selling
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <span>Best rates matched across top venues</span>
            <span className="h-1 w-1 rounded-full bg-white/30 inline-block" />
            <span>24/7 global support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
