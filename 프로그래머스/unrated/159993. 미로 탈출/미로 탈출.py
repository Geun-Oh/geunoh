from collections import deque

def solution(maps):
    answer = 0
    m = len(maps)
    n = len(maps[0])
    graph = [list(i) for i in maps]
    ngraph = [list(i) for i in maps]
    s = [0, 0]
    l = [0, 0]
    e = [0, 0]
    for y in range(m):
        for x in range(n):
            if graph[y][x] == "S":
                s = [y, x]
            if graph[y][x] == "L":
                l = [y, x]
            if graph[y][x] == "E":
                e = [y, x]
    L = -1
    queue = deque()
    a, b = s
    queue.append((a + 1, b, 1))
    queue.append((a - 1, b, 1))
    queue.append((a, b + 1, 1))
    queue.append((a, b - 1, 1))
    while queue:
        ly, lx, move = queue.popleft()
        if ly <= -1 or ly >= m or lx <= -1 or lx >= n:
            continue
        if graph[ly][lx] == "X":
            continue
        if graph[ly][lx] == "L":
            if L == -1:
                L = move
            if L > move:
                L = move
            break
        graph[ly][lx] = "X"
        queue.append((ly + 1, lx, move + 1))
        queue.append((ly - 1, lx, move + 1))
        queue.append((ly, lx + 1, move + 1))
        queue.append((ly, lx - 1, move + 1))
    if L == -1:
        return -1
    print(graph, ngraph)
    nqueue = deque()
    E = -1
    c, d = l
    nqueue.append((c + 1, d, 1))
    nqueue.append((c - 1, d, 1))
    nqueue.append((c, d + 1, 1))
    nqueue.append((c, d - 1, 1))
    while nqueue:
        ly, lx, move = nqueue.popleft()
        if ly <= -1 or ly >= m or lx <= -1 or lx >= n:
            continue
        if ngraph[ly][lx] == "X":
            continue
        if ngraph[ly][lx] == "E":
            if E == -1:
                E = move
            if E > move:
                E = move
            break
        ngraph[ly][lx] = "X"
        nqueue.append((ly + 1, lx, move + 1))
        nqueue.append((ly - 1, lx, move + 1))
        nqueue.append((ly, lx + 1, move + 1))
        nqueue.append((ly, lx - 1, move + 1))
    if E == -1:
        return -1
    
    return L + E