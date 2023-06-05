function numSquares(n) {
  if (n < 2) {
      return n;
  }

  let lst = [];
  let i = 1;
  while (i * i <= n) {
      lst.push(i * i);
      i += 1;
  }

  console.log("lst", lst)

  let cnt = 0;
  let toCheck = new Set([n]);
  while (toCheck.size) {
      cnt += 1;
      let temp = new Set();
      for (let x of toCheck) {
          for (let y of lst) {
              if (x === y) {
                  return cnt;
              }
              if (x < y) {
                  break;
              }
              temp.add(x - y);
          }
      }
      toCheck = temp;
  }

  return cnt;
}

console.log(numSquares(12));  // output: 3
console.log(numSquares(13));  // output: 2
