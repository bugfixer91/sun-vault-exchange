import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, TrendingUp, TrendingDown, Zap, Sun, Wind, Droplets } from "lucide-react";

interface TradeOrder {
  id: string;
  type: 'buy' | 'sell';
  energyType: 'solar' | 'wind' | 'hydro';
  amount: number;
  price: number;
  status: 'active' | 'completed' | 'pending';
  timestamp: string;
}

const mockOrders: TradeOrder[] = [
  { id: '1', type: 'buy', energyType: 'solar', amount: 100, price: 12.5, status: 'active', timestamp: '2024-01-15 14:30' },
  { id: '2', type: 'sell', energyType: 'wind', amount: 250, price: 11.8, status: 'completed', timestamp: '2024-01-15 13:45' },
  { id: '3', type: 'buy', energyType: 'hydro', amount: 150, price: 13.2, status: 'pending', timestamp: '2024-01-15 12:15' },
];

const Trading = () => {
  const getEnergyIcon = (type: string) => {
    switch (type) {
      case 'solar': return <Sun className="w-4 h-4" />;
      case 'wind': return <Wind className="w-4 h-4" />;
      case 'hydro': return <Droplets className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="glow-text">Energy Trading</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Buy and sell renewable energy credits with end-to-end encryption
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trading Form */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-card/50 border-primary/20">
                  <h3 className="text-xl font-semibold mb-4">Place Order</h3>
                  
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Button variant="default" className="flex-1">Buy</Button>
                      <Button variant="outline" className="flex-1">Sell</Button>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Energy Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select energy type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solar">☀️ Solar</SelectItem>
                          <SelectItem value="wind">💨 Wind</SelectItem>
                          <SelectItem value="hydro">💧 Hydro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Amount (Credits)</label>
                      <Input type="number" placeholder="100" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Price per Credit ($)</label>
                      <Input type="number" placeholder="12.50" step="0.01" />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Total Cost:</span>
                        <span className="font-medium">$1,250.00</span>
                      </div>
                      <div className="flex justify-between text-sm mb-4">
                        <span>Network Fee:</span>
                        <span className="font-medium">$2.50</span>
                      </div>
                      <Button className="w-full">
                        Place Order
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Market Data & Orders */}
              <div className="lg:col-span-2 space-y-8">
                {/* Market Prices */}
                <Card className="p-6 bg-card/50 border-accent/20">
                  <h3 className="text-xl font-semibold mb-4">Market Prices</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-center justify-center mb-2">
                        <Sun className="w-6 h-6 text-yellow-500 mr-2" />
                        <span className="font-medium">Solar</span>
                      </div>
                      <div className="text-2xl font-bold">$12.45</div>
                      <div className="flex items-center justify-center text-success text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +2.1%
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="flex items-center justify-center mb-2">
                        <Wind className="w-6 h-6 text-blue-500 mr-2" />
                        <span className="font-medium">Wind</span>
                      </div>
                      <div className="text-2xl font-bold">$11.82</div>
                      <div className="flex items-center justify-center text-destructive text-sm">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        -0.8%
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-success/5 border border-success/20">
                      <div className="flex items-center justify-center mb-2">
                        <Droplets className="w-6 h-6 text-blue-600 mr-2" />
                        <span className="font-medium">Hydro</span>
                      </div>
                      <div className="text-2xl font-bold">$13.15</div>
                      <div className="flex items-center justify-center text-success text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +1.5%
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Recent Orders */}
                <Card className="p-6 bg-card/50 border-secondary/20">
                  <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
                  <div className="space-y-3">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            {getEnergyIcon(order.energyType)}
                            <span className="font-medium capitalize">{order.energyType}</span>
                          </div>
                          <Badge variant={order.type === 'buy' ? 'default' : 'secondary'}>
                            {order.type.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{order.amount} credits @ ${order.price}</div>
                          <div className="text-sm text-muted-foreground">{order.timestamp}</div>
                        </div>
                        <Badge 
                          variant={
                            order.status === 'completed' ? 'default' : 
                            order.status === 'active' ? 'secondary' : 'outline'
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trading;