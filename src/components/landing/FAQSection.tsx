import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { mockFAQs } from '@/data/mock-data';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about XCampus and how to make the most of our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {mockFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Additional Questions */}
            <div className="mt-8 p-6 bg-muted/30 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Our community is here to help, 
                or you can reach out to our support team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask the Community
                </Button>
                <Button className="flex-1">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          {/* Help & Resources Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Help
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <div className="font-medium text-foreground">Getting Started Guide</div>
                  <div className="text-sm text-muted-foreground">Learn the basics</div>
                </button>
                <button className="w-full text-left p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <div className="font-medium text-foreground">How to Earn Points</div>
                  <div className="text-sm text-muted-foreground">Maximize your rewards</div>
                </button>
                <button className="w-full text-left p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <div className="font-medium text-foreground">Community Guidelines</div>
                  <div className="text-sm text-muted-foreground">Be a good member</div>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Need Personal Help?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Our support team is available 24/7 to help you with any issues or questions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Average response time: 2 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Available in English & Hindi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Email & Chat support</span>
                </div>
              </div>
              
              <Button className="w-full mt-4" size="sm">
                Get In Touch
              </Button>
            </div>

            {/* Popular Resources */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Popular Resources
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-primary hover:underline">
                  → Interview Preparation Checklist
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  → Resume Templates & Examples
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  → Salary Negotiation Guide
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  → Company Research Methods
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  → Technical Interview Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};