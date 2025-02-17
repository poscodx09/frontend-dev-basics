/*
    promise 지원 비동기 함수 사용 I: ~ then ~ catch 
*/
const {fn02} = require('./fns');


// test: success
fn02('params~~')
    .then((res) => console.log(`result: ${res}`))
    .catch((err) => console.log(err));

// test: fail
fn02(null)
    .then((res) => console.log(`result: ${res}`))
    .catch((err) => console.log(err));

console.log('wait.......');