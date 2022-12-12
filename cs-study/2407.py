import math

n, m = map(int, input().split())

ans = (math.factorial(n) // math.factorial(n - m)) // math.factorial(m)
print(ans)