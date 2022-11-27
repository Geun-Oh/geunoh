from collections import Counter

n = int(input())

arr = []

for i in range(n):
    arr.append(int(input()))

c = Counter(arr).most_common()
most = []
for i in c:
    if i[1] == c[0][1]:
        most.append(i)
choi = 0
if len(most) > 1:
    most.sort()
    choi = most[1][0]
else:
    choi = most[0][0]
arr.sort()

print(round(sum(arr) / len(arr)))
print(arr[int((len(arr) + 1) / 2 - 1)])
print(choi)
print(arr[-1] - arr[0])
