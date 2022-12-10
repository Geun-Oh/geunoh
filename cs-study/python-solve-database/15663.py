## 생각보다 쉽지 않다... 요점은 깊이가 같은 이전 항에서 마지막으로 추가된 수가 또 추가되지 않도록 하는 것!
## 그래서 깊이와 숫자를 같이 기록해두어야 한다...

n, m = list(map(int, input().split()))
nums = list(map(int, input().split()))
inums = []
ans = []
visited = [False] * n
last = 0

nums.sort()

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
        if visited[i] == False and last != (dep, nums[i]):
            ans.append(nums[i])
            visited[i] = True
            backtraking(dep + 1, n, m, nums)
            last = (dep, ans[-1])
            ans.pop()  
            visited[i] = False
    
backtraking(1, n, m, sorted(nums))