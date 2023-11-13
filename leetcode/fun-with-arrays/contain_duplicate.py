a = [0, 2, 3, 2, 1]

x = []
for i in range(0, len(a)-1):
    if x[a[i]]:
        print('true')
    else:
        x[a[i]] = 'true'
        
print('false')
        