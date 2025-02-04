/*
Array 객체 함수: Array.prototype.*
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];



console.log("============[02.01] concat");
console.log("============[02.02] stack 지원");
var color = colors.pop();
console.log(color, colors);


console.log("============[02.03] join");
var s = fruits.join(":");
console.log(s);

console.log("============[02.04] reverse");
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("============[02.05] shift");
var numbers1 = [1000, 2000, 3000, 4000, 5000];
var number = numbers1.shift();
console.log(number, numbers1);

console.log("============[02.06] slice");
var numbers2 = numbers1.slice(1,3);
console.log(numbers2);

console.log("============[02.07] splice(index, count)");
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// index에서 count개를 삭제하고 replace를 대체한 후, 삭제된 요소를 배열로 반환
console.log("============[02.07] splice(index, count, replace)");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);

console.log("============[02.07] splice: as a removeAt()");


console.log("============[02.07] splice: as a insertAt()");
console.log("============[02.08] sort");
console.log("============[02.09] unshift");
console.log("============[02.10] indexOf");
console.log("============[02.11] lastIndexOf");
