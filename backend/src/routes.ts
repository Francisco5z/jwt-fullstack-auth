import { Router } from 'express';

import { UserControllers } from './controllers';

const routes = Router();

// routes:
routes.get('/users', UserControllers.index);
routes.get('/users/:id', UserControllers.show);
routes.post('/users', UserControllers.create);
routes.put('/edit/users/:id', UserControllers.update);
routes.delete('/users/:id', UserControllers.delete);

export default routes;