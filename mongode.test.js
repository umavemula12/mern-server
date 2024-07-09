const mongoose = require('mongoose');
//jest.setTimeout(30000);

describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://umavemula2005:WJFYDMeud2BfPtbW@cluster0.rlxavnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    })
    //call test case inside describe abd below before all
    test('MongoDB connected to server', ()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})
