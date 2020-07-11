import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';

const AuthRoutes: React.FC = () => {
  return (
    <Route exact path="/" component={Login} />
  );
}

export default AuthRoutes;