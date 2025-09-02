import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ArrowUp, Reply } from 'lucide-react';
import { useAuthContext } from '@/hooks/useAuth';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  likes: number;
  upvotes: number;
  replies: Comment[];
  createdAt: string;
}

interface CommentSectionProps {
  experienceId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ experienceId }) => {
  const { user } = useAuthContext();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim() || !user) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      userId: user.id,
      userName: user.fullName,
      userAvatar: user.avatar,
      content: newComment,
      likes: 0,
      upvotes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const handleAddReply = (parentId: string) => {
    if (!replyContent.trim() || !user) return;

    const reply: Comment = {
      id: `reply-${Date.now()}`,
      userId: user.id,
      userName: user.fullName,
      userAvatar: user.avatar,
      content: replyContent,
      likes: 0,
      upvotes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
    };

    setComments(prev => prev.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [reply, ...comment.replies] }
        : comment
    ));

    setReplyContent('');
    setReplyTo(null);
  };

  const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(prev => prev.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId 
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              )
            }
          : comment
      ));
    } else {
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ));
    }
  };

  const handleUpvote = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(prev => prev.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId 
                  ? { ...reply, upvotes: reply.upvotes + 1 }
                  : reply
              )
            }
          : comment
      ));
    } else {
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, upvotes: comment.upvotes + 1 }
          : comment
      ));
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const CommentItem = ({ 
    comment, 
    isReply = false, 
    parentId 
  }: { 
    comment: Comment; 
    isReply?: boolean; 
    parentId?: string;
  }) => (
    <div className={`flex space-x-3 ${isReply ? 'ml-8 mt-3' : 'mb-4'}`}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={comment.userAvatar} alt={comment.userName} />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
          {getInitials(comment.userName)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-foreground text-sm">{comment.userName}</span>
            <span className="text-xs text-muted-foreground">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-foreground">{comment.content}</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleUpvote(comment.id, isReply, parentId)}
            className="text-xs text-muted-foreground hover:text-primary"
          >
            <ArrowUp className="h-3 w-3 mr-1" />
            {comment.upvotes}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLike(comment.id, isReply, parentId)}
            className="text-xs text-muted-foreground hover:text-red-500"
          >
            <Heart className="h-3 w-3 mr-1" />
            {comment.likes}
          </Button>
          
          {!isReply && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              <Reply className="h-3 w-3 mr-1" />
              Reply
            </Button>
          )}
        </div>

        {replyTo === comment.id && (
          <div className="mt-3 space-y-2">
            <Textarea
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="min-h-[60px]"
            />
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={() => handleAddReply(comment.id)}
                disabled={!replyContent.trim()}
              >
                Reply
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setReplyTo(null);
                  setReplyContent('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {comment.replies.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            isReply={true}
            parentId={comment.id}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground">Comments</h4>
      
      {user && (
        <div className="space-y-3">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px]"
          />
          <Button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
          >
            Post Comment
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        
        {comments.length === 0 && (
          <p className="text-muted-foreground text-center py-4">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
};