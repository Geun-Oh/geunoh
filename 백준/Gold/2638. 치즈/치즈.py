from collections import deque

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

queue = deque()
queue.append((0, 0))
while queue:
    y, x = queue.popleft()
    if y <= -1 or y >= n or x <= -1 or x >= m:
        continue 
    if graph[y][x] == 1:
        continue
    if graph[y][x] == 'x':
        continue
    graph[y][x] = 'x'
    queue.append((y + 1, x))
    queue.append((y - 1, x))
    queue.append((y, x + 1))
    queue.append((y, x - 1))

def sol():
    ans = 0
    while True:
        how = 0
        queue = deque()
        ngraph = []
        for y in range(n):
            for x in range(m):
                if graph[y][x] == 1:
                    how += 1
                    cnt = 0
                    if graph[y + 1][x] == 'x':
                        cnt += 1
                    if graph[y - 1][x] == 'x':
                        cnt += 1
                    if graph[y][x + 1] == 'x':
                        cnt += 1
                    if graph[y][x - 1] == 'x':
                        cnt += 1
                    if cnt >= 2:
                        ngraph.append((y, x))
                        queue.append((y + 1, x))
                        queue.append((y - 1, x))
                        queue.append((y, x + 1))
                        queue.append((y, x - 1))
        if how == 0:
            break
        for i in ngraph:
            ny, nx = i
            graph[ny][nx] = 'x'
        while queue:
            ly, lx = queue.popleft()
            if graph[ly][lx] == 'x' or graph[ly][lx] == 1:
                continue
            if graph[ly][lx] == 0:
                graph[ly][lx] = 'x'
                queue.append((ly + 1, lx))
                queue.append((ly - 1, lx))
                queue.append((ly, lx + 1))
                queue.append((ly, lx - 1))
        ans += 1
    
    return ans

print(sol())