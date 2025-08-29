import React from 'react';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { RewardsSection } from '@/components/landing/RewardsSection';
import { AISection } from '@/components/landing/AISection';
import { AlumniScrollSection } from '@/components/landing/AlumniScrollSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';
import { AIChatButton } from '@/components/chat/AIChatButton';

const Index = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <RewardsSection />
            <AISection />
            <AlumniScrollSection />
            <FAQSection />
            <FinalCTASection />
          </main>
          <Footer />
          <AIChatButton />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Index;
