import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Lead Equity Analyst, Vance Capital",
      quote: "FinPilot has completely transformed our SEC audit workflow. What used to take our junior analysts three hours of manual index parsing is now synthesized in under ten seconds with verifiable source citations.",
      avatar: "M"
    },
    {
      name: "Elena Rostova",
      role: "Quantitative Advisor, Helius Advisory",
      quote: "The combination of real-time sentiment streams and the LLM prompt compression models is exceptional. I can query Tesla and NVIDIA's actual risks directly from their filings in high fidelity without fluff.",
      avatar: "E"
    },
    {
      name: "David Chen",
      role: "Retail Investor, Pro Tier Member",
      quote: "I've tried multiple AI stock programs, but FinPilot is by far the most premium experience. The UI feels like a Bloomberg Terminal mixed with Stripe aesthetics. Highly recommend the virtual portfolio simulator.",
      avatar: "D"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Background Blooms */}
      <div className="ambient-bloom pulsing-bloom w-[400px] h-[400px] bg-primary/5 top-[10%] right-[5%]" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
              CLIENT TESTIMONIALS // REVIEWS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Trusted By <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Active Analysts</span>
          </h2>
          <p className="mt-4 text-gray-400 font-medium">
            Hear from equity professionals, hedge fund quantitative managers, and ambitious retail investors worldwide.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard glow={true} className="h-full flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-primary/25 mb-4" />
                  <p className="text-sm text-gray-300 font-medium italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 mt-8 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-stripe-gradient flex items-center justify-center font-bold text-black text-sm">
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-gray-500 font-mono">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
