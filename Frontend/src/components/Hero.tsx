import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  // Generate random data points for the premium animated stock path
  const linePoints = [50, 80, 70, 110, 95, 140, 130, 180, 160, 220, 200, 260, 240, 310];
  const svgWidth = 800;
  const svgHeight = 250;
  
  // Format coordinate points for the SVG line
  const coordinates = linePoints.map((val, index) => {
    const x = (index / (linePoints.length - 1)) * svgWidth;
    const y = svgHeight - val;
    return `${x},${y}`;
  }).join(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden radial-grid-bg">
      {/* Dynamic Background Blooms */}
      <div className="ambient-bloom pulsing-bloom w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[20%]" />
      <div className="ambient-bloom pulsing-bloom w-[600px] h-[600px] bg-accent-purple/5 bottom-[10%] right-[10%]" />
      
      {/* Bloomberg-style Grid */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Sparkle Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
            Introducing FinPilot v2.5 RAG Core
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05]"
        >
          Institutional Financial Intelligence,{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#4facfe] to-[#8b5cf6] filter drop-shadow-glow">
            Powered by Generative AI.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-gray-400 max-w-3xl font-medium leading-relaxed"
        >
          Decipher complex SEC filings, track global market sentiment, and optimize virtual portfolios using a high-fidelity Bloomberg-grade visual interface.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-stripe-gradient text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-glow-primary flex items-center justify-center gap-2">
            Start Free Research
            <Zap className="w-4 h-4 stroke-[2.5]" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
            <Play className="w-4 h-4 text-primary fill-primary" />
            Watch 2-Min Demo
          </button>
        </motion.div>

        {/* Dynamic Live Visual Showcase (Bloomberg Terminal Aesthetics) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-20 w-full max-w-5xl rounded-2xl border border-white/5 bg-background-card/50 backdrop-blur-2xl p-4 md:p-6 shadow-glass relative group"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* Mock Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs text-gray-500 font-mono ml-4">TERMINAL // TICKER: NVDA</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" /> SEC VERIFIED
              </span>
              <span className="text-xs text-gray-500 font-mono">2026-05-27T17:49Z</span>
            </div>
          </div>

          {/* Graph Visualization */}
          <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-lg bg-black/60 p-4 border border-white/5">
            {/* Background Grid Lines inside Chart */}
            <div className="absolute inset-0 terminal-grid opacity-30" />
            
            {/* Chart HUD */}
            <div className="absolute top-4 left-4 z-10 flex flex-col items-start font-mono">
              <span className="text-xs text-gray-500">NVIDIA CORP. (NVDA)</span>
              <span className="text-3xl font-bold text-white tracking-tight mt-1">$134.82</span>
              <span className="text-sm font-semibold text-emerald-400 mt-0.5">+4.82% (+6.20)</span>
            </div>

            {/* SVG Interactive Candlestick Path */}
            <svg 
              viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
              className="absolute bottom-0 left-0 w-full h-[80%] overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Gradient beneath the Line */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area path */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                d={`M 0,${svgHeight} L ${coordinates} L ${svgWidth},${svgHeight} Z`}
                fill="url(#chartGradient)"
              />

              {/* Glowing Line Path */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                d={`M ${coordinates}`}
                fill="none"
                stroke="#00f2fe"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Active Ticker Pulse Ring */}
              <circle
                cx={svgWidth}
                cy={svgHeight - linePoints[linePoints.length - 1]}
                r="6"
                fill="#00f2fe"
                className="animate-ping origin-center"
              />
              <circle
                cx={svgWidth}
                cy={svgHeight - linePoints[linePoints.length - 1]}
                r="4"
                fill="#ffffff"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
