# https://leetcode.com/problems/shuffle-the-array/

# nums = []
# n = int
# return = int []

nums = [2, 5, 1, 3, 4, 7]
n = 3
result = []


def shuffle(nums, n):
    for i in range(0, n):
        result.append(nums[i])
        if i != n:
            result.append(nums[n + i])


shuffle(nums, n)
print(result)
