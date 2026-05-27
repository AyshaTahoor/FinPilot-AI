import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, Database } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  isStreaming?: boolean;
  widget?: React.ReactNode;
}

export const StockAssistantShowcase: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Welcome to FinPilot Research Hub. Ask me to parse SEC filings, compare peer fundamental margins, or synthesize earnings transcripts. What stock are we examining today?",
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const preSets = [
    { label: "Summarize Apple's Generative AI Spend", query: "Summarize Apple's Generative AI spend from their latest Q4 filings." },
    { label: "Compare TSLA vs BYD margins", query: "Compare Tesla and BYD gross margins side by side." },
    { label: "Show NVDA risk exposure", query: "What are the core supply chain risk sectors for NVIDIA?" }
  ];

  const handleQuery = (query: string) => {
    if (isTyping) return;
    
    // 1. Add User query
    const userMsgId = Math.random().toString();
    const newUserMsg: Message = { id: userMsgId, sender: 'user', text: query };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // 2. Mock Assistant Processing
    setTimeout(() => {
      let responseText = "";
      let widget: React.ReactNode = null;

      if (query.includes("Apple")) {
        responseText = "### Apple Q4 Generative AI Capital Allocation Summary\n\nBased on Apple's latest 10-K filings (Section 7, page 42), Capital Expenditures (CapEx) allocated to artificial intelligence infrastructure and data centers saw a **34% YoY increase**, totaling **$12.4 Billion**.\n\nKey Core Highlights:\n- **Silicon Integration**: Shifted 40% of production capacity towards custom Apple Silicon TPU hardware.\n- **On-Device R&D**: Accelerated neural engine integrations on custom M4/A18 chips.\n- **Hyperscaler Partners**: Diversified model orchestration costs between internal private cloud storage nodes and strategic GCP/AWS servers.";
      } else if (query.includes("Tesla") || query.includes("gross margins")) {
        responseText = "### Gross Margin Analysis: Tesla Inc. (TSLA) vs. BYD Co. (BYD)\n\nHere is a synthesized snapshot comparison of their recent quarterly fundamental margins. Operating cost structures indicate BYD's vertical supply model provides substantial cushion relative to TSLA's platform transition.";
        widget = (
          <div className="mt-4 rounded-xl border border-white/5 bg-black/40 overflow-hidden font-mono text-xs w-full">
            <div className="grid grid-cols-3 bg-white/[0.03] p-3 font-semibold text-gray-400 border-b border-white/5">
              <span>Metric (Q1 2026)</span>
              <span>Tesla (TSLA)</span>
              <span>BYD Co. (BYD)</span>
            </div>
            <div className="grid grid-cols-3 p-3 border-b border-white/5">
              <span className="text-gray-400">Gross Margin</span>
              <span className="text-white">17.2%</span>
              <span className="text-emerald-400 font-bold">21.8%</span>
            </div>
            <div className="grid grid-cols-3 p-3 border-b border-white/5">
              <span className="text-gray-400">Operating Margin</span>
              <span className="text-white">5.4%</span>
              <span className="text-emerald-400 font-bold">7.9%</span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="text-gray-400">R&D CapEx Ratio</span>
              <span className="text-primary font-bold">4.8%</span>
              <span className="text-white">5.9%</span>
            </div>
          </div>
        );
      } else {
        responseText = "### NVIDIA Corp. (NVDA) Core Risk Profile Synthesis\n\nNVIDIA's latest quarterly SEC filing lists three major hazard categories affecting forward guidance metrics:\n\n1. **Geopolitical Export Compliance**: Restrictive trade bans on H20/B20 model silicon variants restrict 15% of APAC client backlogs.\n2. **Advanced Packaging Bottlenecks**: High dependence on TSMC's CoWoS silicon-on-wafer packaging throughput lines poses localized structural risks.\n3. **Hyperscaler Insourcing**: Major consumers (Meta, Microsoft, AWS) are designing bespoke silicon accelerators, presenting mid-term margin resistance.";
      }

      // Add dynamic stream effect
      const responseMsgId = Math.random().toString();
      const newResponseMsg: Message = { 
        id: responseMsgId, 
        sender: 'assistant', 
        text: '', 
        isStreaming: true 
      };
      
      setMessages(prev => [...prev, newResponseMsg]);
      
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < responseText.length) {
          setMessages(prev => prev.map(msg => {
            if (msg.id === responseMsgId) {
              return { ...msg, text: responseText.slice(0, charIndex + 1) };
            }
            return msg;
          }));
          charIndex += 4; // stream faster
        } else {
          clearInterval(interval);
          setMessages(prev => prev.map(msg => {
            if (msg.id === responseMsgId) {
              return { ...msg, isStreaming: false, widget };
            }
            return msg;
          }));
          setIsTyping(false);
        }
      }, 15);

    }, 1000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    handleQuery(inputText);
  };

  return (
    <section id="assistant" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Meet Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Hedge-Fund Assistant</span>
          </h2>
          <p className="mt-4 text-gray-400 font-medium">
            Simulate deep cognitive financial audits. Click a preset query below to experience how FinPilot parses files and tables in real-time.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Preset Queries Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">
              Sample Research Queries
            </span>
            {preSets.map((preset, index) => (
              <button
                key={index}
                onClick={() => handleQuery(preset.query)}
                disabled={isTyping}
                className="w-full text-left bg-background-card/40 hover:bg-background-card/80 border border-white/5 hover:border-primary/20 rounded-xl p-4 transition-all duration-300 group flex items-start space-x-3 text-sm"
              >
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-300 font-semibold group-hover:text-white transition-colors">
                    {preset.label}
                  </span>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                    {preset.query}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Chat Window */}
          <div className="lg:col-span-8">
            <GlassCard className="border border-white/10 overflow-hidden !p-0 shadow-glass">
              {/* Window Header */}
              <div className="bg-white/[0.02] border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-stripe-gradient flex items-center justify-center shadow-glow-primary">
                    <Bot className="w-4.5 h-4.5 text-black" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">FinPilot AI Agent</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> RAG CORE V2.5 SECURE
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-primary" /> Pinecone Vector DB
                  </span>
                </div>
              </div>

              {/* Chat Message Scroll */}
              <div className="h-96 overflow-y-auto p-6 flex flex-col space-y-6 scrollbar">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {/* Bot Icon */}
                    {msg.sender === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}

                    {/* Chat Bubble */}
                    <div
                      className={`
                        rounded-2xl max-w-[85%] p-4 text-sm font-medium leading-relaxed
                        ${
                          msg.sender === 'user'
                            ? 'bg-stripe-gradient text-black font-semibold rounded-tr-none'
                            : 'bg-white/[0.02] border border-white/5 text-gray-300 rounded-tl-none font-sans'
                        }
                      `}
                    >
                      {/* Markdown Parsing Mock */}
                      <div className="whitespace-pre-wrap">
                        {msg.text.split('\n\n').map((paragraph, pIdx) => {
                          if (paragraph.startsWith('###')) {
                            return (
                              <h4 key={pIdx} className="text-base font-bold text-white mb-2 tracking-tight">
                                {paragraph.replace('###', '').trim()}
                              </h4>
                            );
                          }
                          if (paragraph.startsWith('-')) {
                            return (
                              <ul key={pIdx} className="list-disc pl-4 space-y-1 mb-2 text-gray-300">
                                {paragraph.split('\n').map((li, liIdx) => (
                                  <li key={liIdx}>{li.replace('-', '').trim()}</li>
                                ))}
                              </ul>
                            );
                          }
                          return <p key={pIdx} className="mb-2 text-gray-300">{paragraph}</p>;
                        })}
                      </div>

                      {/* Optional Interactive Custom Widget */}
                      {msg.widget}
                    </div>

                    {/* User Icon */}
                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Animated Typing Indicator */}
                {isTyping && !messages[messages.length - 1].isStreaming && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl rounded-tl-none p-4 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="p-4 bg-white/[0.01] border-t border-white/5 flex items-center gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about SEC filings, margin breakdowns, or ticker risk..."
                  className="flex-1 bg-black/40 border border-white/5 hover:border-white/10 focus:border-primary rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputText.trim()}
                  className="w-11 h-11 rounded-xl bg-stripe-gradient hover:scale-105 active:scale-95 transition-transform flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-4.5 h-4.5 text-black stroke-[2.5]" />
                </button>
              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
