from collections import deque

def solution(tickets):
    answer = []
    graph = {}
    for i in tickets:
        if i[0] not in graph:
            graph[i[0]] = []
        graph[i[0]].append(i[1])
    print(graph)
    queue = deque()
    for i in graph['ICN']:
        *ntickets, = tickets
        ntickets.remove(['ICN', i])
        queue.append((i, ['ICN'], ntickets))
    while queue:
        x, arr, tic = queue.popleft()
        if x not in graph:
            if tic == []:
                arr.append(x)
                answer.append(arr)
            continue
        if tic == []:
            arr.append(x)
            answer.append(arr)
            continue
        for i in graph[x]:
            *ntic, = tic
            if [x, i] in ntic:
                ntic.remove([x, i])
                queue.append((i, arr + [x], ntic))
    answer.sort()
    answer = [*answer[0]]
    return answer