## 제어문

### 조건문

  #### 1. if…else
  ```jsx
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  ```
        
  #### 2. else…if
  ```jsx
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
      }
  }
  
  testElseIf(7);
  ```
        
### - 반복문

  #### 1. 2중 for문으로 구구단 작성 (9단부터 2단 순으로 - continue 사용하여 5단 제외) 
  ```jsx
  for (let i = 9; i >= 2; i--) {
    for (let j = 1; j <= 9; j++) {
      if (i === 5) continue;
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
  ```
        
  #### 2. while
        
  ```jsx
  // Setup
  const myArray = [];
  
  // Only change code below this line
  let i = 5 // let i = 0
  
  while (i >=0) { // while (i <=5) {
    myArray.push(i)
    i-- // i++
  }
  
  console.log(myArray)
  ```
        
  #### 3. switch 기본 옵션 + 여러 동일한 옵션
  
  ```jsx
  // 기본 옵션
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 'a':
        answer = 'apple'
        break
      case 'b':
        answer = 'bird'
        break
      case 'c':
        answer = 'cat'
        break
      case 'd':
        answer = 'stuff'
        break
      default:
        answer = 'stuff'
        break
    }
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);
  
  // 여러 동일한 옵션
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);
  ```

## 함수

### - 인수를사용하여 함수에 값 전달

  ```jsx
  function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  functionWithArgs(1,2)
  functionWithArgs(7,9)
  ```

### - 함수의 기본 매개변수 설정

  ```jsx
  // Only change code below this line
  const increment = (number, value=1) => number + value;
  // Only change code above this line
  ```