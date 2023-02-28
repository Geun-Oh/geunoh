from collections import deque

n = int(input())
ans = n * n + 1
graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

newgraph = [[0] * n for i in range(n)]

num = 1
visited = [[False] * n for i in range(n)]
for y in range(n):
    for x in range(n):
        queue = deque()
        if graph[y][x] == 0:
            continue
        if visited[y][x] == True:
            continue
        newgraph[y][x] = num
        queue.append((y, x))
        while queue:
            ly, lx = queue.popleft()
            if ly <= -1 or ly >= n or lx <= -1 or lx >= n:
                continue
            if graph[ly][lx] == 0:
                continue
            if visited[ly][lx] == True:
                continue
            visited[ly][lx] = True
            newgraph[ly][lx] = num
            queue.append((ly + 1, lx))
            queue.append((ly - 1, lx))
            queue.append((ly, lx + 1))
            queue.append((ly, lx - 1))
        num += 1

for i in range(1, num):
    queue = deque()
    nvisited = [[False] * n for i in range(n)]
    for y in range(n):
        for x in range(n):
            if newgraph[y][x] == i:
                queue.append((y + 1, x, 0))
                queue.append((y - 1, x, 0))
                queue.append((y, x + 1, 0))
                queue.append((y, x - 1, 0))
    while queue:
        ly, lx, cnt = queue.popleft()
        if cnt > ans:
            continue
        if ly <= -1 or ly >= n or lx <= -1 or lx >= n:
            continue
        if newgraph[ly][lx] == i:
            continue
        if nvisited[ly][lx] == True:
            continue
        if newgraph[ly][lx] != 0:
            if cnt < ans:
                ans = cnt
            continue
        nvisited[ly][lx] = True
        queue.append((ly + 1, lx, cnt + 1))
        queue.append((ly - 1, lx, cnt + 1))
        queue.append((ly, lx + 1, cnt + 1))
        queue.append((ly, lx - 1, cnt + 1))

print(ans)