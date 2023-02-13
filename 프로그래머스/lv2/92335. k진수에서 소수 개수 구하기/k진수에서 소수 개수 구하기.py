import math

def solution(n, k):
    number = n
    arr = []
    while number > 0:
        arr.append(number % k)
        number = number // k
    arr.reverse()
    changed = "".join(map(str, arr))
    newarr = changed.split("0")
    count = 0
    for i in newarr:
        if i == "":
            continue
        if isPrime(int(i)) == True:
            count += 1
    return count

def isPrime(x):
    if x == 1:
        return False
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True