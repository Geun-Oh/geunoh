from itertools import combinations
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

# for _ in range(case):
#     ans = "NO"
#     node, line = list(map(int, input().split()))
#     graph = [[] for i in range(node + 1)]
#     for i in range(line):
#         a, b = list(map(int, input().split()))
#         graph[a].append(b)
#         graph[b].append(a)
#     combs = []
#     for p in range(1, (node + 1) // 2 + 1):
#         combs = list(combinations([i for i in range(1, node + 1)], p))
#         for a in combs:
#             queue = deque()
#             rev = [i for i in range(1, node + 1) if i not in a]
#             if isUF(a, graph) == True and isUF(rev, graph) == True:
#                 ans = "YES"
#     print(ans)

# # def isUF(arr, graph):
# #     queue = deque()
# #     dic = {}
# #     for mom in arr:
# #         for son in graph[mom]:
# #             queue.append(son)
# #     while queue:
# #         s = queue.popleft()
# #         if s in dic.keys():
# #             continue
# #         if s in arr:
# #             return False
# #         dic[s] = 0
# #     return True