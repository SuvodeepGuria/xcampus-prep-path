import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RegisterModal } from '@/components/auth/RegisterModal';
import { LoginModal } from '@/components/auth/LoginModal';
import { ArrowRight, Users, BookOpen, Trophy, MessageSquare } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleOpenLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center gradient-warm overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Master Your{' '}
              <span className="text-gradient">Interview</span>
              <br />
              Journey
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Connect with experienced professionals, share interview experiences, 
              and ace your dream job with India's largest interview preparation community
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={handleOpenRegister}
                className="text-lg px-8 py-6 hover-scale group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleOpenLogin}
                className="text-lg px-8 py-6 hover-scale"
              >
                Sign In
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="glass p-4 rounded-lg text-center hover-scale">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              
              <div className="glass p-4 rounded-lg text-center hover-scale">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">2.5K+</div>
                <div className="text-sm text-muted-foreground">Experiences</div>
              </div>
              
              <div className="glass p-4 rounded-lg text-center hover-scale">
                <div className="flex justify-center mb-2">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              
              <div className="glass p-4 rounded-lg text-center hover-scale">
                <div className="flex justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15K+</div>
                <div className="text-sm text-muted-foreground">Discussions</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by students and professionals from
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <span className="text-lg font-semibold">Google</span>
                <span className="text-lg font-semibold">Microsoft</span>
                <span className="text-lg font-semibold">Amazon</span>
                <span className="text-lg font-semibold">Apple</span>
                <span className="text-lg font-semibold">Meta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/30 rounded-full mt-2 animate-pulse"></div>
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