node = int(input())
lineNum = int(input())
ans = []
line = [[] for _ in range(node + 1)]
for _ in range(lineNum):
    i = list(map(int, input().split()))
    if i[1] not in line[i[0]]:
        line[i[0]].append(i[1])
    if i[0] not in line[i[1]]:
        line[i[1]].append(i[0])

visited = [False] * (node + 1)

def dfs(line, v, visited):
    visited[v] = True
    ans.append(v)
    for i in line[v]:
        if not visited[i]:
            dfs(line, i, visited)

dfs(line, 1, visited)
print(len(ans) - 1)