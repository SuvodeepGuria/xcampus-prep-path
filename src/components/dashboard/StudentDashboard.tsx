import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  User,
  Menu,
  X,
  TrendingUp,
  BookOpen,
  Award,
  Target,
  MessageSquare,
  Calendar,
  Download,
  ExternalLink,
  Star,
  Clock,
  Users,
  ChevronRight,
  Plus,
  Moon,
  Sun,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuthContext } from '@/hooks/useAuth';
import { useThemeContext } from '@/hooks/useTheme';
import studentCollaboration from '@/assets/student-collaboration.png';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon, color, subtitle }) => (
  <Card className="p-4 hover:shadow-lg transition-all duration-300 border-primary/10 bg-gradient-to-br from-background to-primary/5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground">{count}</p>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  </Card>
);

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'bg-primary text-primary-foreground shadow-md' 
        : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export const StudentDashboard: React.FC = () => {
  const { user, logout } = useAuthContext();
  const { mode, toggleTheme } = useThemeContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { icon: <TrendingUp className="h-5 w-5" />, label: 'Placement Exp', key: 'placement' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Hackathons', key: 'hackathons' },
    { icon: <BookOpen className="h-5 w-5" />, label: 'Internships', key: 'internships' },
    { icon: <Award className="h-5 w-5" />, label: 'Higher Study Exp', key: 'higher-study' },
    { icon: <Target className="h-5 w-5" />, label: 'Govt Exams Exp', key: 'govt-exams' },
    { icon: <Users className="h-5 w-5" />, label: 'Entrepreneurship Exp', key: 'entrepreneurship' },
    { icon: <Award className="h-5 w-5" />, label: 'Certifications', key: 'certifications' },
    { icon: <Calendar className="h-5 w-5" />, label: 'All Competitions', key: 'competitions' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Mentorship/Guidance', key: 'mentorship' },
    { icon: <User className="h-5 w-5" />, label: 'AI Career Recommendation', key: 'ai-career' },
    { icon: <BookOpen className="h-5 w-5" />, label: 'Project Support', key: 'project-support' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">X</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">XCampus</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search experiences, questions..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
            </Button>
            
            <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{user?.points || 156} EXP</span>
            </div>

            <div className="flex items-center space-x-2 bg-secondary/10 px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">100 EXP</span>
            </div>

            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {mode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] bg-background border-r border-border transition-transform duration-300 ease-in-out`}>
          <div className="p-4 space-y-2 h-full overflow-y-auto">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.key}
                icon={item.icon}
                label={item.label}
                isActive={activeSection === item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  setIsSidebarOpen(false);
                }}
              />
            ))}
            
            <div className="pt-4 border-t border-border">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Log Out
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <DashboardCard
              title="Profile Score"
              count={85}
              icon={<User className="h-5 w-5 text-white" />}
              color="bg-primary"
              subtitle="Complete your profile"
            />
            <DashboardCard
              title="Ongoing Hackathons"
              count={3}
              icon={<Calendar className="h-5 w-5 text-white" />}
              color="bg-secondary"
              subtitle="Active registrations"
            />
            <DashboardCard
              title="Internship Applications"
              count={12}
              icon={<BookOpen className="h-5 w-5 text-white" />}
              color="bg-accent"
              subtitle="In progress"
            />
            <DashboardCard
              title="Saved Projects"
              count={8}
              icon={<Star className="h-5 w-5 text-white" />}
              color="bg-primary-glow"
              subtitle="Your bookmarks"
            />
          </div>

          {/* Welcome Message */}
          <Card className="mb-8 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Excited to kick off this journey together?
                </h2>
                <p className="text-muted-foreground">
                  Real experiences, real questions, real guidance – everything you need to ace your interview.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-glow">
                <Plus className="h-4 w-4 mr-2" />
                Add Image
              </Button>
            </div>
          </Card>

          {/* Share Experiences Section */}
          <Card className="mb-8 p-6 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Share Your Experience
                </h3>
                <p className="text-muted-foreground">
                  Help fellow students by sharing your interview experiences and insights
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = '/experiences'}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary-glow hover:to-accent"
              >
                <Plus className="h-4 w-4 mr-2" />
                Share Experience
              </Button>
            </div>
          </Card>

          {/* Student Heat Map */}
          <Card className="mb-8 p-6">
            <h3 className="text-lg font-semibold mb-4">Student Heat Map</h3>
            <div className="bg-muted/30 h-32 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Interactive heat map visualization</p>
            </div>
          </Card>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Resume Builder</h4>
                  <p className="text-sm text-muted-foreground">Continue</p>
                </div>
              </div>
              <Progress value={65} className="mt-3" />
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Placement Experience</h4>
                  <p className="text-sm text-muted-foreground">Add overview</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Higher Studies</h4>
                  <p className="text-sm text-muted-foreground">Master Degree, Study Abroad</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <Badge variant="secondary">Overview</Badge>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-glow/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <h4 className="font-medium">Mentorship</h4>
                  <p className="text-sm text-muted-foreground">Connect with mentors</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Activity Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Trending Startups</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Top startups in this week</span>
                  <Badge variant="outline">Most discussed in forums</Badge>
                </div>
                <div className="bg-muted/20 p-3 rounded-lg">
                  <Badge className="bg-red-100 text-red-700">Statistics</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Govt Exams</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">No of govt exam</span>
                  <span className="text-sm text-muted-foreground">Countdown</span>
                </div>
                <div className="bg-muted/20 p-3 rounded-lg">
                  <Badge className="bg-orange-100 text-orange-700">View All</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* More Activity Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Hackathons</h3>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">Hack Storms</div>
                <div className="bg-muted/20 p-3 rounded-lg">
                  <div className="text-sm">Code Fest</div>
                  <div className="text-xs text-muted-foreground">22 15</div>
                  <Badge className="mt-2 bg-red-100 text-red-700">View All</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Competitions</h3>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">No of competitions</div>
                <div className="bg-muted/20 p-3 rounded-lg">
                  <div className="text-sm">Countdown</div>
                  <Badge className="mt-2 bg-red-100 text-red-700">Statistics</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Internships</h3>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">No of competitions</div>
                <div className="bg-muted/20 p-3 rounded-lg">
                  <div className="text-sm">Countdown</div>
                  <Badge className="mt-2 bg-red-100 text-red-700">View All</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Collaboration Image Section */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Area of Interest</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Web Dev, App Dev, Data Analytics, PowerBI, Java Developer, Electrical Engineering, 
                  Mechanical Engineering, Civil Engineering, Chemical Engineering, Others
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                  <Badge variant="secondary">Java Developer</Badge>
                  <Badge variant="secondary">PowerBI</Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src={studentCollaboration} 
                  alt="Students collaborating" 
                  className="w-64 h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Card>

          {/* Bottom Tagline */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Real experiences, real questions, real guidance – everything you need to ace your interview.
            </h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <X className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};