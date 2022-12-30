import sys

n = int(input())
arr = list(map(int, sys.stdin.readline().split()))

l = 0
r = n - 1
s = 9876543210
ans = [0, n - 1]

while l < r:
    nows = arr[l] + arr[r]
    if abs(nows) < abs(s):
        s = nows
        ans[0] = l
        ans[1] = r

    if nows < 0:
        l += 1
    elif nows > 0:
        r -= 1
    else:
        break

print(arr[ans[0]], arr[ans[1]])