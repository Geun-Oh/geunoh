import sys
input = sys.stdin.readline

case = int(input())

def fp(parent, x):
    if parent[x] != x:
        parent[x] = fp(parent, parent[x])
    return parent[x]

def up(parent, num, a, b):
    a = fp(parent, a)
    b = fp(parent, b)
    if a < b:
        parent[b] = a
        num[a] += num[b]
    elif a > b:
        parent[a] = b
        num[b] += num[a]
    else:
        return

def sol():
    parent = {}
    num = {}
    n = int(input())
    for i in range(n):
        a, b = input().split()
        if a not in parent:
            parent[a] = a
            num[a] = 1
        if b not in parent:
            parent[b] = b
            num[b] = 1
        up(parent, num, a, b)
        print(num[fp(parent, a)])

for i in range(case):
    sol()