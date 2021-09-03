/**
 * 插入排序
 * 
 * 构建有序数列，对于未排序数据，在已排序序列中从后向前扫描，找到对应的位置插入
 */

function insertSort(arr) {
  var len = arr.length

  for (var index = 1; index < len; index++) {
    var ele = arr[index]
    var end = index
    while (end > 0 && ele < arr[end - 1]) {
      arr[end] = arr[end - 1]
      end--
    }
    arr[end] = ele
  }
  return arr
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37]
console.log(insertSort(arr))



