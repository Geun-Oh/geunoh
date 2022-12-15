from collections import deque

n = int(input())

tree = [[] for i in range(n + 1)]
for i in range(n - 1):
    a, b, c = map(int, input().split())
    tree[a].append((b, c))

queue = deque()
answer = [0] * len(tree[1])
print(answer)
for i in tree[1]:
    a, b = i
    index = tree[1].index(i)
    queue.append((a, b, b, index))

while queue:
    node, weight, ans, index = queue.popleft()
    if tree[node] == []:
        print(node, ans, index)
        answer[index] = max(answer[index], ans)
        continue
    for i in tree[node]:
        a, b = i
        queue.append((a, b, ans + b, index))

print(ans)