def solution(n, times):
    left = 0
    answer = 0
    right = n * max(times)
    mid = (left + right) // 2
    
    while left <= right:
        mid = (left + right) // 2
        can = 0
        for i in times:
            can += mid // i
        if can >= n:
            right = mid - 1
        else:
            left = mid + 1
            answer = left
    return answer