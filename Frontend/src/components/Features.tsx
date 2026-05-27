import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Radio, BarChart3, BellRing, BrainCircuit, Globe } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      title: "RAG Filings Parser",
      description: "Perform sub-second semantic queries over thousands of pages of SEC 10-K, 10-Q documents, and complex transcripts.",
      glowColor: "cyan" as const
    },
    {
      icon: <Radio className="w-6 h-6 text-accent-purple" />,
      title: "Real-Time Sentiment Hub",
      description: "Track live news trends, retail forums, and professional research sentiment indicators aggregated into custom indexing charts.",
      glowColor: "purple" as const
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent-emerald" />,
      title: "Advanced Portfolio Simulator",
      description: "Construct virtual portfolios, monitor asset allocations, and simulate mock balances with institutional analytics.",
      glowColor: "emerald" as const
    },
    {
      icon: <BellRing className="w-6 h-6 text-red-400" />,
      title: "Actionable Price Alerts",
      description: "Receive push notifications and real-time triggers for moving price averages, sentiment spikes, and AI summaries.",
      glowColor: "cyan" as const
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-400" />,
      title: "Instant Stock Summaries",
      description: "Avoid parsing tedious filings manually. Fetch cached, professional summaries of structural growth points and supply risks.",
      glowColor: "purple" as const
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Global Macro Insights",
      description: "Connect financial indicators directly to global microeconomic policies, supply networks, and sector guidance pipelines.",
      glowColor: "emerald" as const
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Bloomberg grid lines */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
            FEATURES // SYSTEM SUITE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
            Hedge-Fund Grade Intelligence,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
              Democratized For Retail.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 font-medium">
            FinPilot combines advanced vector search, live Socket engines, and simulated portfolio tracking inside a cohesive, beautifully responsive Stripe-inspired design.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                glow={true}
                glowColor={feat.glowColor}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-xs font-semibold text-primary group-hover:text-white cursor-pointer select-none">
                  Learn more &rarr;
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
