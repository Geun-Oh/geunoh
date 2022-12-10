import heapq
import sys

input = sys.stdin.readline

n, m = map(int, input().split())
start = int(input())
INF = int(9999999)
graph = [[] for i in range(n + 1)]

for i in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c)) # 노드와 거리를 초기화
    # graph[b].append((a, c)) # 요거는 양방향 간선일 때만!

def dijkstra(graph, start):
    distances = [INF] * (n + 1)
    visited = [False] * (n + 1)
    distances[start] = 0
    queue = []
    heapq.heappush(queue, (distances[start], start)) # 거리를 기준으로 우선순위를 정해야하므로 (거리, 노드) 순으로 입력하자...!!

    while queue:
        dis, des = heapq.heappop(queue)
        visited[des] = True
        for i in graph[des]:
            new_des, new_dis = i
            if distances[new_des] < dis:
                continue
            if distances[new_des] > dis + new_dis:
                distances[new_des] = dis + new_dis
                heapq.heappush(queue, (distances[new_des], new_des))

    return distances

ans = dijkstra(graph, start)

for i in range(1, n + 1):
    if ans[i] >= INF:
        print("INF")
    else:
        print(ans[i])