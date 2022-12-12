case = int(input())

for _ in range(case):
    n = int(input())
    arr = []
    for _ in range(2):
        t = list(map(int, input().split()))
        arr.append(t)
    
    if n == 1:
        print(max(arr[0][0], arr[1][0]))
        continue

    dp = [[0] * n for i in range(2)]
    dp[0][0] = arr[0][0]
    dp[1][0] = arr[1][0]
    dp[0][1] = dp[1][0] + arr[0][1]
    dp[1][1] = dp[0][0] + arr[1][1]

    if n == 2:
        print(max(dp[0][1], dp[1][1]))
        continue

    for i in range(2, n):
        dp[0][i] = max(dp[1][i - 1], dp[1][i - 2]) + arr[0][i]
        dp[1][i] = max(dp[0][i - 1], dp[0][i - 2]) + arr[1][i]
    
    print(max(dp[0][n - 1], dp[1][n - 1]))