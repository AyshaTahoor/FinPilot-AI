import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { StockAssistantShowcase } from './components/StockAssistantShowcase';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-300 antialiased selection:bg-primary/30 selection:text-white">
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 radial-grid-bg pointer-events-none -z-20" />
      
      {/* Standardized header navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main>
        {/* Apple/Stripe inspired responsive visual hero */}
        <Hero />
        
        {/* Real-time statistics banner */}
        <Stats />
        
        {/* Stripe feature columns grid */}
        <Features />
        
        {/* Interactive simulated AI chat chatbot hub */}
        <StockAssistantShowcase />
        
        {/* Customer review grids */}
        <Testimonials />
        
        {/* Subscriptions breakdown */}
        <Pricing />
        
        {/* Final conversion CTA card */}
        <CTA />
      </main>

      {/* Corporate compliance footer */}
      <Footer />
    </div>
  );
}

export default App;
