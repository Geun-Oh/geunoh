from collections import deque
import copy

n = int(input())

graph = []
for i in range(n):
    t = list(input())
    graph.append(t)

g = copy.deepcopy(graph)

for i in range(n):
    for j in range(n):
        if g[i][j] == "G":
            g[i][j] = "R"

def bfs(x, y, graph, t):
    queue = deque()
    if x <= -1 or x >= n or y <= -1 or y >= n:
        return False
    if graph[y][x] != t:
        return False
    graph[y][x] = 0
    queue.append((x + 1, y))
    queue.append((x - 1, y))
    queue.append((x, y + 1))
    queue.append((x, y - 1))
    while queue:
        a, b = queue.popleft()
        if a <= -1 or a >= n or b <= -1 or b >= n:
            continue
        if graph[b][a] != t:
            continue
        graph[b][a] = 0
        queue.append((a + 1, b))
        queue.append((a - 1, b))
        queue.append((a, b + 1))
        queue.append((a, b - 1))
    return True

count = 0
cnt = 0
for i in range(n):
    for j in range(n):
        if bfs(j, i, graph, "R") == True:
            count += 1
        if bfs(j, i, graph, "G") == True:
            count += 1
        if bfs(j, i, graph, "B") == True:
            count += 1
        if bfs(j, i, g, "R") == True:
            cnt += 1
        if bfs(j, i, g, "B") == True:
            cnt += 1

print(count, cnt)