import heapq

graph = {
    'A': {'B': 8, 'C': 1, 'D': 2},
    'B': {},
    'C': {'B': 5, 'D': 2},
    'D': {'E': 3, 'F': 5},
    'E': {'F': 1},
    'F': {'A': 5}
}

def dijkstra(graph, start):
    distance = {node: float('inf') for node in graph}
    distance[start] = 0
    queue = []
    heapq.heappush(queue, (distance[start], start)) # 우선순위 큐에 거리와 노드를 저장

    while queue:
        cur_dis, cur_des = heapq.heappop(queue)

        if distance[cur_des] < cur_dis:
            continue

        for new_des, new_dis in graph[cur_des].items():
            if new_dis + cur_dis < distance[new_des]:
                distance[new_des] = new_dis + cur_dis
                heapq.heappush(queue, (distance[new_des], new_des))

    return distance

print(dijkstra(graph, "A"))