function dfs(graph, start) {
  let visited = {};
  let stack = [start];

  while(stack.length !== 0) {
      let node = stack.pop();
      
      if(!visited[node]) {
         console.log(node, "not visited")
          visited[node] = true;
          let neighbors = graph[node];
          console.log("neighbors", neighbors)
          for(let i = 0; i < neighbors.length; i++) {
              stack.push(neighbors[i]);
          }
      }else{
        console.log(node, "visited")
      }
  }

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

console.log(dfs(graph, 'A'));  // Output: ['A', 'C', 'F', 'E', 'B', 'D']
