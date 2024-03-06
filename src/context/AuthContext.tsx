import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}
export interface AuthContextType {
  auth: AuthState;
  setAuth: (state: AuthState) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    accessToken: null,
    refreshToken: null
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
