import React from 'react';
import { UserPlus, Share2, MessageCircle, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Join the Community',
    description: 'Create your account and connect with thousands of students and professionals',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
  },
  {
    icon: Share2,
    title: 'Share Experiences',
    description: 'Post your interview experiences and help others learn from your journey',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
  },
  {
    icon: MessageCircle,
    title: 'Ask Questions',
    description: 'Get answers from experienced professionals and clarify your doubts',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
  },
  {
    icon: Trophy,
    title: 'Earn Rewards',
    description: 'Gain points for contributions and redeem them for valuable resources',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How XCampus Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your interview preparation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4 z-0" />
              )}

              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`mx-auto w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            Start earning points today
          </div>
          <p className="text-muted-foreground">
            Join thousands of successful candidates who used XCampus to land their dream jobs
          </p>
        </div>
      </div>
    </section>
  );
};