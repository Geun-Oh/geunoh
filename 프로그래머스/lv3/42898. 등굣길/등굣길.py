def solution(m, n, puddles):
    answer = 0
    graph = [[1] * (m + 1) for i in range(n + 1)]
    for i in puddles:
        x, y = i
        graph[y][x] = 0
    for i in range(1, n + 1):
        if graph[i][1] == 0:
            continue
        graph[i][1] = graph[i - 1][1]
    for i in range(1, m + 1):
        if graph[1][i] == 0:
            continue
        graph[1][i] = graph[1][i - 1]
    for y in range(2, n + 1):
        for x in range(2, m + 1):
            if graph[y][x] == 0:
                continue
            graph[y][x] = (graph[y - 1][x] + graph[y][x - 1]) % 1000000007
    return graph[n][m] % 1000000007