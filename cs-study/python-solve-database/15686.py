from itertools import combinations
from collections import deque

n, m = map(int, input().split())

graph = []
houses = []
chickens = []
for i in range(n):
    t = list(map(int, input().split()))
    for j in range(n):
        if t[j] == 1:
            houses.append((j, i))
        if t[j] == 2:
            chickens.append((j, i))
    graph.append(t)

for i in chickens:
    graph[i[0]][i[1]] = 0


ans = (2 * n + 1) * n + 1
for i in range(1, m + 1):
    can = list(combinations(chickens, i))
    for stores in can:
        citychickway = 0
        for house in houses:
            hy, hx = house
            indichickway = 2 * n + 2
            for store in stores:
                y, x = store
                dist = abs(hy - y) + abs(hx - x)
                if dist < indichickway:
                    indichickway = dist
            citychickway += indichickway
        
        if citychickway < ans:
            ans = citychickway

print(ans)