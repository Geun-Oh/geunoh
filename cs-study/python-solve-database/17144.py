import copy

height, width, sec = list(map(int, input().split()))

graph = []
ac = []
for i in range(height):
    t = list(map(int, input().split()))
    if t[0] == -1:
        ac.append(i)
    graph.append(t)

def dustSpread(i, j, li, lj, new):
    global graph
    if i <= -1 or i >= height or j <= -1 or j >= width:
        return False
    if graph[i][j] == -1:
        return False
    new[i][j] += graph[li][lj] // 5
    new[li][lj] -= graph[li][lj] // 5

def rotate(new):
    for i in range(ac[0] - 1, -1, -1):
        new[i][0] = new[i - 1][0]
    for i in range(width - 1):
        new[0][i] = new[0][i + 1]
    for i in range(ac[0]):
        new[i][width - 1] = new[i + 1][width - 1]
    for i in range(width - 1, 1, -1):
        new[ac[0]][i] = new[ac[0]][i - 1]
    new[ac[0]][1] = 0
    for i in range(ac[1] + 1, height - 1):
        new[i][0] = new[i + 1][0]
    for i in range(width - 1):
        new[height - 1][i] = new[height - 1][i + 1]
    for i in range(height - 1, ac[1], -1):
        new[i][width - 1] = new[i - 1][width - 1]
    for i in range(width - 1, 1, -1):
        new[ac[1]][i] = new[ac[1]][i - 1]
    new[ac[1]][1] = 0


def doInSec():
    global graph
    new = copy.deepcopy(graph)
    for i in range(height):
        for j in range(width):
            if graph[i][j] != 0 and graph[i][j] != -1:
                dustSpread(i + 1, j, i, j, new)
                dustSpread(i - 1, j, i, j, new)
                dustSpread(i, j - 1, i, j, new)
                dustSpread(i, j + 1, i, j, new)
    rotate(new)
    graph = new

for _ in range(sec):
    doInSec()

s = 0
for i in range(height):
    s += sum(graph[i])

print(s + 2)