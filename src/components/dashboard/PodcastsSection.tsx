import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Play, Clock, User, ExternalLink } from 'lucide-react';

interface Podcast {
  id: string;
  title: string;
  host: string;
  duration: string;
  category: string;
  description: string;
  image?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const mockPodcasts: Podcast[] = [
  {
    id: '1',
    title: 'Breaking into FAANG: A Complete Guide',
    host: 'Rahul Sharma',
    duration: '45 min',
    category: 'Career',
    description: 'Learn from industry experts about landing your dream job at top tech companies.',
    isPopular: true,
  },
  {
    id: '2',
    title: 'Student to Entrepreneur Journey',
    host: 'Priya Patel',
    duration: '35 min',
    category: 'Entrepreneurship',
    description: 'Inspiring stories of students who built successful startups while in college.',
    isNew: true,
  },
  {
    id: '3',
    title: 'Mastering Technical Interviews',
    host: 'Arjun Singh',
    duration: '52 min',
    category: 'Interview Prep',
    description: 'Deep dive into system design, coding challenges, and behavioral questions.',
  },
  {
    id: '4',
    title: 'Remote Work Success Strategies',
    host: 'Sneha Gupta',
    duration: '38 min',
    category: 'Productivity',
    description: 'Tips and tricks for excelling in remote internships and jobs.',
  },
];

export const PodcastsSection: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">XCampus Podcasts</h3>
            <p className="text-sm text-muted-foreground">Career insights & success stories</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockPodcasts.map((podcast) => (
          <div key={podcast.id} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {podcast.isNew && (
                    <Badge variant="default" className="text-xs bg-primary">
                      New
                    </Badge>
                  )}
                  {podcast.isPopular && (
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {podcast.category}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{podcast.title}</h4>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{podcast.host}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{podcast.duration}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {podcast.description}
                </p>
              </div>
            </div>
            <Button size="sm" className="w-full">
              <Play className="h-3 w-3 mr-2" />
              Play Episode
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};