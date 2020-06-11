const request = require('supertest');
const app = require('./app');


describe('endpoints', () => {
    it('should return 200', async () => {
        const res = await request(app)
            .get('/');
        expect(res.status).toEqual(200);
    })
});