class Converter:
    # instantiate the class Converter
    def __init__(self):
        # List of single digits and teen numbers
        self.firstAndSecondDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                                     "ten", "elven",
                                     "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
                                     "nineteen"]
        # List of tens numbers
        self.tens = ["null", "ten", "twenty", "thirty", "forty", "fifty"]
        print("Welcome to my converter program")
        # Menu code
        choice = int(input("""
        Enter the number of the function you want to do
        1)Convert a number to text
        2)convert text to a number"""))
        if choice == 1:
            self.toString(self.firstAndSecondDigits, self.tens)
        if choice == 2:
            self.toInteger(self.firstAndSecondDigits, self.tens)

    def toString(self, firstAndSecondDigits, tens):
        integerInput = int(input("Enter the number you want to turn into text"))
        if int(integerInput) < 20:
            # Outputs the word in list using the matching number as the index number
            print(firstAndSecondDigits[integerInput])
        if int(integerInput) >= 20:
            # Separates the user's input into a list
            inputSeperated = list(map(int, str(integerInput)))
            # Takes the item in the new list and uses that as a index for the main lists
            firstdigit = (tens[inputSeperated[0]])
            seconddigit = (firstAndSecondDigits[inputSeperated[1]])
            # Outputs the first digit as a word if the input is a tens number
            if seconddigit == "zero":
                print(str(firstdigit))
            else:
                finalWord = str(firstdigit) + "-" + str(seconddigit)
                print(finalWord)

    # tostring()
    def toInteger(self, firstAndSecondDigits, tens):
        stringInput = str(input("Enter the text you want to turn into a number"))
        dashToBeRemoved = "-"
        # Checks to see if the user's input has a dash
        if dashToBeRemoved in stringInput:
            # Removes the dash
            twoDigitNumberSplit = stringInput.split("-")
            # Takes the input that was split as a index for the main lists
            firstWord = tens.index(twoDigitNumberSplit[0])
            secondWord = firstAndSecondDigits.index(twoDigitNumberSplit[1])
            finalnumber = str(firstWord) + str(secondWord)
            print(finalnumber)
        else:
            # Outputs tens number if the user input matches
            tensWord = firstAndSecondDigits.index(stringInput)
            print(tensWord)


Converter()
