import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Gift, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight,
  Coins,
  Target,
  CheckCircle
} from 'lucide-react';

const rewardSteps = [
  {
    icon: Users,
    title: 'Participate',
    description: 'Share experiences, ask questions, help others',
    points: '+10-100 pts',
  },
  {
    icon: Trophy,
    title: 'Earn Points',
    description: 'Get points for valuable contributions',
    points: 'Accumulate',
  },
  {
    icon: Gift,
    title: 'Redeem Rewards',
    description: 'Exchange points for amazing benefits',
    points: 'Enjoy!',
  },
];

const rewardCategories = [
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Premium courses, books, and certification vouchers',
    items: ['Udemy Courses', 'AWS Certifications', 'Premium Books'],
    pointsRange: '300-1200 pts',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'One-on-one sessions with industry experts',
    items: ['Mock Interviews', 'Career Guidance', 'Resume Reviews'],
    pointsRange: '500-1000 pts',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
  },
  {
    icon: Award,
    title: 'Exclusive Perks',
    description: 'Special benefits and recognition',
    items: ['Priority Support', 'Beta Features', 'Community Badges'],
    pointsRange: '200-800 pts',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
  },
  {
    icon: Gift,
    title: 'Merchandise',
    description: 'Branded items and swag',
    items: ['T-Shirts', 'Stickers', 'Coffee Mugs'],
    pointsRange: '100-500 pts',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
  },
];

const pointActivities = [
  { activity: 'Share interview experience', points: '+50 pts' },
  { activity: 'Answer a question', points: '+20 pts' },
  { activity: 'Receive 10 likes', points: '+30 pts' },
  { activity: 'Get verified badge', points: '+100 pts' },
  { activity: 'Refer a friend', points: '+75 pts' },
];

export const RewardsSection: React.FC = () => {
  return (
    <section id="rewards" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Coins className="h-4 w-4" />
            Rewards System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Earn Points, Unlock Rewards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get rewarded for helping the community. Share your knowledge, earn points, 
            and redeem them for valuable resources and exclusive benefits.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            How the Rewards System Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {rewardSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Arrow */}
                {index < rewardSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-4 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                  </div>
                )}

                <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover-scale z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {step.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Point Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Ways to Earn Points
            </h3>
            <div className="space-y-4">
              {pointActivities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                  <span className="text-primary font-semibold">{item.points}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Bonus Opportunities
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Participate in monthly challenges, special events, and community contests 
                    to earn bonus points and exclusive rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Your Points Dashboard
                </h4>
                <p className="text-muted-foreground text-sm">
                  Track your progress and see how close you are to your next reward
                </p>
              </div>
              
              {/* Mock Points Display */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Current Points</span>
                    <span className="text-2xl font-bold text-primary">1,250</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    250 points until next reward tier
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card border border-border rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-foreground">15</div>
                    <div className="text-xs text-muted-foreground">Contributions</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-foreground">Gold</div>
                    <div className="text-xs text-muted-foreground">Current Tier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Reward Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {category.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {category.pointsRange}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Start Earning Points Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community and start building your reward balance by sharing your knowledge 
              and helping fellow job seekers succeed.
            </p>
            <Button size="lg" className="hover-scale group">
              Join the Community
              <Trophy className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};