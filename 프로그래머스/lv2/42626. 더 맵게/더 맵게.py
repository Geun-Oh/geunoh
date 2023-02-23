import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    while scoville:
        x = heapq.heappop(scoville)
        if x < K:
            if len(scoville) == 0:
                return -1
            y = heapq.heappop(scoville)
            heapq.heappush(scoville, x + y * 2)
            answer += 1
        else:
            continue
    return answer