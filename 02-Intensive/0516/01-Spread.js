// 1. 스프레드 문법

// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다 (-> 1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(..."hello"); // h e l l o

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 }); // TypeError: Found non-callable @@iterator

// 스프레드 문법의 결과는 값이 아니다.
// const list = ...[1,2,3]; // SyntaxError: Unexpected token ...

// 1.1 함수 호출문의 인수 목록에서 사용하는 경우
const arr = [1, 2, 3];

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달.
// Math.max(...[1, 2, 3])은 Math.max(1, 2, 3)과 같다.
const max = Math.max(...arr); // 3

// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // 1, 2, 3 -> [1, 2, 3]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
// [1, 2, 3] -> 1, 2, 3
foo(...[1, 2, 3]);

// 1.2 배열 리터럴 내부에서 사용하는 경우
// concat: 2개의 배열을 1개의 배열로 결합하고 싶은 경우
// ES5
var array = [1, 2].concat([3, 4]);
console.log(array); // [1, 2, 3, 4]
// ES6
const array = [...[1, 2], ...[3, 4]];
console.log(array); // [1, 2, 3, 4]

// splice: 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하는 경우
// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];
// 세 번째 인수 arr2를 해체하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
arr1.splice(1, 0, arr2);
// 기대한 결과는 [1, [2, 3], 4]가 아니라 [1, 2, 3, 4]다.
console.log(arr1); // [1, [2, 3], 4]

// ES6
const arr1 = [1, 4];
const arr2 = [2, 3];
arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
