n, m = list(map(int, input().split()))
nums = list(map(int, input().split()))

ans = []
visited = [False] * n

def backtraking(dep, n, m, nums):
    if dep == m + 1:
        for i in range(m):
            if i == m - 1:
                print(ans[i])
            else:
                print(ans[i], end=" ")
        return
    for i in range(n):
        if dep >= 2 and ans[-1] > nums[i]:
            continue
        ans.append(nums[i])
        visited[i] = True
        backtraking(dep + 1, n, m, nums)
        ans.pop()
        visited[i] = False
    
backtraking(1, n, m, sorted(nums))