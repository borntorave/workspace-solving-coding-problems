# https://leetcode.com/problems/contains-duplicate/

nums = [1,2,3,4]

def containsDuplicate(nums) -> bool:
    
    # # sorting method
    # nums.sort()
    # for i in range(len(nums)-1):
    #     if nums[i] == nums[i+1]:
    #         return True

    # hashmap method
    hashM = {}
    for i in range(len(nums)-1):
        # check for existing value in hashmap
        if nums[i] in hashM and hashM[nums[i]] == hashM[nums[i+1]]:
            return True
        # else add elements with the value true
        hashM[nums[i]] = True

    return False


print(containsDuplicate(nums))
