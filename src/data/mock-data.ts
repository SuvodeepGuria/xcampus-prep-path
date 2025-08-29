import { User, Experience, Question, Company, Reward, Achievement, PointTransaction } from '@/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'sarah.chen@email.com',
    fullName: 'Sarah Chen',
    role: 'professional',
    avatar: '/api/placeholder/40/40',
    bio: 'Senior Software Engineer at Google with 5+ years experience in system design',
    company: 'Google',
    position: 'Senior Software Engineer',
    experience: 5,
    points: 2850,
    createdAt: '2024-01-15',
    achievements: ['mentor', 'top-contributor', 'verified'],
    isVerified: true,
  },
  {
    id: 'user-2',
    email: 'raj.patel@email.com',
    fullName: 'Raj Patel',
    role: 'student',
    avatar: '/api/placeholder/40/40',
    bio: 'Computer Science student preparing for tech interviews',
    points: 1200,
    createdAt: '2024-02-01',
    achievements: ['active-learner'],
    isVerified: false,
  },
  {
    id: 'user-3',
    email: 'emma.wilson@email.com',
    fullName: 'Emma Wilson',
    role: 'professional',
    avatar: '/api/placeholder/40/40',
    bio: 'Product Manager at Microsoft with focus on AI/ML products',
    company: 'Microsoft',
    position: 'Senior Product Manager',
    experience: 7,
    points: 3200,
    createdAt: '2024-01-10',
    achievements: ['mentor', 'top-contributor', 'verified', 'expert'],
    isVerified: true,
  },
];

// Mock Companies
export const mockCompanies: Company[] = [
  {
    id: 'comp-1',
    name: 'Google',
    logo: '/api/placeholder/32/32',
    size: 'enterprise',
    industry: 'Technology',
    experienceCount: 245,
    questionCount: 189,
  },
  {
    id: 'comp-2',
    name: 'Microsoft',
    logo: '/api/placeholder/32/32',
    size: 'enterprise',
    industry: 'Technology',
    experienceCount: 198,
    questionCount: 156,
  },
  {
    id: 'comp-3',
    name: 'Amazon',
    logo: '/api/placeholder/32/32',
    size: 'enterprise',
    industry: 'E-commerce/Cloud',
    experienceCount: 267,
    questionCount: 203,
  },
  {
    id: 'comp-4',
    name: 'Apple',
    logo: '/api/placeholder/32/32',
    size: 'enterprise',
    industry: 'Technology',
    experienceCount: 134,
    questionCount: 98,
  },
  {
    id: 'comp-5',
    name: 'Meta',
    logo: '/api/placeholder/32/32',
    size: 'enterprise',
    industry: 'Social Media',
    experienceCount: 178,
    questionCount: 145,
  },
];

// Mock Experiences
export const mockExperiences: Experience[] = [
  {
    id: 'exp-1',
    userId: 'user-1',
    user: mockUsers[0],
    title: 'Google L4 Software Engineer Interview Experience',
    company: 'Google',
    role: 'Software Engineer L4',
    type: 'technical',
    difficulty: 'hard',
    content: `I recently went through Google's interview process for L4 SWE position. Here's my detailed experience:

**Round 1: Phone Screen (45 mins)**
- Coding question on binary trees
- Asked to optimize time/space complexity
- Interviewer was friendly and gave hints

**Round 2-5: Onsite (Virtual)**
- 2 Coding rounds: Dynamic Programming and Graph algorithms
- 1 System Design: Design a URL shortener like bit.ly
- 1 Behavioral: Leadership and team collaboration
- 1 Googleyness: Cultural fit and problem-solving approach

**Key Tips:**
- Practice LeetCode medium/hard problems
- Review system design fundamentals
- Prepare STAR format behavioral stories
- Ask clarifying questions before coding

**Outcome:** Received offer after 2 weeks! Happy to answer questions.`,
    tags: ['google', 'l4', 'system-design', 'coding', 'behavioral'],
    likes: 89,
    views: 1205,
    comments: [],
    createdAt: '2024-02-15',
    updatedAt: '2024-02-15',
  },
  {
    id: 'exp-2',
    userId: 'user-3',
    user: mockUsers[2],
    title: 'Microsoft PM Interview: AI/ML Product Focus',
    company: 'Microsoft',
    role: 'Senior Product Manager',
    type: 'case-study',
    difficulty: 'medium',
    content: `Sharing my Microsoft PM interview experience for AI/ML products team:

**Round 1: Recruiter Screen**
- Standard background discussion
- Role expectations and compensation

**Round 2: Hiring Manager**
- Product sense: "How would you improve Bing search?"
- Metrics and success criteria discussion
- Team dynamics and collaboration

**Round 3: Cross-functional Partners**
- Technical deep-dive on ML concepts
- Data analysis and interpretation
- Stakeholder management scenarios

**Round 4: Final Round**
- Executive presence
- Strategic thinking
- Long-term vision for AI products

**Preparation Resources:**
- Cracking the PM Interview book
- ML fundamentals course
- Case study practice with peers

The process was thorough but fair. Interviewers were genuinely interested in my thought process.`,
    tags: ['microsoft', 'product-manager', 'ai-ml', 'case-study'],
    likes: 67,
    views: 892,
    comments: [],
    createdAt: '2024-02-10',
    updatedAt: '2024-02-10',
  },
];

