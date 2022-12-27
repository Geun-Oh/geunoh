from collections import deque

n = int(input())
nodes = list(map(int, input().split()))

tree = [[] for i in range(n)]

def bfs():
    if n == 1:
        print(nodes[0])
        return
    queue = deque()
    center = nodes[(len(nodes) + 1) // 2 - 1]
    tree[0].append(center)
    queue.append((nodes[:(len(nodes) + 1) // 2 - 1], nodes[(len(nodes) + 1) // 2:]))
    depth = 1
    while queue:
        items = queue.popleft()
        if len(items[0]) == 1:
            for item in items:
                tree[depth].append(item[0])
                print(depth, tree)
            continue
        for item in items:
            cen = item[(len(item) + 1) // 2 - 1]
            tree[depth].append(cen)
            queue.append((item[:(len(item) + 1) // 2 - 1], item[(len(item) + 1) // 2:]))
            print(depth, tree)
        depth += 1

    for i in tree:
        print(*i)

bfs()