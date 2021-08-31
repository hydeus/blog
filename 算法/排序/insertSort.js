/**
 * 插入排序
 */

function insertSort(arr) {
  for (var index = 1, len = arr.length; index < len; index++) {
    var ele = arr[index]
    var end = index
    while(end > 0 && ele < arr[end - 1]) {
      arr[end] = arr[end - 1]
      end--
    }
    arr[end] = ele
  }
  return arr
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(insertSort(arr))

