n, m = map(int, input().split())
INF = int(1e9)

graph = [[INF] * (n + 1) for i in range(n + 1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == j:
            graph[i][j] = 0

for k in range(1, n + 1):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if graph[i][j] == INF:
            graph[i][j] = 0
        # if j == n:
        #     print(graph[i][j], end = "\n")
        # else:
        #     print(graph[i][j], end = ' ')

ans = []

for i in range(1, n + 1):
    cnt = 0
    for j in range(1, n + 1):
        if graph[i][j] != 0:
            cnt += 1
    for k in range(1, n + 1):
        if graph[k][i] != 0:
            cnt += 1
    if cnt == n - 1:
        ans.append(i)
        
print(len(ans))