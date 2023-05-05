## 데이터 타입 & 변수

### 1. 한 변수의 값을 다른 변수에 할당
    
  ```jsx
  // Setup
  var a;
  a = 7;
  var b;
  
  // Only change code below this line
  
  b = a;
  ```
    
### 2. 초기화 되지 않은 변수 이해
  
  ```jsx
  // Only change code below this line
  var a;
  var b;
  var c;
  // Only change code above this line
  
  a = 5;
  b = 10;
  c = 'I am a'
  
  a = a + 1;
  b = b + 5;
  c = c + " String!";
  ```
    
### 3. 변수의 대소문자 구분 이해(camel case)
    
```jsx
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
    
### 4. const 키워드로 읽기 전용 변수 선언

```jsx
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
```

## 연산자

### 1. 계산
  #### 1. 두 개의 숫자 더하기
  
  ```jsx
  const sum = 10 + 10;
  ```
        
  #### 2. 다른 숫자에서 한 숫자 빼기
        
  ```jsx
  const difference = 45 - 33;
  ```
        
  #### 3. 두 개의 숫자 곱하기
  
  ```jsx
  const product = 8 * 10;
  ```
        
  #### 4. 하나의 숫자를 다른 숫자로 나누기
        
  ```jsx
  const quotient = 66 / 33;
  ```
        
  #### 5. 숫자증가(++)
  
  ```jsx
  let myVar = 87;
  
  // Only change code below this line
  myVar++;
  ```
        
  #### 6. 숫자감소(--)
  
  ```jsx
  let myVar = 11;
  
  // Only change code below this line
  myVar--
  ```
        
### 2. 문자열에 변수 추가
    
  ```jsx
  // Change code below this line
  const someAdjective = "kim";
  let myStr = "Learning to code is ";
  myStr += someAdjective
  ```
    
### 3. 삼항 연산자 사용
    
  ```jsx
  function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal'
  }
  
  checkEqual(1, 2);
  ```
    
### 4. 여러 삼항 연산자 사용
    
  ```jsx
  function checkSign(num) {
    // return (num!==0) ? (num===10) ? "positive" : "negative" : "zero"
    return (num===0) ? "zero" : (num===10) ? "positive" : "negative"
  }
  
  checkSign(10);
  ```