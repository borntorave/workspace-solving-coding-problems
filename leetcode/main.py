def fizzBuzz(self, n: int) -> List[str]:
    result = []
    mapping = {3: "Fizz", 5: "Buzz"}
    for i in range(1, n+1):
        output = ""
        for key in mapping:
            if i % key == 0:
                output += mapping[key]
        if not output:
            output = str(i)
        result.append(output)
    return result
