import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { 
  hashPassword, 
  verifyPassword, 
  generateId, 
  validateEmail, 
  validatePassword,
  sanitizeInput,
  getStoredUsers,
  storeUsers,
  getCurrentSession,
  setCurrentSession,
  clearCurrentSession,
  isSessionValid
} from '../utils/auth';
import toast from 'react-hot-toast';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (isSessionValid()) {
          const session = getCurrentSession();
          if (session) {
            const users = getStoredUsers();
            const currentUser = users.find(u => u.id === session.userId);
            if (currentUser) {
              setUser(currentUser);
            } else {
              clearCurrentSession();
            }
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        clearCurrentSession();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean = false): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const sanitizedEmail = sanitizeInput(email.toLowerCase());
      
      if (!validateEmail(sanitizedEmail)) {
        toast.error('Please enter a valid email address');
        return false;
      }

      const users = getStoredUsers();
      const user = users.find(u => u.email === sanitizedEmail);
      
      if (!user) {
        toast.error('Invalid email or password');
        return false;
      }

      const isPasswordValid = await verifyPassword(password, user.password);
      
      if (!isPasswordValid) {
        toast.error('Invalid email or password');
        return false;
      }

      setCurrentSession(user.id, rememberMe);
      setUser(user);
      toast.success(`Welcome back, ${user.username}!`);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const sanitizedUsername = sanitizeInput(username);
      const sanitizedEmail = sanitizeInput(email.toLowerCase());
      
      if (!sanitizedUsername || sanitizedUsername.length < 2) {
        toast.error('Username must be at least 2 characters long');
        return false;
      }

      if (!validateEmail(sanitizedEmail)) {
        toast.error('Please enter a valid email address');
        return false;
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        toast.error(passwordValidation.errors[0]);
        return false;
      }

      const users = getStoredUsers();
      
      if (users.some(u => u.email === sanitizedEmail)) {
        toast.error('An account with this email already exists');
        return false;
      }

      if (users.some(u => u.username.toLowerCase() === sanitizedUsername.toLowerCase())) {
        toast.error('This username is already taken');
        return false;
      }

      const hashedPassword = await hashPassword(password);
      const newUser: User = {
        id: generateId(),
        username: sanitizedUsername,
        email: sanitizedEmail,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      users.push(newUser);
      storeUsers(users);
      
      setCurrentSession(newUser.id, false);
      setUser(newUser);
      toast.success(`Welcome to SocialSched, ${newUser.username}!`);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred during signup');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      clearCurrentSession();
      setUser(null);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    }
  };

  const updateProfile = async (updates: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      setIsLoading(true);
      const users = getStoredUsers();
      const userIndex = users.findIndex(u => u.id === user.id);
      
      if (userIndex === -1) return false;

      if (updates.username) {
        const sanitizedUsername = sanitizeInput(updates.username);
        if (sanitizedUsername.length < 2) {
          toast.error('Username must be at least 2 characters long');
          return false;
        }
        
        if (users.some(u => u.id !== user.id && u.username.toLowerCase() === sanitizedUsername.toLowerCase())) {
          toast.error('This username is already taken');
          return false;
        }
        updates.username = sanitizedUsername;
      }

      if (updates.email) {
        const sanitizedEmail = sanitizeInput(updates.email.toLowerCase());
        if (!validateEmail(sanitizedEmail)) {
          toast.error('Please enter a valid email address');
          return false;
        }
        
        if (users.some(u => u.id !== user.id && u.email === sanitizedEmail)) {
          toast.error('An account with this email already exists');
          return false;
        }
        updates.email = sanitizedEmail;
      }

      const updatedUser = {
        ...users[userIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };

      users[userIndex] = updatedUser;
      storeUsers(users);
      setUser(updatedUser);
      toast.success('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Update profile error:', error);
      toast.error('An error occurred while updating profile');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    try {
      if (!user) return false;
      
      setIsLoading(true);
      
      const isCurrentPasswordValid = await verifyPassword(currentPassword, user.password);
      if (!isCurrentPasswordValid) {
        toast.error('Current password is incorrect');
        return false;
      }

      const passwordValidation = validatePassword(newPassword);
      if (!passwordValidation.isValid) {
        toast.error(passwordValidation.errors[0]);
        return false;
      }

      const users = getStoredUsers();
      const userIndex = users.findIndex(u => u.id === user.id);
      
      if (userIndex === -1) return false;

      const hashedNewPassword = await hashPassword(newPassword);
      users[userIndex].password = hashedNewPassword;
      users[userIndex].updatedAt = new Date().toISOString();
      
      storeUsers(users);
      setUser(users[userIndex]);
      toast.success('Password changed successfully');
      return true;
    } catch (error) {
      console.error('Change password error:', error);
      toast.error('An error occurred while changing password');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    changePassword,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};