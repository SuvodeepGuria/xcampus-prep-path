import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, ArrowUp, MessageCircle, Edit, Trash2, Share2 } from 'lucide-react';
import { Experience } from '@/types';
import { CommentSection } from './CommentSection';

interface ExperienceCardProps {
  experience: Experience;
  onLike: (id: string) => void;
  onUpvote: (id: string) => void;
  onDelete?: (id: string) => void;
  canEdit?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onLike,
  onUpvote,
  onDelete,
  canEdit = false,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      onLike(experience.id);
      setIsLiked(true);
    }
  };

  const handleUpvote = () => {
    if (!isUpvoted) {
      onUpvote(experience.id);
      setIsUpvoted(true);
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="w-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={experience.user.avatar} alt={experience.user.fullName} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(experience.user.fullName)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {experience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {experience.company} • {experience.role}
              </p>
            </div>
          </div>
          
          {canEdit && (
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onDelete?.(experience.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {experience.type}
          </Badge>
          <Badge variant="outline" className="border-muted">
            {experience.difficulty}
          </Badge>
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="whitespace-pre-wrap">{experience.content}</p>
        </div>

        <Separator className="my-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleUpvote}
              className={`flex items-center space-x-1 ${
                isUpvoted ? 'text-primary' : 'text-muted-foreground'
              } hover:text-primary`}
            >
              <ArrowUp className="h-4 w-4" />
              <span>{experience.views}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? 'text-red-500' : 'text-muted-foreground'
              } hover:text-red-500`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{experience.likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{experience.comments.length}</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>

        {showComments && (
          <div className="mt-4">
            <Separator className="mb-4" />
            <CommentSection experienceId={experience.id} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};