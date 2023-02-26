from collections import deque

n, m = list(map(int, input().split()))
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

walls = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            walls.append((i, j))

def bfs(graph, i):
    realcnt = 1000001
    visited = [[False] * m for i in range(n)]
    queue = deque()
    queue.append((0, 0, 1))
    while queue:
        y, x, cnt = queue.popleft()
        if y <= -1 or y >= n or x <= -1 or x >= m:
            continue
        if [y, x] == [n - 1, m - 1]:
            if cnt < realcnt:
                realcnt = cnt
            continue
        if graph[y][x] == 1:
            if [y, x] != [i[0], i[1]]:
                continue
        if visited[y][x] == True:
            continue
        visited[y][x] = True
        queue.append((y + 1, x, cnt + 1))
        queue.append((y - 1, x, cnt + 1))
        queue.append((y, x + 1, cnt + 1))
        queue.append((y, x - 1, cnt + 1))
    return realcnt

ans = 1000001

if len(walls) != 0:
    for i in range(len(walls)):
        t = bfs(graph, walls[i])
        if t < ans:
            ans = t

s = bfs(graph, (-1, -1))
if s < ans:
    ans = s

if ans == 1000001:
    ans = -1
if n == 1 and m == 1:
    ans = 1
print(ans)