import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-energy-grid.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Energy Grid Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Animated Energy Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="energy-node w-16 h-16 absolute top-1/4 left-1/4 animate-pulse-energy" style={{ animationDelay: '0s' }}>
          <div className="energy-flow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="energy-node w-12 h-12 absolute top-1/3 right-1/3 animate-pulse-energy" style={{ animationDelay: '0.5s' }}>
          <div className="energy-flow" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="energy-node w-20 h-20 absolute bottom-1/3 left-1/3 animate-pulse-energy" style={{ animationDelay: '1s' }}>
          <div className="energy-flow" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="energy-node w-14 h-14 absolute bottom-1/4 right-1/4 animate-pulse-energy" style={{ animationDelay: '1.5s' }}>
          <div className="energy-flow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🔒 Encrypted • Verified • Decentralized
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="glow-text">Confidential</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            Renewable Credits
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Trade renewable energy credits with privacy-first encryption. 
          Verified by independent oracles, secured by blockchain technology.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm">End-to-End Encrypted</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm">Instant Verification</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm">Real-Time Trading</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/trading">
            <Button size="lg" className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Start Trading</span>
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary/50 hover:bg-primary/10">
              Explore Dashboard
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">$2.4M</div>
            <div className="text-sm text-muted-foreground">Volume Traded</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">1,247</div>
            <div className="text-sm text-muted-foreground">Active Credits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-success mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;