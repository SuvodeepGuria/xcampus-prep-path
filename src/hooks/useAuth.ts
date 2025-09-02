import { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthState } from '@/types';

// Mock authentication hook
export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = () => {
      try {
        const savedUser = localStorage.getItem('xcampus_user');
        if (savedUser) {
          const user = JSON.parse(savedUser) as User;
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    // Simulate network delay
    setTimeout(checkAuth, 1000);
  }, []);

  const login = async (email: string, password: string, name?: string, role?: 'student' | 'professional' | 'admin'): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock validation - accept any email/password combination
      if (email && password && name && role) {
        const mockUser: User = {
          id: `user-${Date.now()}`,
          email,
          fullName: name,
          role,
          points: 150,
          createdAt: new Date().toISOString(),
          achievements: ['first-post'],
          isVerified: false,
        };

        localStorage.setItem('xcampus_user', JSON.stringify(mockUser));
        setAuthState({
          user: mockUser,
          isAuthenticated: true,
          isLoading: false,
        });

      // Navigate to dashboard after successful login
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 100);
      
      return { success: true };
      }

      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const register = async (userData: {
    fullName: string;
    email: string;
    password: string;
    role: 'student' | 'professional' | 'admin' | 'guest';
  }): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newUser: User = {
        id: `user-${Date.now()}`,
        email: userData.email,
        fullName: userData.fullName,
        role: userData.role,
        points: 50, // Welcome bonus
        createdAt: new Date().toISOString(),
        achievements: [],
        isVerified: false,
      };

      localStorage.setItem('xcampus_user', JSON.stringify(newUser));
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      });

      // Navigate to dashboard after successful registration  
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 100);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('xcampus_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const updateUser = (userData: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...userData };
      localStorage.setItem('xcampus_user', JSON.stringify(updatedUser));
      setAuthState({
        ...authState,
        user: updatedUser,
      });
    }
  };

  return {
    ...authState,
    login,
    register,
    logout,
    updateUser,
  };
};

export type AuthContextType = ReturnType<typeof useAuth>;

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};