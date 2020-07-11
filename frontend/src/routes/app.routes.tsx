import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Route exact path="/" component={Dashboard} />
  )
}

export default AppRoutes;