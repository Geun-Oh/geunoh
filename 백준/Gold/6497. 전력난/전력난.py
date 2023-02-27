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

def sol(n, m):
    parent = [0] * n
    dist = []
    MAX = 0

    for i in range(n):
        parent[i] = i

    for i in range(m):
        a, b, c = map(int, input().split())
        dist.append((c, a, b))
        MAX += c

    dist.sort()

    ans = 0
    for i in dist:
        c, a, b = i
        if fp(parent, a) != fp(parent, b):
            up(parent, a, b)
            ans += c
        
    print(MAX - ans)

while True:
    n, m = map(int, input().split())
    if n == 0 and m == 0:
        break
    sol(n, m)