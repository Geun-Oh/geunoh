import heapq
import sys
input = sys.stdin.readline

n = int(input())
arr = []
heap = []
for i in range(n):
    arr.append(list(map(int, input().split())))

arr.sort(key=lambda x: (x[0], x[1]))
heapq.heappush(heap, arr[0][1]) # 가장 먼저 있는 요소의 끝점을 지정
for i in range(1, n):
    if heap[0] > arr[i][0]:
        heapq.heappush(heap, arr[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, arr[i][1])

print(len(heap))