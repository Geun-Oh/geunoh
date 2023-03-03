from collections import deque

n, m = map(int, input().split())

queue = deque()
visited = [-1] * (100001)

queue.append((n, -1))

ans = 1000001
ansarr = [m]
while queue:
    x, last = queue.popleft()
    if x <= -1 or x >= 100001:
        continue
    if visited[x] > -1:
        continue
    if x == m:
        visited[x] = last
        break
    visited[x] = last 
    queue.append((x + 1, x))
    queue.append((x - 1, x))
    queue.append((2 * x, x))
t = m
while True:
    if t == n:
        break
    y = visited[t]
    ansarr.append(y)
    t = y

if n == m:
    print(0)
    print(n)
else:
    print(len(ansarr) - 1)
    print(*ansarr[::-1])