let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function isSafe(maze, visited, x, y, N, M) {
    return (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== '#' && !visited[x][y]);
}

function dfs(maze, visited, x, y, N, M) {
    if (maze[x][y] === 'G') {
        return true;
    }

    visited[x][y] = true;
    for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (isSafe(maze, visited, nx, ny, N, M) && dfs(maze, visited, nx, ny, N, M)) {
            maze[nx][ny] = '*';
            return true;
        }
    }
    return false;
}

function solveMaze(maze, N, M) {
    let visited = Array.from(Array(N), () => Array(M).fill(false));
    let sx = 0, sy = 0;

    // Find 'S'
    outer: for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maze[i][j] === 'S') {
                sx = i;
                sy = j;
                break outer;
            }
        }
    }

    if (dfs(maze, visited, sx, sy, N, M)) {
        maze[sx][sy] = '*';
        return maze;
    } else {
        return "No path to the goal";
    }
}

let maze1 = ["#####",
             "#S..#",
             "#.#.#",
             "#...G",
             "#####"];
console.log(solveMaze(maze1, 5, 5));

let maze2 = ["S...#",
             "#####",
             "#...#",
             "#####",
             "#...G"];
console.log(solveMaze(maze2, 5, 5));
