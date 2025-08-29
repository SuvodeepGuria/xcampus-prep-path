// XCampus Platform Types

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'student' | 'professional' | 'admin' | 'guest';
  avatar?: string;
  bio?: string;
  company?: string;
  position?: string;
  experience?: number;
  points: number;
  createdAt: string;
  achievements: string[];
  isVerified: boolean;
}

export interface Experience {
  id: string;
  userId: string;
  user: User;
  title: string;
  company: string;
  role: string;
  type: 'technical' | 'behavioral' | 'system-design' | 'case-study';
  difficulty: 'easy' | 'medium' | 'hard';
  content: string;
  tags: string[];
  likes: number;
  views: number;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: string;
  userId: string;
  user: User;
  title: string;
  content: string;
  company?: string;
  role?: string;
  type: 'technical' | 'behavioral' | 'system-design' | 'general';
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  answers: Answer[];
  likes: number;
  views: number;
  isSolved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Answer {
  id: string;
  questionId: string;
  userId: string;
  user: User;
  content: string;
  isAccepted: boolean;
  likes: number;
  replies: Reply[];
  createdAt: string;
  updatedAt: string;
}

export interface Reply {
  id: string;
  answerId: string;
  userId: string;
  user: User;
  content: string;
  likes: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  experienceId: string;
  userId: string;
  user: User;
  content: string;
  likes: number;
  replies: CommentReply[];
  createdAt: string;
}

export interface CommentReply {
  id: string;
  commentId: string;
  userId: string;
  user: User;
  content: string;
  likes: number;
  createdAt: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  category: 'course' | 'certification' | 'mentorship' | 'swag' | 'cash';
  image: string;
  isAvailable: boolean;
  claimedCount: number;
  maxClaims?: number;
}

export interface PointTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'earned' | 'spent';
  reason: string;
  description: string;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  industry: string;
  experienceCount: number;
  questionCount: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  requirements: string;
  unlockedBy: number; // number of users who have this
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface DashboardStats {
  totalExperiences: number;
  totalQuestions: number;
  totalPoints: number;
  totalViews: number;
  rank: number;
  weeklyActivity: number[];
}

export interface FilterOptions {
  companies: string[];
  roles: string[];
  types: string[];
  difficulties: string[];
  tags: string[];
}

export interface SearchFilters {
  query: string;
  company?: string;
  role?: string;
  type?: string;
  difficulty?: string;
  tags?: string[];
  sortBy: 'recent' | 'popular' | 'likes' | 'views';
}

export interface Theme {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface ModalState {
  isOpen: boolean;
  type: 'login' | 'register' | 'forgot-password' | null;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export interface AIChat {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
}