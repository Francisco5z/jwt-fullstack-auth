import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import connection from '../database';
import { generateToken } from './utils';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

class SessionController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user: User = await connection('users').where('email', email).first();

    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ msg: "Password invalid" });
    }

    return res.json({
      user,
      token: generateToken({ id: user.id })
    });
  }
}

export default new SessionController();