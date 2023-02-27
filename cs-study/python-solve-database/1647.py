n, m = map(int, input().split())

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

parent = [0] * (n + 1)

for i in range(1, n + 1):
    parent[i] = i

dist = []

for i in range(m):
    a, b, c = map(int, input().split())
    dist.append((c, a, b))

dist.sort()

ans = []
for i in dist:
    c, a, b = i
    if fp(parent, a) != fp(parent, b):
        up(parent, a, b)
        ans.append(c)

ans.sort()
ans.pop(-1)
print(sum(ans))