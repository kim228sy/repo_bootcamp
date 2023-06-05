function dfs(node, color) {
  colors[node] = color;
  for (let neighbor of graph[node]) {
      if (colors[neighbor] === 0) {
          if (!dfs(neighbor, -color)) {
              return false;
          }
      } else if (colors[neighbor] === color) {
          return false;
      }
  }
  return true;
}

function isBipartite(N, edges) {
  graph = Array.from({length: N+1}, () => []);
  for (let [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
  }

  colors = Array(N+1).fill(0);
  for (let node = 1; node <= N; node++) {
      if (colors[node] === 0 && !dfs(node, 1)) {
          return "NO";
      }
  }
  return "YES";
}

console.log(isBipartite(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]));  // Output: "NO"
console.log(isBipartite(4, [[1, 2], [2, 3], [3, 4], [4, 1], [4,3]]));  // Output: "YES"
