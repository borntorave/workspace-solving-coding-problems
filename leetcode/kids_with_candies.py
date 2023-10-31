# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

candies = [2,3,5,1,3]
extraCandies = 3
result = []

def kidsWithCandies(candies, extraCandies):
    m = max(candies)
    for i in range(len(candies)):
        if candies[i]+extraCandies >= len(candies):
            result.append(True)
        else:
            result.append(False)
    
    return result


print(kidsWithCandies(candies, extraCandies))