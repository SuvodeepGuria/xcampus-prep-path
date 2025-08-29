import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LoginModal } from '@/components/auth/LoginModal';
import { RegisterModal } from '@/components/auth/RegisterModal';
import { useAuthContext } from '@/hooks/useAuth';
import { useThemeContext } from '@/hooks/useTheme';
import { 
  ChevronDown, 
  Moon, 
  Sun, 
  User, 
  Settings, 
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';


export const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthContext();
  const { mode, toggleTheme } = useThemeContext();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleOpenRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">X</span>
              </div>
              <span className="text-xl font-bold text-foreground">XCampus</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* User Section Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <span>User Section</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem 
                    onClick={() => scrollToSection('students-section')}
                    className="cursor-pointer"
                  >
                    Students
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection('professionals-section')}
                    className="cursor-pointer"
                  >
                    Professionals
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection('admin-section')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Admin Section
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden sm:flex"
              >
                {mode === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>

              {/* Authenticated User Menu */}
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-3">
                  {/* Notifications */}
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
                  </Button>

                  {/* Points Display */}
                  <div className="hidden sm:flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      {user.points} pts
                    </span>
                  </div>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.fullName}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <div className="px-2 py-1.5">
                        <p className="text-sm font-medium">{user.fullName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                /* Unauthenticated - Show Create Account button */
                <Button 
                  onClick={handleOpenRegister}
                  className="hidden sm:inline-flex"
                  variant="default"
                >
                  Create Account
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('students-section')}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Students
                </button>
                <button
                  onClick={() => scrollToSection('professionals-section')}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Professionals
                </button>
                <button
                  onClick={() => scrollToSection('admin-section')}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Admin Section
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Contact Us
                </button>
                
                {!isAuthenticated && (
                  <div className="pt-4 border-t border-border">
                    <Button 
                      onClick={handleOpenRegister}
                      className="w-full"
                      variant="default"
                    >
                      Create Account
                    </Button>
                  </div>
                )}

                {/* Theme toggle for mobile */}
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="justify-start px-0"
                >
                  {mode === 'light' ? (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleOpenRegister}
      />
      
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
};