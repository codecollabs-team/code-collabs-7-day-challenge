def mySort(a):
    sortedArray = a
    for x in a:
        if a[x] > a[x+1]:
            sortedArray[x] = a[x]