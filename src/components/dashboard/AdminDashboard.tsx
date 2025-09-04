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
  LogOut,
  Monitor,
  BarChart3,
  FileText,
  UserCog,
  Shield,
  Activity,
  Database,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock4,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuthContext } from '@/hooks/useAuth';
import { useThemeContext } from '@/hooks/useTheme';
import { PointsCard } from '@/components/rewards/PointsCard';
import { RedemptionModal } from '@/components/rewards/RedemptionModal';
import { Footer } from '@/components/layout/Footer';

interface AdminCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ title, count, icon, color, subtitle }) => (
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

export const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuthContext();
  const { mode, toggleTheme } = useThemeContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showRedemptionModal, setShowRedemptionModal] = useState(false);

  const sidebarItems = [
    { icon: <Monitor className="h-5 w-5" />, label: 'Exp page monitoring', key: 'exp-monitoring' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Q & A page monitor', key: 'qa-monitoring' },
    { icon: <Database className="h-5 w-5" />, label: 'Resource hub monitor', key: 'resource-monitor' },
    { icon: <User className="h-5 w-5" />, label: 'Profile page monitor', key: 'profile-monitor' },
    { icon: <TrendingUp className="h-5 w-5" />, label: 'Students Dashboard', key: 'students-dashboard' },
    { icon: <BarChart3 className="h-5 w-5" />, label: 'Sales dashboard', key: 'sales-dashboard' },
    { icon: <Activity className="h-5 w-5" />, label: 'Analytics Dashboard', key: 'analytics-dashboard' },
    { icon: <Shield className="h-5 w-5" />, label: 'AI Moderation', key: 'ai-moderation' },
    { icon: <Bell className="h-5 w-5" />, label: 'Quiz: Notifications/Announcements', key: 'notifications' },
    { icon: <Users className="h-5 w-5" />, label: 'Collaboration board', key: 'collaboration' },
    { icon: <Search className="h-5 w-5" />, label: 'Talent Search', key: 'talent-search' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', key: 'settings' },
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
            
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">X</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">XCampus Admin</span>
            </button>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search users, reports, analytics..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Admin Dashboard Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mr-6">
            <button
              onClick={() => window.location.href = '/experiences'}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Experiences
            </button>
            <button
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <PointsCard onRedeemClick={() => setShowRedemptionModal(true)} />
            <AdminCard
              title="Students Active"
              count={320}
              icon={<Users className="h-5 w-5 text-white" />}
              color="bg-primary"
            />
            <AdminCard
              title="Tasks Pending"
              count={64}
              icon={<Clock4 className="h-5 w-5 text-white" />}
              color="bg-secondary"
            />
            <AdminCard
              title="Reports Generated"
              count={12}
              icon={<FileText className="h-5 w-5 text-white" />}
              color="bg-accent"
            />
            <AdminCard
              title="Success Upload waiting"
              count={5}
              icon={<CheckCircle className="h-5 w-5 text-white" />}
              color="bg-primary-glow"
            />
          </div>

          {/* More Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <AdminCard
              title="Company reviews pending"
              count={7}
              icon={<Star className="h-5 w-5 text-white" />}
              color="bg-yellow-500"
            />
            <AdminCard
              title="Assign tasks"
              count={7}
              icon={<Target className="h-5 w-5 text-white" />}
              color="bg-green-500"
            />
            <div className="flex flex-col items-center justify-center p-4">
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">remind me</span>
            </div>
          </div>

          {/* Share Experiences Section for Admin */}
          <Card className="mb-8 p-6 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Manage Experiences
                </h3>
                <p className="text-muted-foreground">
                  Review, moderate and manage student experiences
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = '/experiences'}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary-glow hover:to-accent"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Experiences
              </Button>
            </div>
          </Card>

          {/* Charts and Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {/* Student Activity Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Student Activity Chart</h3>
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative">
                <TrendingUp className="h-12 w-12 text-primary/50" />
                <div className="absolute bottom-4 left-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
            </Card>

            {/* Applications Trend */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Applications Trend</h3>
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-secondary/50" />
              </div>
            </Card>

            {/* Sales PI Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sales PI Chart</h3>
              <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center relative">
                <div className="w-24 h-24 border-8 border-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">Sales</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Task & Approval Queue and Other Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Task & Approval Queue</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Experiences</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Job postings / Interview experiences</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Q&A</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Pending / flagged questions</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Company reviews</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Approve / reject / anonymize</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Database className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Resource uploads</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Templates, mock interview slots</span>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              {/* Pending Tasks */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Pending Tasks</h3>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">QA page monitor</div>
                  <div className="text-sm text-muted-foreground">Item queue monitor</div>
                </div>
              </Card>

              {/* Activity Feed */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
                <div className="space-y-2">
                  <div className="text-sm">Upcoming Events</div>
                  <div className="text-xs text-muted-foreground">New internships/hackathons request</div>
                  <div className="text-xs text-muted-foreground">Recent Registrations</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Podcast and Additional Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Podcast</h3>
              <div className="h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">🎧</span>
                  </div>
                  <div className="text-sm font-medium">PODCAST</div>
                  <div className="text-xs text-muted-foreground">review & upload podcast</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Gamification Monitor</h3>
              <div className="space-y-3">
                <Badge variant="outline">Leaderboard</Badge>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Announcements</h3>
              <div className="space-y-2">
                <div className="text-sm">System message,</div>
                <div className="text-sm">urgent alert</div>
              </div>
            </Card>
          </div>

          {/* Bottom Action Items */}
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total Mentors</span>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">reports & insights - Download reports (CSV, PDF)</span>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">user management - add/remove student , mentor</span>
                <Button variant="ghost" size="sm">
                  <UserCog className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Add about , community , contact us this type block like coding ninjas platform bottom section (link it with contact us)
            </p>
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

      {/* Redemption Modal */}
      <RedemptionModal 
        isOpen={showRedemptionModal} 
        onClose={() => setShowRedemptionModal(false)} 
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};