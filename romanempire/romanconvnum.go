package romanconvnum

// ConvertRomanToNumbers converts a roman numeral to an integer
func ConvertRomanToNumbers(n string, num map[string]int64) int64 {
	number := int64(0)

	for i := 0; i < len(n); i++ {
		firstString := string(n[i])
		firstStringValue := num[firstString]
		if i < len(n)-1 {
			otherStrings := string(n[i+1])
			otherStringsValue := num[otherStrings]

			if firstStringValue < otherStringsValue {
				number += otherStringsValue - firstStringValue
				i++
			} else {
				number += firstStringValue
			}

		} else {
			number += firstStringValue
		}
	}
	return number
}
