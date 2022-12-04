import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))

graph = [[0] * (n + 1)]
for i in range(n):
    t = list(map(int, input().split()))
    t.insert(0, 0)
    graph.append(t)

new = [[0] * (n + 1) for i in range(n + 1)]
new[1][1] = graph[1][1]
for i in range(2, n + 1):
    new[i][1] = new[i - 1][1] + graph[i][1]
    new[1][i] = new[1][i - 1] + graph[1][i]

for i in range(2, n + 1):
    for j in range(2, n + 1):
        new[i][j] = new[i - 1][j] + new[i][j - 1] - new[i - 1][j - 1] + graph[i][j]

for i in range(m):
    x1, y1, x2, y2 = list(map(int, input().split()))
    answer = new[x2][y2] - new[x1][y2] - new[x2][y1] + new[x1][y1] 
    print(new[x2][y2] - new[x1 - 1][y2] - new[x2][y1 - 1] + new[x1 - 1][y1 - 1])