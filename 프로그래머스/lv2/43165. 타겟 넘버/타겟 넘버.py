from collections import deque

def bfs(num, tar):
    print(num, tar)
    ans = 0
    queue = deque()
    queue.append((-num[0], 1))
    queue.append((num[0], 1))
    while queue:
        x, i = queue.popleft()
        if i == len(num):
            if x == tar:
                ans += 1
            continue
        queue.append((x + num[i], i + 1)) 
        queue.append((x - num[i], i + 1))
    return ans

def solution(numbers, target):
    return bfs(numbers, target)