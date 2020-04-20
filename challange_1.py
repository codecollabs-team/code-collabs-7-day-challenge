class Converter:
    def toString(self,i):
        self.string_value = ''
        self.int_value = 0
        self.splitted = ['','']
        self.decimal = int(i/10)
        self.single = int(i%10)
        self.tensValue(i)
        return self.string_value
    def toInteger(self,s):
        self.int_value = 0
        self.string_value = ''
        self.splitted = ['','']
        self.decimal = None
        self.single = None
        self.spl = s.split('-')
        self.splitted[0] = self.spl[0]
        if self.spl.__len__() == 2:
            self.splitted[1] = self.spl[1]
            self.tensValue(1)
        self.tensValue(1)
        return self.int_value
    def singleValue(self,single):
        if single == 1 or self.splitted[1] == 'one':
            self.string_value += '-one'
            self.int_value += 1
        elif single == 2 or self.splitted[1] == 'two':
            self.string_value += '-two'
            self.int_value += 2
        elif single == 3 or self.splitted[1] == 'three':
            self.string_value += '-three'
            self.int_value += 3
        elif single == 4 or self.splitted[1] == 'four':
            self.string_value += '-four'
            self.int_value += 4
        elif single == 5 or self.splitted[1] == 'five':
            self.string_value += '-five'
            self.int_value += 5
        elif single == 6 or self.splitted[1] == 'six':
            self.string_value += '-six'
            self.int_value += 6
        elif single == 7 or self.splitted[1] == 'seven':
            self.string_value += '-seven'
            self.int_value += 7
        elif single == 8 or self.splitted[1] == 'eight':
            self.string_value += '-eight'
            self.int_value += 8
        elif single == 9 or self.splitted[1] == 'nine':
            self.string_value += '-nine'
            self.int_value += 9
    def tensValue(self,i):
        if self.decimal == 1 and self.single == 0 or self.splitted[0] == 'ten':
            self.string_value += 'ten'
            self.int_value += 10
        elif self.decimal == 1 or self.splitted[1] == None:
            if i == 11 or self.splitted[0] == 'eleven':
                self.string_value += 'eleven'
                self.int_value += 11
            elif i == 12 or self.splitted[0] == 'twelve':
                self.string_value += 'twelve'
                self.int_value += 12
            elif i == 13 or self.splitted[0] == 'thirteem':
                self.string_value += 'thirteen'
                self.int_value += 13
            elif i == 14 or self.splitted[0] == 'fourteen':
                self.string_value += 'fourteen'
                self.int_value += 14
            elif i == 15 or self.splitted[0] == 'fifteen':
                self.string_value += 'fifteen'
                self.int_value += 15
            elif i == 16 or self.splitted[0] == 'sixteen':
                self.string_value += 'sixteen'
                self.int_value += 16
            elif i == 17 or self.splitted[0] == 'seventeen':
                self.string_value += 'seventeen'
                self.int_value += 17
            elif i == 18 or self.splitted[0] == 'eighteen':
                self.string_value += 'eighteen'
                self.int_value += 18
            elif i == 19 or self.splitted[0] == 'nineteen':
                self.string_value += 'nineteen'
                self.int_value += 19
            else:
                print('Error bei den zehnern!')
        elif self.decimal == 2 or self.splitted[0] == 'twenty':
            self.string_value += 'twenty'
            self.int_value += 20
            self.singleValue(self.single)
        elif self.decimal == 3 or self.splitted[0] == 'thirty':
            self.string_value += 'thirty'
            self.int_value += 30
            self.singleValue(self.single)
        elif self.decimal == 4 or self.splitted[0] == 'forty':
            self.string_value += 'forty'
            self.int_value += 40
            self.singleValue(self.single)
        elif self.decimal == 5 or self.splitted[0] == 'fifty':
            self.string_value += 'fifty'
            self.int_value += 50
            self.singleValue(self.single)
        elif self.decimal == 6 or self.splitted[0] == 'sixty':
            self.string_value += 'sixty'
            self.int_value += 60
            self.singleValue(self.single)
        elif self.decimal == 7 or self.splitted[0] == 'seventy':
            self.string_value += 'seventy'
            self.int_value += 70
            self.singleValue(self.single)
        elif self.decimal == 8 or self.splitted[0] == 'eighty':
            self.string_value += 'eighty'
            self.int_value += 80
            self.singleValue(self.single)
        elif self.decimal == 9 or self.splitted[0] == 'ninety':
            self.string_value += 'ninety'
            self.int_value += 90
            self.singleValue(self.single)
        else:
            print( str(i) + " is larger than 100")

c = Converter()
print(c.toString(82))
print(c.toInteger("ten"))
print(c.toString(45))
