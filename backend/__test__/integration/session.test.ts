import req from 'supertest';

import { truncate } from "../utils";
import app from '../../src/app';

var token = ''

describe('Authentication', () => {
  beforeAll(async () => {
    await req(app).post('/users').send({
      name: "Francisco",
      email: "fg@gmail.com",
      password: "4587"
    });
  });
  afterAll(() => truncate('users'));

  it("should authenticate with valid credentials", async () => {
    const response = await req(app).post('/session').send({
      email: "fg@gmail.com",
      password: "4587"
    });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    const response = await req(app).post('/session').send({
      email: "fg@gmail.com",
      password: "458"
    });
    
    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async () => {
    const response = await req(app).post('/session').send({
      email: "fg@gmail.com",
      password: "4587"
    });

    token = response.body.token;

    expect(response.body).toHaveProperty('token');
  });

  it('should be able to access private routes when authenticated', async () => {
    const response = await req(app).get('/ok').set('Authorization', `Bearer ${token}`);

    expect(response.body.msg).toBe('ok');
  });
});