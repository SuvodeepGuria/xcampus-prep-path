import React, { useState, useEffect } from 'react';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { WelcomeAnimation } from '@/components/dashboard/WelcomeAnimation';
import { AdminWelcomeAnimation } from '@/components/dashboard/AdminWelcomeAnimation';
import { useAuthContext } from '@/hooks/useAuth';

export const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuthContext();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome animation for new users or first login
    if (isAuthenticated && user) {
      const hasSeenWelcome = localStorage.getItem(`welcome_shown_${user.id}`);
      if (!hasSeenWelcome) {
        setShowWelcome(true);
      }
    }
  }, [isAuthenticated, user]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    if (user) {
      localStorage.setItem(`welcome_shown_${user.id}`, 'true');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground">Please log in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  // Render different dashboards based on user role
  if (user?.role === 'admin') {
    return (
      <>
        <AdminDashboard />
        <AdminWelcomeAnimation
          isOpen={showWelcome}
          onClose={handleCloseWelcome}
          userName={user?.fullName || 'Admin'}
        />
      </>
    );
  }

  return (
    <>
      <StudentDashboard />
      <WelcomeAnimation
        isOpen={showWelcome}
        onClose={handleCloseWelcome}
        userName={user?.fullName || 'Student'}
      />
    </>
  );
};