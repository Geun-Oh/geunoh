n = int(input())
m = int(input())
INF = int(1e9)
graph = [[INF] * n for i in range(n)]

for i in range(n):
    for j in range(n):
        if i == j:
            graph[i][j] = 0

for i in range(m):
    a, b, c = map(int, input().split())
    graph[a - 1][b - 1] = min(graph[a - 1][b - 1], c)

for k in range(n):
    for i in range(n):
        for j in range(n):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

for i in range(n):
    for j in range(n):
        if graph[i][j] == INF:
            graph[i][j] = 0
        if j == n - 1:
            print(graph[i][j], end = "\n")
        else:
            print(graph[i][j], end = " ")