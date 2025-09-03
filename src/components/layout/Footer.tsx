import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">X</span>
              </div>
              <span className="text-xl font-bold text-foreground">XCampus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with real interview experiences, career guidance, and opportunities to excel in their professional journey.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Success Stories
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <div className="space-y-2">
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Interview Preparation
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Resume Builder
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Career Guidance
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Skill Assessment
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog & Articles
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@xcampus.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City, LC 12345</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Get Support
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 XCampus. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};