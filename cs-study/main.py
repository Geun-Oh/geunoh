from collections import deque

n, m = list(map(int, input().split()))

ans = []
k = []

def bfs(n, m):
    dep = 0
    queue = deque()
    for i in range(1, n + 1):
        queue.append([i])
    while queue:
        arr = queue.popleft()
        if len(arr) == m:
            print(sorted(arr))
            k.append(sorted(arr))
            continue
        for j in range(1, n + 1):
            queue.append(arr.append(j))

bfs(n, m)
# print(k)
# for y in k:
#     for i in range(m):
#         if i == m - 1:
#             print(y[i])
#         else:
#             print(y[i], end=" ")