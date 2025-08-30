import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminWelcomeAnimationProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

export const AdminWelcomeAnimation: React.FC<AdminWelcomeAnimationProps> = ({
  isOpen,
  onClose,
  userName
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSecondText, setShowSecondText] = useState(false);
  const [secondText, setSecondText] = useState('');
  const [secondIndex, setSecondIndex] = useState(0);

  const firstMessage = `Welcome Admin ${userName}! Ready to manage the XCampus community?`;
  const secondMessage = 'Monitor experiences, manage users, track analytics – your admin dashboard is ready.';

  useEffect(() => {
    if (!isOpen) {
      setCurrentText('');
      setCurrentIndex(0);
      setShowSecondText(false);
      setSecondText('');
      setSecondIndex(0);
      return;
    }

    if (currentIndex < firstMessage.length) {
      const timer = setTimeout(() => {
        setCurrentText(firstMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else if (!showSecondText) {
      const timer = setTimeout(() => {
        setShowSecondText(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, firstMessage, isOpen, showSecondText]);

  useEffect(() => {
    if (showSecondText && secondIndex < secondMessage.length) {
      const timer = setTimeout(() => {
        setSecondText(secondMessage.slice(0, secondIndex + 1));
        setSecondIndex(secondIndex + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [secondIndex, secondMessage, showSecondText]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl">
        <div className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border border-primary/20 rounded-2xl p-8 shadow-2xl backdrop-blur-lg">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-3xl font-bold text-primary-foreground">👑</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {currentText}
                </span>
                {currentIndex < firstMessage.length && (
                  <span className="animate-pulse text-primary">|</span>
                )}
              </h2>

              {showSecondText && (
                <p className="text-lg md:text-xl font-medium">
                  <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                    {secondText}
                  </span>
                  {secondIndex < secondMessage.length && (
                    <span className="animate-pulse text-accent">|</span>
                  )}
                </p>
              )}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

            <Button 
              onClick={onClose}
              className="mt-8 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Access Admin Panel 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};