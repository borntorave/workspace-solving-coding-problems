def test(s):
    for i in range(s+1):
        if((i % 3) and (i % 5)) == 0:
            print("buzz")
        else:
            print(i)

test(21)