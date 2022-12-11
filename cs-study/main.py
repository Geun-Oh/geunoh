import heapq
import sys

input = sys.stdin.readline

n = int(input())
m = int(input())
INF = int(1e9)
graph = [[INF] * (n + 1) for i in range(n + 1)]

for i in range(m):
    a, b, c = map(int, input().split())
    graph[a][b] = min(c, graph[a][b]) # 노드와 거리를 초기화

start, end = map(int, input().split())

def dijkstra(graph, start):
    distances = [[INF, [start]] for i in range(n + 1)]
    visited = [False] * (n + 1)
    distances[start][0] = 0
    queue = []
    heapq.heappush(queue, (distances[start], start)) # (거리, 노드)

    while queue:
        distance, des = heapq.heappop(queue)
        dis, route = distance
        visited[des] = True
        for i in range(1, n + 1):
            new_dis = graph[des][i]
            new_des = i
            if distances[new_des][0] < dis:
                continue
            if distances[new_des][0] > dis + new_dis:
                distances[new_des][0] = dis + new_dis
                distances[new_des][1].append(des)
                print(distances[new_des])
                heapq.heappush(queue, (distances[new_des], new_des))
    return distances

ans = dijkstra(graph, start)[end][1]
ans.append(end)

print(dijkstra(graph, start)[end])
print(dijkstra(graph, start)[end][0])
print(len(ans))
print(*ans)