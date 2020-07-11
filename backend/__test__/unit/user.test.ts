import req from 'supertest';
import bcrypt from 'bcrypt';

import app from '../../src/app';
import { truncate } from '../utils';
import connection from '../../src/database';

describe('User', () => {
  beforeAll(async () => {
    await req(app).post('/users').send({
      name: "Francisco",
      email: "fg@gmail.test.com",
      password: "1234"
    });
  });
  afterAll(() => truncate('users'));

  it('should encrypt user password', async () => {
    const user = await connection('users').where('email', 'fg@gmail.test.com').first();

    const compareHash = await bcrypt.compare('1234', user.password);

    expect(compareHash).toBe(true)
  });
});
