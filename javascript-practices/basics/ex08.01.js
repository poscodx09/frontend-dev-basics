console.log("============[01.01] 배열생성: 내장객체(생성자함수) 사용");
var a1 = new Array();
console.log(typeof(a1, a1 instanceof(Array)));


// 생성자 함수의 파라미터가 한 개인 경우: 배열의 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof(Array), a2.length);

// 배열의 크기를 지정하는 것은 아무 의미가 없다.
a2[0] = 0;
a2[1] = "hello";
a2[10] = {};
console.log(a2, a2.length);

// 생성자 함수의 파라미터가 두 개이상인 경우: 배열 초기화
var a3 = new Array(0, "hello", {});
console.log(a3, a3.length);

console.log("============[01.02] 배열생성: 리터럴 사용");

var a4 = [];
console.log(typeof(a4), a4 instanceof(Array), a4.length);

// 배열의의 요소의 타입은 동일하지 않아도 된다.
var a5 = [10, 'JavaScript',
    { name: '둘리', age: 10 },
    function() { console.log('hello world')}];

a5[3]();

console.log("============[01.03] 배열순회");
for(var i = 0; i < a5.length; i++){
    console.log(a5[i]);
}

console.log("============[01.04] Array vs Object");

console.log("============[01.05] for ~ in: 객체");

console.log("============[01.05] for ~ in: 배열");

