import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../context/auth';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Switch>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </Switch>
  );
}

export default Routes;