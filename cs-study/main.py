import sys

input = sys.stdin.readline

n, m = map(int, input().rstrip().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input().rstrip().split())))

dp = [[-1] * m for i in range(n)]

def sol(y, x, last):
    global dp
    if y <= -1 or y >= n or x <= -1 or x >= m:
        return 0
    if graph[y][x] >= last:
        return 0
    if y == n - 1 and x == m - 1:
        return 1
    if dp[y][x] != -1:
        return dp[y][x]
    l = graph[y][x]
    g = sol(y + 1, x, l) + sol(y - 1, x, l) + sol(y, x + 1, l) + sol(y, x - 1, l)
    dp[y][x] = g
    return g

if n == 1 and m == 1:
    print(1)
else:
    u = graph[0][0]
    print(sol(1, 0, u) + sol(-1, 0, u) + sol(0, 1, u) + sol(0, -1, u))

# queue = deque()
# queue.append((1, 0, graph[0][0]))
# queue.append((-1, 0, graph[0][0]))
# queue.append((0, 1, graph[0][0]))
# queue.append((0, -1, graph[0][0]))
# while queue:
#     y, x, last = queue.popleft()
#     if y <= -1 or y >= n or x <= -1 or x >= m:
#         continue
#     if graph[y][x] >= last:
#         continue
#     if y == n - 1 and x == m - 1:
#         ans += 1
#         continue
#     queue.append((y + 1, x, graph[y][x]))
#     queue.append((y - 1, x, graph[y][x]))
#     queue.append((y, x + 1, graph[y][x]))
#     queue.append((y, x - 1, graph[y][x]))