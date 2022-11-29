from collections import deque

n, k = list(map(int, input().split()))

def bfs(n, k):
    arr = [0] * 100001
    queue = deque()
    arr[n - 1] = 0
    if n == k:
        return 0
    queue.append((n + 1, 0))
    queue.append((n - 1, 0))
    queue.append((n * 2, 0))
    while queue:
        m, cnt = queue.popleft()
        # 숫자가 너무 커져서 생기는 메모리 초과를 방지해줄 필요가 있다.
        if m > 100000 or m < 0:
            continue
        cnt += 1
        if m == k:
            return cnt
        if arr[m - 1] != 0:
            continue
        arr[m - 1] = cnt
        queue.append((m + 1, cnt))
        queue.append((m - 1, cnt))
        queue.append((m * 2, cnt))
    
print(bfs(n, k))