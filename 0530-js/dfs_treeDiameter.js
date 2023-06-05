function dfs(graph, node, visited) {
  visited[node] = true;
  let maxDistance = 0;
  let farthestNode = node;

  for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
          let [distance, farNode] = dfs(graph, neighbor, visited);
          //FILL OUT HERE
      }
  }

  return [maxDistance, farthestNode];
}

function treeDiameter(edges) {
  let graph = {};
  for (let [u, v] of edges) {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push(v);
      graph[v].push(u);
  }

  
  let visited = {};
  let startNode = edges[0][0];
  let [d, farthestNode] = dfs(graph, startNode, visited);

  visited = {};
  let [diameter, _] = dfs(graph, farthestNode, visited);
  return diameter;
}

let edges = [[1, 2], [1, 3], [2, 4], [2, 5]];
console.log(treeDiameter(edges));  // Output: 3

