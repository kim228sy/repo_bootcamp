def dfs(maze, position, path):
    # position의 형태: (row, col)
    row, col = position

    # 미로 밖이거나 벽에 부딪히면 바로 반환
    if not(0 <= row < len(maze)) or not(0 <= col < len(maze[0])) or maze[row][col] == 0:
        return
    
    path.append(position) # 현재 위치를 경로에 추가

    # 목적지에 도착한 경우
    if maze[row][col] == "E":
        return path

    # 현재 위치를 벽으로 변경하여 다시 방문하지 않게 함
    maze[row][col] = 0

    # 상하좌우 방향으로 DFS
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        result = dfs(maze, (row + dx, col + dy), path)
        if result: # 만약 목적지에 도달한 경로가 있다면
            return result

    path.pop() # 목적지에 도달하지 못하면, 현재 위치를 경로에서 제거
    return None

def find_path(maze):
    # 시작점 찾기
    for i in range(len(maze)):
        for j in range(len(maze[0])):
            if maze[i][j] == "S":
                start = (i, j)

    path = dfs(maze, start, [])
    if path:
        return path
    else:
        return "목적지에 도달할 수 없습니다."

maze = [
  ["S", 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 1, "E"]
]
print(find_path(maze))
