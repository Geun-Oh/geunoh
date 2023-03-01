n = int(input())

arr = [[]]
for i in range(n):
    arr.append(list(map(int, input().split())))

dp = [0] * (n + 2)
for i in range(n, 0, -1):
    days, charge = arr[i]
    if days + i - 1 > n:
        dp[i] = 0
    else:
        dp[i] = max(dp[(days + i):]) + charge

print(max(dp))