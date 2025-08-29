import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bot, 
  Send, 
  X, 
  Minimize2, 
  Maximize2,
  Sparkles
} from 'lucide-react';

interface ChatMessage {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export const AIChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content: "Hi! 👋 I'm your AI interview coach. I can help you with interview preparation, company insights, salary expectations, and much more. What would you like to know?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      content: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        content: getAIResponse(message),
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('google') || lowerMessage.includes('interview')) {
      return "Great question about Google interviews! Based on our community experiences, Google typically focuses on: 1) Coding skills (LeetCode medium/hard), 2) System design (for senior roles), 3) Behavioral questions using STAR method, 4) 'Googleyness' - collaboration and innovation. I recommend practicing data structures, algorithms, and reviewing our Google interview experiences section. Would you like specific preparation resources?";
    }
    
    if (lowerMessage.includes('salary') || lowerMessage.includes('compensation')) {
      return "Salary negotiation is crucial! Here are key tips: 1) Research market rates using our salary insights, 2) Consider total compensation (base + bonus + equity), 3) Highlight your unique value, 4) Be prepared to justify your ask with achievements. The rule of thumb is to aim 10-20% above the initial offer. Need help with specific salary ranges for your target company?";
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "Resume optimization is key! Focus on: 1) Quantifiable achievements (increased X by Y%), 2) Relevant keywords from job descriptions, 3) Clean, ATS-friendly format, 4) 1-2 pages max, 5) Strong action verbs. Our community has shared great resume templates. Would you like me to guide you through specific sections?";
    }
    
    return "That's an excellent question! Based on thousands of interview experiences in our community, I'd recommend checking our experiences section for similar situations. You can also post this question to get personalized advice from professionals who've been through similar interviews. Would you like me to help you find specific resources or connect you with relevant community discussions?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow animate-pulse-glow group"
        >
          <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span className="text-sm text-foreground">Ask AI for help</span>
          <div className="absolute top-full right-4 w-2 h-2 bg-card border-r border-b border-border rotate-45 -mt-1"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      <div className="bg-card border border-border rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Interview Coach</h3>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0"
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className={`text-xs mt-1 opacity-70 ${
                      msg.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                    }`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about interviews..."
                  className="flex-1"
                />
                <Button 
                  onClick={sendMessage} 
                  size="sm"
                  disabled={!message.trim() || isTyping}
                  className="shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs text-muted-foreground">
                  Powered by community insights from 1000+ interview experiences
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};