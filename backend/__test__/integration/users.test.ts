import req from 'supertest';

import { truncate } from '../utils';
import app from '../../src/app';

var id = '';

describe('Users', () => {
  afterAll(() => {
    truncate('users');
  });
  
  it('should create a user', async () => {
    const response = await req(app).post('/users').send({
      name: "Francisco",
      email: "fg45874587@gmail.com",
      password: "4587"
    });

    id = response.body.user.id;

    expect(response.status).toBe(200);
  });
  it('should edit user information', async () => {
    const response = await req(app).put(`/edit/users/${id}`).send({
      name: "Francisco Zhou Liu",
      email: "fg4587@gmail.com",
      password: "1234"
    });

    expect(response.status).toBe(200);
  });
});