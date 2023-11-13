def findMaxConsecutiveOnes(nums) -> int:
    search = 0
    count = 0

    for i in range(0, len(nums)):
        if nums[i] == 1:
            search +=1
            if search > count:
                count = search
        else:
            search = 0

    return count


nums = [1,1,0,1,1,1]
b = findMaxConsecutiveOnes(nums)

print(b)
