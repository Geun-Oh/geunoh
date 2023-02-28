from collections import deque

n, m = map(int, input().split())

def get(graph):
    visited = [[False] * m for i in range(n)]
    cnt = 0
    for y in range(n):
        for x in range(m):
            queue = deque()
            if graph[y][x] <= 0:
                continue
            if visited[y][x] == True:
                continue
            queue.append((y, x))
            while queue:
                ly, lx = queue.popleft()
                if graph[ly][lx] <= 0:
                    continue
                if visited[ly][lx] == True:
                    continue
                visited[ly][lx] = True
                queue.append((ly + 1, lx))
                queue.append((ly - 1, lx))
                queue.append((ly, lx + 1))
                queue.append((ly, lx - 1))
            cnt += 1
    return cnt

graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

ans = 0
while True:
    newgraph = [[0] * m for i in range(n)]
    for y in range(n):
        for x in range(m):
            if graph[y][x] <= 0:
                continue
            t = graph[y][x]
            if graph[y + 1][x] <= 0:
                t -= 1
            if graph[y - 1][x] <= 0:
                t -= 1
            if graph[y][x + 1] <= 0:
                t -= 1
            if graph[y][x - 1] <= 0:
                t -= 1
            newgraph[y][x] = t
    
    g = get(newgraph)
    
    if g == 0:
        ans = 0
        break
    elif g == 1:
        graph = newgraph
        ans += 1
    else:
        ans += 1
        break

print(ans)