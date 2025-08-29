import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RegisterModal } from '@/components/auth/RegisterModal';
import { LoginModal } from '@/components/auth/LoginModal';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Trophy,
  Sparkles,
  Mail
} from 'lucide-react';

const trustIndicators = [
  { icon: CheckCircle, text: '100% Free to Start' },
  { icon: CheckCircle, text: 'No Credit Card Required' },
  { icon: CheckCircle, text: 'Join 10,000+ Members' },
  { icon: CheckCircle, text: 'Instant Access' },
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Real Interview Experiences',
    description: 'Access detailed experiences from top companies',
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with professionals and get mentorship',
  },
  {
    icon: Trophy,
    title: 'Rewards & Recognition',
    description: 'Earn points and redeem valuable rewards',
  },
];

export const FinalCTASection: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpenRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleOpenLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleQuickSignup = () => {
    // Pre-fill email in register modal if provided
    setShowRegisterModal(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Sparkles Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-pulse-glow">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Land Your
              <br />
              <span className="text-gradient">Dream Job?</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who used XCampus to ace their interviews 
              and land positions at top companies worldwide.
            </p>

            {/* Quick Email Signup */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Start Your Journey Today
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleQuickSignup} className="shrink-0">
                  <Mail className="h-4 w-4 mr-2" />
                  Join Now
                </Button>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={handleOpenRegister}
                className="text-lg px-8 py-6 hover-scale group animate-pulse-glow"
              >
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleOpenLogin}
                className="text-lg px-8 py-6 hover-scale"
              >
                Already a Member? Sign In
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <indicator.icon className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Join successful professionals from
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
                {['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix'].map((company) => (
                  <span key={company} className="text-lg font-semibold">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Final Message */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
              <p className="text-foreground font-medium">
                🚀 Your dream job is just one interview away. Start preparing with the best community today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modals */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleOpenLogin}
      />
      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleOpenRegister}
      />
    </>
  );
};