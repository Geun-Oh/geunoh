from collections import deque

m, n, k = map(int, input().split())

ans = []
arr = [[0] * n for i in range(m)]

for i in range(k):
    a, b, c, d = map(int, input().split())
    for y in range(b, d):
        for x in range(a, c):
            arr[y][x] = 1

def bfs(y, x):
    if y <= -1 or y >= m or x <= -1 or x >= n:
        return False
    if arr[y][x] == 1:
        return False
    queue = deque()
    arr[y][x] = 1
    cnt = 1
    queue.append((y, x + 1))
    queue.append((y, x - 1))
    queue.append((y - 1, x))
    queue.append((y + 1, x))
    while queue:
        a, b = queue.popleft()
        if a <= -1 or a >= m or b <= -1 or b >= n:
            continue
        if arr[a][b] == 1:
            continue
        arr[a][b] = 1
        cnt += 1
        queue.append((a + 1, b))
        queue.append((a - 1, b))
        queue.append((a, b + 1))
        queue.append((a, b - 1))
    ans.append(cnt)
    return True

for i in range(n):
    for j in range(m):
        bfs(j, i)

ans.sort()
print(len(ans))
print(*ans)