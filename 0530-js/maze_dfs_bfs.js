let maze = [
    ['S', 1, 0, 0, 0, 0, 0, 0, 0, 'E'],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0]
];

function copyMaze(maze) {
    return maze.map(row => [...row]);
}

function dfs(maze, position = [0, 0], path = []) {
    let [x, y] = position;
    if (maze[x][y] === 1) return null;
    if (maze[x][y] === 'E') return [...path, position];

    maze[x][y] = 1;

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (const [dx, dy] of directions) {
        const newX = x + dx, newY = y + dy;
        if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length) {
            const newPath = dfs(maze, [newX, newY], [...path, position]);
            if (newPath) return newPath;
        }
    }

    return null;
}

function bfs(maze) {
    let queue = [[[0, 0], []]];
    while (queue.length > 0) {
        let [[x, y], path] = queue.shift();
        if (maze[x][y] === 1) continue;

        path = [...path, [x, y]];

        if (maze[x][y] === 'E') return path;

        maze[x][y] = 1;

        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        for (const [dx, dy] of directions) {
            const newX = x + dx, newY = y + dy;
            if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length) {
                queue.push([[newX, newY], path]);
            }
        }
    }

    return null;
}

path = dfs(copyMaze(maze));
console.log("#DFS path", path.length)
path.forEach(item => console.log(item));

console.log("#BFS path", path.length)
path = bfs(copyMaze(maze));
path.forEach(item => console.log(item));



