import React, { useState } from 'react';

import { useAuth } from '../../context/auth';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error } = useAuth();

  function handleLogin() {
    signIn('fg45874587@gmail.com', '4587');
  }
  
  return (
    <div>
      <form>
        <Input 
          type="text"  
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <PasswordInput 
          type="text"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </form>
    </div>
  );
}

export default Login;