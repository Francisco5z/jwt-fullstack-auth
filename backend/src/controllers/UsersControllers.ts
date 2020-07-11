import { Request, Response } from 'express';

import connection from '../database';
import { generateId } from './utils';

class UserControllers {
  async index(req: Request, res: Response) {
    const users = await connection('users').select('*');

    return res.json(users);
  }
  async show(req: Request, res: Response) {}
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    await connection('users').insert({
      id: generateId(5),
      name,
      email,
      password
    });

    return res.status(200).json();
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;

    await connection('users').where({ id }).update(req.body);

    return res.status(200).send();
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await connection('users').where({ id }).del();

    return res.status(200).send()
  }
}

export default new UserControllers();