/*
    자바스크립트 함수
*/


console.log("============[01.01] 함수를 생성(정의) 방법: literal1");
function f1(a, b){
    return a + b;
}

console.log("============[01.02] 함수를 생성(정의) 방법: literal2");
var f2 = function(a, b) {
    return a + b;
}

console.log("============[01.03] 함수를 생성(정의) 방법: Function() 생성자 함수");
var f3 = new Function("a", "b", "return a + b");

console.log("============[01.04] 함수를 생성(정의) 방법: 익명(Anonymous) 함수");
setTimeout(function(){
    console.log('time out')
}, 1000);

console.log("============[01.05] 함수를 생성(정의) 방법: 즉시 실행 함수");
console.log("============[02] 기변 파라미터");

// var sum = function() {
//     var sum = 0;
//     Array.prototype.forEach.call(arguments, function(e){
//         sum += e;
//     })

//     return sum;
// }

const sum = (...args) => {
    let total = 0;
    args.forEach(num => total += num);
    return total;
};

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));


console.log("============[03] caller(this) 바꾸기");
var myObject = {
    v: 'me',
    f1: function(){
        console.log(this.v);
    },
    f2: function(param1){
        console.log(param1 + "...")
    }
};

myObject.f1();

// apply: 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꿔서 즉시 호출~~~~
var yourObject = {
    v: "you"
}

myObject.f1.apply(yourObject);

// call: 호출되는 함수의 this를 첫번째 파라미터로 전달되는 객체로 바꿔서 즉시 그 함수를 호출한다.
myObject.f2.call(yourObject, "Hello");

// bind: 호출되기 전의 함수의 this를 파라미터로 전달되는 객체로 바인드한다.
var f3 = function(){
    console.log(this.v);
}.bind(myObject);

