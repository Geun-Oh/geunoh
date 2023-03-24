v, e = map(int, input().split())

def fp(parent, x): 
    if parent[x] != x:
        parent[x] = fp(parent, parent[x])
    return parent[x]

def up(parent, a, b):
    a = fp(parent, a)
    b = fp(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

parent = [0] * (v + 1)
for i in range(v):
    parent[i] = i # 모든 부모를 자신으로 초기화

graph = [[] for i in range(v + 1)]
lines = []
for i in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    lines.append((c, a, b))

lines.sort()
ans = 0

for line in lines:
    c, a, b = line
    if fp(parent, a) == fp(parent, b):
        continue
    up(parent, a, b)
    ans += c

print(ans)