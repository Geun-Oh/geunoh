import sys
input = sys.stdin.readline

n = int(input())

arr = []
for i in range(n):
    arr.append(list(map, int(input().split()))

ans = 0

def solve(start, end):
    if start == end:
        ans += 1
        return
    standard = arr[start[0]][start[1]]
    for i in range(start[0], end[0] + 1):
        for j in range(start[1], end[1] + 1):
            if arr[i][j] != standard:
                solve(start, [((start[0] - 1) + end[0]) // 2, ((start[1] - 1) + end[1]) // 2])
                solve([start[0], ((start[0] - 1) + end[0]) // 2 + 1], [((start[0] - 1) + end[0]) // 2, end[1]])
                solve([start[0], ((start[0] - 1) + end[0]) // 2], [])
                solve(start, [((start[0] - 1) + end[0]) // 2, ((start[1] - 1) + end[1]) // 2])
