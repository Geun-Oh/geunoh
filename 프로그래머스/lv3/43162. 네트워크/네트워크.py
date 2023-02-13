from collections import deque

def bfs(n, arr):
    ans = 0
    queue = deque()
    visited = [False] * n
    for i in range(n):
        if visited[i] == False:
            if arr[i] == []:
                visited[i] = True
                ans += 1
                continue
            visited[i] = True
            ans += 1
            for j in arr[i]:
                queue.append(j)
            while queue:
                x = queue.popleft()
                if visited[x] == True:
                    continue
                visited[x] = True
                for k in arr[x]:
                    queue.append(k)
    return ans

def solution(n, computers):
    arr = [[] for i in range(n)]
    answer = 0
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            elif computers[i][j] == 1:
                if j not in arr[i]:
                    arr[i].append(j)
                if i not in arr[j]:
                    arr[j].append(i)      
                    
    print(arr)
    print(bfs(n, arr))
    
    return bfs(n, arr)