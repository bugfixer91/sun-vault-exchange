import Header from "@/components/Header";
import EnergyGrid from "@/components/EnergyGrid";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Dashboard Header */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="glow-text">Energy Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Monitor your renewable energy credits and network activity
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-card/50 border-primary/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Portfolio Value</p>
                    <p className="text-2xl font-bold">$12,450</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-success/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Credits</p>
                    <p className="text-2xl font-bold">1,247</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-accent/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">24h Change</p>
                    <p className="text-2xl font-bold text-success">+5.2%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-secondary/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Verified Credits</p>
                    <p className="text-2xl font-bold">1,186</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <EnergyGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;