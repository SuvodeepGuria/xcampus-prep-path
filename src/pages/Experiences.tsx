import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { FloatingAIChat } from '@/components/chat/FloatingAIChat';
import { ExperienceCard } from '@/components/experiences/ExperienceCard';
import { ExperienceFilters } from '@/components/experiences/ExperienceFilters';
import { ShareExperienceModal } from '@/components/experiences/ShareExperienceModal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useAuthContext } from '@/hooks/useAuth';
import { mockExperiences } from '@/data/mock-data';
import { Experience } from '@/types';

export const Experiences: React.FC = () => {
  const { user } = useAuthContext();
  const [experiences, setExperiences] = useState<Experience[]>(mockExperiences);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>(mockExperiences);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleFilterChange = (filters: {
    year?: string;
    company?: string;
    role?: string;
    search?: string;
  }) => {
    let filtered = [...experiences];

    if (filters.search) {
      filtered = filtered.filter(exp => 
        exp.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
        exp.content.toLowerCase().includes(filters.search!.toLowerCase())
      );
    }

    if (filters.company) {
      filtered = filtered.filter(exp => exp.company === filters.company);
    }

    if (filters.role) {
      filtered = filtered.filter(exp => exp.role === filters.role);
    }

    if (filters.year) {
      filtered = filtered.filter(exp => 
        new Date(exp.createdAt).getFullYear().toString() === filters.year
      );
    }

    setFilteredExperiences(filtered);
  };

  const handleLike = (experienceId: string) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === experienceId 
        ? { ...exp, likes: exp.likes + 1 }
        : exp
    ));
    setFilteredExperiences(prev => prev.map(exp => 
      exp.id === experienceId 
        ? { ...exp, likes: exp.likes + 1 }
        : exp
    ));
  };

  const handleUpvote = (experienceId: string) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === experienceId 
        ? { ...exp, views: exp.views + 1 }
        : exp
    ));
    setFilteredExperiences(prev => prev.map(exp => 
      exp.id === experienceId 
        ? { ...exp, views: exp.views + 1 }
        : exp
    ));
  };

  const handleDelete = (experienceId: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== experienceId));
    setFilteredExperiences(prev => prev.filter(exp => exp.id !== experienceId));
  };

  const handleNewExperience = (newExperience: Experience) => {
    setExperiences(prev => [newExperience, ...prev]);
    setFilteredExperiences(prev => [newExperience, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Experiences</h1>
            <p className="text-muted-foreground">Real interview experiences from professionals</p>
          </div>
          
          <Button
            onClick={() => setIsShareModalOpen(true)}
            className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
          >
            <Plus className="mr-2 h-4 w-4" />
            Share Experience
          </Button>
        </div>

        <ExperienceFilters onFilterChange={handleFilterChange} />

        <div className="space-y-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onLike={handleLike}
              onUpvote={handleUpvote}
              onDelete={user?.role === 'admin' ? handleDelete : undefined}
              canEdit={user?.role === 'admin'}
            />
          ))}

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No experiences found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or be the first to share an experience!
              </p>
            </div>
          )}
        </div>
      </div>

      <ShareExperienceModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onSubmit={handleNewExperience}
      />

      <FloatingAIChat />
    </div>
  );
};