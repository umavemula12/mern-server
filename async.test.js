//async.test.js

const {fetchData, MyData}= require('./test/async');

test('callback data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done(); //test case completed
        }catch(err){
            done(err);
        }

    }
    fetchData(callback);
})

test('Callback My Data', done=>{
    function callback(data){
        try{
            expect(data.id).toBe(1001);
            done();

        }catch(err){
            done(err)
        }
    }
    MyData(callback);
})

test('Mocking callback function',done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin');
        //console.log('mock function');
        done();
    })
    fetchData(MockFunction);
})