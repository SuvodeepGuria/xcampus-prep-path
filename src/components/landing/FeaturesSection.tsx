import React from 'react';
import { 
  BookOpen, 
  Users, 
  MessageSquare, 
  Trophy, 
  Search, 
  Shield,
  Bot,
  TrendingUp,
  Star
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Real Interview Experiences',
    description: 'Access thousands of detailed interview experiences from top companies like Google, Microsoft, Amazon, and more.',
    highlight: 'Most Popular',
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with experienced professionals and verified employees from leading tech companies.',
    highlight: 'Verified Experts',
  },
  {
    icon: MessageSquare,
    title: 'Interactive Q&A',
    description: 'Ask questions and get personalized answers from industry experts and successful candidates.',
    highlight: 'Instant Help',
  },
  {
    icon: Trophy,
    title: 'Rewards System',
    description: 'Earn points for sharing experiences and helping others. Redeem for courses, mentorship, and more.',
    highlight: 'Earn & Learn',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find relevant experiences and questions using our advanced filters by company, role, difficulty, and more.',
    highlight: 'AI-Powered',
  },
  {
    icon: Bot,
    title: 'AI Interview Coach',
    description: 'Get instant feedback and personalized preparation tips from our AI-powered interview assistant.',
    highlight: 'New Feature',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your preparation progress and identify areas for improvement with detailed analytics.',
    highlight: 'Data-Driven',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is secure with us. Share experiences anonymously and maintain complete privacy.',
    highlight: 'Secure',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and resources to help you ace any interview and land your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {feature.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Interview Game?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful candidates who used our platform to land jobs at top companies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>100% Free to Start</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};