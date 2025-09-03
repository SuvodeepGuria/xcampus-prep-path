import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Experience } from '@/types';

interface EditExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => void;
  experience: Experience | null;
}

export const EditExperienceModal: React.FC<EditExperienceModalProps> = ({
  isOpen,
  onClose,
  onSave,
  experience,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    role: '',
    type: 'technical' as 'technical' | 'behavioral' | 'system-design' | 'case-study',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    content: '',
    year: new Date().getFullYear().toString(),
    experienceType: 'placement' as 'placement' | 'internship' | 'hackathon' | 'higher-studies' | 'certification',
    branchType: '',
  });

  useEffect(() => {
    if (experience) {
      setFormData({
        title: experience.title,
        company: experience.company,
        role: experience.role,
        type: experience.type,
        difficulty: experience.difficulty,
        content: experience.content,
        year: new Date(experience.createdAt).getFullYear().toString(),
        experienceType: (experience as any).experienceType || 'placement',
        branchType: (experience as any).branchType || '',
      });
    }
  }, [experience]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!experience || !formData.title || !formData.content) return;

    const updatedExperience: Experience = {
      ...experience,
      title: formData.title,
      company: formData.company,
      role: formData.role,
      type: formData.type,
      difficulty: formData.difficulty,
      content: formData.content,
      tags: [
        formData.company.toLowerCase(),
        formData.role.toLowerCase().replace(/\s+/g, '-'),
        formData.type,
        formData.difficulty,
        formData.experienceType,
        formData.branchType
      ].filter(Boolean),
      updatedAt: new Date().toISOString(),
    };

    onSave(updatedExperience);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Edit Experience
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Experience Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Google L4 Software Engineer Interview"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Select
                value={formData.company}
                onValueChange={(value) => handleInputChange('company', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Microsoft">Microsoft</SelectItem>
                  <SelectItem value="Amazon">Amazon</SelectItem>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Meta">Meta</SelectItem>
                  <SelectItem value="Netflix">Netflix</SelectItem>
                  <SelectItem value="Tesla">Tesla</SelectItem>
                  <SelectItem value="Uber">Uber</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleInputChange('role', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                  <SelectItem value="Senior Software Engineer">Senior Software Engineer</SelectItem>
                  <SelectItem value="Product Manager">Product Manager</SelectItem>
                  <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                  <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                  <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                  <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                  <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Select
                value={formData.year}
                onValueChange={(value) => handleInputChange('year', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Interview Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleInputChange('type', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="behavioral">Behavioral</SelectItem>
                  <SelectItem value="system-design">System Design</SelectItem>
                  <SelectItem value="case-study">Case Study</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select
                value={formData.difficulty}
                onValueChange={(value) => handleInputChange('difficulty', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceType">Experience Type</Label>
              <Select
                value={formData.experienceType}
                onValueChange={(value) => handleInputChange('experienceType', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="placement">Placement</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="higher-studies">Higher Studies</SelectItem>
                  <SelectItem value="certification">Certification</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="branchType">Branch Type</Label>
              <Select
                value={formData.branchType}
                onValueChange={(value) => handleInputChange('branchType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="electrical">Electrical Engineering</SelectItem>
                  <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                  <SelectItem value="civil">Civil Engineering</SelectItem>
                  <SelectItem value="chemical">Chemical Engineering</SelectItem>
                  <SelectItem value="electronics">Electronics & Communication</SelectItem>
                  <SelectItem value="aerospace">Aerospace Engineering</SelectItem>
                  <SelectItem value="biotechnology">Biotechnology</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Experience Details *</Label>
            <Textarea
              id="content"
              placeholder="Share your detailed interview experience including rounds, questions, tips, and outcome..."
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              className="min-h-[200px]"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
              disabled={!formData.title || !formData.content}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};