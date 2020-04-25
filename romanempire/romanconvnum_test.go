package romanconvnum

import (
	"fmt"
	"testing"
)

func TestConvertRomanToNumbers(t *testing.T) {
	mapRomanToNumbers := map[string]int64{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	t.Run("should return 4 given IV", func(t *testing.T) {
		expectedNum := int64(4)
		number := ConvertRomanToNumbers("IV", mapRomanToNumbers)
		if number != expectedNum {
			t.Errorf("IV should return 4 but got: %d", expectedNum)
		}
	})

	t.Run("should return 1104 given MCIV", func(t *testing.T) {
		expectedNum := int64(1104)
		number := ConvertRomanToNumbers("MCIV", mapRomanToNumbers)
		if number != expectedNum {
			fmt.Println(number)
			t.Errorf("MCIV should return 2004 but got: %d", expectedNum)
		}

	})

	t.Run("should return 3999 given MMMCMXCIX", func(t *testing.T) {
		expectedNum := int64(3999)
		number := ConvertRomanToNumbers("MMMCMXCIX", mapRomanToNumbers)
		if number != expectedNum {
			fmt.Println(number)
			t.Errorf("MCIV should return 2004 but got: %d", expectedNum)
		}
	})
}
