# https://leetcode.com/problems/plus-one/

# digits = [1,2,3,9]
digits = [9,9,9]



def plusOne(digits):

    if all(x == 9 for x in digits):
        return [1] + [0] * len(digits)

    for i in range(len(digits)):
        if i == len(digits)-1:
            if digits[i] == 9:
                digits[i-1] += 1
                digits[i] = 0
            else:
                digits[i] += 1
    return digits

print(plusOne(digits))