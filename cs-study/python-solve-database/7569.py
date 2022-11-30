from collections import deque

x, y, height = list(map(int, input().split()))

box = []
for j in range(height):
    graph = []
    for i in range(y):
        t = list(map(int, input().split()))
        graph.append(t)
    box.append(graph)

def bfs(box):
    queue = deque()
    for k in range(height):
        for i in range(x):
            for j in range(y):
                if box[k][j][i] == 1:
                    queue.append((i + 1, j, k, i, j, k))
                    queue.append((i - 1, j, k, i, j, k))
                    queue.append((i, j + 1, k, i, j, k))
                    queue.append((i, j - 1, k, i, j, k))
                    queue.append((i, j, k + 1, i, j, k))
                    queue.append((i, j, k - 1, i, j, k))
    while queue:
        a, b, c, la, lb, lc = queue.popleft()
        if a <= -1 or a >= x or b <= -1 or b >= y or c <= -1 or c >= height:
            continue
        if box[c][b][a] == -1:
            continue
        if box[c][b][a] == 0:
            box[c][b][a] = box[lc][lb][la] + 1
            queue.append((a + 1, b, c, a, b, c))
            queue.append((a - 1, b, c, a, b, c))
            queue.append((a, b + 1, c, a, b, c))
            queue.append((a, b - 1, c, a, b, c))
            queue.append((a, b, c + 1, a, b, c))
            queue.append((a, b, c - 1, a, b, c))
    n = []
    m = []
    for k in range(height):
        for i in range(y):
            for j in range(x):
                if box[k][i][j] == 0:
                    print(-1)
                    return
            n.append(max(box[k][i]))
    print(max(n) - 1)

bfs(box)