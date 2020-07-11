import React from 'react';

import { useAuth } from '../../context/auth';

const Login: React.FC = () => {
  const { signIn, error } = useAuth();

  function handleLogin() {
    signIn('fg45874587@gmail.com', '4587');
  }
  
  return (
    <div>
      <p> {error} </p>
      <h1> Login </h1>
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
}

export default Login;