n = int(input())
m = int(input())
arr = list(map(int, input().split()))

arr.sort()
diff = []
for i in range(n - 1):
    diff.append((arr[i + 1] - arr[i], i))

diff.sort(reverse = True)

diff = diff[:(m - 1)]

ans = 0
now = 0
for i in diff:
    x, index = i
    ans += arr[index] - arr[now]
    now = index + 1

ans += arr[-1] - arr[now]

print(ans)