function solution(n, connections) {
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v, w] of connections) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    let visited = Array(n).fill(false);
    let costs = Array(n).fill(Number.MAX_SAFE_INTEGER);
    costs[0] = 0;

    function findMinCostNode() {
        let minCost = Number.MAX_SAFE_INTEGER;
        let minNode = -1;

        for (let i = 0; i < n; i++) {
            if (!visited[i] && costs[i] < minCost) {
                minCost = costs[i];
                minNode = i;
            }
        }
        return minNode;
    }

    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        let node = findMinCostNode();
        if (node === -1) return -1;

        totalCost += costs[node];
        visited[node] = true;

        for (let [nextNode, cost] of graph[node]) {
            if (!visited[nextNode]) {
                // FILL OUT HERE
            }
        }
    }
    return totalCost;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));  // 출력: 4
console.log(solution(3, [[0, 1, 2], [1, 2, 3], [2, 0, 4]])); // 출력: 5
console.log(solution(5, [[0, 1, 2], [0, 2, 3], [1, 3, 4], [1, 4, 5]])); // 출력: -1

