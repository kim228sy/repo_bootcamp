function findFriendGroups(graph) {
  let visited = {}; // 방문한 노드 추적
  let groups = []; // 친구 그룹 저장

  for (let person in graph) {
      if (!visited[person]) {
          let group = [];
          dfs(graph, person, visited, group);
          groups.push(group);
      }
  }

  return groups;
}

function dfs(graph, node, visited, group) {
  visited[node] = true;
  group.push(node);

  for (let i = 0; i < graph[node].length; i++) {
      let friend = graph[node][i];
      if (!visited[friend]) {
          dfs(graph, friend, visited, group);
      }
  }
}

let socialNetwork = {
  'Alice': ['Bob', 'Charlie', 'David'],
  'Bob': ['Alice', 'David'],
  'Charlie': ['Alice', 'David'],
  'David': ['Alice', 'Bob', 'Charlie', 'Eve'],
  'Eve': ['David'],
  'Frank': ['Grace'],
  'Grace': ['Frank']
};

console.log(findFriendGroups(socialNetwork));
// Output: [ [ 'Alice', 'Bob', 'David', 'Charlie', 'Eve' ], [ 'Frank', 'Grace' ] ]
