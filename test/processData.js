//test/processData.js

const {getData, getRaw }= require('./utils');

function processData(){
    return `Processed: ${getData()}`;
    //processed real daa
}
function processRaw(){
    return getRaw()
    //processed real daa
}

module.exports= {processData, processRaw};