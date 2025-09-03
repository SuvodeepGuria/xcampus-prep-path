import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, Users, Target } from 'lucide-react';

interface HeatMapData {
  date: string;
  activity: number;
  type: 'low' | 'medium' | 'high';
}

export const HeatMapCard: React.FC = () => {
  // Generate mock heat map data for the last 12 weeks
  const generateHeatMapData = (): HeatMapData[] => {
    const data: HeatMapData[] = [];
    const today = new Date();
    
    for (let i = 83; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      const activity = Math.floor(Math.random() * 10);
      let type: 'low' | 'medium' | 'high' = 'low';
      
      if (activity >= 7) type = 'high';
      else if (activity >= 4) type = 'medium';
      
      data.push({
        date: date.toISOString().split('T')[0],
        activity,
        type,
      });
    }
    
    return data;
  };

  const heatMapData = generateHeatMapData();
  const totalActivities = heatMapData.reduce((sum, day) => sum + day.activity, 0);
  const averageDaily = Math.round(totalActivities / heatMapData.length * 10) / 10;
  const currentStreak = calculateCurrentStreak(heatMapData);

  function calculateCurrentStreak(data: HeatMapData[]): number {
    let streak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].activity > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  const getIntensityClass = (type: 'low' | 'medium' | 'high'): string => {
    switch (type) {
      case 'high':
        return 'bg-primary';
      case 'medium':
        return 'bg-primary/60';
      case 'low':
        return 'bg-primary/20';
      default:
        return 'bg-muted/30';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Activity Heat Map</h3>
            <p className="text-sm text-muted-foreground">Your engagement over time</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{totalActivities}</div>
          <div className="text-xs text-muted-foreground">Total Activities</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{averageDaily}</div>
          <div className="text-xs text-muted-foreground">Daily Average</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{currentStreak}</div>
          <div className="text-xs text-muted-foreground">Current Streak</div>
        </div>
      </div>

      {/* Heat Map Grid */}
      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-1 text-xs text-muted-foreground mb-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
            <div key={month} className="text-center">
              {index % 2 === 0 ? month : ''}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }, (_, weekIndex) => (
            <div key={weekIndex} className="space-y-1">
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dataIndex = weekIndex * 7 + dayIndex;
                const dayData = heatMapData[dataIndex];
                
                return (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${
                      dayData ? getIntensityClass(dayData.type) : 'bg-muted/10'
                    } transition-colors hover:ring-2 hover:ring-primary/50`}
                    title={dayData ? `${dayData.date}: ${dayData.activity} activities` : ''}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
          <span>Less</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-sm bg-muted/30"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/20"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
            <div className="w-3 h-3 rounded-sm bg-primary"></div>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Activity Types */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            Experiences Shared
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Users className="h-3 w-3 mr-1" />
            Comments Added
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Target className="h-3 w-3 mr-1" />
            Goals Completed
          </Badge>
        </div>
      </div>
    </Card>
  );
};