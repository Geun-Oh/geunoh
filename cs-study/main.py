n, m = list(map(int, input().split()))

check = []

def dfs(arr):
    if len(arr) >= m:
        return
    for i in range(n):
        arr.append(i + 1)
        if arr in check:
            continue
        else:
            print(arr)
            check.append(arr)
            dfs(arr)

dfs([])

print(check)