function dfs(graph, start, visited) {
  visited[start] = true;
  let neighbors = graph[start];

  for(let i = 0; i < neighbors.length; i++) {
      if(!visited[neighbors[i]]) {
          dfs(graph, neighbors[i], visited);
      }
  }
  console.log("Processing", start)
  
  return Object.keys(visited);
}

let graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
};

visited = {}
console.log(dfs(graph, 'A', visited));  // Output: ['A', 'C', 'F', 'E', 'B', 'D']
