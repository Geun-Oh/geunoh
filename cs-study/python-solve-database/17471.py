## 17471 게리멘더링
# 조합, UF
# 조합을 활용하여 한쪽 선거구를 특정하고,
# 해당 선거구가 서로소 집합인지 확인한다.
# 조건에 맞는 경우들 중 인구수 차이가 최소인 경우를 반환한다.

from itertools import combinations
from collections import deque

n = int(input())
people = list(map(int, input().split()))
graph = [[] for i in range(n + 1)]
for i in range(n):
    a = list(map(int, input().split()))[1:]
    for k in a:
        graph[i + 1].append(k)

def get(arr, graph):
    queue = deque()
    *a, = arr
    for i in arr:
        if graph[i] == []:
            if len(arr) == 1:
                return True
            return False
    for i in graph[a[0]]:
        queue.append(i)
    a.pop(0)
    while queue:
        x = queue.popleft()
        if x in a:
            for k in graph[x]:
                queue.append(k)
            a.remove(x)
    if a == []:
        return True
    return False

pos = []
for i in range(1, n):
    l = list(combinations([i for i in range(1, n + 1)], i))
    for j in l:
        rev = [i for i in range(1, n + 1) if i not in list(j)]
        if get(list(j), graph) == True and get(rev, graph) == True:
            pos.append(list(j))
ans = 1001
m = sum(people)
for i in pos:
    a = 0
    for j in i:
        a += people[j - 1]
    b = m - a
    if abs(a - b) < ans:
        ans = abs(a - b)
if pos == []:
    ans = -1
if n == 2:
    ans = abs(people[0] - people[1])
print(ans)