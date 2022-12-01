n, m = list(map(int, input().split()))

ans = []
visited = [False]  * (n + 1)
k = []

def backtrack(dep, n, m):
    if dep == m:
        t = sorted(ans)
        if t not in k:
            k.append(t)
        return
    for i in range(1, n + 1):
        if not visited[i]:
            visited[i] = True
            ans.append(i)
            backtrack(dep + 1, n, m)
            visited[i] = False
            ans.pop()

backtrack(0, n, m)
for y in k:
    for i in range(m):
        if i == m - 1:
            print(y[i])
        else:
            print(y[i], end=" ")