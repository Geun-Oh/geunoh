import math

n = int(input())

arr = [2, 3]

def prime(x):
    for i in range(2, int(math.sqrt(x + 1)) + 1):
        if x % i == 0:
            return False
    arr.append(x)
    return

for i in range(4, n + 1):
    prime(i)

l = 0
r = 0
s = arr[0]
ans = 0
while True:
    if r >= len(arr):
        break
    if l > r:
        break
    if s > n:
        s -= arr[l]
        l += 1
    if s == n:
        ans += 1
        r += 1
        if r >= len(arr):
            break
        s += arr[r]
    if s < n:
        r += 1
        if r >= len(arr):
            break
        s += arr[r]

print(ans)