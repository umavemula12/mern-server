//mock.test.js

jest.mock('./test/utils', () => ({
    getData: jest.fn(),
    getRaw: jest.fn(),
}));

const { getData, getRaw } = require('./test/utils');
const {processData, processRaw} = require('./test/processData');

//mockReturnValue ->
test('mocked the process data', () => {
    // Mock the return value of getData
    getData.mockReturnValue('Mocked Data');
    
    // Check the result of processData
    expect(processData()).toBe('Processed: Mocked Data');
});

test('Mocked raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})
