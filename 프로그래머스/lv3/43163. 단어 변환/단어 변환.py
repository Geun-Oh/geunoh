from collections import deque

def getDiff(a, b):
    cnt = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            cnt += 1
    if cnt == 1:
        return True
    return False
        
def solution(begin, target, words):
    if target not in words:
        return 0
    n = len(words) + 1
    newword = [begin] + words
    arr = [[] * n for i in range(n)]
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            if getDiff(newword[i], newword[j]) == True:
                if i not in arr[j]:
                    arr[j].append(i)
                if j not in arr[i]:
                    arr[i].append(j)
    
    visited = [False] * len(newword)
    visited[0] = True
    targetIndex = newword.index(target)
    
    queue = deque()
    for i in arr[0]:
        queue.append((i, 1))
        
    while queue:
        x, index = queue.popleft()
        print(newword[x])
        if newword[x] == target:
            return index
        if visited[x] == True:
            continue
        visited[x] = True
        for k in arr[x]:
            queue.append((k, index + 1))