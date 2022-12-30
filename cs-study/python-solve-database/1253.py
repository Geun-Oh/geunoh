n = int(input())
arr = list(map(int, input().split()))
arr.sort()

ans = 0

def good(x, i):
    l = 0
    r = n - 1
    while l < r:
        s = arr[l] + arr[r]
        if l == i:
            l += 1
            continue
        if r == i:
            r -= 1
            continue
        if s == x:
            global ans
            return True
        if s > x:
            r -= 1
        elif s < x:
            l += 1
        else:
            break
    return False

for i in range(n):
    if good(arr[i], i) == True:
        ans += 1

print(ans)