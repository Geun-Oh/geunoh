def solution(n, results):
    INF = int(1e9)
    graph = [[INF] * (n + 1) for i in range(n + 1)]
    for i in results:
        a, b = i
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
    answer = 0
    for i in range(1, n + 1):
        cnt = 0
        for j in range(1, n + 1):
            if graph[j][i] != 0:
                cnt += 1
            if graph[i][j] != 0:
                cnt += 1
        if cnt == n - 1:
            answer += 1
    
    return answer