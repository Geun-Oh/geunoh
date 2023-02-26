## 다시 풀어볼게
from collections import deque

n = 4
chopsticks = ['BC', 'DB', 'AA', 'DC']

dic = {}

ans = []
queue = deque()
queue.append((chopsticks, 0))
while queue:
    arr, cnt = queue.popleft()
    how = 0
    for i in arr:
        if len(set(i)) == 1:
            how += 1
    if how == 4:
        ans.append(cnt)
    t = ''.join(arr)
    if t in dic.keys():
        continue
    else:
        dic[t] = 0     
    for i in range(n - 1):
        if len(set(arr[i])) != 1:
            *a, = arr
            *b, = arr
            *c, = arr
            *d, = arr
            if a[i][0] != a[i + 1][0]:
                p = list(a[i])
                q = list(a[i + 1])
                p[0], q[0] = q[0], p[0]
                a[i] = ''.join(p)
                a[i + 1] = ''.join(q)
                queue.append((a, cnt + 1))
            if b[i][1] != b[i + 1][0]:
                p = list(b[i])
                q = list(b[i + 1])
                p[1], q[0] = q[0], p[1]
                b[i] = ''.join(p)
                b[i + 1] = ''.join(q)
                queue.append((b, cnt + 1))
            if c[i][0] != c[i + 1][1]:
                p = list(c[i])
                q = list(c[i + 1])
                p[0], q[1] = q[1], p[0]
                c[i] = ''.join(p)
                c[i + 1] = ''.join(q)
                queue.append((c, cnt + 1))
            if d[i][1] != d[i + 1][1]:
                p = list(d[i])
                q = list(d[i + 1])
                p[1], q[1] = q[1], p[1]
                d[i] = ''.join(p)
                d[i + 1] = ''.join(q)
                queue.append((d, cnt + 1))

print(min(ans))
# def g(arr):
#     *a, = arr
#     for i in range(0, 3):
#         if a[i][0] != a[i + 1][0]:
#             p = list(a[i])
#             q = list(a[i + 1])
#             p[0], q[0] = q[0], p[0]
#             a[i] = ''.join(p)
#             a[i + 1] = ''.join(q)
#             print(arr, a)

# g(chopsticks)