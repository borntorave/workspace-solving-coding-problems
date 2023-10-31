def bubblesort_once(l):
    l = l.copy()  # create a copy of the original list
    for i in range(1, len(l)):
        if l[i] < l[i - 1]:
            l[i], l[i - 1] = l[i - 1], l[i]
    return l

