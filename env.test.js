//env.test.js
let dataSets = [];
//execute my env before all
beforeAll(()=>{
    dataSets=['raju', 'ram'];

})
beforeEach(()=>{
    console.log('Before Each setup is called')
})
afterEach(()=>{
    console.log('After Each setup is called');
})
afterAll(()=>{
    dataSets=[];
})
test('Test case', ()=>{
    expect(dataSets.length).toBe(2);
})
test('Data set contains ', ()=>{
    expect(dataSets).toContain('ram');
})
test('Data set contains ', ()=>{
    expect(dataSets).toContain('raju');
})
