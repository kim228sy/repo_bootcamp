function findFriends(friendships, user_id) {
  // 그래프 구성
  let graph = {};
  for (let [u1, u2] of friendships) {
    if (!graph[u1]) graph[u1] = [];
    if (!graph[u2]) graph[u2] = [];
    graph[u1].push(u2);
    graph[u2].push(u1);
  }

  // user_id의 직접적인 친구 찾기
  let friends = new Set(graph[user_id]);

  // user_id의 친구의 친구 찾기
  let friendsOfFriends = new Set();
  for (let friend of friends) {
    console.log("friend", friend);
    for (let foaf of graph[friend]) {
      console.log("foaf", foaf);
      // 직접적인 친구와 user_id는 제외
      if (!friends.has(foaf) && foaf !== user_id) {
        friendsOfFriends.add(foaf);
      }
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
console.log(findFriends(friendships, user_id));
