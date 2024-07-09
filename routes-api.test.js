//routes-api.test.js
//jest test to test out http get method 
//well test if it contains all the pars or not
const app =require('./index');
const request=  require('supertest');

describe('GET /users',()=>{
    test('Get users from /user api', async()=>{
        const res= await request(app).get('/users').expect(200);
        //const data = res.data
        console.log('/user api working');
        console.log(res.body.getUsers[0]);
        const data = res.body;
        data.getUsers.forEach(user=>{
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('name');
        })
    })
})