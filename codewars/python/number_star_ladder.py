def pattern(n):
    if n <= 0:
        return ""
    if n > 0:
        result = []
        for i in range(1, n + 1):
            if i == 1:
                result.append("1")
            else:
                result.append("1" + "*" * (i - 1) + str(i))
    return "\n".join(result)


print(pattern(4))
