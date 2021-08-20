// Write your tests here
const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('./server');
const User = require('../api/auth/auth-model');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
// beforeEach(async () => {
//   await db.seed.run();
// });
afterAll(async () => {
  await db.destroy();
});

const newUser = {username: "test", password: "1234"};

describe('[POST] /api/auth/register', () => {
  it('should return a 201 created status', async () => {
    const res = await request(server)
    .post('/api/auth/register')
    .send(newUser);
    expect(res.status).toBe(201);
  });
});

describe('[POST] /api/auth/login', () => {
  it('should return a 200 OK for good login', async () => {
    const res = await request(server)
    .post('/api/auth/login')
    .send(newUser);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({message: "welcome, test"});
  });
});


describe('user db access for register and login', () => {
  describe('User.add', () => {
    it('adds a new user to the table and returns the new record as an object', async () => {
      await User.add({ username: 'test2', password: '1234' });
      const rows = await db('users'); 
      expect(rows).toHaveLength(2);
    });
    it('resolves to the newly inserted hobbit', async () => {
      const newUser = await User.add({ username: 'test3', password: '1234' })
      expect(newUser).toMatchObject({ id: 3, username: 'test3' });
    });
// Don't know why authorization header is not coming through...
    it('should return a 200 OK for after good login', async () => {
      const res = await request(server)
      .get('/api/jokes')
      expect(res.status).toBe(200);
      const rows = await db('jokes'); 
      expect(rows).toHaveLength(3);  });
  });
});
