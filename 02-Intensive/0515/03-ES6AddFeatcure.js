// 1. 생성자 함수 인스턴스 반환
function circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this를 반환한다.
  return 100; // 반드시 생략!
}
// 인스턴스 생성. Circle 생성자 함수는  명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: f}

// 2. 함수의 구분
// 2-1. 메서드
const obj = {
  x: 1,
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수이다.
  bar: function () {
    return this.x;
  },
};
console.log(obj.foo()); // 1
console.log(obj.bar()); // 1
console.log(new obj.bar()); // -> bar {}
console.log(new obj.foo()); // -> TypeError: obj.foo is not a constructor

var foo = function () {
  return 1;
};
// 일반적인 함수로서 호출
foo(); // -> 1
// 생성자 함수로서 호출
new foo(); // -> foo {}

// 메서드로서 호출
// var obj = { foo: foo };
// obj.foo(); // -> 1

// 2.2 화살표 함수
var sum = function () {
  return a + b;
};
console.log(sum(1, 2)); // 3

var sum = (a, b) => {
  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줌.
  return a + b; // 중괄호를 사용했다면  return 지시자로 결과 값을 반환 해야한다.
};
console.log(sum(3, 4)); // 7
// 위 표현은 다음과 같다.
var sum = (a, b) => a + b;
console.log(sum(3, 4)); // 7

var sum = (a) => a * 10; // 20
console.log(sum(2)); // 20

var sum = () => 30;
console.log(sum()); // 30

// const arrow = () => const x = 1; // TypeError: Unexpected token 'const' // 중괄호 생략 경우 표현식이 아니면 에러 밠생.

var create = (id, content) => ({ id, content }); // 객체 리터럴을 반환하는 경우 소괄호로 감싼다.
console.log(create(1, "Javascript"));
// -> { id: 1, content: "Javascript" }

// 위 표현은 다음과 같다.
var create = (id, content) => {
  return { id, content };
};
console.log(create(1, "Javascript"));

// 매개변수 지정 방법
() => {
  "코드작성";
}; // 매개변수가 없을 경우
(x) => {
  "코드작성";
}; // 매개변수가 한 개 인 경우, 소괄호를 생략 가능.
(x, y) => {
  "코드작성";
}; // 매개변수가 여러 개인 경우, 소괄호를 생략 불가능.

// 함수 몸체 지정 방법
(x) => {
  return x * x;
};
(x) => x * x;
// 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며
// 암묵적으로 return된다. 위 표현과 동일하다.

// () => {return {a:1}; };
// () =>({a:1}) // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

// () => {
//   const x =10;
//   return x*x;
// }

// 2.2.3 화살표 함수와 일반 함수의 차이
const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
new Foo(); // TypeError: Foo is not a constructor
const arrow = (a, a) => a + a;
// SyntaxError: Duplicate parameter name not allowed in this context

// 2.2.3 화살표 함수와 일반 함수의 차이 - this
// 일반 함수의 this
function PreFixer(prefix) {
  this.prefix = prefix;
}

PreFixer.prototype.prefixArray = function (arr) {
  // (A)
  return arr.map(function (x) {
    return this.prefix + " " + x; // (B)
  });
};

var pre = new PreFixer("Hi");
console.log(pre.prefixArray(["Kim", "Lee"]));

// 화살표 함수의 this
function PreFixer(prefix) {
  this.prefix = prefix;
}

PreFixer.prototype.prefixArray = function (arr) {
  // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
  return arr.map((x) => this.prefix + " " + x);
};

var pre = new PreFixer("Hi");
console.log(pre.prefixArray(["Kim", "Lee"]));

// 2.2.4 화살표 함수를 사용해서는 안되는 경우
// 메서드 : 상위 스코프를 참조하기 때문에 전역 객체 window를 가리킨다.
const person = {
  firstName: "Kim",
  sayHi: () => console.log("Hi" + this.firstName), // Bad
  sayBye() {
    console.log("Bye" + this.firstName); // Good
  },
};
person.sayHi(); // Hi undefined
person.sayBye(); // Bye Kim

// 3. Rest 파라미터(나머지 매개변수)
function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [1, 2, 3, 4, 5]
}
foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [3, 4, 5]
}

bar(1, 2, 3, 4, 5);

// 4. 매개변수 기본값
function sum(x, y) {
  // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당.
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1

function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1

// 5. String Literal
var val1 = "my string";
var val2 = "my string2";

const conVal = val1 + ", " + val2;

console.log(conVal);
// my string, my string2

var val1 = "my string";
var val2 = "my string2";

const litVal = `${val1}, ${val2}`;
// 여기서 사용된 `은 Tab키 위에 있는 backtick.

console.log(litVal);
// my string, my string2

// 6. for ... of
let years = [2001, 2010, 2015, 2018];
const str = "Test";

for (let year of years) {
  console.log(year); // 2001 2010 2015
  if (year === 2015) {
    break;
  }
  // 내부에서 break문 사용 가능.
}

for (let char of str) {
  console.log(char); // T, e, s, t
}

// 7. include
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("appl")); // false
console.log(fruits.includes("apple")); // true

// 8. let
let bar = 123;
// let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 하지 않는다.
let bar = 456; // SyntaxError: Identifier 'bar' has
