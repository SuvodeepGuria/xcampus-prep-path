import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, TrendingUp } from 'lucide-react';

interface SwagItem {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  category: 'student' | 'professional';
  icon: string;
  image?: string;
  inStock: boolean;
}

interface SwagCardProps {
  swagItems: SwagItem[];
  userPoints: number;
  onRedeem: (item: SwagItem) => void;
}

export const SwagCard: React.FC<SwagCardProps> = ({ swagItems, userPoints, onRedeem }) => {
  const availableSwags = swagItems.filter(item => item.inStock);
  const redeemableSwags = availableSwags.filter(item => item.pointsRequired <= userPoints);

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 bg-gradient-to-br from-background to-accent/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-accent/20">
            <Gift className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">XCampus Swags</h3>
            <p className="text-sm text-muted-foreground">Exclusive merchandise & goodies</p>
          </div>
        </div>
        <Badge variant="secondary" className="capitalize">
          {redeemableSwags.length} Available
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableSwags.slice(0, 4).map((item) => {
          const canRedeem = item.pointsRequired <= userPoints;
          
          return (
            <div key={item.id} className={`p-4 rounded-lg border ${canRedeem ? 'border-accent/50 bg-accent/5' : 'border-border/50 opacity-60'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl">{item.icon}</div>
                <Badge variant={canRedeem ? "default" : "secondary"} className="text-xs">
                  {item.pointsRequired} pts
                </Badge>
              </div>
              <h4 className="font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
              <Button
                size="sm"
                disabled={!canRedeem}
                onClick={() => canRedeem && onRedeem(item)}
                className={`w-full text-xs ${canRedeem ? 'bg-accent hover:bg-accent/90' : ''}`}
              >
                {canRedeem ? 'Redeem' : 'Need More Points'}
              </Button>
            </div>
          );
        })}
      </div>

      {availableSwags.length > 4 && (
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View All Swags
          </Button>
        </div>
      )}
    </Card>
  );
};