// Mock Questions
export const mockQuestions: Question[] = [
  {
    id: 'q-1',
    userId: 'user-2',
    user: mockUsers[1],
    title: 'How to approach system design questions with no prior experience?',
    content: `I'm a final year CS student with limited industry experience. I have upcoming interviews at top tech companies and I'm struggling with system design rounds. 

My specific concerns:
- I understand basic concepts but lack real-world experience
- How to structure my approach during the interview?
- What are the most important topics to focus on?
- Any recommendations for practice resources?

I've been reading "Designing Data-Intensive Applications" but still feel unprepared for the interview setting.`,
    type: 'system-design',
    difficulty: 'medium',
    tags: ['system-design', 'beginner', 'interview-prep', 'new-grad'],
    answers: [],
    likes: 23,
    views: 156,
    isSolved: false,
    createdAt: '2024-02-18',
    updatedAt: '2024-02-18',
  },
  {
    id: 'q-2',
    userId: 'user-2',
    user: mockUsers[1],
    title: 'Best way to explain complex technical concepts in behavioral interviews?',
    content: `During behavioral interviews, I often get asked to explain a challenging technical project. I struggle with:

1. Keeping it concise yet comprehensive
2. Making it understandable for non-technical interviewers
3. Highlighting my specific contributions vs team effort
4. Balancing technical depth with business impact

How do experienced professionals handle this? Any frameworks or approaches that work well?`,
    type: 'behavioral',
    difficulty: 'easy',
    tags: ['behavioral', 'communication', 'technical-explanation'],
    answers: [],
    likes: 31,
    views: 243,
    isSolved: true,
    createdAt: '2024-02-16',
    updatedAt: '2024-02-16',
  },
];

// Mock Rewards
export const mockRewards: Reward[] = [
  {
    id: 'reward-1',
    title: 'Free Udemy Course',
    description: 'Access to any Udemy course worth up to $200',
    pointsCost: 500,
    category: 'course',
    image: '/api/placeholder/100/100',
    isAvailable: true,
    claimedCount: 145,
    maxClaims: 500,
  },
  {
    id: 'reward-2',
    title: '1-on-1 Mock Interview',
    description: '60-minute mock interview session with industry expert',
    pointsCost: 800,
    category: 'mentorship',
    image: '/api/placeholder/100/100',
    isAvailable: true,
    claimedCount: 89,
    maxClaims: 200,
  },
  {
    id: 'reward-3',
    title: 'XCampus Premium T-Shirt',
    description: 'Exclusive XCampus branded merchandise',
    pointsCost: 300,
    category: 'swag',
    image: '/api/placeholder/100/100',
    isAvailable: true,
    claimedCount: 234,
  },
  {
    id: 'reward-4',
    title: 'AWS Certification Voucher',
    description: 'Free voucher for AWS Solutions Architect exam',
    pointsCost: 1200,
    category: 'certification',
    image: '/api/placeholder/100/100',
    isAvailable: true,
    claimedCount: 67,
    maxClaims: 100,
  },
];

