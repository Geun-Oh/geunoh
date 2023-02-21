from itertools import product

def solution(word):
    answer = 0
    arr = []
    for i in range(1, 6):
        t = list(product(['A', 'E', 'I', 'O', 'U'], repeat = i))
        for i in t:
            arr.append(i)
    arr.sort()
    return arr.index(tuple(word)) + 1