from collections import deque

def solution(n, edge):
    answer = 0
    graph = [[] for i in range(n + 1)]
    for i in edge:
        graph[i[0]].append(i[1])
        graph[i[1]].append(i[0])
    
    visited = [False] * (n + 1)
    visited[1] = True
    distance = [987654321] * (n + 1)
    distance[1] = 0
    distance[0] = 0
    queue = deque()
    for i in graph[1]:
        queue.append((i, 1))
    
    while queue:
        x, dis = queue.popleft()
        if visited[x] == True:
            continue
        visited[x] = True
        if distance[x] > dis:
            distance[x] = dis
        for i in graph[x]:
            queue.append((i, dis + 1))
    
    m = max(distance)
    for i in distance:
        if i == m:
            answer += 1
    return answer