n, m = map(int, input().split())

arr = []
for i in range(n):
    t = int(input())
    arr.append(t)
arr.sort()

def freecount(mid):
    cnt = 1
    ctx = arr[0]
    for i in range(1, n):
        if ctx + mid <= arr[i]:
            ctx = arr[i]
            cnt += 1
    return cnt

def sol():
    left = 1
    right = arr[-1] - arr[0]
    while left <= right:
        mid = (left + right) // 2
        if freecount(mid) < m:
            right = mid - 1
        else:
            global answer
            left = mid + 1
            answer = mid

sol()
print(answer)