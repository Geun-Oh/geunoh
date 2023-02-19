n, m = list(map(int, input().split()))

arr = []
for i in range(n):
    arr.append(list(map(int, input())))

target = []
for i in range(n):
    target.append(list(map(int, input())))

def change(y, x):
    global arr
    for i in range(y, y + 3):
        for j in range(x, x + 3):
            if arr[i][j] == 1:
                arr[i][j] = 0
            else:
                arr[i][j] = 1

cnt = 0

for i in range(n - 2):
    for j in range(m - 2):
        if arr[i][j] != target[i][j]:
            change(i, j)
            cnt += 1

for i in range(n):
    for j in range(m):
        if arr[i][j] != target[i][j]:
            cnt = -1

print(cnt)