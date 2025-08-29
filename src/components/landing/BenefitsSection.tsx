import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Target,
  Lightbulb
} from 'lucide-react';

const studentBenefits = [
  {
    icon: BookOpen,
    title: 'Learn from Real Experiences',
    description: 'Access detailed interview experiences from students who successfully landed jobs at top companies.',
  },
  {
    icon: Users,
    title: 'Connect with Peers',
    description: 'Join study groups, discussion forums, and connect with fellow students preparing for similar roles.',
  },
  {
    icon: Target,
    title: 'Targeted Preparation',
    description: 'Filter experiences by company, role, and difficulty level to focus on what matters most for your goals.',
  },
  {
    icon: Award,
    title: 'Skill Development',
    description: 'Improve technical and soft skills through peer feedback and expert guidance from professionals.',
  },
];

const professionalBenefits = [
  {
    icon: Lightbulb,
    title: 'Give Back to Community',
    description: 'Share your expertise and help the next generation of professionals succeed in their careers.',
  },
  {
    icon: TrendingUp,
    title: 'Build Your Reputation',
    description: 'Establish yourself as a thought leader in your industry by sharing valuable insights and experiences.',
  },
  {
    icon: Users,
    title: 'Expand Your Network',
    description: 'Connect with ambitious students and fellow professionals across different companies and roles.',
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Get verified badges, accumulate points, and gain recognition for your contributions to the community.',
  },
];

export const BenefitsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student preparing for interviews or a professional wanting to help others, 
            XCampus has something valuable for you
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="students" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="professionals" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Professionals
            </TabsTrigger>
          </TabsList>

          {/* Students Section */}
          <TabsContent value="students" id="students-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    For Students & Job Seekers
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Get the insider knowledge and community support you need to ace your interviews 
                    and land your dream job at top companies.
                  </p>
                </div>

                <div className="space-y-6">
                  {studentBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Free Access to Premium Content
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Get free access to premium interview experiences, practice questions, 
                        and expert tips that would cost hundreds of dollars elsewhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Student Success Story
                    </h4>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic text-center mb-6">
                    "XCampus helped me understand exactly what to expect in my Google interview. 
                    The detailed experiences shared by others gave me the confidence I needed to succeed."
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Arjun Sharma</div>
                    <div className="text-sm text-muted-foreground">Software Engineer at Google</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Professionals Section */}
          <TabsContent value="professionals" id="professionals-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Professional Impact
                    </h4>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic text-center mb-6">
                    "Sharing my interview experiences on XCampus has been incredibly rewarding. 
                    I've helped dozens of students land their dream jobs while building valuable connections."
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Emma Wilson</div>
                    <div className="text-sm text-muted-foreground">Senior PM at Microsoft</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    For Working Professionals
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Make a meaningful impact by sharing your knowledge and helping the next generation 
                    of professionals succeed in their career journeys.
                  </p>
                </div>

                <div className="space-y-6">
                  {professionalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Professional Recognition Program
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Get verified professional badges, build your personal brand, 
                        and gain recognition in your industry for helping others succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="hover-scale group">
            Join Our Community Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};