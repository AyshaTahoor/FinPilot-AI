import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Blooms */}
      <div className="ambient-bloom pulsing-bloom w-[500px] h-[500px] bg-primary/10 top-[20%] left-[10%]" />
      <div className="ambient-bloom pulsing-bloom w-[400px] h-[400px] bg-accent-purple/5 bottom-[10%] right-[20%]" />
      
      {/* Grid line overlay */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Glow CTA Card */}
        <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl p-8 md:p-16 overflow-hidden text-center shadow-[0_0_80px_rgba(0,242,254,0.02)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent-purple/5 pointer-events-none" />
          
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Action Icon */}
            <div className="w-14 h-14 rounded-2xl bg-stripe-gradient flex items-center justify-center shadow-glow-primary mb-8 animate-float">
              <TrendingUp className="w-7 h-7 text-black stroke-[2.5]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Decipher the Markets?<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple filter drop-shadow-glow">
                Claim Your Free Sandbox Account Today.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-400 font-medium max-w-2xl leading-relaxed">
              Join thousands of equity analysts, asset managers, and financial engineers auditing filings, tracking sentiments, and executing simulated transactions.
            </p>

            {/* Email form */}
            <form className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your professional email"
                className="flex-1 bg-black/40 border border-white/10 focus:border-primary focus:outline-none rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-stripe-gradient text-black font-bold text-sm px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-glow-primary flex items-center justify-center gap-2 flex-shrink-0"
              >
                Access FinPilot
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              SEC REGULATED SANDBOX ENCRYPTION // SECURE KEYCHAINS
            </span>

          </div>
        </div>

      </div>
    </section>
  );
};
