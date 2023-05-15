## 객체

#### 1. 객체 생성(JavaScript 객체 구축)
  ```jsx
  const myDog = {
    // Only change code below this line
  
    name: '하늘',
    legs: 4,
    tails: 1,
    friends: ["sunny", '뭉이'],
    
    // Only change code above this line
  };
  ```
    
#### 2. 객체 수정(개체 내에 중첩된 개체 수정)
  ```jsx
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45
  // Only change code above this line
  
  console.log(userActivity);
  ```

## 배열 & 내장함수

#### 1. filter, map, reduce([reduce 방법을 사용하여 데이터 분석](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data))

  ```jsx
  function getRating(watchList) {
  // Only change code below this line
  let averageRating = watchList
  .filter(movie => movie.Director === "Christopher Nolan")
  .reduce((sum, movie) => sum + Number(movie.imdbRating), 0)
  / watchList.filter(movie => movie.Director === "Christopher Nolan").length;

  // Only change code above this line
  return averageRating;
  }

  console.log(getRating(watchList));
  ```

#### 2. 반복문과 제어문을 통한 push 사용([For 루프를 사용하여 배열의 모든 항목을 반복합니다.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops))

- **includes() 사용**
  
  ```jsx
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].**includes**(elem)) {
          newArr.push(arr[i]);
        }
      }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

- **indexOf() 사용**
  
  ```jsx
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].**indexOf**(elem) === -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  ```

- **이중 for문 사용**
  
  ```jsx
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i=0; i<arr.length; i++) {
      let includes = false;
      for (let j=0; j<arr[i].length; j++) {
        if (arr[i][j] === elem) {
          includes = true;
        }
      }
      if (includes === false) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  ```