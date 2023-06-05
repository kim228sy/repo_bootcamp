function buildGraph(friendships) {
  let graph = {};
  for (let [u1, u2] of friendships) {
    if (!graph[u1]) graph[u1] = [];
    if (!graph[u2]) graph[u2] = [];
    graph[u1].push(u2);
    graph[u2].push(u1);
  }
  return graph;
}

function dfs(graph, start, visited, depth) {
  visited.add(start);

  let friends = new Set();
  if (depth === 2) {
    return friends;
  }

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      friends.add(neighbor);
      let newFriends = dfs(graph, neighbor, visited, depth + 1);
      for (let friend of newFriends) {
        friends.add(friend);
      }
    }
  }
  return friends;
}

function findFriends(friendships, user_id) {
  let graph = buildGraph(friendships);
  let firstLayerFriends = new Set(graph[user_id]);
  let visited = new Set([user_id]);
  visited = new Set([...visited, ...firstLayerFriends]);

  let friendsOfFriends = new Set();
  for (let friend of firstLayerFriends) {
    let newFriends = dfs(graph, friend, visited, 1);
    for (let newFriend of newFriends) {
      friendsOfFriends.add(newFriend);
    }
  }
  return Array.from(friendsOfFriends);
}

let friendships = [
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [1, 6],
];
let user_id = 1;
console.log(findFriends(friendships, user_id)); // [3, 4]
