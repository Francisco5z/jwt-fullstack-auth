import { Router } from 'express';

import { UserControllers } from './controllers';

const routes = Router();

// routes:
routes.get('/users', UserControllers.index);
routes.post('/users', UserControllers.create);

export default routes;