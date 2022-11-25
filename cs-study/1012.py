from collections import deque

case = int(input())
count = 0

def bfs(x, y, graph, height, width):
    queue = deque()
    if x <= -1 or x >= height or y <= -1 or y >= width:
        return 9
    if graph[x][y] == 0:
        return 999
    if graph[x][y] == 1:
        graph[x][y] -= 1
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))
        while queue:
            a, b = queue.popleft()
            if a <= -1 or a >= height or b <= -1 or b >= width:
                continue
            if graph[a][b] == 0:
                continue
            if graph[a][b] == 1:
                graph[a][b] -= 1
                queue.append((a + 1, b))
                queue.append((a - 1, b))
                queue.append((a, b + 1))
                queue.append((a, b - 1))
        return True

for _ in range(case):
    count = 0
    x, y, n = list(map(int, input().split()))
    graph = [[0] * y for _ in range(x)]

    for _ in range(n):
        a, b = list(map(int, input().split()))
        graph[a][b] = 1

    for i in range(x):
        for j in range(y):
            if bfs(i, j, graph, x, y) == True:
                count += 1
    

    print(count)