import React from 'react';

import { useAuth } from '../../context/auth';

const Dashboard: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <h1> Dashboard </h1>
      <button onClick={() => logOut()}>Sair</button>
    </div>
  )
}

export default Dashboard;