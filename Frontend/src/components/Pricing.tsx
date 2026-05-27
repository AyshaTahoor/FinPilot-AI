import React from 'react';
import { Check } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Beginner",
      price: "$0",
      description: "Ideal for retail investors getting started with fundamental equity research.",
      features: [
        "Up to 25 AI Stock summaries/mo",
        "Basic SEC filing parsing (10-K only)",
        "Standard watchlist tracking (1 list)",
        "Simulated virtual cash balance: $50K",
        "Standard latency query updates",
      ],
      cta: "Start Researching",
      popular: false,
      glowColor: "cyan" as const
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For quantitative researchers, active traders, and ambitious analysts.",
      features: [
        "Unlimited AI Stock summaries",
        "Deep semantic RAG filings search (10-K, 10-Q, earnings transcripts)",
        "Live Sentiment Hub (News, forums, global social indicators)",
        "Unlimited watchlist tracking with reordering",
        "Priority compute RAG speeds (<120ms)",
        "Real-time push notifications on target price changes",
      ],
      cta: "Upgrade to Professional",
      popular: true,
      glowColor: "purple" as const
    },
    {
      name: "Institutional",
      price: "Custom",
      description: "For family offices, trading desks, and quantitative asset corporations.",
      features: [
        "Dedicated isolated database instances",
        "Bespoke ingestion pipelines (upload custom private research files)",
        "Custom programmatic API key access tokens",
        "Dedicated support manager with slack priority channel",
        "Guaranteed 99.9% RAG engine uptime SLA",
      ],
      cta: "Contact Enterprise",
      popular: false,
      glowColor: "emerald" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-black/40">
      {/* Grid lines */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
            SUBSCRIPTIONS // TIER MATRICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
            Sleek Pricing,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
              Tailored To Your Scale.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-medium">
            Unlock advanced vectors, deep document retrieval systems, and continuous real-time market sentiment updates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <GlassCard
              key={idx}
              glow={tier.popular}
              glowColor={tier.glowColor}
              className={`
                h-full flex flex-col justify-between relative
                ${tier.popular ? 'border-primary/30 ring-2 ring-primary/10 shadow-[0_0_50px_rgba(0,242,254,0.05)]' : 'border-white/5'}
              `}
            >
              {/* Popular Tag */}
              {tier.popular && (
                <span className="absolute top-4 right-4 bg-stripe-gradient text-black font-bold text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider shadow-glow-primary">
                  MOST POPULAR
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm font-medium text-gray-500 font-mono ml-1">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 font-medium leading-relaxed mb-8">
                  {tier.description}
                </p>
                <div className="h-[1px] bg-white/5 mb-8" />

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs font-semibold text-gray-300">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`
                  w-full py-4.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95
                  ${
                    tier.popular
                      ? 'bg-stripe-gradient text-black shadow-glow-primary'
                      : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white'
                  }
                `}
              >
                {tier.cta}
              </button>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
