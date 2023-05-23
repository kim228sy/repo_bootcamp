// 실행 컨텍스트

// 1.1 동기 처리와 비동기 처리
console.log("시작 ===");
setTimeout(() => {
  console.log("set Timeout");
}, 1000);
console.log("종료 ===");
// 시작 ===
// 종료 ===
// set Timeout

setTimeout(() => console.log("first line"));
console.log("second line");

// second line
// first line

// 변수 호이스팅
console.log(foo); // undefined
var foo = 123;
console.log(foo); // 123
{
  var foo = 456;
}
console.log(foo); // 456

// 함수 호이스팅 - 함수 선언문
// 일반 코드
function printName(firstName) {
  // 함수선언문
  var result = inner(); // '선언 및 할당'
  console.log(typeof inner); // 'function'
  console.log("name is" + result); // > 'name is inner value'

  function inner() {
    // 함수선언문
    return "inner value";
  }
}
printName(); // 함수호출

// JS Parser 내부의 호이스팅 결과
function printName(firstName) {
  var result; // [hoisting] var 변수 '선언'
  function inner() {
    // [hoisting] 함수선언문
    return "inner value";
  }
  result = inner(); // '할당'
  console.log(typeof inner); // function
  console.log("name is" + result); // > 'name is inner value'
}
printName();

// 함수 호이스 - 함수 표현식
// 일반 코드
function printName(firstName) {
  // 함수선언문
  var inner = function () {
    return "inner value";
  };

  var result = inner(); // 함수 '호출'
  console.log("name is" + result);
}

printName(); // > 'name is inner value

// JS Parser 내부의 호이스팅 결과
function printName(firstName) {
  var inner; // [hoisting] 함수표현식의 변수 값 '선언'
  var result; // [hoisting] var 변수값 '선언'

  inner = function () {
    // 함수표현식 '할당'
    return "inner value";
  };
  result = inner(); // 함수 '호출'
  console.log("name is" + result);
}
printName(); // > 'name is inner value

function printName(firstName) {
  // 함수선언문
  console.log(inner); // > 'undefined': 선언은 되어 있지만 값이 할당되어있지 않은 경우
  var result = inner(); // ERROR!!
  console.log("name is" + result);

  var inner = function () {
    // 함수표현식
    return "inner value";
  };
}
printName(); // > TypeError: inner is not a function

function printName(firstName) {
  var result = inner(); // [Hoisting] 함수표현식의 변수값 '선언'

  console.log(inner); // > 'undefined'
  var result = inner(); // ERROR!!
  console.log("name is" + result);

  inner = function () {
    return "inner value";
  };
}
printName(); // > TypeError: inner is not a function

// 3. 실행 컨텍스트의 역할
// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역 변수 선언
  const x = 10;
  const y = 20;

  // 메서드 호출
  console.log(a + x + y); // 130
}

// 함수 호출
foo(100);

// 메서드 호출
console.log(x + y); // 3

// 4. 실행 컨텍스트 스택
// const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}
foo(); // 6

// 6. 블록 레벨 스코프
// let x = 1;

if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // 1
