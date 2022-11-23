import sys

case = int(sys.stdin.readline())

for i in range(case):
    score = []
    number = int(sys.stdin.readline())
    count = 1
    for j in range(number):
        indivScore = list(map(int, sys.stdin.readline().rstrip().split(' ')))
        score.append(indivScore)
    score.sort()
    for k in range(number):
        if (score[0][1] > score[k][1]):
            count += 1
            score[0][1] = score[k][1]
    print(count)