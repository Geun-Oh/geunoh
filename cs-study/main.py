import heapq

n, m = map(int, input().split())

INF = int(1e9)

start = int(input())

distance = [INF] * (n + 1)
distance[start] = 0

graph = [[] for i in range(n + 1)]
for i in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

def djikstra(start):
    queue = []
    heapq.heappush(queue, (0, start))
    
    while queue:
        dist, now = heapq.heappop(queue)

        if distance[now] < dist:
            continue
        
        for i in graph[now]:
            if dist + i[1] < distance[i[0]]:
                distance[i[0]] = dist + i[1]
                heapq.heappush(queue, (dist + i[1], i[0]))

djikstra(start)

for i in range(1, n + 1):
    if distance[i] == INF:
        print("INF", end = ' ')
    else:
        print(distance[i], end = ' ')        