function dfsWithCycleDetection(graph, start, visited = {}, parent = {}) {
  if (!visited[start]) {
      visited[start] = true;
      let neighbors = graph[start];
      for (let i = 0; i < neighbors.length; i++) {
          parent[neighbors[i]] = start;
          if (neighbors[i] in visited && parent[start] !== neighbors[i]) {
              return `Cycle detected: ${neighbors[i]} -> ... -> ${start}`;
          }
          let cycle = dfsWithCycleDetection(graph, neighbors[i], visited, parent);
          if (cycle) return cycle;
      }
  }
  return null;
}

let graphWithCycle = {
'A': ['B', 'C'],
'B': ['A','D','E'],
'C': ['A','F'],
'D': ['B'],
'E': ['B', 'F'],
'F': ['C','E'],
};

console.log(dfsWithCycleDetection(graphWithCycle, 'A'));  // Output: "Cycle detected: A -> ... -> C"
