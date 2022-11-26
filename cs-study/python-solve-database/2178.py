from collections import deque

height, width = list(map(int, input().split()))

graph = []
for i in range(height):
    t = list(map(int, input()))
    graph.append(t)

counts = [[0] * width for i in range(height)]
counts[0][0] = 1

def bfs(x, y, graph):
    count = 1
    graph[y][x] = 0
    queue = deque()
    queue.append((x + 1, y, 0, 0))
    queue.append((x - 1, y, 0, 0))
    queue.append((x, y + 1, 0, 0))
    queue.append((x, y - 1, 0, 0))
    while queue:
        a, b, lx, ly = queue.popleft()
        if a <= -1 or a >= width or b <= -1 or b >= height:
            continue
        if graph[b][a] == 0:
            continue
        # if a == width - 1 and b == height - 1:
        #     return count
        if graph[b][a] == 1:
            graph[b][a] = 0
            counts[b][a] = counts[ly][lx] + 1
            queue.append((a + 1, b, a, b))
            queue.append((a - 1, b, a, b))
            queue.append((a, b + 1, a, b))
            queue.append((a, b - 1, a, b))
    print(counts[height - 1][width - 1])

bfs(0, 0, graph)