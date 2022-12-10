import heapq

n, m = map(int, input().split())
INF = int(1e8)
graph = [[] for i in range(n + 1)]

for i in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c)) # 노드와 거리를 초기화
    graph[b].append((a, c))

def dijkstra(graph, start):
    distances = [INF] * (n + 1)
    visited = [False] * (n + 1)
    distances[start] = 0
    queue = []
    heapq.heappush(queue, (start, distances[start]))

    while queue:
        des, dis = heapq.heappop(queue)
        visited[des] = True
        for i in graph[des]:
            new_des, new_dis = i
            if distances[new_des] < dis:
                continue
            if distances[new_des] > dis + new_dis:
                distances[new_des] = dis + new_dis
                heapq.heappush(queue, (new_des, distances[new_des]))

    return distances

p, q = map(int, input().split())
a = dijkstra(graph, 1)[p] + dijkstra(graph, p)[q] + dijkstra(graph, q)[n]
b = dijkstra(graph, 1)[q] + dijkstra(graph, q)[p] + dijkstra(graph, p)[n]
ans = 0
if min(a, b) >= 100000000:
    print(-1)
else:
    print(min(a, b))