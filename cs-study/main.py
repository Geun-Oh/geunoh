## 17070 풀이 중

# 포지션 1, 2, 3이 각각 가로 세로 대각선
# 1, [0, 1]이면 dfs((1, [0, 1 + 1])) dfs((3, [0 + 1, 1 + 1]))을 실행한다.

# 위치가 맵을 벗어나면 false
# 포지션이 1이나 2일 때 위치가 벽이면 false를 반환
# 포지션이 3일 때 위치와 왼쪽 오른쪽 중 하나라도 벽이면 false를 반환

# 위치가 n, n이면 count 를 하나 증가
n = int(input())

graph = []
count = 0
for i in range(n):
    graph.append(list(map(int, input().split())))

def dfs(po, y, x, graph):
    global count
    if y <= -1 or y >= n or x <= -1 or x >= n:
        return False
    if graph[y][x] == 0:
        if po == 1:
                dfs(1, y, x + 1, graph)
                dfs(3, y + 1, x + 1, graph)
        if po == 2:
                dfs(2, y + 1, x, graph)
                dfs(3, y + 1, x + 1, graph)
        if po == 3:
            if graph[y][x - 1] == 1 or graph[y - 1][x] == 1:
                return False
            else:
                dfs(1, y, x + 1, graph)
                dfs(2, y + 1, x, graph)
                dfs(3, y + 1, x + 1, graph)
        if x == n - 1 and y == n - 1:
            count += 1
        return True

if graph[n - 1][n - 1] != 1:
    dfs(1, 0, 1, graph)
print(count)