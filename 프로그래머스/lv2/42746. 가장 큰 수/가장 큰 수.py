def solution(numbers):
    numbers.sort(reverse = True, key = lambda x: str(x) * 3)
    if set(numbers) == {0}:
        return "0"
    answer = ''.join(list(map(str, numbers)))
    return answer