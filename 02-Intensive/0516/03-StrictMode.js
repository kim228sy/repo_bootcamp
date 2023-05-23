function foo() {
  x = 10;
  // 선언하지 않았지만 암묵적으로 전역으로 선언처리 한다.
}
foo();
console.log(x); // 10

("use strict");
function foo() {
  "use strict";
  x = 10;
  ("use strict");
}
foo();
console.log(x); // 10

("use strict");
function foo() {
  "use strict";
  x = 10;
}
y = 20;
foo();

// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
  "use strict";

  x = 10;
  console.log(x);
});

// 적용에 의한 변화. 일반 함수의 this
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();

// arguments 객체
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;
  // 변경된 인수가 arguments 객체에 반영되지 않는다.

  console.log(arguments); // {0:1, length: 1}
})(1);
