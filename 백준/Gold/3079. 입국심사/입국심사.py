n, m = map(int, input().split())

arr = []
for i in range(n):
    arr.append(int(input()))
arr.sort()

left = 1
right = arr[-1] * m
ans = left
while left <= right:
    mid = (left + right) // 2

    howmany = 0
    for i in arr:
        howmany += mid // i

    if howmany >= m:
        right = mid - 1
    else:
        left = mid + 1
        ans = left

print(ans)