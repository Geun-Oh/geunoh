n, m = list(map(int, input().split()))
nums = list(map(int, input().split()))
inums = []
ans = []
last = 0

def backtraking(dep, n, m, nums):
    global last
    if dep == m + 1:
        for i in range(m):
            if i == m - 1:
                print(ans[i])
            else:
                print(ans[i], end=" ")
        return
    for i in range(n):
        if len(ans) >= 1 and ans[-1] > nums[i]:
            continue
        if (dep, nums[i]) == last:
            continue
        ans.append(nums[i])
        backtraking(dep + 1, n, m, nums)
        last = (dep, ans[-1])
        ans.pop()
    
backtraking(1, n, m, sorted(nums))