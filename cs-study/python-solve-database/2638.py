## 거의 구현에 가까운 bfs
# 일단 n이 최대 100뿐 이라는 점에서 여러 번의 for 문을 돌려도 괜찮아 보인다는 생각을 함.
# 매 상황에 맞는 구현을 진행함
# 가장자리는 치즈가 아니라는 설명을 보고
# 0, 0을 기준으로 연결된 0들을 모두 x로 바꿔 실내공기와 실외공기를 구분해줌
# 이후 2개 이상 변이 맞닿아 있는 치즈들을 찾아서
# 해당 치즈들을 x로 치환해주고 없어진 치즈들을 기준을 bfs를 돌려서
# 실내 공기가 뚫린 경우를 찾아 x로 바꿔줌
# 이후 치즈가 없어질 때까지 과정을 반복함.

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