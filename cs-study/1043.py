from collections import deque

n, m = list(map(int, input().split())) # 사람 수, 파티 수
known = list(map(int, input().split()))

def solve(n, m, known):
    if len(known) == 1:
        print(m)
        return
    known.pop(0)
    parties = []
    queue = deque()
    for i in known:
        queue.append(i)
    for i in range(m):
        t = list(map(int, input().split()))
        k = t.pop(0)
        parties.append((k, t))
    count = [1] * m
    while queue:
        know = queue.popleft()
        for party in parties: # 알고 있는 사람들이 known
            if know in party[1]:
                i = parties.index(party)
                knownparty = parties.pop(i)
                for knownpeople in knownparty[1]:
                    queue.append(knownpeople)
    print(len(parties))
            
solve(n, m, known)