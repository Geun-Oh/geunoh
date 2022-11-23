from collections import deque

num = int(input())
graph = []
for _ in range(num):
    graph.append(list(map(int, input())))
count = 0
t = 0
def dfs(x, y):
    print(x, y)
    if x <= -1 or x >= num or y <= -1 or y >= num or graph[x][y] == 0:
        return False
    if graph[x][y] == 1:
        graph[x][y] == 0
        global count
        count += 1
        dfs(x, y - 1)
        dfs(x + 1, y)
        dfs(x, y + 1)
        dfs(x - 1, y)
        # 만일 사방이 다 0이면 그때 count를 출력하고 초기화하기
        return True
    return False

for i in range(num):
    for j in range(num):
        if dfs(i, j) == True:
            t += 1

print(t, count)