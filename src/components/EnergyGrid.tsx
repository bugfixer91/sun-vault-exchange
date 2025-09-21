import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

interface GridNode {
  id: string;
  type: 'solar' | 'wind' | 'hydro' | 'verified';
  credits: number;
  status: 'active' | 'pending' | 'verified';
  price: number;
  position: { x: number; y: number };
}

const gridNodes: GridNode[] = [
  { id: '1', type: 'solar', credits: 245, status: 'verified', price: 12.5, position: { x: 20, y: 25 } },
  { id: '2', type: 'wind', credits: 180, status: 'active', price: 11.8, position: { x: 60, y: 35 } },
  { id: '3', type: 'hydro', credits: 320, status: 'pending', price: 13.2, position: { x: 40, y: 60 } },
  { id: '4', type: 'solar', credits: 95, status: 'verified', price: 12.1, position: { x: 75, y: 45 } },
  { id: '5', type: 'wind', credits: 156, status: 'active', price: 11.9, position: { x: 30, y: 75 } },
  { id: '6', type: 'verified', credits: 420, status: 'verified', price: 14.0, position: { x: 80, y: 25 } },
];

const EnergyGrid = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const getNodeIcon = (type: GridNode['type']) => {
    switch (type) {
      case 'solar': return '☀️';
      case 'wind': return '💨';
      case 'hydro': return '💧';
      case 'verified': return '✅';
      default: return '⚡';
    }
  };

  const getStatusColor = (status: GridNode['status']) => {
    switch (status) {
      case 'verified': return 'success';
      case 'active': return 'primary';
      case 'pending': return 'warning';
      default: return 'secondary';
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="glow-text">Live Energy Grid</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time visualization of renewable energy credits trading across our encrypted network
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Grid Visualization */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card/50 border-primary/20 relative overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              {/* Grid Background */}
              <div className="absolute inset-0" 
                   style={{
                     backgroundImage: `
                       linear-gradient(rgba(var(--primary-rgb, 59 130 246) / 0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(var(--primary-rgb, 59 130 246) / 0.1) 1px, transparent 1px)
                     `,
                     backgroundSize: '30px 30px'
                   }}>
              </div>

              {/* Energy Nodes */}
              {gridNodes.map((node, index) => (
                <div
                  key={node.id}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    selectedNode === node.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                  }`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                >
                  <div className={`energy-node w-16 h-16 flex items-center justify-center text-2xl animate-pulse-energy`}
                       style={{ animationDelay: `${index * 0.5}s` }}>
                    {getNodeIcon(node.type)}
                    <div className="energy-flow" style={{ animationDelay: `${index * 0.3}s` }} />
                  </div>
                  
                  {/* Node Info Popup */}
                  {selectedNode === node.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-3 bg-popover border border-border rounded-lg shadow-lg animate-fade-in z-30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium capitalize">{node.type} Credits</span>
                        <Badge variant={getStatusColor(node.status) as any} className="text-xs">
                          {node.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Credits:</span>
                          <span className="font-medium">{node.credits}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price:</span>
                          <span className="font-medium">${node.price}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {gridNodes.map((node, index) => 
                  gridNodes.slice(index + 1).map(otherNode => (
                    <line
                      key={`${node.id}-${otherNode.id}`}
                      x1={`${node.position.x}%`}
                      y1={`${node.position.y}%`}
                      x2={`${otherNode.position.x}%`}
                      y2={`${otherNode.position.y}%`}
                      stroke="hsl(var(--primary))"
                      strokeWidth="1"
                      strokeOpacity="0.2"
                      className="animate-pulse"
                    />
                  ))
                )}
              </svg>
            </Card>
          </div>

          {/* Grid Stats */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-success/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-success/10">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Network Status</h3>
                  <p className="text-sm text-muted-foreground">All systems operational</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Active Nodes</span>
                  <span className="font-medium">{gridNodes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Credits</span>
                  <span className="font-medium">{gridNodes.reduce((sum, node) => sum + node.credits, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Price</span>
                  <span className="font-medium">${(gridNodes.reduce((sum, node) => sum + node.price, 0) / gridNodes.length).toFixed(2)}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Encryption Status</h3>
                  <p className="text-sm text-muted-foreground">All trades encrypted</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm">Oracle verification active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm">End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm">Real-time monitoring</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-accent/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Trading Activity</h3>
                  <p className="text-sm text-muted-foreground">Last 24 hours</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">247</div>
                <div className="text-sm text-muted-foreground">Trades completed</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyGrid;