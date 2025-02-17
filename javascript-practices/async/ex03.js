/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const {fn02} = require('./fns');

const fn = async (param) => {
    const result = await fn02(param);
    console.log(result);
}

fn('ex03params');
fn(null);

console.log('wait....');