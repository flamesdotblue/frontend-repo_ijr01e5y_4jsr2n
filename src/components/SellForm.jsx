import React, { useMemo, useState } from 'react';
import { ArrowRight, Wallet } from 'lucide-react';

const COINS = [
  { symbol: 'BTC', name: 'Bitcoin', price: 68000 },
  { symbol: 'ETH', name: 'Ethereum', price: 3500 },
  { symbol: 'USDT', name: 'Tether USDt', price: 1 },
  { symbol: 'USDC', name: 'USD Coin', price: 1 },
];

const FEE_PCT = 0.004; // 0.4%

const SellForm = () => {
  const [coin, setCoin] = useState('USDT');
  const [amountCrypto, setAmountCrypto] = useState('100');
  const [payoutMethod, setPayoutMethod] = useState('bank');

  const selected = useMemo(() => COINS.find(c => c.symbol === coin)!, [coin]);

  const quote = useMemo(() => {
    const amt = Number(amountCrypto || '0');
    const usd = amt * selected.price;
    const fee = usd * FEE_PCT;
    const total = usd - fee;
    return { usd, fee, total };
  }, [amountCrypto, selected]);

  return (
    <section id="sell" className="relative bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Cash out your crypto</h2>
          <p className="mt-3 text-white/70">
            Get a live quote and send your coins to receive instant settlement. Transparent pricing,
            real-time rates, and multiple payout options.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Asset</span>
                <select
                  value={coin}
                  onChange={(e) => setCoin(e.target.value)}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {COINS.map(c => (
                    <option key={c.symbol} value={c.symbol}>{c.symbol} · {c.name}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Amount ({coin})</span>
                <input
                  inputMode="decimal"
                  value={amountCrypto}
                  onChange={(e) => setAmountCrypto(e.target.value)}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder={`e.g. 250`}
                />
              </label>

              <label className="col-span-2 flex flex-col gap-2">
                <span className="text-sm text-white/70">Payout method</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'bank', label: 'Bank transfer' },
                    { id: 'card', label: 'Visa/Mastercard' },
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => setPayoutMethod(m.id)}
                      className={`rounded-lg border px-4 py-3 text-left transition ${
                        payoutMethod === m.id
                          ? 'border-cyan-400/60 bg-cyan-400/10'
                          : 'border-white/10 bg-black/30 hover:bg-white/5'
                      }`}
                    >
                      <div className="font-medium">{m.label}</div>
                      <div className="text-xs text-white/60">
                        {m.id === 'bank' ? 'Global SEPA / ACH / Faster Payments' : 'Instant payout to supported cards'}
                      </div>
                    </button>
                  ))}
                </div>
              </label>
            </div>

            <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Market rate</span>
                <span>1 {coin} = ${selected.price.toLocaleString()}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-white/70">Fee</span>
                <span>${quote.fee.toFixed(2)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-base font-medium">
                <span className="text-white">You receive</span>
                <span className="text-emerald-300">${quote.total.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Get deposit details <ArrowRight size={18} />
            </button>

            <p className="mt-3 flex items-center gap-2 text-xs text-white/60">
              <Wallet size={14} /> Send only {coin} to the provided address. Network fees may apply.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-medium">Why sell with us?</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• Aggregated liquidity from top exchanges for best execution</li>
              <li>• Low fees with transparent quotes and locks</li>
              <li>• Compliance-first with global coverage</li>
              <li>• Instant settlements to bank or card</li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="text-2xl font-semibold">$2B+</div>
                <div className="text-xs text-white/60">Processed volume</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="text-2xl font-semibold">120+</div>
                <div className="text-xs text-white/60">Supported countries</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <div className="text-xs text-white/60">Support</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="text-2xl font-semibold">0.4%</div>
                <div className="text-xs text-white/60">Typical fee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellForm;
