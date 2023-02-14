from collections import deque

n, m = list(map(int, input().split()))

queue = deque()
for i in range(1, n + 1):
    queue.append(([i], 1))

while queue:
    arr, index = queue.popleft()
    if index == m:
        print(*arr)
        continue
    t = arr[-1]
    for i in range(t, n + 1):
        queue.append((arr + [i], index + 1))