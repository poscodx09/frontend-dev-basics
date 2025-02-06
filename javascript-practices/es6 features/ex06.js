/*
    class Rect

*/
class Rect {
    constructor(w, h){
        this.w = w;
        this.h = h;
    }

    draw(){
        console.log(`Rect [${this.w}, ${this.h}]를 그림`)
    }
}

console.log('---[class 정의 지원]');
const rect1 = new Rect(10, 20);
rect1.draw();


console.log('---[cf: 생성자 함수(protype 기반)]');
const Circle = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = () => {console.log(`Circle [${this.x}, ${this.y}, ${this.r}] 를 그림`)};

const circle = new Circle(10, 20, 5);
circle.draw();

console.log('---[클래스 상속(extends) 지원]');

