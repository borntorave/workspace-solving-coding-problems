# https://leetcode.com/problems/build-array-from-permutation/

def buildArray(nums):
    index = len(nums)
    result = []
    for i in range(0, index):
        # result += nums[nums[i]]
        result.append(nums[nums[i]])
    return result

nums = [0,2,1,5,3,4]
print (buildArray(nums))