import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
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
import { FloatingAIChat } from '@/components/chat/FloatingAIChat';

const Index = () => {
  return (
    <>
      <PageLayout>
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
      </PageLayout>
      <FloatingAIChat />
    </>
  );
};

export default Index;
