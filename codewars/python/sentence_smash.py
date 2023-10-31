# ref: https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python

def smash(words):
    if words == "":
        return ""
    result = []
    for i in range(len(words)):
        result.append(words[i])
        
    return " ".join(result)

words = ["ana", "mere", "pere", "!"]

print(smash(words))
 