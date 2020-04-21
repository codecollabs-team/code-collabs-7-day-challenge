# CODE COLLABS DAY 1: CONVERTER CLASS
# REGINA BISSAI NZENZA
# 20/04/2020
# it's not great but i tried :)

import time

class Converter:
    """Allows for conversion of numbers between 1 and 50 inclusive"""
    
    # full string of converted integer will be built from this dictionary. I thought doing it
    # this way would mean I could avoind having two big dictionaries.
    intToStringDict = {"units":["","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"], "tensWith1":["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
                     "tens":["Twenty", "Thirty", "Forty", "Fifty"]}

    
    # I couldn't think of another way to do this :( so I just made a big dictionary that has
    # string to integer conversions.
    stringToIntDict = {"one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9,
                   "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, "seventeen":17, "eighteen":18, "nineteen":19,
                     "twenty":20, "twenty one":21, "twenty two":22, "twenty three":23, "twenty four":24, "twenty five":25, "twenty six":26, "twenty seven":27, "twenty eight":28, "twenty nine":29,
                     "thirty":30, "thirty one":31, "thirty two":32, "thirty four":34, "thirty five":35, "thirty six":36, "thirty seven":37, "thirty eight":38, "thirty nine":39,
                     "forty":40, "forty one":41, "forty two":42, "forty three":43, "forty four":44, "forty five":45, "forty six":46, "forty seven":47, "forty eight":48, "forty nine":49,
                     "fifty":50}
    
    def toString(self, integer):
        if integer < 51 and integer > 0:
            if len(str(integer)) == 1:
                # i.e. if the number is between 1 and 9 inclusive
                print(self.intToStringDict["units"][integer])
            elif len(str(integer)) == 2:
                # i.e. if it's between 10 and 50 inclusive
                if str(integer)[0] == "1":
                    # i.e. if it's between 10 and 19 inclusive. These numbers don't follow the same
                    # pattern that numbers 20 and above do, so they are hardcoded.
                    print(self.intToStringDict["tensWith1"][int(str(integer)[1])])
                else:
                    # building of the full string, starting with the first digit, i.e. the tens, then the
                    # second digit, i.e. the units
                    print(self.intToStringDict["tens"][int(str(integer)[0])-2],self.intToStringDict["units"][int(str(integer)[1])])
        else:
            print("Please have a number between 1 and 50 inclusive. I'm not clever enough to make a program that goes beyond that range.")
    
    def toInteger(self, string):
        # just in case the user uses dashes
        if "-" in string:
            string = string.replace("-", " ")
        string = string.lower()
        # this is if the user has made no typos, so the key is in the dictionary
        # string is converted to lowercase to match with keys so error isn't raised
        # if user makes no spelling mistakes, but uses capital letters
        # used try and except to allow for typos
        try:
            print(self.stringToIntDict[string])
        except KeyError:
            # if a spelling error is made
            keysList = list(self.stringToIntDict.keys())
            currentLettersMatched = 0
            mostLettersMatched = 0
            match = 0
            for i in keysList:
                # this if else statement determines range of nested for loop so IndexErrors
                # can be avoided
                if len(string) > len(i):
                    endrange = len(i)
                else:
                    endrange = len(string)
                for j in range(endrange):
                    # determining the closest match to the misspelt word
                    if i[j] == string[j]:
                        currentLettersMatched +=1
                    if currentLettersMatched > mostLettersMatched:
                        mostLettersMatched = currentLettersMatched
                        match = i
                currentLettersMatched = 0
            print(self.stringToIntDict[match])

# creating Converter object
convert = Converter()

t1 = time.time()
convert.toString(4)
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toString(19)
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toString(25)
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toString(70)
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toString(0)
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()

t1 = time.time()
convert.toInteger("Four")
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toInteger("forty-four")
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toInteger("twanty fo")
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
t1 = time.time()
convert.toInteger("tHiRty NIne")
t2 = time.time()
print("runtime for this call: ", t2 - t1)
print()
