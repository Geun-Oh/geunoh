def solution(triangle):
    answer = 0
    graph = [triangle[0]]
    for i in range(len(triangle) - 1):
        t = [triangle[i + 1][0] + graph[-1][0]]
        for k in range(len(triangle[i]) - 1):
            t.append(max(graph[-1][k], graph[-1][k + 1]) + triangle[i + 1][k + 1])
        t.append(triangle[i + 1][-1] + graph[-1][-1])
        graph.append(t)
    return max(graph[-1])