import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border-r border-white/5 last:border-r-0 md:border-r">
      <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <motion.span
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-b from-white to-gray-400"
      >
        {value}
      </motion.span>
      <span className="text-sm font-semibold text-primary mt-2 uppercase tracking-widest font-mono">
        {label}
      </span>
      <p className="text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Stats: React.FC = () => {
  const statsList = [
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      value: "99.4%",
      label: "Accuracy Rating",
      description: "Hedge-fund precision parsing raw tabular items from corporate SEC reports."
    },
    {
      icon: <Zap className="w-5 h-5 text-accent-purple" />,
      value: "< 120ms",
      label: "API Query Speed",
      description: "Sub-second streaming for immediate cognitive RAG document synthesis queries."
    },
    {
      icon: <Activity className="w-5 h-5 text-accent-emerald" />,
      value: "$42B+",
      label: "Simulated Volume",
      description: "Virtual transactions tracked within high-performance user test sandboxes."
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      value: "250K+",
      label: "Global Investors",
      description: "Professional researchers, analysts, and retail investors tracking markets daily."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black/60 border-y border-white/5">
      {/* Background Bloomberg Grid */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {statsList.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
