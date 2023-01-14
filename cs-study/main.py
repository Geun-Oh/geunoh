from collections import deque
import copy
import sys

input = sys.stdin.readline
case = int(input())

def sol():
    node, line = map(int, input().split())

    if node == 1:  # 노드가 하나 뿐이라면 이분 그래프가 아니다.
        return "NO"
    if line == 0:  # 노드는 2개 이상이지만 간선이 하나도 없다면 이분 그래프이다.
        return "YES"

    graph = [[] for k in range(node + 1)]
    where = [0] * (node + 1)
    visited = [False] * (node + 1)
    for j in range(line):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)

    queue = deque()
    visited[1] = True
    where[1] = "A"
    for item in graph[1]:
        queue.append((item, "B"))
    while queue:
        x, group = queue.popleft()
        visited[x] = True
        where[x] = group
        for item in graph[x]:
            if visited[item] == True:  # 이미 방문한 곳이라면
                if where[x] == where[item]:  # 같은 그룹인지 확인해서 맞으면 끝내기
                    return "NO"
                continue  # 아니면 이어가기
            else:  # 방문한 곳이 아니라면 그룹을 지정해서 큐에 추가하기
                if group == "A":
                    queue.append((item, "B"))
                else:
                    queue.append((item, "A"))

    return "YES"


for i in range(case):
    print(sol())