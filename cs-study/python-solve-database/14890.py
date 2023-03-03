# 14890 경사로

# 모든 줄에 대하여 함수 sol을 실행함
# 줄이 있으면
# index 0부터 한 칸씩 이동을 시작해서
# 같은 층인 경우 length를 1 늘림
# 만약 층이 바뀐 경우
# 2층 이상 변한 경우 return False
# +1층인 경우:
#     현재 length >= L이라면
#     length를 초기화하고 패스
# -1층인 경우:
#     length를 초기화하고 해당 층이 L 이상 이어지는 경우 패스

# 그렇지 않은 경우 모두 return False

# 경사로를 설치하고 나면 length를 0으로 초기화

n, L = map(int, input().split())

graph = []

for i in range(n):
    graph.append(list(map(int, input().split())))

def sol(arr):
    length = 0
    should = -1
    for i in range(n - 1):
        if arr[i] == arr[i + 1]:
            length += 1
            if should > 0:
                length -= 1
                should -= 1
            if should == 0:
                length = 0
                should = -1
            continue
        else:
            if abs(arr[i] - arr[i + 1]) >= 2:
                return False
            elif arr[i] == arr[i + 1] - 1:
                if should > 0:
                    return False
                if length >= L - 1:
                    length = 0
                    continue
                else:
                    return False
            elif arr[i] == arr[i + 1] + 1:
                if should > 1:
                    return False
                length = 0
                should = L
    if should > 1:
        return False
    return True

# print(sol([3, 2, 2, 1, 2, 3]))   
ans = 0
for i in range(n):
    if sol(graph[i]) == True:
        ans += 1
    newarr = []
    for j in range(n):
        newarr.append(graph[j][i])
    if sol(newarr) == True:
        ans += 1

print(ans)