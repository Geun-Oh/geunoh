from collections import deque
import copy

height = int(input())

graph = []
for i in range(height):
    t = list(map(int, input().split()))
    graph.append(t)

large = max(map(max, graph))

def bfs(x, y, graph):
    queue = deque()
    if x <= -1 or x >= height or y <= -1 or x >= height:
        return False
    if ig[x][y] == 0:
        return False
    if ig[x][y] == 1:
        ig[x][y] = 0
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))
        while queue:
            a, b = queue.popleft()
            if a <= -1 or a >= height or b <= -1 or b >= height:
                continue
            if ig[a][b] == 0:
                continue
            if ig[a][b] == 1:
                ig[a][b] = 0
                queue.append((a + 1, b))
                queue.append((a - 1, b))
                queue.append((a, b + 1))
                queue.append((a, b - 1))
        return True

ans = []

for c in range(large + 1):
    count = 0
    ig = copy.deepcopy(graph)
    for i in range(height):
        for j in range(height):
            if ig[i][j] <= c:
                ig[i][j] = 0
            elif ig[i][j] > c:
                ig[i][j] = 1
    for i in range(height):
        for j in range(height):
            if bfs(i, j, ig) == True:
                count += 1
    ans.append(count)

print(max(ans))