// Mock Achievements
export const mockAchievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'First Post',
    description: 'Share your first interview experience or question',
    icon: '🎯',
    points: 50,
    requirements: 'Post your first experience or question',
    unlockedBy: 1245,
  },
  {
    id: 'ach-2',
    title: 'Helpful Helper',
    description: 'Receive 10 likes on your answers or experiences',
    icon: '🤝',
    points: 100,
    requirements: 'Get 10 total likes',
    unlockedBy: 867,
  },
  {
    id: 'ach-3',
    title: 'Knowledge Seeker',
    description: 'Ask 5 thoughtful questions',
    icon: '🔍',
    points: 75,
    requirements: 'Post 5 questions',
    unlockedBy: 654,
  },
  {
    id: 'ach-4',
    title: 'Mentor',
    description: 'Help others by answering 20 questions',
    icon: '👨‍🏫',
    points: 200,
    requirements: 'Answer 20 questions',
    unlockedBy: 234,
  },
];

// Mock Point Transactions
export const mockPointTransactions: PointTransaction[] = [
  {
    id: 'pt-1',
    userId: 'user-1',
    amount: 100,
    type: 'earned',
    reason: 'experience_shared',
    description: 'Shared Google L4 interview experience',
    createdAt: '2024-02-15',
  },
  {
    id: 'pt-2',
    userId: 'user-1',
    amount: 50,
    type: 'earned',
    reason: 'likes_received',
    description: 'Received 10 likes on your experience',
    createdAt: '2024-02-16',
  },
  {
    id: 'pt-3',
    userId: 'user-1',
    amount: 300,
    type: 'spent',
    reason: 'reward_claimed',
    description: 'Claimed XCampus Premium T-Shirt',
    createdAt: '2024-02-17',
  },
];

// Alumni data for scrolling section
export const mockAlumni = [
  { name: 'Sarah Chen', company: 'Google', image: '/api/placeholder/60/60' },
  { name: 'Raj Patel', company: 'Microsoft', image: '/api/placeholder/60/60' },
  { name: 'Emma Wilson', company: 'Amazon', image: '/api/placeholder/60/60' },
  { name: 'David Kim', company: 'Apple', image: '/api/placeholder/60/60' },
  { name: 'Lisa Zhang', company: 'Meta', image: '/api/placeholder/60/60' },
  { name: 'Alex Johnson', company: 'Netflix', image: '/api/placeholder/60/60' },
  { name: 'Priya Singh', company: 'Tesla', image: '/api/placeholder/60/60' },
  { name: 'Mike Brown', company: 'Uber', image: '/api/placeholder/60/60' },
];

// Testimonials data
export const mockTestimonials = [
  {
    id: 'test-1',
    name: 'Arjun Sharma',
    role: 'Software Engineer',
    company: 'Google',
    image: '/api/placeholder/60/60',
    content: 'XCampus helped me prepare for my Google interview. The real experiences shared by professionals were invaluable.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sneha Reddy',
    role: 'Product Manager',
    company: 'Microsoft',
    image: '/api/placeholder/60/60',
    content: 'The community support and detailed interview experiences made all the difference in my preparation.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Vikram Kumar',
    role: 'Data Scientist',
    company: 'Amazon',
    image: '/api/placeholder/60/60',
    content: 'Amazing platform! The points system motivated me to contribute and help others while learning.',
    rating: 4,
  },
];

// FAQ data
export const mockFAQs = [
  {
    id: 'faq-1',
    question: 'How does the points system work?',
    answer: 'You earn points by sharing interview experiences, asking thoughtful questions, and helping others. Points can be redeemed for courses, mentorship sessions, and exclusive merchandise.',
  },
  {
    id: 'faq-2',
    question: 'Is XCampus free to use?',
    answer: 'Yes! XCampus is completely free. You can access all interview experiences, ask questions, and participate in discussions without any cost.',
  },
  {
    id: 'faq-3',
    question: 'How can I verify my professional status?',
    answer: 'Upload your LinkedIn profile or company ID. Our team manually reviews and verifies professional accounts within 24-48 hours.',
  },
  {
    id: 'faq-4',
    question: 'Can I remain anonymous while sharing experiences?',
    answer: 'Absolutely! You can choose to share experiences anonymously. Your privacy and confidentiality are our top priorities.',
  },
];