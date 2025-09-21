import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sun, Wind, Droplets, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface CreditHolding {
  id: string;
  energyType: 'solar' | 'wind' | 'hydro';
  amount: number;
  purchasePrice: number;
  currentPrice: number;
  status: 'verified' | 'pending' | 'expired';
  expiryDate: string;
  location: string;
  carbonOffset: number;
}

const mockCredits: CreditHolding[] = [
  { 
    id: '1', 
    energyType: 'solar', 
    amount: 150, 
    purchasePrice: 12.20, 
    currentPrice: 12.45, 
    status: 'verified', 
    expiryDate: '2025-12-31',
    location: 'California Solar Farm',
    carbonOffset: 75.5
  },
  { 
    id: '2', 
    energyType: 'wind', 
    amount: 200, 
    purchasePrice: 11.90, 
    currentPrice: 11.82, 
    status: 'verified', 
    expiryDate: '2025-11-15',
    location: 'Texas Wind Park',
    carbonOffset: 102.0
  },
  { 
    id: '3', 
    energyType: 'hydro', 
    amount: 100, 
    purchasePrice: 13.00, 
    currentPrice: 13.15, 
    status: 'pending', 
    expiryDate: '2026-03-20',
    location: 'Oregon Hydro Plant',
    carbonOffset: 55.2
  },
];

const Credits = () => {
  const getEnergyIcon = (type: string) => {
    switch (type) {
      case 'solar': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'wind': return <Wind className="w-5 h-5 text-blue-500" />;
      case 'hydro': return <Droplets className="w-5 h-5 text-blue-600" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'pending': return <Clock className="w-4 h-4 text-warning" />;
      case 'expired': return <AlertCircle className="w-4 h-4 text-destructive" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const totalCredits = mockCredits.reduce((sum, credit) => sum + credit.amount, 0);
  const totalValue = mockCredits.reduce((sum, credit) => sum + (credit.amount * credit.currentPrice), 0);
  const totalCarbonOffset = mockCredits.reduce((sum, credit) => sum + credit.carbonOffset, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="glow-text">Credit Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your renewable energy credits and track environmental impact
              </p>
            </div>

            {/* Portfolio Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-card/50 border-primary/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Credits</p>
                    <p className="text-2xl font-bold">{totalCredits}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-success/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Portfolio Value</p>
                    <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-accent/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Wind className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Carbon Offset</p>
                    <p className="text-2xl font-bold">{totalCarbonOffset.toFixed(1)} tons</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-secondary/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Verified</p>
                    <p className="text-2xl font-bold">{mockCredits.filter(c => c.status === 'verified').length}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Credit Holdings */}
            <Card className="p-6 bg-card/50 border-primary/20 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Your Credit Holdings</h3>
                <Button>Purchase Credits</Button>
              </div>

              <div className="space-y-4">
                {mockCredits.map((credit) => (
                  <div key={credit.id} className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                      {/* Energy Type */}
                      <div className="flex items-center space-x-3">
                        {getEnergyIcon(credit.energyType)}
                        <div>
                          <div className="font-medium capitalize">{credit.energyType}</div>
                          <div className="text-sm text-muted-foreground">{credit.location}</div>
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="text-center">
                        <div className="text-xl font-bold">{credit.amount}</div>
                        <div className="text-sm text-muted-foreground">Credits</div>
                      </div>

                      {/* Price Performance */}
                      <div className="text-center">
                        <div className="text-lg font-medium">${credit.currentPrice}</div>
                        <div className={`text-sm ${
                          credit.currentPrice > credit.purchasePrice ? 'text-success' : 'text-destructive'
                        }`}>
                          {credit.currentPrice > credit.purchasePrice ? '+' : ''}
                          {((credit.currentPrice - credit.purchasePrice) / credit.purchasePrice * 100).toFixed(1)}%
                        </div>
                      </div>

                      {/* Carbon Offset */}
                      <div className="text-center">
                        <div className="text-lg font-medium">{credit.carbonOffset} tons</div>
                        <div className="text-sm text-muted-foreground">CO₂ Offset</div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(credit.status)}
                        <Badge variant={
                          credit.status === 'verified' ? 'default' : 
                          credit.status === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {credit.status}
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Transfer</Button>
                        <Button size="sm" variant="outline">Retire</Button>
                      </div>
                    </div>

                    {/* Expiry Progress */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Expires: {credit.expiryDate}</span>
                        <span>85% time remaining</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Environmental Impact */}
            <Card className="p-6 bg-card/50 border-success/20">
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-success/5 border border-success/20">
                  <div className="text-3xl font-bold text-success mb-2">{totalCarbonOffset.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">Total Carbon Offset (tons)</div>
                  <div className="mt-2 text-xs text-success">Equivalent to planting 586 trees</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">{(totalCredits * 1.2).toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">MWh Clean Energy Supported</div>
                  <div className="mt-2 text-xs text-primary">Powers 42 homes for a month</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy Portfolio</div>
                  <div className="mt-2 text-xs text-accent">Above industry average</div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Credits;