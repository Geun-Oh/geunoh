from itertools import permutations

def sol(k, arr):
    cnt = 0
    for s in arr:
        if k < s[0]:
            return cnt
        k -= s[1]
        cnt += 1
    return cnt

def solution(k, dungeons):
    answer = -1
    for i in range(len(dungeons)):
        arr = permutations(dungeons, i + 1)
        for n in arr:
            a = sol(k, n)
            if a > answer:
                answer = a
    return answer