const sum = require('./test/sum');

test('add 1+2 to 3', ()=>{
    expect(sum(1,2)).toBe(3)
})

test('add -1+-1 to -2', ()=>{
    expect(sum(-1,-1)).toBe(-2)
})

test('add 1+4 to 5', ()=>{
    expect(sum(1,4)).toBe(5)
})

