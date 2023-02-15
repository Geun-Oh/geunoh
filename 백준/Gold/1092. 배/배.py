import sys
input = sys.stdin.readline

n = int(input())
crane = list(map(int, input().split()))
m = int(input())
box = list(map(int, input().split()))

crane.sort(reverse = True)
box.sort(reverse = True)

time = 0

def pop(i, box):
    for j in box:
        if i >= j:
            return j
    return False

def sol():
    global time
    if crane[0] < box[0]:
        time = -1
        return
    while len(box) > 0:
        for i in crane:
            if box == []: 
                time += 1
                return
            t = pop(i, box)
            if t != False:
                box.remove(t)
        time += 1

sol()
print(time)