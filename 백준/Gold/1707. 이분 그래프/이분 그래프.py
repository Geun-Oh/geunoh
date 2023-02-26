from collections import deque
import sys
input = sys.stdin.readline
case = int(input())

def sol():
    group = {'A': {}, 'B': {}}
    node, line = list(map(int, input().split()))
    if node == 2 or node == 1:
        return "YES"
    graph = [[] for i in range(node + 1)]
    for i in range(line):
        a, b = list(map(int, input().split()))
        graph[a].append(b)
        graph[b].append(a)
    queue = deque()

    visited = [False] * (node + 1)
    for i in range(1, node + 1):
        queue = deque()
        visited[i] = True
        if i not in group['A'].keys() or i not in group['B'].keys():
            group['A'][i] = 0
        if len(graph[i]) == 0:
            continue
        for j in graph[i]:
            if i in group['A'].keys():
                queue.append((j, 'B'))
            if i in group['B'].keys():
                queue.append((j, 'A'))

        while queue:
            x, g = queue.popleft()
            if visited[x] == True:
                continue
            visited[x] = True
            if g == 'A':
                if x in group['B'].keys():
                    return "NO"
            if g == 'B':
                if x in group['A'].keys():
                    return "NO"
            group[g][x] = 0
            for k in graph[x]:
                if k in group[g].keys():
                    return "NO"
                else:
                    if g == 'A':
                        queue.append((k, 'B'))
                    else:
                        queue.append((k, 'A'))
    return "YES"

for _ in range(case):
    print(sol())