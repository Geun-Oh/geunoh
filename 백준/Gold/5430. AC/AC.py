from collections import deque

case = int(input())

def sol():
    func = list(input())
    n = int(input())
    arr = input()
    str_list = []
    if n > 0:
        arr = arr.replace('[', "").replace("]", "")
        str_list = list(map(str, arr.split(',')))
    queue = deque(str_list)
    left = True
    cnt = 0
    for i in func:
        if i == "R":
            cnt += 1
            if left == True:
                left = False
            else:
                left = True
        else:
            if len(queue) == 0:
                print("error")
                return
            else:
                if left == True:
                    queue.popleft()
                else:
                    queue.pop()
    
    arr = list(queue)
    # if arr == []:
    #     print("error")
    #     return
    if cnt % 2 != 0:
        arr.reverse()
    print("["+",".join(map(str, arr))+"]")
    return

for _ in range(case):
    sol()