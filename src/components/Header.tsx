import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Header = () => {
  const { isConnected } = useAccount();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-2">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold glow-text">Sun Vault Exchange</h1>
              <div className="text-xs text-muted-foreground">Confidential Renewable Credits</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/trading" className="text-foreground hover:text-primary transition-colors">
              Trading
            </Link>
            <Link to="/credits" className="text-foreground hover:text-primary transition-colors">
              Credits
            </Link>
            <Link to="/analytics" className="text-foreground hover:text-primary transition-colors">
              Analytics
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <ConnectButton />
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;