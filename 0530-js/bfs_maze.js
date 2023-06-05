function traceback(previous, start, end) {
  let path = [];
  let curr = end.join(",");
  while (curr !== start.join(",")) {
    path.unshift(curr.split(",").map(Number));
    curr = previous[curr];
  }
  path.unshift(start);
  return path;
}

function solveMaze(maze, start, end) {
  let queue = [start];
  let visited = new Set();
  let previous = {};
  
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // right, left, down, up

  while (queue.length > 0) {
    let [x, y] = queue.shift(); // Dequeue

    if (x === end[0] && y === end[1]) { // Found the destination
      return traceback(previous, start, end);
    }

    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;
      let pos = `${newX},${newY}`;

      if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length && 
          maze[newX][newY] === 0 && !visited.has(pos)) { 
        queue.push([newX, newY]); // Enqueue new position
        visited.add(pos); // Add new position to visited set
        previous[pos] = `${x},${y}`;
      }
    }
  }

  return null;
}

let maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

let start = [0, 0];
let end = [4, 4];


result = solveMaze(maze, start, end); // output: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 4], [4, 4]]

result.forEach(item => console.log(item));
