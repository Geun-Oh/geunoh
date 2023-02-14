def solution(brown, yellow):
    x = brown + yellow
    arr = []
    a = 1
    while True:
        if x % a != 0:
            a += 1
            continue
        b = x // a
        if b < a:
            break
        arr.append([b, a])
        a += 1
        
    for i in arr:
        if (i[0] + i[1]) * 2 - 4 == brown:
            answer = i
    return answer