import sys

input = sys.stdin.readline
n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))
sumarr = [0]
sumarr.append(arr[0])

# 왜 여기서 range(max(arr) + 1)로 하면 안되는걸까??
for i in range(n + 1):
    if i == 0 or i == 1:
        continue
    else:
        s = sumarr[-1] + arr[i - 1]
        sumarr.append(s)

for i in range(m):
    a, b = list(map(int, input().split()))
    print(sumarr[b] - sumarr[a - 1])

# for i in range(m):
#     a, b = list(map(int, sys.stdin.readline().split()))
#     sum = 0
#     for j in range(a - 1, b):
#         sum += arr[j]
#     print(sum)