// ES5 생성자 함수
var person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log("Hi! My name is" + this.name);
  };

  // 생성자 함수 반환
  return Person;
})();

// 인스턴스 생성
var me = new person("Lee");
me.sayHi(); // Hi! My name is Lee

// 클래스 선언문
class Person {}

// 익명 클래스 표현식
const Person1 = class {};
console.dir(Person1);

// 기명 클래스 표현식
const Person2 = class MyClass {};
console.dir(Person2);

// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is${this.name}`);
  }
  // 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}
const me = new Person("Kim");

// 3. 클래스 호이스팅
// 클래스 선언문
class Person {}
console.log(typeof Person); // function
console.log(Person);
class Person {} // error

// 4. 인스턴스 생성
class Person {}
// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

// extends
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird { age: 1, weight: 5 }
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  toString() {
    // return `${this.width} * ${this.height} = ${this.getArea()}`;
    return `width =${this.width}, height =${this.height}`;
  }
}

// 서브클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color =${this.color}`;
  }
}
const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); // ColorRectangle { width: 2, height: 4, color:'red' }

// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString());
// width =2, height =4, color =red
