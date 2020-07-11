import { Router } from 'express';

import { UserControllers, SessionController} from './controllers';

import authMiddleware from './middleware/auth';

const routes = Router();

// routes:
routes.get('/users', UserControllers.index);
routes.get('/users/:id', UserControllers.show);
routes.post('/users', UserControllers.create);
routes.put('/edit/users/:id', UserControllers.update);
routes.delete('/users/:id', UserControllers.delete);

routes.post('/session', SessionController.authenticate);

routes.get('/ok', authMiddleware, (req, res) => {
  return res.send({ msg: 'ok' });
}); 

export default routes;