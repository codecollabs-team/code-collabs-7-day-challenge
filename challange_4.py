def mySort(a):
    sortedArray = a
    x = 0
    while x < (len(a)-1):
        if sortedArray[x] > sortedArray[x+1]:
            copy = sortedArray[x]
            sortedArray[x] = sortedArray[x+1]
            sortedArray[x+1] = copy
            x += 1
        else:
            x += 1
    return sortedArray

print(mySort([1,3,60,4,77,500]))
