import sys

n = int(input())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()

l = 0
r = n - 1
s = 9876543210
ans = [0, n - 1]

while l < r:
    nows = arr[l] + arr[r]
    if abs(nows) < abs(s):
        s = nows
        ans[0] = l
        ans[1] = r

    if nows < 0:
        l += 1
    elif nows > 0:
        r -= 1
    else:
        break

print(arr[ans[0]], arr[ans[1]])

# import sys

# N=int(input())
# L=list(map(int,sys.stdin.readline().split()))
# L.sort()

# left = 0
# right = N-1
# min_sum = 9876543210
# ans=[0,N-1]

# while(left<right):
#     now_sum = L[left]+L[right]
#     # print(left,right,now_sum)
#     if abs(now_sum)<abs(min_sum):
#         min_sum = now_sum
#         ans[0]=left
#         ans[1]=right

#     if now_sum<0:
#         left+=1
#     elif now_sum>0:
#         right-=1
#     else:
#         break

# print(L[ans[0]],L[ans[1]])