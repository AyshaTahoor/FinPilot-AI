import React from 'react';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'RAG Filings Parser', href: '#' },
      { label: 'Sentiment Hub', href: '#' },
      { label: 'Virtual Sandbox', href: '#' },
      { label: 'Price Alerts', href: '#' },
    ],
    analytics: [
      { label: 'Macro Metrics', href: '#' },
      { label: 'SEC 10-K Summaries', href: '#' },
      { label: 'Earnings Transcripts', href: '#' },
      { label: 'Peer Margins Table', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Research Hub', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'SLA Warranties', href: '#' },
      { label: 'Security Disclosures', href: '#' },
    ]
  };

  return (
    <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 terminal-grid pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Logo Brand Info */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-stripe-gradient flex items-center justify-center shadow-glow-primary">
                <TrendingUp className="w-4.5 h-4.5 text-black stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                FinPilot <span className="text-primary">AI</span>
              </span>
            </a>
            <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[280px]">
              Institutional-grade visual financial intelligence platforms powered by state-of-the-art Generative AI context systems.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-mono">
              Product Suite
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs font-semibold text-gray-500 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-mono">
              Core Research
            </h4>
            <ul className="space-y-3">
              {footerLinks.analytics.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs font-semibold text-gray-500 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-mono">
              FinPilot Corp
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs font-semibold text-gray-500 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 4 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-mono">
              Compliance
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs font-semibold text-gray-500 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="h-[1px] bg-white/5 w-full my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>SEC COMPLIANCE COMPATIBLE // FINRA CERTIFIED SANDBOX</span>
          </div>
          <span>&copy; {currentYear} FinPilot AI Corp. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};
