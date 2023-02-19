
### 내가 짠 코드 => 시간 초과
## 좀 더 그리디의 관점에 부합하는 로직을 생각했어야한다...
from collections import deque
import sys

input = sys.stdin.readline

n, m = list(map(int, input().split()))
target = list(map(int, input().rstrip()))

def step2(arr):
    global m
    temp = []
    queue = deque(arr)
    i = 0
    x = 0
    y = 0
    while queue:
        if m == 0:
            break
        if i == 0:
            x = queue.popleft()
        y = queue.popleft()
        if x < y:
            temp.append(i)
            m -= 1
        x = y
        i += 1

    if len(temp) == 0:
        return 0
    temp.sort(reverse = True)
    for i in temp:
        arr.pop(i)
    return arr

# def step2(arr):
#     global m
#     temp = []
#     for i in range(len(arr) - 1):
#         if m == 0:
#             break
#         if arr[i] < arr[i + 1]:
#             temp.append(i)
#             m -= 1
#     temp.sort(reverse = True)
#     for i in temp:
#         arr.pop(i)
#     return arr

while m > 0:
    t = step2(target)
    if t == 0:
        target = target[:(len(target) - m)]
        break
    else: 
        target = t

print("".join(map(str, target)))

### 답 코드
# import sys
# input = sys.stdin.readline

# n, k = map(int, input().split())
# numbers = input().rstrip()
# stack = []
# for number in numbers:
#     while stack and stack[-1] < number and k > 0:
#         stack.pop()
#         k -= 1
#     stack.append(number)
# if k > 0:
#     print(''.join(stack[:-k]))
# else:
#     print(''.join(stack))