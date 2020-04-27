package mysort

// MySort sorts an unordered array
func MySort(numbers []int) []int {
	for i := len(numbers); i > 0; i-- {
		for j := 1; j < i; j++ {
			if numbers[j-1] > numbers[j] {
				n := numbers[j]
				numbers[j] = numbers[j-1]
				numbers[j-1] = n
			}
		}
	}
	return numbers
}
