import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coins, TrendingUp } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';

interface PointsCardProps {
  onRedeemClick: () => void;
}

export const PointsCard: React.FC<PointsCardProps> = ({ onRedeemClick }) => {
  const { pointsData } = usePoints();

  if (!pointsData) return null;

  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-primary/10 bg-gradient-to-br from-background to-primary/5 hover-scale">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-accent/20">
            <Coins className="h-6 w-6 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Points Balance</p>
            <p className="text-2xl font-bold text-foreground">{pointsData.currentPoints.toLocaleString()}</p>
          </div>
        </div>
        <div className="text-right">
          <Badge variant="secondary" className="mb-2 capitalize">
            {pointsData.category}
          </Badge>
          <Button 
            size="sm" 
            onClick={onRedeemClick}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Redeem
          </Button>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4 mr-1" />
          Total Earned: {pointsData.totalEarned.toLocaleString()} points
        </div>
      </div>
    </Card>
  );
};