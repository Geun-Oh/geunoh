from collections import deque

queue = deque()
num = int(input())
ans = []

graph = []
for _ in range(num):
    graph.append(list(map(int, input())))

def bfs(x, y, graph):
    count = 0
    if x <= -1 or x >= num or y <= -1 or x >= num:
        return False
    if graph[x][y] == 0:
        return False
    if graph[x][y] == 1:
        count += 1
        graph[x][y] -= 1
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))
        while queue:
            a, b = queue.popleft()
            if a <= -1 or a >= num or b <= -1 or b >= num:
                continue
            if graph[a][b] == 0:
                continue
            if graph[a][b] == 1:
                count += 1
                graph[a][b] -= 1
                queue.append((a + 1, b))
                queue.append((a - 1, b))
                queue.append((a, b + 1))
                queue.append((a, b - 1))
    ans.append(count)

for i in range(num):
    for j in range(num):
        bfs(i, j, graph)
        
ans.sort()
print(len(ans))
for i in ans:
    print(i)