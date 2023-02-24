from collections import deque

def solution(maps):
    answer = []
    m = len(maps)
    n = len(maps[0])
    graph = [list(i) for i in maps]
    for i in range(m):
        for j in range(n):
            queue = deque()
            if graph[i][j] == 'X':
                continue
            t = int(graph[i][j])
            graph[i][j] = 'X'
            queue.append((i + 1, j))
            queue.append((i - 1, j))
            queue.append((i, j + 1))
            queue.append((i, j - 1))
            while queue:
                y, x = queue.popleft()
                if y <= -1 or y >= m or x <= -1 or x >= n:
                    continue
                if graph[y][x] == 'X':
                    continue
                t += int(graph[y][x])
                graph[y][x] = 'X'
                queue.append((y + 1, x))
                queue.append((y - 1, x))
                queue.append((y, x + 1))
                queue.append((y, x - 1))
            answer.append(t)
    if len(answer) == 0:
        return [-1]
    answer.sort()
    return answer