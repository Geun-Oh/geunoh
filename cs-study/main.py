from collections import deque

des = list(map(int, input().split()))
m = [['0' for i in range(des[1] + 2)]]
count = 0
steps = [[-1, 0], [0, 1], [1, 0], [0, -1]]
for _ in range(des[0]):
    t = list(input())
    t.insert(0, '0')
    t.append('0')
    m.append(t)
m.append(['0' for i in range(des[1] + 2)])
visited = [[False for _ in range(des[1] + 2)] for _ in range(des[0] + 2)]

def bfs(map, now, visited):
    queue = deque()
    queue.append(now)
    newmap = [[0 for _ in range(des[1] + 2)] for _ in range(des[0] + 2)]
    newmap[1][1] += 1
    while queue:
        global count
        count += 1
        visited[now[0]][now[1]] = True
        n = queue.popleft()
        if n == des:
            print(count, newmap[des[0]][des[1]])
            return
        if visited[n[0] + steps[0][0]][n[1] + steps[0][1]] == False and m[n[0] + steps[0][0]][n[1] + steps[0][1]] == '1':
            queue.append([n[0] + steps[0][0], n[1] + steps[0][1]])
            newmap[n[0] + steps[0][0]][n[1] + steps[0][1]] = newmap[n[0]][n[1]]
        if visited[n[0] + steps[1][0]][n[1] + steps[1][1]] == False and m[n[0] + steps[1][0]][n[1] + steps[1][1]] == '1':
            queue.append([n[0] + steps[1][0], n[1] + steps[1][1]])
            newmap[n[0] + steps[1][0]][n[1] + steps[1][1]] = newmap[n[0]][n[1]]
        if visited[n[0] + steps[2][0]][n[1] + steps[2][1]] == False and m[n[0] + steps[2][0]][n[1] + steps[2][1]] == '1':
            queue.append([n[0] + steps[2][0], n[1] + steps[2][1]])
            newmap[n[0] + steps[2][0]][n[1] + steps[2][1]] = newmap[n[0]][n[1]]
        if visited[n[0] + steps[3][0]][n[1] + steps[3][1]] == False and m[n[0] + steps[3][0]][n[1] + steps[3][1]] == '1':
            queue.append([n[0] + steps[3][0], n[1] + steps[3][1]])
            newmap[n[0] + steps[3][0]][n[1] + steps[3][1]] = newmap[n[0]][n[1]]
        
bfs(m, [1, 1], visited)