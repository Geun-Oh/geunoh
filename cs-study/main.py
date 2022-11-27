from collections import deque

height = int(input())

graph = []
for i in range(height):
    t = list(map(int, input().split()))
    graph.append(t)

for i in range(height):
    for j in range(height):
        if graph[i][j] <= height:
            graph[i][j] = 0
        elif graph[i][j] > height:
            graph[i][j] = 1
    
def bfs(x, y, graph):
    queue = deque()
    if x <= -1 or x >= height or y <= -1 or x >= height:
        return False
    if graph[x][y] == 0:
        return False
    if graph[x][y] == 1:
        graph[x][y] = 0
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))
        while queue:
            a, b = queue.popleft()
            if a <= -1 or a >= height or b <= -1 or b >= height:
                continue
            if graph[a][b] == 0:
                continue
            if graph[a][b] == 1:
                graph[a][b] = 0
                queue.append((a + 1, b))
                queue.append((a - 1, b))
                queue.append((a, b + 1))
                queue.append((a, b - 1))
        return True

count = 0
for i in range(height):
    for j in range(height):
        if bfs(i, j, graph) == True:
            count += 1
        
print(count)
