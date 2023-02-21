# 중복을 허용하고 순서가 없으니 조합을 쓴다.
from itertools import product

def solution(word):
    answer = 0
    # if len(word) < 5:
    #     for i in range(5 - len(word)):
    #         word += "A"
    
    arr = []
    for i in range(1, 6):
        t = list(product(['A', 'E', 'I', 'O', 'U'], repeat = i))
        for i in t:
            arr.append(i)
    arr.sort()
    return arr.index(tuple(word)) + 1