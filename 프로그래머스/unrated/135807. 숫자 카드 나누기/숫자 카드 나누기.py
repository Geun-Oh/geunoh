import math

def solution(arrayA, arrayB):
    answer = 0
    a = arrayA[0]
    b = arrayB[0]
    for i in arrayA:
        a = math.gcd(a, i)
    for i in arrayB:
        b = math.gcd(b, i)
    
    for i in arrayA:
        if i % b == 0:
            b = 1
    for i in arrayB:
        if i % a == 0:
            a = 1
    if a == 1 and b == 1:
        return 0
    return max(a, b)
