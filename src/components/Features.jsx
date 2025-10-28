import React from 'react';
import { Shield, Sparkles, Clock } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
      <Icon size={22} />
    </div>
    <h3 className="mt-4 text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Built for speed, trust, and clarity</h2>
          <p className="mt-3 text-white/70">From KYC to settlement, we've streamlined every step so you can convert crypto to cash with confidence.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Clock} title="Instant settlement" desc="Quotes you can lock and payouts that arrive in minutes, not days." />
          <Feature icon={Shield} title="Bank-grade security" desc="Compliance-first processes, cold storage, and robust monitoring." />
          <Feature icon={Sparkles} title="Transparent pricing" desc="Low fees, no hidden charges, and real-time market rates." />
        </div>
      </div>
    </section>
  );
};

export default Features;
