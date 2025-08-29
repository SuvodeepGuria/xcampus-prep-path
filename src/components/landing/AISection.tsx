import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Brain,
  Zap,
  CheckCircle
} from 'lucide-react';

const aiFeatures = [
  {
    icon: Brain,
    title: 'Smart Interview Prep',
    description: 'Get personalized interview questions based on your target company and role',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Receive real-time feedback on your answers with improvement suggestions',
  },
  {
    icon: CheckCircle,
    title: 'Progress Tracking',
    description: 'Monitor your preparation progress and identify areas for improvement',
  },
];

const sampleQuestions = [
  "How should I prepare for a Google software engineer interview?",
  "What are common behavioral questions at Microsoft?",
  "Help me with system design interview prep",
  "What salary should I expect for a PM role at Meta?",
];

export const AISection: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi! I'm your AI interview coach. Ask me anything about interview preparation, company-specific questions, or career advice. How can I help you today?",
      isUser: false,
    }
  ]);

  const handleSendMessage = () => {
    if (!question.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: question,
      isUser: true,
    };

    // Simulate AI response
    const aiResponse = {
      id: messages.length + 2,
      content: "Thanks for your question! Based on your query, here are some personalized recommendations for your interview preparation. This is a demo response - in the real application, our AI would provide detailed, contextual advice based on thousands of interview experiences in our database.",
      isUser: false,
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setQuestion('');
  };

  const handleSampleQuestion = (q: string) => {
    setQuestion(q);
  };

  return (
    <section id="ai-coach" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Coaching
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Your AI Interview Coach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get instant, personalized interview preparation advice powered by thousands of real interview experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* AI Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Intelligent Interview Preparation
              </h3>
              <p className="text-muted-foreground mb-8">
                Our AI coach analyzes thousands of interview experiences to provide you with personalized, 
                actionable advice for your specific target companies and roles.
              </p>
            </div>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Available 24/7
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Get instant answers to your interview questions anytime, anywhere. 
                    No waiting for human responses or scheduling conflicts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-primary/5 border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">AI Interview Coach</h4>
                  <p className="text-xs text-muted-foreground">Always ready to help</p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Questions */}
            <div className="border-t border-border p-4">
              <p className="text-xs text-muted-foreground mb-3">Try asking:</p>
              <div className="grid grid-cols-1 gap-2">
                {sampleQuestions.slice(0, 2).map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleQuestion(q)}
                    className="text-left text-xs text-primary hover:text-primary-hover bg-primary/5 hover:bg-primary/10 p-2 rounded-md transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything about interview prep..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Ask to AI Button */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 animate-pulse-glow"
              onClick={() => setIsChatOpen(true)}
            >
              <Bot className="mr-2 h-5 w-5" />
              Ask to AI
              <Sparkles className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Get instant answers to your interview questions
          </p>
        </div>
      </div>
    </section>
  );
};