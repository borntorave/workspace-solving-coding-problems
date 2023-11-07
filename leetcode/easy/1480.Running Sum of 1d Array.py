# https://leetcode.com/problems/running-sum-of-1d-array/description/

from typing import List

nums = [5,8,2,7]

def runningSum(nums: List[int]) -> List[int]:
    sum = 0
    res = []
    for i in range(0, len(nums)):
        sum = sum + nums[i]
        res.append(sum)

    return res;

print(runningSum(nums))
