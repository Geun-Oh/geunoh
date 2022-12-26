from collections import deque
import copy
import sys

input = sys.stdin.readline
n, m = map(int, input().split())
graph = []
ones = []

for i in range(n):
    t = list(map(int, input().rstrip()))
    for j in range(m):
        if t[j] == 1:
            ones.append((i, j))
    graph.append(t)

def bfs(graph):
    if n == 1 and m == 1:
        return 1
    queue = deque()
    count = 1
    graph[0][0] = 2
    queue.append((1, 0, count + 1, False))
    queue.append((0, 1, count + 1, False))
    while queue:
        y, x, cnt, crashed = queue.popleft()
        print(y, x, cnt, crashed)
        if x <= -1 or x >= m or y <= -1 or y >= n:
            continue
        if graph[y][x] == 2:
            continue
        if graph[y][x] == 1:
            if crashed == False:
                graph[y][x] = 2 # 벽을 허물었다고 생각
                queue.append((y + 1, x, cnt + 1, True))
                queue.append((y - 1, x, cnt + 1, True))
                queue.append((y, x + 1, cnt + 1, True))
                queue.append((y, x - 1, cnt + 1, True))
            continue
        if y == n - 1 and x == m - 1:
            return cnt
        graph[y][x] = 2
        queue.append((y + 1, x, cnt + 1, False))
        queue.append((y - 1, x, cnt + 1, False))
        queue.append((y, x + 1, cnt + 1, False))
        queue.append((y, x - 1, cnt + 1, False))
    return -1

print(bfs(graph))

# ans = []

# if len(ones) == 0:
#     print(bfs(graph))
# else:
#     for i in range(len(ones)):
#         newgraph = copy.deepcopy(graph)
#         newgraph[ones[i][0]][ones[i][1]] = 0
#         val = bfs(newgraph)
#         if val != -1:
#             ans.append(val)
#     if len(ans) == 0:
#         print(-1)
#     else:
#         print(min(ans))