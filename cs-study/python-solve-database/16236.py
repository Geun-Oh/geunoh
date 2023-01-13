from collections import deque

n = int(input())

Map = []
shark = [0, 0]
sharksize = 2
sharkate = 0
sharktime = 0
for i in range(n):
    t = list(map(int, input().split()))
    for j in range(n):
        if t[j] == 9:
            shark = [i, j]
    Map.append(t)

# bfs에서는 최신 지도와 상어의 위치를 받는다.
def bfs(Map, shark):
    queue = deque()
    Arr = []
    visited = [[0] * n for i in range(n)]
    visited[shark[0]][shark[1]] = 1
    queue.append((shark[0] + 1, shark[1], 1))
    queue.append((shark[0] - 1, shark[1], 1))
    queue.append((shark[0], shark[1] + 1, 1))
    queue.append((shark[0], shark[1] - 1, 1))
    while queue:
        y, x, distance = queue.popleft()
        if y <= -1 or y >= n or x <= -1 or x >= n:
            continue
        if visited[y][x] == 1:
            continue
        visited[y][x] = 1
        # 상어보다 큰 물고기면 탐색을 멈춘다.
        if Map[y][x] > sharksize:
            continue
        elif Map[y][x] != 0 and Map[y][x] < sharksize:
            Arr.append([distance, y, x])
        queue.append((y + 1, x, distance + 1))
        queue.append((y - 1, x, distance + 1))
        queue.append((y, x + 1, distance + 1))
        queue.append((y, x - 1, distance + 1))
    return Arr

while True:
    Arr = bfs(Map, shark)
    if Arr == []:
        print(sharktime)
        break
    eat = Arr[0]
    for i in Arr:
        if i[0] <= eat[0]:
            if i[1] < eat[1]:
                eat = i
            elif i[1] == eat[1]:
                if i[2] < eat[2]:
                    eat = i
    Map[shark[0]][shark[1]] = 0
    shark = [eat[1], eat[2]]
    sharktime += eat[0]
    sharkate += 1
    if sharkate == sharksize:
        sharksize += 1
        sharkate = 0