# https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

def findNumbers(nums) -> int:
    new_nums = []
    flag = 0

    for i in range(0, len(nums)):
        new_nums.append(str(nums[i]))

    for i in range(0, len(new_nums)):
        if len(new_nums[i]) % 2 == 0:
            flag += 1

    return flag


nums = [555, 901, 482, 1771]

print(findNumbers(nums))
