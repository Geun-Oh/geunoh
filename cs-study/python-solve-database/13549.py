from collections import deque

n, m = map(int, input().split())
INF = int(1e9)

distance = [INF] * 100002
distance[n] = 0
queue = deque()
queue.append((n + 1, 1))
queue.append((n - 1, 1))
queue.append((n * 2, 0))

while queue:
    x, dep = queue.popleft()
    if x < 0 or x > 100000 or dep > distance[m]:
        continue
    if x == m:
        if distance[x] == INF:
            distance[x] = dep
        elif distance[x] > dep:
            distance[x] = dep
        elif distance[x] <= dep:
            continue
        continue
    if distance[x] == INF:
        distance[x] = dep
    elif distance[x] > dep:
        distance[x] = dep
    elif distance[x] <= dep:
        continue
    queue.append((x + 1, dep + 1))
    queue.append((x - 1, dep + 1))
    queue.append((x * 2, dep))

print(distance[m])