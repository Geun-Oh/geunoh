import sys

n, m = map(int, input().split())
arr = list(map(int, input().split()))
s = arr[0]
ans = n + 1
l = 0
r = 0

while True:
    if r >= n:
        break
    if l > r:
        break
    length = r - l + 1
    if s >= m:
        if ans > length:
            ans = length
        elif ans <= length:
            s -= arr[l]
            l += 1
    if s < m:
        r += 1
        if r >= n:
            break
        s += arr[r]

if ans == n + 1:
    print(0)
else:
    print(ans)