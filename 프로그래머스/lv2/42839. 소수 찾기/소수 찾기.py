import math
from collections import deque

def isPrime(n):
    if n == 1 or n == 0:
        return False
    for i in range(2, int(math.sqrt(n) + 1)):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    arr = list(numbers)
    ans = []
    queue = deque()
    for i in arr:
        narr = [*arr]
        narr.remove(i)
        queue.append((i, narr))
    print(queue)
    while queue:
        x, xarr = queue.popleft()
        if isPrime(int(x)) == True:
            ans.append(int(x))
        if len(xarr) == 0:
            continue
        for k in xarr:
            nxarr = [*xarr]
            nxarr.remove(k)
            queue.append((x + k, nxarr))
    answer = list(set(ans))
    return len(answer)