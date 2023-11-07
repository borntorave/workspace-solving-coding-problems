# https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

nums = [2,2,3,5,2]
val = 2

def removeElement(nums, val):
    temp = nums[:]
    for i in range(0, len(nums)):
        if temp[i] == val:
            nums.remove(val)
    k = len(nums)
    # print(nums)
    return k

# removeElement(nums, val)
print(removeElement(nums, val))
