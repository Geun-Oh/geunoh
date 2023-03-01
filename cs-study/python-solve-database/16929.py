from collections import deque

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(input()))

ans = 'No'
def dfs(ly, lx, y, x, cnt, visited):
    if ly <= -1 or ly >= n or lx <= -1 or lx >= m:
        return
    if graph[ly][lx] != graph[y][x]:
        return
    if [ly, lx] == [y, x]:
        if cnt >= 4:
            global ans
            ans = 'Yes'
            return
        return
    if visited[ly][lx] == True:
        return
    visited[ly][lx] = True
    dfs(ly + 1, lx, y, x, cnt + 1, visited)
    dfs(ly - 1, lx, y, x, cnt + 1, visited)
    dfs(ly, lx + 1, y, x, cnt + 1, visited)
    dfs(ly, lx - 1, y, x, cnt + 1, visited)

for y in range(n):
    for x in range(m):
        visited = [[False] * m for i in range(n)]
        visited[y][x] = True
        dfs(y + 1, x, y, x, 1, visited)
        dfs(y - 1, x, y, x, 1, visited)
        dfs(y, x + 1, y, x, 1, visited)
        dfs(y, x - 1, y, x, 1, visited)   

print(ans)