package mysort

import (
	"reflect"
	"testing"
)

func TestMySort(t *testing.T) {
	arr := []int{2, 4, 3, 5, 1}
	t.Run("should sort unordered array", func(t *testing.T) {
		expectedArr := []int{1, 2, 3, 4, 5}
		orderArr := MySort(arr)
		reflect.DeepEqual(orderArr, expectedArr)
	})
}
