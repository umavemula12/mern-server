//test/async.js
//how we can perform unit tests on async function

function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:1001});
    },3000)
}
//returns admin calls admin after 3 seconds
module.exports= {fetchData, MyData};
