# https://leetcode.com/problems/palindrome-number/description/

def isPalindrome(x):
    l1 = [0] * len(str(x)) # [0, 0, 0]
    find = str(x) # "121"

    for i in range(len(find)):
        l1[i] = find[i] # l1[0] = "1", l1[1] = "2", l1[2] = "1"

    if l1 == l1[::-1]:
        return True
    else:    
        return False

print(isPalindrome(121))
print(isPalindrome(-121))
print(isPalindrome(10))
