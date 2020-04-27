import numpy as np
class converter:
    def toDecimal(self,s):
        self.binarList = list(s)
        self.potenz = 2**(len(self.binarList)-1)
        self.dec = 0
        for x in self.binarList:
            self.dec += int(x)*self.potenz
            self.potenz = self.potenz/2
        return self.dec
    def toBinary(self,i):
        self.integer = i
        self.bina = []
        self.potenz = 1
        #searching
        while self.integer > self.potenz:
            self.potenz = self.potenz*2
        #add 1 or 0
        while self.potenz >= 1:
            if self.integer-self.potenz >= 0:
                self.bina.append(1)
                self.integer -= self.potenz
            else:
                self.bina.append(0)
            self.potenz = self.potenz/2
        if self.bina[0] == 0:
            self.bina.pop(0)
        self.conver = [str(i) for i in self.bina]
        self.res = int("".join(self.conver))
        return self.res

Converter = converter()
print(Converter.toBinary(16))