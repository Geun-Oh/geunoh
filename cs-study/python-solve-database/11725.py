from collections import deque
n = int(input())

tree = [[] for i in range(n + 1)]
for _ in range(n - 1):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)

queue = deque()
for i in tree[1]:
    queue.append((1, i))

while queue:
    parent, child = queue.popleft()
    if tree[child] == []:
        continue
    tree[child].remove(parent)
    for j in tree[child]:
        queue.append((child, j))

ans = [[] for i in range(n + 1)]
for i in range(1, n + 1):
    for j in tree[i]:
        ans[j].append(i)

for i in range(2, n + 1):
    print(ans[i][0])