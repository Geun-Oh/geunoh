from collections import deque

width, height = list(map(int, input().split()))

graph = []
for i in range(height):
    t = list(map(int, input().split()))
    graph.append(t)

def bfs(graph):
    queue = deque()
    for i in range(width):
        for j in range(height):
            if graph[j][i] == 1:
                queue.append((i + 1, j, i, j))
                queue.append((i - 1, j, i, j))
                queue.append((i, j + 1, i, j))
                queue.append((i, j - 1, i, j))
    while queue:
        a, b, la, lb = queue.popleft()
        if a <= -1 or a >= width or b <= -1 or b >= height:
            continue
        if graph[b][a] == -1:
            continue
        if graph[b][a] == 0:
            graph[b][a] = graph[lb][la] + 1
            queue.append((a + 1, b, a, b))
            queue.append((a - 1, b, a, b))
            queue.append((a, b + 1, a, b))
            queue.append((a, b - 1, a, b))
        
    # graph 내에 0이 있으면 -1을 출력하고,
    # 없으면 최대값 - 1 을 출력한다.
    n = []
    for i in range(height):
        for j in range(width):
            if graph[i][j] == 0:
                print(-1)
                return
        n.append(max(graph[i]))
    print(max(n) - 1)

bfs(graph)