import React, { createContext, useState, useContext } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextValues {
  signed: boolean;
  user: User | null
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ signed: !!user, user }}></AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;