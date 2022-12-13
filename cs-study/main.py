from collections import deque

n, m = map(int, input().split())
INF = int(1e9)

distance = [INF] * 100002
distance[n] = 0
count = 1
queue = deque()
queue.append((n + 1, 1))
queue.append((n - 1, 1))
queue.append((n * 2, 1))

while queue:
    x, dep = queue.popleft()
    if x < 0 or x > 100000 or dep > distance[m]:
        continue
    if x == m:
        if distance[x] == INF:
            distance[x] = dep
        elif distance[x] > dep:
            distance[x] = dep
        elif distance[x] == dep:
            count += 1
            continue
        elif distance[x] < dep:
            continue
        continue
    if distance[x] == INF:
        distance[x] = dep
    elif distance[x] > dep:
        distance[x] = dep
    elif distance[x] < dep:
        continue
    queue.append((x + 1, dep + 1))
    queue.append((x - 1, dep + 1))
    queue.append((x * 2, dep + 1))

print(distance[m])
print(count)




## 내려가기 문제 풀다가 말았다. for 문을 돌리면서 메모리를 할당, 해제 하는 과정을 반복하자.

# n = int(input())

# arr = []
# for i in range(n):
#     t = list(map(int, input().split()))
#     arr.append(t)

# dp = [[0, 0, 0] for i in range(n)]
# dp[0] = arr[0]

# def solve():
#     if n == 1:
#         return [max(arr[0]), min(arr[0])]
    
#     ans = []
#     for i in range(1, n):
#         dp[i][0] = max(dp[i - 1][0], dp[i - 1][1]) + arr[i][0]
#         dp[i][1] = max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + arr[i][1]
#         dp[i][2] = max(dp[i - 1][1], dp[i - 1][2]) + arr[i][2]

#     ans.append(max(dp[n - 1]))

#     for i in range(1, n):
#         dp[i][0] = min(dp[i - 1][0], dp[i - 1][1]) + arr[i][0]
#         dp[i][1] = min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + arr[i][1]
#         dp[i][2] = min(dp[i - 1][1], dp[i - 1][2]) + arr[i][2]

#     ans.append(min(dp[n - 1]))
#     return ans

# print(*solve())