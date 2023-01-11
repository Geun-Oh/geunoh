n, m = map(int, input().split())

arr = []
for i in range(n):
    arr.append(int(input()))
arr.sort()

left = 0
right = 1
ans = 2000000001

while left <= right:
    if n == 1:
        ans = 0
        break
    if right >= n:
        break
    diff = arr[right] - arr[left]
    if diff == m:
        ans = diff
        break
    elif diff < m:
        right += 1
        continue
    else:
        if diff < ans:
            ans = diff
        left += 1
        continue

print(ans)