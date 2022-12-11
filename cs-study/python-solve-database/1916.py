## 틀렸던 이유와 체크해야 할 점
## 1. 같은 루트인데 비용이 다른 경로가 제시될 수 있으므로 처음 graph를 초기화할 때 입력되는 값을 계속 비교하면서 갱신해야함.
## 이를 위해서 append로 입력값을 받는게 아니라 INF로 초기화 된 2차원 배열에 값을 비교해가면서 최솟값을 계속 취함.
## 2. 비용이 0인 경로를 고려해야 함.
## 3. new_des, new_dis 인덱싱을 하는 과정에서 list 내장 함수 index는 같은 값을 가진 경우 가장 작은 인덱스 값을 가져옴을 알고 있어야 함. 따라서 내장함수를 사용하지 않고 인덱싱 해주어야함.
## 4. INF 크게 만들자. 1e9가 가장 좋은 값인듯.
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

def dijkstra(graph, start):
    distances = [INF] * (n + 1)
    visited = [False] * (n + 1)
    distances[start] = 0
    queue = []
    heapq.heappush(queue, (distances[start], start)) # 거리를 기준으로 우선순위를 정해야하므로 (거리, 노드) 순으로 입력하자...!!

    while queue:
        dis, des = heapq.heappop(queue)
        visited[des] = True
        for i in range(1, n + 1):
            new_dis = graph[des][i]
            new_des = i
            if distances[new_des] < dis:
                continue
            if distances[new_des] > dis + new_dis:
                distances[new_des] = dis + new_dis
                heapq.heappush(queue, (distances[new_des], new_des))
    return distances

start, end = map(int, input().split())
print(dijkstra(graph, start)[end])