from itertools import combinations
from collections import deque
import copy

dx = [-1, 1, 0, 0]  # 상하좌우 방향
dy = [0, 0, -1, 1]

## Example 1, Max area = 27
M = 7
N = 7
virusmap = [[2, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 2, 0],
            [0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0]]
## Example 2, Max area 9
N = 4
M = 6
virusmap = [[0,0,0,0,0,0],
            [1,0,0,0,0,2],
            [1,1,1,0,0,2],
            [0,0,0,0,0,2]]

def bfs(board, viruses):
    global max_val
    for virus in viruses:
        queue = deque([virus])
        while queue:
            x, y = queue.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == 0:
                    board[nx][ny] = 2
                    queue.append((nx, ny))

    cnt = sum(i.count(0) for i in board)
    max_val = max(max_val, cnt)

    print_map(board)  # 바이러스가 퍼진 후의 지도 출력

def dfs(board, blanks, viruses):
    global max_val
    if len(blanks) < 3:
        return
    for walls in combinations(blanks, 3):
        tmp_board = copy.deepcopy(board)
        for x, y in walls:
            tmp_board[x][y] = 1
        bfs(tmp_board, viruses)

def print_map(board):
    for row in board:
        print(' '.join(map(str, row)))
    print()

def solve():
    global N, M, max_val
    board = []
    blanks = []
    viruses = []
    max_val = -1

    for i in range(N):
        row = virusmap[i]
        for j in range(M):
            if row[j] == 0:
                blanks.append((i, j))
            elif row[j] == 2:
                viruses.append((i, j))
        board.append(row)

    dfs(board, blanks, viruses)
    print("Maximum safe area size:", max_val)

solve()
