import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Heart, MessageSquare, Share2, Award } from 'lucide-react';
import { useAuthContext } from '@/hooks/useAuth';

interface KarmaCardProps {
  onViewKarma: () => void;
}

export const KarmaCard: React.FC<KarmaCardProps> = ({ onViewKarma }) => {
  const { user } = useAuthContext();
  const [karma, setKarma] = useState(0);
  const [recentActivity, setRecentActivity] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      const storedKarma = localStorage.getItem(`karma_${user.id}`);
      const storedActivity = localStorage.getItem(`karma_activity_${user.id}`);
      
      if (storedKarma) {
        setKarma(parseInt(storedKarma));
      } else {
        // Initialize karma based on user type
        const initialKarma = user.role === 'student' ? 10 : 50;
        setKarma(initialKarma);
        localStorage.setItem(`karma_${user.id}`, initialKarma.toString());
      }
      
      if (storedActivity) {
        setRecentActivity(JSON.parse(storedActivity));
      }
    }
  }, [user]);

  const addKarma = (points: number, reason: string) => {
    if (!user) return;
    
    const newKarma = karma + points;
    setKarma(newKarma);
    
    const newActivity = [`+${points} ${reason}`, ...recentActivity.slice(0, 4)];
    setRecentActivity(newActivity);
    
    localStorage.setItem(`karma_${user.id}`, newKarma.toString());
    localStorage.setItem(`karma_activity_${user.id}`, JSON.stringify(newActivity));
    
    // Add visual feedback
    const karmaElement = document.querySelector('.karma-display');
    if (karmaElement) {
      karmaElement.classList.add('karma-gain');
      setTimeout(() => karmaElement.classList.remove('karma-gain'), 600);
    }
  };

  const getKarmaColor = () => {
    if (karma >= 1000) return 'text-amber-500';
    if (karma >= 500) return 'text-emerald-500';
    if (karma >= 100) return 'text-blue-500';
    return 'text-muted-foreground';
  };

  const getKarmaRank = () => {
    if (karma >= 1000) return 'Expert';
    if (karma >= 500) return 'Advanced';
    if (karma >= 100) return 'Contributor';
    return 'Beginner';
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-primary/10 bg-gradient-to-br from-background to-primary/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-accent/20">
            <Award className="h-6 w-6 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Karma Score</p>
            <p className={`text-2xl font-bold karma-display ${getKarmaColor()}`}>
              {karma.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <Badge variant="secondary" className="mb-2">
            {getKarmaRank()}
          </Badge>
          <Button 
            size="sm" 
            onClick={onViewKarma}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            View Details
          </Button>
        </div>
      </div>
      
      {/* Quick actions demo */}
      <div className="flex gap-2 mb-3">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => addKarma(5, 'helpful comment')}
          className="flex-1"
        >
          <ArrowUp className="h-3 w-3 mr-1" />
          Upvote
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => addKarma(10, 'quality content')}
          className="flex-1"
        >
          <Heart className="h-3 w-3 mr-1" />
          Like
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => addKarma(15, 'shared knowledge')}
          className="flex-1"
        >
          <Share2 className="h-3 w-3 mr-1" />
          Share
        </Button>
      </div>

      {recentActivity.length > 0 && (
        <div className="pt-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
          <div className="space-y-1">
            {recentActivity.slice(0, 2).map((activity, index) => (
              <div key={index} className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 mr-1 text-emerald-500" />
                {activity}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};