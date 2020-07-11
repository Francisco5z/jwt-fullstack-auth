import { Request, Response } from 'express';

import connection from '../database';
import { generateId, generateToken } from './utils';

import bcrypt from 'bcrypt';

class UserControllers {
  async index(req: Request, res: Response) {
    const users = await connection('users').select('*');
    
    return res.json(users);
  }
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await connection('users').where("id", id).first();

    if (!user) {
      return res.status(404).json({ msg: "user not found" })
    }

    return res.json(user);
  }
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await connection('users').where('email', email);

    if (!user) {
      return res.status(400).json({ msg: "user already exists" });
    }

    const id = generateId(5)
    await connection('users').insert({
      id,
      name,
      email,
      password: await bcrypt.hash(password, 10)
    });

    return res.status(200).json({ 
      user: await connection('users').where('id', id).first(), 
      token: generateToken({ id }) 
    });
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;

    const user = await connection('users').where('id', id).first();
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await connection('users').where("id", id).update(req.body);

    return res.status(200).send();
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const user = await connection('users').where({ id }).first();

    if (!user) {
      return res.status(404).json({ msg: "user not found" })
    }

    await connection('users').where("id", id).del();

    return res.status(200).send();
  }
}

export default new UserControllers();