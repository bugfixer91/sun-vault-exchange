import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card/30 border-t border-border overflow-hidden">
      {/* Animated Solar Panels Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Solar Panel Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-primary/20 to-primary/5 border-l border-primary/30"
              style={{
                left: `${i * 8.33}%`,
                width: '8.33%',
                height: '100%',
                transform: `skewX(-15deg) translateX(${i * 2}px)`,
              }}
            >
              {/* Animated Energy Beams */}
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="absolute bottom-0 left-1/2 w-1 bg-gradient-to-t from-accent via-primary to-transparent solar-beam"
                  style={{
                    height: '60px',
                    animationDelay: `${i * 0.2 + j * 0.1}s`,
                    transform: 'translateX(-50%)',
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Encrypted Data Streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-success/40 to-transparent animate-flow-energy"
              style={{
                top: `${20 + i * 10}%`,
                width: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s',
              }}
            >
              <div className="text-xs text-success/60 absolute left-4 -top-2 font-mono">
                {i % 2 === 0 ? '01110010 01100101 01101110...' : '01100101 01101110 01100101...'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-2">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold glow-text">EnerGrid</h3>
                <div className="text-xs text-muted-foreground">Confidential Credits</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The future of renewable energy trading with privacy-first encryption and blockchain verification.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trading</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Verification</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">White Paper</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Security</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Encryption</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Oracle Network</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Audits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 EnerGrid. All rights reserved. Powered by renewable energy.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Network operational • Oracle verified • Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;