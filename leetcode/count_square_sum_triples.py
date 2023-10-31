# https://leetcode.com/problems/count-square-sum-triples/

def countTriples(n):
    ans = []
    result = []

    for i in range(1, n):
        if (i^2 + (i+1)^2) == n^2:
            print("true")
        else:
            print("flase")

countTriples(10)