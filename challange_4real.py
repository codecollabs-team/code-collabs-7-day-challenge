def roman(x):
    romannumber = ""
    x_input = x
    while x_input !=0:
        while x_input >= 1000:
            romannumber += "M"
            x_input -= 100
        while x_input >= 100:
            romannumber += "C"
            x_input -= 100
        while x_input >= 10:
            romannumber += "X"
            x_input -= 10
        while x_input >= 1:
            romannumber += "|"
            x_input -= 1
    print(romannumber)
def rom_to_int(x):
    number = 0
    roman_list = list(x)
    for a in range(len(x)-1):
        if roman_list[a] == "|" and roman_list[a+1] != '|':
            number -= 1
        if roman_list[a] == "|" and roman_list[a+1] == '|':
            number += 1
        if roman_list[a] == "M" and (roman_list[a + 1] == 'M' or roman_list[a + 1] == 'C' or roman_list[a + 1] == 'X' or roman_list[a + 1] == '|'):
            number += 1000
        if roman_list[a] == 'C' and roman_list[a+1] == "M":
            number -= 100
        if roman_list[a] == "C" and (roman_list[a + 1] == 'X' or roman_list[a+1] == "|"):
            number += 100
        if roman_list[a] == "X" and roman_list[a+1] == ("M" or "C"):
            number -= 10
        if roman_list[a] == "X" and roman_list[a+1] != ("M" or "C"):
            number += 10
    if roman_list[len(x)-1] == "|":
        number += 1
    elif roman_list[len(x)-1] == "C":
        number += 100
    elif roman_list[len(x)-1] == "X":
        number += 10
    print(number)

roman(25)
rom_to_int("XXX")