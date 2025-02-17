/*
    비동기 함수
    1. fn01: callback 지원 비동기함수
    2. fn02: promise 지원 비동기함수
*/
exports.fn01 = function(param, callback){
    /*
    비동기 코드... ex) file io, network
    */
   console.log('fn01: some code run....');

   setTimeout(function(){
    if (param != null){
        // result: success
        callback(null, {result: 'success'});
    } else {
        // fail: error
        callback(new Error('fail'), null);
    }
   }, 3000);
}

exports.fn02 = function(param){
    /*
    비동기 코드... ex) file io, network
    */
   return new Promise((resolve, reject) => {
    console.log('fn02: some code run....');

    setTimeout(function(){
        if (param != null){
            resolve({result: 'success'});
        }
        else{
            reject(new Error('fail'));
        }
    }, 3000);
   });
}