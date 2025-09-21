import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity, Target } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="glow-text">Analytics Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive insights into market trends and portfolio performance
              </p>
            </div>

            <Tabs defaultValue="market" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="market">Market Analysis</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio Performance</TabsTrigger>
                <TabsTrigger value="trading">Trading Insights</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>

              {/* Market Analysis */}
              <TabsContent value="market" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card/50 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Market Overview</h3>
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Volume (24h)</span>
                        <span className="font-medium">$2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Active Traders</span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Price Change</span>
                        <span className="text-success font-medium">+3.2%</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-success/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Solar Credits</h3>
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">$12.45</div>
                      <div className="text-sm text-muted-foreground">Current Price</div>
                      <Badge variant="outline" className="mt-2 border-success text-success">
                        +2.1% (24h)
                      </Badge>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Wind Credits</h3>
                      <TrendingDown className="w-5 h-5 text-destructive" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive mb-1">$11.82</div>
                      <div className="text-sm text-muted-foreground">Current Price</div>
                      <Badge variant="outline" className="mt-2 border-destructive text-destructive">
                        -0.8% (24h)
                      </Badge>
                    </div>
                  </Card>
                </div>

                {/* Market Chart Placeholder */}
                <Card className="p-6 bg-card/50 border-secondary/20">
                  <h3 className="font-semibold mb-4">Price Trends (7 Days)</h3>
                  <div className="h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-muted-foreground mb-2 mx-auto" />
                      <p className="text-muted-foreground">Interactive price chart would appear here</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Portfolio Performance */}
              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card/50 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Portfolio Value</h3>
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$12,450</div>
                      <div className="text-success">+$540 (4.5%) this month</div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Asset Allocation</h3>
                      <PieChart className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Solar (60%)</span>
                        <span className="font-medium">$7,470</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wind (30%)</span>
                        <span className="font-medium">$3,735</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hydro (10%)</span>
                        <span className="font-medium">$1,245</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 bg-card/50 border-success/20">
                  <h3 className="font-semibold mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-success/5 border border-success/20">
                      <div className="text-xl font-bold text-success">+15.2%</div>
                      <div className="text-sm text-muted-foreground">YTD Return</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-xl font-bold text-primary">0.85</div>
                      <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="text-xl font-bold text-accent">8.2%</div>
                      <div className="text-sm text-muted-foreground">Volatility</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                      <div className="text-xl font-bold text-secondary">92</div>
                      <div className="text-sm text-muted-foreground">ESG Score</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Trading Insights */}
              <TabsContent value="trading" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card/50 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Total Trades</h3>
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">247</div>
                      <div className="text-sm text-muted-foreground">Last 30 days</div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-success/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Success Rate</h3>
                      <Target className="w-5 h-5 text-success" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">68%</div>
                      <div className="text-sm text-muted-foreground">Profitable trades</div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Avg. Trade Size</h3>
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">$1,245</div>
                      <div className="text-sm text-muted-foreground">Per transaction</div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 bg-card/50 border-secondary/20">
                  <h3 className="font-semibold mb-4">Recent Trading Activity</h3>
                  <div className="space-y-3">
                    {[
                      { type: 'BUY', asset: 'Solar Credits', amount: '150', price: '$12.45', time: '2 hours ago', profit: '+$37.50' },
                      { type: 'SELL', asset: 'Wind Credits', amount: '200', price: '$11.82', time: '5 hours ago', profit: '+$84.00' },
                      { type: 'BUY', asset: 'Hydro Credits', amount: '100', price: '$13.15', time: '1 day ago', profit: '-$12.30' },
                    ].map((trade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                        <div className="flex items-center space-x-3">
                          <Badge variant={trade.type === 'BUY' ? 'default' : 'secondary'}>
                            {trade.type}
                          </Badge>
                          <span className="font-medium">{trade.asset}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{trade.amount} @ {trade.price}</div>
                          <div className="text-sm text-muted-foreground">{trade.time}</div>
                        </div>
                        <div className={`font-medium ${trade.profit.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                          {trade.profit}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Sustainability */}
              <TabsContent value="sustainability" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card/50 border-success/20">
                    <h3 className="font-semibold mb-4">Environmental Impact</h3>
                    <div className="space-y-4">
                      <div className="text-center p-4 rounded-lg bg-success/5 border border-success/20">
                        <div className="text-2xl font-bold text-success">232.7 tons</div>
                        <div className="text-sm text-muted-foreground">CO₂ Offset This Year</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="text-2xl font-bold text-primary">540 MWh</div>
                        <div className="text-sm text-muted-foreground">Clean Energy Supported</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 border-accent/20">
                    <h3 className="font-semibold mb-4">Sustainability Goals</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Carbon Neutral Goal</span>
                          <span>78% complete</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-success h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Renewable Portfolio</span>
                          <span>95% complete</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 bg-card/50 border-primary/20">
                  <h3 className="font-semibold mb-4">Impact Comparison</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-lg font-bold">586 trees</div>
                      <div className="text-sm text-muted-foreground">Equivalent planted</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-lg font-bold">125 homes</div>
                      <div className="text-sm text-muted-foreground">Powered for a month</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-lg font-bold">45,000 miles</div>
                      <div className="text-sm text-muted-foreground">Emissions avoided</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;