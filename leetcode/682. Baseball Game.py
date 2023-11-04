# https://leetcode.com/problems/baseball-game/description/

# def calPoints(operations):
#     temp = []
#     op = ["5","2","C","D","+"]
#     for i in range(len(op)):
#         match op[i]:
#             case int(i):
#                 temp.append(int(i))
#             case 'C':
#                 temp.remove(temp[-1])
#             case 'D':
#                 temp.append(2*temp[-1])
#             case '+':
#                 temp.append(temp[-1] + temp[-2])
#     return sum(temp)

# op = ["5","2","C","D","+"]

def calPoints(operations):
    temp = []
    for i in range(len(operations)):
        if operations[i].isdigit():
            temp.append(int(operations[i]))
        elif operations[i] == 'C':
            temp.pop()
        elif operations[i] == 'D':
            if temp:
                temp.append(2 * temp[-1])
        elif operations[i] == '+':
            temp.append(temp[-1] + temp[-2])
    
    return sum(temp)

op = ["5","-2","4","C","D","9","+","+"]
print(calPoints(op))

