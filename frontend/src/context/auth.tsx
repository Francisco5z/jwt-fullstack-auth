import React, { createContext, useState, useContext, useEffect } from 'react';

import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextValues {
  signed: boolean;
  user: User | null;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  error: string | null; 
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@RAuth:user');
      const storagedToken = localStorage.getItem('@RAuth:token');

      api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await auth.signIn({ email, password });

    if (typeof response === 'number') {
      if (response === 401) {
        setError('Senha inválida');
      }
      if (response === 404) {
        setError('Email inválido')
      }
      setTimeout(() => setError(null), 2000);
    } else {
      setUser(response?.data);
      
      api.defaults.headers.authorization = `Bearer ${response?.data.token}`;
      
      localStorage.setItem('@RAuth:token', response?.data.token);
      localStorage.setItem('@RAuth:token', JSON.stringify(response?.data.user));
    }
  }

  async function logOut() {
    localStorage.clear();

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, logOut, error}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;