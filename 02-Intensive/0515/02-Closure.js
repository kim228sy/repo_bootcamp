// 1.4 전역변수 사용 억제 방법
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// 2. 클로저: 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
const x = 1;
function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();

// 2.1 렉시컬 스코프
function outerFunc() {
  const x = 10;
  innerFunc();

  function innerFunc() {
    console.log(x); // 1
  }
}
innerFunc(); // 1
outerFunc(); // 1

// 2.3 클로저와 렉시컬 환경
// const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x); // ②
  };
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환.
// outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝 되어 제거.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10

// 모든 함수를 클로저라고 하지 않는다.
function foo() {
  const x = 1;
  const y = 2;
  // 일반적으로 클로저라고 하지 않는다.
  function bar() {
    const z = 3;
    // 상위 스코프의 식별자를 참조하지 않는다.
    console.log(z);
  }
  return bar;
}

const bar = foo();
bar(); // 3

// 2.4 클로저의 활용
let num = 0; // 카운트 상태 변수

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};
// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

// const increase = function () {
//   카운트 상태 변수
//   let num = 0;

//   카운트 상태를 1만큼 증가 시킨다.
//   return ++num;
// };
// 이전 상태를 유지하지 못한다.
// console.log(increase()); // 1
// console.log(increase()); // 1
// console.log(increase()); // 1

const counter = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 1
console.log(counter.increase()); // 0

// 2.5 캡슐화와 정보은닉
function person(name, age) {
  this.name = name; // public
  let _age = age; // private

  //인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi, my name is ${this.name}. I am ${this._age} years old.`);
  };
}

const me = new person("Kim", 20);
me.sayHi(); // Hi, my name is Kim. I am 20 years old.
console.log(me.name); // Kim
console.log(me._age); // undefined

const you = new person("Lee", 30);
you.sayHi(); // Hi, my name is Lee. I am 30 years old.
console.log(you.name); // Lee
console.log(you._age); // undefined

function person(name, age) {
  this.name = name; // public
  let _age = age; // private
}

// 프로토타입 메서드
person.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다
  console.log(`Hi, my name is ${this.name}. I am ${this._age} years old.`);
};

const Person = (function () {
  let _age = 0; // private

  // 생성자 함수
  function Person(name, age) {
    this.name = name; // public
    _age = age; // private
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi, my name is ${this.name}. I am ${this._age} years old.`);
  };

  // 생성자 함수를 반환
  return Person;
})();

// 자주 발생하는 실수
// 1
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  }; // ①
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 3 3 3
}

// 2
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    // ①
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

//3
const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}
for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}
