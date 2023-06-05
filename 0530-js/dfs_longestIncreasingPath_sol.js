function dfs(node, parent, values) {
  let maxLength = 0;
  for (let child of graph[node]) {
      
      if (child !== parent && values[child] > values[node]) {
          maxLength = Math.max(maxLength, dfs(child, node, values));
      
      }
  }
  return 1 + maxLength;
}

function longestIncreasingPath(N, values, edges) {
  graph = Array.from({length: N+1}, () => []);
  for (let [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
  }

  let longestPath = 0;
  for (let node = 1; node <= N; node++) {
      
      longestPath = Math.max(longestPath, dfs(node, -1, values));
      
      
  }
  return longestPath;
}

console.log(longestIncreasingPath(5, [0, 3, 1, 7, 8, 9], [[1, 2], [2, 3], [3, 4], [4, 5]]));  // Output: 2
console.log(longestIncreasingPath(4, [0, 6, 3, 5, 7], [[1, 2], [2, 3], [2, 4]]));  // Output: 2
