function dfs(computer, connections, visited) {
    visited[computer] = true;  // 컴퓨터를 방문 표시

    for (let i = 0; i < connections[computer].length; i++) {
        let nextComputer = connections[computer][i];  // 연결된 다음 컴퓨터를 가져옴
        if (!visited[nextComputer]) {  // 아직 방문하지 않은 경우, DFS 수행
            dfs(nextComputer, connections, visited);
        }
    }
}

function findIndependentNetworks(connections) {
    let numberOfNetworks = 0;
    let visited = new Array(connections.length).fill(false);  // 컴퓨터 방문 여부를 저장하는 배열

    for (let computer = 0; computer < connections.length; computer++) {
        if (!visited[computer]) {  // 컴퓨터를 방문하지 않았다면, 새로운 네트워크 시작
            dfs(computer, connections, visited);
            numberOfNetworks++;  // 독립적인 네트워크 개수 증가
        }
    }

    return numberOfNetworks;
}

let connections = [
    [1],
    [0, 2],
    [1, 3],
    [2],
    [5, 6],
    [4, 6],
    [4, 5]
];

console.log(findIndependentNetworks(connections));