import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { usePoints, type Reward, type RedemptionHistory } from '@/hooks/usePoints';
import { useToast } from '@/hooks/use-toast';
import { Coins, Calendar, Gift, History } from 'lucide-react';

interface RedemptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedemptionModal: React.FC<RedemptionModalProps> = ({ isOpen, onClose }) => {
  const { pointsData, redemptionHistory, redeemReward, getAvailableRewards, getRedeemableRewards } = usePoints();
  const { toast } = useToast();
  const [isRedeeming, setIsRedeeming] = useState(false);

  const handleRedeem = async (reward: Reward) => {
    setIsRedeeming(true);
    
    const result = redeemReward(reward);
    
    if (result.success) {
      // Add coin burst animation to the button
      const button = document.activeElement as HTMLElement;
      if (button) {
        button.classList.add('coin-burst');
        setTimeout(() => button.classList.remove('coin-burst'), 800);
      }
      
      toast({
        title: "Reward Redeemed!",
        description: `You've successfully redeemed ${reward.title}`,
        variant: "default",
      });
    } else {
      toast({
        title: "Redemption Failed",
        description: result.message,
        variant: "destructive",
      });
    }
    
    setIsRedeeming(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const availableRewards = getAvailableRewards();
  const redeemableRewards = getRedeemableRewards();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Points Redemption Center
          </DialogTitle>
          <DialogDescription>
            Redeem your points for exclusive rewards and benefits
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
          <Coins className="h-8 w-8 text-accent" />
          <div>
            <p className="text-lg font-semibold">Current Balance: {pointsData?.currentPoints.toLocaleString()} points</p>
            <p className="text-sm text-muted-foreground capitalize">
              {pointsData?.category} Category
            </p>
          </div>
        </div>

        <Tabs defaultValue="rewards" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
            <TabsTrigger value="history">Redemption History</TabsTrigger>
          </TabsList>

          <TabsContent value="rewards" className="space-y-4">
            <ScrollArea className="h-[400px] pr-4">
              <div className="grid gap-4">
                {availableRewards.map((reward) => {
                  const canRedeem = redeemableRewards.some(r => r.id === reward.id);
                  
                  return (
                    <Card key={reward.id} className={`p-4 ${canRedeem ? 'border-accent/50' : 'opacity-60'}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="text-2xl">{reward.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{reward.title}</h3>
                              <Badge variant={canRedeem ? "default" : "secondary"} className="text-xs">
                                {reward.pointsRequired} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                            <Badge variant="outline" className="text-xs capitalize">
                              {reward.type}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          disabled={!canRedeem || isRedeeming}
                          onClick={() => handleRedeem(reward)}
                          className={canRedeem ? "bg-accent hover:bg-accent/90" : ""}
                        >
                          {canRedeem ? 'Redeem' : 'Insufficient Points'}
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <ScrollArea className="h-[400px] pr-4">
              {redemptionHistory.length === 0 ? (
                <div className="text-center py-8">
                  <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No redemptions yet</p>
                  <p className="text-sm text-muted-foreground">Start redeeming rewards to see your history here</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {redemptionHistory
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((redemption, index) => (
                      <Card key={redemption.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{redemption.rewardTitle}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {formatDate(redemption.date)}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-destructive">
                              -{redemption.pointsUsed} points
                            </p>
                            <Badge variant="outline" className="text-xs capitalize">
                              {redemption.category}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};