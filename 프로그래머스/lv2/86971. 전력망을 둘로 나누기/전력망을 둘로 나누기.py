from collections import deque

def get(n, arr, remove):
    know = [0] * (n + 1)
    know[remove[0]] = 1
    know[remove[1]] = 2
    
    queue = deque(arr)
    
    while queue:
        x, y = queue.popleft()
        if know[x] != 0:
            know[y] = know[x]
        elif know[y] != 0:
            know[x] = know[y]
        else:
            queue.append((x, y))
    a = 0
    b = 0
    for i in range(1, n + 1):
        if know[i] == 1:
            a += 1
        else: b += 1
    return abs(a - b)
        

def solution(n, wires):
    ans = []
    for i in wires:
        *newarr, = wires
        newarr.remove(i)
        ans.append(get(n, newarr, i))
    return min(ans)