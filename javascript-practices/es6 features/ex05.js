/*
    Destruction(구조분해)

*/


console.log('---[1. basic]');
const user = {
    firstName: '둘',
    lastName: '리',
    age: 10
};


console.log('---[2. Default Value]');
const goods1 = {name: 'TV', price: 1000, countStock: 10};
const goods2 = {name: 'TV2', price: 3000, countStock: 50};
const goods3 = {name: 'TV3', price: 4000, countStock: 20};

const printGoods = function({name, price, countStock}){
    console.log(name, price, countStock);
}

printGoods(goods1);
printGoods(goods2);
printGoods(goods3);

console.log('---[3. 구조 분해 대상이 되는 객체의 속성 이름과 다른 이름 사용]');
const person = {
    n: '마이콜',
    c: 'korea'
};

console.log('---[4. 내부객체(netsted object)의 구조분해]');
const student = {
    email: 'dooly@gmail.com',
    score: {
        math: 30,
        korean: 100,
        science: 60
    }
}

const {email, score: {math, korean, science}} = student;
console.log(email, math, korean, science);

const avgScore = () => console.log(`${email}:${Math.round((math+korean+science)/3, 2)}`);
avgScore(student);


console.log('---[5. 함수 파라미터]');


console.log('---[6. 배열의 구조 분해: Basic]');
const color = [155, 200, 75];




console.log('---[7. 배열의 구조 분해: Default Value]');



console.log('---[8. 배열의 구조 분해: skip value]');


console.log('---[9. Swap]');


console.log('---[10. Spread Operator]');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

console.log('---[10.01 가변 파라미터 함수]');
const printColor = function() {
    Array.from(arguments).forEach(e => console.log(e));
}
printColor(...colors);

console.log('---[10.02 함수 파라미터 이름에 사용]');

var user1 = {
    name: '둘리',
    no: 10
};

function f({no, name}){
    console.log(`no:${no}, name:${name}`);
}

f(user1);