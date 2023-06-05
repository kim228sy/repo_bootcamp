function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let numBoats = 0;
  
  while (i <= j) {
      numBoats++;
      if (people[i] + people[j] <= limit) {
          i++;
      }
      j--;
  }
  return numBoats;
}

console.log(numRescueBoats([70, 50, 80, 50], 100));  // Output: 3
console.log(numRescueBoats([70, 80, 50], 100));  // Output: 3
