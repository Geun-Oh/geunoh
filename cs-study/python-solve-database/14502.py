import sys
import copy
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

arr = []
for i in range(n):
    arr.append(list(map(int, input().split())))

virus = []
empty = []
for i in range(n):
    for j in range(m):
        if arr[i][j] == 0:
            empty.append([i, j])
        elif arr[i][j] == 2:
            virus.append((i, j))

def bfs(arr):
    for a in virus:
        queue = deque()
        y, x = a
        queue.append((y + 1, x))
        queue.append((y - 1, x))
        queue.append((y, x + 1))
        queue.append((y, x - 1))
        while queue:
            a, b = queue.popleft()
            if a <= -1 or a >= n or b <= -1 or b >= m:
                continue
            if arr[a][b] != 0:
                continue
            arr[a][b] = 2
            queue.append((a + 1, b))
            queue.append((a - 1, b))
            queue.append((a, b + 1))
            queue.append((a, b - 1))

    count = 0
    for i in range(n):
        for j in range(m):
            if arr[i][j] == 0:
                count += 1
    
    return count

ans = 0

def solve(arr, i, j, k):
    narr = copy.deepcopy(arr)
    narr[empty[i][0]][empty[i][1]] = 1
    narr[empty[j][0]][empty[j][1]] = 1
    narr[empty[k][0]][empty[k][1]] = 1
    cnt = bfs(narr)
    global ans
    if ans < cnt:
        ans = cnt
        
for i in range(len(empty) - 2):
    for j in range(i + 1, len(empty) - 1):
        for k in range(j + 1, len(empty)):
            solve(arr, i, j, k)

print(ans)