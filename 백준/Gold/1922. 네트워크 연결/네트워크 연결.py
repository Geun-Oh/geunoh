n = int(input())
m = int(input())

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
dist = []

for i in range(1, n + 1):
    parent[i] = i


for i in range(m):
    a, b, c = list(map(int, input().split()))
    dist.append((c, a, b))

dist.sort()
ans = 0

for i in dist:
    c, a, b = i
    if fp(parent, a) != fp(parent, b):
        up(parent, a, b)
        ans += c
    
print(ans)
