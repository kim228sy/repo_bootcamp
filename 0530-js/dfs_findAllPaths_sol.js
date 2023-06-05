function findAllPaths(graph, start, end) {
  let visited = {}; 
  let paths = [];

  function dfs(node, path) {
      visited[node] = true;
      path.push(node);

      if (node === end) {
          paths.push([...path]);  // 현재 경로를 결과에 추가
      } else {
          let neighbors = graph[node];
          for (let neighbor of neighbors) {
              if (!visited[neighbor]) {
                  dfs(neighbor, path);
              }
          }
      }

      // backtracking
      path.pop();
      visited[node] = false;
  }

  dfs(start, []);
  return paths;
}

let graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
};

result = findAllPaths(graph, 'A', 'F');
// Output: [ [ 'A', 'B', 'E', 'F' ], [ 'A', 'C', 'F' ] ]

result.forEach(item => console.log(item));
