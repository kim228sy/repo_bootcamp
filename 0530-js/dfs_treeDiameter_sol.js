function dfs(graph, node, visited) {
  visited[node] = true;
  let maxDistance = 0;
  let farthestNode = node;

  for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
          let [distance, farNode] = dfs(graph, neighbor, visited);
          if (distance + 1 > maxDistance) {
              maxDistance = distance + 1;
              farthestNode = farNode;
          }
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
  let [d, farthestNode1] = dfs(graph, startNode, visited);

  console.log("farthestNode1", farthestNode1)
  
  visited = {};
  let [diameter, farthestNode2] = dfs(graph, farthestNode1, visited);
  console.log("farthestNode2", farthestNode2)


  return diameter;
}

let edges = [[1, 2], [1, 3], [2, 4], [2, 5]];
console.log(treeDiameter(edges));  // Output: 3
edges = [['A','B'],['A','C'],['B','D'],['B','E'],['D','G'],['C','F']]
console.log(treeDiameter(edges));  // Output: 3