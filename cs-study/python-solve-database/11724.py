node, line = list(map(int, input().split()))

graph = [[] for _ in range(node)]
for _ in range(line):
    a, b = list(map(int, input().split()))
    if b not in graph[a - 1]:
        graph[a - 1].append(b)
    if a not in graph[b - 1]:
        graph[b - 1].append(a)

visited = [False] * node

def dfs(graph, i, visited):
    if visited[i - 1] == True:
        return False
    visited[i - 1] = True
    for j in graph[i - 1]:
        if visited[j - 1] == False:
            dfs(graph, j, visited)
    return True

count = 0

for i in range(node):
    if dfs(graph, i + 1, visited) == True:
        count += 1

print(count)