// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };
}
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.constructor.name); // Circle
console.log(circle2.constructor.name); // Circle

const obj = {};
const arr = [];
const func = function () {};
const str = "str";
const str1 = new String("str");

console.log(obj.constructor.name); // Object
console.log(arr.constructor.name); // Array
console.log(func.constructor.name); // Function
console.log(str.constructor.name); // String
console.log(str1.constructor.name); // String

console.log(obj instanceof Object); // true
console.log(str instanceof String); // false
console.log(str1 instanceof Object); // true
