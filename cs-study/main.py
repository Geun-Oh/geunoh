from collections import deque

n, p, q = map(int, input().split())

arr = []
anscount = 0
changed = False
for i in range(n):
    arr.append(list(map(int, input().split())))

def bfs(x, y, visited):
    queue = deque()
    if visited[x][y] == 1:
        return False
    Arr = []
    visited[x][y] = 1
    Arr.append([arr[x][y], x, y])
    queue.append((x - 1, y, x, y))
    queue.append((x + 1, y, x, y))
    queue.append((x, y - 1, x, y))
    queue.append((x, y + 1, x, y))
    while queue:
        X, Y, lx, ly = queue.popleft()
        if X <= -1 or X >= n or Y <= -1 or Y >= n:
            continue
        if visited[X][Y] == 1:
            continue
        visited[X][Y] = 1
        if abs(arr[X][Y] - arr[lx][ly]) >= p and abs(arr[X][Y] - arr[lx][ly]) <= q:
            Arr.append([arr[X][Y], X, Y])
            queue.append((X - 1, Y, X, Y))
            queue.append((X + 1, Y, X, Y))
            queue.append((X, Y - 1, X, Y))
            queue.append((X, Y + 1, X, Y))
    if len(Arr) > 1:
        s = 0
        for i in Arr:
            s += i[0]
        average = s // len(Arr)
        for i in Arr:
            arr[i[1]][i[2]] = average
        global changed
        changed = True
        return True
    return False


while True:
    changed = False
    visited = [[0] * n for i in range(n)]
    for i in range(n):
        for j in range(n):
            if visited[i][j] == 0:
                bfs(i, j, visited)
    if changed == True:
        anscount += 1
    else:
        break
print(anscount)