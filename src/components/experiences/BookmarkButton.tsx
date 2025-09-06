import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useAuthContext } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface BookmarkButtonProps {
  experienceId: string;
  className?: string;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ experienceId, className }) => {
  const { user } = useAuthContext();
  const { toast } = useToast();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (user) {
      const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${user.id}`) || '[]');
      setIsBookmarked(bookmarks.includes(experienceId));
    }
  }, [user, experienceId]);

  const toggleBookmark = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please login to bookmark experiences",
        variant: "destructive",
      });
      return;
    }

    const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${user.id}`) || '[]');
    
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== experienceId);
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(newBookmarks));
      setIsBookmarked(false);
      toast({
        title: "Bookmark Removed",
        description: "Experience removed from bookmarks",
      });
    } else {
      const newBookmarks = [...bookmarks, experienceId];
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(newBookmarks));
      setIsBookmarked(true);
      toast({
        title: "Bookmarked!",
        description: "Experience saved to bookmarks",
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleBookmark}
      className={`h-8 px-2 ${className}`}
    >
      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
    </Button>
  );
};