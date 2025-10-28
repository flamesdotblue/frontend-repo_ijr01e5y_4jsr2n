import React, { useMemo, useState } from 'react';
import { CreditCard, Repeat, Shield } from 'lucide-react';

const rates = {
  BTC: 67000, // USD per BTC
  ETH: 3400,  // USD per ETH
  USDT: 1,    // USD per USDT
};

const formatNumber = (n) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(n);

const SellWidget = () => {
  const [asset, setAsset] = useState('BTC');
  const [amount, setAmount] = useState('0.25');
  const [currency, setCurrency] = useState('USD');
  const [payoutMethod, setPayoutMethod] = useState('bank');

  const usdValue = useMemo(() => {
    const amt = parseFloat(amount || '0');
    const rate = rates[asset] ?? 0;
    return amt * rate;
  }, [amount, asset]);

  const fee = useMemo(() => {
    // Dynamic simple fee model: 0.8% + $1
    return usdValue * 0.008 + 1;
  }, [usdValue]);

  const receive = Math.max(usdValue - fee, 0);

  return (
    <section id="sell" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Sell crypto for cash
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300">in seconds</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Enter the amount you want to sell and choose your payout method.
            We lock the best available rate and send funds right away.
          </p>

          <div className="mt-8 grid gap-4 text-white/80">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-400" />
              Fully compliant and secure settlement
            </div>
            <div className="flex items-center gap-3">
              <Repeat className="h-5 w-5 text-cyan-300" />
              Best-rate matching across multiple venues
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-fuchsia-400" />
              Instant payouts to bank or card
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="grid gap-5">
            <div>
              <label className="text-sm text-white/70">Asset</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {['BTC', 'ETH', 'USDT'].map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAsset(a)}
                    className={`rounded-lg px-3 py-2 text-sm border transition ${asset === a ? 'bg-white text-black border-white' : 'border-white/20 text-white/80 hover:bg-white/10'}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-white/70">Amount ({asset})</label>
              <div className="mt-2 flex rounded-lg border border-white/10 bg-black/40">
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 outline-none"
                  placeholder={`0.00 ${asset}`}
                />
                <div className="flex items-center gap-2 px-3 text-white/60">
                  <span className="text-xs">≈ {currency}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-white/60">1 {asset} ≈ ${formatNumber(rates[asset])} {currency}</p>
            </div>

            <div>
              <label className="text-sm text-white/70">Payout method</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { key: 'bank', label: 'Bank transfer' },
                  { key: 'card', label: 'Card payout' },
                ].map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setPayoutMethod(m.key)}
                    className={`rounded-lg px-3 py-2 text-sm border transition ${payoutMethod === m.key ? 'bg-white text-black border-white' : 'border-white/20 text-white/80 hover:bg-white/10'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-black/50 border border-white/10 p-4 grid gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">You send</span>
                <span className="font-medium">{formatNumber(parseFloat(amount || '0'))} {asset}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Estimated value</span>
                <span className="font-medium">${formatNumber(usdValue)} {currency}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Fees</span>
                <span className="font-medium">${formatNumber(fee)} {currency}</span>
              </div>
              <div className="flex items-center justify-between text-base">
                <span className="text-white">You receive</span>
                <span className="font-semibold text-emerald-300">${formatNumber(receive)} {currency}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-white text-black py-3 font-medium hover:opacity-90 transition"
            >
              Continue
            </button>
            <p className="text-xs text-white/50 text-center">Quotes update every few seconds during checkout.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellWidget;
